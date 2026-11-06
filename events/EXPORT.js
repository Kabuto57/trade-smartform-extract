// Event scripts for EXPORT: 140 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.EXPORT.EXPORTBcode.txtEXPORTDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{	
	form1.MainPage.subfrmMain.txtEXPORT.rawValue = this.rawValue;
}		
if (this.rawValue == null)
		controlScript.currentDate( this );

// ===== form1.EXPORT.EXPORTBcode.txtEXPORTDate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtEXPORT.rawValue;

// ===== form1.EXPORT.EXPORTBcode.txtEXPORTDate  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.EXPORT.subfrm.applicant.subfrmApplicant.txtName  ::  full =====
xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.EXPORT.subfrm.applicant.subfrmApplicant.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.applicant.subfrmApplicant.txtContractName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.applicant.subfrmApplicant.txtTel  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.applicant.subfrmApplicant.txtFax  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment  ::  change =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtCreditNo, "open" );
	controlScript.mandatoryChange( txtCreditNo, 1 );

}
else
{
	controlScript.accessChange( txtCreditNo, "readOnly" );
	controlScript.mandatoryChange( txtCreditNo, 0 );
	
}

// ===== form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment  ::  ready ($form) =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtCreditNo, "open" );
	controlScript.mandatoryChange( txtCreditNo, 1 );

}
else
{
	controlScript.accessChange( txtCreditNo, "readOnly" );
	controlScript.mandatoryChange( txtCreditNo, 0 );
	
}

// ===== form1.EXPORT.subfrm.applicant.subfrmShipment.txtCreditNo  ::  change =====
controlScript.changeUpper();
//controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.applicant.subfrmShipment.txtCreditNo  ::  exit =====
if(this.rawValue != null)
{
	var regExp = /^\d{12}$/;
	
	if(!regExp.test(this.rawValue)) 
	{
		this.rawValue = null;
		xfa.host.messageBox("Please input Letter of Credit No. in the following format:\ne.g.\n1) 553010012345\n2) 553030067890");
		xfa.host.setFocus(this);
		
	}
}

if(this.rawValue != null)
{
	var str = this.rawValue;
	var len = str.length - 5;		

	var num1 = str.substr(0,3);
	var num2 = str.substr(3,2);
	var num3 = str.substr(5,len);
		
	this.rawValue = num1 + "-" + num2 + "-" + num3;
}

// ===== form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtName  ::  full =====
xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBuyer.subBName.txtBName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBuyer.#subform[0].add.btnAdd  ::  click =====
if (form1.EXPORT.subfrm.thirdParty._subfrmBuyer.count < 10)
{
	var objNewRow = form1.EXPORT.subfrm.thirdParty._subfrmBuyer.addInstance();
	var i = form1.EXPORT.subfrm.thirdParty.subfrmBuyer.instanceManager.count - 1;

	form1.EXPORT.subfrm.thirdParty.subfrmBuyer.instanceManager.moveInstance(i,0);
	form1.EXPORT.subfrm.thirdParty.subfrmBuyer.instanceManager.moveInstance(0,i);		
}
else
{
	app.alert("Maximum 10 Buyers!");
}

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBuyer.#subform[0].delete.btnDelete  ::  click =====
//RTGSScript.getTotalRemittanceAmount(this.parent.parent.parent.details.txtRemitAmtRTGS.rawValue);
form1.EXPORT.subfrm.thirdParty._subfrmBuyer.removeInstance(this.parent.parent.parent.index);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBuyer.#subform[0].delete.btnDelete  ::  initialize =====
if (this.parent.parent.parent.index < 1) this.presence = "hidden";

// ===== form1.EXPORT.subfrm.thirdParty.subfrmSupDetails.txtName  ::  full =====
//xfa.host.setFocus(xfa.resolveNode("form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1"));

xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmSupDetails.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmSupDetails.txtCity  ::  full =====
//xfa.host.setFocus(xfa.resolveNode("form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1"));

// ===== form1.EXPORT.subfrm.thirdParty.subfrmSupDetails.txtCity  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmSupDetails.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmSupDetails.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmSupDetails.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBillAmount.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBillAmount.drpCurrency  ::  change =====
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

	

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBillAmount.drpCurrency  ::  exit =====
 var cury = this.rawValue;
 
 var FACurrency = cury.substring(0,3);
