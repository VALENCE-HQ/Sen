# Sen

A JS-first alternative to writing HTML, with the ergonomics of a Roblox UI library
(Rayfield, Fluent, Linoria), rendered with shadcn/ui. No JSX, no state wiring.

```js
const Button = Sen.Button({ text: "Click Me", variant: "primary", size: 48 })

Button.Then("Pressed")(() => {
  print("clicked")
})

Sen.Mount(Button, "#app")
```

## Install

```
node install.mjs                       # install deps, typecheck, test, build
node install.mjs --into ../my-app      # ...and install Sen into another project (Tauri, Vite, ...)
node install.mjs --dry-run             # show what would happen
```

Needs Node 18+. It produces:

| File | For |
| --- | --- |
| `dist/sen.js` | npm / Vite / Tauri (ESM) |
| `dist/sen.global.js` | `<script>` tags, userscripts (defines `window.Sen`) |
| `dist/types/` | TypeScript declarations |

Open `examples/hello.html` after building. For Tauri see `examples/tauri.md`.
React is bundled in; you never import or install it.

### Edit a component's source

Eject an editable renderer into your app without changing SEN's handle-based, no-JSX API:

```sh
npx sen-eject Button Dialog
npx sen-eject --list
```

By default, files are written to `src/sen/ejected`. Import that folder's `index.ts` once from
your app entry. Ejected renderers delegate to the built-in renderer until edited; use
`CreateView("button", props, child)` from `sen` to return React elements without JSX, then
register the edited renderer through the generated adapter. `Sen.Button(...)` and the other
no-JSX factories remain unchanged.

## The API

Every `Sen.X(...)` takes a config object and returns a **handle**.

```js
const Speed = Sen.Slider({ label: "Speed", min: 0, max: 100, value: 50, flag: "speed" })

Speed.Get()                     // 50
Speed.Set(80)                   // set the value (fires Changed)
Speed.Set(80, true)             // ...silently
Speed.Set({ label: "Velocity", disabled: true })   // patch props
Speed.SetVisible(false)
Speed.Destroy()                 // also destroys anything nested inside it

Sen.Flags.speed                 // read by flag name, no reference needed
Sen.Flags.speed = 20            // write (fires Changed)
```

Value-bearing elements also accept the bare value: `Sen.Text("Hello")`, `Sen.Slider(5)`.
Unknown option names warn instead of being silently ignored.

Every component accepts shared root customization options:

```js
const saveButton = Sen.Button({
  text: "Save",
  className: "my-button",
  style: { color: "rebeccapurple", "--button-height": "48px" },
  attributes: { id: "save", "data-testid": "save-button", "aria-label": "Save changes" },
  animation: { name: "enter", duration: 300, easing: "ease-out" },
})
```

`className` is appended to built-in classes, `style` overrides built-in inline styles, and
`attributes` supports common DOM attributes plus `data-*` and `aria-*`. Use `.Set({...})` to
update these options after creation. Event handlers remain available through the typed `.Then(...)` API.
Because Sen renders into a shadow root, provide styles for custom classes through `Mount`:

