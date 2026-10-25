#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = dirname(fileURLToPath(import.meta.url))
const args = process.argv.slice(2)
const { default: Sen } = await import(pathToFileURL(join(root, "dist/sen.js")).href)
const componentNames = Object.values(Sen)
  .filter((value) => typeof value === "function" && "def" in value)
  .map((value) => value.def.name)
  .sort()

function printHelp() {
  console.log(`Usage:
  npx sen-eject <Component...> [--into <directory>]
  npx sen-eject --list

Ejects editable, no-JSX renderer overrides. By default files go to src/sen/ejected.
Import that directory's index once from your app entry, then edit the generated files.
`)
}

let output = "src/sen/ejected"
let list = false
const requested = []

for (let i = 0; i < args.length; i++) {
  const arg = args[i]
  if (arg === "--help" || arg === "-h") {
    printHelp()
    process.exit(0)
  }
  if (arg === "--list") {
    list = true
    continue
  }
  if (arg === "--into") {
    const value = args[++i]
    if (!value || value.startsWith("--")) throw new Error("--into needs a directory path.")
    output = value
    continue
  }
  if (arg.startsWith("-")) throw new Error(`Unknown option "${arg}".`)
  requested.push(arg)
}

if (list) {
  console.log(componentNames.join("\n"))
  process.exit(0)
}

if (requested.length === 0) {
  printHelp()
  process.exit(1)
}

const byLowercase = new Map(componentNames.map((name) => [name.toLowerCase(), name]))
const selected = [...new Set(requested.map((name) => {
  const component = byLowercase.get(name.toLowerCase())
  if (!component) throw new Error(`Unknown component "${name}". Run "npx sen-eject --list" to see available names.`)
  return component
}))]

const target = resolve(output)
const indexPath = join(target, "index.ts")
const filePaths = selected.map((name) => join(target, `${name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}.ts`))
const existing = filePaths.find(existsSync)
if (existing) throw new Error(`Refusing to overwrite "${existing}". Move or rename it before ejecting.`)

mkdirSync(target, { recursive: true })
for (let i = 0; i < selected.length; i++) {
  const name = selected[i]
  const variable = `${name}Renderer`
  const filename = filePaths[i]
  const source = `import { GetDefaultRenderer, RegisterRenderer } from "sen"
import type { Adapter } from "sen"

const builtInRenderer = GetDefaultRenderer("${name}")

const ${variable}: Adapter = ({ node }) => {
  // Replace this call with a custom view; use CreateView from "sen" instead of JSX.
  return builtInRenderer({ node })
}

RegisterRenderer("${name}", ${variable})
`
  writeFileSync(filename, source, { flag: "wx" })
}

const imports = selected.map((name) =>
  `import "./${name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}"`,
)
const existingIndex = existsSync(indexPath) ? readFileSync(indexPath, "utf8") : ""
const additions = imports.filter((line) => !existingIndex.split(/\r?\n/).includes(line))
if (additions.length) {
  const separator = existingIndex.length && !existingIndex.endsWith("\n") ? "\n" : ""
  writeFileSync(indexPath, `${existingIndex}${separator}${additions.join("\n")}\n`)
}

console.log(`Ejected ${selected.join(", ")} into ${target}.`)
const fromSrc = relative(resolve(process.cwd(), "src"), target).replace(/\\/g, "/")
const importPath = fromSrc.startsWith(".") ? fromSrc : `./${fromSrc || "."}`
console.log(`Import "${importPath}" once from your app entry (adjust the relative path if it is not under src).`)
console.log('Generated adapters preserve the built-in component until you edit them. Use CreateView("button", props, child) for no-JSX markup.')
