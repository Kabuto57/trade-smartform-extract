// Event scripts for LC: 176 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.LC.subfrmLC.subfrmApplicant.txtName  ::  full =====
//xfa.host.setFocus(xfa.resolveNode("form1.LC.subfrmLC.subfrmApplicant.txtAddress1"));

xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.LC.subfrmLC.subfrmApplicant.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmApplicant.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmApplicant.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmApplicant.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmApplicant.txtContractName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmApplicant.txtTel  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmApplicant.txtFax  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmForBankUse.subfrmForBankUse.subfrmDCNo.txtDCNo  ::  initialize =====
this.access = "protected";

// ===== form1.LC.subfrmLC.subfrmForBankUse.subfrmForBankUse.subfrmDCNo.txtDCNo  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmForBankUse.subfrmForBankUse.subfrmBankCode.txtBankCode  ::  initialize =====
this.access = "protected";

// ===== form1.LC.subfrmLC.subfrmForBankUse.subfrmForBankUse.subfrmBankCode.txtBankCode  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtName  ::  full =====
//xfa.host.setFocus(xfa.resolveNode("form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1"));

xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmBeneficiary.txtName  ::  full =====
//xfa.host.setFocus(xfa.resolveNode("form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1"));

xfa.host.messageBox("If 'Name' too long, please continue to key in first line of Address field.","",1,0);

// ===== form1.LC.subfrmLC.subfrmBeneficiary.txtName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmBeneficiary.txtAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmBeneficiary.txtAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmBeneficiary.txtContractName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmBeneficiary.txtTel  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmBeneficiary.txtFax  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmCreditAmount.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this);

// ===== form1.LC.subfrmLC.subfrmCreditAmount.drpCurrency  ::  change =====
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

	

// ===== form1.LC.subfrmLC.subfrmCreditAmount.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.LC.subfrmLC.subfrmCreditAmount.chkTolerance  ::  change =====
if (this.rawValue == "1")
{
	controlScript.accessChange( txtPlusValue, "open");
	controlScript.mandatoryChange( txtPlusValue, 1 );
	controlScript.accessChange( txtMinusValue, "open");
	controlScript.mandatoryChange( txtMinusValue, 1 );
}
else
{
	controlScript.accessChange( txtPlusValue, "readOnly");
	controlScript.mandatoryChange( txtPlusValue, 0 );
	controlScript.accessChange( txtMinusValue, "readOnly");
	controlScript.mandatoryChange( txtMinusValue, 0 );
}

// ===== form1.LC.subfrmLC.subfrmCreditAmount.chkTolerance  ::  ready ($form) =====
if (this.rawValue == "1")
{
	controlScript.accessChange( txtPlusValue, "open");
	controlScript.mandatoryChange( txtPlusValue, 1 );
	controlScript.accessChange( txtMinusValue, "open");
	controlScript.mandatoryChange( txtMinusValue, 1 );
}
else
{
	controlScript.accessChange( txtPlusValue, "readOnly");
	controlScript.mandatoryChange( txtPlusValue, 0 );
	controlScript.accessChange( txtMinusValue, "readOnly");
	controlScript.mandatoryChange( txtMinusValue, 0 );
}

// ===== form1.LC.subfrmLC.subfrmCreditAmount.txtPlusValue  ::  exit =====
/*
if (this.rawValue != null)
{
		controlScript.mandatoryChange( txtMinusValue, 0 );
		controlScript.mandatoryChange( txtPlusValue, 0 );														
}
else
{
		controlScript.mandatoryChange( txtPlusValue, 1 );
		controlScript.mandatoryChange( txtMinusValue, 1 );
}
*/

// ===== form1.LC.subfrmLC.subfrmCreditAmount.txtPlusValue  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmCreditAmount.txtMinusValue  ::  exit =====
/*
if (this.rawValue != null)
{
		controlScript.mandatoryChange( txtPlusValue, 0 );
		controlScript.mandatoryChange( txtMinusValue, 0);
}
else
{
		controlScript.mandatoryChange( txtPlusValue, 1 );
		controlScript.mandatoryChange( txtMinusValue, 1 );
}

*/

// ===== form1.LC.subfrmLC.subfrmCreditAmount.txtMinusValue  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList  ::  change =====
if (xfa.event.newText == "")
{
		FOB.validate.nullTest = "error";
		CFR.validate.nullTest = "error";
		CIF.validate.nullTest = "error";
		FCA.validate.nullTest = "error";
		CIP.validate.nullTest = "error";
		CPT.validate.nullTest = "error";
		LocalDelivery.validate.nullTest = "error";
		Others.validate.nullTest = "error";
}
else
{
		FOB.validate.nullTest = "disabled";
		CFR.validate.nullTest = "disabled";
		CIF.validate.nullTest = "disabled";
		FCA.validate.nullTest = "disabled";
		CIP.validate.nullTest = "disabled";
		CPT.validate.nullTest = "disabled";
		LocalDelivery.validate.nullTest = "disabled";
		Others.validate.nullTest = "disabled";
}
		



if (this.rawValue == "Others")
{

	controlScript.accessChange( txtOthers, "open");
	controlScript.mandatoryChange( txtOthers, 1 );
}
else
{

	controlScript.accessChange( txtOthers, "readOnly");
	controlScript.mandatoryChange( txtOthers, 0 );
}


if ((this.rawValue == "FOB")||(this.rawValue == "CFR")||(this.rawValue == "FCA")||(this.rawValue == "CPT"))
{
//	controlScript.accessChange( form1.LC.subfrmLC.subfrmInsurance.chkInsurance, "readOnly");
	subfrmInsurance.chkInsurance.rawValue = "1";
	
	form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence = "visible";
//	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.presence = "visible";
	form1.LC.subfrmLC.subfrmInsurance.lblFOBCFR.presence = "visible";
}
else if ((this.rawValue == "CIF")|| (this.rawValue == "CIP"))
{
	controlScript.accessChange( form1.LC.subfrmLC.subfrmInsurance.chkInsurance, "open");
	form1.LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue = 1;
	
	form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence = "hidden";
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.presence = "hidden";
	form1.LC.subfrmLC.subfrmInsurance.lblFOBCFR.presence = "hidden";

}
else
{
	controlScript.accessChange( form1.LC.subfrmLC.subfrmInsurance.chkInsurance, "open");
	form1.LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue = 0;
	form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence = "hidden";
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.presence = "hidden";	
	form1.LC.subfrmLC.subfrmInsurance.lblFOBCFR.presence = "hidden";

}
	


if ((form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.rawValue == "Insurance covered by applicant under open Cover No.")&&(form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence =="visible"))
{
	controlScript.presenceChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo, "visible");
	controlScript.mandatoryChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo, 1 );
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.access = "open";
	controlScript.mandatoryChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith, 1 );
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith.access = "open";
}	
else
{
	controlScript.presenceChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo, "hidden");
	controlScript.mandatoryChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo, 0 );
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.access = "readOnly";
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.rawValue = null;
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith.rawValue = null;
	controlScript.mandatoryChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith, 0 );
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith.access = "readOnly";
}





