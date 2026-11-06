// Event scripts for DBRP: 190 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtName  ::  full =====
//xfa.host.setFocus(xfa.resolveNode("form1.LC.subfrmLC.subfrmApplicant.txtAddress1"));

xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtName  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtAddress2  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtContractName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtTel  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtFax  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmApplicant.txtTel  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmForBankUse.subfrmBRP.radBRP  ::  change =====
if(this.rawValue == "3")
{
	controlScript.accessChange( subfrmInstructions.radRemit, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmSupplier.txtName, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmSupplier.txtName2, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmSupplier.txtAddress1, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmSupplier.txtAddress2, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmSupplier.txtAddress3, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmSupplier.txtPostal, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmSupplier.txtTown, "readOnly" );
	
	controlScript.accessChanger( subfrmInstructions.subfrmSupplier.txtRefNo, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmBanker.txtName, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.subfrmBanker.txtAccNo, "readOnly" );
	controlScript.accessChange( subfrmInstructions.radInstructions, "readOnly" );
	controlScript.mandatoryChange( subfrmInstructions.radInstructions, 0 );
	controlScript.accessChanger( subfrmInstructions.txtCreditAcc, "readOnly" );
	controlScript.accessChanger( subfrmInstructions.txtOthers1, "readOnly" );	
	controlScript.accessChanger( subfrmInstructions.txtOthers2, "readOnly" );	
	controlScript.accessChanger( subfrmInstructions.txtOthers3, "readOnly" );	
	controlScript.mandatoryChange( subfrmInstructions.txtOthers1, 0 );											
}
else
{
	controlScript.accessChange( subfrmInstructions.radRemit, "open" );
}
if(this.rawValue == "4")
{
	// txtCredit not using like other Country form.
}
else
{
	// txtCredit not using like other Country form.
}

if(this.rawValue == "1" || this.rawValue == "2" || this.rawValue == "4")
{
	controlScript.mandatoryChange( form1.DBRP.subfrmAPF.subfrmInstructions.radRemit, 1 );
	controlScript.mandatoryChange( form1.DBRP.subfrmAPF.subfrmInstructions.radRemit.remit, 1 );
	controlScript.mandatoryChange( form1.DBRP.subfrmAPF.subfrmInstructions.radRemit.credit, 1 );
}
else
{
	controlScript.mandatoryChange( form1.DBRP.subfrmAPF.subfrmInstructions.radRemit, 0);
	controlScript.mandatoryChange( form1.DBRP.subfrmAPF.subfrmInstructions.radRemit.remit, 0);
	controlScript.mandatoryChange( form1.DBRP.subfrmAPF.subfrmInstructions.radRemit.credit, 0);
}

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmForBankUse.subfrmBRP.radBRP  ::  ready ($form) =====
if(this.rawValue == "3")
{
	controlScript.accessChange( subfrmInstructions.radRemit, "readOnly" );
}
else
{
	controlScript.accessChange( subfrmInstructions.radRemit, "open" );
}

