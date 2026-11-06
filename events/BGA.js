// Event scripts for BGA: 53 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.BGA.BGABcode.txtSBLCADate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{	
	form1.MainPage.subfrmMain.txtSBLCA.rawValue = this.rawValue;
}		
if (this.rawValue == null)
		controlScript.currentDate( this );

// ===== form1.BGA.BGABcode.txtSBLCADate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtSBLCA.rawValue;

// ===== form1.BGA.BGABcode.txtSBLCADate  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.BGA.BankAndRefNo.BankNo.txtBankCIFNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.BGA.BankAndRefNo.BankNo.txtBankCIFNo  ::  exit =====
if(this.rawValue== null || (this.rawValue != null && (""+this.rawValue).length == 7)){
form1.MainPage.BankCIFNo.txtBankCIFNo.rawValue = this.rawValue;
}else{
	xfa.host.messageBox("Please input your 7-digit C.I.F. Number");
	xfa.host.setFocus(this);
}

// ===== form1.BGA.BankAndRefNo.refNo.txtRefNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.BGA.BankAndRefNo.refNo.txtRefNo  ::  exit =====
if (this.rawValue.length != 12) {
	app.alert("Please input your 12-digit Amendment to BG Reference No.");
	this.rawValue = "";
	xfa.host.setFocus(this.somExpression);
}	

// ===== form1.BGA.applicantAndBeneficiary.subApplicantInfo.txtApplicantName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry  ::  initialize =====
controlScript.populateCountryList(this);

// ===== form1.BGA.amendments.amount.chkAmendAmount  ::  change =====
if (this.rawValue == "1")
{
	controlScript.accessChange(drpCurrency, "open");
	controlScript.mandatoryChange(drpCurrency, 1);
	controlScript.accessChange(txtAmount, "open");
	controlScript.mandatoryChange(txtAmount, 1);
	controlScript.accessChange(drpAmendAmount, "open");
	controlScript.mandatoryChange(drpAmendAmount, 1);
	controlScript.accessChange(drpCurrency2, "open");
	controlScript.mandatoryChange(drpCurrency2, 1);
	controlScript.accessChange(txtAmount2, "open");
	controlScript.mandatoryChange(txtAmount2, 1);
}

else
{
	controlScript.accessChange(drpCurrency, "readOnly");
	controlScript.mandatoryChange(drpCurrency, 0);
	controlScript.accessChange(txtAmount, "readOnly");
	controlScript.mandatoryChange(txtAmount, 0);
	controlScript.accessChange(drpAmendAmount, "readOnly");
	controlScript.mandatoryChange(drpAmendAmount, 0);
	controlScript.accessChange(drpCurrency2, "readOnly");
	controlScript.mandatoryChange(drpCurrency2, 0);
	controlScript.accessChange(txtAmount2, "readOnly");
	controlScript.mandatoryChange(txtAmount2, 0);
}

// ===== form1.BGA.amendments.amount.chkAmendAmount  ::  ready ($form) =====
if (this.rawValue == "1")
{
	controlScript.accessChange(drpCurrency, "open");
	controlScript.mandatoryChange(drpCurrency, 1);
	controlScript.accessChange(txtAmount, "open");
	controlScript.mandatoryChange(txtAmount, 1);
	controlScript.accessChange(drpAmendAmount, "open");
	controlScript.mandatoryChange(drpAmendAmount, 1);
	controlScript.accessChange(drpCurrency2, "open");
	controlScript.mandatoryChange(drpCurrency2, 1);
	controlScript.accessChange(txtAmount2, "open");
	controlScript.mandatoryChange(txtAmount2, 1);
}

else
{
	controlScript.accessChange(drpCurrency, "readOnly");
	controlScript.mandatoryChange(drpCurrency, 0);
	controlScript.accessChange(txtAmount, "readOnly");
	controlScript.mandatoryChange(txtAmount, 0);
	controlScript.accessChange(drpAmendAmount, "readOnly");
	controlScript.mandatoryChange(drpAmendAmount, 0);
	controlScript.accessChange(drpCurrency2, "readOnly");
	controlScript.mandatoryChange(drpCurrency2, 0);
	controlScript.accessChange(txtAmount2, "readOnly");
	controlScript.mandatoryChange(txtAmount2, 0);
}

// ===== form1.BGA.amendments.amount.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BGA.amendments.amount.drpCurrency  ::  change =====
if((xfa.event.newText == "JPY") || (xfa.event.newText == "IDR"))
{
	txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount.resolveNode("value.#decimal").fracDigits = "0";
	txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
}
else
{
	txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount.resolveNode("value.#decimal").fracDigits = "2";
	txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
}