// form1.DBRP.subfrmAPF.subfrmSupp.drpCurrency.rawValue = FACurrency;
  form1.EXPORT.subfrm.subfrmContract.subFx.drpCurrency.rawValue = FACurrency;
  form1.EXPORT.subfrm.subfrmFinancing.drpCurrency2.rawValue = FACurrency;
 
 var selectedCurrency =  FACurrency;
		for (var i = 0 ; i < form1.EXPORT.subfrm.subfrmContract.subFx.instanceManager.count; i++)
		{
			form1.EXPORT.subfrm.subfrmContract.subFx.instanceManager.moveInstance(i,0);
			form1.EXPORT.subfrm.subfrmContract.subFx.drpCurrency.rawValue = selectedCurrency;
			//currencyScript.validateCurrency(selectedCurrency, form1.BTApp.RecipientDetails.CreditDetails.txtAmount, currencyList.currency_SP);
			form1.EXPORT.subfrm.subfrmContract.subFx.instanceManager.moveInstance(0,i);
		}

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBillAmount.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}
form1.EXPORT.subfrm.subfrmFinancing.drpCurrency2.rawValue = drpCurrency.rawValue;
form1.EXPORT.subfrm.subfrmFinancing.txtAmount.rawValue = this.rawValue;

// ===== form1.EXPORT.subfrm.thirdParty.subfrmBillAmount.txtAmount  ::  change =====
controlScript.ForceNumberAndDecimalOnly(this);

// ===== form1.EXPORT.subfrm.#subform[0].subfrmFinancing.drpFinanceCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.EXPORT.subfrm.#subform[0].subfrmFinancing.drpFinanceCurrency  ::  change =====
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

	

// ===== form1.EXPORT.subfrm.#subform[0].subfrmFinancing.txtdays  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(3);

controlScript.forceNumberOnly();

// ===== form1.EXPORT.subfrm.#subform[0].subfrmFinancing.txtContractNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.#subform[0].subfrmFinancing.txtAmount  ::  exit =====
/*
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

*/

// ===== form1.EXPORT.subfrm.#subform[0].subfrmFinancing.txtAmount  ::  change =====
controlScript.ForceNumberAndDecimalOnly(this);

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.subFx.txtFXContractSeq  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.subFx.txtFXContractSeq  ::  exit =====
if (controlScript.empty(this.rawValue) == false){
	if(this.rawValue.length < 2){
		xfa.host.messageBox("FX Contract Sequence must be 2 digits");
		xfa.host.setFocus(this);
	}
}

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.subFx.txtContractNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.subFx.txtContractNo  ::  exit =====
if(controlScript.empty(this.rawValue)){
	txtFXContractSeq.rawValue = '';
}else{
	if(this.rawValue.length < 8){
		xfa.host.messageBox("FX Contract No. must be 8 digits");
		xfa.host.setFocus(this);
	}else{
		if(controlScript.empty(txtFXContractSeq.rawValue)){
			txtFXContractSeq.rawValue = '01';
		}
	}
}

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.subFx.txtAmount  ::  exit =====
/*

if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}*/

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.subFx.txtAmount  ::  change =====
controlScript.ForceNumberAndDecimalOnly(this);

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.#subform[0].add.btnAdd  ::  click =====
if (form1.EXPORT.subfrm._subfrmContract.count < 5)
{
	var objNewRow = form1.EXPORT.subfrm._subfrmContract.addInstance();
	//RTGSScript.selectTable();
	//xfa.host.setFocus(objNewRow.details.txtBeneName.somExpression);
	var i = form1.EXPORT.subfrm.subfrmContract.instanceManager.count - 1;
	var selectedCurrency = form1.EXPORT.subfrm.subfrmContract.subFx.drpCurrency.rawValue;
	form1.EXPORT.subfrm.subfrmContract.instanceManager.moveInstance(i,0);
	form1.EXPORT.subfrm.subfrmContract.subFx.drpCurrency.rawValue = selectedCurrency;
	form1.EXPORT.subfrm.subfrmContract.instanceManager.moveInstance(0,i);		
}
else
{
	app.alert("Maximum 5 contracts!");
}

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.#subform[0].add.btnAdd  ::  initialize =====
//if (this.parent.parent.parent.index < 1) this.presence = "hidden";

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.#subform[0].delete.btnDelete  ::  click =====
//RTGSScript.getTotalRemittanceAmount(this.parent.parent.parent.details.txtRemitAmtRTGS.rawValue);
form1.EXPORT.subfrm._subfrmContract.removeInstance(this.parent.parent.parent.index);