if(this.rawValue == "4")
{
	// txtCredit not using here like other country form.
}
else
{
	// txtCredit not using here like other country form.
}

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmForBankUse.subfrmBRP.txtICRef  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmForBankUse.subfrmBRP.txtICRef  ::  exit =====
if(this.rawValue != null)
{
	var regExp = /^\d{12}$/;
	//var regExp1 = /^\d{12}(M|m)$/;

	if(!regExp.test(this.rawValue)) //&& !regExp1.test(this.rawValue))
	{
		this.rawValue = null;
		xfa.host.messageBox("Please input Bank Letter of Credit/Inward Documentary Collection no. in the following format:\ne.g.\n1) 553010012345\n2) 553030067890");
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

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmForBankUse.subfrmBRP.txtCredit  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.#subform[0].subfrmForBankUse.subfrmBRP.txtCredit  ::  exit =====
if(this.rawValue != null)
{
	var regExp = /^\d{12}$/;
	//var regExp1 = /^\d{12}(M|m)$/;

	if(!regExp.test(this.rawValue)) //&& !regExp1.test(this.rawValue))
	{
		this.rawValue = null;
		xfa.host.messageBox("Please input Bank Letter of Credit/Inward Documentary Collection no. in the following format:\ne.g.\n1) 553010012345\n2) 553030067890");
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

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrm3PartyBeneficiary.txtName  ::  full =====
//xfa.host.setFocus(xfa.resolveNode("form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1"));

xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrm3PartyBeneficiary.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrm3PartyBeneficiary.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrm3PartyBeneficiary.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrm3PartyBeneficiary.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmSupDetails.txtName  ::  full =====
//xfa.host.setFocus(xfa.resolveNode("form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1"));

xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmSupDetails.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmSupDetails.txtCity  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmSupDetails.txtCity  ::  initialize =====
controlScript.populateCountryList(this);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmSupDetails.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmSupDetails.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmSupDetails.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmBillAmount.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmBillAmount.drpCurrency  ::  change =====
if((xfa.event.newText == "THB - THAI BAHTS")||(xfa.event.newText == "JPY - JAPANESE YEN") || (xfa.event.newText == "TRY - TURKISH LIRA"))
{
	txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount.resolveNode("value.#decimal").fracDigits = "0";
	txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
	
	form1.DBRP.subfrmAPF.subfrmSupp.txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	form1.DBRP.subfrmAPF.subfrmSupp.txtAmount.resolveNode("value.#decimal").fracDigits = "0";
	form1.DBRP.subfrmAPF.subfrmSupp.txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
}
else
{
	txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	txtAmount.resolveNode("value.#decimal").fracDigits = "2";
	txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
	
	form1.DBRP.subfrmAPF.subfrmSupp.txtAmount.resolveNode("value.#decimal").leadDigits = "12";
	form1.DBRP.subfrmAPF.subfrmSupp.txtAmount.resolveNode("value.#decimal").fracDigits = "2";
	form1.DBRP.subfrmAPF.subfrmSupp.txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
}

	

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmBillAmount.drpCurrency  ::  exit =====
 var cury = this.rawValue;
 
 var FACurrency = cury.substring(0,3);
// form1.DBRP.subfrmAPF.subfrmSupp.drpCurrency.rawValue = FACurrency;
  form1.DBRP.subfrmAPF.subfrmContract.subFx.drpCurrency.rawValue = FACurrency;
  form1.DBRP.subfrmAPF.subfrmFinancing.drpCurrency2.rawValue = FACurrency;
 
 var selectedCurrency =  FACurrency;
		for (var i = 0 ; i < form1.DBRP.subfrmAPF.subfrmContract.subFx.instanceManager.count; i++)
		{
			form1.DBRP.subfrmAPF.subfrmContract.subFx.instanceManager.moveInstance(i,0);
			form1.DBRP.subfrmAPF.subfrmContract.subFx.drpCurrency.rawValue = selectedCurrency;
			//currencyScript.validateCurrency(selectedCurrency, form1.BTApp.RecipientDetails.CreditDetails.txtAmount, currencyList.currency_SP);
			form1.DBRP.subfrmAPF.subfrmContract.subFx.instanceManager.moveInstance(0,i);
		}

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmBillAmount.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}
subfrmFinancing.txtAmount.rawValue = this.rawValue;

// ===== form1.DBRP.subfrmAPF.#subform[1].subfrmBillAmount.txtAmount  ::  change =====
controlScript.ForceNumberAndDecimalOnly(this);

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmFinancing.drpFinanceCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmFinancing.drpFinanceCurrency  ::  change =====
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

	

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmFinancing.txtdays  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(3);

controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmFinancing.txtContractNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmFinancing.txtAmount  ::  exit =====
/*
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

*/

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmFinancing.txtAmount  ::  change =====
controlScript.ForceNumberAndDecimalOnly(this);

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmFinancing.txtOBCDate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtOBC.rawValue;
	controlScript.accessChangeBE( BEOBC.subfrmFirst.txtDate, "readOnly" );
	controlScript.accessChangeBE( BEOBC.subfrmSecond.txtDate, "readOnly" );

	form1.BEOBC.subfrmFirst.txtDate.rawValue = this.rawValue;
	form1.BEOBC.subfrmSecond.txtDate.rawValue = this.rawValue;

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmFinancing.txtOBCDate  ::  exit =====
if(!controlScript.dateFormatChange(this))	
{	
	form1.MainPage.subfrmMain.txtOBC.rawValue = this.rawValue;

	controlScript.accessChangeBE( BEOBC.subfrmFirst.txtDate, "readOnly" );
	controlScript.accessChangeBE( BEOBC.subfrmSecond.txtDate, "readOnly" );

	form1.BEOBC.subfrmFirst.txtDate.rawValue = this.rawValue;

	form1.BEOBC.subfrmSecond.txtDate.rawValue = this.rawValue;
}


if (this.rawValue == null)
		controlScript.currentDate( this );

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.subFx.txtFXContractSeq  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.subFx.txtFXContractSeq  ::  exit =====
if (controlScript.empty(this.rawValue) == false){
	if(this.rawValue.length < 2){
		xfa.host.messageBox("FX Contract Sequence must be 2 digits");
		xfa.host.setFocus(this);
	}
}

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.subFx.txtContractNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.subFx.txtContractNo  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.subFx.txtAmount  ::  exit =====
/*

if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}*/

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.subFx.txtAmount  ::  change =====
controlScript.ForceNumberAndDecimalOnly(this);

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.#subform[0].add.btnAdd  ::  click =====
if (form1.DBRP.subfrmAPF._subfrmContract.count < 5)
{
	var objNewRow = form1.DBRP.subfrmAPF._subfrmContract.addInstance();
	//RTGSScript.selectTable();
	//xfa.host.setFocus(objNewRow.details.txtBeneName.somExpression);
	var i = form1.DBRP.subfrmAPF.subfrmContract.instanceManager.count - 1;
	var selectedCurrency = form1.DBRP.subfrmAPF.subfrmContract.subFx.drpCurrency.rawValue;
	form1.DBRP.subfrmAPF.subfrmContract.instanceManager.moveInstance(i,0);
	form1.DBRP.subfrmAPF.subfrmContract.subFx.drpCurrency.rawValue = selectedCurrency;
	form1.DBRP.subfrmAPF.subfrmContract.instanceManager.moveInstance(0,i);		
}
else
{
	app.alert("Maximum 5 contracts!");
}

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.#subform[0].add.btnAdd  ::  initialize =====
//if (this.parent.parent.parent.index < 1) this.presence = "hidden";

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.#subform[0].delete.btnDelete  ::  click =====
//RTGSScript.getTotalRemittanceAmount(this.parent.parent.parent.details.txtRemitAmtRTGS.rawValue);
form1.DBRP.subfrmAPF._subfrmContract.removeInstance(this.parent.parent.parent.index);

// ===== form1.DBRP.subfrmAPF.#subform[2].subfrmContract.#subform[0].delete.btnDelete  ::  initialize =====
if (this.parent.parent.parent.index < 1) this.presence = "hidden";

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subPurchase.radDescrip  ::  change =====
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

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subPurchase.radDescrip  ::  ready ($form) =====
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

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subPurchase.txtServices  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subPurchase.txtGoods  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subfrmDescription.txtDescription1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subfrmDescription.txtDescription2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subfrmDescription.txtDescription3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subfrmDescription.txtDescription4  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.#subform[2].#subform[0].subfrmDescription.txtDescription5  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.txtInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.txtPO  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.txtPInvoice  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.txtLanding  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.txtAirBill  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.txtDelivery  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.txtInput2  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.txtInput3  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowDocuments.inInput4  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput1  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput2  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput3  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput4  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput5  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput6  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput7  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput8  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.Table.rowCopies.txtInput9  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.radRemit  ::  change =====
if (this.rawValue == "2")
{
	// Enable -- To remit proceeds directly to Beneficiary by fields.
	
	controlScript.accessChange(radInstructions, "open");
	controlScript.mandatoryChange(radInstructions, 1);
	controlScript.mandatoryChange( radInstructions.electronic, 1 );
	controlScript.mandatoryChange( radInstructions.cashier, 1 );
	
	// For subfrmSUpplier
	controlScript.accessChange(subfrmSupplier.radSupYN, "open");
	controlScript.mandatoryChange(subfrmSupplier.radSupYN, 1);
	
	controlScript.accessChange(subfrmSupplier.txtName, "open");
	controlScript.accessChange(subfrmSupplier.txtName2, "open");
	
	controlScript.accessChange(subfrmSupplier.txtAddress1, "open");
	controlScript.accessChange(subfrmSupplier.txtAddress2, "open");
	
	controlScript.accessChange(subfrmSupplier.txtPostal, "open");
	controlScript.accessChange(subfrmSupplier.txtTown, "open");
	controlScript.accessChange(subfrmSupplier.txtAddress3, "open");
	
	controlScript.accessChange(subfrmSupplier.txtAccNo, "open");
	controlScript.accessChange(subfrmSupplier.txtRefNo, "open");
	
	//controlScript.mandatoryChange(subfrmSupplier.txtName, 1);
	//controlScript.mandatoryChange(subfrmSupplier.txtAddress1, 1);
	//controlScript.mandatoryChange(subfrmSupplier.txtTown, 1);
	//controlScript.mandatoryChange(subfrmSupplier.txtAddress3, 1);
	// -----------------------------
	
	// For subfrmBanker	- Beneficiary's Bank Details.
	controlScript.accessChange(subfrmBanker.txtName, "open");
	controlScript.accessChange(subfrmBanker.txtAddress1, "open");
	controlScript.accessChange(subfrmBanker.txtAddress2, "open");
	controlScript.accessChange(subfrmBanker.txtAddress3, "open");
	controlScript.accessChange(subfrmBanker.txtSwiftCode, "open");
	
	// For subfrmBanker	- Correspondent Bank.
	controlScript.accessChange(subfrmBanker.txtCName, "open");
	controlScript.accessChange(subfrmBanker.txtCorAddress, "open");
	controlScript.accessChange(subfrmBanker.txtCorSwiftCode, "open");
	controlScript.accessChange(subfrmBanker.radCharges, "open");
	// -----------------------------
	
	
	// Disable -- To credit our account number fields.
	controlScript.accessChanger(txtCreditAcc, "readOnly");
	// -----------------------------
}
else if(this.rawValue == "1")
{		
	// Disable -- To remit proceeds directly to Beneficiary by fields
	
	controlScript.accessChange(radInstructions, "readOnly");
	controlScript.mandatoryChange(radInstructions, 0);
	controlScript.mandatoryChange(radInstructions.electronic, 0);
	controlScript.mandatoryChange(radInstructions.cashier, 0);
	
	
	// For subfrmSUpplier
	controlScript.accessChange(subfrmSupplier.radSupYN, "readOnly");
	controlScript.mandatoryChange(subfrmSupplier.radSupYN, 0);
	
	controlScript.accessChange(subfrmSupplier.txtName, "readOnly");
	controlScript.accessChange(subfrmSupplier.txtName2, "readOnly");
	
	controlScript.accessChange(subfrmSupplier.txtAddress1, "readOnly");
	controlScript.accessChange(subfrmSupplier.txtAddress2, "readOnly");
	
	controlScript.accessChange(subfrmSupplier.txtPostal, "readOnly");
	controlScript.accessChange(subfrmSupplier.txtTown, "readOnly");
	controlScript.accessChange(subfrmSupplier.txtAddress3, "readOnly");
	
	controlScript.accessChange(subfrmSupplier.txtAccNo, "readOnly");
	controlScript.accessChange(subfrmSupplier.txtRefNo, "readOnly");
	
	//controlScript.mandatoryChange(subfrmSupplier.txtName, 0);
	//controlScript.mandatoryChange(subfrmSupplier.txtAddress1, 0);
	//controlScript.mandatoryChange(subfrmSupplier.txtTown, 0);
	//controlScript.mandatoryChange(subfrmSupplier.txtAddress3, 0);
	// -----------------------------
	
	// For subfrmBanker
	controlScript.accessChange(subfrmBanker.txtName, "readOnly");
	
	controlScript.accessChange(subfrmBanker.txtAddress1, "readOnly");
	controlScript.accessChange(subfrmBanker.txtAddress2, "readOnly");
	controlScript.accessChange(subfrmBanker.txtAddress3, "readOnly");
	controlScript.accessChange(subfrmBanker.txtSwiftCode, "readOnly");
	
	controlScript.accessChange(subfrmBanker.txtCName, "readOnly");
	controlScript.accessChange(subfrmBanker.txtCorAddress, "readOnly");
	controlScript.accessChange(subfrmBanker.txtCorSwiftCode, "readOnly");
	
	controlScript.accessChange(subfrmBanker.radCharges, "readOnly");
	// -----------------------------
	
	controlScript.mandatoryChange(subfrmSupplier.txtAccNo, 0);
			
	controlScript.mandatoryChange(subfrmBanker.txtName, 0);
	controlScript.mandatoryChange(subfrmSupplier.txtAccNo, 0);
	controlScript.mandatoryChange(subfrmBanker.txtAddress1, 0);
	controlScript.mandatoryChange(subfrmBanker.txtAddress2, 0);
	controlScript.mandatoryChange(subfrmBanker.txtAddress2, 0);
	controlScript.mandatoryChange(subfrmBanker.txtCName, 0);
	controlScript.mandatoryChange(subfrmBanker.txtCorAddress, 0);
	// -----------------------------
	
	
	// Enable -- To credit our account number fields.
	controlScript.accessChange(txtCreditAcc, "open");	
	controlScript.mandatoryChange(txtCreditAcc, 1);	
}
else
{
	controlScript.accessChanger( txtCreditAcc, "readOnly" );
	controlScript.mandatoryChange( txtCreditAcc, 0 );
}


if(this.rawValue == null)
{
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.radRemit.remit, 1);
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.radRemit.credit, 1);
}
else
{
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.radRemit.remit, 0);
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.radRemit.credit, 0);
}

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.radRemit  ::  ready ($form) =====
var openRead = "readOnly";
var mand01 = 0;