// ===== form1.BGA.amendments.amount.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.BGA.amendments.amount.txtAmount2  ::  exit =====
if (drpCurrency2.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.BGA.amendments.amount.drpCurrency2  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BGA.amendments.amount.drpCurrency2  ::  change =====
if((xfa.event.newText == "JPY") || (xfa.event.newText == "IDR"))
{
	txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount.resolveNode("value.#decimal").fracDigits = "0";
	txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
}
else
{
	txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount.resolveNode("value.#decimal").fracDigits = "2";
	txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
}

// ===== form1.BGA.amendments.expiryDate.chkAmendExpiryDate  ::  change =====
if (this.rawValue == "1")
{
	controlScript.accessChange(txtExpiryDate, "open");
	controlScript.mandatoryChange(txtExpiryDate, 1);
}

else
{
	controlScript.accessChange(txtExpiryDate, "readOnly");
	controlScript.mandatoryChange(txtExpiryDate, 0);
}

// ===== form1.BGA.amendments.expiryDate.chkAmendExpiryDate  ::  ready ($form) =====
if (this.rawValue == "1")
{
	controlScript.accessChange(txtExpiryDate, "open");
	controlScript.mandatoryChange(txtExpiryDate, 1);
}

else
{
	controlScript.accessChange(txtExpiryDate, "readOnly");
	controlScript.mandatoryChange(txtExpiryDate, 0);
}

// ===== form1.BGA.amendments.expiryDate.txtExpiryDate  ::  exit =====
//controlScript.dateFormatChange(this);

if(!controlScript.dateFormatChange(this))
{
	if (controlScript.dateCompare( form1.BGA.amendments.expiryDate.txtExpiryDate.rawValue, form1.BGA.amendments.claimExpiryDate.txtClaimExpiryDate.rawValue ))
	{
		this.rawValue = null;
		xfa.host.messageBox("Claim expiry date cannot be earlier than expiry date.");
	}	
}

// ===== form1.BGA.amendments.expiryDate.txtExpiryDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate  ::  change =====
if (this.rawValue == "1")
{
	controlScript.accessChange(txtClaimExpiryDate, "open");
	controlScript.mandatoryChange(txtClaimExpiryDate, 1);
}

else
{
	controlScript.accessChange(txtClaimExpiryDate, "readOnly");
	controlScript.mandatoryChange(txtClaimExpiryDate, 0);
}

// ===== form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate  ::  ready ($form) =====
if (this.rawValue == "1")
{
	controlScript.accessChange(txtClaimExpiryDate, "open");
	controlScript.mandatoryChange(txtClaimExpiryDate, 1);
}

else
{
	controlScript.accessChange(txtClaimExpiryDate, "readOnly");
	controlScript.mandatoryChange(txtClaimExpiryDate, 0);
}

// ===== form1.BGA.amendments.claimExpiryDate.txtClaimExpiryDate  ::  exit =====
//controlScript.dateFormatChange(this);


if(!controlScript.dateFormatChange(this))
{
	if (controlScript.dateCompare( form1.BGA.amendments.expiryDate.txtExpiryDate.rawValue, form1.BGA.amendments.claimExpiryDate.txtClaimExpiryDate.rawValue ))
	{
		this.rawValue = null;
		xfa.host.messageBox("Claim expiry date cannot be earlier than expiry date.");
	}	
}

// ===== form1.BGA.amendments.claimExpiryDate.txtClaimExpiryDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod  ::  change =====
if (this.rawValue == "1")
{
	controlScript.accessChange(txtClaimPeriod, "open");
	controlScript.mandatoryChange(txtClaimPeriod, 1);
	controlScript.accessChange(drpDayMonth, "open");
	controlScript.mandatoryChange(drpDayMonth, 1);
}

else
{
	controlScript.accessChange(txtClaimPeriod, "readOnly");
	controlScript.mandatoryChange(txtClaimPeriod, 0);
	controlScript.accessChange(drpDayMonth, "readOnly");
	controlScript.mandatoryChange(drpDayMonth, 0);
}

// ===== form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod  ::  ready ($form) =====
if (this.rawValue == "1")
{
	controlScript.accessChange(txtClaimPeriod, "open");
	controlScript.mandatoryChange(txtClaimPeriod, 1);
	controlScript.accessChange(drpDayMonth, "open");
	controlScript.mandatoryChange(drpDayMonth, 1);
}

else
{
	controlScript.accessChange(txtClaimPeriod, "readOnly");
	controlScript.mandatoryChange(txtClaimPeriod, 0);
	controlScript.accessChange(drpDayMonth, "readOnly");
	controlScript.mandatoryChange(drpDayMonth, 0);
}

// ===== form1.BGA.amendments.claimPeriod.txtClaimPeriod  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.BGA.amendments.amendText.text.chkAmendText  ::  change =====
if (this.rawValue == "1")
{
	controlScript.accessChange(txtAmend, "open");
	controlScript.mandatoryChange(txtAmend, 1);
}

else
{
	controlScript.accessChange(txtAmend, "readOnly");
	controlScript.mandatoryChange(txtAmend, 0);
}

// ===== form1.BGA.amendments.amendText.text.chkAmendText  ::  ready ($form) =====
if (this.rawValue == "1")
{
	controlScript.accessChange(txtAmend, "open");
	controlScript.mandatoryChange(txtAmend, 1);
}

else
{
	controlScript.accessChange(txtAmend, "readOnly");
	controlScript.mandatoryChange(txtAmend, 0);
}

// ===== form1.BGA.amendments.amendText.txtAmend  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.deliveryInstructions.#subform[0].radDelivery  ::  change =====
if (xfa.event.newText == "")
{
	contact.validate.nullTest = "error";
	send.validate.nullTest = "error";
	freeText.validate.nullTest = "error";
}
else
{
	contact.validate.nullTest = "disabled";
	send.validate.nullTest = "disabled";
	freeText.validate.nullTest = "disabled";
}


if (this.rawValue == "contact")
{
	controlScript.accessChange(txtContactName, "open");
	controlScript.mandatoryChange(txtContactName, 1);
	controlScript.accessChange(drpPassportIC, "open");
	controlScript.mandatoryChange(drpPassportIC, 1);
	controlScript.accessChange(txtPassportICNo, "open");
	controlScript.mandatoryChange(txtPassportICNo, 1);
	controlScript.accessChange(txtTelNo, "open");
	controlScript.mandatoryChange(txtTelNo, 1);
}

else
{
	controlScript.accessChange(txtContactName, "readOnly");
	controlScript.mandatoryChange(txtContactName, 0);
	controlScript.accessChange(drpPassportIC, "readOnly");
	controlScript.mandatoryChange(drpPassportIC, 0);
	controlScript.accessChange(txtPassportICNo, "readOnly");
	controlScript.mandatoryChange(txtPassportICNo, 0);
	controlScript.accessChange(txtTelNo, "readOnly");
	controlScript.mandatoryChange(txtTelNo, 0);
}

if (this.rawValue == "send")
{
	controlScript.accessChange(txtAttn, "open");
	controlScript.mandatoryChange(txtAttn, 1);
}

else
{
	controlScript.accessChange(txtAttn, "readOnly");
	controlScript.mandatoryChange(txtAttn, 0);
}

if (this.rawValue == "freeText")
{
	controlScript.accessChange(txtFreeText, "open");
	controlScript.mandatoryChange(txtFreeText, 1);
}

else
{
	controlScript.accessChange(txtFreeText, "readOnly");
	controlScript.mandatoryChange(txtFreeText, 0);
}

// ===== form1.BGA.deliveryInstructions.#subform[0].radDelivery  ::  ready ($form) =====
if (xfa.event.newText == "")
{
	contact.validate.nullTest = "error";
	send.validate.nullTest = "error";
	freeText.validate.nullTest = "error";
}
else
{
	contact.validate.nullTest = "disabled";
	send.validate.nullTest = "disabled";
	freeText.validate.nullTest = "disabled";
}


if (this.rawValue == "contact")
{
	controlScript.accessChange(txtContactName, "open");
	controlScript.mandatoryChange(txtContactName, 1);
	controlScript.accessChange(drpPassportIC, "open");
	controlScript.mandatoryChange(drpPassportIC, 1);
	controlScript.accessChange(txtPassportICNo, "open");
	controlScript.mandatoryChange(txtPassportICNo, 1);
	controlScript.accessChange(txtTelNo, "open");
	controlScript.mandatoryChange(txtTelNo, 1);
}

else
{
	controlScript.accessChange(txtContactName, "readOnly");
	controlScript.mandatoryChange(txtContactName, 0);
	controlScript.accessChange(drpPassportIC, "readOnly");
	controlScript.mandatoryChange(drpPassportIC, 0);
	controlScript.accessChange(txtPassportICNo, "readOnly");
	controlScript.mandatoryChange(txtPassportICNo, 0);
	controlScript.accessChange(txtTelNo, "readOnly");
	controlScript.mandatoryChange(txtTelNo, 0);
}

if (this.rawValue == "send")
{
	controlScript.accessChange(txtAttn, "open");
	controlScript.mandatoryChange(txtAttn, 1);
}

else
{
	controlScript.accessChange(txtAttn, "readOnly");
	controlScript.mandatoryChange(txtAttn, 0);
}

if (this.rawValue == "freeText")
{
	controlScript.accessChange(txtFreeText, "open");
	controlScript.mandatoryChange(txtFreeText, 1);
}

else
{
	controlScript.accessChange(txtFreeText, "readOnly");
	controlScript.mandatoryChange(txtFreeText, 0);
}

// ===== form1.BGA.deliveryInstructions.#subform[0].txtContactName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.deliveryInstructions.#subform[0].txtPassportICNo  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.BGA.deliveryInstructions.#subform[0].txtPassportICNo  ::  exit =====
/*
if (this.rawValue.length != 10) {
	app.alert("Invalid Identitification (Passport/NRIC) No.");
	this.rawValue = "";
	xfa.host.setFocus(this.somExpression);
}*/

// ===== form1.BGA.deliveryInstructions.#subform[0].txtTelNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.BGA.deliveryInstructions.#subform[0].txtAttn  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BGA.deliveryInstructions.#subform[0].txtFreeText  ::  change =====
controlScript.changeUpper();

// ===== form1.BGA.we.#subform[0].txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.BGA.we.#subform[0].txtAccNo  ::  exit =====
/*
if (this.rawValue.length != 10 && this.rawValue.length != 13) {
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this.somExpression);
}*/

// ===== form1.BGA.printAndBarcode.#subform[0].btnSave  ::  click =====
barcodeScript.BGAbarcode();
app.execMenuItem("SaveAs");	

// ===== form1.BGA.printAndBarcode.#subform[0].btnPrint  ::  click =====
form1.MainPage.subfrmMain.txtPrint.rawValue = 1;

controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
barcodeScript.BGAbarcode();
controlScript.selectMandaotoryField();

if  (controlScript.setMandatoryBackColor() == 0)	
{		
			form1.variables.checkSumValueBGA.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueBGA.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
		
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
//barcodeScript.BGAbarcode();
controlScript.selectMandaotoryField();

form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

// ===== form1.BGA.printAndBarcode.#subform[1].PaperFormsBarcodeBGA_1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BGA.barcodeRecord.txtBarcode1.rawValue;
    return barcodeContent;
}

// Assign content to the barcode. 
// Note: Do not assign a null value to the barcode. 
// Otherwise, the barcode is displayed as blank.
if(createBarcodeContent() != null)
{
    this.rawValue = createBarcodeContent();
}
else
{
    this.rawValue = " ";
}
// Final sanity check, located here not for efficiency but for consistency and correctness
if (is705ViewerRequired && xfa.host.version < 7.05)
{
    this.rawValue = " ";
}

// ===== form1.BGA.printAndBarcode.#subform[1].PaperFormsBarcodeBGA_2  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BGA.barcodeRecord.txtBarcode2.rawValue;
    return barcodeContent;
}