// ===== form1.EXPORT.subfrm.#subform[0].subfrmContract.#subform[0].delete.btnDelete  ::  initialize =====
if (this.parent.parent.parent.index < 1) this.presence = "hidden";

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subPurchase.radDescrip  ::  change =====
if (this.rawValue == "S")
{
	controlScript.accessChange( txtServices, "open" );
	controlScript.mandatoryChange( txtServices, 1 );
	
	controlScript.accessChange(txtGoods, "readOnly" );
	txtGoods.rawValue = null;

}else if (this.rawValue == "G")
{
	controlScript.accessChange( txtGoods, "open" );
	controlScript.mandatoryChange( txtGoods, 1 );
	
	controlScript.accessChange(txtServices, "readOnly" );
	txtServices.rawValue = null;
}

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subPurchase.radDescrip  ::  ready ($form) =====
if (this.rawValue == "S")
{
	controlScript.accessChange( txtServices, "open" );
	controlScript.mandatoryChange( txtServices, 1 );
	
	controlScript.accessChange(txtGoods, "readOnly" );
	txtGoods.rawValue = null;

}else if (this.rawValue == "G")
{
	controlScript.accessChange( txtGoods, "open" );
	controlScript.mandatoryChange( txtGoods, 1 );
	
	controlScript.accessChange(txtServices, "readOnly" );
	txtServices.rawValue = null;
}

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subPurchase.txtServices  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subPurchase.txtGoods  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subfrmDescription.txtDescription1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subfrmDescription.txtDescription2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subfrmDescription.txtDescription3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subfrmDescription.txtDescription4  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.#subform[0].#subform[0].subfrmDescription.txtDescription5  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.briefDescription.subfrmDescription.txtDescription1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.briefDescription.subfrmDescription.txtDescription2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.briefDescription.subfrmDescription.txtDescription3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.briefDescription.subfrmDescription.txtDescription4  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.briefDescription.subfrmDescription.txtDescription5  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.briefDescription.subfrmFinancing.drpFinanceCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.EXPORT.subfrm.briefDescription.subfrmFinancing.txtDays  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(3);

// ===== form1.EXPORT.subfrm.briefDescription.subfrmFinancing.txtContractNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.docAttached.Table.rowDocuments.txtInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowDocuments.txtLanding  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowDocuments.txtAirBill  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowDocuments.txtDelivery  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowDocuments.txtLCOriginal  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowDocuments.txtLCAmdt  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowDocuments.txtInput1  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowDocuments.txtInput2  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowCopies.txtInput1  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowCopies.txtInput2  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowCopies.txtInput3  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowCopies.txtInput4  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowCopies.txtInput5  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowCopies.txtInput6  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowCopies.txtInput7  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.docAttached.Table.rowCopies.txtInput8  ::  change =====
controlScript.changeUpper();

// ===== form1.EXPORT.subfrm.disbursement.radDisbursement  ::  change =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtCreditAccNo, "open" );
	controlScript.mandatoryChange( txtCreditAccNo, 1 );
	controlScript.accessChange( drpCCurrency, "open" );
	controlScript.mandatoryChange( drpCCurrency, 1 );
	txtOthers1.rawValue = null;
	txtOthers2.rawValue = null;
	txtOthers3.rawValue = null;
}
else
{
	controlScript.accessChange( txtCreditAccNo, "readOnly" );
	controlScript.mandatoryChange( txtCreditAccNo, 0 );	
	controlScript.accessChange( drpCCurrency, "readOnly" );
	controlScript.mandatoryChange( drpCCurrency, 0 );	
}