if(this.rawValue == "2")
{
	openRead = "open";
	mand01 = 1;
}
else
{
	openRead = "readOnly";
	mand01 = 0;
}

controlScript.accessChange(radInstructions, openRead);
controlScript.mandatoryChange(radInstructions, mand01);
//controlScript.mandatoryChange(radInstructions.electronic, mand01);
//controlScript.mandatoryChange(radInstructions.cashier, mand01);

// For subfrmSUpplier
controlScript.accessChange(subfrmSupplier.radSupYN, openRead);
controlScript.mandatoryChange(subfrmSupplier.radSupYN, mand01);

controlScript.accessChange(subfrmSupplier.txtName, openRead);
controlScript.accessChange(subfrmSupplier.txtName2, openRead);

controlScript.accessChange(subfrmSupplier.txtAddress1, openRead);
controlScript.accessChange(subfrmSupplier.txtAddress2, openRead);

controlScript.accessChange(subfrmSupplier.txtPostal, openRead);
controlScript.accessChange(subfrmSupplier.txtTown, openRead);
controlScript.accessChange(subfrmSupplier.txtAddress3, openRead);

controlScript.accessChange(subfrmSupplier.txtAccNo, openRead);
controlScript.accessChange(subfrmSupplier.txtRefNo, openRead);
// -----------------------------

