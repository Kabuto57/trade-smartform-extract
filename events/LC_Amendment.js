// Event scripts for LC_Amendment: 56 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.LC_Amendment.subfrmDetail.subfrmBankAddress.txtDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	form1.MainPage.subfrmMain.txtLCAmdt.rawValue = this.rawValue;

}

if (this.rawValue == null)
		controlScript.currentDate( this );
		

// ===== form1.LC_Amendment.subfrmDetail.subfrmNumber.txtNo  ::  exit =====
if(this.rawValue != null)
{
	var regExp = /^\d{12}$/;
	//var regExp1 = /^\d{12}(M|m)$/;

	if(!regExp.test(this.rawValue)) //&& !regExp1.test(this.rawValue))
	{
		this.rawValue = null;
		xfa.host.messageBox("Please input our LC no. with the following format.\ne.g.\n1) 553010012345\n2) 550010012345");
		xfa.host.setFocus(this);
		//form1.MainPage.subfrmMain.txtDocCredit.rawValue = null
	}
}

if(this.rawValue != null)
{
	//form1.MainPage.subfrmMain.txtDocCredit.rawValue = this.rawValue;
	var str = this.rawValue;
	var len = str.length - 5;		

	var num1 = str.substr(0,3);
	var num2 = str.substr(3,2);
	var num3 = str.substr(5,len);
		
	this.rawValue = num1 + "-" + num2 + "-" + num3;
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmNumber.txtNo  ::  change =====
controlScript.changeUpper();

// ===== form1.LC_Amendment.subfrmDetail.subfrmNumber.txtAmendNo  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);

// ===== form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtName  ::  full =====
xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtAddress3  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtContractName  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtTel  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtFax  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtName  ::  full =====
xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmModeOfAdvising.RadioButtonList  ::  change =====
/*
if(this.rawValue == "Delivery")
{
	controlScript.accessChange (radDeliveryCounterBy, "open");
	controlScript.mandatoryChange (radDeliveryCounterBy, 1);
	
	radDeliveryCounterBy.rawValue = "Beneficiary";
	
	controlScript.radioMandatoryCheck();

}
else
{
	controlScript.accessChange (radDeliveryCounterBy, "readOnly");

}*/

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.txtAmount1  ::  exit =====
if (drpCurrency1.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.drpCurrency2  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.drpCurrency2  ::  change =====
if((this.boundItem(xfa.event.change) == "KRW")||(this.boundItem(xfa.event.change) == "JPY") || (this.boundItem(xfa.event.change) == "TRY"))
{
	txtAmount2.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount2.resolveNode("value.#decimal").fracDigits = "0";
	txtAmount2.format.picture.value = "num{zzz,zzz,zzz,zz9}";
}
else
{
	txtAmount2.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount2.resolveNode("value.#decimal").fracDigits = "2";
	txtAmount2.format.picture.value = "num{zzz,zzz,zzz,zz9.99}";
}
	

	

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.txtAmount2  ::  exit =====
if (drpCurrency2.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.txtAmount2  ::  change =====
controlScript.changeUpper();

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.chkAmount  ::  change =====
if(this.rawValue == 1)
{
	controlScript.accessChange(radAmount, "open");
	controlScript.mandatoryChange(radAmount, 1);
	controlScript.mandatoryChange(radAmount.Increase, 1);
	controlScript.mandatoryChange(radAmount.Decrease, 1);

	controlScript.accessChange(drpCurrency2, "open");	
	controlScript.populateDropDownlist(drpCurrency2);	
	controlScript.mandatoryChange(drpCurrency2, 1);
	controlScript.accessChange(txtAmount2, "open");
	controlScript.mandatoryChange(txtAmount2, 1);
	
	controlScript.radioMandatoryCheck();
}
else
{
	controlScript.accessChange(radAmount, "readOnly");
	controlScript.mandatoryChange(radAmount, 0);
	controlScript.accessChange(drpCurrency2, "readOnly");	
	controlScript.accessChange(txtAmount2, "readOnly");
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.chkAmount  ::  ready ($form) =====
if(this.rawValue == 1)
{
	controlScript.accessChange(radAmount, "open");
	controlScript.mandatoryChange(radAmount, 1);

	controlScript.accessChange(drpCurrency2, "open");	
	controlScript.populateDropDownlist(drpCurrency2);	
	controlScript.mandatoryChange(drpCurrency2, 1);
	controlScript.accessChange(txtAmount2, "open");
	controlScript.mandatoryChange(txtAmount2, 1);
	
}
else
{
	controlScript.accessChange(radAmount, "readOnly");
	controlScript.mandatoryChange(radAmount, 0);
	controlScript.accessChange(drpCurrency2, "readOnly");	
	controlScript.accessChange(txtAmount2, "readOnly");
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.radAmount  ::  change =====
if(this.rawValue == null){
	controlScript.mandatoryChange(radAmount.Increase, 1);
	controlScript.mandatoryChange(radAmount.Decrease, 1);
}else{
	controlScript.mandatoryChange(radAmount.Increase, 0);
	controlScript.mandatoryChange(radAmount.Decrease, 0);
}
/*
if(this.rawValue == "+" || this.rawValue == "^")
{
	controlScript.mandatoryChange(drpCurrency1, 1);	
	controlScript.mandatoryChange(drpCurrency2, 1);	
	controlScript.mandatoryChange(txtAmount1, 1);	
	controlScript.mandatoryChange(txtAmount2, 1);
}
else
{
	controlScript.mandatoryChange(drpCurrency1, 0);	
	controlScript.mandatoryChange(drpCurrency2, 0);	
	controlScript.mandatoryChange(txtAmount1, 0);	
	controlScript.mandatoryChange(txtAmount2, 0);
}*/

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.drpCurrency1  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.drpCurrency1  ::  change =====
if((this.boundItem(xfa.event.change) == "KRW")||(this.boundItem(xfa.event.change) == "JPY") || (this.boundItem(xfa.event.change) == "TRY"))
{
	txtAmount1.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount1.resolveNode("value.#decimal").fracDigits = "0";
	txtAmount1.format.picture.value = "num{zzz,zzz,zzz,zz9}";
}
else
{
	txtAmount1.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount1.resolveNode("value.#decimal").fracDigits = "2";
	txtAmount1.format.picture.value = "num{zzz,zzz,zzz,zz9.99}";
}

	

// ===== form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.txtDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	if (controlScript.dateCompare( subfrmShipmentDate.txtDate.rawValue, subfrmDateOfExpiry.txtDate.rawValue ))
	{
		this.rawValue = null;
		xfa.host.messageBox("Expiry date cannot be earlier than latest shipment date.");
	}			
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.txtDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.chkExpiryDate  ::  change =====
if(this.rawValue == 1)
{
	controlScript.accessChange( txtDate, "open");
	controlScript.mandatoryChange( txtDate, 1);
}
else
{
	controlScript.accessChange( txtDate, "readOnly");
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.chkExpiryDate  ::  ready ($form) =====
if(this.rawValue == 1)
{
	controlScript.accessChange( txtDate, "open");
	controlScript.mandatoryChange( txtDate, 1);
}
else
{
	controlScript.accessChange( txtDate, "readOnly");
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	if (controlScript.dateCompare( subfrmShipmentDate.txtDate.rawValue, subfrmDateOfExpiry.txtDate.rawValue ))
	{
		this.rawValue = null;
		xfa.host.messageBox("Expiry date cannot be earlier than lastest shipment date.");
	}
}	

// ===== form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.chkShipmentDate  ::  change =====
if(this.rawValue == 1)
{
	controlScript.accessChange( txtDate, "open");
	controlScript.mandatoryChange( txtDate, 1);
}
else
{
	controlScript.accessChange( txtDate, "readOnly");
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.chkShipmentDate  ::  ready ($form) =====
if(this.rawValue == 1)
{
	controlScript.accessChange( txtDate, "open");
	controlScript.mandatoryChange( txtDate, 1);
}
else
{
	controlScript.accessChange( txtDate, "readOnly");
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.radPartialShipment  ::  change =====
if(this.rawValue == null){
	controlScript.mandatoryChange(radPartialShipment.allowed, 1);
	controlScript.mandatoryChange(radPartialShipment.notAllowed, 1);
}else{
	controlScript.mandatoryChange(radPartialShipment.allowed, 0);
	controlScript.mandatoryChange(radPartialShipment.notAllowed, 0);
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.radTranshipment  ::  change =====
if(this.rawValue == null){
	controlScript.mandatoryChange(radTranshipment.allowed, 1);
	controlScript.mandatoryChange(radTranshipment.notAllowed, 1);
}else{
	controlScript.mandatoryChange(radTranshipment.allowed, 0);
	controlScript.mandatoryChange(radTranshipment.notAllowed, 0);
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.chkPartialShipment  ::  change =====
if(this.rawValue == 1)
{
	controlScript.accessChange(radPartialShipment, "open");
	controlScript.mandatoryChange(radPartialShipment, 1);
	controlScript.mandatoryChange(radPartialShipment.allowed, 1);
	controlScript.mandatoryChange(radPartialShipment.notAllowed, 1);
	
	controlScript.radioMandatoryCheck();
}
else
{
	controlScript.accessChange(radPartialShipment, "readOnly");
	controlScript.mandatoryChange(radPartialShipment, 0);
	controlScript.mandatoryChange(radPartialShipment.allowed, 0);
	controlScript.mandatoryChange(radPartialShipment.notAllowed, 0);
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.chkTranshipment  ::  change =====
if(this.rawValue == 1)
{
	controlScript.accessChange(radTranshipment, "open");
	controlScript.mandatoryChange(radTranshipment, 1);
	controlScript.mandatoryChange(radTranshipment.allowed, 1);
	controlScript.mandatoryChange(radTranshipment.notAllowed, 1);
	
	controlScript.radioMandatoryCheck();
}
else
{
	controlScript.accessChange(radTranshipment, "readOnly");
	controlScript.mandatoryChange(radTranshipment, 0);
	controlScript.mandatoryChange(radTranshipment.allowed, 0);
	controlScript.mandatoryChange(radTranshipment.notAllowed, 0);
	
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.chkPeriod  ::  change =====
if(this.rawValue == 1)
{
	controlScript.accessChange( txtAmendNo, "open");
	controlScript.mandatoryChange( txtAmendNo, 1);
}
else
{
	controlScript.accessChange( txtAmendNo, "readOnly");
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.chkPeriod  ::  ready ($form) =====
if(this.rawValue == 1)
{
	controlScript.accessChange( txtAmendNo, "open");
	controlScript.mandatoryChange( txtAmendNo, 1);
}
else
{
	controlScript.accessChange( txtAmendNo, "readOnly");
}

// ===== form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.txtAmendNo  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);

// ===== form1.LC_Amendment.subfrmFoot.subfrmOtherAttachement.txtGoodsDescription  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmFoot.subfrmAccount.radAmendmentCharges  ::  change =====
if(this.rawValue == "Applicant")
{
	controlScript.accessChange(txtAccNo, "open");
	controlScript.mandatoryChange(txtAccNo, 1);
	txtAccNo.presence = "visible";
}	
else
{
	controlScript.accessChange(txtAccNo, "readOnly");
	txtAccNo.presence = "hidden";
}

// ===== form1.LC_Amendment.subfrmFoot.subfrmAccount.txtAccNo  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC_Amendment.subfrmFoot.subfrmAccount.txtFaxNo  ::  change =====
controlScript.toUpperCase();

// ===== form1.LC_Amendment.subfrmFoot.subfrmAccount.subfrmDebitMargin.txtAccNo  ::  change =====
//controlScript.toUpperCase();

// ===== form1.LC_Amendment.subfrmFoot.subfrmAccount.subfrmDebitMargin.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.LC_Amendment.subfrmFoot.subfrmAccount.subfrmDebitMargin.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.LC_Amendment.subfrmFoot.subfrmAccount.subfrmDebitMargin.drpCurrency  ::  change =====
if((this.boundItem(xfa.event.change) == "KRW")||(this.boundItem(xfa.event.change) == "JPY") || (this.boundItem(xfa.event.change) == "TRY"))
{
	txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount.resolveNode("value.#decimal").fracDigits = "0";
	txtAmount.format.picture.value = "num{zzz,zzz,zzz,zz9}";
}
else
{
	txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount.resolveNode("value.#decimal").fracDigits = "2";
	txtAmount.format.picture.value = "num{zzz,zzz,zzz,zz9.99}";
}

	

// ===== form1.LC_Amendment.subfrmFoot.subfrmOthers.btnPrint  ::  click =====
//barcodeScript.LCAmdtbarcode();
form1.MainPage.subfrmMain.txtPrint.rawValue = 1;


form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);



controlScript.selectMandaotoryField();
//controlScript.radioMandatoryCheck();
//controlScript.setMandatoryBackColor();
barcodeScript.LCAmdtbarcode();
/*
var bOk = false;
var retMsgBox = 0;

if(controlScript.setMandatoryBackColor() == 0)
	bOk = true;
else
	bOk = false;


if(bOk == false)
	retMsgBox = xfa.host.messageBox("Mandatory field(s) are not filled in. Are you sure you want to print?","Validation",1,2);
else
	retMsgBox = 4;

if (retMsgBox == 4)
{

			fieldsCheck.checkLCMandatory();

			form1.variables.checkSumValue.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValue.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
if (retMsgBox == 3)
{
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
}
*/

if  (controlScript.setMandatoryBackColor() == 0)	
{		
			form1.variables.checkSumValue.value = controlScript.checkSum();
			 form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValue.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

		

// ===== form1.LC_Amendment.subfrmFoot.subfrmOthers.btnSave  ::  click =====
barcodeScript.cleanUpLCA();
app.execMenuItem("SaveAs");

// ===== form1.LC_Amendment.subfrmFoot.subfrmOthers.PaperFormsBarcodeLCA  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.LC_Amendment.subfrmFoot.subfrmOthers.subfrmBarcodeRecord.txtBarcode.rawValue ;
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

// ===== form1.LC_Amendment.subfrmFoot.subfrmOthers.PaperFormsBarcodeLCA3_1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.LC_Amendment.subfrmFoot.subfrmOthers.subfrmBarcodeRecord.txtBarcode3_1.rawValue;
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

// ===== form1.LC_Amendment  ::  ready ($form) =====
if(subfrmDetail.subfrmCreditAmount.chkAmount.rawValue == 1 && subfrmDetail.subfrmCreditAmount.drpCurrency2.rawValue != null)
{
	controlScript.accessChange( subfrmDetail.subfrmCreditAmount.drpCurrency2, "open");
	controlScript.mandatoryChange( subfrmDetail.subfrmCreditAmount.drpCurrency2, 1);
	controlScript.accessChange( subfrmDetail.subfrmCreditAmount.txtAmount2, "open");
	controlScript.mandatoryChange( subfrmDetail.subfrmCreditAmount.txtAmount2, 1);
}
if(subfrmDetail.subfrmDateOfExpiry.chkExpiryDate.rawValue == 1 && subfrmDetail.subfrmDateOfExpiry.txtDate.rawValue != null)
{
	controlScript.accessChange( subfrmDetail.subfrmDateOfExpiry.txtDate, "open");
	controlScript.mandatoryChange( subfrmDetail.subfrmDateOfExpiry.txtDate, 1);
}
if(subfrmDetail.subfrmShipmentDate.chkShipmentDate.rawValue == 1 && subfrmDetail.subfrmShipmentDate.txtDate.rawValue != null)
{
	controlScript.accessChange( subfrmDetail.subfrmShipmentDate.txtDate, "open");
	controlScript.mandatoryChange( subfrmDetail.subfrmShipmentDate.txtDate, 1);
}
if(subfrmDetail.subfrmPartialshipment.chkPeriod.rawValue == 1 && subfrmDetail.subfrmPartialshipment.txtAmendNo.rawValue != null)
{
	controlScript.accessChange( subfrmDetail.subfrmPartialshipment.txtAmendNo, "open");
	controlScript.mandatoryChange( subfrmDetail.subfrmPartialshipment.txtAmendNo, 1);
}
if(subfrmDetail.subfrmPartialshipment.chkPartialShipment.rawValue == 1)
{
	controlScript.accessChange( subfrmDetail.subfrmPartialshipment.radPartialShipment, "open");
	controlScript.mandatoryChange( subfrmDetail.subfrmPartialshipment.radPartialShipment, 1);
}
if(subfrmDetail.subfrmPartialshipment.chkTranshipment.rawValue == 1)
{
	controlScript.accessChange( subfrmDetail.subfrmPartialshipment.radTranshipment, "open");
	controlScript.mandatoryChange( subfrmDetail.subfrmPartialshipment.radTranshipment, 1);
}