if(this.rawValue == "2")
{
	controlScript.accessChange( txtOthers1, "open" );
	controlScript.mandatoryChange( txtOthers1, 1 );
	controlScript.accessChange( txtOthers2, "open" );
	controlScript.accessChange( txtOthers3, "open" );
	drpCCurrency.rawValue = null;
	txtCreditAccNo.rawValue = null;
}
else
{
	controlScript.accessChange( txtOthers1, "readOnly" );
	controlScript.mandatoryChange( txtOthers1, 0 );	
	controlScript.accessChange( txtOthers2, "readOnly" );
	controlScript.accessChange( txtOthers3, "readOnly" );
}

// ===== form1.EXPORT.subfrm.disbursement.radDisbursement  ::  ready ($form) =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtCreditAccNo, "open" );
	controlScript.mandatoryChange( txtCreditAccNo, 1 );
}
else
{
	controlScript.accessChange( txtCreditAccNo, "readOnly" );
	controlScript.mandatoryChange( txtCreditAccNo, 0 );	
}

if(this.rawValue == "2")
{
	controlScript.accessChange( txtOthers1, "open" );
	controlScript.mandatoryChange( txtOthers1, 1 );
	controlScript.accessChange( txtOthers2, "open" );
	controlScript.accessChange( txtOthers3, "open" );
}
else
{
	controlScript.accessChange( txtOthers1, "readOnly" );
	controlScript.mandatoryChange( txtOthers1, 0 );	
	controlScript.accessChange( txtOthers2, "readOnly" );
	controlScript.accessChange( txtOthers3, "readOnly" );
}

// ===== form1.EXPORT.subfrm.disbursement.txtCreditAccNo  ::  change =====
controlScript.forceNumberOnly();

if (drpCCurrency.rawValue == "SGD")
{
	controlScript.lengthLimit(10);
}

// ===== form1.EXPORT.subfrm.disbursement.txtCreditAccNo  ::  exit =====
if (this.rawValue != null && drpCCurrency.rawValue != 'SGD' && this.rawValue.length != 10)
{
	if (this.rawValue.length < 10 || this.rawValue.length < 13)
	{
		app.alert("Invalid Account No.");
		this.rawValue = "";
		xfa.host.setFocus(this);
	}
}
if (this.rawValue != null && drpCCurrency.rawValue == 'SGD' && this.rawValue.length != 10)
{
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}

// ===== form1.EXPORT.subfrm.disbursement.txtOthers1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.disbursement.txtOthers2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.disbursement.txtOthers3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.disbursement.drpCCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.EXPORT.subfrm.disbursement.drpCCurrency  ::  change =====
txtCreditAccNo.rawValue = null;