// For subfrmBanker
controlScript.accessChange(subfrmBanker.txtName, openRead);

controlScript.accessChange(subfrmBanker.txtAddress1, openRead);
controlScript.accessChange(subfrmBanker.txtAddress2, openRead);
controlScript.accessChange(subfrmBanker.txtAddress3, openRead);
controlScript.accessChange(subfrmBanker.txtSwiftCode, openRead);

controlScript.accessChange(subfrmBanker.txtCName, openRead);
controlScript.accessChange(subfrmBanker.txtCorAddress, openRead);
controlScript.accessChange(subfrmBanker.txtCorSwiftCode, openRead);

controlScript.accessChange(subfrmBanker.radCharges, openRead);
// -----------------------------


if (this.rawValue == "1")
{
	controlScript.accessChange( txtCreditAcc, "open" );	
	controlScript.mandatoryChange( txtCreditAcc, 1 );	
}
else
{
	controlScript.accessChanger( txtCreditAcc, "readOnly" );
	controlScript.mandatoryChange( txtCreditAcc, 0 );
}

/*
// Disable -- To remit proceeds directly to Beneficiary by fields.

controlScript.accessChange(radInstructions, "readOnly");
controlScript.mandatoryChange(radInstructions, 0);
controlScript.mandatoryChange(radInstructions.electronic, 0);
controlScript.mandatoryChange(radInstructions.cashier, 0);

// For subfrmSUpplier
controlScript.accessChange(subfrmSupplier.radSupYN, "readOnly");
controlScript.mandatoryChange(subfrmSupplier.radSupYN, 0);

controlScript.accessChange(subfrmSupplier.txtName, "readOnly");
controlScript.accessChange(subfrmSupplier.txtName2, "readOnly");

controlScript.accessChange(subfrmSupplier.txtAddress1, "readOnly");
controlScript.accessChange(subfrmSupplier.txtAddress2, "readOnly");

controlScript.accessChange(subfrmSupplier.txtPostal, "readOnly");
controlScript.accessChange(subfrmSupplier.txtTown, "readOnly");
controlScript.accessChange(subfrmSupplier.txtAddress3, "readOnly");

controlScript.accessChange(subfrmSupplier.txtAccNo, "readOnly");
controlScript.accessChange(subfrmSupplier.txtRefNo, "readOnly");
// -----------------------------

// For subfrmBanker
controlScript.accessChange(subfrmBanker.txtName, "readOnly");

controlScript.accessChange(subfrmBanker.txtAddress1, "readOnly");
controlScript.accessChange(subfrmBanker.txtAddress2, "readOnly");
controlScript.accessChange(subfrmBanker.txtAddress3, "readOnly");
controlScript.accessChange(subfrmBanker.txtSwiftCode, "readOnly");

controlScript.accessChange(subfrmBanker.txtCName, "readOnly");
controlScript.accessChange(subfrmBanker.txtCorAddress, "readOnly");
controlScript.accessChange(subfrmBanker.txtCorSwiftCode, "readOnly");

controlScript.accessChange(subfrmBanker.radCharges, "readOnly");
// -----------------------------

controlScript.mandatoryChange(subfrmSupplier.txtAccNo, 0);
		
controlScript.mandatoryChange(subfrmBanker.txtName, 0);
controlScript.mandatoryChange(subfrmSupplier.txtAccNo, 0);
controlScript.mandatoryChange(subfrmBanker.txtAddress1, 0);
controlScript.mandatoryChange(subfrmBanker.txtAddress2, 0);
controlScript.mandatoryChange(subfrmBanker.txtAddress2, 0);
controlScript.mandatoryChange(subfrmBanker.txtCName, 0);
controlScript.mandatoryChange(subfrmBanker.txtCorAddress, 0);
// -----------------------------


// Disable -- To credit our account number fields.
controlScript.accessChange(txtCreditAcc, "readOnly");	
*/

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.radInstructions  ::  change =====
if (this.rawValue == "SFT")
{	
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress3, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtTown, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtRefNo, 1 );		
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAccNo, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtName, 1 );	
}
else
{
	controlScript.accessChange( form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtName, "readOnly" );
	controlScript.accessChange( form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtName, "open" );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtName, 0);	
	
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress3, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtTown, 1 );
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtRefNo,1 );	
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtRefNo,1 );	
	
	controlScript.accessChange( form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAccNo, "readOnly" );
	controlScript.accessChange( form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAccNo, "open" );	
	controlScript.mandatoryChange(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAccNo, 0 );
}

