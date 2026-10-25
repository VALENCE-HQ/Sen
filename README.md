<div align=center>

<picture>
  <img width="244" height="244" alt="SenIcon" src="https://github.com/user-attachments/assets/ef2ea5aa-ea13-4d23-a61e-4be7d979afeb" />
</picture>

---
# Sen
</div>

A JS-first alternative to writing HTML, with the ergonomics of a Roblox UI library (Rayfield,
Fluent, Linoria), rendered with shadcn/ui. No JSX, no state wiring, no build step required.

```js
const Button = Sen.Button({ text: "Click Me", variant: "primary", size: 48 })

Button.Then("Pressed")(() => {
  print("clicked")
})

Sen.Mount(Button, "#app")
```

Every element is a **handle**: you create it, wire events to it, read and write its value, and
mount it. There are 86 components, one theme system, one config system, and React is bundled in —
you never import or install it.

---

## Contents

- [Install](#install)
- [The API in one page](#the-api-in-one-page)
- [Events: `Then`](#events-then)
- [Every element](#every-element)
  - [Layout and structure](#layout-and-structure)
  - [Text and display](#text-and-display)
  - [Buttons and actions](#buttons-and-actions)
  - [Inputs and forms](#inputs-and-forms)
  - [Pickers](#pickers)
  - [Overlays](#overlays)
  - [Menus and navigation](#menus-and-navigation)
  - [Data](#data)
  - [Chat](#chat)
  - [Feedback](#feedback)
  - [Motion and decoration](#motion-and-decoration)
- [Theming](#theming)
- [Saving settings](#saving-settings)
- [Toasts: `Notify`](#toasts-notify)
- [If you hate the declarative style](#if-you-hate-the-declarative-style)
- [How it works](#how-it-works)
- [Things to know](#things-to-know)
- [Extending Sen](#extending-sen)

---

## Install

```sh
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

### From a `<script>` tag

No bundler? Use the global build:

```html
<script src="dist/sen.global.js"></script>
<script>
  const panel = Sen.Card({ title: "Hello", children: [Sen.Text("World")] });
  Sen.Mount(panel, "#app");
</script>
```

## The API in one page

Every `Sen.X(...)` takes a config object and returns a **handle**.

```js
const Speed = Sen.Slider({ label: "Speed", min: 0, max: 100, value: 50, flag: "speed" })

Speed.Get()                     // 50 — the element's main value
Speed.Get("label")              // "Speed" — or any named prop
Speed.Set(80)                   // set the value (fires Changed)
Speed.Set(80, true)             // ...silently, no event
Speed.Set({ label: "Velocity", disabled: true })   // patch any props
Speed.SetVisible(false)         // hide it (still in the tree, just invisible)
Speed.Add(Sen.Text("km/h"))     // containers accept children
Speed.Destroy()                 // removes it, its flag, its listeners, and nested children

Sen.Flags.speed                 // read any flagged element's value by name
Sen.Flags.speed = 20            // write (fires Changed, same as .Set)
```

Value-bearing elements also accept the bare value: `Sen.Text("Hello")`, `Sen.Slider(5)`.
Unknown option names warn instead of being silently ignored — a typo like `Then("Pressd")` is a
compile error in TypeScript.

### Every element accepts these root options

```js
const saveButton = Sen.Button({
  text: "Save",

  className: "my-button",                    // appended to the built-in classes
  style: { color: "rebeccapurple", "--button-height": "48px" },  // merged over built-in styles
  attributes: {                              // any DOM attribute, incl. data-* and aria-*
    id: "save", "data-testid": "save-button", "aria-label": "Save changes",
  },
  animation: { name: "enter", duration: 300, easing: "ease-out" },  // opt-in keyframe
})
```

Because Sen renders into a shadow root, page CSS can't reach inside — so styles for your custom
classes go through `Mount`:

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

Animation options: `name`, `duration` (ms, default 250), `easing`, `delay`, `iterations`
(number or `"infinite"`), `direction`, `fillMode`. Sen disables animations when the user has
enabled reduced motion.

### Handles, summarized

| Method | What it does |
| --- | --- |
| `.Get()` / `.Get(prop)` | read the main value, or one named prop |
| `.Set(value, silent?)` | set the main value (fires `Changed` unless silent) |
| `.Set({ prop: ... })` | patch any props, re-rendering only that element |
| `.Then(event, fn)` | listen for an event; returns the handle, so it chains |
| `.Add(...items)` | append children to a container |
| `.SetVisible(bool)` | show / hide |
| `.Destroy()` | remove it and everything nested inside it |
| `.id` / `.type` | the element's generated id and its type name |

## Events: `Then`

Both shapes work, both return the handle, and callback arguments are typed per event.

```js
Button.Then("Pressed", () => { ... })
Button.Then("Pressed")(() => { ... })

Button.Then("Pressed", save).Then("Hovered")((isHovering) => { ... })   // chains

const whenPressed = Button.Then("Pressed")   // reusable half-applied step
whenPressed(() => a())
whenPressed(() => b())
```

---

## Every element

Every element takes the root options above on top of its own props. The tables list each element's
main props, main value, and events. `gap: 2` in a layout means 2 × the theme's spacing unit
(default 4 px, so 8 px).

### Layout and structure

**`Stack`** — the box everything else is built from. No value.

| Prop | Meaning |
| --- | --- |
| `direction` | `"row"` or `"column"` |
| `gap` | spacing units between children |
| `padding` | spacing units around the children |
| `align` | `"start"`, `"center"`, `"end"`, `"stretch"` (cross axis) |
| `justify` | `"start"`, `"center"`, `"end"`, `"between"`, `"around"` (main axis) |
| `wrap` | wrap children onto a second line |
| `children` | handles, strings, or numbers |

```js
const toolbar = Sen.Stack({
  direction: "row",
  gap: 2,
  align: "center",
  children: [openButton, saveButton, Sen.Text("v1.2")],
})
```

**`Grid`** — fixed-column grid.

```js
Sen.Grid({ columns: 3, gap: 2, children: cards })
```

**`Card`** — titled panel. `title`, `description`, `children`, `footer`. No value.

```js
Sen.Card({ title: "Appearance", description: "Changes apply instantly.",
            children: [preset, mode], footer: [resetButton] })
```

**`ScrollArea`** — a scrollable region. `maxHeight` (px) or `maxWidth`, `children`.

```js
Sen.ScrollArea({ label: "Logs", maxHeight: 400, children: logLines })
```

**`Resizable`** — draggable split panes. `direction`, `children` (two or more panels).

**`Separator`** — a horizontal (or `vertical: true`) rule. No props, no value.

**`AspectRatio`** — keeps a fixed ratio: `ratio: 16/9`, `children`.

**`Direction`** — sets `dir: "rtl"` / `"ltr"` for its children.

**`Sidebar`** — collapsible app sidebar. `label`, `children`, value is its open state (bool),
events `Changed(open)` / `Toggled(open)`.

```js
const sidebar = Sen.Sidebar({ label: "Conversations", children: [nav, list] })
sidebar.Set(false)      // collapse it
```

**`Item`** — a list item used inside menus, sidebars and navigation trees.

### Text and display

| Element | Props | Notes |
| --- | --- | --- |
| `Text` | `text`, `size` (`"xs"`..`"2xl"`), `color` (`"default"`, `"muted"`, ...), `weight` | main value is the string |
| `Typography` | `variant: "h1".."h4"`, `p`, `blockquote`, `code`, `lead`, `muted` | pre-styled headings and paragraphs |
| `Label` | `text`, `for` | a field label |
| `Badge` | `text`, `variant` (`default`, `secondary`, `destructive`, `outline`) | small pill |
| `Kbd` | `text` | keyboard key, e.g. `Sen.Kbd("Ctrl+K")` |
| `Marker` | `text`, `highlight` | highlighted text |
| `Avatar` | `src`, `alt`, `fallback` | image with a letter fallback |
| `Attachment` | `name`, `fileSize`, `mediaType` | a file chip |
| `Empty` | `title`, `description`, `children` | empty-state block |
| `Skeleton` | — | loading placeholder shape |
| `Separator` | — | — |

```js
Sen.Stack({ direction: "column", gap: 1, children: [
  Sen.Typography({ variant: "h2", text: "Tansy" }),
  Sen.Badge({ text: "alpha", variant: "outline" }),
  Sen.Text({ text: "A quiet little client.", color: "muted", size: "sm" }),
] })
```

### Buttons and actions

| Element | Props | Value | Events |
| --- | --- | --- | --- |
| `Button` | `text`, `variant` (`primary`, `secondary`, `outline`, `ghost`, `destructive`, `link`), `size` (px or preset), `fullWidth` | text | `Pressed`, `Released`, `Hovered(bool)` |
| `ButtonGroup` | `children` (buttons), `orientation` | — | — |
| `Toggle` | `text`, `value` | bool | `Changed(on)`, `Toggled(on)` |
| `ToggleGroup` | `items`, `type` (`"single"`, `"multiple"`) | selection | `Changed(v)` |
| `Keybind` | `label`, `value` | shortcut string | `Changed(v)`, `Pressed` |

```js
const del = Sen.Button({ text: "Delete", variant: "destructive", size: 36 })
del.Then("Pressed", () => confirm.Open())

const group = Sen.ToggleGroup({ type: "single", items: [
  { value: "day", label: "Day" }, { value: "week", label: "Week" },
] })
group.Then("Changed", (v) => filter(v))
```

### Inputs and forms

| Element | Props | Value | Events |
| --- | --- | --- | --- |
| `Input` | `label`, `placeholder`, `value`, `type`, `description`, `disabled` | string | `Changed(v)`, `Submitted(v)`, `Focused(bool)` |
| `Textarea` | `label`, `rows`, `value`, `description` | string | `Changed(v)`, `Focused(bool)` |
| `Select` | `label`, `options` (strings or `{ label, value }`), `value` | string | `Changed(v)` |
| `NativeSelect` | same as Select, renders the OS dropdown | string | `Changed(v)` |
| `Checkbox` | `label`, `value` | bool | `Changed(on)`, `Toggled(on)` |
| `Switch` | `label`, `description`, `value` | bool | `Changed(on)`, `Toggled(on)` |
| `RadioGroup` | `label`, `options`, `value` | string | `Changed(v)` |
| `Slider` | `label`, `min`, `max`, `step`, `value` | number | `Changed(v)` while dragging, `Committed(v)` on release |
| `Autocomplete` | `label`, `options`, `value` | string | `Changed(v)`, `Selected(v)` |
| `Combobox` | `label`, `options`, `value`, `searchable` | string | `Changed(v)` |
| `FileUpload` | `accept`, `multiple`, `maxFiles`, `maxSize` | — | `Selected(files)`, `Rejected(errors)` |
| `InputGroup` | `children` (Input + buttons) | — | — |
| `Field` | `label`, `description`, `error`, `children` | — | wraps any control with label + help text |

```js
const email = Sen.Input({
  label: "Email",
  placeholder: "you@example.com",
  type: "email",
  description: "We never send mail you don't ask for.",
})
email.Then("Submitted", (v) => subscribe(v))

const volume = Sen.Slider({ label: "Volume", min: 0, max: 100, step: 1, value: 40 })
volume.Then("Committed", (v) => audio.volume = v / 100)

const uploads = Sen.FileUpload({ accept: "image/*", multiple: true, maxFiles: 3 })
uploads.Then("Selected", (files) => upload(files))
```

`Input` values are always strings, including `type: "number"` — convert with `Number(...)`.

### Pickers

| Element | Props | Value | Events |
| --- | --- | --- | --- |
| `DatePicker` | `label`, `value` (`"YYYY-MM-DD"`), `min`, `max` | date string | `Changed(v)` |
| `Calendar` | `value`, `range` | date string | `Changed(v)` |
| `ColorPicker` | `label`, `value` (hex) | hex string | `Changed(v)` |
| `InputMask` | `label`, `mask` (`#` = slot), `value` | string | `Changed(v)` |
| `InputOTP` | `length`, `value` | string | `Changed(v)`, `Completed(v)` |

```js
const phone = Sen.InputMask({ label: "Phone", mask: "(###) ###-####" })
const otp = Sen.InputOTP({ label: "One-time code", length: 6 })
otp.Then("Completed", (code) => verify(code))
```

`InputOTP` uses one native, autofill-capable input for the segmented slots and supports paste and
backspace across slots. `ColorPicker` includes an in-page hue/saturation/brightness picker plus an
editable hex field.

### Overlays

All openables provide `Open()`, `Close()`, `Wait()`, a bool value and `Changed(open)`.
`Wait()` resolves when the component closes (or immediately if already closed). Overlay content
portals into the mount's shadow root, so it stays themed and isolated.

| Element | Props |
| --- | --- |
| `Dialog` | `title`, `description`, `content` (children), `actionText` |
| `AlertDialog` | same + `cancelText`; adds a `Confirmed` event |
| `Popover` | `trigger` (text or handle), `content` |
| `Tooltip` | `trigger`, `content` |
| `DropdownMenu` | `trigger`, `items` (`{ label, onSelect, danger, separator }`) |
| `ContextMenu` | `items`; opens on right-click of its trigger |
| `Drawer` | `title`, `side` (`"left"`, `"right"`, `"bottom"`), `content` |
| `Sheet` | like Drawer, slides from an edge |
| `HoverCard` | `trigger`, `content`; opens on hover |
| `Toast` | `title`, `content`, `variant`, `duration` |

```js
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
confirm.Then("Confirmed", () => doDelete())

const menu = Sen.DropdownMenu({ trigger: "Options", items: [
  { label: "Rename", onSelect: rename },
  { label: "Duplicate", onSelect: duplicate },
  { separator: true },
  { label: "Delete", danger: true, onSelect: remove },
] })

const tip = Sen.Tooltip({ trigger: "Help", content: "Offsets are in tokens." })
```

### Menus and navigation

| Element | Props | Value | Events |
| --- | --- | --- | --- |
| `Tabs` | `label`, `items` (`{ value, label, content }`) | active tab id | `Changed(v)` |
| `Menubar` | `items` (nested menus) | — | — |
| `NavigationMenu` | `items` | — | — |
| `Breadcrumb` | `items` (`{ label, href }`) | — | — |
| `Pagination` | `page`, `total` | page number | `Changed(v)` |
| `Stepper` | `steps` (`{ id, title, description }`) | step index | `Changed(v)`, `Completed` |
| `Accordion` | `type` (`"single"`, `"multiple"`), `collapsible`, `items` (`{ value, title, content }`) | open id(s) | `Changed(v)` |
| `Collapsible` | `trigger`, `content` | open (bool) | `Changed(open)` |
| `AppleDock` | `items` (`{ label, icon, onPress }`) | hovered item | magnifying dock |

```js
const tabs = Sen.Tabs({ label: "Settings", items: [
  { value: "profile", label: "Profile", content: Sen.Text("Profile settings") },
  { value: "security", label: "Security", content: Sen.Text("Security settings") },
] })
tabs.Set("security")          // switch tabs from code

const wizard = Sen.Stepper({ steps: [{ id: "details", title: "Details" },
                                      { id: "review", title: "Review" }] })
wizard.Then("Completed", () => submit())

const faq = Sen.Accordion({ type: "single", collapsible: true, items: [
  { value: "help", title: "Help", content: Sen.Text("More information") },
] })
```

### Data

| Element | Props | Notes |
| --- | --- | --- |
| `Table` | `headers`, `rows`, `caption` | plain static table |
| `DataTable` | `columns` (`{ key, label, sortable }`), `rows`, `pageSize` | filtering, sorting and pagination built in |
| `Chart` | `title`, `type` (`"line"`, `"bar"`), `data` (`{ label, value }`), `height` | responsive SVG |
| `Progress` | `label`, `value` (0–100), `showValue` | value is the number |
| `Carousel` | `items` | value is the slide index; touch, keyboard and button nav |
| `Sortable` | `items` (`{ id, label }`) | native drag, touch and arrow-key reordering; `Changed(order)` |
| `AnimatedList` | `children` | staggered entrance list |

```js
const runs = Sen.DataTable({
  columns: [
    { key: "run", label: "Run", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "loss", label: "Loss", sortable: true },
  ],
  rows: [{ run: "baseline", status: "done", loss: "2.41" }],
  pageSize: 5,
})

const loss = Sen.Chart({ title: "Loss over steps", type: "line",
  data: [{ label: "100", value: 2.41 }, { label: "200", value: 1.87 }] })
```

### Chat

| Element | Props | Notes |
| --- | --- | --- |
| `Message` | `author`, `timestamp`, `align` (`"start"`, `"end"`), `children` | one message row |
| `Bubble` | `align`, `variant`, `children` | the colored bubble inside a message |
| `MessageScroller` | `children`, `maxHeight` | auto-follows new content only while the reader is already near the bottom |

```js
const feed = Sen.MessageScroller({ maxHeight: 480, children: [
  Sen.Message({ author: "You", timestamp: "14:02", align: "end", children: [
    Sen.Bubble({ align: "end", children: [Sen.Text("Hey!")] }),
  ]}),
]})
```

The `sen` package also ships a richer programmatic `Bubble` class (see Tansy's
`templates/interface/bubble`) that holds streamed text plus widget parts: code blocks, charts,
tables, buttons and more, with a pending spinner and copy actions.

### Feedback

| Element | Props | Notes |
| --- | --- | --- |
| `Alert` | `title`, `description`, `variant` (`default`, `destructive`) | inline callout |
| `Spinner` | `label`, `size` | — |
| `Progress` | above | — |
| `Rating` | `label`, `value`, `step`, `allowClear` | bounded number; `Changed(v)` |
| `Skeleton` | — | — |
| `Empty` | above | — |

```js
const rating = Sen.Rating({ label: "Satisfaction", value: 3.5, step: 0.5 })
```

### Motion and decoration

| Element | What it does |
| --- | --- |
| `AnimatedText` | word/character reveal for a string |
| `Marquee` | infinite horizontal scroll; `direction`, `duration`, `pauseOnHover` |
| `NumberTicker` | animates a number up from `from` to `value`; `suffix` |
| `OrbitingCircles` | items orbiting a center |
| `ShineBorder` | animated shine on a card's border |
| `SpinningText` | rotating text |
| `Dots` | animated SVG characters with optional pointer tracking |
| `Animation` | accessible flip card (`flipOnHover`), value is flipped state |

```js
Sen.NumberTicker({ from: 0, value: 12847, suffix: " tokens/s" })
Sen.Marquee({ children: ["Build", "Ship"], direction: "left", pauseOnHover: true })
```

All continuous motion respects `prefers-reduced-motion`; marquee/orbit/spinning patterns can pause
on hover.

---

## Theming

```js
Sen.Theme({
  preset: "zinc",          // zinc | slate | rose | violet | blue | green | orange
  mode: "dark",            // dark | light | auto (follows the OS)
  radius: "md",            // none | sm | md | lg | full, or a number of px
  size: "md",              // sm | md | lg scales controls; a number sets control height in px
  spacing: 4,              // base unit in px
  font: { sans: "Inter", mono: "JetBrains Mono", base: 14, scale: 1.2 },
  colors: { primary: "#6366f1", background: "#0a0a0a" },   // hex, rgb(), or "r g b"
})
Sen.Theme("rose")          // preset shorthand (resets color overrides)
```

- Calls **merge**: anything you leave out keeps its current value, and everything on screen
  re-themes live without re-rendering.
- `primary-foreground` and the focus ring are derived from `primary` unless you set them.
- Numeric `size` sets the control height in pixels while padding and text keep the `md` scale;
  `Button`, `Input` and `Select` also accept their own numeric `size`.
- Sen doesn't load web fonts: load them on the page and name the family.
- `Sen.Theme()` with no arguments returns the current snapshot (`getTheme()`).

## Saving settings

Any element with a `flag` is saved:

```js
Sen.Slider({ label: "Speed", flag: "speed" })

await Sen.SaveConfig("profile1")
await Sen.LoadConfig("profile1")           // or a JSON string, or a plain object
Sen.SetStorage({ get, set })               // swap localStorage for a file, Tauri store, server...
```

`LoadConfig` returns `false` if nothing was found. The default storage is `localStorage`; pass your
own `{ get(key), set(key, value) }` (sync or async) to persist anywhere.

## Toasts: `Notify`

```js
Sen.Notify("just text")
Sen.Notify({ title: "Saved", content: "Your changes are live.", variant: "success", duration: 2.5 })
Sen.Notify({ title: "Working…", duration: 0 })   // 0 = stays until dismissed
```

`variant` is `"default"`, `"success"` or `"destructive"`. `duration` is in seconds (default 4).
Returns a handle with `.Dismiss()`. Toasts create their own host, so they work even before you
call `Mount`.

## If you hate the declarative style

Sen has no HTML/inline-markup syntax — the whole point is that JavaScript objects *are* the markup.
But if config objects feel wrong to you, there are two honest alternatives:

**1. The global build is still plain JS in a script tag** — no bundler, no build step, and it reads
like imperative UI code:

```html
<div id="app"></div>
<script src="dist/sen.global.js"></script>
<script>
  const name = Sen.Input({ label: "Name" });
  const go = Sen.Button({ text: "Go" });
  go.Then("Pressed", () => Sen.Notify("Hello " + name.Get()));
  Sen.Mount(Sen.Stack({ children: [name, go] }), "#app");
</script>
```

**2. `Sen.CreateView` — React without JSX.** Sen is React underneath (bundled in), and the escape
hatch is `CreateView`, which is React's `createElement`. This is the closest thing to "inline
markup": one function call per element, nesting by argument, no config-object indirection:

```js
import { Sen, CreateView } from "sen";

// CreateView(type, props, ...children)
const view = CreateView("div", { style: { display: "flex", gap: 8 } },
  CreateView("span", null, "Hello "),
  CreateView("strong", null, "world"),
);
Sen.Mount(view, "#app");       // Mount accepts raw React elements too
```

It's also how you write **custom renderers** when ejecting a component for editing
(`npx sen-eject Button Dialog` writes editable renderers to `src/sen/ejected`; they delegate to the
built-in ones until you change them, and you register the result with
`Sen.RegisterRenderer(name, adapter)`).

What there deliberately isn't: an HTML string parser or JSX loader. HTML-in-JS strings lose
event wiring, typing and the handle API — the two paths above cover the same ground without the
downsides. If you genuinely need markup, render it outside the mount point; Sen and plain DOM can
coexist on one page (they're isolated by the shadow root).

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

## Things to know

- **`print`** is not defined by default, because browsers already have `window.print()` (the print
  dialog). `Sen.InstallGlobals()` opts in. `Sen.print(...)` always works.
- **Tailwind 3, on purpose.** The compiled CSS avoids `@property`, `color-mix`, `@layer` and `oklch`
  so older webviews (WebKitGTK in Tauri on Linux) cope, and so it works inside a shadow root.
- **Overlays render inside the shadow root** (Select menus use a portal container Sen provides).
- `Input` values are always strings, including `type: "number"`.
- Unknown option names warn instead of being silently ignored.

## Extending Sen

### Eject a component and edit it

```sh
npx sen-eject Button Dialog      # writes editable renderers to src/sen/ejected
npx sen-eject --list
```

Ejected renderers delegate to the built-in renderer until edited. Use
`CreateView("button", props, child)` to return React elements without JSX, then register the edited
renderer through the generated adapter. `Sen.Button(...)` and the other factories are unchanged.

### Add a brand-new component

The component manifest is `component-catalog.json`. Adding a component means a descriptor in
`registry/components/`, an adapter in `renderer/components/`, and an entry in the catalog — then
`npm run components:sync` regenerates the registry exports, `Sen.*` namespace entries and adapter
wiring. Scaffold a new compositional primitive with:

```sh
npm run components:new -- --name Callout --module callout --category display
```

The scaffold deliberately supplies only a generic `children` API; behavior, accessibility and
interactions are implemented explicitly per component. `npm run components:discover` compares
Shadcn Space's component sitemap against Sen's catalog to report naming gaps.

The catalog contains all 64 components from the core shadcn-style list, five Sen primitives, and
17 additional components based on Shadcn Space patterns — 86 total.

## Status (v0.1)

Typed handle and theme APIs, 86 registered components, runtime root customization, numeric control
sizing, and opt-in keyframe animations. Component entry and overlay motion use shared,
reduced-motion-aware timing. Run `npm run typecheck`, `npm test`, and `npm run build` to validate
changes.

## Roadmap

The catalog wiring and public exports are generated from the manifest. Complex components keep
component-specific behavior and tests, while shared menu, calendar, field, and overlay primitives
reduce repeated implementation. Some advanced patterns (for example, richer chart types and
data-table features) can continue to grow without changing the stable handle API.
