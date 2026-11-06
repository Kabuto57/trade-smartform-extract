# Trade Smart Form: extracted XFA template and scripts

Source: a bank's trade-application smart form, `Trade-Smartform.pdf` (Adobe LiveCycle Designer 11.0, saved 14 Apr 2026), extracted 6 Nov 2026 by reading its XFA packets. The PDF opens with an empty user password; no protection was bypassed.

**Anonymised.** The bank's name is replaced everywhere, including inside field and function names (for example `txtBankCIFNo` and `BankProcess1`–`5`). Also removed: the embedded logo images, website links, the vendor's file paths, the company registration number and an office postal code. The scripts were regenerated from the cleaned template, so field names and code still match. The original PDF is not included.

## What's here

| Path | Contents |
|---|---|
| `xfa/` | All 9 XFA packets as stored in the PDF: `template.xml` (2.5 MB: the whole form, with layout, fields and scripts), `config.xml`, `localeSet.xml`, `datasets.xml`, `xmpmeta.xml`, `xfdf.xml`, `PDFSecurity.xml`, `preamble.xml`, `postamble.xml` |
| `libraries/` | The 5 shared script objects (`form1.variables`), verbatim: `controlScript.js` (79 functions), `barcodeScript.js` (21), `fieldsCheck.js` (6), `currencyConvertor.js` (5), `errorMessage.js` (3 strings) |
| `events/` | All 1,276 event and calculate scripts, one file per section (`LC.js`, `DBRP.js`, `MainPage.js`, `pageSet.js` for the toolbar, `form1.js` for form-level events). Each script is headed `// ===== <object path> :: <event> =====` |
| `index.csv` | One row per event script: section, object path, event, language, line count, shared-library functions it calls |
| `tools/` | `extract_xfa.py` (PDF to `xfa/`), `extract_scripts.py` (`xfa/template.xml` to `libraries/`, `events/`, `index.csv`), `verify_doc_claims.py` (recounts the template and checks the analysis doc's figures) |

Total: 5 + 1,276 = **1,281 scripts**, all JavaScript (no FormCalc). The original PDF is not stored here.

## Regenerate

```bash
pip install pypdf cryptography
python tools/extract_xfa.py ~/Downloads/Trade-Smartform.pdf xfa
python tools/extract_scripts.py xfa/template.xml .
python tools/verify_doc_claims.py xfa/template.xml
```

Analysis of how the form works: [How the bank's Trade Smart Form is built](https://github.com/Kabuto57/pdf-template-studio/blob/docs/smart-form-analysis/docs/how-the-bank-smart-form-is-built.md) (in PDF Template Studio).

## Is the doc "How the bank's Trade Smart Form is built" correct?

Checked 74 statements against the file. **Almost all numbers are exact.** These match exactly:
- the file's packets
- field counts and types
- maxChars
- hidden and read-only fields
- data binding
- layouts
- fonts
- accessibility entries
- all nine event counts
- the top-10 function call counts
- the regular expressions
- the per-form script counts in the appendix

### Corrections

| Doc says | File shows | Severity |
|---|---|---|
| "holds 14 trade application forms" (Overview); "never scrolls through 14 forms" (Navigation) | **13** application forms (the doc's own Layer 2 says 13) + 4 terms pages + menu | Wrong number, inconsistent within the doc |
| "about 120 reusable functions" (Overview) | **111** (the doc's own Layer 4 says 111) | Inconsistent within the doc |
| barcodeScript: every form function has "a cleanUp… partner" | Only **5 of 10** do: LC, LC Amendment, OBC, EBLC, DBRP. SBLC, SBLCA, BG, BGA, EXPORT have none | Wrong |
| "No tilde … The barcode uses ~ internally" | `~` never appears in barcodeScript. It is the line-break placeholder in `BankProcess5` (Enter is replaced by `~`, then the text is split on `~`), so a typed `~` would break that line splitting | Wrong reason, right rule |
| "Compression, linearized: fast web view" | The config packet requests linearization, but the saved file is **not** linearized (probably undone when Reader Extensions were applied) | Minor |
| Prefix table: `txt` 731 | **736** | Minor |
| Prefix table: `rad` = "Radio group, 20" | 20 *radio-button fields* start with `rad`; the radio *groups* are 49 named `rad…`/`radio…` + 3 unnamed | Mislabelled |
| Prefix table: `subfrm` = "432 subforms" | 432 is **all** subforms; only **165** are named `subfrm…` | Mislabelled |
| "166 event scripts call mandatoryChange" | **165** (the 684 call total is exact) | Minor |

Not checkable from the file: the 4 Nov "trust" control test in Adobe Reader (a behaviour test, not file content).

### Confirmed details on the barcodes
- **62 barcodes.** There are 42 PDF417 (error-correction level 5), split across forms: 10 each on SBLC and BG, 4 each on LC, SBLCA and BGA, and 2 each on the rest. There are also 10 Code 128 and 10 Code 39; these hold **static** form-type IDs (`SG-LC`, `SG-BG`, `SG-LCA`…), are set by no script, and the Code 39 ones are hidden.
- **Data format** is a pipe-separated string built by `barcodeScript.<FORM>barcode()`. Fields are in fixed order (comments `1_01`, `1_02`… give the position), multi-line text is wrapped in `[ ]` per line, and choices become SWIFT codes. Examples: `L5Y` = partial shipment allowed, `44E` = port of loading, `44A` = dispatch from.
- **Drawing.** Each PDF417's `calculate` script (Designer's generated `createBarcodeContent()`) reads one hidden text field such as `form1.LC.subfrmBarcodeRecord.txtBarcode1`.