controlScript.mandatoryChange(electronic, 0);	
controlScript.mandatoryChange(cashier, 0);	

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].radSupYN  ::  change =====
if (this.rawValue == "Y")
{
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName.rawValue = form1.DBRP.subfrmAPF.subfrmSupDetails.txtName.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1.rawValue = form1.DBRP.subfrmAPF.subfrmSupDetails.txtAddress1.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress2.rawValue = form1.DBRP.subfrmAPF.subfrmSupDetails.txtAddress2.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress3.rawValue = form1.DBRP.subfrmAPF.subfrmSupDetails.txtCity.rawValue;
}
else if (this.rawValue == "N")
{
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName.rawValue = null;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1.rawValue = null;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress2.rawValue = null;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress3.rawValue = null;
}

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtName  ::  full =====
xfa.host.messageBox("'Name' field can only accommodate up to 70 characters each line, please continue in the next name line.","",1,0);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtName2  ::  full =====
xfa.host.messageBox("'Name' field can only accommodate up to 70 characters each line.","",1,0);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtName2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtAddress1  ::  full =====
xfa.host.messageBox("'Address' field can only accommodate up to 70 characters each line, please continue in the next address line.","",1,0);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtAddress2  ::  full =====
xfa.host.messageBox("'Address' field can only accommodate up to 70 characters each line.","",1,0);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtAddress3  ::  initialize =====
controlScript.populateCountryList(this);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtPostal  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtPostal  ::  full =====
xfa.host.messageBox("'Postal code' field can accommodate only up to 16 characters.","",1,0);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtTown  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtTown  ::  full =====
xfa.host.messageBox("'Town' field can accommodate only up to 35 characters.","",1,0);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.#subform[0].txtRefNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[0].txtName  ::  full =====
xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[0].txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[0].txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[0].txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[0].txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[0].txtSwiftCode  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[0].txtSwiftCode  ::  exit =====
if(this.rawValue != null && this.rawValue.length != 8 && this.rawValue.length != 11) 
{
	app.alert("Invalid SWIFT Address");
	this.rawValue = "";
}	

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[1].txtCName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[1].txtCorAddress  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[1].txtCorSwiftCode  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.#subform[1].txtCorSwiftCode  ::  exit =====
if(this.rawValue != null && this.rawValue.length != 8 && this.rawValue.length != 11)
{
	app.alert("Invalid SWIFT Address");
	this.rawValue = "";
}	

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.txtCreditAcc  ::  change =====
//controlScript.changeUpper();
controlScript.forceNumberOnly();
//controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.txtCreditAcc  ::  exit =====
if (this.rawValue != null && this.rawValue.length != 10)
{
	if (this.rawValue.length < 10 || this.rawValue.length < 13)
	{
		app.alert("Invalid Account No.");
		this.rawValue = "";
		//xfa.host.setFocus(this);
	}
}

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers1  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers3  ::  change =====
controlScript.changeUpper();

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.txtDebitAcc  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.chkOthers  ::  change =====
/*
if (this.rawValue == 1){
		controlScript.accessChange( txtOthers1, "open" );
		controlScript.mandatoryChange( txtOthers1, 1 );
		controlScript.accessChange( txtOthers2, "open" );
//		controlScript.mandatoryChange( txtOthers2, 1 );

}else{
		controlScript.accessChange( txtOthers1, "readOnly" );
		controlScript.accessChange( txtOthers2, "readOnly" );

}*/