// Assign content to the barcode. 
// Note: Do not assign a null value to the barcode. 
// Otherwise, the barcode is displayed as blank.
if(createBarcodeContent() != null)
{
    this.rawValue = createBarcodeContent();
}
else
{
    this.rawValue = " ";
}
// Final sanity check, located here not for efficiency but for consistency and correctness
if (is705ViewerRequired && xfa.host.version < 7.05)
{
    this.rawValue = " ";
}

// ===== form1.BGA.printAndBarcode.#subform[1].PaperFormsBarcodeBGA_3  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BGA.barcodeRecord.txtBarcode3.rawValue;
    return barcodeContent;
}

// Assign content to the barcode. 
// Note: Do not assign a null value to the barcode. 
// Otherwise, the barcode is displayed as blank.
if(createBarcodeContent() != null)
{
    this.rawValue = createBarcodeContent();
}
else
{
    this.rawValue = " ";
}
// Final sanity check, located here not for efficiency but for consistency and correctness
if (is705ViewerRequired && xfa.host.version < 7.05)
{
    this.rawValue = " ";
}

// ===== form1.BGA.printAndBarcode.#subform[1].PaperFormsBarcodeBGA_4  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BGA.barcodeRecord.txtBarcode4.rawValue;
    return barcodeContent;
}

// Assign content to the barcode. 
// Note: Do not assign a null value to the barcode. 
// Otherwise, the barcode is displayed as blank.
if(createBarcodeContent() != null)
{
    this.rawValue = createBarcodeContent();
}
else
{
    this.rawValue = " ";
}
// Final sanity check, located here not for efficiency but for consistency and correctness
if (is705ViewerRequired && xfa.host.version < 7.05)
{
    this.rawValue = " ";
}

