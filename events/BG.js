// Event scripts for BG: 76 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.BG.BGBcode.txtBGDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{	
	form1.MainPage.subfrmMain.txtBG.rawValue = this.rawValue;
}		
if (this.rawValue == null)
		controlScript.currentDate( this );

// ===== form1.BG.BGBcode.txtBGDate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtBG.rawValue;

// ===== form1.BG.BGBcode.txtBGDate  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtBankCIFNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtBankCIFNo  ::  exit =====
if(this.rawValue== null || (this.rawValue != null && (""+this.rawValue).length == 7)){
form1.MainPage.BankCIFNo.txtBankCIFNo.rawValue = this.rawValue;
}else{
	xfa.host.messageBox("Please input your 7-digit C.I.F. Number");
	xfa.host.setFocus(this);
}

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtContactName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtTelNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subApplicantInfo.txtFaxNo  ::  change =====
controlScript.changeUpper();
//controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry  ::  initialize =====
controlScript.populateCountryList(this);

// ===== form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtContactName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtTelNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtFaxNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.currencyAndAmount.subCurrenyAmount.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BG.currencyAndAmount.subCurrenyAmount.drpCurrency  ::  change =====
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

// ===== form1.BG.currencyAndAmount.subCurrenyAmount.txtAmount  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

// ===== form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress1  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress2  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress3  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate  ::  change =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtSpecificDate, "open" );
	controlScript.mandatoryChange( txtSpecificDate, 1 );

}
else
{
	controlScript.accessChange( txtSpecificDate, "readOnly" );
	controlScript.mandatoryChange( txtSpecificDate, 0 );
	
}

// ===== form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate  ::  ready ($form) =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtSpecificDate, "open" );
	controlScript.mandatoryChange( txtSpecificDate, 1 );

}
else
{
	controlScript.accessChange( txtSpecificDate, "readOnly" );
	controlScript.mandatoryChange( txtSpecificDate, 0 );
	
}

// ===== form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.txtSpecificDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	if(controlScript.validateDate(this))
	{
		
		controlScript.checkOnExpiryDate();
	}
}

//controlScript.dateFormatChange(this);

// ===== form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.txtSpecificDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate  ::  change =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtSpecificDate, "open" );
	controlScript.mandatoryChange( txtSpecificDate, 1 );

}
else
{
	controlScript.accessChange( txtSpecificDate, "readOnly" );
	controlScript.mandatoryChange( txtSpecificDate, 0 );
	
}

// ===== form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate  ::  ready ($form) =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtSpecificDate, "open" );
	controlScript.mandatoryChange( txtSpecificDate, 1 );

}
else
{
	controlScript.accessChange( txtSpecificDate, "readOnly" );
	controlScript.mandatoryChange( txtSpecificDate, 0 );
	
}

// ===== form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.txtSpecificDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	if(controlScript.validateDate(this))
	{
		controlScript.compareEffectiveDate(this,form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.txtSpecificDate,true);
		/*
		if (form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtSpecificDate.rawValue == null || 
		form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtSpecificDate.rawValue == "")
		{
			form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtSpecificDate.rawValue = this.rawValue;
		}
		*/
		controlScript.checkOnExpiryDate();
		
	}
}
//controlScript.dateFormatChange(this);

// ===== form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.txtSpecificDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate  ::  change =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtSpecificDate, "open" );
	controlScript.mandatoryChange( txtSpecificDate, 1 );

}
else
{
	controlScript.accessChange( txtSpecificDate, "readOnly" );
	controlScript.mandatoryChange( txtSpecificDate, 0 );
	
}

if(this.rawValue == "3")
{
	controlScript.accessChange( txtClaimPeriod, "open" );
	controlScript.mandatoryChange( txtClaimPeriod, 1 );
	controlScript.accessChange( drpDayMonth, "open" );
	controlScript.mandatoryChange( drpDayMonth, 1 );

}
else
{
	controlScript.accessChange( txtClaimPeriod, "readOnly" );
	controlScript.mandatoryChange( txtClaimPeriod, 0 );
	controlScript.accessChange( drpDayMonth, "readOnly" );
	controlScript.mandatoryChange( drpDayMonth, 0 );
	
}