// ===== form1.DBRP.subfrmAPF.subfrmInstructions.chkOthers  ::  ready ($form) =====
/*
if (this.rawValue == 1){
		controlScript.accessChange( txtOthers1, "open" );
		controlScript.mandatoryChange( txtOthers1, 1 );
		controlScript.accessChange( txtOthers2, "open" );
//		controlScript.mandatoryChange( txtOthers2, 1 );

}else{
		controlScript.accessChange( txtOthers1, "readOnly" );
		controlScript.accessChange( txtOthers2, "readOnly" );

}
*/

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[0].chkSup  ::  change =====
if (this.rawValue == 1){
		controlScript.accessChange( txtName, "open" );
		controlScript.mandatoryChange( txtName, 1 );
		controlScript.accessChange( txtAddress1, "open" );
		controlScript.mandatoryChange( txtAddress1, 1 );
		controlScript.accessChange( txtAddress2, "open" );
		controlScript.mandatoryChange( txtAddress2, 1 );

}else{
		controlScript.accessChange( txtName, "readOnly" );
		controlScript.accessChange( txtAddress1, "readOnly" );
		controlScript.accessChange( txtAddress2, "readOnly" );

}

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[0].chkSup  ::  ready ($form) =====
if (this.rawValue == 1){
		controlScript.accessChange( txtName, "open" );
		controlScript.mandatoryChange( txtName, 1 );
		controlScript.accessChange( txtAddress1, "open" );
		controlScript.mandatoryChange( txtAddress1, 1 );
		controlScript.accessChange( txtAddress2, "open" );
		controlScript.mandatoryChange( txtAddress2, 1 );

}else{
		controlScript.accessChange( txtName, "readOnly" );
		controlScript.accessChange( txtAddress1, "readOnly" );
		controlScript.accessChange( txtAddress2, "readOnly" );

}

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[0].txtRefNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[0].txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[0].txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[0].txtName  ::  full =====
xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[0].txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[1].txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[1].txtBankSwift  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[1].txtBankSwift  ::  exit =====
if (this.rawValue.length != 8 && this.rawValue.length !=  11) {
	app.alert("Invalid SWIFT Address");
	this.rawValue = "";
	//xfa.host.setFocus(this.somExpression);
}	

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[1].txtSwiftCode  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.DBRP.subfrmAPF.subfrmSupp.#subform[1].txtSwiftCode  ::  exit =====
if (this.rawValue.length != 8 && this.rawValue.length !=  11) {
	app.alert("Invalid SWIFT Address");
	this.rawValue = "";
	//xfa.host.setFocus(this.somExpression);
}	

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.radDebit  ::  change =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpA_Currency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpA_Currency  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpA_Currency  ::  change =====
txtA_Account.rawValue = null;

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtA_Account  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtA_Account  ::  change =====
controlScript.forceNumberOnly();