if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FOB")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FCA"))
{
	 if(form1.LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1)
			 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Collect";
	
	 if(form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1)
		 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Collect";
	
}
else if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CFR")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIP")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CPT"))
{
	 if(form1.LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1)
		 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Prepaid";
		 
	  if(form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1)
		 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Prepaid";
}


if(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF")
		 form1.LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue = 1;		 


if(this.rawValue == 'FCA'){
	form1.LC.subfrmLC.subfrmDrafts.radFreight.Prepaid.access = 'protected';
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Prepaid.access = 'protected';
}else{
	form1.LC.subfrmLC.subfrmDrafts.radFreight.Prepaid.access = 'open';
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Prepaid.access = 'open';
}

if(this.rawValue == 'CIP' || this.rawValue == 'CPT'){
	form1.LC.subfrmLC.subfrmDrafts.radFreight.Collect.access = 'protected';
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Collect.access = 'protected';
}else{
	form1.LC.subfrmLC.subfrmDrafts.radFreight.Collect.access = 'open';
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Collect.access = 'open';
}

// ===== form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList  ::  ready ($form) =====
if (this.rawValue == "Others")
{
	controlScript.accessChange( txtOthers, "open");
	controlScript.mandatoryChange( txtOthers, 1 );
}
else
{
	controlScript.accessChange( txtOthers, "readOnly");
	controlScript.mandatoryChange( txtOthers, 0 );
}


if ((this.rawValue == "FOB")||(this.rawValue == "CFR")||(this.rawValue == "FCA")||(this.rawValue == "CPT"))
{
	subfrmInsurance.chkInsurance.rawValue = "1";

	form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence = "visible";
	form1.LC.subfrmLC.subfrmInsurance.lblFOBCFR.presence = "visible";
}
else if ((this.rawValue == "CIF")|| (this.rawValue == "CIP"))
{
	controlScript.accessChange( form1.LC.subfrmLC.subfrmInsurance.chkInsurance, "open");
	form1.LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue = 1;
	
	form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence = "hidden";
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.presence = "hidden";
	form1.LC.subfrmLC.subfrmInsurance.lblFOBCFR.presence = "hidden";

}
else
{
	controlScript.accessChange( form1.LC.subfrmLC.subfrmInsurance.chkInsurance, "open");
	
	if (form1.LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue == "" || form1.LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue == null) 
		form1.LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue = 0;
	
	form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence = "hidden";
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.presence = "hidden";	
	form1.LC.subfrmLC.subfrmInsurance.lblFOBCFR.presence = "hidden";
}

if ((form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.rawValue == "Insurance covered by applicant under open Cover No.")&&(form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence =="visible"))
{
	controlScript.presenceChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo, "visible");
	controlScript.mandatoryChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo, 1 );
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.access = "open";
	controlScript.mandatoryChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith, 1 );
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith.access = "open";
}	
else
{
	controlScript.presenceChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo, "hidden");
	controlScript.mandatoryChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo, 0 );
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.access = "readOnly";
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.rawValue = null;
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith.rawValue = null;
	controlScript.mandatoryChange( form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith, 0 );
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith.access = "readOnly";
}


if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FOB")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FCA"))
{
	 if(form1.LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1)
		 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Collect";
	
	 if(form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1)
		 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Collect";
	
}
else if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CFR")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIP")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CPT"))
{
	 if(form1.LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1)
		 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Prepaid";
		 
	  if(form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1)
		 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Prepaid";
}

