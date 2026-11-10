# LC application form: facts for system design

How the bank's Irrevocable Documentary Credit (LC) application in the trade smart form is built: its fields, validation, calculations and the barcode it prints. Everything here was read from the form's template and scripts in this repository. The barcode output was produced by **running the form's own `LCbarcode()` code** outside Adobe Reader (`tools/run_lc_barcode.mjs`) on a sample application, not reconstructed by hand.

Checked 10 Nov 2026. Data files: [`docs/lc/`](lc/).

| File | What it holds |
|---|---|
| [`lc/lc-fields.csv`](lc/lc-fields.csv) | All 137 LC inputs: path, caption, type, max length, display pattern, options, mandatory, locked/hidden at open, scripts attached |
| [`lc/lc-conditional-rules.csv`](lc/lc-conditional-rules.csv) | 24 "mandatory when…" rules |
| [`lc/lc-barcode-layout.csv`](lc/lc-barcode-layout.csv) | All 62 barcode positions: content, source field, encoding, value when empty |
| [`lc/sample-lc-input.json`](lc/sample-lc-input.json), [`lc/sample-lc-output.txt`](lc/sample-lc-output.txt) | Sample application and the 4 barcode records the form's code produced from it |

## 1. The numbers

| Measure | LC form |
|---|---|
| Inputs | **175**: 162 fields, of which 38 are radio buttons inside 13 radio groups |
| By type | 78 text, 23 tick boxes, 13 radio groups, 6 drop-downs, 6 numeric, 3 dates, 6 barcodes, 2 buttons |
| Customer-facing at open | **116** visible inputs (excludes barcodes, buttons, bank-use and hidden helper fields) |
| Hidden at open | 7 (shown by scripts when a choice needs them) |
| Locked at open | 46 (unlocked by scripts when the tick box or choice above them is selected) |
| For bank use | 6 (advising bank name and address, reference) |
| Always mandatory | **14** |
| Mandatory when… | **24** rules from 13 trigger fields |
| Event scripts | 176 (117 on change, 24 on reopen, 18 on exit, 7 on open, 4 calculate, 3 when full, 2 click, 1 after layout) |
| Barcode output | **4 records** in 4 PDF417 barcodes, **62 positions**; plus 1 visible Code 128 and 1 hidden Code 39 holding the fixed form ID |

The 14 always-mandatory inputs: applicant name, address line 1, contact name, telephone; beneficiary name, address line 1; currency; amount; price basis; partial shipment; transhipment; expiry date; description of goods; issuance charges ("with you").

## 2. Field rules (set in the template, no script)

- **Length:** 35 characters on most text lines (33 fields; the SWIFT line length). Telephone and fax 15; notify party 114; other documents 70; credit numbers and cover note 20; **description of goods and additional conditions 6,500 each**.
- **Multi-line addresses:** three separate 35-character lines (`txtAddress1..3`), not one box.
- **Display patterns:** amounts as `zzz,zzz,zzz,zz9.99`; dates stored as `YYYY-MM-DD` and shown as `DD/MM/YYYY` or `DD MMM, YYYY`.
- **Numeric fields** refuse letters natively.
- **Data binding:** almost every field is `bind="none"`: answers live only inside the saved PDF, not in an exportable data file.
- **CIF number:** the LC's CIF is its own box on the menu page (`MainPage.subfrmMain.txtLCCif`). A helper that would copy one CIF to every form (`CIFChange`) exists in the library, but no script calls it.

## 3. Validation

The form checks at three moments. Nothing is sent anywhere; every check runs inside Adobe Reader.

### On each key press

| Check | How | Where on the LC |
|---|---|---|
| Uppercase | key converted to uppercase (`changeUpper`) | 81 scripts |
| SWIFT characters only | key dropped if it matches `[^a-zA-Z0-9\s,.:'\+\(\)\?'\-/]` (form variable `AlphaNumericSwift`) | 35 text fields |
| Digits only | key dropped if it matches `[^0-9]` (form variable `Number`) | 8 fields |
| Length | `lengthLimit(n)`: 2 digits for originals, copies, days and presentation period; 3 for term days | 13 fields |

The SWIFT filter also blocks the barcode's delimiter characters `|`, `[`, `]`, `{`, `}` on the fields it covers.

### When the cursor leaves a field