if (drpA_Currency.rawValue == "SGD")
{
	controlScript.lengthLimit(10);
}

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpF_Currency  ::  initialize =====
controlScript.populateDropDownlist(this, "FC");

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpF_Currency  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpF_Currency  ::  change =====
txtF_Account.rawValue = null;

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtF_Account  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtF_Account  ::  change =====
controlScript.forceNumberOnly();
if (drpF_Currency.rawValue == "SGD")
{
	controlScript.lengthLimit(10);
}

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtL_Account  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtL_Account  ::  change =====
controlScript.forceNumberOnly();
controlScript.lengthLimit(10);

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpRe_Currency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpRe_Currency  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpRe_Currency  ::  change =====
txtRe_Account.rawValue = null;

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtRe_Account  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtRe_Account  ::  change =====
controlScript.forceNumberOnly();
if (drpRe_Currency.rawValue == "SGD")
{
	controlScript.lengthLimit(10);
}

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[0].txtFXContractNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[0].txtFXContractNo  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[0].txtFXContractSeq  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[0].txtFXContractSeq  ::  exit =====
if (controlScript.empty(this.rawValue) == false){
	if(this.rawValue.length < 2){
		xfa.host.messageBox("FX Contract Sequence must be 2 digits");
		xfa.host.setFocus(this);
	}
}

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[1].drpCurrency1  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[1].drpCurrency1  ::  change =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[1].drpCurrency1  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[1].txtAccount  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[1].txtAccount  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[2].drpCurrency2  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[2].drpCurrency2  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[2].txtDebitAccNo  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[2].txtDebitAccNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[3].drpCurrency3  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[3].txtInterestAccNo  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.subDetails.details.#subform[3].txtInterestAccNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtDebitAcc  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(Number.value);

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.txtDebitAcc  ::  exit =====
if (this.rawValue.length < 9) {
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this.somExpression);
}

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpDebitCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmDebitComm.drpDebitCurrency  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[0].txtFXContractNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[0].txtFXContractNo  ::  exit =====
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

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[0].txtFXContractSeq  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[0].txtFXContractSeq  ::  exit =====
if (controlScript.empty(this.rawValue) == false){
	if(this.rawValue.length < 2){
		xfa.host.messageBox("FX Contract Sequence must be 2 digits");
		xfa.host.setFocus(this);
	}
}

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[1].drpCurrency1  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[1].drpCurrency1  ::  change =====
if((xfa.event.newText == "JPY") || (xfa.event.newText == "IDR") || (xfa.event.newText == "TWD"))
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

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[1].txtAmount  ::  exit =====
if (drpCurrency1.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[2].drpCurrency2  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[2].drpCurrency2  ::  exit =====
if(this.rawValue != null && txtDebitAccNo.rawValue == null)
{
	xfa.host.setFocus(txtDebitAccNo);
	controlScript.mandatoryChange( txtDebitAccNo, 1 );
}
else if(this.rawValue != "" && txtDebitAccNo.rawValue == "")
{
	xfa.host.setFocus(txtDebitAccNo);
	controlScript.mandatoryChange( txtDebitAccNo, 1 );
}
else if (this.rawValue == null || this.rawValue == "")
{
	txtDebitAccNo.rawValue = "";
	controlScript.mandatoryChange( txtDebitAccNo, 0 );
	controlScript.mandatoryChange( this, 0 );
}
else if(this.rawValue != null || this.rawValue != "")
{
	controlScript.mandatoryChange( this, 0 );
	controlScript.changeNormalColor(this);
}
else
{
	controlScript.mandatoryChange( txtDebitAccNo, 0 );
	controlScript.mandatoryChange( this, 0 );
}

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[2].txtDebitAccNo  ::  exit =====
if(drpCurrency2.rawValue != null && this.rawValue == null)
{
	controlScript.mandatoryChange( this, 1 );
}
else if(drpCurrency2.rawValue == null && this.rawValue != null)
{
	controlScript.mandatoryChange( drpCurrency2, 1);
}
else if(drpCurrency2.rawValue == "" && this.rawValue != null)
{
	controlScript.mandatoryChange( drpCurrency2, 1);
}
else
{
	controlScript.mandatoryChange( drpCurrency2, 0);
	controlScript.mandatoryChange( this, 0);
}
if (controlScript.empty(this.rawValue) == false && this.rawValue.length < 9) {
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[2].txtDebitAccNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[3].drpCurrency3  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[3].drpCurrency3  ::  exit =====
if(this.rawValue != null && txtInterestAccNo.rawValue == null)
{
	xfa.host.setFocus(txtInterestAccNo);
	controlScript.mandatoryChange( txtInterestAccNo, 1 );
}
else if(this.rawValue != "" && txtInterestAccNo.rawValue == "")
{
	xfa.host.setFocus(txtInterestAccNo);
	controlScript.mandatoryChange( txtInterestAccNo, 1 );
}
else if (this.rawValue == null || this.rawValue == "")
{
	txtInterestAccNo.rawValue = "";
	controlScript.mandatoryChange( txtInterestAccNo, 0 );
	controlScript.mandatoryChange( this, 0 );
}
else if(this.rawValue != null || this.rawValue != "")
{
	controlScript.mandatoryChange( this, 0 );
	controlScript.changeNormalColor(this);
}
else
{
	controlScript.mandatoryChange( txtInterestAccNo, 0 );
	controlScript.mandatoryChange( this, 0 );
}

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[3].txtInterestAccNo  ::  exit =====
if(drpCurrency3.rawValue != null && this.rawValue == null)
{
	controlScript.mandatoryChange( this, 1 );
}
else if(drpCurrency3.rawValue == null && this.rawValue != null)
{
	controlScript.mandatoryChange( drpCurrency3, 1);
}
else if(drpCurrency3.rawValue == "" && this.rawValue != null)
{
	controlScript.mandatoryChange( drpCurrency3, 1);
}
else
{
	controlScript.mandatoryChange( drpCurrency3, 0);
	controlScript.mandatoryChange( this, 0);
}
if (controlScript.empty(this.rawValue) == false && this.rawValue.length < 9) {
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[3].txtInterestAccNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[4].drpCurrency4  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[4].drpCurrency4  ::  exit =====
if(this.rawValue != null && txtInterestAccNo2.rawValue == null)
{
	xfa.host.setFocus(txtInterestAccNo2);
	controlScript.mandatoryChange( txtInterestAccNo2, 1 );
}
else if(this.rawValue != "" && txtInterestAccNo2.rawValue == "")
{
	xfa.host.setFocus(txtInterestAccNo2);
	controlScript.mandatoryChange( txtInterestAccNo2, 1 );
}
else if (this.rawValue == null || this.rawValue == "")
{
	txtInterestAccNo2.rawValue = "";
	controlScript.mandatoryChange( txtInterestAccNo2, 0 );
	controlScript.mandatoryChange( this, 0 );
}
else if(this.rawValue != null || this.rawValue != "")
{
	controlScript.mandatoryChange( this, 0 );
	controlScript.changeNormalColor(this);
}
else
{
	controlScript.mandatoryChange( txtInterestAccNo2, 0 );
	controlScript.mandatoryChange( this, 0 );
}

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[4].txtInterestAccNo2  ::  exit =====
if(drpCurrency4.rawValue != null && this.rawValue == null)
{
	controlScript.mandatoryChange( this, 1 );
}
else if(drpCurrency4.rawValue == null && this.rawValue != null)
{
	controlScript.mandatoryChange( drpCurrency4, 1);
}
else if(drpCurrency4.rawValue == "" && this.rawValue != null)
{
	controlScript.mandatoryChange( drpCurrency4, 1);
}
else
{
	controlScript.mandatoryChange( drpCurrency4, 0);
	controlScript.mandatoryChange( this, 0);
}
if (controlScript.empty(this.rawValue) == false && this.rawValue.length < 9) {
	app.alert("Invalid Account No.");
	this.rawValue = "";
	xfa.host.setFocus(this);
}

// ===== form1.DBRP.subfrmAPF.subfrmMsgForSupplier.subDetails.details.#subform[4].txtInterestAccNo2  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.DBRP.subfrmAPFFoot.subfrmOthers.btnPrint  ::  click =====
form1.MainPage.subfrmMain.txtPrint.rawValue = 1;
form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
form1.variables.DBRPDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtDBRPDate);

controlScript.radioMandatoryCheck();
controlScript.selectMandaotoryField();
barcodeScript.DBRPbarcode();

if (controlScript.setMandatoryBackColor() == 0)
{
	form1.variables.checkSumValueDBRP.value = controlScript.checkSum();
	form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueDBRP.value;
	xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);		

form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

// ===== form1.DBRP.subfrmAPFFoot.subfrmOthers.btnSave  ::  click =====
barcodeScript.cleanUpDBRP();

app.execMenuItem("SaveAs");

// ===== form1.DBRP.subfrmAPFFoot.subfrmOthers.PaperFormsBarcode1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.DBRP.subfrmAPFFoot.subfrmBarcodeRecord.txtBarcode.rawValue ;
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

// ===== form1.DBRP.subfrmAPFFoot.subfrmOthers.PaperFormsBarcode1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.DBRP.subfrmAPFFoot.subfrmBarcodeRecord.txtBarcode2.rawValue;
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