// ===== form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate  ::  ready ($form) =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtSpecificDate, "open" );
	controlScript.mandatoryChange( txtSpecificDate, 1 );

}
else
{
	controlScript.accessChange( txtSpecificDate, "readOnly" );
	controlScript.mandatoryChange( txtSpecificDate, 0 );
	
}

if(this.rawValue == "3")
{
	controlScript.accessChange( txtClaimPeriod, "open" );
	controlScript.mandatoryChange( txtClaimPeriod, 1 );
	controlScript.accessChange( drpDayMonth, "open" );
	controlScript.mandatoryChange( drpDayMonth, 1 );

}
else
{
	controlScript.accessChange( txtClaimPeriod, "readOnly" );
	controlScript.mandatoryChange( txtClaimPeriod, 0 );
	controlScript.accessChange( drpDayMonth, "readOnly" );
	controlScript.mandatoryChange( drpDayMonth, 0 );
	
}

// ===== form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtSpecificDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	if(controlScript.validateDate(this))
	{		
		controlScript.compareExpiryDate(this,form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.txtSpecificDate,true);
		
	}
}
//controlScript.dateFormatChange(this);

// ===== form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtSpecificDate  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtClaimPeriod  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.BG.requirementsOfIssuingBank.requirements.radRequirements  ::  change =====
if(this.rawValue == "1")
{
	form1.BG.deliveryInstructions.subDeliveryIns.sectionA.presence = "visible";
	form1.BG.deliveryInstructions.subDeliveryIns.sectionB.presence = "hidden";
	
}
else
{
	form1.BG.deliveryInstructions.subDeliveryIns.sectionA.presence = "hidden";
	form1.BG.deliveryInstructions.subDeliveryIns.sectionB.presence = "visible";		
}

if(this.rawValue == "2")
{
	/*
	if (form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue == "OTHERS")
	{
		controlScript.accessChange( drpBranchCountry, "readOnly" );
		controlScript.mandatoryChange( drpBranchCountry, 0 );
	}
	else
	{
		controlScript.accessChange( drpBranchCountry, "open" );
		controlScript.mandatoryChange( drpBranchCountry, 1 );
	}
	*/
	
	controlScript.accessChange( drpBranchCountry, "open" );
	controlScript.mandatoryChange( drpBranchCountry, 1 );
	controlScript.accessChange( drpEntity, "open" );
	controlScript.mandatoryChange( drpEntity, 1 );
	
	controlScript.populateEntityList(form1.BG.requirementsOfIssuingBank.requirements.drpEntity);
	
}
else
{
	//form1.BG.requirementsOfIssuingBank.requirements.drpEntity.clearItems();
	form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue = "";
	controlScript.accessChange( drpEntity, "readOnly" );
	controlScript.mandatoryChange( drpEntity, 0 );
	//form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.clearItems();
	form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue = "";
	controlScript.accessChange( drpBranchCountry, "readOnly" );
	controlScript.mandatoryChange( drpBranchCountry, 0 );
	
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity.presence = "hidden";
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity.rawValue = null;
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch.presence = "hidden";
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch.rawValue = null;
}

if(this.rawValue == "4")
{
	controlScript.accessChange( txtIssueBankName, "open" );
	controlScript.mandatoryChange( txtIssueBankName, 1 );
	controlScript.accessChange( txtSwiftAddress, "open" );
	controlScript.mandatoryChange( txtSwiftAddress, 1 );

}
else
{
	controlScript.accessChange( txtIssueBankName, "readOnly" );
	controlScript.mandatoryChange( txtIssueBankName, 0 );
	controlScript.accessChange( txtSwiftAddress, "readOnly" );
	controlScript.mandatoryChange( txtSwiftAddress, 0 );
	
}