| Field | Rule | Message |
|---|---|---|
| Latest shipment date, expiry date | valid date; **expiry must not be earlier than latest shipment** (`dateCompare`) | "Expiry date cannot be earlier than lastest shipment date." |
| Draft date | valid date | "Please input the date format as dd/mm/yyyy or select a date from the calendar provided." |
| Amount | cleared if no currency has been chosen | (none) |
| Term days | not negative; cleared if longer than 3 digits | "Please provide valid number." |
| Originals and copies (delivery order, invoice, packing list, weight note, certificate of origin) | not negative; cleared if longer than 2 digits | "Please provide valid number." |
| Days after shipment (beneficiary's certificate) | at least 1; cleared if longer than 2 digits | "Please provide valid number." |
| Applicant / beneficiary name | when full: | "If 'Name' too long, please continue to key in first line of Address field." |

### Mandatory and conditional mandatory

Mandatory is one built-in flag per field (`validate.nullTest`). Scripts flip it on and off; nothing turns red until the customer presses **Confirm & Print**. Then the shared check collects every visible mandatory field, paints the empty ones red (RGB 250,100,100), moves the cursor to the first, and refuses to print.

The 24 conditional rules (full list in `lc-conditional-rules.csv`):

| When the customer… | …these become mandatory |
|---|---|
| ticks Tolerance | plus % and minus % |
| picks price basis Others | the "others" text |
| picks draft Term / Date | term days and "days after" / the draft date |
| ticks Full set of bills of lading | consignee choice, freight (prepaid/collect), notify party; consignee "3" also needs the "to order of" name |
| ticks Original air waybill | freight choice and notify party |
| ticks Delivery order | originals, copies, countersigned by, whose signature |
| picks "Insurance covered by applicant under open cover" | cover no. and "with" |
| ticks the other-documents box | the other-documents text |
| ticks Bank charges / Confirmation | who pays |
| ticks Trust receipts | the trust receipt option, then its foreign-currency or forward-contract box |

The same logic is repeated in each trigger's `ready` event, so a saved form reopens with the right fields open, hidden and mandatory.

## 4. Calculations and derived values

The LC itself does little arithmetic; most "calculation" is turning answers into codes and sentences for the barcode (section 5).

- **Reference number:** at print, `checkSum()` makes a SHA-1 hash of the date, time and a random number and prints it on every page. It identifies the printout; it does not protect the content.
- **Amount** is kept only when a currency is chosen.
- **Tolerance** values are blanked in the barcode when their box is locked (tolerance not ticked).
- **Page x of y** and the header labels are recalculated after each layout.
- (Amount in words exists in the form, but only on the Bills of Exchange, not on the LC.)

## 5. The barcode

### When and how it is made

1. The customer clicks the LC's own **Confirm & Print** button. Saving does not build the barcode, and File > Print is blocked.
2. The mandatory check runs; if anything is empty, printing stops.
3. `barcodeScript.LCbarcode()` builds **4 text records** and writes each into a hidden field (`txtBarcode1`, `txtBarcode2`, `txtBarcode1_1`, `txtBarcode2_1`).
4. Each of the 4 PDF417 barcodes (error correction level 5) redraws itself from one hidden field through Designer's generated `createBarcodeContent()`.
5. Free Adobe Reader can only draw them because the file carries Adobe's *BarcodePlaintext* usage right.

### Format

- One record per barcode, fields separated by `|`, starting with the record number (`1|`, `2|`, `3|`, `4|`).
- **Position, not names:** there are no field names or keys; meaning comes from the position (`1_01` … `4_03`, listed in `lc-barcode-layout.csv`). Empty answers leave an empty slot (`||`).
- **Multi-line addresses:** each line wrapped in square brackets: `[88 HARBOUR STREET][SHENZHEN 518000][CHINA]`.
- **Long text:** cut into 64-character lines, padded with spaces, joined by `{}`. An Enter key in the text also becomes `{}`.
- **Choices become codes**, mostly SWIFT MT700 style:

| Answer | Code |
|---|---|
| Partial shipment allowed / not | `L5Y` / `L5N` |
| Transhipment allowed / not | `L6Y` / `L6N` |
| Confirmation required / not | `L9Y` / `L9N` |
| Price basis | FOB `C`, CFR `B`, CIF `A`, FCA `D`, CIP `G`, CPT `F`, Local delivery `O`, Others `O` (+ text) |
| Shipment from | `44E` port of loading / airport of departure; `44A` dispatch from / taking in charge / receipt |
| Shipment to | `44F` port of discharge / airport of destination; `44B` transportation to / final destination / delivery |
| Draft | Sight `Y`; Term `N` + days + "after"; Date `N` + date |
| Mode of advising | Full Swift `S`, Airmail with brief Swift `S`, Courier with brief Swift `S`, Registered airmail `A`, Courier `U` |
| Bank charges paid by | applicant `LAA`, beneficiary `LAB` |
| Confirmation charges paid by | applicant `LID`, beneficiary `LIC` |
| Local LC inclusive of GST | `GSY` |
| Missing CIF / amount / tolerance / term days | `0000000` / `0` / `0` / `0` |

- **Document requirements become full sentences** generated from the ticks and numbers, for example `+ FULL SET OF CLEAN ON BOARD MARINE BILLS OF LADING MADE OUT TO ORDER OF THE BANK LIMITED, NOTIFYING APPLICANT MARKED 'FREIGHT COLLECT'.`

### What the records contain

| Record | Content | Sample size |
|---|---|---|
| 1 | CIF, applicant and beneficiary names, beneficiary address, shipment terms, currency, amount, tolerance, price basis, places of shipment, dates, presentation period, draft, mode of advising (36 positions) | 223 chars |
| 2 | Applicant address, transferee, advising bank (bank use), bill of lading and air waybill clauses, confirmation and charges (14) | 228 chars |
| 3 | Document clauses: delivery order, insurance, beneficiary's certificate, invoice, packing list, weight note, certificate of origin, other documents (9) | 253–700 chars |
| 4 | Description of goods (first 400 characters) and additional conditions (first 600) (3) | up to about 1,100 chars |

### Sample output

Produced by the form's own code from `lc/sample-lc-input.json` (synthetic data):

```
1|1234567|ACME TRADING PTE LTD|GLOBAL EXPORTS LLC|[88 HARBOUR STREET][SHENZHEN 518000][CHINA]|L5Y|L6N|USD|1250000.00||5|5|C||44E|ANY CHINESE PORT||||44F|SINGAPORE||||2027-02-28|2027-03-31|21||||N|90|BILL OF LADING DATE|S|||

2|[10 ANSON ROAD #12-01][INTERNATIONAL PLAZA][SINGAPORE 079903]|||||+ FULL SET OF CLEAN ON BOARD MARINE BILLS OF LADING MADE OUT TO  {}ORDER OF THE BANK LIMITED, NOTIFYING APPLICANT MARKED 'FREIGHT   {}COLLECT'.|||||L9Y|LAB|LIC|

3||||+ SIGNED COMMERCIAL INVOICES IN 3 ORIGINALS AND 2 COPIES.|+ PACKING LIST IN 3 ORIGINALS AND 2 COPIES.||+ CERTIFICATE OF ORIGIN IN 1 ORIGINAL AND 1 COPY, SHOWING COUNTRY {}OF ORIGIN AS CHINA.|INSPECTION CERTIFICATE ISSUED BY AN INDEPENDENT SURVEYOR|

4|500 UNITS INDUSTRIAL CENTRIFUGAL PUMPS MODEL XP-200, STAINLESS   {}STEEL 316 IMPELLER, 50HZ 415V MOTOR, PACKED IN SEAWORTHY WOODEN  {}… PI-2026-0415 DATED 15 OCTO|ALL DOCUMENTS MUST INDICATE THE CREDIT NUMBER.{}THIRD PARTY DOCUMENTS ACCEPTABLE EXCEPT DRAFTS AND INVOICE.|
```

The goods description in the sample was 496 characters; the barcode stops at character 400, mid-word ("15 OCTO").

To try another application: `node tools/run_lc_barcode.mjs . my-answers.json`. Field paths for the JSON are in `lc-fields.csv`.

## 6. Gaps and defects to design around

Found by running and reading the code. These are what a replacement system should not copy.

| # | Issue | Effect |
|---|---|---|
| 1 | **Goods description cut to 400 characters, additional conditions to 600**, although each field accepts 6,500 | Trade Ops loses most of a long goods description; the cut can fall mid-word |
| 2 | **Airport of departure and airport of destination text are never encoded** | An air shipment's barcode carries `44E`/`44F` but no airport name |
| 3 | **Three advising modes share the code `S`**, and Local delivery / Others share `O` | The barcode cannot tell them apart |
| 4 | Positions `1_18`, `1_19`, `1_23`, `1_24` are always empty; the first filled place goes into `1_17` / `1_22` | Which kind of place it was (dispatch, taking in charge, receipt…) is lost |
| 5 | `checkMaxLength(line1, line2, 1)` is called with 3 arguments but takes 4 | The intended combined length limit on two-line place fields never runs |
| 6 | If notify party is blank, the bill-of-lading clause inserts the applicant name **field object** (`txtName` without `.rawValue`) | Output in Reader uncertain; needs a Reader test |
| 7 | Drop-down values go into clauses as written ("COUNTERSIGNED BY One", "need not BE VERIFIED") | Mixed case inside otherwise uppercase SWIFT text |
| 8 | Code comments disagree with the code (1_03 says "Beneficiary Name" but holds the applicant; dates say ddmmyyyy but are YYYY-MM-DD) | A parser written from the comments would be wrong |
| 9 | No field names, no version number, no checksum of the content inside the barcode | Any change to the order silently breaks the bank's reader |
| 10 | The barcode is only built by the Print button; a saved but unprinted form has stale or empty barcodes | Emailed PDFs cannot rely on the barcode |

## 7. Implications for a new system

- **Data model:** 175 inputs is the full surface, but about 116 are customer-facing. Model addresses as 3 lines of 35, keep the 35-character SWIFT line rule, and store dates as ISO `YYYY-MM-DD`.
- **Rules as data:** 14 always-mandatory fields and 24 trigger → target rules cover the LC. Store them as data (trigger, values, target) instead of scripts; the extracted CSV is a ready starting point.
- **Validation:** keep the SWIFT character set, uppercase, the 2- and 3-digit limits, no negatives, and expiry ≥ latest shipment. Add what the old form lacks: a real combined length limit on two-line places, and no silent truncation.
- **Output:** if the bank's back end must keep reading this format, write a compatibility encoder that reproduces the 4 records exactly (the layout CSV plus the code tables above). It should add the missing airport text, distinct codes, and full goods descriptions, in a new version or a second symbol. A QR code or structured JSON with field names would remove the position fragility.
- **Testing:** `tools/run_lc_barcode.mjs` runs the original code, so a new encoder can be checked record-for-record against the old one on the same answers.
