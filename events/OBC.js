// Event scripts for OBC: 109 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName  ::  full =====
xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.  In this regard, please use the 'Generic BE' instead of the mapping BE.","",1,0);

// ===== form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDrawer.txtContactPerson  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDrawer.txtTel  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency  ::  change =====
if((xfa.event.newText == "THB - THAI BAHTS")||(xfa.event.newText == "JPY - JAPANESE YEN") || (xfa.event.newText == "TRY - TURKISH LIRA"))
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
	

// ===== form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.subfrmDraweeBank.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDrawee.txtDrawee  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmDeliverDocumentAgainst.chkPayment  ::  change =====
controlScript.checkBoxMandatoryChange(chkPayment,chkAcceptance);
if(this.rawValue == "Payment")
	chkAcceptance.rawValue = "0";

// ===== form1.OBC.subfrmOBC.subfrmDeliverDocumentAgainst.chkPayment  ::  ready ($form) =====
this.validate.nullTest = "error";

// ===== form1.OBC.subfrmOBC.subfrmDeliverDocumentAgainst.chkAcceptance  ::  change =====
controlScript.checkBoxMandatoryChange(chkPayment,chkAcceptance);
if(this.rawValue == "Acceptance")
	chkPayment.rawValue = "0";

// ===== form1.OBC.subfrmOBC.subfrmDeliverDocumentAgainst.chkAcceptance  ::  ready ($form) =====
this.validate.nullTest = "error";

// ===== form1.OBC.subfrmOBC.subfrmInvoice.txtInvoice  ::  exit =====
if ((this.rawValue == null)||(this.rawValue == ""))
{
		controlScript.accessChangeBE( BEOBC.subfrmFirst.txtNo, "open" );
		controlScript.accessChangeBE( BEOBC.subfrmSecond.txtNo, "open" );
		BEOBC.subfrmFirst.txtNo.rawValue = this.rawValue;
		BEOBC.subfrmSecond.txtNo.rawValue = this.rawValue;
}
else
{
		controlScript.accessChangeBE( BEOBC.subfrmSecond.txtNo, "readOnly" );
		controlScript.accessChangeBE( BEOBC.subfrmFirst.txtNo, "readOnly" );
		BEOBC.subfrmFirst.txtNo.rawValue = this.rawValue;
		BEOBC.subfrmSecond.txtNo.rawValue = this.rawValue;
}

// ===== form1.OBC.subfrmOBC.subfrmInvoice.txtInvoice  ::  change =====
controlScript.changeUpper();
controlScript.specialCharacterCheck();

// ===== form1.OBC.subfrmOBC.subfrmTenor.radTenor  ::  change =====
if (this.rawValue == "N")
{
		controlScript.accessChange( txtTerm, "open" );
		controlScript.mandatoryChange( txtTerm, 1 );
		controlScript.accessChange( txtDaysAfter, "open" );
		controlScript.mandatoryChange( txtDaysAfter, 1 );

		
		controlScript.accessChange( form1.BEOBC.subfrmFirst.txtAt, "readOnly" );
		controlScript.accessChange( form1.BEOBC.subfrmSecond.txtAt, "readOnly" );	
			
		form1.BEOBC.subfrmFirst.txtAt.rawValue = txtTerm.rawValue + txtDaysAfter.rawValue;
		form1.BEOBC.subfrmSecond.txtAt.rawValue = txtTerm.rawValue + txtDaysAfter.rawValue;
}
else
{
		controlScript.accessChange( txtTerm, "readOnly" );
		controlScript.accessChange( txtDaysAfter, "readOnly" );
		
		controlScript.accessChange( form1.BEOBC.subfrmFirst.txtAt, "readOnly" );
		controlScript.accessChange( form1.BEOBC.subfrmSecond.txtAt, "readOnly" );	
		
		form1.BEOBC.subfrmFirst.txtAt.rawValue = "Sight";
		form1.BEOBC.subfrmSecond.txtAt.rawValue = "Sight";

}

// ===== form1.OBC.subfrmOBC.subfrmTenor.txtTerm  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(3);

// ===== form1.OBC.subfrmOBC.subfrmTenor.txtTerm  ::  exit =====
controlScript.plusNumeric(this);


var str = new String(this.rawValue);

if (str.length > 3)
		this.rawValue = null;