```js
Sen.Mount([saveButton], "#app", {
  styles: `
    @keyframes enter {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .my-button { background: rebeccapurple; color: white; }
  `,
})
```

Opt into a named animation per component with `animation: { name: "enter", duration: 300 }`.
Options include `easing`, `delay`, `iterations`, `direction`, and `fillMode`. Sen disables
these animations when the user has enabled reduced motion.

### Events: `Then`

Both shapes work, both return the handle, and callback arguments are typed per event.

```js
Button.Then("Pressed", () => { ... })
Button.Then("Pressed")(() => { ... })

Button.Then("Pressed", save).Then("Hovered")((isHovering) => { ... })   // chains

const whenPressed = Button.Then("Pressed")   // reusable half-applied step
whenPressed(() => a())
whenPressed(() => b())
```

A typo like `Then("Pressd")` is a compile error in TypeScript.

### Elements and their events

| Element | Main value | Events |
| --- | --- | --- |
| `Button` | `text` | `Pressed`, `Released`, `Hovered(bool)` |
| `Input` | `value` (string) | `Changed(v)`, `Submitted(v)`, `Focused(bool)` |
| `Switch` | `value` (bool) | `Changed(on)`, `Toggled(on)` |
| `Checkbox` | `value` (bool) | `Changed(on)`, `Toggled(on)` |
| `Select` | `value` (string) | `Changed(v)` |
| `Slider` | `value` (number) | `Changed(v)` while dragging, `Committed(v)` on release |
| `ColorPicker` | `value` (hex color) | `Changed(v)` |
| `Keybind` | `value` (shortcut) | `Changed(v)`, `Pressed` |
| `Progress` | `value` (0-100) | none |
| `Text`, `Badge` | `text` | none |
| `Tabs` | `value` (tab id) | `Changed(v)` |
| `Accordion` | `value` (open item id(s)) | `Changed(v)` |
| `Dialog`, `AlertDialog`, `Popover`, `Tooltip` | `open` (bool) | `Changed(open)`; AlertDialog also `Confirmed` |
| `Textarea` | `value` (string) | `Changed(v)`, `Focused(bool)` |
| `Alert`, `Avatar`, `AspectRatio`, `Breadcrumb`, `Label`, `Skeleton`, `Table` | varies | none |
| `Separator` | none | none |
| `Stack`, `Grid`, `Card` | none | none (containers; `.Add(...)` appends children) |

`Sen.Notify({ title, content, duration, variant })` shows a toast. `duration: 0` keeps it until dismissed.

Layout: `Stack({ direction, gap, align, justify, wrap, padding, children })`, `Grid({ columns, gap, children })`,
`Card({ title, description, children, footer })`. `gap: 2` means 2 x the theme's spacing unit.

```js
const Tabs = Sen.Tabs({
  label: "Settings",
  items: [
    { value: "profile", label: "Profile", content: Sen.Text("Profile settings") },
    { value: "security", label: "Security", content: Sen.Text("Security settings") },
  ],
})

const Accordion = Sen.Accordion({
  type: "single",
  collapsible: true,
  items: [{ value: "help", title: "Help", content: Sen.Text("More information") }],
})

const shortcut = Sen.Keybind({ label: "Open menu", value: "Ctrl+K" })
shortcut.Then("Pressed", () => Sen.Notify("Menu opened"))

const color = Sen.ColorPicker({ label: "Accent color", value: "#6366f1" })

const dialog = Sen.Dialog({
  title: "Edit profile",
  description: "Update your account details.",
  content: [Sen.Input({ label: "Name", value: "Sam" })],
})
Sen.Button({ text: "Edit profile" }).Then("Pressed", async () => {
  dialog.Open()
  await dialog.Wait()
  console.log("Dialog closed")
})

const confirm = Sen.AlertDialog({ title: "Delete item?", actionText: "Delete" })
confirm.Then("Confirmed", () => console.log("Confirmed"))
confirm.Open()

const popover = Sen.Popover({ trigger: "Options", content: [Sen.Text("Popover content")] })
const tooltip = Sen.Tooltip({ trigger: "Help", content: "More information" })

const notice = Sen.Alert({ title: "Saved", description: "Your changes are live." })
const avatar = Sen.Avatar({ src: "/avatar.png", alt: "Alex", fallback: "A" })
const path = Sen.Breadcrumb({ items: [{ label: "Home", href: "/" }, { label: "Settings" }] })
const notes = Sen.Textarea({ label: "Notes", rows: 4 })
const table = Sen.Table({ headers: ["Name", "Status"], rows: [["Build", "Ready"]] })
```

`Dialog`, `AlertDialog`, `Popover`, and `Tooltip` handles provide `Open()`, `Close()`, and
`Wait()`; `Wait()` resolves when the component closes (or immediately if already closed).
Overlay content portals into the SEN mount's shadow root so it stays styled and isolated.

The expanded catalog includes interactive calendar/date selection, carousels, charts, searchable data
tables, command menus, questionnaires, and chat primitives:

```js
const releaseDate = Sen.DatePicker({ label: "Release date", value: "2026-04-15" })
const chart = Sen.Chart({
  title: "Build minutes",
  type: "bar",
  data: [{ label: "Mon", value: 18 }, { label: "Tue", value: 25 }],
})
const deployments = Sen.DataTable({
  columns: [{ key: "name", label: "Deployment", sortable: true }],
  rows: [{ name: "web-main" }],
  pageSize: 5,
})
const carousel = Sen.Carousel({ items: [Sen.Text("First"), Sen.Text("Second")] })
carousel.Then("Changed", (index) => console.log("Slide", index))
```

`DataTable` includes local filtering, sorting, and pagination; `Chart` renders line or bar data to responsive
SVG. `Carousel` supports touch/pointer swipes, keyboard arrows, and button navigation. `Questionnaire`
advances through typed choice/freeform questions and emits `Answered` and `Completed`.
`InputOTP` uses one native, autofill-capable input for segmented slots, supports paste and deletion, and emits
completion events. `ColorPicker` provides an in-page, theme-token-styled hue, saturation, and brightness picker
alongside an editable hex field. `MessageScroller` follows new content only while the reader is already near the bottom.

Additional Shadcn Space patterns use component-specific SEN APIs:

```js
const rating = Sen.Rating({ label: "Satisfaction", value: 3.5, step: 0.5 })
const phone = Sen.InputMask({ label: "Phone", mask: "(###) ###-####", value: "4155550134" })
const framework = Sen.Autocomplete({ options: ["React", "Svelte", "Vue"] })
const uploads = Sen.FileUpload({ accept: "image/*", multiple: true, maxFiles: 3, maxSize: 5_000_000 })
const setup = Sen.Stepper({ steps: [{ id: "details", title: "Details" }, { id: "review", title: "Review" }] })
const sample = Sen.CodeBlock({ language: "ts", code: "const ready = true", showLineNumbers: true })
const marquee = Sen.Marquee({ children: ["Build", "Ship"], direction: "left", duration: 24, pauseOnHover: true })
const ticker = Sen.NumberTicker({ from: 0, value: 12_847, suffix: " builds", animateOnView: true })
const queue = Sen.Sortable({ items: [{ id: "build", label: "Build" }, { id: "deploy", label: "Deploy" }] })
```

Rating exposes a bounded numeric value; masks use `#` as a character slot and support numeric, alphanumeric,
or unrestricted input. Autocomplete emits `Selected` after keyboard or pointer selection. File upload validates
accepted MIME types/extensions and byte-size/file-count limits before emitting selected browser `File` objects
through `Selected` (the UI displays their metadata); rejected files emit `Rejected`. Stepper emits `Changed` when moving
between steps and `Completed` when its final action is pressed. CodeBlock emits `Copied` or `CopyFailed` so
clipboard errors are explicit.

Shadcn Space-inspired motion and navigation patterns include `AnimatedList` (staggered entrance),
`AnimatedText` (word/character reveal), `AppleDock` (orientation-aware, keyboard-navigable quick links),
`OrbitingCircles`, `ShineBorder`, `SpinningText`, and `Dots` (animated SVG characters with optional pointer
tracking). `Animation` is an accessible, keyboard-operable, pointer-tilting flip card. `Sortable` supports
native drag, touch pointer reordering, and arrow-key reordering, and emits the new item order through `Changed`.
All continuous motion responds to `prefers-reduced-motion`; marquee/orbit/spinning patterns can pause on hover.

### Theme tokens

```js
Sen.Theme({
  preset: "zinc",          // zinc | slate | rose | violet | blue | green | orange
  mode: "dark",            // dark | light | auto
  radius: "md",            // none | sm | md | lg | full, or a number of px
  size: "md",              // sm | md | lg scales controls; a number sets control height in px
  spacing: 4,              // base unit in px
  font: { sans: "Inter", mono: "JetBrains Mono", base: 14, scale: 1.2 },
  colors: { primary: "#6366f1", background: "#0a0a0a" },   // hex, rgb(), or "r g b"
})
Sen.Theme("rose")          // preset shorthand (resets color overrides)
```

Numeric sizes set the control height in pixels; padding and text retain the `md` scale.
`Button`, `Input`, and `Select` also accept a numeric `size` to override their own height.

Calls merge, and re-theme everything on screen live without re-rendering. `primary-foreground`
and the focus ring are derived from `primary` unless you set them. Sen doesn't load web fonts:
load them on the page and name the family.

### Saving settings

Any element with a `flag` is saved:

```js
await Sen.SaveConfig("profile1")
await Sen.LoadConfig("profile1")           // or a plain object, or a JSON string
Sen.SetStorage({ get, set })               // swap localStorage for a file, Tauri store, server...
```

## How it works

```
src/core/       nodes, handles, signals, flags, theme, config. No React, no DOM at import time.
src/registry/   one small descriptor per component: its props, defaults and events. Types derive from it.
src/renderer/   the only place React lives: one adapter per component, the shadow-DOM mount, toasts.
src/ui/         vendored shadcn-style components (Tailwind 3 + Radix).
```

`Sen.Button(...)` creates a **node** in the core. `Mount` renders nodes inside a shadow root, so
page CSS can't leak in and Sen's CSS can't leak out. Each node subscribes on its own, so
`Slider.Set(50)` re-renders that slider only.

Adding a component means a descriptor in `registry/components/`, an adapter in
`renderer/components/`, and an entry in `component-catalog.json`. Run `npm run components:sync`
to validate those files and regenerate the public exports and renderer wiring.

## Things to know

- **`print`** is not defined by default, because browsers already have `window.print()` (the print
  dialog). `Sen.InstallGlobals()` opts in. `Sen.print(...)` always works.
- **Tailwind 3, on purpose.** The compiled CSS avoids `@property`, `color-mix`, `@layer` and `oklch`
  so older webviews (WebKitGTK in Tauri on Linux) cope, and so it works inside a shadow root.
- **Overlays render inside the shadow root** (Select menus use a portal container Sen provides).
- `Input` values are always strings, including `type: "number"`.

## Component catalog

The component manifest is `component-catalog.json`. After adding a descriptor and renderer, run
`npm run components:sync` to regenerate the registry exports, `Sen.*` namespace entries, and adapter
registrations. This prevents catalog wiring from being repeated by hand while keeping each component's
behavior and tests explicit.

For a new compositional primitive, scaffold the descriptor, renderer, and catalog wiring with:

```sh
npm run components:new -- --name Callout --module callout --category display
```

The scaffold deliberately supplies only a generic `children` API. Implement component behavior and
tests explicitly; accessibility and interactions are component-specific and are not guessed by the generator.

`npm run components:discover` compares the current Shadcn Space component sitemap against exact SEN catalog
module names and reports possible aliases separately. To scaffold a reviewed subset of uncovered routes, use
`npm run components:discover -- --scaffold marquee,number-ticker --yes`. This opts into a generic scaffold only;
it does not claim to implement the source site's behavior. Never treat a possible alias as equivalent without
reviewing its API and behavior.

The catalog contains all 64 components from the requested shadcn-style list, five SEN primitives, and
17 additional components based on Shadcn Space patterns (86 total). The discovery script matches all
65 non-alias component routes; `sonner` remains a possible Toast alias and is not treated as equivalent
without API and behavior review.

## Status (v0.1)

The library has typed handle and theme APIs, 86 registered components, runtime root customization,
numeric control sizing, and opt-in keyframe animations. Component entry and overlay motion use shared,
reduced-motion-aware timing. Run `npm run typecheck`, `npm test`, and `npm run build` to validate changes.

## Roadmap

The catalog wiring and public exports are generated from the manifest. Complex components keep
component-specific behavior and tests, while shared menu, calendar, field, and overlay primitives reduce
repeated implementation. Some advanced patterns (for example, richer chart types and data-table features)
can continue to grow without changing the stable handle API.
