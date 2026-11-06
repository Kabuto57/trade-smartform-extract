// Event scripts for EBLC: 134 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmLeft.subfrmBeneficiary.txtBeneficiaryName  ::  full =====
xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.  In this regard, please use the 'Generic BE' instead of the mapping BE.","",1,0);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmLeft.subfrmBeneficiary.txtBeneficiaryName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmLeft.subfrmBeneficiary.txtBeneficiaryAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmLeft.subfrmBeneficiary.txtbeneficiaryAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmLeft.subfrmBeneficiary.txtbeneficiaryAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmLeft.subfrmBeneficiary.txtCreditNo  ::  change =====
controlScript.changeUpper();
controlScript.specialCharacterCheck();

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.subfrmIssueBank.txtIssuingBankName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.subfrmIssueBank.txtIssuingBankName1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.subfrmCreditAmount.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.subfrmCreditAmount.drpCurrency  ::  change =====
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
//form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.txtRate.resolveNode("value.#decimal").leadDigits = "2";
//form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.txtRate.resolveNode("value.#decimal").fracDigits = "4";
//form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.txtRate.format.picture.value = "num{(z9.9999)}";
	

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.subfrmCreditAmount.drpCurrency  ::  exit =====
var finCurr = subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.drpCurrency.rawValue;
		var creCurr = subfrmRight.subfrmCreditAmount.drpCurrency.rawValue;
		
		if ((finCurr == null)||(creCurr == null)|| (finCurr == creCurr))
		{
			controlScript.accessChange(subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.radRequest1, "readOnly" );
			controlScript.accessChange(subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.radRequest2, "readOnly" );
		}
		else
		{
		controlScript.accessChange(subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.radRequest1, "open" );
		controlScript.accessChange(subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.radRequest2, "open" );
		}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.subfrmCreditAmount.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.subfrmCreditAmount.txtAmount  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.txtDated  ::  exit =====
controlScript.dateFormatChange(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmRight.txtDated  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmContactPerson.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmContactPerson.txtTelNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmContactPerson.txtFaxNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmReject.chkReject  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtReject, "open" );
		controlScript.mandatoryChange( txtReject, 1 );

}
else
{
		controlScript.accessChange( txtReject, "readOnly" );
}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmReject.txtReject  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmBankUse.txtDraftInvNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmVerssel.txtVesselName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmVerssel.txtIMONo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.radTenor  ::  change =====
if (this.rawValue == "N")
{
		controlScript.accessChange( txtTerm, "open" );
		controlScript.mandatoryChange( txtTerm, 1 );
		controlScript.accessChange( txtDaysAfter, "open" );
		controlScript.mandatoryChange( txtDaysAfter, 1 );
}

else
{
		controlScript.accessChanger( txtTerm, "readOnly" );
		controlScript.accessChanger( txtDaysAfter, "readOnly" );	
}
if (this.rawValue == "Date")
{
	controlScript.accessChange( txtTenorDate, "open" );
		controlScript.mandatoryChange( txtTenorDate, 1 );
	
}else{
	controlScript.accessChanger( txtTenorDate, "readOnly" );
}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.radTenor  ::  ready ($form) =====
if (this.rawValue == "N")
{
		controlScript.accessChange( txtTerm, "open" );
		controlScript.mandatoryChange( txtTerm, 1 );
		controlScript.accessChange( txtDaysAfter, "open" );
		controlScript.mandatoryChange( txtDaysAfter, 1 );
		txtTenorDate.access = "readOnly";
		txtTenorDate.rawValue = null;

}

else
{
		controlScript.accessChanger( txtTerm, "readOnly" );
		controlScript.accessChanger( txtDaysAfter, "readOnly" );	
		txtTenorDate.access = "readOnly";
		txtTenorDate.rawValue = null;

}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtTerm  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(3);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtTerm  ::  exit =====
controlScript.plusNumeric(this);


var str = new String(this.rawValue);

