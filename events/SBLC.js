// Event scripts for SBLC: 60 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.SBLC.SBLCBcode.txtSBLCDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{	
	form1.MainPage.subfrmMain.txtSBLC.rawValue = this.rawValue;
}		
if (this.rawValue == null)
		controlScript.currentDate( this );

// ===== form1.SBLC.SBLCBcode.txtSBLCDate  ::  initialize =====
if (this.rawValue == null)
		controlScript.currentDate( this );
this.rawValue = form1.MainPage.subfrmMain.txtSBLC.rawValue;

// ===== form1.SBLC.SBLCBcode.txtSBLCDate  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.SBLC.totalPageNo.txtPageNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtBankCIFNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtBankCIFNo  ::  exit =====
if(this.rawValue== null || (this.rawValue != null && (""+this.rawValue).length == 7)){
form1.MainPage.BankCIFNo.txtBankCIFNo.rawValue = this.rawValue;
}else{
	xfa.host.messageBox("Please input your 7-digit C.I.F. Number");
	xfa.host.setFocus(this);
}

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtContactName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtTelNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtFaxNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry  ::  initialize =====
controlScript.populateCountryList(this);

// ===== form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtContactName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtTelNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtFaxNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtSWIFTAddress  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtSWIFTAddress  ::  exit =====
if (this.rawValue.length != 8 && this.rawValue.length !=  11) {
	app.alert("Invalid SWIFT Address");
	this.rawValue = "";
	xfa.host.setFocus(this.somExpression);
}	

// ===== form1.SBLC.amountAndPeriod.subCurrenyAmount.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.SBLC.amountAndPeriod.subCurrenyAmount.drpCurrency  ::  change =====
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

// ===== form1.SBLC.amountAndPeriod.subCurrenyAmount.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.SBLC.amountAndPeriod.subValidPeriod.txtEffectiveDate  ::  exit =====
//controlScript.dateFormatChange(this);
/*
if(!controlScript.dateFormatChange(this))
{
	if (controlScript.dateCompare( txtEffectiveDate.rawValue, txtExpiryDate.rawValue ))
	{
		this.rawValue = null;
		xfa.host.messageBox("Expiry date cannot be earlier than or equal to effective date.");
	}	
}
*/

if(!controlScript.dateFormatChange(this))
{
	if(controlScript.validateDate(this))
	{
		controlScript.compareEffectiveDate(this,form1.SBLC.amountAndPeriod.subValidPeriod.txtExpiryDate,false);
	}
}

// ===== form1.SBLC.amountAndPeriod.subValidPeriod.txtEffectiveDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.amountAndPeriod.subValidPeriod.txtExpiryDate  ::  exit =====
//controlScript.dateFormatChange(this);
/*
if(!controlScript.dateFormatChange(this))
{
	if (controlScript.dateCompare( txtEffectiveDate.rawValue, txtExpiryDate.rawValue ))
	{
		this.rawValue = null;
		xfa.host.messageBox("Expiry date cannot be earlier than effective date.");
	}	
}
*/

if(!controlScript.dateFormatChange(this))
{
	if(controlScript.validateDate(this))
	{
		controlScript.compareEffectiveDate(this,form1.SBLC.amountAndPeriod.subValidPeriod.txtEffectiveDate,true);
	}
}

// ===== form1.SBLC.amountAndPeriod.subValidPeriod.txtExpiryDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.partialAndCharges.subPartialDrawings.#subform[0].radPartial  ::  change =====
if (xfa.event.newText == "")
{
		allowed.validate.nullTest = "error";
		notAllowed.validate.nullTest = "error";
}
else
{
		allowed.validate.nullTest = "disabled";
		notAllowed.validate.nullTest = "disabled ";
}
		

// ===== form1.SBLC.partialAndCharges.subPartialDrawings.#subform[0].radPartial  ::  ready ($form) =====
if (xfa.event.newText == "")
{
		allowed.validate.nullTest = "error";
		notAllowed.validate.nullTest = "error";
}
else
{
		allowed.validate.nullTest = "disabled";
		notAllowed.validate.nullTest = "disabled ";
}

// ===== form1.SBLC.partialAndCharges.subCharges.#subform[0].radCharges  ::  change =====
if (xfa.event.newText == "")
{
		applicant.validate.nullTest = "error";
		beneficiary.validate.nullTest = "error";
}
else
{
		applicant.validate.nullTest = "disabled";
		beneficiary.validate.nullTest = "disabled ";
}
		

// ===== form1.SBLC.partialAndCharges.subCharges.#subform[0].radCharges  ::  ready ($form) =====
if (xfa.event.newText == "")
{
		applicant.validate.nullTest = "error";
		beneficiary.validate.nullTest = "error";
}
else
{
		applicant.validate.nullTest = "disabled";
		beneficiary.validate.nullTest = "disabled ";
}

// ===== form1.SBLC.sblcFormat.txtSBLCFormat  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.specialInstructions.txtSpecialInstructions  ::  change =====
controlScript.changeUpper();

// ===== form1.SBLC.thisApplication.#subform[0].radApplication  ::  change =====
if (xfa.event.newText == "")
{
		uniform.validate.nullTest = "error";
		international.validate.nullTest = "error";
}
else
{
		uniform.validate.nullTest = "disabled";
		international.validate.nullTest = "disabled ";
}
		

// ===== form1.SBLC.thisApplication.#subform[0].radApplication  ::  ready ($form) =====
if (xfa.event.newText == "")
{
		uniform.validate.nullTest = "error";
		international.validate.nullTest = "error";
}
else
{
		uniform.validate.nullTest = "disabled";
		international.validate.nullTest = "disabled ";
}

// ===== form1.SBLC.allFees.subSBLCAcNo.txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.allFees.subHeader.txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.SBLC.printAndBarcode.#subform[0].btnSave  ::  click =====
barcodeScript.SBLCbarcode();
app.execMenuItem("SaveAs");	

// ===== form1.SBLC.printAndBarcode.#subform[0].btnPrint  ::  click =====
form1.MainPage.subfrmMain.txtPrint.rawValue = 1;

//form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
//form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
//form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
barcodeScript.SBLCbarcode();
controlScript.selectMandaotoryField();

/*
if(form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo.rawValue == null)
{
	if(form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue == "SG" ||
		(form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue == "" || 
		form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue == null))
	{
		form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;
	if  (controlScript.setMandatoryBackColor() == 0)	
	{		
		form1.variables.checkSumValueSBLC.value = controlScript.checkSum();
		form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueSBLC.value;
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	}
	
	else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
	}
	else
	{
		form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo.ui.oneOfChild.border.fill.color.value = controlScript.mandatoryColor;
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
	}
}
else
{
	if  (controlScript.setMandatoryBackColor() == 0)	
	{		
		form1.variables.checkSumValueSBLC.value = controlScript.checkSum();
		form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueSBLC.value;
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	}
	
	form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;	
}
*/

if  (controlScript.setMandatoryBackColor() == 0)	
{		
			form1.variables.checkSumValueSBLC.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueSBLC.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
//barcodeScript.SBLCbarcode();
controlScript.selectMandaotoryField();

form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode1.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_2  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode2.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_3  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode3.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_4  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode4.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_5  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode5.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_6  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode6.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_7  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode7.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_8  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode8.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_9  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode9.rawValue;
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

// ===== form1.SBLC.printAndBarcode.#subform[1].PaperFormsBarcodeSBLC_10  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.SBLC.barcodeRecord.txtBarcode10.rawValue;
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