if(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF")
	 form1.LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue = 1;		 


if(this.rawValue == 'FCA')
{
	form1.LC.subfrmLC.subfrmDrafts.radFreight.Prepaid.access = 'protected';
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Prepaid.access = 'protected';
}
else
{
	form1.LC.subfrmLC.subfrmDrafts.radFreight.Prepaid.access = 'open';
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Prepaid.access = 'open';
}

if(this.rawValue == 'CIP' || this.rawValue == 'CPT')
{
	form1.LC.subfrmLC.subfrmDrafts.radFreight.Collect.access = 'protected';
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Collect.access = 'protected';
}
else
{
	form1.LC.subfrmLC.subfrmDrafts.radFreight.Collect.access = 'open';
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Collect.access = 'open';
}

// ===== form1.LC.subfrmLC.subfrmPriceBasis.txtOthers  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment  ::  change =====
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
		

// ===== form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment  ::  ready ($form) =====
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

// ===== form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment  ::  change =====
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
		

// ===== form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment  ::  ready ($form) =====
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

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.drpPortOfLoading  ::  change =====
if (xfa.event.newText == "Port of Loading / Airport of Departure")
{
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "visible");
	//controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}	
else if (xfa.event.newText == "<Select value for Shipment From>")
{
//	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "hidden");
//	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}
else if (xfa.event.newText == "Dispatch from")
{
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}
else if (xfa.event.newText == "Place of Taking in charge")
{
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}
else if (xfa.event.newText == "Place of Receipt")
{
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.drpPortOfLoading  ::  initialize =====
if (this.rawValue == "Port of Loading / Airport of Departure")
{
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "visible");
	//controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}	
else if (this.rawValue == "<Select value for Shipment From>")
{
//	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "hidden");
//	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}
else if (this.rawValue == "Dispatch from")
{
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}
else if (this.rawValue == "Place of Taking in charge")
{
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}
else if (this.rawValue == "Place of Receipt")
{
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPortOfLoad, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfReceipt, "visible");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
	controlScript.presenceChange( subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
}

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt1  ::  change =====
controlScript.checkMaxLength(txtPlaceOfReceipt1.rawValue,txtPlaceOfReceipt2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt2  ::  change =====
if(txtPlaceOfReceipt1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtPlaceOfReceipt1.rawValue,txtPlaceOfReceipt2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge1  ::  change =====
controlScript.checkMaxLength(txtPlaceOfTakingInCharge1.rawValue,txtPlaceOfTakingInCharge2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge2  ::  change =====
if(txtPlaceOfTakingInCharge1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtPlaceOfTakingInCharge1.rawValue,txtPlaceOfTakingInCharge2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.txtDispatchfrom1  ::  change =====
controlScript.checkMaxLength(txtDispatchfrom1.rawValue,txtDispatchfrom2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.txtDispatchfrom2  ::  change =====
if(txtDispatchfrom1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtDispatchfrom1.rawValue,txtDispatchfrom2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.txtLoading1  ::  change =====
controlScript.checkMaxLength(txtLoading1.rawValue,txtLoading2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.txtLoading2  ::  change =====
if(txtLoading1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtLoading1.rawValue,txtLoading2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture.txtDeparture1  ::  change =====
controlScript.checkMaxLength(txtDeparture1.rawValue,txtDeparture2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture.txtDeparture2  ::  change =====
if(txtDeparture1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtDeparture1.rawValue,txtDeparture2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.drpPortOfDischarge  ::  change =====
if (xfa.event.newText == "Port of Discharge / Airport of Destination")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");
}	
else if (xfa.event.newText == "For Transportation to")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");
}
else if (xfa.event.newText == "<Select value for Shipment To>")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");
}
else if (xfa.event.newText == "Place of Final Destination")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");
}
else if (xfa.event.newText == "Place of Delivery")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "visible");
}

// ===== form1.LC.subfrmLC.subfrmShipmentTo.drpPortOfDischarge  ::  initialize =====
if (this.rawValue == "Port of Discharge / Airport of Destination")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");
}	
else if (this.rawValue == "For Transportation to")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");
}
else if (this.rawValue == "<Select value for Shipment To>")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");
}
else if (this.rawValue == "Place of Final Destination")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");
}
else if (this.rawValue == "Place of Delivery")
{
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDischarge, "visible");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
	controlScript.presenceChange( subfrmDischargeDestination.subfrmPlaceOfDelivery, "visible");
}

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.txtForTransportationTo1  ::  change =====
controlScript.checkMaxLength(txtForTransportationTo1.rawValue,txtForTransportationTo2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.txtForTransportationTo2  ::  change =====
if(txtForTransportationTo1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtForTransportationTo1.rawValue,txtForTransportationTo2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination.txtDestination1  ::  change =====
controlScript.checkMaxLength(txtDestination1.rawValue,txtDestination2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination.txtDestination2  ::  change =====
if(txtDestination1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtDestination1.rawValue,txtDestination2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination1  ::  change =====
controlScript.checkMaxLength(txtPlaceOfFinalDestination1.rawValue,txtPlaceOfFinalDestination2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination2  ::  change =====
if(txtPlaceOfFinalDestination1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtPlaceOfFinalDestination1.rawValue,txtPlaceOfFinalDestination2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery1  ::  change =====
controlScript.checkMaxLength(txtPlaceOfDelivery1.rawValue,txtPlaceOfDelivery2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery2  ::  change =====
if(txtPlaceOfDelivery1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtPlaceOfDelivery1.rawValue,txtPlaceOfDelivery2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.txtDischarge1  ::  change =====
controlScript.checkMaxLength(txtDischarge1.rawValue,txtDischarge2.rawValue,1);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.txtDischarge2  ::  change =====
if(txtDischarge1.rawValue == null)
	xfa.event.change = "";
else 
	controlScript.checkMaxLength(txtDischarge1.rawValue,txtDischarge2.rawValue,2);
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmShipmentDate.txtDate  ::  exit =====
	
if(!controlScript.dateFormatChange(this))
{
	if (controlScript.dateCompare( subfrmShipmentDate.txtDate.rawValue, subfrmDateOfExpiry.txtDate.rawValue ))
	{
		this.rawValue = null;
		xfa.host.messageBox("Expiry date cannot be earlier than lastest shipment date.");
	}	
}

// ===== form1.LC.subfrmLC.subfrmShipmentDate.txtDate  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmDateOfExpiry.txtDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	if (controlScript.dateCompare( subfrmShipmentDate.txtDate.rawValue, subfrmDateOfExpiry.txtDate.rawValue ))
	{
		this.rawValue = null;
		xfa.host.messageBox("Expiry date cannot be earlier than lastest shipment date.");
	}			
}

// ===== form1.LC.subfrmLC.subfrmDateOfExpiry.txtDate  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmPresentation.txtPeriod  ::  change =====
controlScript.lengthLimit(2);

// ===== form1.LC.subfrmLC.subfrmDrafts.subfrmBtoB.txtCrNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmDrafts.subfrmBtoB.txtIssuBy  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmDrafts.subfrmBtoB.chkBTB  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange(txtCrNo, "open");
		controlScript.accessChange(txtIssuBy, "open");
		controlScript.mandatoryChange(txtCrNo, 0 );
		controlScript.mandatoryChange(txtIssuBy, 0 );
		
}
else
{
		controlScript.accessChange(txtCrNo, "readOnly");
		controlScript.accessChange(txtIssuBy, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmDrafts.subfrmBtoB.chkBTB  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange(txtCrNo, "open");
	controlScript.accessChange(txtIssuBy, "open");
	controlScript.mandatoryChange(txtCrNo, 0 );
	controlScript.mandatoryChange(txtIssuBy, 0 );	
}
else
{
	controlScript.accessChange(txtCrNo, "readOnly");
	controlScript.accessChange(txtIssuBy, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.chkDraft  ::  change =====
if (this.rawValue == 1)
{
		radDrafts.access = "open";
		radDrafts.chkSight.access = "open";
		radDrafts.chkTerm.access = "open";
		radDrafts.rawValue = "Sight";
		radDrafts.chkDate.access = "open";
		controlScript.mandatoryChange(txtTerm, 0 );
		controlScript.mandatoryChange(txtDaysAfter, 0 );
		
}
else
{
		controlScript.accessChange(radDrafts.chkSight, "readOnly");
		controlScript.accessChange(radDrafts.chkTerm, "readOnly");
		controlScript.accessChange(radDrafts.chkDate, "readOnly");
		controlScript.accessChange(txtTerm, "readOnly");
		controlScript.accessChange(txtDaysAfter, "readOnly");
		controlScript.accessChange(radTerm, "readOnly" );
		controlScript.accessChange(txtDate, "readOnly" );
		controlScript.mandatoryChange(radTerm, 0);
		controlScript.mandatoryChange(radTerm.Prepay, 0);
		controlScript.mandatoryChange(radTerm.NonPrepay, 0);
		//controlScript.accessChange(radTerm.Prepay, "readOnly");
		//controlScript.accessChange(radTerm.NonPrepay, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.chkDraft  ::  ready ($form) =====
if (this.rawValue == 1)
{
	radDrafts.access = "open";
	radDrafts.chkSight.access = "open";
	radDrafts.chkTerm.access = "open";
	radDrafts.chkDate.access = "open";
	controlScript.mandatoryChange(txtTerm, 0 );
	controlScript.mandatoryChange(txtDaysAfter, 0 );
		
}
else
{
	controlScript.accessChange(radDrafts.chkSight, "readOnly");
	controlScript.accessChange(radDrafts.chkTerm, "readOnly");
	controlScript.accessChange(radDrafts.chkDate, "readOnly");
	controlScript.accessChange(txtTerm, "readOnly");
	controlScript.accessChange(txtDaysAfter, "readOnly");
	controlScript.accessChange(radTerm, "readOnly" );
	controlScript.accessChange(txtDate, "readOnly" );
	controlScript.mandatoryChange(radTerm, 0);
	controlScript.mandatoryChange(radTerm.Prepay, 0);
	controlScript.mandatoryChange(radTerm.NonPrepay, 0);
}

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts  ::  change =====
if(this.rawValue == "Term"){
	controlScript.accessChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm, "open");
	controlScript.mandatoryChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm, 1 );
	controlScript.accessChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter, "open");
	controlScript.mandatoryChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter, 1 );
}else{
	controlScript.accessChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm, "readOnly");
	controlScript.accessChanger(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter, "readOnly");
}

if (this.rawValue == "Date"){
	controlScript.accessChange(txtDate, "open");
	controlScript.mandatoryChange(txtDate, 1 );
}else{
	controlScript.accessChange(txtDate, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts  ::  ready ($form) =====
if(this.rawValue == "Term")
{
	controlScript.accessChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm, "open");
	controlScript.mandatoryChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm, 1 );
	controlScript.accessChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter, "open");
	controlScript.mandatoryChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter, 1 );
}
else
{
	controlScript.accessChange(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm, "readOnly");
	controlScript.accessChanger(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter, "readOnly");
}

if (this.rawValue == "Date")
{
	controlScript.accessChange(txtDate, "open");
	controlScript.mandatoryChange(txtDate, 1 );
}
else
{
	controlScript.accessChange(txtDate, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(3);

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm  ::  exit =====
controlScript.plusNumeric(this);


var str = new String(this.rawValue);

if (str.length > 3)
		this.rawValue = null;
		

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radTerm  ::  change =====
if(this.rawValue!=null)
{
	radTerm.Prepay.validate.nullTest = "disabled";
 	radTerm.NonPrepay.validate.nullTest = "disabled";
 	
	//controlScript.mandatoryChange(radTerm, 0);
	//radTerm.Prepay.validate.nullTest ="disabled";
 	//radTerm.NonPrepay.validate.nullTest ="disabled";
}
else
{
	radTerm.Prepay.validate.nullTest = "error";
 	radTerm.NonPrepay.validate.nullTest = "error";
}

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	//if (controlScript.dateCompare( subfrmShipmentDate.txtDate.rawValue, subfrmDateOfExpiry.txtDate.rawValue ))
	//{
	//	this.rawValue = null;
	//	xfa.host.messageBox("Expiry date cannot be earlier than lastest shipment date.");
	//}			
}

// ===== form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDate  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmDrafts.chkFullSet  ::  change =====
if (this.rawValue == 1)
{
	//	controlScript.accessChange( txtFullSet, "open" );
	//	controlScript.mandatoryChange( txtFullSet, 1 );
		controlScript.accessChange( radConsignee, "open" );
		controlScript.mandatoryChange( radConsignee, 1 );
		controlScript.accessChange( radFreight, "open");
		controlScript.mandatoryChange( radFreight, 1 );
		controlScript.accessChange( txtNotifyParty, "open");
		controlScript.mandatoryChange( txtNotifyParty, 1 );
		


		if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FOB") || (form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FCA"))
		{
				 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Collect";

		}
		else if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CFR")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIP")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CPT"))
		{
				 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Prepaid";

		}

		
		
		controlScript.radioMandatoryCheck();
		
		//txtNotifyParty.rawValue = controlScript.concatValue( LC.subfrmLC.subfrmApplicant.txtName, LC.subfrmLC.subfrmApplicant.txtAddress1, 
		//												LC.subfrmLC.subfrmApplicant.txtAddress2,LC.subfrmLC.subfrmApplicant.txtAddress3);
		
		//txtNotifyParty.rawValue = LC.subfrmLC.subfrmApplicant.txtName.rawValue;
		  txtNotifyParty.rawValue = "APPLICANT";
}
else
{
		controlScript.accessChange( txtFullSet, "readOnly" );
		controlScript.accessChange( radConsignee, "readOnly" );
		controlScript.accessChange( radFreight, "readOnly");
		controlScript.accessChange( txtNotifyParty, "readOnly");

}

// ===== form1.LC.subfrmLC.subfrmDrafts.chkFullSet  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( radConsignee, "open" );
	controlScript.mandatoryChange( radConsignee, 1 );
	controlScript.accessChange( radFreight, "open");
	controlScript.mandatoryChange( radFreight, 1 );
	controlScript.accessChange( txtNotifyParty, "open");
	controlScript.mandatoryChange( txtNotifyParty, 1 );
	
	if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FOB") || (form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FCA"))
	{
		form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Collect";
	}
	else if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CFR")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIP")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CPT"))
	{
		form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Prepaid";
	}

	controlScript.radioMandatoryCheck();
	txtNotifyParty.rawValue = "APPLICANT";
}
else
{
	controlScript.accessChange( txtFullSet, "readOnly" );
	controlScript.accessChange( radConsignee, "readOnly" );
	controlScript.accessChange( radFreight, "readOnly");
	controlScript.accessChange( txtNotifyParty, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmDrafts.txtFullSet  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmDrafts.radConsignee  ::  change =====
if (this.rawValue == "3")
{
	controlScript.accessChange( txtFullSet, "open" );
	controlScript.mandatoryChange( txtFullSet, 1 );
}
else
{
	controlScript.accessChange( txtFullSet, "readOnly" );
}

// ===== form1.LC.subfrmLC.subfrmDrafts.radConsignee  ::  ready ($form) =====
if (this.rawValue == "3")
{
	controlScript.accessChange( txtFullSet, "open" );
	controlScript.mandatoryChange( txtFullSet, 1 );
}
else
{
	controlScript.accessChange( txtFullSet, "readOnly" );
}

// ===== form1.LC.subfrmLC.subfrmDrafts.radFreight  ::  change =====
if (form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FOB")
{
//	 if(form1.LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1)
			 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Collect";
	
//	 if(form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1)
//		 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Collect";
	
}
else if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CFR")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF"))
{
//	 if(form1.LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1)
		 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Prepaid";
		 
//	  if(form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1)
//		 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Prepaid";
}


 

// ===== form1.LC.subfrmLC.subfrmDrafts.txtNotifyParty  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( radioButtonList, "open" );
		controlScript.mandatoryChange( radioButtonList, 1 );
		controlScript.accessChange( txtNotifyParty, "open");
		controlScript.mandatoryChange( txtNotifyParty, 1 );
		
		controlScript.radioMandatoryCheck();
		

		if (form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FOB" || form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FCA")
		{
				 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Collect";
		}
		else if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CFR")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF") ||
				(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIP") || (form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CPT"))
		{
				 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Prepaid";
		}
		
		//	txtNotifyParty.rawValue = controlScript.concatValue( LC.subfrmLC.subfrmApplicant.txtName, LC.subfrmLC.subfrmApplicant.txtAddress1, 
		//												LC.subfrmLC.subfrmApplicant.txtAddress2,LC.subfrmLC.subfrmApplicant.txtAddress3);
		txtNotifyParty.rawValue = "APPLICANT";
}
else
{
		controlScript.accessChange( radioButtonList, "readOnly" );
		controlScript.mandatoryChange( radioButtonList, 0 );
		controlScript.accessChange( txtNotifyParty, "readOnly" );
		controlScript.mandatoryChange( radioButtonList, 0 );


}