// ===== form1.OBC.subfrmOBC.subfrmTenor.txtDaysAfter  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.subfrmPort.txtVesselNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmPort.txtCRNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmPort.txtGoodsDesc  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmPort.txtDepDated  ::  exit =====
controlScript.dateFormatChange(this);

// ===== form1.OBC.subfrmOBC.subfrmPort.txtDepDated  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmPort.txtPortDisch  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmPort.txtPortLoad  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtDrafts  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtPackingList  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtCertofOrigin  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtInsurancePolicy  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtBLOriginals  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtBLNN  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtWeightNote  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtAirwayBills  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtBenCert  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtInput1  ::  change =====
//controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtInput2  ::  change =====
//controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.txtInput3  ::  change =====
//controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowDocuments.inInput4  ::  change =====
//controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtDrafts  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtDrafts  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInvoice  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtPackingList  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtCertofOrigin  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInsurancePolicy  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtBLOriginals  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtBLOriginals  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtBLNN  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtWeightNote  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtWeightNote  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtAirwayBills  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtAirwayBills  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtBenCert  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtBenCert  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInput2  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInput2  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInput3  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInput3  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInput4  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInput4  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInput5  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.OBC.subfrmOBC.Table.rowOriginal.txtInput5  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtDrafts  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtPackingList  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtCertofOrigin  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtInsurancePolicy  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtBLOriginals  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtBLNN  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtWeightNote  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtAirwayBills  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtBenCert  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtInput1  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtInput2  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtInput3  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.Table.rowCopies.txtInput4  ::  change =====
controlScript.changeUpper();

// ===== form1.OBC.subfrmOBC.subfrmInterestDrawee.chkInterestDrawee  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtAt, "open" );
		controlScript.mandatoryChange( txtAt, 1 );
		controlScript.accessChange( txtFrom, "open");
		controlScript.mandatoryChange( txtFrom, 1 );
		controlScript.accessChange( txtTo, "open");
	//	controlScript.mandatoryChange( txtTo, 1 );

}
else
{
		controlScript.accessChanger( txtAt, "readOnly" );
		controlScript.accessChanger( txtFrom, "readOnly");
		controlScript.accessChanger( txtTo, "readOnly");

}

// ===== form1.OBC.subfrmOBC.subfrmInterestDrawee.chkInterestDrawee  ::  ready ($form) =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtAt, "open" );
		controlScript.mandatoryChange( txtAt, 1 );
		controlScript.accessChange( txtFrom, "open");
		controlScript.mandatoryChange( txtFrom, 1 );
		controlScript.accessChange( txtTo, "open");
	//	controlScript.mandatoryChange( txtTo, 1 );

}
else
{
		controlScript.accessChanger( txtAt, "readOnly" );
		controlScript.accessChanger( txtFrom, "readOnly");
		controlScript.accessChanger( txtTo, "readOnly");

}

// ===== form1.OBC.subfrmOBC.subfrmInterestDrawee.txtAt  ::  exit =====
	
if (this.rawValue < 0)
	this.rawValue = null;

// ===== form1.OBC.subfrmOBC.subfrmInterestDrawee.txtAt  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmInterestDrawee.txtFrom  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmFinance.chkFinance  ::  change =====
if (this.rawValue == 1){
	controlScript.accessChange( txtFor, "open" );
	controlScript.mandatoryChange( txtFor, 1 );
}else
	controlScript.accessChange( txtFor, "readOnly" );

// ===== form1.OBC.subfrmOBC.subfrmFinance.chkFinance  ::  ready ($form) =====
if (this.rawValue == 1)
	controlScript.accessChange( txtFor, "open" );
else
	controlScript.accessChange( txtFor, "readOnly" );

// ===== form1.OBC.subfrmOBC.subfrmFinance.txtFor  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(3);

if (xfa.event.change == ".")
		xfa.event.change ="";

// ===== form1.OBC.subfrmOBC.subfrmFinance.txtFor  ::  exit =====
if (((this.rawValue < 1)||(this.rawValue > 100))&&(this.rawValue != null))
{
		this.rawValue = null;
	xfa.host.messageBox("Please provide valid number between 1 to 100");
}
		

// ===== form1.OBC.subfrmOBC.subfrmCreditFinancing.chkCreditFinancing  ::  change =====
if (this.rawValue == 1){
	controlScript.accessChange( txtNo, "open" );
	controlScript.mandatoryChange( txtNo, 1 );
}else
	controlScript.accessChange( txtNo, "readOnly" );

