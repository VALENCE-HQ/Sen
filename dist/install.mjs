#!/usr/bin/env node
// install.mjs — set up Sen.
//
//   node install.mjs                       install deps, typecheck, test, build
//   node install.mjs --into ../my-app      ...and copy the build into another project
//   node install.mjs --dry-run             show what would happen, change nothing
//
// Needs Node 18+. Run it from the repo root (next to package.json).

import { spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);

// ---------- helpers ----------

const log = (msg) => console.log(msg);
const step = (n, total, msg) => console.log(`\n[${n}/${total}] ${msg}`);

function fail(msg) {
  console.error(`\nerror: ${msg}`);
  process.exit(1);
}

function hasFlag(name) {
  return argv.includes(name);
}

function getValue(name) {
  const i = argv.indexOf(name);
  if (i === -1) return null;
  const v = argv[i + 1];
  if (!v || v.startsWith("--")) fail(`${name} needs a value, e.g. ${name} ../my-app`);
  return v;
}

function run(cmd, args, dryRun) {
  const shown = `${cmd} ${args.join(" ")}`;
  if (dryRun) {
    log(`  (dry-run) would run: ${shown}`);
    return;
  }
  log(`  $ ${shown}`);
  const res = spawnSync(cmd, args, {
    cwd: ROOT,
    stdio: "inherit",
    shell: process.platform === "win32", // npm is npm.cmd on Windows
  });
  if (res.error) fail(`could not run "${shown}": ${res.error.message}`);
  if (res.status !== 0) fail(`"${shown}" failed with exit code ${res.status}`);
}

// ---------- args ----------

if (hasFlag("--help") || hasFlag("-h")) {
  log(`Usage: node install.mjs [options]

Options:
  --into <dir>   after building, copy dist/ into <dir>/vendor/sen
  --dry-run      print the steps without running anything
  -h, --help     show this help`);
  process.exit(0);
}

const dryRun = hasFlag("--dry-run");
const into = getValue("--into");

// ---------- checks ----------

const major = Number(process.versions.node.split(".")[0]);
if (major < 18) fail(`Node 18+ is required (you have ${process.versions.node}).`);

if (!existsSync(join(ROOT, "package.json"))) {
  fail("package.json not found. Run install.mjs from the Sen repo root.");
}

let target = null;
if (into) {
  target = resolve(process.cwd(), into); // relative to where you ran the command
  if (!existsSync(target)) fail(`--into target does not exist: ${target}`);
}

// ---------- build ----------

const total = target ? 5 : 4;
const hasLock = existsSync(join(ROOT, "package-lock.json"));

if (dryRun) log("Dry run: nothing will be changed.");

step(1, total, "Installing dependencies");
run("npm", [hasLock ? "ci" : "install"], dryRun);

step(2, total, "Typechecking");
run("npm", ["run", "typecheck"], dryRun);

step(3, total, "Running tests");
run("npm", ["test"], dryRun);

step(4, total, "Building");
run("npm", ["run", "build"], dryRun);

// What the build must produce (see README: "It produces").
const outputs = ["dist/sen.js", "dist/sen.global.js", "dist/types"];

if (!dryRun) {
  const missing = outputs.filter((p) => !existsSync(join(ROOT, p)));
  if (missing.length) fail(`build finished but these outputs are missing: ${missing.join(", ")}`);
}

// ---------- install into another project ----------

if (target) {
  const dest = join(target, "vendor", "sen");
  step(5, total, `Installing into ${dest}`);
  if (dryRun) {
    log(`  (dry-run) would copy dist/ -> ${dest}`);
  } else {
    rmSync(dest, { recursive: true, force: true });
    mkdirSync(dest, { recursive: true });
    cpSync(join(ROOT, "dist"), dest, { recursive: true });
    log(`  copied dist/ -> ${dest}`);
  }
}

// ---------- done ----------

log("\nDone.");
log("  dist/sen.js          ESM for npm / Vite / Tauri");
log("  dist/sen.global.js   <script> tag build (defines window.Sen)");
log("  dist/types/          TypeScript declarations");
if (target) {
  log(`\nIn ${target}, import it with:`);
  log(`  import { Sen } from "./vendor/sen/sen.js"`);
}