// ===== form1.EXPORT.subfrm.disbursement.drpCCurrency  ::  exit =====
if(this.rawValue != null && txtA_Account.rawValue == null)
{
	xfa.host.setFocus(txtA_Account);
//	controlScript.mandatoryChange( txtA_Account, 1 );	
}
else if(this.rawValue != null || this.rawValue != "")
{
//	controlScript.mandatoryChange( this, 0 );
//	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.txtDebitAcc  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(Number.value);

// ===== form1.EXPORT.subfrm.subfrmDebitComm.txtDebitAcc  ::  exit =====
if (this.rawValue.length < 9) {
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this.somExpression);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.drpDebitCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.EXPORT.subfrm.subfrmDebitComm.drpDebitCurrency  ::  exit =====
if(this.rawValue == "SGD")
{
	if (txtDebitAcc.rawValue.length != 10) {
		app.alert("Invalid Account No. for SGD");
		txtDebitAcc.rawValue = "";
		xfa.host.setFocus(txtDebitAcc.somExpression);
	}
}else if (this.rawValue != "SGD")
{
	if (txtDebitAcc.rawValue.length != 13) {
		app.alert("Invalid Account No.");
		txtDebitAcc.rawValue = "";
		xfa.host.setFocus(txtDebitAcc.somExpression);
	}
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[0].txtFXContractNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[0].txtFXContractNo  ::  exit =====
if(controlScript.empty(this.rawValue)){
	txtFXContractSeq.rawValue = '';
}else{
	if(this.rawValue.length < 8){
		xfa.host.messageBox("FX Contract No. must be 8 digits");
		xfa.host.setFocus(this);
	}else{
		if(controlScript.empty(txtFXContractSeq.rawValue)){
			txtFXContractSeq.rawValue = '01';
		}
	}
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[0].txtFXContractSeq  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[0].txtFXContractSeq  ::  exit =====
if (controlScript.empty(this.rawValue) == false){
	if(this.rawValue.length < 2){
		xfa.host.messageBox("FX Contract Sequence must be 2 digits");
		xfa.host.setFocus(this);
	}
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[1].drpCurrency1  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[1].drpCurrency1  ::  change =====
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

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[1].drpCurrency1  ::  exit =====
if(this.rawValue != null && txtAccount.rawValue == null)
{
	xfa.host.setFocus(txtAccount);
	controlScript.mandatoryChange( txtAccount, 1 );
	
	drpCurrency2.access = "readOnly";
	txtDebitAccNo.access = "readOnly";
	drpCurrency3.access = "readOnly";
	txtInterestAccNo.access = "readOnly";
	drpCurrency2.rawValue = null;
	txtDebitAccNo.rawValue = null;
	txtInterestAccNo.rawValue = null; 
	controlScript.mandatoryChange( drpCurrency2, 0 );
	controlScript.changeNormalColor(drpCurrency2);
	controlScript.mandatoryChange(txtDebitAccNo, 0 );
	controlScript.changeNormalColor(txtDebitAccNo);
	
}
else if (this.rawValue == null || this.rawValue == "")
{
	txtAccount.rawValue = null;
	drpCurrency2.access = "open";
	txtDebitAccNo.access = "open";
	drpCurrency3.access = "open";
	txtInterestAccNo.access = "open";
	
	controlScript.mandatoryChange( txtAccount, 0 );
	controlScript.changeNormalColor(txtAccount);
}
else if(this.rawValue != null || this.rawValue != "")
{
	controlScript.mandatoryChange( this, 0 );
	controlScript.changeNormalColor(this);
}
else if(this.rawValue != null && txtDebitAccNo.rawValue != null)
{
	drpCurrency2.access = "readOnly";
	txtDebitAccNo.access = "readOnly";
	drpCurrency3.access = "readOnly";
	txtInterestAccNo.access = "readOnly";
	drpCurrency2.rawValue = null;
	txtDebitAccNo.rawValue = null;
	txtInterestAccNo.rawValue = null; 
	controlScript.mandatoryChange( drpCurrency2, 0 );
	controlScript.changeNormalColor(drpCurrency2);
	controlScript.mandatoryChange(txtDebitAccNo, 0 );
	controlScript.changeNormalColor(txtDebitAccNo);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[1].txtAccount  ::  exit =====
if (this.rawValue != null && this.rawValue.length < 9) 
{
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}
if (drpCurrency1.rawValue == null && this.rawValue != null)
{
	//this.rawValue = null;
	controlScript.mandatoryChange( drpCurrency1, 1 );
	
	drpCurrency2.access = "readOnly";
	txtDebitAccNo.access = "readOnly";
	drpCurrency3.access = "readOnly";
	txtInterestAccNo.access = "readOnly";
	
	drpCurrency2.rawValue = null;
	txtDebitAccNo.rawValue = null;
	txtInterestAccNo.rawValue = null; 
	
	controlScript.mandatoryChange( drpCurrency2, 0 );
	controlScript.changeNormalColor(drpCurrency2);
	controlScript.mandatoryChange(txtDebitAccNo, 0 );
	controlScript.changeNormalColor(txtDebitAccNo);
}
else
{
	controlScript.mandatoryChange( drpCurrency1, 0 );
	controlScript.changeNormalColor(drpCurrency1);
	drpCurrency2.access = "open";
	txtDebitAccNo.access = "open";
	drpCurrency3.access = "open";
	txtInterestAccNo.access = "open";
}
if(drpCurrency1.rawValue != null && this.rawValue == null)
{
//	xfa.host.messageBox("Please fill in Account No.");
//	xfa.host.setFocus(this);
	controlScript.mandatoryChange( this, 1 );
}

if(this.rawValue != null && drpCurrency1.rawValue != null) 
{
	drpCurrency2.access = "readOnly";
	txtDebitAccNo.access = "readOnly";
	drpCurrency3.access = "readOnly";
	txtInterestAccNo.access = "readOnly";
	drpCurrency2.rawValue = null;
	txtDebitAccNo.rawValue = null;
	txtInterestAccNo.rawValue = null; 
	controlScript.mandatoryChange( drpCurrency2, 0 );
	controlScript.changeNormalColor(drpCurrency2);
	controlScript.mandatoryChange(txtDebitAccNo, 0 );
	controlScript.changeNormalColor(txtDebitAccNo);
	
	controlScript.mandatoryChange( this, 0 );
	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[1].txtAccount  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[2].drpCurrency2  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[2].drpCurrency2  ::  exit =====
if(this.rawValue != null && txtDebitAccNo.rawValue == null)
{
	xfa.host.setFocus(txtDebitAccNo);
	controlScript.mandatoryChange( txtDebitAccNo, 1 );
	
	drpCurrency1.access = "readOnly";
	txtAccount.access = "readOnly";
	drpCurrency3.access = "readOnly";
	txtInterestAccNo.access = "readOnly";
	drpCurrency1.rawValue = null;
	txtAccount.rawValue = null;
	txtInterestAccNo.rawValue = null; 
	controlScript.mandatoryChange( drpCurrency1, 0 );
	controlScript.changeNormalColor(drpCurrency1);
	controlScript.mandatoryChange(txtAccount, 0 );
	controlScript.changeNormalColor(txtAccount);
}
else if (this.rawValue == null || this.rawValue == "")
{
	txtDebitAccNo.rawValue = null;
	drpCurrency1.access = "open";
	txtAccount.access = "open";
	
	controlScript.mandatoryChange( txtDebitAccNo, 0 );
	controlScript.changeNormalColor(txtDebitAccNo);
}else if(this.rawValue != null || this.rawValue != "")
{
	
	controlScript.mandatoryChange( this, 0 );
	controlScript.changeNormalColor(this);
}else if(this.rawValue != null & txtDebitAccNo.rawValue != null)
{
	drpCurrency1.access = "readOnly";
	txtAccount.access = "readOnly";
	drpCurrency1.rawValue = null;
	txtAccount.rawValue = null;
	controlScript.mandatoryChange( drpCurrency1, 0 );
	controlScript.changeNormalColor(drpCurrency1);
	controlScript.mandatoryChange(txtAccount, 0 );
	controlScript.changeNormalColor(txtAccount);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[2].txtDebitAccNo  ::  exit =====
if (this.rawValue != null && this.rawValue.length < 9) {
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}
if (drpCurrency2.rawValue == null && this.rawValue != null)
{	//this.rawValue = null;
	controlScript.mandatoryChange( drpCurrency2, 1 );
	
	drpCurrency1.access = "readOnly";
	txtAccount.access = "readOnly";
	drpCurrency3.access = "readOnly";
	txtInterestAccNo.access = "readOnly";
	drpCurrency1.rawValue = null;
	txtAccount.rawValue = null;
	txtInterestAccNo.rawValue = null; 
	controlScript.mandatoryChange( drpCurrency1, 0 );
	controlScript.changeNormalColor(drpCurrency1);
	controlScript.mandatoryChange(txtAccount, 0 );
	controlScript.changeNormalColor(txtAccount);
}
else
{
	controlScript.mandatoryChange( drpCurrency2, 0 );
	controlScript.changeNormalColor(drpCurrency2);
	drpCurrency1.access = "open";
	txtAccount.access = "open";
}
if(drpCurrency2.rawValue != null && this.rawValue == null)
{
	//xfa.host.messageBox("Please fill in Account No.");
	//xfa.host.setFocus(this);
	controlScript.mandatoryChange( this, 1 );
}

if(this.rawValue != null & drpCurrency2.rawValue != null)
{
	drpCurrency1.access = "readOnly";
	txtAccount.access = "readOnly";
	drpCurrency1.rawValue = null;
	txtAccount.rawValue = null;
	controlScript.mandatoryChange( drpCurrency1, 0 );
	controlScript.changeNormalColor(drpCurrency1);
	controlScript.mandatoryChange(txtAccount, 0 );
	controlScript.changeNormalColor(txtAccount);
	
	controlScript.mandatoryChange( this, 0 );
	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[2].txtDebitAccNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[3].drpCurrency3  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[3].txtInterestAccNo  ::  exit =====
if (drpCurrency3.rawValue == null)
{
	this.rawValue = null;
}
if (this.rawValue != null && this.rawValue.length < 9) {
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}
if(this.rawValue != null)
{
	drpCurrency1.access = "readOnly";
	txtAccount.access = "readOnly";
	drpCurrency2.access = "readOnly";
	txtDebitAccNo.access = "readOnly";
}
else
{
	drpCurrency1.access = "open";
	txtAccount.access = "open";
	drpCurrency2.access = "open";
	txtDebitAccNo.access = "open";
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subDetails.details.#subform[3].txtInterestAccNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.EXPORT.subfrm.subfrmDebitComm.radDebit  ::  change =====
if (this.rawValue == "A")
{
	controlScript.accessChange( drpA_Currency, "open" );
	controlScript.mandatoryChange( drpA_Currency, 1 );
	controlScript.accessChange( txtA_Account, "open" );
	controlScript.mandatoryChange( txtA_Account, 1 );
	
	controlScript.accessChange(drpF_Currency, "readOnly" );
	controlScript.accessChange(txtF_Account, "readOnly" );
	controlScript.accessChange(txtL_Account, "readOnly" );
	
	drpF_Currency.rawValue = null;
	txtF_Account.rawValue = null;
	txtL_Account.rawValue = null;
	

}else if (this.rawValue == "F")
{
	controlScript.accessChange( drpF_Currency, "open" );
	controlScript.mandatoryChange( drpF_Currency, 1 );
	controlScript.accessChange( txtF_Account, "open" );
	controlScript.mandatoryChange( txtF_Account, 1 );	
	controlScript.accessChange( txtL_Account, "open" );
	controlScript.mandatoryChange( txtL_Account, 1 );	
	
	controlScript.accessChange( drpA_Currency, "readOnly" );
	controlScript.accessChange( txtA_Account, "readOnly" );
	
	drpA_Currency.rawValue = null;
	txtA_Account.rawValue = null;
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.#subform[0].drpRe_Currency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.EXPORT.subfrm.subfrmDebitComm.#subform[0].drpRe_Currency  ::  exit =====
if(this.rawValue != null && txtRe_Account.rawValue == null)
{
	xfa.host.setFocus(txtRe_Account);
//	controlScript.mandatoryChange( txtRe_Account, 1 );	
}
else if(this.rawValue != null || this.rawValue != "")
{
//	controlScript.mandatoryChange( this, 0 );
//	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.#subform[0].drpRe_Currency  ::  change =====
txtRe_Account.rawValue = null;

// ===== form1.EXPORT.subfrm.subfrmDebitComm.#subform[0].txtRe_Account  ::  exit =====
if (this.rawValue != null && drpRe_Currency.rawValue != 'SGD' && this.rawValue.length != 10)
{
	if (this.rawValue.length < 10 || this.rawValue.length < 13)
	{
		app.alert("Invalid Account No.");
		this.rawValue = "";
		xfa.host.setFocus(this);
	}
}
if (this.rawValue != null && drpRe_Currency.rawValue == 'SGD' && this.rawValue.length != 10)
{
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}
if(this.rawValue != null) 
{
//		controlScript.mandatoryChange( this, 0 );
//	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.#subform[0].txtRe_Account  ::  change =====
controlScript.forceNumberOnly();
if (drpRe_Currency.rawValue == "SGD")
{
	controlScript.lengthLimit(10);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.drpA_Currency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.EXPORT.subfrm.subfrmDebitComm.drpA_Currency  ::  exit =====
if(this.rawValue != null && txtA_Account.rawValue == null)
{
	xfa.host.setFocus(txtA_Account);
//	controlScript.mandatoryChange( txtA_Account, 1 );	
}
else if(this.rawValue != null || this.rawValue != "")
{
//	controlScript.mandatoryChange( this, 0 );
//	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.drpA_Currency  ::  change =====
txtA_Account.rawValue = null;

// ===== form1.EXPORT.subfrm.subfrmDebitComm.txtA_Account  ::  exit =====
//if (this.rawValue != null && this.rawValue.length < 10) 
if (this.rawValue != null && drpA_Currency.rawValue != 'SGD' && this.rawValue.length != 10)
{
	if (this.rawValue.length < 10 || this.rawValue.length < 13)
	{
		app.alert("Invalid Account No.");
		this.rawValue = "";
		xfa.host.setFocus(this);
	}
}
if (this.rawValue != null && drpA_Currency.rawValue == 'SGD' && this.rawValue.length != 10)
{
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}
if(this.rawValue != null) 
{	
//	controlScript.mandatoryChange( this, 0 );
//	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.txtA_Account  ::  change =====
controlScript.forceNumberOnly();

if (drpA_Currency.rawValue == "SGD")
{
	controlScript.lengthLimit(10);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.drpF_Currency  ::  initialize =====
controlScript.populateDropDownlist(this, "FC");

// ===== form1.EXPORT.subfrm.subfrmDebitComm.drpF_Currency  ::  exit =====
if(this.rawValue != null && txtA_Account.rawValue == null)
{
	xfa.host.setFocus(txtF_Account);
//	controlScript.mandatoryChange( txtA_Account, 1 );	
}
else if(this.rawValue != null || this.rawValue != "")
{
///	controlScript.mandatoryChange( this, 0 );
//	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.drpF_Currency  ::  change =====
txtF_Account.rawValue = null;

// ===== form1.EXPORT.subfrm.subfrmDebitComm.txtF_Account  ::  exit =====
if (this.rawValue != null && drpF_Currency.rawValue != 'SGD' && this.rawValue.length != 10)
{
	if (this.rawValue.length < 10 || this.rawValue.length < 13)
	{
		app.alert("Invalid Account No.");
		this.rawValue = "";
		xfa.host.setFocus(this);
	}
}
if (this.rawValue != null && drpF_Currency.rawValue == 'SGD' && this.rawValue.length != 10)
{
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}
if(this.rawValue != null) 
{
//	controlScript.mandatoryChange( this, 0 );
//	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.txtF_Account  ::  change =====
controlScript.forceNumberOnly();
if (drpF_Currency.rawValue == "SGD")
{
	controlScript.lengthLimit(10);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.txtL_Account  ::  exit =====
if (this.rawValue != null && this.rawValue.length < 10) 
{
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}
if(this.rawValue == null)
{
//	xfa.host.messageBox("Please fill in Account No.");
//	xfa.host.setFocus(this);
//	controlScript.mandatoryChange( this, 1 );
}

if(this.rawValue != null) 
{
	
//	controlScript.mandatoryChange( this, 0 );
//	controlScript.changeNormalColor(this);
}

// ===== form1.EXPORT.subfrm.subfrmDebitComm.txtL_Account  ::  change =====
controlScript.forceNumberOnly();
controlScript.lengthLimit(10);

// ===== form1.EXPORT.subfrm.subfrmDebitComm.subOthers.txtOthers1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.bankCharges.txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.settlement.txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.EXPORT.subfrm.printAndBarcode.#subform[0].btnSave  ::  click =====
barcodeScript.EXPORTbarcode();
app.execMenuItem("SaveAs");	

// ===== form1.EXPORT.subfrm.printAndBarcode.#subform[0].btnPrint  ::  click =====
form1.MainPage.subfrmMain.txtPrint.rawValue = 1;
/*
if (form1.EXPORT.subfrm.thirdParty._subfrmBuyer.count == 1)
{
	xfa.host.messageBox("mandatory");
	form1.EXPORT.subfrm.thirdParty.subfrmBuyer.subBName.txtBName.mandatory = "error";
}else
{
	xfa.host.messageBox("non mandatory");
	controlScript.setMandatoryBackColor();
	form1.EXPORT.subfrm.thirdParty.subfrmBuyer.subBName.txtBName.mandatory = "";
}*/

controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
barcodeScript.EXPORTbarcode();
controlScript.selectMandaotoryField();

if  (controlScript.setMandatoryBackColor() == 0)	
{		
			form1.variables.checkSumValueEXPORT.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueEXPORT.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
		
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
//barcodeScript.EXPORTbarcode();
controlScript.selectMandaotoryField();

form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

// ===== form1.EXPORT.subfrm.printAndBarcode.#subform[1].PaperFormsBarcodeEXPORT_1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.EXPORT.subfrm.barcodeRecord.txtBarcode1.rawValue;
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

// ===== form1.EXPORT.subfrm.printAndBarcode.#subform[1].PaperFormsBarcodeEXPORT_2  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.EXPORT.subfrm.barcodeRecord.txtBarcode2.rawValue;
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