if (str.length > 3)
		this.rawValue = null;

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtDaysAfter  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtTenorDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	/*form1.MainPage.subfrmMain.txtEBLC.rawValue = this.rawValue;

	controlScript.accessChangeBE( form1.BEEBLC.subfrmFirst.txtDate, "readOnly" );
	controlScript.accessChangeBE( form1.BEEBLC.subfrmSecond.txtDate, "readOnly" );
	
 	form1.BEEBLC.subfrmFirst.txtDate.rawValue = this.rawValue;
 	form1.BEEBLC.subfrmSecond.txtDate.rawValue = this.rawValue;*/
}





		

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtTenorDate  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtPortDisch  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtPortLoad  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtGoodsDesc  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtDepDated  ::  exit =====
controlScript.dateFormatChange(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtDepDated  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmTenor.txtCRNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtDrafts  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtPackingList  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtWeightNote  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtCertofOrigin  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtInsPolicy  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtBL  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtAirwayBills  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtBenCert  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtInput1  ::  change =====
//controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtInput2  ::  change =====
//controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtInput3  ::  change =====
//controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtInput4  ::  change =====
//controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowHeader.txtInput5  ::  change =====
//controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtDrafts  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtDrafts  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInvoice  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtPackingList  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtWeightNote  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtCertofOrigin  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInspolicy  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInspolicy  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtBL  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtAirwayBills  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtAirwayBills  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtBenCert  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtBenCert  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput1  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput1  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput2  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput2  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput3  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput3  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput4  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput4  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput5  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowOriginal.txtInput5  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtDrafts  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtDrafts  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInvoice  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtPackingList  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtWeightNote  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtCertofOrigin  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInsPolicy  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInsPolicy  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtBL  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtBL  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtAirwayBills  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtAirwayBills  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtBenCert  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtBenCert  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput1  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput1  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput2  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput2  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput3  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput3  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput4  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput4  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput5  ::  exit =====
controlScript.changeUpper();
//controlScript.plusNumeric(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].Table1.rowCopies.txtInput5  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].drpBank  ::  change =====
controlScript.changeUpper();

if (xfa.event.newText == "with other bank")
{
		controlScript.accessChange( txtBank, "open" );
		controlScript.mandatoryChange( txtBank, 1 );
}
else
{
		controlScript.accessChange( txtBank, "readOnly" );
}

// ===== form1.EBLC.subfrmEBLC.#subform[0].txtBank  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.radFinancing.DoNotNeed  ::  click =====
/*
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.presence = "hidden";
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.presence = "hidden";
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.lblSymDesc2.presence = "hidden";
		btnShow.presence = "visible";
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.btnHide.presence = "hidden";
*/

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.radFinancing.Request  ::  click =====
/*
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.presence = "visible";
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.presence = "visible";
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.lblSymDesc2.presence = "visible";
		btnShow.presence = "hidden";
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.btnHide.presence = "visible";
*/

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.radFinancing  ::  change =====
if (this.rawValue == "Request")
{
		controlScript.accessChange(subfrmFinanceDetails.subfrmOptions.radRequest1, "open" );
		subfrmFinanceDetails.subfrmOptions.radRequest1.rawValue = "WithRecourse";
		controlScript.accessChange(subfrmFinanceDetails.subfrmOptions.radRequest2, "open" );
		subfrmFinanceDetails.subfrmOptions.radRequest2.rawValue = "AfterAcceptance";
		
		controlScript.accessChange(txtRate, "open" );
		controlScript.accessChange(subfrmFinanceDetails.subfrmOptions.drpCurrency, "open" );
		
		controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.radRequest1, "open" );
		controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.radRequest2, "open" );
		
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmOtherInstructions.radProceedOptions.rawValue = "Immediately";
				
}
else
{
		controlScript.accessChange(subfrmFinanceDetails.subfrmOptions.radRequest1, "readOnly" );
		controlScript.accessChange(subfrmFinanceDetails.subfrmOptions.radRequest2, "readOnly" );
		controlScript.accessChange(txtRate, "readOnly" );
		controlScript.accessChange(subfrmFinanceDetails.subfrmOptions.drpCurrency, "readOnly" );
		
		controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.radRequest1, "readOnly" );
		controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.radRequest2, "readOnly" );
		controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.txtRate, "readOnly" );
}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.txtRate  ::  exit =====
if (drpCurrency.rawValue == null)
{
	//this.rawValue = null;
}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.txtRate  ::  change =====
controlScript.changeUpper();

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.drpCurrency  ::  change =====
/*
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
*/
	

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.drpCurrency  ::  exit =====
		var finCurr = subfrmFinanceDetails.subfrmOptions.drpCurrency.rawValue;
		var creCurr = subfrmRight.subfrmCreditAmount.drpCurrency.rawValue;
		
		if ((finCurr == null)||(creCurr == null)|| (finCurr == creCurr))
		{
			controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.radRequest1, "readOnly" );
			controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.radRequest2, "readOnly" );
		}
		else
		{
		controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.radRequest1, "open" );
		controlScript.accessChange(subfrmFinanceDetails2.subfrmOptions.radRequest2, "open" );
		}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.radRequest1  ::  change =====