// ===== form1.OBC.subfrmOBC.subfrmCreditFinancing.chkCreditFinancing  ::  ready ($form) =====
if (this.rawValue == 1)
	controlScript.accessChange( txtNo, "open" );
else
	controlScript.accessChange( txtNo, "readOnly" );

// ===== form1.OBC.subfrmOBC.subfrmCreditFinancing.txtNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmCreditFinancing.txtNo  ::  initialize =====
if (form1.OBC.subfrmOBC.subfrmCreditFinancing.chkCreditFinancing.rawValue == 1)
	controlScript.accessChange( txtNo, "open" );
else
	controlScript.accessChange( txtNo, "readOnly" );

// ===== form1.OBC.subfrmOBC.subfrmFXContract.chkFX  ::  change =====
if (this.rawValue == 1){
		controlScript.accessChange( txtRef, "open" );
		controlScript.mandatoryChange( txtRef, 1 );
}else{
		controlScript.accessChange( txtRef, "readOnly" );

}

// ===== form1.OBC.subfrmOBC.subfrmFXContract.chkFX  ::  ready ($form) =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtRef, "open" );
}
else
{
		controlScript.accessChange( txtRef, "readOnly" );

}

// ===== form1.OBC.subfrmOBC.subfrmFXContract.txtRef  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.#subform[0].subfrmOtherSpecialInstructions.chkOtherSpecialInstructions  ::  change =====
if(this.rawValue == 1)
{
	controlScript.accessChange(txtOtherSpecialInstructions, "open");
	controlScript.mandatoryChange( txtOtherSpecialInstructions, 1 );
//	txtOtherSpecialInstructions.fontColor = "0,0,0";
}
else
{
	controlScript.accessChanger(txtOtherSpecialInstructions, "readOnly");
//	txtOtherSpecialInstructions.fontColor = "255,255,255";
}

// ===== form1.OBC.subfrmOBC.#subform[0].subfrmOtherSpecialInstructions.chkOtherSpecialInstructions  ::  ready ($form) =====
if(this.rawValue == 1)
{
	controlScript.accessChange(txtOtherSpecialInstructions, "open");
//	txtOtherSpecialInstructions.fontColor = "0,0,0";
}
else
{
	controlScript.accessChanger(txtOtherSpecialInstructions, "readOnly");
//	txtOtherSpecialInstructions.fontColor = "255,255,255";
}

// ===== form1.OBC.subfrmOBC.#subform[0].subfrmOtherSpecialInstructions.txtOtherSpecialInstructions  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.OBC.subfrmOBC.subfrmOthers.btnPrint  ::  click =====
	form1.MainPage.subfrmMain.txtPrint.rawValue = 1;

form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);

/*
barcodeScript.OBCbarcode();
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();


			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 0, 0, 0);
*/


controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
//controlScript.setMandatoryBackColor();
barcodeScript.OBCbarcode();
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

			fieldsCheck.checkOBCMandatory();

	form1.variables.checkSumValueOBC.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueOBC.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
if (retMsgBox == 3)
{
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
}*/
if  (controlScript.setMandatoryBackColor() == 0)
{
			form1.variables.checkSumValueOBC.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueOBC.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
		
	form1.MainPage.subfrmMain.txtPrint.rawValue = 0;
		

// ===== form1.OBC.subfrmOBC.subfrmOthers.btnSave  ::  click =====
barcodeScript.cleanUpOBC();
app.execMenuItem("SaveAs");

// ===== form1.OBC.subfrmOBC.subfrmOthers.PaperFormsBarcodeOBC  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.OBC.subfrmOBC.subfrmOthers.txtHiddenField.rawValue ;
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

// ===== form1.OBC.subfrmOBC.subfrmOthers.PaperFormsBarcodeOBC4_1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.OBC.subfrmOBC.subfrmOthers.txtbarcode4_1.rawValue ;
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

// ===== form1.OBC  ::  ready ($form) =====
if (form1.OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue != null){
	if((form1.OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue == "THB")||(form1.OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue == "JPY") || (form1.OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue == "TRY"))
	{
		form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.resolveNode("value.#decimal").leadDigits = "12";
		form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.resolveNode("value.#decimal").fracDigits = "0";
		form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
	}
	else
	{
		form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.resolveNode("value.#decimal").leadDigits = "12";
		form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.resolveNode("value.#decimal").fracDigits = "2";
		form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
	}
}