// ===== form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( radioButtonList, "open" );
	controlScript.mandatoryChange( radioButtonList, 1 );
	controlScript.accessChange( txtNotifyParty, "open");
	controlScript.mandatoryChange( txtNotifyParty, 1 );
	
	controlScript.radioMandatoryCheck();
	

	if (form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FOB" || form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FCA")
	{
		form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Collect";
	}
	else if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CFR")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF") ||
			(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIP") || (form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CPT"))
	{
		form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Prepaid";
	}
		
	txtNotifyParty.rawValue = "APPLICANT";
}
else
{
	controlScript.accessChange( radioButtonList, "readOnly" );
	controlScript.mandatoryChange( radioButtonList, 0 );
	controlScript.accessChange( txtNotifyParty, "readOnly" );
	controlScript.mandatoryChange( radioButtonList, 0 );
}

// ===== form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList  ::  change =====
if (form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "FOB")
{
//	 if(form1.LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1)
//			 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Collect";
	
//	 if(form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1)
		 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Collect";
	
}
else if ((form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CFR")||(form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.rawValue == "CIF"))
{
//	 if(form1.LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1)
//		 form1.LC.subfrmLC.subfrmDrafts.radFreight.rawValue = "Prepaid";
		 
//	  if(form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1)
		 form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue = "Prepaid";
}

// ===== form1.LC.subfrmLC.subfrmOriginalAirWaybill.txtNotifyParty  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLC.subfrmTransportDocumentsByDO.chkDeliveryOrderIn  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtOriginals, "open" );
		controlScript.mandatoryChange( txtOriginals, 1 );
		controlScript.accessChange( txtCopies, "open");
		controlScript.mandatoryChange( txtCopies, 1 );
		controlScript.accessChange( drpCountersignedBy, "open");
		controlScript.mandatoryChange( drpCountersignedBy, 1 );
		controlScript.accessChange( drpWhoseSignature, "open");
		controlScript.mandatoryChange( drpWhoseSignature, 1 );
		
		
	//	txtOriginals.rawValue = 0;
	//	txtCopies.rawValue = 0;
	//	LC.subfrmLC.subfrmTransportDocumentsByDO.drpCountersignedBy.rawValue  = "ONE";
	//	LC.subfrmLC.subfrmTransportDocumentsByDO.drpWhoseSignature.rawValue = "NEED NOT";
}
else
{
		controlScript.accessChange( txtOriginals, "readOnly" );
		controlScript.accessChange( txtCopies, "readOnly");
		controlScript.accessChange( drpCountersignedBy, "readOnly");
		controlScript.accessChange( drpWhoseSignature, "readOnly");

}

// ===== form1.LC.subfrmLC.subfrmTransportDocumentsByDO.chkDeliveryOrderIn  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( txtOriginals, "open" );
	controlScript.mandatoryChange( txtOriginals, 1 );
	controlScript.accessChange( txtCopies, "open");
	controlScript.mandatoryChange( txtCopies, 1 );
	controlScript.accessChange( drpCountersignedBy, "open");
	controlScript.mandatoryChange( drpCountersignedBy, 1 );
	controlScript.accessChange( drpWhoseSignature, "open");
	controlScript.mandatoryChange( drpWhoseSignature, 1 );
}
else
{
	controlScript.accessChange( txtOriginals, "readOnly" );
	controlScript.accessChange( txtCopies, "readOnly");
	controlScript.accessChange( drpCountersignedBy, "readOnly");
	controlScript.accessChange( drpWhoseSignature, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtOriginals  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);

// ===== form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtOriginals  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtCopies  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);

// ===== form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtCopies  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLC.subfrmTransportDocumentsByDO.drpCountersignedBy  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmTransportDocumentsByDO.drpWhoseSignature  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR  ::  change =====
if (xfa.event.newText == "Insurance covered by applicant under open Cover No.")
{
	controlScript.presenceChange( subfrmCoverNo, "visible");
	controlScript.mandatoryChange( subfrmCoverNo.txtCoverNo, 1 );
	subfrmCoverNo.txtCoverNo.access = "open";
	controlScript.mandatoryChange( subfrmCoverNo.txtWith, 1 );
	subfrmCoverNo.txtWith.access = "open";
}	
else
{
	controlScript.presenceChange( subfrmCoverNo, "hidden");
	controlScript.mandatoryChange( subfrmCoverNo.txtCoverNo, 0 );
//	subfrmCoverNo.txtCoverNo.access = "readOnly";
//	subfrmCoverNo.txtCoverNo.rawValue = null;
//	subfrmCoverNo.txtWith.rawValue = null;
	controlScript.mandatoryChange( subfrmCoverNo.txtWith, 0 );
	subfrmCoverNo.txtWith.access = "readOnly";
}

// ===== form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR  ::  ready ($form) =====
if (xfa.event.newText == "Insurance covered by applicant under open Cover No.")
{
	controlScript.presenceChange( subfrmCoverNo, "visible");
	controlScript.mandatoryChange( subfrmCoverNo.txtCoverNo, 1 );
	subfrmCoverNo.txtCoverNo.access = "open";
	controlScript.mandatoryChange( subfrmCoverNo.txtWith, 1 );
	subfrmCoverNo.txtWith.access = "open";
}	
else
{
	controlScript.presenceChange( subfrmCoverNo, "hidden");
	controlScript.mandatoryChange( subfrmCoverNo.txtCoverNo, 0 );
	controlScript.mandatoryChange( subfrmCoverNo.txtWith, 0 );
	subfrmCoverNo.txtWith.access = "readOnly";
}

// ===== form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtWith  ::  change =====
controlScript.changeUpper();

// ===== form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkBeneficiaryCertificate  ::  change =====
var sum = chkFaxed.rawValue + chkMailed.rawValue + chkCouriered.rawValue;

if (this.rawValue == 1 && sum == "000")
{
		controlScript.accessChange( chkFaxed, "open" );
		controlScript.mandatoryChange( chkFaxed, 1 );
		controlScript.accessChange( chkMailed, "open");
		controlScript.mandatoryChange( chkMailed, 1 );
		controlScript.accessChange( chkCouriered, "open");
		controlScript.mandatoryChange( chkCouriered, 1 );
		controlScript.accessChange( txtDaysAfterShipment, "open");

		form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue = 1;
}
else
{
		controlScript.accessChange( chkFaxed, "readOnly" );
		controlScript.accessChange( chkMailed, "readOnly");
		controlScript.accessChange( chkCouriered, "readOnly");
		controlScript.accessChange( txtDaysAfterShipment, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkBeneficiaryCertificate  ::  ready ($form) =====
var sum = chkFaxed.rawValue + chkMailed.rawValue + chkCouriered.rawValue;

if (this.rawValue == 1 && sum != "000")
{
	controlScript.accessChange( chkFaxed, "open" );
	controlScript.accessChange( chkMailed, "open");
	controlScript.accessChange( chkCouriered, "open");
	controlScript.accessChange( txtDaysAfterShipment, "open");
}
else if (this.rawValue == 1 && sum == "000")
{
	controlScript.accessChange( chkFaxed, "open" );
	controlScript.mandatoryChange( chkFaxed, 1 );
	controlScript.accessChange( chkMailed, "open");
	controlScript.mandatoryChange( chkMailed, 1 );
	controlScript.accessChange( chkCouriered, "open");
	controlScript.mandatoryChange( chkCouriered, 1 );
	controlScript.accessChange( txtDaysAfterShipment, "open");
}
else if (this.rawValue != 1)
{
	controlScript.accessChange( chkFaxed, "readOnly" );
	controlScript.accessChange( chkMailed, "readOnly");
	controlScript.accessChange( chkCouriered, "readOnly");
	controlScript.accessChange( txtDaysAfterShipment, "readOnly");
}

// ===== form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed  ::  change =====
var sum = chkFaxed.rawValue + chkMailed.rawValue + chkCouriered.rawValue;

if (sum != "000")
{
		controlScript.mandatoryChange( chkFaxed, 0 );
		controlScript.mandatoryChange( chkMailed, 0 );
		controlScript.mandatoryChange( chkCouriered, 0 );
}
else
{
		controlScript.mandatoryChange( chkFaxed, 1 );
		controlScript.mandatoryChange( chkMailed, 1 );
		controlScript.mandatoryChange( chkCouriered, 1 );
}

// ===== form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed  ::  change =====
var sum = chkFaxed.rawValue + chkMailed.rawValue + chkCouriered.rawValue;

if (sum != "000")
{
		controlScript.mandatoryChange( chkFaxed, 0 );
		controlScript.mandatoryChange( chkMailed, 0 );
		controlScript.mandatoryChange( chkCouriered, 0 );
}
else
{
		controlScript.mandatoryChange( chkFaxed, 1 );
		controlScript.mandatoryChange( chkMailed, 1 );
		controlScript.mandatoryChange( chkCouriered, 1 );
}

// ===== form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered  ::  change =====
var sum = chkFaxed.rawValue + chkMailed.rawValue + chkCouriered.rawValue;

if (sum != "000")
{
		controlScript.mandatoryChange( chkFaxed, 0 );
		controlScript.mandatoryChange( chkMailed, 0 );
		controlScript.mandatoryChange( chkCouriered, 0 );
}
else
{
		controlScript.mandatoryChange( chkFaxed, 1 );
		controlScript.mandatoryChange( chkMailed, 1 );
		controlScript.mandatoryChange( chkCouriered, 1 );
}

// ===== form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);

// ===== form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment  ::  exit =====
if ((this.rawValue < 1)&&(this.rawValue != null))
{
		xfa.host.messageBox("" + errorMessage.plusNumeric);
		this.rawValue = null;
}


var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.chkSignedCommercialInvoice  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtSignedOriginals, "open" );
		controlScript.mandatoryChange( txtSignedOriginals, 0 );
		controlScript.accessChange( txtSignedCopies, "open");
		controlScript.mandatoryChange( txtSignedCopies, 0 );
		

}
else
{
		controlScript.accessChange( txtSignedOriginals, "readOnly" );
		controlScript.accessChange( txtSignedCopies, "readOnly");

}

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.chkSignedCommercialInvoice  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( txtSignedOriginals, "open" );
	controlScript.mandatoryChange( txtSignedOriginals, 0 );
	controlScript.accessChange( txtSignedCopies, "open");
	controlScript.mandatoryChange( txtSignedCopies, 0 );		
}
else
{
	controlScript.accessChange( txtSignedOriginals, "readOnly" );
	controlScript.accessChange( txtSignedCopies, "readOnly");
}

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedOriginals  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);
controlScript.validateRegularExpNumeric();

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedOriginals  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedCopies  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);
controlScript.validateRegularExpNumeric();

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedCopies  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.chkPackingList  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtPackingListOriginals, "open" );
		controlScript.mandatoryChange( txtPackingListOriginals, 0 );
		controlScript.accessChange( txtPackingListCopies, "open");
		controlScript.mandatoryChange( txtPackingListCopies, 0 );
}
else
{
		controlScript.accessChange( txtPackingListOriginals, "readOnly" );
		controlScript.accessChange( txtPackingListCopies, "readOnly");
}

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.chkPackingList  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( txtPackingListOriginals, "open" );
	controlScript.mandatoryChange( txtPackingListOriginals, 0 );
	controlScript.accessChange( txtPackingListCopies, "open");
	controlScript.mandatoryChange( txtPackingListCopies, 0 );
}
else
{
	controlScript.accessChange( txtPackingListOriginals, "readOnly" );
	controlScript.accessChange( txtPackingListCopies, "readOnly");
}

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListOriginals  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);
controlScript.validateRegularExpNumeric();

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListOriginals  ::  exit =====
controlScript.plusNumeric(this);


