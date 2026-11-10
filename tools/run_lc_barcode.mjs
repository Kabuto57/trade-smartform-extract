// Runs the smart form's own LCbarcode() outside Adobe Reader against a fake XFA object model.
// Usage: node tools/run_lc_barcode.mjs <extract-repo> <values.json> [--sentinel]
//   values.json: { "<path relative to form1>": value, ... }   ("LC.subfrmLC.subfrmApplicant.txtName": "ACME")
//   --sentinel: every field that is read returns a unique token «n» so the output shows which field lands where.
import fs from "node:fs";
import vm from "node:vm";

const [repo, valuesFile, mode] = process.argv.slice(2);
const values = JSON.parse(fs.readFileSync(valuesFile, "utf8"));
const sentinel = mode === "--sentinel";
const reads = [];           // ordered field reads
const writes = {};          // path -> value written
const tokens = {};          // token -> path
const messages = [];

function node(path) {
  const fn = function () {};
  return new Proxy(fn, {
    get(_t, prop) {
      if (typeof prop === "symbol") return undefined;
      const p = path ? `${path}.${prop}` : prop;
      if (prop === "rawValue" || prop === "formattedValue" || prop === "value") {
        if (p in writes) return writes[p] ;
        const key = path;
        const rel = key.replace(/^form1\./, "");
        if (!reads.includes(key)) reads.push(key);
        if (rel in values) return values[rel];
        if (sentinel) {
          const tok = `«${reads.indexOf(key)}»`;
          tokens[tok] = key;
          return tok;
        }
        return null;
      }
      const relp = path.replace(/^form1\./, "");
      if (prop === "access") return values[`${relp}#access`] ?? "open";
      if (prop === "presence") return values[`${relp}#presence`] ?? "visible";
      if (prop === "length") return 0;
      return node(p);
    },
    set(_t, prop, v) {
      writes[path ? `${path}.${prop}` : prop] = v;
      if (prop === "rawValue") writes[path] = v;
      return true;
    },
    apply() { return node(`${path}()`); },
  });
}

const read = (f) => fs.readFileSync(`${repo}/libraries/${f}.js`, "utf8");
const exportsOf = (src) => [...src.matchAll(/^\s*function\s+(\w+)\s*\(/gm)].map((m) => m[1]);
const ctx = {
  form1: node("form1"),
  xfa: new Proxy({}, { get: (_t, p) => (p === "host" ? { messageBox: (m) => messages.push(String(m)), setFocus() {} } : node(`xfa.${String(p)}`)) }),
  util: node("util"),
  app: node("app"),
};
// XFA scripts may name a top-level section directly (LC.subfrmLC… instead of form1.LC.subfrmLC…).
for (const name of ["LC", "LC_Amendment", "EBLC", "OBC", "DBRP", "SBLC", "SBLCA", "BG", "BGA", "EXPORT", "BEOBC", "BEEBLC", "BEGeneric", "MainPage"])
  ctx[name] = node(`form1.${name}`);
vm.createContext(ctx);
for (const lib of ["controlScript", "barcodeScript"]) {
  const src = read(lib);
  vm.runInContext(`var ${lib} = (function(){\n${src}\nreturn {${exportsOf(src).join(",")}};})();`, ctx, { filename: `${lib}.js` });
}
vm.runInContext("barcodeScript.LCbarcode();", ctx);

const records = Object.entries(writes)
  .filter(([p]) => /subfrmBarcodeRecord\.txtBarcode[\w]*$/.test(p) && typeof writes[p] === "string")
  .map(([p, v]) => ({ field: p.replace(/^form1\./, ""), value: v }));
console.log(JSON.stringify({ records, reads: reads.map((r) => r.replace(/^form1\./, "")), tokens, messages }, null, 1));