// ===== form1.BG.requirementsOfIssuingBank.requirements.radRequirements  ::  ready ($form) =====
if(this.rawValue == "1")
{
	form1.BG.deliveryInstructions.subDeliveryIns.sectionA.presence = "visible";
	form1.BG.deliveryInstructions.subDeliveryIns.sectionB.presence = "hidden";
	
}
else
{
	form1.BG.deliveryInstructions.subDeliveryIns.sectionA.presence = "hidden";
	form1.BG.deliveryInstructions.subDeliveryIns.sectionB.presence = "visible";		
}
if(this.rawValue == "2")
{
	/*
	if (form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue == "OTHERS")
	{
		controlScript.accessChange( drpBranchCountry, "readOnly" );
		controlScript.mandatoryChange( drpBranchCountry, 0 );
	}
	else
	{
		controlScript.accessChange( drpBranchCountry, "open" );
		controlScript.mandatoryChange( drpBranchCountry, 1 );
	}
	*/
	
	controlScript.accessChange( drpBranchCountry, "open" );
	controlScript.mandatoryChange( drpBranchCountry, 1 );
	controlScript.accessChange( drpEntity, "open" );
	controlScript.mandatoryChange( drpEntity, 1 );

	controlScript.populateEntityList(form1.BG.requirementsOfIssuingBank.requirements.drpEntity);
	
}
else
{
	//form1.BG.requirementsOfIssuingBank.requirements.drpEntity.clearItems();
	form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue = "";
	controlScript.accessChange( drpEntity, "readOnly" );
	controlScript.mandatoryChange( drpEntity, 0 );
	//form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.clearItems();
	form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue = "";
	controlScript.accessChange( drpBranchCountry, "readOnly" );
	controlScript.mandatoryChange( drpBranchCountry, 0 );
	
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity.presence = "hidden";
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity.rawValue = null;
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch.presence = "hidden";
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch.rawValue = null;
}

if(this.rawValue == "4")
{
	controlScript.accessChange( txtIssueBankName, "open" );
	controlScript.mandatoryChange( txtIssueBankName, 1 );
	controlScript.accessChange( txtSwiftAddress, "open" );
	controlScript.mandatoryChange( txtSwiftAddress, 1 );

}
else
{
	controlScript.accessChange( txtIssueBankName, "readOnly" );
	controlScript.mandatoryChange( txtIssueBankName, 0 );
	controlScript.accessChange( txtSwiftAddress, "readOnly" );
	controlScript.mandatoryChange( txtSwiftAddress, 0 );
	
}

// ===== form1.BG.requirementsOfIssuingBank.requirements.drpEntity  ::  change =====
controlScript.getBranchName(xfa.event.change);
form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch.presence = "hidden";
form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch.rawValue = null;


if (xfa.event.change == "OTHERS")
{
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity.presence = "visible";
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity.rawValue = null;
	controlScript.accessChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity, "open" );
	controlScript.mandatoryChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity, 1 );
	controlScript.accessChange( form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry, "readOnly" );
	controlScript.mandatoryChange( form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry, 0 );
	controlScript.mandatoryChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch, 0 );
}
else 
{
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity.presence = "hidden";
	controlScript.accessChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity, "readOnly" );
	controlScript.mandatoryChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity, 0 );
	controlScript.accessChange( form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry, "open" );
	controlScript.mandatoryChange( form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry, 1 );
	
}

// ===== form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry  ::  change =====
if (xfa.event.change == "OTHERS")
{
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch.presence = "visible";
	controlScript.accessChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch, "open" );
	controlScript.mandatoryChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch, 1 );
}
else 
{
	form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch.presence = "hidden";
	controlScript.accessChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch, "readOnly" );
	controlScript.mandatoryChange( form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch, 0 );
}