var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListCopies  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);
controlScript.validateRegularExpNumeric();

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListCopies  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.chkWeightNote  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtWeightNoteOriginals, "open" );
		controlScript.mandatoryChange( txtWeightNoteOriginals, 0 );
		controlScript.accessChange( txtWeightNoteCopies, "open");
		controlScript.mandatoryChange( txtWeightNoteCopies, 0 );
}
else
{
		controlScript.accessChange( txtWeightNoteOriginals, "readOnly" );
		controlScript.accessChange( txtWeightNoteCopies, "readOnly");
}

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.chkWeightNote  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( txtWeightNoteOriginals, "open" );
	controlScript.mandatoryChange( txtWeightNoteOriginals, 0 );
	controlScript.accessChange( txtWeightNoteCopies, "open");
	controlScript.mandatoryChange( txtWeightNoteCopies, 0 );
}
else
{
	controlScript.accessChange( txtWeightNoteOriginals, "readOnly" );
	controlScript.accessChange( txtWeightNoteCopies, "readOnly");
}

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteOriginals  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);
controlScript.validateRegularExpNumeric();

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteOriginals  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteCopies  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);
controlScript.validateRegularExpNumeric();

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteCopies  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.chkCertificateOfOrigin  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtCertificateOfOriginInOriginals, "open" );
		controlScript.mandatoryChange( txtCertificateOfOriginInOriginals, 0 );
		controlScript.accessChange( txtCertificateOfOriginCopies, "open");
		controlScript.mandatoryChange( txtCertificateOfOriginCopies, 0 );
		controlScript.accessChange( txtCertificateOfOriginCountry, "open");
		//controlScript.mandatoryChange( txtCertificateOfOriginCountry, 1 );

}
else
{
		controlScript.accessChange( txtCertificateOfOriginInOriginals, "readOnly" );
		controlScript.accessChange( txtCertificateOfOriginCopies, "readOnly");
		controlScript.accessChange( txtCertificateOfOriginCountry, "readOnly");

}

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.chkCertificateOfOrigin  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( txtCertificateOfOriginInOriginals, "open" );
	controlScript.mandatoryChange( txtCertificateOfOriginInOriginals, 0 );
	controlScript.accessChange( txtCertificateOfOriginCopies, "open");
	controlScript.mandatoryChange( txtCertificateOfOriginCopies, 0 );
	controlScript.accessChange( txtCertificateOfOriginCountry, "open");
}
else
{
	controlScript.accessChange( txtCertificateOfOriginInOriginals, "readOnly" );
	controlScript.accessChange( txtCertificateOfOriginCopies, "readOnly");
	controlScript.accessChange( txtCertificateOfOriginCountry, "readOnly");
}

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginInOriginals  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);
controlScript.validateRegularExpNumeric();

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginInOriginals  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCopies  ::  change =====
controlScript.changeUpper();
controlScript.lengthLimit(2);
controlScript.validateRegularExpNumeric();

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCopies  ::  exit =====
controlScript.plusNumeric(this);