if (this.rawValue == "withoutHedging")
{
		controlScript.accessChange( txtRate, "open" );
		controlScript.mandatoryChange( txtRate, 1 );
		radRequest2.deliverable.access = "readOnly";
		radRequest2.nonDeliverable.access = "readOnly";
		radRequest2.currencyOption.access = "readOnly";
			radRequest2.deliverable.rawValue = "";
	radRequest2.nonDeliverable.rawValue = "";
	radRequest2.currencyOption.rawValue = "";

}
else
{
		controlScript.accessChange( txtRate, "readOnly" );
				radRequest2.deliverable.access = "open";
	radRequest2.nonDeliverable.access = "open";
	radRequest2.currencyOption.access = "open";
	radRequest2.deliverable.rawValue = "";
	radRequest2.nonDeliverable.rawValue = "";
	radRequest2.currencyOption.rawValue = "";


}

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.txtRate  ::  change =====
controlScript.ForceNumberAndDecimalOnly(this);

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.txtRate  ::  exit =====
if(txtRate.rawValue != null)
{
	var split_looptijden_1 = txtRate.rawValue.toString().split('.');
	
	if(split_looptijden_1[0] != null && split_looptijden_1[0] > 100){
		xfa.host.messageBox("Please enter digit value of 0 to 100");
		txtRate.rawValue = "";
		xfa.host.setFocus(xfa.resolveNode("form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.txtRate"));
	}else if(split_looptijden_1[1] != null && split_looptijden_1[1].length > 2){
		xfa.host.messageBox("Please enter a maximum of two decimal places");
		txtRate.rawValue = "";
		xfa.host.setFocus(xfa.resolveNode("form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.txtRate"));
	}

}
	

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.btnShow  ::  click =====
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.presence = "visible";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.presence = "visible";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.lblSymDesc2.presence = "visible";
this.presence = "hidden";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.btnHide.presence = "visible";

// ===== form1.EBLC.subfrmEBLC.#subform[0].subfrmfinancing.subfrmFinancing.btnHide  ::  click =====
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.presence = "hidden";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.presence = "hidden";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.lblSymDesc2.presence = "hidden";
this.presence = "hidden";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.btnShow.presence = "visible";

// ===== form1.EBLC  ::  ready ($form) =====
if (form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue != null){
	if((form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue == "THB")||(form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue == "JPY") || (form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue == "TRY"))
	{
		form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.resolveNode("value.#decimal").leadDigits = "12";
		form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.resolveNode("value.#decimal").fracDigits = "0";
		form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
	}
	else
	{
		form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.resolveNode("value.#decimal").leadDigits = "12";
		form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.resolveNode("value.#decimal").fracDigits = "2";
		form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
	}
}
/*form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.presence = "hidden";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.presence = "hidden";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.lblSymDesc2.presence = "hidden";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.btnHide.presence  = "hidden";
form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.btnShow.presence = "visible";*/
subfrmEBLC.subfrmTenor.txtTenorDate.access = "readOnly";

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.radProceedOptions  ::  change =====
if (this.rawValue == "Immediately")
{
		controlScript.accessChange(txtDate, "readOnly" );
}
else
{
		controlScript.accessChange(txtDate, "open" );
}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.chkCreditFund  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtCreditFund, "open" );
		controlScript.mandatoryChange( txtCreditFund, 1 );
}
else
{
		controlScript.accessChange( txtCreditFund, "readOnly" );
}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.chkCreditFund  ::  ready ($form) =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtCreditFund, "open" );
	}