// ===== form1.BG.requirementsOfIssuingBank.requirements.txtIssueBankName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.requirementsOfIssuingBank.requirements.txtSwiftAddress  ::  exit =====
if (this.rawValue.length != 8 && this.rawValue.length !=  11) {
	app.alert("Invalid SWIFT Address");
	this.rawValue = "";
	xfa.host.setFocus(this.somExpression);
}

// ===== form1.BG.requirementsOfIssuingBank.requirements.txtSwiftAddress  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.BG.requirementsOfIssuingBank.requirements.txtOthersEntity  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.requirementsOfIssuingBank.requirements.txtOthersBranch  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG  ::  change =====
if(this.rawValue == "4")
{
	controlScript.accessChange( txtAdviseBankName, "open" );
	controlScript.mandatoryChange( txtAdviseBankName, 1 );
	controlScript.accessChange( txtSwiftAddress, "open" );
	controlScript.mandatoryChange( txtSwiftAddress, 1 );

}
else
{
	controlScript.accessChange( txtAdviseBankName, "readOnly" );
	controlScript.mandatoryChange( txtAdviseBankName, 0 );
	controlScript.accessChange( txtSwiftAddress, "readOnly" );
	controlScript.mandatoryChange( txtSwiftAddress, 0 );
	
}

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG  ::  ready ($form) =====
if(this.rawValue == "4")
{
	controlScript.accessChange( txtAdviseBankName, "open" );
	controlScript.mandatoryChange( txtAdviseBankName, 1 );
	controlScript.accessChange( txtSwiftAddress, "open" );
	controlScript.mandatoryChange( txtSwiftAddress, 1 );

}
else
{
	controlScript.accessChange( txtAdviseBankName, "readOnly" );
	controlScript.mandatoryChange( txtAdviseBankName, 0 );
	controlScript.accessChange( txtSwiftAddress, "readOnly" );
	controlScript.mandatoryChange( txtSwiftAddress, 0 );
	
}

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionA.txtAdviseBankName  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionA.txtSwiftAddress  ::  exit =====
if (this.rawValue.length != 8 && this.rawValue.length !=  11) {
	app.alert("Invalid SWIFT Address");
	this.rawValue = "";
	xfa.host.setFocus(this.somExpression);
}

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionA.txtSwiftAddress  ::  change =====
controlScript.changeUpper();
controlScript.forceAlphaNumericOnly();

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG  ::  change =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtMrs, "open" );
	controlScript.mandatoryChange( txtMrs, 1 );
	controlScript.accessChange( drpPassport, "open" );
	controlScript.mandatoryChange( drpPassport, 1 );
	controlScript.accessChange( txtPassportNo, "open" );
	controlScript.mandatoryChange( txtPassportNo, 1 );
	controlScript.accessChange( txtAt, "open" );
	controlScript.mandatoryChange( txtAt, 1 );
	controlScript.accessChange( txtMobileNo, "open" );
	controlScript.mandatoryChange( txtMobileNo, 1 );

}
else
{
	controlScript.accessChange( txtMrs, "readOnly" );
	controlScript.mandatoryChange( txtMrs, 0 );
	controlScript.accessChange( drpPassport, "readOnly" );
	controlScript.mandatoryChange( drpPassport, 0 );
	controlScript.accessChange( txtPassportNo, "readOnly" );
	controlScript.mandatoryChange( txtPassportNo, 0 );
	controlScript.accessChange( txtAt, "readOnly" );
	controlScript.mandatoryChange( txtAt, 0 );
	controlScript.accessChange( txtMobileNo, "readOnly" );
	controlScript.mandatoryChange( txtMobileNo, 0 );
	
}

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG  ::  ready ($form) =====
if(this.rawValue == "1")
{
	controlScript.accessChange( txtMrs, "open" );
	controlScript.mandatoryChange( txtMrs, 1 );
	controlScript.accessChange( drpPassport, "open" );
	controlScript.mandatoryChange( drpPassport, 1 );
	controlScript.accessChange( txtPassportNo, "open" );
	controlScript.mandatoryChange( txtPassportNo, 1 );
	controlScript.accessChange( txtAt, "open" );
	controlScript.mandatoryChange( txtAt, 1 );
	controlScript.accessChange( txtMobileNo, "open" );
	controlScript.mandatoryChange( txtMobileNo, 1 );

}
else
{
	controlScript.accessChange( txtMrs, "readOnly" );
	controlScript.mandatoryChange( txtMrs, 0 );
	controlScript.accessChange( drpPassport, "readOnly" );
	controlScript.mandatoryChange( drpPassport, 0 );
	controlScript.accessChange( txtPassportNo, "readOnly" );
	controlScript.mandatoryChange( txtPassportNo, 0 );
	controlScript.accessChange( txtAt, "readOnly" );
	controlScript.mandatoryChange( txtAt, 0 );
	controlScript.accessChange( txtMobileNo, "readOnly" );
	controlScript.mandatoryChange( txtMobileNo, 0 );
	
}

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionB.txtMrs  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionB.txtPassportNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionB.txtAt  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.deliveryInstructions.subDeliveryIns.sectionB.txtMobileNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.guaranteesFormat.txtGuaranteesFormat  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.specialInstructions.txtSpecialInstructions  ::  change =====
controlScript.changeUpper();