var str = new String(this.rawValue);

if (str.length > 2)
		this.rawValue = null;

// ===== form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCountry  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLCFoot.subfrmOtherDoc.chkBeneficiaryCertificate  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( txtOtherDoc, "open" );
		controlScript.mandatoryChange( txtOtherDoc, 1 );
		controlScript.accessChange( txtOtherDoc1, "open" );
		//controlScript.mandatoryChange( txtOtherDoc1, 1 );
}
else
{
		controlScript.accessChange( txtOtherDoc, "readOnly" );
		controlScript.accessChange( txtOtherDoc1, "readOnly");
}

// ===== form1.LC.subfrmLCFoot.subfrmOtherDoc.chkBeneficiaryCertificate  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( txtOtherDoc, "open" );
	controlScript.mandatoryChange( txtOtherDoc, 1 );
	controlScript.accessChange( txtOtherDoc1, "open" );
}
else
{
	controlScript.accessChange( txtOtherDoc, "readOnly" );
	controlScript.accessChange( txtOtherDoc1, "readOnly");
}

// ===== form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc  ::  change =====
controlScript.changeUpper();
controlScript.toUpperCase();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc1  ::  change =====
controlScript.changeUpper();
controlScript.toUpperCase();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLCFoot.subfrmGoodsDescription.txtGoodsDescription  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLCFoot.subfrmAdditionalCond.txtAdditionalCond  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.chkBankCharges  ::  change =====
if (this.rawValue == 1)// && radChargeAccount.Beneficiary.rawValue == null && radChargeAccount.Applicant.rawValue == null)
{	
	controlScript.accessChange( radChargeAccount, "open" );
	controlScript.mandatoryChange(radChargeAccount, 1 );
	//controlScript.mandatoryChange(radChargeAccount.Beneficiary , 1 );
	//controlScript.mandatoryChange(radChargeAccount.Applicant , 1 );
	radChargeAccount.rawValue = "LAB";
}
else
{
	controlScript.accessChange( radChargeAccount, "readOnly" );
	controlScript.mandatoryChange(radChargeAccount, 0 );
}		

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.chkBankCharges  ::  ready ($form) =====
 