else
{
		controlScript.accessChange( txtCreditFund, "readOnly" );
}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtCreditFund  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.chkRemitTheFunds  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtRemitTheFunds, "open" );
		controlScript.mandatoryChange( txtRemitTheFunds, 1 );
}
else
{
		controlScript.accessChanger( txtRemitTheFunds, "readOnly" );

}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.chkRemitTheFunds  ::  ready ($form) =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtRemitTheFunds, "open" );
		controlScript.mandatoryChange( txtRemitTheFunds, 1 );
}
else
{
		controlScript.accessChanger( txtRemitTheFunds, "readOnly" );

}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtRemitTheFunds  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.chkUseTheFunds  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange(txtUseTheFunds, "open" );
		controlScript.mandatoryChange(txtUseTheFunds, 1 );
//		txtUseTheFunds.fontColor = "0,0,0";
}
else
{
		controlScript.accessChanger(txtUseTheFunds, "readOnly" );
//		txtUseTheFunds.fontColor = "255,255,255";

}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.chkUseTheFunds  ::  ready ($form) =====
if (this.rawValue == 1)
{
		controlScript.accessChange(txtUseTheFunds, "open" );
		controlScript.mandatoryChange(txtUseTheFunds, 1 );
//		txtUseTheFunds.fontColor = "0,0,0";
}
else
{
		controlScript.accessChanger(txtUseTheFunds, "readOnly" );
//		txtUseTheFunds.fontColor = "255,255,255";

}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtUseTheFunds  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.chkUseFX  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtUseFX, "open" );
		controlScript.mandatoryChange( txtUseFX, 1 );
//		txtUseFX.fontColor = "0,0,0";
}
else
{
		controlScript.accessChanger( txtUseFX, "readOnly" );
//		txtUseFX.fontColor = "255,255,255";
}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.chkUseFX  ::  ready ($form) =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtUseFX, "open" );
//		txtUseFX.fontColor = "0,0,0";
}
else
{
		controlScript.accessChanger( txtUseFX, "readOnly" );
//		txtUseFX.fontColor = "255,255,255";
}

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtUseFX  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtOthers1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EBLC.subfrmEBLC2.subfrmOthers.btnPrint  ::  click =====
	form1.MainPage.subfrmMain.txtPrint.rawValue = 1;

form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);
/*
barcodeScript.EBLCbarcode();
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 0, 0, 0);
*/


controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
barcodeScript.EBLCbarcode();
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

	barcodeScript.EBLCbarcode();

	fieldsCheck.checkBEMandatory();

	form1.variables.checkSumValueEBLC.value = controlScript.checkSum();
	form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueEBLC.value;
	xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
if (retMsgBox == 3)
{
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
}*/

if  (controlScript.setMandatoryBackColor() == 0)
{
			form1.variables.checkSumValueEBLC.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueEBLC.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
		
	form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

// ===== form1.EBLC.subfrmEBLC2.subfrmOthers.btnSave  ::  click =====
barcodeScript.cleanUpEBLC();
app.execMenuItem("SaveAs");

// ===== form1.EBLC.subfrmEBLC2.subfrmOthers.PaperFormsBarcode1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.EBLC.subfrmEBLC2.subfrmOthers.txtBarcode1.rawValue ;
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

// ===== form1.EBLC.subfrmEBLC2.subfrmOthers.PaperFormsBarcode2  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.EBLC.subfrmEBLC2.subfrmOthers.txtBarcode2.rawValue ;
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

// ===== form1.EBLC  ::  initialize =====
//subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue = null;
//subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue = null;