// ===== form1.BG.allFees.subBGAcNo.txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.allFees.subHeader.txtAccNo  ::  change =====
controlScript.changeUpper();
controlScript.validateRegularExpChange(AlphaNumericSwift.value);

// ===== form1.BG.printAndBarcode.#subform[0].btnSave  ::  click =====
barcodeScript.BGbarcode();
app.execMenuItem("SaveAs");	

// ===== form1.BG.printAndBarcode.#subform[0].btnPrint  ::  click =====
form1.MainPage.subfrmMain.txtPrint.rawValue = 1;

//form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
//form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
//form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);

controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
barcodeScript.BGbarcode();
controlScript.selectMandaotoryField();

/*
if(form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo.rawValue == null)
{
	if(form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue == "SG" ||
		(form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue == "" || 
		form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue == null))
	{
		form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;
		if  (controlScript.setMandatoryBackColor() == 0)	
		{		
			form1.variables.checkSumValueBG.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueBG.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
		}
	else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
	}
	else
	{
		form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo.ui.oneOfChild.border.fill.color.value = controlScript.mandatoryColor;
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
	}
}
else
{
	if  (controlScript.setMandatoryBackColor() == 0)	
	{		
		form1.variables.checkSumValueBG.value = controlScript.checkSum();
		form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueBG.value;
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	}
	
	form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtRegistrationNo.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;	
	///xfa.host.messageBox("reg");
}
*/

if  (controlScript.setMandatoryBackColor() == 0)	
{		
			form1.variables.checkSumValueBG.value = controlScript.checkSum();
			form1.pageSet.Page1.txtCheckSum.rawValue = form1.variables.checkSumValueBG.value;
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
}
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();
//barcodeScript.BGbarcode();
controlScript.selectMandaotoryField();

form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_1  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode1.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_2  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode2.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_3  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode3.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_4  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode4.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_5  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode5.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_6  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode6.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_7  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode7.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_8  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode8.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_9  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode9.rawValue;
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

// ===== form1.BG.printAndBarcode.#subform[1].PaperFormsBarcodeBG_10  ::  calculate =====
//{{Start Generated Content//
var is705ViewerRequired = false;
//End Generated Content}}//

function createBarcodeContent()
{
    // TODO: Encode your barcode content here
    var barcodeContent = form1.BG.barcodeRecord.txtBarcode10.rawValue;
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

