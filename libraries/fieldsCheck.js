// Shared script object form1.variables.fieldsCheck (Designer: Hierarchy > Variables)
// Extracted verbatim from Trade-Smartform.pdf (XFA template). Language: JavaScript.

function checkBEMandatory()
{	

	var BenefName = EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtBeneficiaryName.rawValue;
	var beneAdd = EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtBeneficiaryAddress1.rawValue;
	var creCurrency = EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue;
	var creAmount = EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.rawValue;
	var issuBank = EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue;
	var docCredit = EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtCreditNo.rawValue;
	var docDate = EBLC.subfrmEBLC.subfrmRight.txtDated.rawValue;
	var contactName = EBLC.subfrmEBLC.subfrmContactPerson.txtName.rawValue;
	var telNo = EBLC.subfrmEBLC.subfrmContactPerson.txtTelNo.rawValue;
	var faxNo = EBLC.subfrmEBLC.subfrmContactPerson.txtFaxNo.rawValue;
	var draftNo = EBLC.subfrmEBLC.subfrmBankUse.txtDraftInvNo.rawValue;
	var validationMsg;
	
	if ((BenefName == null || BenefName == " ") || 
	(beneAdd == null || beneAdd == " ")||
	(creCurrency == null || creCurrency == " ")||
	(creAmount == null || creAmount == " ")||
	(issuBank == null || issuBank == " ")||
	(docCredit == null || docCredit == " ")||
	(docDate == null || docDate == " ")||
	(contactName == null || contactName == " ")||
	(telNo == null || telNo == " ")||
	(faxNo == null || faxNo == " ")||
	(draftNo == null || draftNo == " "))
	{
		validationMsg = "Mandatory fields that were not completed are as below:\n";
	
			if(BenefName == null || BenefName == " ")
			{
				validationMsg += "- Beneficiary Name\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			
			}
			if(beneAdd == null || beneAdd == " ")
			{
				validationMsg += "- Beneficiary Address\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(creCurrency == null || creCurrency == " ")
			{
				validationMsg += "- Credit Currency\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(creAmount == null || creAmount == " ")
			{
				validationMsg += "- Credit Amount\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(issuBank == null || issuBank == " ")
			{
				validationMsg += "- Issuing Bank Name\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(docCredit == null || docCredit == " ")
			{
				validationMsg += "- Documentary Credit No.\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(docDate == null || docDate == " ")
			{
				validationMsg += "- Documentary Date\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(contactName == null || contactName == " ")
			{
				validationMsg += "- Contact person's Name\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(telNo == null || telNo == " ")
			{
				validationMsg += "- Contact person's Telephone No.\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(faxNo == null || faxNo == " ")
			{
				validationMsg += "- Contact persons Fax No.\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(draftNo == null || draftNo == " ")
			{
				validationMsg += "- Draft/Invoice No.\n";
				EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			
			
	}else
	{				
		validationMsg = "";
		EBLC.subfrmEBLC2.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
	}
		
	
}

function checkLCMandatory()
{	

	var appName = LC.subfrmLC.subfrmApplicant.txtName.rawValue;
	var appAdd = LC.subfrmLC.subfrmApplicant.txtAddress1.rawValue;
	var appContactName = LC.subfrmLC.subfrmApplicant.txtContractName.rawValue;
	var appContactTel = LC.subfrmLC.subfrmApplicant.txtTel.rawValue;
	var appContactFax = LC.subfrmLC.subfrmApplicant.txtFax.rawValue;
	var creCurrency = LC.subfrmLC.subfrmCreditAmount.drpCurrency.rawValue;
	var creAmount = LC.subfrmLC.subfrmCreditAmount.txtAmount.rawValue;
	var benefName = LC.subfrmLC.subfrmBeneficiary.txtName.rawValue;
	var benefAdd = LC.subfrmLC.subfrmBeneficiary.txtAddress1.rawValue;
	var other = LC.subfrmLC.subfrmPriceBasis.txtOthers.rawValue;
	var dateExp = LC.subfrmLC.subfrmDateOfExpiry.txtDate.rawValue;
	var validationMsg;
	
	if ((appName == null || appName == " ") || 
	(appAdd == null || appAdd == " ")||
	(appContactName == null || appContactName == " ")||
	(appContactTel == null || appContactTel == " ")||
	//(appContactFax == null || appContactFax == " ")||
	(creCurrency == null || creCurrency == " ")||
	(creAmount == null || creAmount == " ")||
	(benefName == null || benefName == " ") || 
	(benefAdd == null || benefAdd == " ")||
	(dateExp == null || dateExp == " "))
	{
		validationMsg = "Mandatory fields that were not completed are as below:\n";

			if(appName == null || appName == " ")
			{
				validationMsg += "- Applicant Name\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			
			}
			if(appAdd == null || appAdd == " ")
			{
				validationMsg += "- Applicant Address\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(appContactName == null || appContactName == " ")
			{
				validationMsg += "- Contact Party Name\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(appContactTel == null || appContactTel == " ")
			{
				validationMsg += "- Contact Party Tel No.\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			/*if(appContactFax == null || appContactFax == " ")
			{
				validationMsg += "- Contact Party Fax No.\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}*/
			if(creCurrency == null || creCurrency == " ")
			{
				validationMsg += "- Credit Currency\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(creAmount == null || creAmount == " ")
			{
				validationMsg += "- Credit Amount\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(benefName == null || benefName == " ")
			{
				validationMsg += "- Beneficiary Name\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			
			}
			if(benefAdd == null || benefAdd == " ")
			{
				validationMsg += "- Beneficiary Address\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(LC.subfrmLC.subfrmPriceBasis.RadioButtonList.FOB.rawValue == null && 
			LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CFR.rawValue == null &&
			LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CIF.rawValue == null &&
			LC.subfrmLC.subfrmPriceBasis.RadioButtonList.LocalDelivery.rawValue == null &&
			LC.subfrmLC.subfrmPriceBasis.RadioButtonList.FCA.rawValue == null &&
			LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CIP.rawValue == null &&
			LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CPT.rawValue == null &&
			LC.subfrmLC.subfrmPriceBasis.RadioButtonList.Others.rawValue == null)
			{
				validationMsg += "- Price Basis\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(LC.subfrmLC.subfrmPriceBasis.RadioButtonList.Others.rawValue != null && (other == null || other == ""))
			{
				validationMsg += "- Price Basis: Others\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(LC.subfrmLC.subfrmPartialshipment.radPartialShipment.allowed.rawValue == null && 
			LC.subfrmLC.subfrmPartialshipment.radPartialShipment.notAllowed.rawValue == null)
			{
				validationMsg += "- Partial shipment\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(LC.subfrmLC.subfrmPartialshipment.radTranshipment.allowed.rawValue == null && 
			LC.subfrmLC.subfrmPartialshipment.radTranshipment.notAllowed.rawValue == null)
			{
				validationMsg += "- Transhipment\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(dateExp == null || dateExp == " ")
			{
				validationMsg += "- Date of expiry\n";
				LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
			}
			if(LC.subfrmLC.subfrmDrafts.sufrmDraft.chkDraft.rawValue != null && 
			LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.chkTerm.rawValue != null)
			{
				validationMsg += "- Draft for 100% invoice value\n";
				LC.subfrmMandatory.txtFieldsList.rawValue  = validationMsg;
			}
			if(LC.subfrmLC.subfrmDrafts.sufrmDraft.chkDraft.rawValue != null && 
			LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.chkTerm.rawValue != null &&
			LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm.rawValue == null)
			{
				validationMsg += "- Term:\n";
				LC.subfrmMandatory.txtFieldsList.rawValue  = validationMsg;
			}
			if(LC.subfrmLC.subfrmDrafts.sufrmDraft.chkDraft.rawValue == 1 && 
			LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.chkTerm.rawValue != null &&
			LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter.rawValue == null)
			{
				validationMsg += "- Term: Days after\n";
				LC.subfrmMandatory.txtFieldsList.rawValue  = validationMsg;
			}
			if(LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1 && 
			LC.subfrmLC.subfrmDrafts.radConsignee.MadeOutTo.rawValue == null &&
			LC.subfrmLC.subfrmDrafts.radConsignee.OrderOfBankBankLtd.rawValue == null &&
			LC.subfrmLC.subfrmDrafts.radConsignee.OrderBlankEndorse.rawValue == null)
			{
				validationMsg += "- Full set of Clean on Board marine bills of lading made out to:\n";
				LC.subfrmMandatory.txtFieldsList.rawValue  = validationMsg;
			}
			if(LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == 1 && 
			LC.subfrmLC.subfrmDrafts.radFreight.Prepaid.rawValue == null &&
			LC.subfrmLC.subfrmDrafts.radFreight.Collect.rawValue == null)
			{
				validationMsg += "- Full set of Clean on Board Prepaid or Collect\n";
				LC.subfrmMandatory.txtFieldsList.rawValue  = validationMsg;
			}
			if(LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == 1 && 
			LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Collect.rawValue == null &&
			LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Prepaid.rawValue == null)
			{
				validationMsg += "- Original Air Waybill Prepaid or Collect\n";
				LC.subfrmMandatory.txtFieldsList.rawValue  = validationMsg;
			}
			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkBeneficiaryCertificate.rawValue == 1 && 
			LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == 0 &&
			LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.rawValue == 0 &&
			LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.rawValue == 0)
			{
				validationMsg += "- Beneficiary's certificate stating 1 set of non-negotiable documents have been faxed/ mailed/ couriered.\n";
				LC.subfrmMandatory.txtFieldsList.rawValue  = validationMsg;
			}
			if(LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmIssuanceCharges.txtWithyou.rawValue == null || LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmIssuanceCharges.txtWithyou.rawValue == "")
			{
				validationMsg += "- Account No.\n";
				LC.subfrmMandatory.txtFieldsList.rawValue  = validationMsg;
			}
			
	}else
	{				
		validationMsg = "";
		LC.subfrmMandatory.txtFieldsList.rawValue = validationMsg;
	}
		
	
}


function checkOBCMandatory()
{	

	var sellName = OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName.rawValue;
	var sellAdd = OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress1.rawValue;
	var contactPerson = OBC.subfrmOBC.subfrmDrawer.txtContactPerson.rawValue;
	var contaactTel = OBC.subfrmOBC.subfrmDrawer.txtTel.rawValue;
	var buyer = OBC.subfrmOBC.subfrmDrawee.txtDrawee.rawValue;
	var drawName = OBC.subfrmOBC.subfrmDraweeBank.txtName.rawValue;
	var drawAdd = OBC.subfrmOBC.subfrmDraweeBank.txtAddress1.rawValue;
	var invoice = OBC.subfrmOBC.subfrmInvoice.txtInvoice.rawValue;
	var currency = OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue;
	var amount = OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.rawValue;
	var validationMsg;
	
	if ((sellName == null || sellName == " ") || 
	(sellAdd == null || sellAdd == " ")||
	(contactPerson == null || contactPerson == " ")||
	(contaactTel == null || contaactTel == " ")||
	(buyer == null || buyer == " ")||
	(drawName == null || drawName == " ")||
	(drawAdd == null || drawAdd == " ")||
	(invoice == null || invoice == " ")||
	(currency == null || currency == " ")||
	(amount == null || amount == " "))
	{
		validationMsg = "Mandatory fields that were not completed are as below:\n";
	
			if(sellName == null || sellName == " ")
			{
				validationMsg += "- Seller Name\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			
			}
			if(sellAdd == null || sellAdd == " ")
			{
				validationMsg += "- Seller Address\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(contactPerson == null || contactPerson == " ")
			{
				validationMsg += "- Contact Person Name\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(contaactTel == null || contaactTel == " ")
			{
				validationMsg += "- Contact Tel No.\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(buyer == null || buyer == " ")
			{
				validationMsg += "- Buyer Name\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(drawName == null || drawName == " ")
			{
				validationMsg += "- Drawer Name\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(drawAdd == null || drawAdd == " ")
			{
				validationMsg += "- Drawer Address\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(invoice == null || invoice == " ")
			{
				validationMsg += "- Invoice No.\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(currency == null || currency == " ")
			{
				validationMsg += "- Currency\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(amount == null || amount == " ")
			{
				validationMsg += "- Amount\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(OBC.subfrmOBC.subfrmInterestDrawee.chkInterestDrawee.rawValue == 1 &&
			 OBC.subfrmOBC.subfrmInterestDrawee.txtAt.rawValue == null ||
			 OBC.subfrmOBC.subfrmInterestDrawee.txtAt.rawValue == " ")
			{
				validationMsg += "- Collect interest percent\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(OBC.subfrmOBC.subfrmInterestDrawee.chkInterestDrawee.rawValue == 1 &&
			 OBC.subfrmOBC.subfrmInterestDrawee.txtFrom.rawValue == null ||
			 OBC.subfrmOBC.subfrmInterestDrawee.txtFrom.rawValue == " ")
			{
				validationMsg += "- Collect interest from\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			if(OBC.subfrmOBC.subfrmTenor.radTenor.Term.rawValue == "Term" &&
			 OBC.subfrmOBC.subfrmTenor.txtTerm.rawValue == null &&
			 OBC.subfrmOBC.subfrmTenor.txtDaysAfter.rawValue == null)
			{
				validationMsg += "- Term:\n";
				OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
			}
			
	}else
	{				
		validationMsg = "";
		OBC.subfrmOBC.subfrmOthers.txtFieldsList.rawValue = validationMsg;
	}
		
	
}


function checkBEEBLCMandatory()
{	
	BEEBLC.subfieldsCheck.presence = "visible";
	var No = BEEBLC.subfrmFirst.txtNo.rawValue;
	var drpFor = BEEBLC.subfrmFirst.drpCurrency.rawValue;
	var txtFor = BEEBLC.subfrmFirst.txtExchange.rawValue;
	var valueReceived = BEEBLC.subfrmFirst.txtValue1.rawValue;
	var creditNo = BEEBLC.subfrmFirst.txtDocumentary.rawValue;
	var To = BEEBLC.subfrmFirst.txtTo1.rawValue;
	var firstBehalf = BEEBLC.subfrmFirst.txtFor1.rawValue;
	var secondBehalf = BEEBLC.subfrmFirst.txtFor2.rawValue;
	var validationMsg;
	
	if ((No == null || No == " ") || 
	(drpFor == null || drpFor == " ")||
	(txtFor == null || txtFor == " ")||
	(valueReceived == null || valueReceived == " ")||
	(creditNo == null || creditNo == " ")||
	(To == null || To == " ")||
	(firstBehalf == null || firstBehalf == " ")||
	(secondBehalf == null || secondBehalf == " "))
	{
		validationMsg = "Mandatory fields that were not completed are as below:\n";
	
			if(No == null || No == " ")
			{
				validationMsg += "- No.\n";
				BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			
			}
			if(drpFor == null || drpFor == " ")
			{
				validationMsg += "- For Currency\n";
				BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(txtFor == null || txtFor == " ")
			{
				validationMsg += "- For Amount\n";
				BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(valueReceived == null || valueReceived == " ")
			{
				validationMsg += "- Value received\n";
				BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(creditNo == null || creditNo == " ")
			{
				validationMsg += "- Credit No.\n";
				BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(To == null || To == " ")
			{
				validationMsg += "- To\n";
				BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(firstBehalf == null || firstBehalf == " ")
			{
				validationMsg += "- On Behalf of\n";
				BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(secondBehalf == null || secondBehalf == " ")
			{
				validationMsg += "- Indorsement On Behalf of\n";
				BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			
			
	}else
	{				
		validationMsg = "";
		BEEBLC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
	}
		
	
}


function checkBEOBCMandatory()
{	

	var No = BEOBC.subfrmFirst.txtNo.rawValue;
	var drpFor = BEOBC.subfrmFirst.drpCurrency.rawValue;
	var txtFor = BEOBC.subfrmFirst.txtExchange.rawValue;
	var To = BEOBC.subfrmFirst.txtTo1.rawValue;
	var firstBehalf = BEOBC.subfrmFirst.txtFor1.rawValue;
	var secondBehalf = BEOBC.subfrmFirst.txtFor2.rawValue;
	var validationMsg;
	
	if ((No == null || No == " ") || 
	(drpFor == null || drpFor == " ")||
	(txtFor == null || txtFor == " ")||
	(To == null || To == " ")||
	(firstBehalf == null || firstBehalf == " ")||
	(secondBehalf == null || secondBehalf == " "))
	{
		validationMsg = "Mandatory fields that were not completed are as below:\n";
	
			if(No == null || No == " ")
			{
				validationMsg += "- No.\n";
				BEOBC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			
			}
			if(drpFor == null || drpFor == " ")
			{
				validationMsg += "- For Currency\n";
				BEOBC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(txtFor == null || txtFor == " ")
			{
				validationMsg += "- For Amount\n";
				BEOBC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(To == null || To == " ")
			{
				validationMsg += "- To\n";
				BEOBC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(firstBehalf == null || firstBehalf == " ")
			{
				validationMsg += "- On Behalf of\n";
				BEOBC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(secondBehalf == null || secondBehalf == " ")
			{
				validationMsg += "- Indorsement On Behalf of\n";
				BEOBC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			
			
	}else
	{				
		validationMsg = "";
		BEOBC.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
	}	
	
}


function checkBEGenericMandatory()
{	
	
	var No = BEGeneric.subfrmFirst.txtNo.rawValue;
	var drpFor = BEGeneric.subfrmFirst.drpCurrency.rawValue;
	var txtFor = BEGeneric.subfrmFirst.txtExchange.rawValue;
	var valueReceived = BEGeneric.subfrmFirst.txtValue1.rawValue;
	var creditNo = BEGeneric.subfrmFirst.txtDocumentary.rawValue;
	var date = BEGeneric.subfrmFirst.txtDated.rawValue;
	var To = BEGeneric.subfrmFirst.txtTo1.rawValue;
	var firstBehalf = BEGeneric.subfrmFirst.txtFor1.rawValue;
	var secondBehalf = BEGeneric.subfrmFirst.txtFor2.rawValue;
	var validationMsg;
	
	if ((No == null || No == " ") || 
	(drpFor == null || drpFor == " ")||
	(txtFor == null || txtFor == " ")||
	(valueReceived == null || valueReceived == " ")||
	(creditNo == null || creditNo == " ")||
	(date == null || date == " ")||
	(To == null || To == " ")||
	(firstBehalf == null || firstBehalf == " ")||
	(secondBehalf == null || secondBehalf == " "))
	{
		validationMsg = "Mandatory fields that were not completed are as below:\n";
	
			if(No == null || No == " ")
			{
				validationMsg += "- No.\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			
			}
			if(drpFor == null || drpFor == " ")
			{
				validationMsg += "- For Currency\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(txtFor == null || txtFor == " ")
			{
				validationMsg += "- For Amount\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(valueReceived == null || valueReceived == " ")
			{
				validationMsg += "- Value received\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(creditNo == null || creditNo == " ")
			{
				validationMsg += "- Credit No.\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(date == null || date == " ")
			{
				validationMsg += "- Dated\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(To == null || To == " ")
			{
				validationMsg += "- To\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(firstBehalf == null || firstBehalf == " ")
			{
				validationMsg += "- On Behalf of\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			if(secondBehalf == null || secondBehalf == " ")
			{
				validationMsg += "- Indorsement On Behalf of\n";
				BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
			}
			
			
	}else
	{				
		validationMsg = "";
		BEGeneric.subfieldsCheck.txtFieldsList.rawValue = validationMsg;
	}
		
	
}