if (this.rawValue == 1)
{	
	controlScript.accessChange( radChargeAccount, "open" );
	controlScript.mandatoryChange(radChargeAccount , 1 );
	if (radChargeAccount.rawValue == "") 
		radChargeAccount.rawValue = "LAB";
}
else
{
	controlScript.accessChange( radChargeAccount, "readOnly" );
	controlScript.mandatoryChange(radChargeAccount, 0 );
}	

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.radChargeAccount  ::  change =====
if(this.rawValue != null){
	controlScript.mandatoryChange(radChargeAccount.Beneficiary , 0 );
	controlScript.mandatoryChange(radChargeAccount.Applicant , 0 );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.chkConfirmation  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( radioButtonList, "open" );
		controlScript.mandatoryChange(radioButtonList, 1 );
		controlScript.mandatoryChange(radioButtonList.Applicant, 1 );
		controlScript.mandatoryChange(radioButtonList.Beneficiary, 1 );
		radioButtonList.rawValue = "Beneficiary";
}
else
{
		controlScript.accessChange( radioButtonList, "readOnly" );
}		

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList  ::  change =====
if(this.rawValue != null){
	controlScript.mandatoryChange(radioButtonList.Beneficiary , 0 );
	controlScript.mandatoryChange(radioButtonList.Applicant , 0 );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.chkTrustReceipts  ::  change =====
if (this.rawValue == 1)
{
		controlScript.accessChange( radTrustReceipts, "open" );
		controlScript.mandatoryChange(radTrustReceipts, 1 );
}
else
{
		controlScript.accessChange( radTrustReceipts, "readOnly" );
		controlScript.mandatoryChange(radTrustReceipts, 0 );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.chkTrustReceipts  ::  ready ($form) =====
if (this.rawValue == 1)
{
	controlScript.accessChange( radTrustReceipts, "open" );
	controlScript.mandatoryChange(radTrustReceipts, 1 );
}
else
{
	controlScript.accessChange( radTrustReceipts, "readOnly" );
	controlScript.mandatoryChange(radTrustReceipts, 0 );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkSGD  ::  change =====
/*if (chkTrustReceipts.rawValue ==1 && chkSGD.rawValue == 0 && chkForgeign.rawValue == 0 && chkApplyForward.rawValue == 0)
{
		controlScript.mandatoryChange(chkSGD, 1 );
		controlScript.accessChange( chkSGD, "open" );
		controlScript.mandatoryChange(chkForgeign, 1 );
		controlScript.accessChange( chkForgeign, "open" );
		controlScript.mandatoryChange(chkApplyForward, 1 );
		controlScript.accessChange( chkApplyForward, "open" );
}
else
{
		controlScript.mandatoryChange(chkSGD, 0 );
		controlScript.accessChange( chkSGD, "readOnly" );
		controlScript.mandatoryChange(chkForgeign, 0 );
		controlScript.accessChange( chkForgeign, "readOnly" );
		controlScript.mandatoryChange(chkApplyForward, 0 );
		controlScript.accessChange( chkApplyForward, "readOnly" );
}

controlScript.accessChange( txtForgeign, "readOnly" );
controlScript.mandatoryChange(txtForgeign, 0 );
controlScript.accessChange( txtApplyForward, "readOnly" );
controlScript.mandatoryChange(txtApplyForward, 0 );*/

if(this.rawValue == "1"){
	chkForgeign.rawValue = "0";
	chkApplyForward.rawValue = "0";
	controlScript.accessChange( txtForgeign, "readOnly" );
	controlScript.mandatoryChange(txtForgeign, 0 );
	controlScript.accessChange( txtApplyForward, "readOnly" );
	controlScript.mandatoryChange(txtApplyForward, 0 );
	controlScript.mandatoryChange(chkForgeign, 0 );
	controlScript.mandatoryChange(chkApplyForward, 0 );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkSGD  ::  ready ($form) =====
if (chkTrustReceipts.rawValue ==1 && chkSGD.rawValue == 0 && chkForgeign.rawValue == 0 && chkApplyForward.rawValue == 0)
{
	controlScript.mandatoryChange(chkSGD, 1 );
	controlScript.mandatoryChange(chkForgeign, 1 );
	controlScript.mandatoryChange(chkApplyForward, 1 );
}
else
{
	controlScript.mandatoryChange(chkSGD, 0 );
	controlScript.mandatoryChange(chkForgeign, 0 );
	controlScript.mandatoryChange(chkApplyForward, 0 );
}

controlScript.accessChange( txtForgeign, "readOnly" );
controlScript.mandatoryChange(txtForgeign, 0 );
controlScript.accessChange( txtApplyForward, "readOnly" );
controlScript.mandatoryChange(txtApplyForward, 0 );

if(this.rawValue == "1")
{
	chkForgeign.rawValue = "0";
	chkApplyForward.rawValue = "0";
	controlScript.accessChange( txtForgeign, "readOnly" );
	controlScript.mandatoryChange(txtForgeign, 0 );
	controlScript.accessChange( txtApplyForward, "readOnly" );
	controlScript.mandatoryChange(txtApplyForward, 0 );
	controlScript.mandatoryChange(chkForgeign, 0 );
	controlScript.mandatoryChange(chkApplyForward, 0 );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkForgeign  ::  change =====
if(this.rawValue == "2"){

	controlScript.accessChange( txtForgeign, "open" );
	controlScript.mandatoryChange(txtForgeign, 1 );
	controlScript.accessChange( txtApplyForward, "readOnly" );
	controlScript.mandatoryChange(txtApplyForward, 0 );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkForgeign  ::  ready ($form) =====
if(this.rawValue == "2")
{
	controlScript.accessChange( txtForgeign, "open" );
	controlScript.mandatoryChange(txtForgeign, 1 );
	controlScript.accessChange( txtApplyForward, "readOnly" );
	controlScript.mandatoryChange(txtApplyForward, 0 );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkApplyForward  ::  change =====
if(this.rawValue == "3"){

	controlScript.accessChange( txtForgeign, "readOnly" );
	controlScript.mandatoryChange(txtForgeign, 0 );
	controlScript.accessChange( txtApplyForward, "open" );
	controlScript.mandatoryChange(txtApplyForward, 1 );
}
else
{
	controlScript.accessChange( txtApplyForward, "readOnly" );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkApplyForward  ::  ready ($form) =====
if(this.rawValue == "3")
{
	controlScript.accessChange( txtForgeign, "readOnly" );
	controlScript.mandatoryChange(txtForgeign, 0 );
	controlScript.accessChange( txtApplyForward, "open" );
	controlScript.mandatoryChange(txtApplyForward, 1 );
}
else
{
	controlScript.accessChange( txtApplyForward, "readOnly" );
}

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtForgeign  ::  change =====
controlScript.changeUpper();

controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtForgeign  ::  initialize =====
if (form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkForgeign.rawValue == 1)
	controlScript.accessChange( txtForgeign, "open" );
else
	controlScript.accessChange( txtForgeign, "readOnly" );

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtApplyForward  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtApplyForward  ::  initialize =====
if (form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkApplyForward.rawValue == 1)
	controlScript.accessChange( txtApplyForward, "open" );
else
	controlScript.accessChange( txtApplyForward, "readOnly" );

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.#subform[0].txtApplyForward  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmIssuanceCharges.txtWithyou  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.LC.subfrmOthers.btnPrint  ::  click =====
//barcodeScript.LCbarcode();
form1.MainPage.subfrmMain.txtPrint.rawValue = 1;


form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);


if(form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.validate.nullTest != "error")
{
	form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;
	form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;
	form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;
}

if(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radTerm.rawValue!=null)
{
	var rd = form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radTerm.Prepay.somExpression + ".ui.oneOfChild.border.fill.color";
	xfa.resolveNode(rd).value = NormalColor.value;
	rd = form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radTerm.NonPrepay.somExpression + ".ui.oneOfChild.border.fill.color";
	xfa.resolveNode(rd).value = NormalColor.value;
}


controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
barcodeScript.LCbarcode();
controlScript.selectMandaotoryField();

if  (controlScript.setMandatoryBackColor() == 0)	
{		
			form1.variables.checkSumValue.value = controlScript.checkSum();
			 form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValue.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

// ===== form1.LC.subfrmOthers.btnSave  ::  click =====
barcodeScript.cleanUpLC();
app.execMenuItem("SaveAs");	

// ===== form1.LC.subfrmOthers.PaperFormsBarcode2  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.LC.subfrmBarcodeRecord.txtBarcode1.rawValue;
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

// ===== form1.LC.subfrmOthers.PaperFormsBarcode1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.LC.subfrmBarcodeRecord.txtBarcode2.rawValue;
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

// ===== form1.LC.subfrmOthers.PaperFormsBarcode4  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.LC.subfrmBarcodeRecord.txtBarcode2_1.rawValue;
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

// ===== form1.LC.subfrmOthers.PaperFormsBarcode3  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.LC.subfrmBarcodeRecord.txtBarcode1_1.rawValue;
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

// ===== form1.LC  ::  ready ($form) =====
if(form1.LC.subfrmLC.subfrmCreditAmount.drpCurrency.rawValue != null)
{
	if((form1.LC.subfrmLC.subfrmCreditAmount.drpCurrency.rawValue == "THB")||(form1.LC.subfrmLC.subfrmCreditAmount.drpCurrency.rawValue == "JPY") || (form1.LC.subfrmLC.subfrmCreditAmount.drpCurrency.rawValue == "TRY"))
	{
		form1.LC.subfrmLC.subfrmCreditAmount.txtAmount.resolveNode("value.#decimal").leadDigits = "12";
		form1.LC.subfrmLC.subfrmCreditAmount.txtAmount.resolveNode("value.#decimal").fracDigits = "0";
		form1.LC.subfrmLC.subfrmCreditAmount.txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
	}
	else
	{
		form1.LC.subfrmLC.subfrmCreditAmount.txtAmount.resolveNode("value.#decimal").leadDigits = "12";
		form1.LC.subfrmLC.subfrmCreditAmount.txtAmount.resolveNode("value.#decimal").fracDigits = "2";
		form1.LC.subfrmLC.subfrmCreditAmount.txtAmount.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
	}
}

// ===== form1.LC  ::  ready ($layout) =====
if(LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.rawValue == "Term")
{
	controlScript.accessChange(LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.txtTerm, "readOnly");
	controlScript.accessChanger(LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.txtDaysAfter, "readOnly");	
}

