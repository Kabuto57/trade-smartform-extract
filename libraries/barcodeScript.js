// Shared script object form1.variables.barcodeScript (Designer: Hierarchy > Variables)
// Extracted verbatim from Trade-Smartform.pdf (XFA template). Language: JavaScript.


function GetBarData(varData, varPipe)
{
	var strReturn = "";
	
	if(varData == null || varData == "")
		strReturn = "";
	else
		strReturn = varData;
	
	if(varPipe == true)
		strReturn = strReturn + "|";
	
	return strReturn;
}

function GetPriceBasis()
{
	var strData = form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.FOB.rawValue;
	if(strData == null)
    {
    	strData = form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CFR.rawValue;
    	if(strData == null)
    	{
    		strData = form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CIF.rawValue;
    		if(strData == null)
    		{
    			strData = form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.LocalDelivery.rawValue;
    			if(strData == null)
    			{
					strData = form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.FCA.rawValue;
    				if(strData == null)
					{
						strData = form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CIP.rawValue;
						if(strData == null)
						{
							strData = form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CPT.rawValue;
							if(strData == null)
							{
								strData = form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.Others.rawValue;
								if(strData == null)
								{
									strData = "";
								}
								else
									strData = "O";	
							}
							else
								strData = "F";
						}
						else
							strData = "G";
					}
    				else
						strData = "D";
    			}
    			else
    				strData = "O";
    		}
    		else
    			strData = "A";
    	}
    	else
    		strData = "B";
    }
    else
    	strData = "C";
    
    return strData;
}
function GetShipmentFrom()
{
	var strData = form1.LC.subfrmLC.subfrmShipmentFrom.drpPortOfLoading.rawValue;
	if(strData != null)
	{
		strData = strData.toUpperCase();
		if(strData == "PORT OF LOADING / AIRPORT OF DEPARTURE")
			strData = "44E";
		else
		{
			if(strData == "DISPATCH FROM")
				strData = "44A";
			else
			{
				if(strData == "PLACE OF TAKING IN CHARGE")
					strData = "44A";
				else
				{
					if(strData == "PLACE OF RECEIPT")
						strData = "44A";
					else
					{
						strData = null;
					}
				}
			}
		}
	}
	
	return strData;
}

function GetShipmentTo()
{
	var strData = form1.LC.subfrmLC.subfrmShipmentTo.drpPortOfDischarge.rawValue;
	if(strData != null)
	{
		strData = strData.toUpperCase();
		if(strData == "PORT OF DISCHARGE / AIRPORT OF DESTINATION")
			strData = "44F";
		else
		{
			if(strData == "FOR TRANSPORTATION TO")
				strData = "44B";
			else
			{
				if(strData == "PLACE OF FINAL DESTINATION")
					strData = "44B";
				else
				{
					if(strData == "PLACE OF DELIVERY")
						strData = "44B";
					else
					{
						strData = null;
					}
				}
			}
		}
	}
	
	return strData;
}

function GetShipmentTextData(strData1, strData2)
{
	var strReturn = "";
	
	if(strData1 != null && strData2 != null)
		strReturn = strData1 + " " + strData2;
	else if(strData1 !=null && strData2 == null)
		strReturn = strData1;
	else if(strData1 ==null && strData2 != null)
		strReturn = strData2;
	else
		strReturn = null;
		
	return strReturn;
}

function GetModeOfAdvising()
{
	var strData = "";
	strData = form1.LC.subfrmLC.subfrmModeOfAdvising.RadioButtonList.FullTelexSwift.rawValue;
	if(strData != null)
	{
		if(strData.toUpperCase() == "FULL SWIFT")
			strData= "S";
		else
			strData= null;
	}
	else
	{
		strData = form1.LC.subfrmLC.subfrmModeOfAdvising.RadioButtonList.RegisteredAirmail.rawValue;
		if(strData != null)
		{
			if(strData.toUpperCase() == "REGISTERED AIRMAIL")
				strData = "A";
			else
				strData = null;
		}
		else
		{
			strData = form1.LC.subfrmLC.subfrmModeOfAdvising.RadioButtonList.AirmailWithBriefTelexSwift.rawValue;
			if(strData != null)
			{
				if(strData.toUpperCase() == "AIRMAIL WITH BRIEF SWIFT")
					strData = "S";
				else
					strData = null;
			}
			else
			{
				strData = form1.LC.subfrmLC.subfrmModeOfAdvising.RadioButtonList.CourierService.rawValue;
				if(strData != null)
				{
					if(strData.toUpperCase() == "COURIER SERVICE")
						strData = "U";
					else
						strData = null;
				}
				else
				{
					strData = form1.LC.subfrmLC.subfrmModeOfAdvising.RadioButtonList.CourierServiceWithBriefTelexSwift.rawValue;
					if(strData != null)
					{
						if(strData.toUpperCase() == "COURIER SERVICE WITH BRIEF SWIFT" )
							strData = "S";
						else
							strData = null;
					}
				}
			}
		}
	}
	return strData;
}

function cleanUpLC(){
	form1.LC.subfrmLC.subfrmCreditAmount.txtPlusValue.rawValue = form1.LC.subfrmLC.subfrmCreditAmount.txtPlusValue.access == "readOnly"? null:form1.LC.subfrmLC.subfrmCreditAmount.txtPlusValue.rawValue;
	form1.LC.subfrmLC.subfrmCreditAmount.txtMinusValue.rawValue = form1.LC.subfrmLC.subfrmCreditAmount.txtMinusValue.access == "readOnly"? null:form1.LC.subfrmLC.subfrmCreditAmount.txtMinusValue.rawValue;
	form1.LC.subfrmLC.subfrmPriceBasis.txtOthers.rawValue = form1.LC.subfrmLC.subfrmPriceBasis.txtOthers.access == "readOnly"? null:form1.LC.subfrmLC.subfrmPriceBasis.txtOthers.rawValue;
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt1.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt2.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge1.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge2.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.txtDispatchfrom1.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.txtDispatchfrom1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.txtDispatchfrom2.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.txtDispatchfrom2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.txtLoading1.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.txtLoading1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.txtLoading2.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.txtLoading2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture.txtDeparture1.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture.txtDeparture1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture.txtDeparture2.rawValue = form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture.txtDeparture2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.txtForTransportationTo1.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.txtForTransportationTo1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.txtForTransportationTo2.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.txtForTransportationTo2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination.txtDestination1.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination.txtDestination1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination.txtDestination2.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination.txtDestination2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination1.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination2.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery1.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery2.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery2.rawValue;
	
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.txtDischarge1.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.txtDischarge1.rawValue;
	form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.txtDischarge2.rawValue = form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.presence == "hidden"?null:form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.txtDischarge2.rawValue;
	
	form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm.rawValue = form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm.access == "readOnly"? null:form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm.rawValue;
	form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter.rawValue = form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter.access == "readOnly"? null:form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter.rawValue;
	form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDate.rawValue = form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDate.access == "readOnly"? null:form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDate.rawValue;
	form1.LC.subfrmLC.subfrmDrafts.txtFullSet.rawValue = form1.LC.subfrmLC.subfrmDrafts.txtFullSet.access == "readOnly"? null:form1.LC.subfrmLC.subfrmDrafts.txtFullSet.rawValue;
	form1.LC.subfrmLC.subfrmDrafts.txtNotifyParty.rawValue = form1.LC.subfrmLC.subfrmDrafts.txtNotifyParty.access == "readOnly"? null:form1.LC.subfrmLC.subfrmDrafts.txtNotifyParty.rawValue;
	form1.LC.subfrmLC.subfrmOriginalAirWaybill.txtNotifyParty.rawValue = form1.LC.subfrmLC.subfrmOriginalAirWaybill.txtNotifyParty.access == "readOnly"? null:form1.LC.subfrmLC.subfrmOriginalAirWaybill.txtNotifyParty.rawValue;
	form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtOriginals.rawValue = form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtOriginals.access == "readOnly"? null:form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtOriginals.rawValue;
	form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtCopies.rawValue = form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtCopies.access == "readOnly"? null:form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtCopies.rawValue;
	form1.LC.subfrmLC.subfrmTransportDocumentsByDO.drpCountersignedBy.rawValue = form1.LC.subfrmLC.subfrmTransportDocumentsByDO.drpCountersignedBy.access == "readOnly"? null:form1.LC.subfrmLC.subfrmTransportDocumentsByDO.drpCountersignedBy.rawValue;
	form1.LC.subfrmLC.subfrmTransportDocumentsByDO.drpWhoseSignature.rawValue = form1.LC.subfrmLC.subfrmTransportDocumentsByDO.drpWhoseSignature.access == "readOnly"? null:form1.LC.subfrmLC.subfrmTransportDocumentsByDO.drpWhoseSignature.rawValue;
	form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue = form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.access == "readOnly"? null:form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedOriginals.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedOriginals.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedOriginals.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedCopies.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedCopies.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtSignedCopies.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListOriginals.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListOriginals.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListOriginals.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListCopies.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListCopies.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtPackingListCopies.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteOriginals.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteOriginals.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteOriginals.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteCopies.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteCopies.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteCopies.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginInOriginals.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginInOriginals.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginInOriginals.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCopies.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCopies.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCopies.rawValue;
	form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCountry.rawValue = form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCountry.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCountry.rawValue;
	form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc.rawValue = form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc.rawValue;
	form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc1.rawValue = form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc1.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc1.rawValue;
	form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmIssuanceCharges.txtWithyou.rawValue = form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmIssuanceCharges.txtWithyou.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmIssuanceCharges.txtWithyou.rawValue;
	form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtForgeign.rawValue = form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtForgeign.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtForgeign.rawValue;
	form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtApplyForward.rawValue = form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtApplyForward.access == "readOnly"? null:form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.txtApplyForward.rawValue;
	//form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.rawValue = form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.presence== "hidden"?null:form1.LC.subfrmLC.subfrmInsurance.drpForFOBCFR.rawValue;
	form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.rawValue = form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.presence=="hidden"?null:form1.LC.subfrmLC.subfrmInsurance.subfrmCoverNo.txtCoverNo.rawValue;
	//form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue = form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.access == "readOnly"? null:form1.LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue;	
}

function LCbarcode()
{
	cleanUpLC();
	// ---------------------------
	// Nov 15, 2015.
	var strBarData = "";
	var strTemp = "";
	
	strBarData = "1"+'|'; //1_01

	// CIF No = 1_02
	strTemp = form1.MainPage.subfrmMain.txtLCCif.rawValue;
	if (strTemp == null)
	strBarData = strBarData +'0000000|';
	else
	strBarData = strBarData + GetBarData(strTemp,true);
	
	// Beneficiary Name = 1_03
	strTemp = "";
	strTemp = form1.LC.subfrmLC.subfrmApplicant.txtName.rawValue;
	strBarData = strBarData + GetBarData(strTemp,true); 
	
	// Beneficiary Name = 1_04
	strTemp = "";
	strTemp = form1.LC.subfrmLC.subfrmBeneficiary.txtName.rawValue;
	strBarData = strBarData + GetBarData(strTemp,true);  

	
    // Beneficiary Address (1,2,3) = 1_05
   // strTemp = "";
    if(form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1.rawValue != null)
    	strTemp = "["+ form1.LC.subfrmLC.subfrmBeneficiary.txtAddress1.rawValue +"]";
    	
    if(form1.LC.subfrmLC.subfrmBeneficiary.txtAddress2.rawValue != null)
    	strTemp = strTemp + "[" + form1.LC.subfrmLC.subfrmBeneficiary.txtAddress2.rawValue+"]";
    
    if(form1.LC.subfrmLC.subfrmBeneficiary.txtAddress3.rawValue != null)
    	strTemp = strTemp + "[" + form1.LC.subfrmLC.subfrmBeneficiary.txtAddress3.rawValue+"]";   
    
    strBarData = strBarData + GetBarData(strTemp,true);
        
    // Partial Shipment (3 digit) = 1_06
   // strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment.allowed.rawValue;
    if(strTemp != null)
	    strTemp = "L5Y";
    else
    {
    	strTemp = form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment.notAllowed.rawValue;
    	if(strTemp != null)
    		strTemp = "L5N";
    }
        	 
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // Transhipment (3 digit) = 1_07
    strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment.allowed.rawValue;
    if(strTemp != null)
    	strTemp = "L6Y";
    else
    {
    	strTemp = form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment.notAllowed.rawValue;
    	if(strTemp != null)
    		strTemp = "L6N";
    }
    strBarData = strBarData + GetBarData(strTemp,true);
       
    // Credit Currency (3 digit) = 1_08
   // strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmCreditAmount.drpCurrency.rawValue;
    strBarData = strBarData + GetBarData(strTemp,true);

    // Credit Amount (12 digits before decimal, includes 3 comm)) = 1_09
    strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmCreditAmount.txtAmount.rawValue;
    if (strTemp == null)
	strBarData =strBarData +  '0|';
	else
    strBarData = strBarData + GetBarData(strTemp,true);

    // For Local LC (3 digit) = 1_10
    strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmCreditAmount.radGST.InclusiveofGST.rawValue;  
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // + value (Integer within 0 to 99) = 1_11
    strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmCreditAmount.txtPlusValue.rawValue;  
    if (strTemp == null)
	strBarData = strBarData + '0|';
	else
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // - value (Integer within 0 to 99) = 1_12
    strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmCreditAmount.txtMinusValue.rawValue;	
    if (strTemp == null)
	strBarData = strBarData +  '0|';
	else
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Prie Basis (1 char) = 1_13
    strTemp = "";
    strTemp = GetPriceBasis();
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Price Basis: Others  = 1_14
    strTemp = "";
	if(LC.subfrmLC.subfrmPriceBasis.RadioButtonList.Others.rawValue == null)
		form1.LC.subfrmLC.subfrmPriceBasis.txtOthers.rawValue = null;
    
    strTemp = form1.LC.subfrmLC.subfrmPriceBasis.txtOthers.rawValue;
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Select values for Shipment From  = 1_15
    strTemp = "";
    strTemp = GetShipmentFrom();
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // Port of Loading text 1 + text 2 = 1_16
    strTemp = "";
    strTemp = GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.txtLoading1.rawValue, form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad.txtLoading2.rawValue);
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Dispatch Form text 1 + text 2 = 1_17
    strTemp = "";
    strTemp = GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.txtDispatchfrom1.rawValue,form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom.txtDispatchfrom2.rawValue);
    strTemp = strTemp != null? strTemp:GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge1.rawValue,form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge2.rawValue);
    strTemp = strTemp != null? strTemp:GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt1.rawValue,form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt2.rawValue);
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Place of Tracking text 1 + text 2 = 1_18
    strTemp = "";
    //strTemp = GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge1.rawValue,form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge.txtPlaceOfTakingInCharge2.rawValue);
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Place of Receipt text 1 + text 2 = 1_19
    strTemp = "";
    //strTemp = GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt1.rawValue,form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt.txtPlaceOfReceipt2.rawValue);
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Select values for Shipment To  = 1_20
    strTemp = "";
    strTemp = GetShipmentTo();
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Port of Discharge text 1 + text 2 = 1_21
    strTemp = "";
    strTemp = GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.txtDischarge1.rawValue,form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge.txtDischarge2.rawValue);
    strBarData = strBarData + GetBarData(strTemp,true);
    
     // Transportation to text 1 + text 2 = 1_22
    strTemp = "";
    strTemp = GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.txtForTransportationTo1.rawValue,form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo.txtForTransportationTo2.rawValue);
    strTemp = strTemp != null? strTemp:GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination1.rawValue,form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination2.rawValue);
    strTemp = strTemp != null? strTemp:GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery1.rawValue,form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery2.rawValue);
    strBarData = strBarData + GetBarData(strTemp,true);
    
     // Place of Final Destination text 1 + text 2 = 1_23
    strTemp = "";
    //strTemp = GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination1.rawValue,form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination.txtPlaceOfFinalDestination2.rawValue);
    strBarData = strBarData + GetBarData(strTemp,true);
    
     // Place of Delivery text 1 + text 2 = 1_24
    strTemp = "";
    //strTemp = GetShipmentTextData(form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery1.rawValue,form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery.txtPlaceOfDelivery2.rawValue);
    strBarData = strBarData + GetBarData(strTemp,true);
    
    
    // Latest shipment date (ddmmyyyy) = 1_25
    strTemp = "";
    if(form1.LC.subfrmLC.subfrmShipmentDate.txtDate.rawValue != null)
    	strTemp = controlScript.dateFormatChangeMainPage(form1.LC.subfrmLC.subfrmShipmentDate.txtDate);
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // Date of Expiry Beneficiary (ddmmyyyy) = 1_26
    strTemp = "";
    if(form1.LC.subfrmLC.subfrmDateOfExpiry.txtDate.rawValue != null)
    	strTemp = controlScript.dateFormatChangeMainPage(form1.LC.subfrmLC.subfrmDateOfExpiry.txtDate);
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // Presentation period = 1_27
    strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmPresentation.txtPeriod.rawValue;
    if (strTemp == null)
	strBarData = strBarData +  '0|';
	else
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // DC available (NULL) = 1_28
    strTemp = "";
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // By sign payment (NULL) = 1_29
    strTemp = "";
    strBarData = strBarData + GetBarData(strTemp,true);
	
	// Draft not ... (NULL) = 1_30
    strTemp = "";
    strBarData = strBarData + GetBarData(strTemp,true);
    
   	// Sight or Term = 1_31
    strTemp = "";
    strTemp = form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.rawValue;
    if(strTemp == "Sight")
    	strTemp = "Y";
    else if(strTemp == "Term")
    	strTemp = "N";
    else if(strTemp == "Date")
    	strTemp = "N";
    
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // term days = 1_32
    strTemp = "";
    if(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.chkTerm.rawValue == null)
		form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm.rawValue = null;
		
    strTemp = form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm.rawValue==null?'0':form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtTerm.rawValue;
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // term days after = 1_33
    strTemp = "";
    if(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.radDrafts.chkTerm.rawValue == null)
		form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter.rawValue = null;
    strTemp = form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDaysAfter.rawValue;
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // Mode of Advising = 1_34
    strTemp = "";
    strTemp = GetModeOfAdvising();
    strBarData = strBarData + GetBarData(strTemp,true);
   
    // (NULL) = 1_35
    strTemp = "";
    strBarData = strBarData + GetBarData(strTemp,true);
    
    // Date Draft (ddmmyyyy) = 1_36
    strTemp = "";
    if(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDate.rawValue != null)
    	strTemp = controlScript.dateFormatChangeMainPage(form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.txtDate);
    strBarData = strBarData + GetBarData(strTemp,true);
    
    form1.LC.subfrmBarcodeRecord.txtBarcode1.rawValue =	 strBarData;
    //xfa.host.messageBox(strBarData);
    
    ///////////////////barcode 2////////////////////////////////////

	var strApplicantAdd ="";
	if(form1.LC.subfrmLC.subfrmApplicant.txtAddress1.rawValue != null)	
		strApplicantAdd = "["+ form1.LC.subfrmLC.subfrmApplicant.txtAddress1.rawValue + "]";
		
	if(form1.LC.subfrmLC.subfrmApplicant.txtAddress2.rawValue != null)
		strApplicantAdd = strApplicantAdd +  "["+ form1.LC.subfrmLC.subfrmApplicant.txtAddress2.rawValue + "]";
	
	if(form1.LC.subfrmLC.subfrmApplicant.txtAddress3.rawValue != null)
		strApplicantAdd = strApplicantAdd + "["+ form1.LC.subfrmLC.subfrmApplicant.txtAddress3.rawValue+"]";
		
	if (strApplicantAdd == "")
		strApplicantAdd = null;   
	
	var strPartyAdd ="";
	if(form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress1.rawValue != null)	
		strPartyAdd = "["+ form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress1.rawValue + "]";
		
	if(form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress2.rawValue != null)
		strPartyAdd = strPartyAdd + "["+ form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress2.rawValue + "]";
	
	if(form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress3.rawValue != null)
		strPartyAdd = strPartyAdd + "["+ form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtAddress3.rawValue+"]";
		
	if (strPartyAdd == "")
		strPartyAdd = null;   
	
	var strAdviseAdd="";
	if(form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress1.rawValue != null)	
		strAdviseAdd= "["+form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress1.rawValue + "]";
		
	if(form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress2.rawValue != null)
		strAdviseAdd= strAdviseAdd + "["+ form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress2.rawValue + "]";
	
	if(form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress3.rawValue != null)
		strAdviseAdd= strAdviseAdd + "["+ form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtAddress3.rawValue+"]";
		
	if (strAdviseAdd == "")
		strAdviseAdd = null;
	
	var strFullSet =null;
    if(LC.subfrmLC.subfrmDrafts.chkFullSet.rawValue == "1")
    {
	    	strFullSet = "+ FULL SET OF CLEAN ON BOARD MARINE BILLS OF LADING MADE OUT TO ORDER";
	    	
	    if(LC.subfrmLC.subfrmDrafts.radConsignee.rawValue == "1")
	    	strFullSet = strFullSet +  " OF THE BANK LIMITED, NOTIFYING ";
	    if(LC.subfrmLC.subfrmDrafts.radConsignee.rawValue == "2")
	    	strFullSet = strFullSet +  ", BLANK ENDORSED, NOTIFYING ";
	    if(LC.subfrmLC.subfrmDrafts.radConsignee.rawValue == "3")
	    	strFullSet = strFullSet + " OF " + LC.subfrmLC.subfrmDrafts.txtFullSet.rawValue + ", NOTIFYING ";
	    
	    
	    if(LC.subfrmLC.subfrmDrafts.txtNotifyParty.rawValue == null)
	    	strFullSet = strFullSet + LC.subfrmLC.subfrmApplicant.txtName + " MARKED \'FREIGHT ";
	    else
	    	strFullSet = strFullSet + LC.subfrmLC.subfrmDrafts.txtNotifyParty.rawValue + " MARKED \'FREIGHT ";
	    	
	    if(LC.subfrmLC.subfrmDrafts.radFreight.rawValue == "Prepaid")
	    	strFullSet = strFullSet +  "PREPAID\'.";
	    else if (LC.subfrmLC.subfrmDrafts.radFreight.rawValue == "Collect")
	    	strFullSet = strFullSet +  "COLLECT\'.";
	}
	
	if (strFullSet != null)
    {
	    var strFullSet1 = controlScript.strChop(strFullSet);
    }else
    	strFullSet1 = "|";
/////////////////////////////
	var strOAW =null;
    if(LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.rawValue == "1")
    {
	    	strOAW = "+ ORIGINAL CLEAN AIR WAYBILL CONSIGNED TO THE BANK LIMITED, MARKED \'FREIGHT ";
	    	
	    if(LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue == "Prepaid")
	    	strOAW = strOAW +  "PREPAID\' NOTIFYING ";
	    else if (LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.rawValue == "Collect")
	    	strOAW = strOAW +  "COLLECT\' NOTIFYING ";
	    
	    if(LC.subfrmLC.subfrmOriginalAirWaybill.txtNotifyParty.rawValue == null)
	    	strOAW = strOAW + strApplicantAdd + ".";
	    	//strOAW = strOAW + strApplicantAdd + " INDICATING THIS CREDIT  NUMBER.";
	    else
	    	strOAW = strOAW + LC.subfrmLC.subfrmOriginalAirWaybill.txtNotifyParty.rawValue + ".";
	    	//strOAW = strOAW + LC.subfrmLC.subfrmOriginalAirWaybill.txtNotifyParty.rawValue + " INDICATING THIS CREDIT  NUMBER.";
	}
	if (strOAW != null)
    {
	    var strOAW1 = controlScript.strChop(strOAW);
    }else
    	strOAW1 = "|";
//////////////////////////////
	var strConfirm;
    if( form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.chkConfirmation.rawValue == "1")
    	strConfirm= "L9Y";
    else
    	strConfirm= "L9N";
	
    
	var temp2 = '';
	var barcodeString2 = '';
	
	var barcodeString2 = '2'+'|';//2_01
	
	temp2 = strApplicantAdd;	//2_02
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|';   
	
    temp2 = form1.LC.subfrmLC.subfrm3PartyBeneficiary.txtName.rawValue;	//2_03
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|';
	
	temp2 = strPartyAdd;	//2_04
 	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|';
    
    temp2 = form1.LC.subfrmLC.subfrmForBankUse.subfrmAdvisingBank.txtName.rawValue;	//2_05
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|';
	
	temp2 = strAdviseAdd;	//2_06
 	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|';
 	
 	temp2 = strFullSet1;	//2_07
 	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2);
 	
 	temp2 = strOAW1;	//2_08
 	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2);
 	
 	/*temp2 = form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtOriginals.rawValue;	//2_08
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';
	
	temp2 = form1.LC.subfrmLC.subfrmTransportDocumentsByDO.txtCopies.rawValue;	//2_09
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';*/
	
	barcodeString2 = barcodeString2 + '|';	//2_9	(only for HK)
	barcodeString2 = barcodeString2 + '|';	//2_10	(only for HK)
	barcodeString2 = barcodeString2 + '|';	//2_11	(only for HK)
		
	
	temp2 = strConfirm;	//2_12
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 

	temp2 = form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.radChargeAccount.rawValue;	//2_13
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|';

	temp2 = form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList.rawValue;	//2_14
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|';
 	
 	form1.LC.subfrmBarcodeRecord.txtBarcode2.rawValue =	 barcodeString2;
 //	
//		var a2 = form1.LC.subfrmBarcodeRecord.txtBarcode2.rawValue;
//		xfa.host.messageBox("barcode 2="+ a2, "T");

	///////////////////barcode 3////////////////////////////////////
	
	var strDelivery =null;
    if(LC.subfrmLC.subfrmTransportDocumentsByDO.chkDeliveryOrderIn.rawValue == "1")
    {
	    	strDelivery = "+ DELIVERY ORDER IN " + LC.subfrmLC.subfrmTransportDocumentsByDO.txtOriginals.rawValue + " ORIGINALS " + LC.subfrmLC.subfrmTransportDocumentsByDO.txtCopies.rawValue 
	    	+ " COPIES SIGNED BY BENEFICIARY MADE OUT TO APPLICANT AND COUNTERSIGNED BY " + LC.subfrmLC.subfrmTransportDocumentsByDO.drpCountersignedBy.rawValue 
	    	+ " OF OUR SIGNATORIES, WHOSE SIGNATURE(S) " + LC.subfrmLC.subfrmTransportDocumentsByDO.drpWhoseSignature.rawValue + " BE VERIFIED BY THE BANK LIMITED." ;
	    	
	}		
	if (strDelivery != null)
    {
	    var strDelivery1 = controlScript.strChop(strDelivery);
	}else
		strDelivery1 = "|";
	
////////////////////////////
	var strInsPol =null;
    if(LC.subfrmLC.subfrmInsurance.chkInsurance.rawValue == "1")
    {
	    	strInsPol = "+ INSURANCE POLICY/CERTIFICATE IN DUPLICATE SHOWING BENEFICIARY AS ASSURED, BLANK ENDORSED FOR 110 PERCENT OF INVOICE VALUE WITH CLAIMS PAYABLE IN SINGAPORE IN THE CURRENCY OF THE CREDIT COVERING INSTITUTE CARGO CLAUSE (A), INSTITUTE WAR CLAUSES, INSTITUTE STRIKES CLAUSES/SRCC." ;
	    	
	}
	    if (strInsPol != null)
    {
	    var strInsPol1 = controlScript.strChop(strInsPol);
	}else
		strInsPol1 = "|";
////////////////////////
	var strBenCer =null;
    if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkBeneficiaryCertificate.rawValue == "1")
    {
    	if(LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue != null)
    	{ 
	    	if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1")
	    	strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED TO THE APPLICANT WITHIN " + LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue + " DAY(S) AFTER SHIPMENT.";
	    	if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.rawValue == "1")
	    	{
	    		if(strBenCer == null)
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN MAILED TO THE APPLICANT WITHIN " + LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue + " DAY(S) AFTER SHIPMENT."
    			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1")
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED"  + ", MAILED TO THE APPLICANT WITHIN " + LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue + " DAY(S) AFTER SHIPMENT."
    			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.rawValue == "1")
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN MAILED"  + ", COURIERED TO THE APPLICANT WITHIN " + LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue + " DAY(S) AFTER SHIPMENT."
	    	}
	    	if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.rawValue == "1")
	    	{
	    		if(strBenCer == null)
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN COURIERED TO THE APPLICANT WITHIN " + LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue + " DAY(S) AFTER SHIPMENT."
    			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1")
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED" + ", COURIERED TO THE APPLICANT WITHIN " + LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue + " DAY(S) AFTER SHIPMENT."
    			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1" && LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.rawValue == "1")
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED, MAILED" + ", COURIERED TO THE APPLICANT WITHIN " + LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue + " DAY(S) AFTER SHIPMENT."
	    	}
	    	if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.rawValue == "1" && LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1" && LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.rawValue == "1")
    		strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED, MAILED, COURIERED TO THE APPLICANT WITHIN " + LC.subfrmLC.subfrmBeneficiaryCertificate.txtDaysAfterShipment.rawValue + " DAY(S) AFTER SHIPMENT."
    	}else
    	{
    		if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1")
	    	strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED TO THE APPLICANT AFTER SHIPMENT.";
	    	if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.rawValue == "1")
	    	{
	    		if(strBenCer == null)
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN MAILED TO THE APPLICANT AFTER SHIPMENT."
    			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1")
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED"  + ", MAILED TO THE APPLICANT AFTER SHIPMENT."
    			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.rawValue == "1")
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN MAILED"  + ", COURIERED TO THE APPLICANT AFTER SHIPMENT."
	    	}
	    	if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.rawValue == "1")
	    	{
	    		if(strBenCer == null)
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN COURIERED TO THE APPLICANT AFTER SHIPMENT."
    			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1")
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED" + ", COURIERED TO THE APPLICANT AFTER SHIPMENT."
    			if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1" && LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.rawValue == "1")
    				strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED, MAILED" + ", COURIERED TO THE APPLICANT AFTER SHIPMENT."
	    	}
	    	if(LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.rawValue == "1" && LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.rawValue == "1" && LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.rawValue == "1")
    		strBenCer = "+ BENEFICIARY'S CERTIFICATE CERTIFYING THAT ONE SET OF NON-NEGOTIABLE DOCUMENTS HAS BEEN FAXED, MAILED, COURIERED TO THE APPLICANT AFTER SHIPMENT."
    	}
    	
	}	
	if (strBenCer != null)
    {
	    var strBenCer1 = controlScript.strChop(strBenCer);
    }else
		strBenCer1 = "|";
    
//////////////////////////
	var strSign =null;
    if(LC.subfrmLCFoot.subfrmInvoice.chkSignedCommercialInvoice.rawValue == "1")
    {
    	var original = LC.subfrmLCFoot.subfrmInvoice.txtSignedOriginals.rawValue;
    	var originalStr = original!= null && original == "1"? "ORIGINAL": "ORIGINALS";
    	var copy = LC.subfrmLCFoot.subfrmInvoice.txtSignedCopies.rawValue;
    	var copyStr = copy!= null && copy == "1"? "COPY": "COPIES";
    	if(original != null || copy != null){
    		if(original == "0" && copy == "0"){
    		
    		}else if(original == null || original == "0"){
    			strSign = "+ SIGNED COMMERCIAL INVOICES IN " + copy + " " + copyStr +".";
    		}else if(copy == null || copy == "0"){
    			strSign = "+ SIGNED COMMERCIAL INVOICES IN " + original + " " + originalStr +".";
    		}else{
    			strSign = "+ SIGNED COMMERCIAL INVOICES IN " + original + " " + originalStr  + " AND " + copy + " " + copyStr + "." ;
    		}
    	}	    	
	}
	var strPack =null;
    if(LC.subfrmLCFoot.subfrmInvoice.chkPackingList.rawValue == "1")
    {
    	var original = LC.subfrmLCFoot.subfrmInvoice.txtPackingListOriginals.rawValue;
    	var originalStr = original!= null && original == "1"? "ORIGINAL": "ORIGINALS";
    	var copy = LC.subfrmLCFoot.subfrmInvoice.txtPackingListCopies.rawValue;
    	var copyStr = copy!= null && copy == "1"? "COPY": "COPIES";
    	if(original != null || copy != null){
    		if(original == "0" && copy == "0"){
    		
    		}else if(original == null || original == "0"){
    			strPack = "+ PACKING LIST IN " + copy + " " + copyStr +".";
    		}else if(copy == null || copy == "0"){
    			strPack = "+ PACKING LIST IN " + original + " " + originalStr +".";
    		}else{
    			strPack = "+ PACKING LIST IN " + original + " " + originalStr  + " AND " + copy + " " + copyStr + "." ;
    		}
    	}	    	
	}
	var strWeight =null;
    if(LC.subfrmLCFoot.subfrmInvoice.chkWeightNote.rawValue == "1")
    {
    	var original = LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteOriginals.rawValue;
    	var originalStr = original!= null && original == "1"? "ORIGINAL": "ORIGINALS";
    	var copy = LC.subfrmLCFoot.subfrmInvoice.txtWeightNoteCopies.rawValue;
    	var copyStr = copy!= null && copy == "1"? "COPY": "COPIES";
    	if(original != null || copy != null){
    		if(original == "0" && copy == "0"){
    		
    		}else if(original == null || original == "0"){
    			strWeight = "+ WEIGHT NOTE IN " + copy + " " + copyStr +".";
    		}else if(copy == null || copy == "0"){
    			strWeight = "+ WEIGHT NOTE IN " + original + " " + originalStr +".";
    		}else{
    			strWeight = "+ WEIGHT NOTE IN " + original + " " + originalStr  + " AND " + copy + " " + copyStr + "." ;
    		}
    	}	    	
	}
	var strCerOrg =null;
    if(LC.subfrmLCFoot.subfrmInvoice.chkCertificateOfOrigin.rawValue == "1")
    {	
    	var originalText = LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginInOriginals.rawValue;
    	var originalStr = originalText != null && originalText == "1"? "ORIGINAL": "ORIGINALS";
    	var copyText = LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCopies.rawValue;
    	var copyStr = copyText != null && copyText == "1"? "COPY": "COPIES";
    	var countryOrigin = LC.subfrmLCFoot.subfrmInvoice.txtCertificateOfOriginCountry.rawValue;
    	
    	if(countryOrigin == null && (originalText != null || copyText != null)){
    	
    		if(originalText == "0" && copyText == "0"){
    		
    		}else if(originalText == null || originalText == "0"){
    			strCerOrg = "+ CERTIFICATE OF ORIGIN IN " + copyText + " " + copyStr +".";
    		}else if(copyText == null || copyText == "0"){
    			strCerOrg = "+ CERTIFICATE OF ORIGIN IN " + originalText + " " + originalStr +".";
    		}else{
    			strCerOrg = "+ CERTIFICATE OF ORIGIN IN " + originalText + " " + originalStr  + " AND " + copyText + " " + copyStr + "." ;
    		}
    	}else if(countryOrigin != null && (originalText != null || copyText != null)){
    		if(originalText == "0" && copyText == "0"){
    			strCerOrg = "+ CERTIFICATE OF ORIGIN, SHOWING COUNTRY OF ORIGIN AS " + countryOrigin  + ".";
    		}else if(originalText == null || originalText == "0"){
    			strCerOrg = "+ CERTIFICATE OF ORIGIN IN " + copyText + " " + copyStr +", SHOWING COUNTRY OF ORIGIN AS " + countryOrigin  + ".";
    		}else if(copyText == null || copyText == "0"){
    			strCerOrg = "+ CERTIFICATE OF ORIGIN IN " + originalText + " " + originalStr +", SHOWING COUNTRY OF ORIGIN AS " + countryOrigin  + ".";
    		}else{
    			strCerOrg = "+ CERTIFICATE OF ORIGIN IN " + originalText + " " + originalStr  + " AND " + copyText + " " + copyStr + ", SHOWING COUNTRY OF ORIGIN AS " + countryOrigin  + ".";
    		}
    	}	    	
	}
	 if (strCerOrg != null)
    {
	    var strCerOrg1 = controlScript.strChop(strCerOrg);
    }else
		strCerOrg1 = "|";
///////////////////////
	var strOtherDoc ="";
	if(form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc.rawValue != null)	
		strOtherDoc = form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc.rawValue + " ";
	
	if(form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc1.rawValue != null)
		strOtherDoc = strOtherDoc +  form1.LC.subfrmLCFoot.subfrmOtherDoc.txtOtherDoc1.rawValue;
		
	if (strOtherDoc == "")
		strOtherDoc = null;   
	
	 if (strOtherDoc != null)
    {
	    var strOtherDoc1 = controlScript.strChop(strOtherDoc);
    }else
		strOtherDoc1 = "|";
////////////////////////		
	var temp3 = '';
	var barcodeString3 = '';
	
	var barcodeString3 = '3'+'|';//3_01
	
	temp3 = strDelivery1;	//3_02
	barcodeString3 = barcodeString3 + (temp3 == null? '':temp3); 

	
	temp3 = strInsPol1;	//3_03
	barcodeString3 = barcodeString3 + (temp3 == null? '':temp3); 

	temp3 = strBenCer1;	//3_04
	barcodeString3 = barcodeString3 + (temp3 == null? '':temp3); 
	
	temp3 = strSign;	//3_05
	barcodeString3 = barcodeString3 + (temp3 == null? '':temp3) + '|'; 
	
	temp3 = strPack ;	//3_06
	barcodeString3 = barcodeString3 + (temp3 == null? '':temp3) + '|'; 
	
	temp3 = strWeight ;	//3_07
	barcodeString3 = barcodeString3 + (temp3 == null? '':temp3) + '|';
	
	temp3 = strCerOrg1;	//3_08
	barcodeString3 = barcodeString3 + (temp3 == null? '':temp3);
	
	temp3 = strOtherDoc1 ;	//3_09
	barcodeString3 = barcodeString3 + (temp3 == null? '':temp3);
	
	form1.LC.subfrmBarcodeRecord.txtBarcode1_1.rawValue =	 barcodeString3;	
	
//	var a3 = form1.LC.subfrmBarcodeRecord.txtBarcode1_1.rawValue;
//	xfa.host.messageBox("barcode 3="+ a3, "T");

	///////////////////barcode 4////////////////////////////////////
	
	if (form1.LC.subfrmLCFoot.subfrmGoodsDescription.txtGoodsDescription.rawValue != null)
	{
		var valueGD, chopGD;
		valueGD = new String(form1.LC.subfrmLCFoot.subfrmGoodsDescription.txtGoodsDescription.rawValue).substr(0,400);
			
		var valueGoodsDescription = controlScript.strChop(valueGD);
		
	}else{
		valueGoodsDescription = "|";
	}
	if (form1.LC.subfrmLCFoot.subfrmAdditionalCond.txtAdditionalCond.rawValue != null)
	{
		
		var valueAC = new String(form1.LC.subfrmLCFoot.subfrmAdditionalCond.txtAdditionalCond.rawValue).substr(0,600);
		var valueAdditionalCond = controlScript.strChop(valueAC);
				
	}else{
		valueAdditionalCond = "|";
	}	
	var temp4 = '';
	var barcodeString4 = '';
	
	var barcodeString4 = '4'+'|';//4_01
	
	temp4 = valueGoodsDescription;	//4_02
	barcodeString4 = barcodeString4 + (temp4 == null? '':temp4); 
	
	
	temp4 = valueAdditionalCond;	//4_03
	barcodeString4 = barcodeString4 + (temp4 == null? '':temp4); 
	
	
	form1.LC.subfrmBarcodeRecord.txtBarcode2_1.rawValue =	 barcodeString4;	
	
	
//	var a4 = form1.LC.subfrmBarcodeRecord.txtBarcode2_1.rawValue;
//	xfa.host.messageBox("barcode 4="+ a4, "T");
	
   
}

function cleanUpLCA(){
	form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.drpCurrency2.rawValue = form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.drpCurrency2.access == "readOnly"? null:form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.drpCurrency2.rawValue;
	form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.txtAmount2.rawValue = form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.txtAmount2.access == "readOnly"? null:form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.txtAmount2.rawValue;
	form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.txtDate.rawValue = form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.txtDate.access == "readOnly"? null:form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.txtDate.rawValue;
	form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate.rawValue = form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate.access == "readOnly"?null:form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate.rawValue;
	form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.txtAmendNo.rawValue = form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.txtAmendNo.access == "readOnly"?null:form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.txtAmendNo.rawValue;
	form1.LC_Amendment.subfrmFoot.subfrmAccount.txtAccNo.rawValue = form1.LC_Amendment.subfrmFoot.subfrmAccount.txtAccNo.presence == "hidden"? null:form1.LC_Amendment.subfrmFoot.subfrmAccount.txtAccNo.rawValue;
}


function LCAmdtbarcode()
{
	cleanUpLCA();
	///////////////////barcode 1////////////////////////////////////
	var strBenAdd ="";
	if(form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress1.rawValue != null)	
		strBenAdd = "["+ form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress1.rawValue + "]";
		
	if(form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress2.rawValue != null)
		strBenAdd = strBenAdd + "["+ form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress2.rawValue + "]";
	
	if(form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress3.rawValue != null)
		strBenAdd = strBenAdd + "["+ form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtAddress3.rawValue+"]";
		
	if (strBenAdd == "")
		strBenAdd = null;   
	
	var strDCDate = null;
	if(form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.txtDate.rawValue != null)
		strDCDate = controlScript.dateFormatChangeMainPage(form1.LC_Amendment.subfrmDetail.subfrmDateOfExpiry.txtDate);
		
	var strShipmentDate = null;
	if(form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate.rawValue != null)
		strShipmentDate = controlScript.dateFormatChangeMainPage(form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate);
		
	var temp = '';
	var barcodeString = '';
	
	var barcodeString = '1'+'|';//1_01
	
	temp = form1.MainPage.subfrmMain.txtLCACif.rawValue;	//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.LC_Amendment.subfrmDetail.subfrmApplicant.txtName.rawValue;	//1_03
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.LC_Amendment.subfrmDetail.subfrmNumber.txtNo.rawValue;	//1_04
	temp = temp == null? temp: temp.replace(/\D/g,'');
	barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	
	temp = form1.LC_Amendment.subfrmDetail.subfrmNumber.txtAmendNo.rawValue;	//1_05
	barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	
	temp = form1.LC_Amendment.subfrmDetail.subfrmBeneficiary.txtName.rawValue;	//1_06
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strBenAdd ;	//2_07
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';

	temp = form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.radAmount.rawValue;	//1_08
	barcodeString = barcodeString + (temp == ""? '':temp) + '|';
	
	temp = form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.drpCurrency2.rawValue;	//1_09
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.LC_Amendment.subfrmDetail.subfrmCreditAmount.txtAmount2.rawValue;	//1_10
	barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	
	temp = strDCDate;	//2_11
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
 	
 	temp = strShipmentDate;	//2_12
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
 	
 	temp = form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.radPartialShipment.rawValue;	//1_13
	barcodeString = barcodeString + (temp == ""? '':temp) + '|';
	
	temp = form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.radTranshipment.rawValue;	//1_14
	barcodeString = barcodeString + (temp == ""? '':temp) + '|';
	
	temp = form1.LC_Amendment.subfrmDetail.subfrmPartialshipment.txtAmendNo.rawValue;	//1_15
	barcodeString = barcodeString + (temp == null? '0':temp) + '|';

	temp = form1.LC_Amendment.subfrmDetail.subfrmModeOfAdvising.RadioButtonList.rawValue;	//1_16
	barcodeString = barcodeString + (temp == ""? '':temp) + '|';
	
	form1.LC_Amendment.subfrmFoot.subfrmOthers.subfrmBarcodeRecord.txtBarcode.rawValue =	 barcodeString;
	
//	var a = form1.LC_Amendment.subfrmFoot.subfrmOthers.subfrmBarcodeRecord.txtBarcode.rawValue;
//	xfa.host.messageBox("barcode 1="+ a, "T");

	///////////////////barcode 2////////////////////////////////////
	
	if (form1.LC_Amendment.subfrmFoot.subfrmOtherAttachement.txtGoodsDescription.rawValue != null)
	{
		var valueGD = new String(form1.LC_Amendment.subfrmFoot.subfrmOtherAttachement.txtGoodsDescription.rawValue).substr(0,400);
		var valueGoodsDescription = controlScript.strChop(valueGD);

	}else{
		valueGoodsDescription = "|";
	}
		
	var temp2 = '';
	var barcodeString2 = '';
	
	var barcodeString2 = '2'+'|';
	
	temp2 = valueGoodsDescription;	//2_01
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2); 

	
	form1.LC_Amendment.subfrmFoot.subfrmOthers.subfrmBarcodeRecord.txtBarcode3_1.rawValue =	 barcodeString2;	
	
//	var a2 = form1.LC_Amendment.subfrmFoot.subfrmOthers.subfrmBarcodeRecord.txtBarcode3_1.rawValue;
//	xfa.host.messageBox("barcode 2="+ a2, "T");
	  
}

function cleanUpOBC(){
	form1.OBC.subfrmOBC.subfrmTenor.txtTerm.rawValue = form1.OBC.subfrmOBC.subfrmTenor.txtTerm.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmTenor.txtTerm.rawValue;
	form1.OBC.subfrmOBC.subfrmTenor.txtDaysAfter.rawValue = form1.OBC.subfrmOBC.subfrmTenor.txtDaysAfter.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmTenor.txtDaysAfter.rawValue;
	form1.OBC.subfrmOBC.subfrmInterestDrawee.txtAt.rawValue = form1.OBC.subfrmOBC.subfrmInterestDrawee.txtAt.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmInterestDrawee.txtAt.rawValue;
	form1.OBC.subfrmOBC.subfrmInterestDrawee.txtFrom.rawValue = form1.OBC.subfrmOBC.subfrmInterestDrawee.txtFrom.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmInterestDrawee.txtFrom.rawValue;
	form1.OBC.subfrmOBC.subfrmInterestDrawee.txtTo.rawValue = form1.OBC.subfrmOBC.subfrmInterestDrawee.txtTo.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmInterestDrawee.txtTo.rawValue;
	form1.OBC.subfrmOBC.subfrmFinance.txtFor.rawValue = form1.OBC.subfrmOBC.subfrmFinance.txtFor.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmFinance.txtFor.rawValue;
	form1.OBC.subfrmOBC.subfrmCreditFinancing.txtNo.rawValue = form1.OBC.subfrmOBC.subfrmCreditFinancing.txtNo.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmCreditFinancing.txtNo.rawValue;
	form1.OBC.subfrmOBC.subfrmFXContract.txtRef.rawValue = form1.OBC.subfrmOBC.subfrmFXContract.txtRef.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmFXContract.txtRef.rawValue;
	form1.OBC.subfrmOBC.subfrmOtherSpecialInstructions.txtOtherSpecialInstructions.rawValue = form1.OBC.subfrmOBC.subfrmOtherSpecialInstructions.txtOtherSpecialInstructions.access == "readOnly"? null:form1.OBC.subfrmOBC.subfrmOtherSpecialInstructions.txtOtherSpecialInstructions.rawValue;
}

function OBCbarcode()
{
	cleanUpOBC();
	///////////////////barcode 1////////////////////////////////////
	var strAppAdd="";
	
	if(form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress1.rawValue != null)
		strAppAdd = "["+form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress1.rawValue  + "]";
	
	if(form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress2.rawValue != null)
		strAppAdd = strAppAdd + "["+ form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress2.rawValue  + "]";
		
	if(form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress3.rawValue != null)
		strAppAdd = strAppAdd + "["+ form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtAddress3.rawValue+"]";
		
	if(strAppAdd == "")
		strAppAdd = null; 
		
	var strDraweeAdd="";
	if(form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress1.rawValue != null)
		strDraweeAdd = "["+form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress1.rawValue  + "]";
	
	if(form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress2.rawValue != null)
		strDraweeAdd = strDraweeAdd + "["+ form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress2.rawValue  + "]";
		
	if(form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress3.rawValue != null)
		strDraweeAdd = strDraweeAdd + "["+ form1.OBC.subfrmOBC.subfrmDraweeBank.txtAddress3.rawValue + "]";
		
	if(strDraweeAdd == "")
		strDraweeAdd = null; 
	
	var strPayment = null;
	if(OBC.subfrmOBC.subfrmDeliverDocumentAgainst.chkPayment.rawValue == "Payment" && OBC.subfrmOBC.subfrmTenor.radTenor.rawValue == "Y")
		strPayment = "DPS";
	else if(OBC.subfrmOBC.subfrmDeliverDocumentAgainst.chkPayment.rawValue == "Payment" && OBC.subfrmOBC.subfrmTenor.radTenor.rawValue == "N")
		strPayment = "DPU";
	else if(OBC.subfrmOBC.subfrmDeliverDocumentAgainst.chkAcceptance.rawValue == "Acceptance")
		strPayment = "DAA";
				
	var strAccept = null;
	//if(OBC.subfrmOBC.subfrmDeliverDocumentAgainst.chkAcceptance.rawValue == "Acceptance")
	//	strAccept = "DAA";	
	//else
	//	strAccept = null;	
		
	var strAdvise = null;
	if(OBC.subfrmOBC.subfrmAdvise.chkAdvise.rawValue == "1" && OBC.subfrmOBC.subfrmTenor.radTenor.rawValue == "Y")
		strAdvise = "FIS";
	else if(OBC.subfrmOBC.subfrmAdvise.chkAdvise.rawValue == "1" && OBC.subfrmOBC.subfrmTenor.radTenor.rawValue == "N")
		strAdvise = "FJS";
	else 
		strAdvise = null;
		
	/*var strShipmentDate = null;
	if(form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate.rawValue != null)
		strShipmentDate = controlScript.dateFormatChangeMainPage(form1.LC_Amendment.subfrmDetail.subfrmShipmentDate.txtDate);*/
	
	var temp = '';
	var barcodeString = '';
	
	var barcodeString = '1'+'|';//1_01
	
	temp = form1.MainPage.subfrmMain.txtOBCCif.rawValue;	//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName.rawValue;	//1_03
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.OBC.subfrmOBC.subfrmDrawee.txtDrawee.rawValue;	//1_04
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = null;//strAppAdd;	//1_05
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.OBC.subfrmOBC.subfrmDraweeBank.txtName.rawValue;	//1_06
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strDraweeAdd;	//1_07
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	barcodeString = barcodeString + '|'; //1_08(only for HK)
	barcodeString = barcodeString + '|'; //1_09(only for HK)
	
	temp = strPayment;	//1_10
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
		
	temp = strAccept;	//1_11
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.OBC.subfrmOBC.subfrmTenor.radTenor.rawValue;	//1_12
	barcodeString = barcodeString + (temp == ""? '':temp) + '|';
	
	temp = form1.OBC.subfrmOBC.subfrmTenor.txtTerm.rawValue;	//1_13
	barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	
	temp = form1.OBC.subfrmOBC.subfrmTenor.txtDaysAfter.rawValue;	//1_14
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.OBC.subfrmOBC.subfrmInvoice.txtInvoice.rawValue;	//1_15
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue;	//1_16
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.rawValue;	//1_17
	barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	
	barcodeString = barcodeString + ' |'; //1_18(only for HK)
	
	temp = strAdvise;	//1_19
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = OBC.subfrmOBC.subfrmProtest.chkProtest.rawValue;	//1_20
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = OBC.subfrmOBC.subfrmWaive.chkWaive.rawValue;	//1_21
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	barcodeString = barcodeString + '|'; //1_22(Only for HK)
	form1.OBC.subfrmOBC.subfrmOthers.txtHiddenField.rawValue =	 barcodeString;
	
//	var a = form1.OBC.subfrmOBC.subfrmOthers.txtHiddenField.rawValue;
//	xfa.host.messageBox("barcode 1="+ a, "T");

///////////////////barcode 2////////////////////////////////////
		
	var temp2 = '';
	var barcodeString2 = '';
	
	var barcodeString2 = '2|';//2_01
	
	temp2 = form1.OBC.subfrmOBC.subfrmPort.txtDepDated.rawValue;	//2_02
	if(temp2 != null)
		temp2 = controlScript.dateFormatChangeMainPage(form1.OBC.subfrmOBC.subfrmPort.txtDepDated);
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2 ) + '|'
	
	temp2 = form1.OBC.subfrmOBC.subfrmPort.txtCRNo.rawValue;	//2_03
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.subfrmPort.txtPortLoad.rawValue;	//2_04
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.subfrmPort.txtPortDisch.rawValue;	//2_05
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtDrafts.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtDrafts.rawValue == null)//2_06
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'DRAFT' + '|'; 
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtDrafts.rawValue;	//2_07
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtDrafts.rawValue;	//2_08
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtInvoice.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtInvoice.rawValue == null)//2_09
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'COMMERCIAL INVOICE' + '|';  
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtInvoice.rawValue;	//2_10
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtInvoice.rawValue;	//2_11
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtPackingList.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtPackingList.rawValue == null)//2_12
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'PACKING LIST' + '|'; 
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtPackingList.rawValue;	//2_13
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtPackingList.rawValue;	//2_14
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtBenCert.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtBenCert.rawValue == null)//2_15
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'BENEFICIARY CERTIFICATE' + '|';  
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtBenCert.rawValue;	//2_16
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtBenCert.rawValue;	//2_17
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	barcodeString2 = barcodeString2 + '|';	//2_18	(only for HK)
	barcodeString2 = barcodeString2 + '0|';	//2_19	(only for HK)
	barcodeString2 = barcodeString2 + '0|';	//2_20	(only for HK)
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtCertofOrigin.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtCertofOrigin.rawValue == null)//2_21
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'CERTIFICATE OF ORIGIN' + '|'; 
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtCertofOrigin.rawValue;	//2_22
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtCertofOrigin.rawValue;	//2_23
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	barcodeString2 = barcodeString2 + '|';	//2_24	(only for HK)
	barcodeString2 = barcodeString2 + '0|';	//2_25	(only for HK)
	barcodeString2 = barcodeString2 + '0|';	//2_26	(only for HK)
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtInsurancePolicy.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtInsurancePolicy.rawValue == null)//2_27
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'INSURANCE CER/POLICY' + '|'; 
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtInsurancePolicy.rawValue;	//2_28
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtInsurancePolicy.rawValue;	//2_29
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	barcodeString2 = barcodeString2 + '|';	//2_30	(only for HK)
	barcodeString2 = barcodeString2 + '0|';	//2_31	(only for HK)
	barcodeString2 = barcodeString2 + '0|';	//2_32	(only for HK)
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtBLOriginals.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtBLOriginals.rawValue == null)//2_33
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'BILL OF LADING' + '|'; 
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtBLOriginals.rawValue;	//2_34
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtBLOriginals.rawValue;	//2_35
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtBLNN.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtBLNN.rawValue == null)//2_36
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'NON-NEGOTIABLE B/L' + '|'; 
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtBLNN.rawValue;	//2_37
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtBLNN.rawValue;	//2_38
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtAirwayBills.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtAirwayBills.rawValue == null)//2_39
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'AIRWAY BILL' + '|'; 
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtAirwayBills.rawValue;	//2_40
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtAirwayBills.rawValue;	//2_41
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	barcodeString2 = barcodeString2 + '|';	//2_42	(only for HK)
	barcodeString2 = barcodeString2 + '0|';	//2_43	(only for HK)
	barcodeString2 = barcodeString2 + '0|';	//2_44	(only for HK)
	
	if(form1.OBC.subfrmOBC.Table.rowOriginal.txtWeightNote.rawValue == null && form1.OBC.subfrmOBC.Table.rowCopies.txtWeightNote.rawValue == null)//2_45
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'WEIGHT LIST' + '|'; 
	
	temp2 = form1.OBC.subfrmOBC.Table.rowOriginal.txtWeightNote.rawValue;	//2_46
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.Table.rowCopies.txtWeightNote.rawValue;	//2_47
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.subfrmPort.txtGoodsDesc.rawValue;	//2_48
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	temp2 = form1.OBC.subfrmOBC.subfrmPort.txtVesselNo.rawValue;	//2_49
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|';
	
	form1.OBC.subfrmOBC.subfrmOthers.txtbarcode4_1.rawValue =	 barcodeString2;	
//	var a1 = form1.OBC.subfrmOBC.subfrmOthers.txtbarcode4_1.rawValue;
//	xfa.host.messageBox("barcode 2="+ a1, "T");

}

function cleanUpEBLC(){
	form1.EBLC.subfrmEBLC.subfrmReject.txtReject.rawValue = form1.EBLC.subfrmEBLC.subfrmReject.txtReject.access == "readOnly"? null:form1.EBLC.subfrmEBLC.subfrmReject.txtReject.rawValue;
	form1.EBLC.subfrmEBLC.subfrmTenor.txtTerm.rawValue = form1.EBLC.subfrmEBLC.subfrmTenor.txtTerm.access == "readOnly"? null:form1.EBLC.subfrmEBLC.subfrmTenor.txtTerm.rawValue;
	form1.EBLC.subfrmEBLC.subfrmTenor.txtDaysAfter.rawValue = form1.EBLC.subfrmEBLC.subfrmTenor.txtDaysAfter.access == "readOnly"? null:form1.EBLC.subfrmEBLC.subfrmTenor.txtDaysAfter.rawValue;
	form1.EBLC.subfrmEBLC.subfrmTenor.txtTenorDate.rawValue = form1.EBLC.subfrmEBLC.subfrmTenor.txtTenorDate.access == "readOnly"? null:form1.EBLC.subfrmEBLC.subfrmTenor.txtTenorDate.rawValue;
	form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.txtRate.rawValue = form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.txtRate.access == "readOnly"? null:form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.txtRate.rawValue;
	form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.drpCurrency.rawValue = form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.drpCurrency.access == "readOnly"? null:form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.drpCurrency.rawValue;
	form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.txtRate.rawValue = form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.txtRate.access == "readOnly"? null:form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails2.subfrmOptions.txtRate.rawValue;
	form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtCreditFund.rawValue = form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtCreditFund.access == "readOnly"? null:form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtCreditFund.rawValue;
	form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtRemitTheFunds.rawValue = form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtRemitTheFunds.access == "readOnly"? null:form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtRemitTheFunds.rawValue;
	form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtUseTheFunds.rawValue = form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtUseTheFunds.access == "readOnly"? null:form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtUseTheFunds.rawValue;
	form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtUseFX.rawValue = form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtUseFX.access == "readOnly"? null:form1.EBLC.subfrmEBLC2.subfrmOtherInstructions.txtUseFX.rawValue;
	form1.EBLC.subfrmEBLC.txtBank.rawValue = form1.EBLC.subfrmEBLC.txtBank.access == "readOnly"? null:form1.EBLC.subfrmEBLC.txtBank.rawValue;
}

function EBLCbarcode()
{
	cleanUpEBLC();
	var strIssueBank ="";
	if(form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue != null)
		strIssueBank = form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue  + " ";
			
	if(form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue != null)
		strIssueBank = strIssueBank + form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue;
		
	if(strIssueBank == "")
		strIssueBank = null;
	

	var temp = '';
	var barcodeString = '';
	var barcodeString = '1|';//1_01
	
	temp = form1.MainPage.subfrmMain.txtEBLCCif.rawValue;	//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtBeneficiaryName.rawValue;	//1_03
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.EBLC.subfrmEBLC.subfrmBankUse.txtDraftInvNo.rawValue;	//1_04
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue;	//1_05
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.rawValue;	//1_06
	barcodeString = barcodeString + (temp == null? '0':temp) + '|'; 

	temp = form1.EBLC.subfrmEBLC.subfrmTenor.radTenor.rawValue;	//1_07
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.EBLC.subfrmEBLC.subfrmTenor.txtTerm.rawValue;	//1_08
	barcodeString = barcodeString + (temp == null? '0':temp) + '|'; 
	
	temp = form1.EBLC.subfrmEBLC.subfrmTenor.txtDaysAfter.rawValue;	//1_09
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strIssueBank;	//1_10
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtCreditNo.rawValue;	//1_11
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EBLC.subfrmEBLC.subfrmRight.txtDated.rawValue;	//1_12
	if(temp != null)
		temp = controlScript.dateFormatChangeMainPage(form1.EBLC.subfrmEBLC.subfrmRight.txtDated);
	barcodeString = barcodeString + (temp == null? '':temp) + '|';

	form1.EBLC.subfrmEBLC2.subfrmOthers.txtBarcode1.rawValue = barcodeString;
	

//	var a = form1.EBLC.subfrmEBLC2.subfrmOthers.txtBarcode1.rawValue;
//	xfa.host.messageBox("barcode="+ a, "T");

	 
// Barcdoe 2

	var temp2 = '';
	var barcodeString2 = '';
	
	var barcodeString2 = '2|';//2_01
	
	temp2 = form1.EBLC.subfrmEBLC.subfrmVerssel.txtVesselName.rawValue;	//2_02
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.subfrmTenor.txtCRNo.rawValue;	//2_03
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtDrafts.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtDrafts.rawValue == null)//2_04
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'DRAFT' + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtDrafts.rawValue;	//2_05
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtDrafts.rawValue;	//2_06
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInvoice.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInvoice.rawValue == null)//2_07
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'COMMERCIAL INVOICE' + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInvoice.rawValue;	//2_08
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInvoice.rawValue;	//2_09
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtPackingList.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtPackingList.rawValue == null)//2_10
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'PACKING LIST' + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtPackingList.rawValue;	//2_11
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtPackingList.rawValue;	//2_12
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtWeightNote.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtWeightNote.rawValue == null)//2_13
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'WEIGHT LIST' + '|';  
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtWeightNote.rawValue;	//2_14
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtWeightNote.rawValue;	//2_15
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtCertofOrigin.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtCertofOrigin.rawValue == null)//2_16
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'CERTIFICATE OF ORIGIN' + '|';  
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtCertofOrigin.rawValue;	//2_17
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtCertofOrigin.rawValue;	//2_18
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInsPolicy.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInspolicy.rawValue == null)//2_19
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'INSURANCE CER / POLICY' + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInspolicy.rawValue;	//2_20
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInsPolicy.rawValue;	//2_21
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtBL.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtBL.rawValue == null)//2_22
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'BILL OF LADING' + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtBL.rawValue;	//2_23
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtBL.rawValue;	//2_24
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtAirwayBills.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtAirwayBills.rawValue == null)//2_25
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'AIRWAY BILL' + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtAirwayBills.rawValue;	//2_26
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtAirwayBills.rawValue;	//2_27
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	if(form1.EBLC.subfrmEBLC.Table1.rowCopies.txtBenCert.rawValue == null && form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtBenCert.rawValue == null)//2_28
	barcodeString2 = barcodeString2 + '' + '|'; 
	else
	barcodeString2 = barcodeString2 + 'BENEFICIARY CERTIFICATE' + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtBenCert.rawValue;	//2_29
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtBenCert.rawValue;	//2_30
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.subfrmTenor.txtDepDated.rawValue;	//2_31
	if(temp2 != null)
		temp2 = controlScript.dateFormatChangeMainPage(form1.EBLC.subfrmEBLC.subfrmTenor.txtDepDated);
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2 ) + '|';
	
	temp2 = form1.EBLC.subfrmEBLC.subfrmTenor.txtPortLoad.rawValue;	//2_32
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.subfrmTenor.txtPortDisch.rawValue;	//2_33
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.subfrmTenor.txtGoodsDesc.rawValue;	//2_34
	barcodeString2 = barcodeString2 + (temp2 == null? '0':temp2) + '|'; 
	

/*	temp2 = form1.EBLC.subfrmEBLC.Table1.rowHeader.txtInput1.rawValue;	//2_30
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInput1.rawValue;	//2_31
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInput1.rawValue;	//2_32
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowHeader.txtInput2.rawValue;	//2_33
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInput2.rawValue;	//2_34
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInput2.rawValue;	//2_35
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowHeader.txtInput3.rawValue;	//2_36
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInput3.rawValue;	//2_37
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInput3.rawValue;	//2_38
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowHeader.txtInput4.rawValue;	//2_39
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInput4.rawValue;	//2_40
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInput4.rawValue;	//2_41
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowHeader.txtInput5.rawValue;	//2_42
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowOriginal.txtInput5.rawValue;	//2_43
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|'; 
	
	temp2 = form1.EBLC.subfrmEBLC.Table1.rowCopies.txtInput5.rawValue;	//2_44
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';
	
	temp2 = form1.EBLC.subfrmEBLC.subfrmCheckingOfDocuments.radCheckingOfDocuments.rawValue;	//2_45
	barcodeString2 = barcodeString2 + (temp2 == null? '^':temp2) + '|';*/
	
	form1.EBLC.subfrmEBLC2.subfrmOthers.txtBarcode2.rawValue = barcodeString2;

//	var a2 = form1.EBLC.subfrmEBLC2.subfrmOthers.txtBarcode2.rawValue;
//	xfa.host.messageBox("barcode="+ a2, "T");
	
	
}

function cleanUpDBRP()
{
	form1.DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.txtICRef.rawValue = form1.DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.txtICRef.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.txtICRef.rawValue;
	form1.DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.txtCredit.rawValue = form1.DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.txtCredit.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.txtCredit.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName2.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName2.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName2.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress2.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress2.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress2.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress3.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress3.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress3.rawValue;
	
	// 2025-11-15 -- Add Town + Postal.
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtTown.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtTown.access == "readOnly" ? null : form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtTown.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtPostal.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtPostal.access == "readOnly" ? null: form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtPostal.rawValue;
	
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtRefNo.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtRefNo.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtRefNo.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtName.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtName.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtName.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAccNo.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAccNo.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAccNo.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.txtCreditAcc.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.txtCreditAcc.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.txtCreditAcc.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers1.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers1.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers1.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers2.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers2.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers2.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers3.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers3.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.txtOthers3.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.txtDebitAcc.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.txtDebitAcc.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.txtDebitAcc.rawValue;
	form1.DBRP.subfrmAPF.subfrmInstructions.txtAccNo.rawValue = form1.DBRP.subfrmAPF.subfrmInstructions.txtAccNo.access == "readOnly"? null:form1.DBRP.subfrmAPF.subfrmInstructions.txtAccNo.rawValue;
}

function DBRPbarcode()
{	
	cleanUpDBRP();
	
	// 2026-02-22 -- Add Bene (Supplier) Names
	var strSupplierName ="";
	if(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName.rawValue != null)
		strSupplierName = "["+ form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName.rawValue  + "]";
	
	if(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName2.rawValue != null)
		strSupplierName = strSupplierName + "["+ form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtName2.rawValue  + "]";
		
	if(strSupplierName == "")
		strSupplierName = null;
		
		
	//Supplier Address
	var strSupplierAdd ="";
	if(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1.rawValue != null)
		strSupplierAdd = "["+ form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress1.rawValue  + "]";
	
	if(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress2.rawValue != null)
		strSupplierAdd = strSupplierAdd + "["+ form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress2.rawValue  + "]";
		
	if(strSupplierAdd == "")
		strSupplierAdd = null;

	//Bene Bank Address
	var strBeneBankAdd ="";
	if(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtAddress1.rawValue != null)
		strBeneBankAdd = "["+ form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtAddress1.rawValue  + "]";
	
	if(form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtAddress2.rawValue != null)
		strBeneBankAdd = strBeneBankAdd + "["+ form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtAddress2.rawValue  + "]";
		
	if(strBeneBankAdd == "")
		strBeneBankAdd = null;
	
	var strSuppAdd ="";
	if(form1.DBRP.subfrmAPF.subfrmSupDetails.txtAddress1.rawValue != null)
		strSuppAdd = "["+ form1.DBRP.subfrmAPF.subfrmSupDetails.txtAddress1.rawValue  + "]";
	
	if(form1.DBRP.subfrmAPF.subfrmSupDetails.txtAddress2.rawValue != null)
		strSuppAdd = strSuppAdd + "["+ form1.DBRP.subfrmAPF.subfrmSupDetails.txtAddress2.rawValue  + "]";
		
	if(form1.DBRP.subfrmAPF.subfrmSupDetails.txtAddress3.rawValue != null)
		strSuppAdd = strSuppAdd + "["+ form1.DBRP.subfrmAPF.subfrmSupDetails.txtAddress3.rawValue + "]";
		
	if(strSuppAdd == "")
		strSuppAdd = null;
		
	var temp = '';
	var barcodeString = '';
	
	var barcodeString = '1'+'|';																									//1_01
	
	temp = form1.MainPage.subfrmMain.txtDBRPCif.rawValue;																			//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmApplicant.txtName.rawValue;																	//1_03
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmBillAmount.drpCurrency.rawValue;																//1_04
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmBillAmount.txtAmount.rawValue;																//1_05
	barcodeString = barcodeString + (temp == null? '0':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmFinancing.txtdays.rawValue;																	//1_06
	barcodeString = barcodeString + (temp == null? '0':temp) + '|'; 
	
	temp = strSupplierName;																											//1_07
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = strSupplierAdd;																											//1_08
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtRefNo.rawValue ;	
	temp = temp==null? temp: temp.substr(0,16); 																					//1_09
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAccNo.rawValue;												//1_10
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtName.rawValue;													//1_11
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 

	if (form1.DBRP.subfrmAPF.subfrmInstructions.radInstructions.rawValue == "SFT") 													//1_12
	{
		temp = form1.DBRP.subfrmAPF.subfrmInstructions.radInstructions.rawValue;	
		barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	}
	else if  (DBRP.subfrmAPF.subfrmInstructions.radInstructions.rawValue == "CSH")
	{
		temp = DBRP.subfrmAPF.subfrmInstructions.radInstructions.rawValue;	
		barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	}
	else
	{
		temp = null;
		barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	}
	
	if(DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP.rawValue == "1")															//1_13
		temp = "BPD";	
	else if (DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP.rawValue == "2")
		temp = "^";	
	else if (DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP.rawValue == "3")
		temp = "32";	
	else if (DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP.rawValue == "4")
		temp = "BPD";	
	else
		temp = null;	
	
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	barcodeString = barcodeString + '|'; 																							//1_14
	
	temp = form1.DBRP.subfrmAPF.subfrmSupDetails.txtName.rawValue;																	//1_15
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
		
	temp = strSuppAdd;																												//1_16
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 

	temp = form1.DBRP.subfrmAPF.subfrmSupDetails.txtCity.rawValue;																	//1_17
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subPurchase.radDescrip.rawValue;																	//1_18
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	if(form1.DBRP.subfrmAPF.subPurchase.radDescrip.rawValue == "G")																	//1_19
		temp = form1.DBRP.subfrmAPF.subPurchase.txtGoods.rawValue;	
	else if(form1.DBRP.subfrmAPF.subPurchase.radDescrip.rawValue == "S")
		temp = form1.DBRP.subfrmAPF.subPurchase.txtServices.rawValue;	
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmFinancing.drpFinanceCurrency.rawValue;														//1_20
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmFinancing.txtAmount.rawValue;																	//1_21
	barcodeString = barcodeString + (temp == null? '0':temp) + '|'; 
	
	
	for (var i = 0 ; i < form1.DBRP.subfrmAPF.subfrmContract.instanceManager.count; i++)											//1_22 to 1_31 
	{
		if(i > 0)
			form1.DBRP.subfrmAPF.subfrmContract.instanceManager.moveInstance(i,0);
		
		temp = "CF" + form1.DBRP.subfrmAPF.subfrmContract.subFx.txtContractNo.rawValue + "-" + form1.DBRP.subfrmAPF.subfrmContract.subFx.txtFXContractSeq.rawValue;
		barcodeString = barcodeString + (temp == "CFnull-null" ? '':temp) + '|';
		temp = form1.DBRP.subfrmAPF.subfrmContract.subFx.txtAmount.rawValue;
		barcodeString = barcodeString + (temp == null? '':temp) + '|';
				
		if(i > 0)
			form1.DBRP.subfrmAPF.subfrmContract.instanceManager.moveInstance(0,i);
	}
	
	var max = 5;
	if( max > form1.DBRP.subfrmAPF.subfrmContract.instanceManager.count)
	{
		for (var i = form1.DBRP.subfrmAPF.subfrmContract.instanceManager.count ; i < max ; i++)
		{
			temp = null;
			barcodeString = barcodeString + (temp == null? '':temp) + '|';
			barcodeString = barcodeString + (temp == null? '':temp) + '|';
		}
	}
	
	temp = form1.DBRP.subfrmAPF.subDocAtt.radDoc.rawValue;																			//1_32
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtSwiftCode.rawValue;												//1_33
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtCorSwiftCode.rawValue; 											//1_34
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmDebitComm.drpA_Currency.rawValue; 															//1_35
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmDebitComm.txtA_Account.rawValue; 																//1_36
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmDebitComm.drpF_Currency.rawValue; 															//1_37
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmDebitComm.txtF_Account.rawValue; 																//1_38
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmDebitComm.txtL_Account.rawValue; 																//1_39
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmDebitComm.drpRe_Currency.rawValue; 															//1_40
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmDebitComm.txtRe_Account.rawValue; 															//1_41
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.radSupYN.rawValue; 												//1_42
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtAddress3.rawValue; 											//1_43
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strBeneBankAdd;																											//1_44
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.txtAddress3.rawValue; 												//1_45
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	//Form Date
	var strFormDate;
	strFormDate = controlScript.dateFormatChangeBarcode(form1.pageSet.Page1.txtDBRPDate);
	
	temp = strFormDate;																												//1_46
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.txtCreditAcc.rawValue; 															// 1_47
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.DBRP.subfrmAPF.subfrmInstructions.subfrmBanker.radCharges.rawValue; 												//1_48
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	//Value Date
	var strFValueDate;
	strFValueDate = controlScript.dateFormatChangeBarcode(form1.DBRP.subfrmAPF.subfrmFinancing.txtOBCDate);
	
	temp = strFValueDate;																											//1_49
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
    form1.DBRP.subfrmAPFFoot.subfrmBarcodeRecord.txtBarcode.rawValue = barcodeString;
     
	//xfa.host.messageBox(barcodeString);	
	
	// Barcode 2

	//Banker Address
	var strThirdAdd ="";
	if(form1.DBRP.subfrmAPF.subfrm3PartyBeneficiary.txtAddress1.rawValue != null)
		strThirdAdd = "["+ form1.DBRP.subfrmAPF.subfrm3PartyBeneficiary.txtAddress1.rawValue  + "]";
	
	if(form1.DBRP.subfrmAPF.subfrm3PartyBeneficiary.txtAddress2.rawValue != null)
		strThirdAdd = strThirdAdd + "["+ form1.DBRP.subfrmAPF.subfrm3PartyBeneficiary.txtAddress2.rawValue  + "]";
		
	if(form1.DBRP.subfrmAPF.subfrm3PartyBeneficiary.txtAddress3.rawValue != null)
		strThirdAdd = strThirdAdd + "["+ form1.DBRP.subfrmAPF.subfrm3PartyBeneficiary.txtAddress3.rawValue+"]";
		
	if(strThirdAdd == "")
		strThirdAdd = null;		 
	
	var temp2 = '';
	var barcodeString2 = '';
	
	var barcodeString2 = '2'+'|';																									//2_01
	
	temp2 = form1.DBRP.subfrmAPF.subfrm3PartyBeneficiary.txtName.rawValue;															//2_02
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 
	
	temp2 = strThirdAdd;																											//2_03
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 
	
	barcodeString2 = barcodeString2 + '|';																							//2_04	(not found in SG template)
	
	barcodeString2 = barcodeString2 + '|';																							//2_05	(only for HK)
	barcodeString2 = barcodeString2 + '|';																							//2_06	(only for HK)
	
	var strOthers="";
	if(DBRP.subfrmAPF.subfrmInstructions.txtOthers1.rawValue != null)
		strOthers = DBRP.subfrmAPF.subfrmInstructions.txtOthers1.rawValue;
	if(DBRP.subfrmAPF.subfrmInstructions.txtOthers2.rawValue != null)
		strOthers = strOthers + DBRP.subfrmAPF.subfrmInstructions.txtOthers2.rawValue;
	
	temp2 = strOthers;																												//2_07
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 

	// 2025-11-10 -- User wants to add Town and Postal at the end of Sequence.
	temp2 = DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtPostal.rawValue;													// 2_08
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 

	temp2 = DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.txtTown.rawValue;														// 2_09
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 
	
	//xfa.host.messageBox(barcodeString2 );
 	form1.DBRP.subfrmAPFFoot.subfrmBarcodeRecord.txtBarcode2.rawValue = barcodeString2; 
}

function SBLCbarcode()
{
	///////////////////barcode 1////////////////////////////////////
	
	// Applicant Address
	var strAppAddr = "";
	if(form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress1.rawValue != null)	
		strAppAddr = "["+ form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress1.rawValue + "]";
		
	if(form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress2.rawValue != null)
		strAppAddr = strAppAddr + "["+ form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress2.rawValue + "]";
	
	if(form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress3.rawValue != null)
		strAppAddr = strAppAddr + "["+ form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress3.rawValue + "]";
		
	if (strAppAddr == "")
		strAppAddr = null;   
	
	// Beneficiary Address
	var strBeneAddr = "";
	if(form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1.rawValue != null)	
		strBeneAddr = "["+ form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1.rawValue + "]";
		
	if(form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2.rawValue != null)
		strBeneAddr = strBeneAddr + "["+ form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2.rawValue + "]";
	
	if(form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue != null)
		strBeneAddr = strBeneAddr + "["+ form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.formattedValue + "]";
		
	if (strBeneAddr == "")
		strBeneAddr = null;   
	
	// Third Party Address
	var strThirdPartyAddr = "";
	if(form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress1.rawValue != null)	
		strThirdPartyAddr = "["+ form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress1.rawValue + "]";
		
	if(form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress2.rawValue != null)
		strThirdPartyAddr = strThirdPartyAddr + "["+ form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress2.rawValue + "]";
	
	if(form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress3.rawValue != null)
		strThirdPartyAddr = strThirdPartyAddr + "["+ form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyAddress3.rawValue + "]";
		
	if (strThirdPartyAddr == "")
		strThirdPartyAddr = null;   
		
	// Advising Bank Address
	var strAdviseBankAddr = "";
	if(form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress1.rawValue != null)	
		strAdviseBankAddr = "["+ form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress1.rawValue + "]";
		
	if(form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress2.rawValue != null)
		strAdviseBankAddr = strAdviseBankAddr + "["+ form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress2.rawValue + "]";
	
	if(form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress3.rawValue != null)
		strAdviseBankAddr = strAdviseBankAddr + "["+ form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankAddress3.rawValue + "]";
		
	if (strAdviseBankAddr == "")
		strAdviseBankAddr = null;   
	
	// Effective Date
	var strEffectiveDate = null;
	if(form1.SBLC.amountAndPeriod.subValidPeriod.txtEffectiveDate.rawValue != null)
		strEffectiveDate = controlScript.dateFormatChangeMainPage(form1.SBLC.amountAndPeriod.subValidPeriod.txtEffectiveDate);
	
	//Expiry Date
	var strExpiryDate = null;
	if(form1.SBLC.amountAndPeriod.subValidPeriod.txtExpiryDate.rawValue != null)
		strExpiryDate = controlScript.dateFormatChangeMainPage(form1.SBLC.amountAndPeriod.subValidPeriod.txtExpiryDate);
		
	var temp = '';
	var barcodeString = '';
	
	var barcodeString = '1'+'|';	//1_01
	
	//temp = form1.MainPage.subfrmMain.txtSBLCCif.rawValue;	//1_02
	temp = form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtBankCIFNo.rawValue;	//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.SBLC.applicantAndBeneficiary.subApplicantInfo.txtApplicantName.rawValue;	//1_03
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strAppAddr ;	//1_04
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryName.rawValue;	//1_05
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strBeneAddr ;	//1_06
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.SBLC.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue;	//1_07
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.SBLC.thirdPartyAndAdvisingBank.subThirdParty.txtThirdPartyName.rawValue;	//1_08
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strThirdPartyAddr ;	//1_09
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtAdvisingBankName.rawValue;	//1_10
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strAdviseBankAddr ;	//1_11
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.SBLC.thirdPartyAndAdvisingBank.subAdvisingBank.txtSWIFTAddress.rawValue;	//1_12
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.SBLC.amountAndPeriod.subCurrenyAmount.drpCurrency.rawValue;	//1_13
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.SBLC.amountAndPeriod.subCurrenyAmount.txtAmount.rawValue;	//1_14
	barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	
	temp = strEffectiveDate;	//1_15
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
 	
 	temp = strExpiryDate;	//1_16
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	// 1_17 and 1_18 is N/A
	
	temp = form1.SBLC.thisApplication.radApplication.rawValue;	//1_19
	barcodeString = barcodeString + (temp == ""? 'OTHR':temp) + '|';
		
	temp = form1.SBLC.allFees.subHeader.txtAccNo.rawValue;	//1_20
	barcodeString = barcodeString + (temp == null? '':temp) + '|';

	form1.SBLC.barcodeRecord.txtBarcode1.rawValue = barcodeString;
	//app.alert(form1.SBLC.barcodeRecord.txtBarcode1.rawValue);
	
	// 2nd barcode to 10th barcode
	// initialize barcode unique id
	form1.SBLC.barcodeRecord.txtBarcode2.rawValue = "2|";
	form1.SBLC.barcodeRecord.txtBarcode3.rawValue = "3|";
	form1.SBLC.barcodeRecord.txtBarcode4.rawValue = "4|";
	form1.SBLC.barcodeRecord.txtBarcode5.rawValue = "5|";
	form1.SBLC.barcodeRecord.txtBarcode6.rawValue = "6|";
	form1.SBLC.barcodeRecord.txtBarcode7.rawValue = "7|";
	form1.SBLC.barcodeRecord.txtBarcode8.rawValue = "8|";
	form1.SBLC.barcodeRecord.txtBarcode9.rawValue = "9|";
	form1.SBLC.barcodeRecord.txtBarcode10.rawValue = "10|";
	
	if (form1.SBLC.sblcFormat.txtSBLCFormat.rawValue != null)
	{
		var valueFormat, barcodeString;			
		var valueCF = form1.SBLC.sblcFormat.txtSBLCFormat.rawValue + "\rPartial Drawings is " + form1.SBLC.partialAndCharges.subPartialDrawings.radPartial.rawValue +
						". Charges outside Singapore are for account of " + form1.SBLC.partialAndCharges.subCharges.radCharges.rawValue;	
		///////////////////barcode 2////////////////////////////////////
		if (valueCF.length > 0) {
		
			valueFormat = controlScript.strChop(valueCF.substr(0,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode2.rawValue + (valueFormat == null? '':valueFormat);
			 
			form1.SBLC.barcodeRecord.txtBarcode2.rawValue =	barcodeString;
				
		}
		///////////////////barcode 3////////////////////////////////////
		if (valueCF.length > 1000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(1000,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode3.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLC.barcodeRecord.txtBarcode3.rawValue =	barcodeString;
					
		}
		///////////////////barcode 4////////////////////////////////////
		if (valueCF.length > 2000) {
		
			valueFormat = controlScript.strChop(valueCF.substr(2000,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode4.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLC.barcodeRecord.txtBarcode4.rawValue =	barcodeString;
				
		}
		///////////////////barcode 5////////////////////////////////////
		if (valueCF.length > 3000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(3000,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode5.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLC.barcodeRecord.txtBarcode5.rawValue =	barcodeString;	
		}
		///////////////////barcode 6////////////////////////////////////
		if (valueCF.length > 4000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(4000,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode6.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLC.barcodeRecord.txtBarcode6.rawValue =	barcodeString;	
		}
		///////////////////barcode 7////////////////////////////////////
		if (valueCF.length > 5000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(5000,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode7.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLC.barcodeRecord.txtBarcode7.rawValue =	barcodeString;	
		}
		///////////////////barcode 8////////////////////////////////////
		if (valueCF.length > 6000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(6000,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode8.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLC.barcodeRecord.txtBarcode8.rawValue =	barcodeString;	
		}
		///////////////////barcode 9////////////////////////////////////
		if (valueCF.length > 7000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(7000,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode9.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLC.barcodeRecord.txtBarcode9.rawValue =	barcodeString;	
		}
		///////////////////barcode 10////////////////////////////////////
		if (valueCF.length > 8000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(8000,1000));
			barcodeString = form1.SBLC.barcodeRecord.txtBarcode10.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLC.barcodeRecord.txtBarcode10.rawValue = barcodeString;	
		}												
	}
			
}

function BGbarcode()
{
	///////////////////barcode 1////////////////////////////////////
	
	// Applicant Address
	var strAppAddr = "";
	if(form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress1.rawValue != null)	
		strAppAddr = "["+ form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress1.rawValue + "]";
		
	if(form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress2.rawValue != null)
		strAppAddr = strAppAddr + "["+ form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress2.rawValue + "]";
	
	if(form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress3.rawValue != null)
		strAppAddr = strAppAddr + "["+ form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantAddress3.rawValue + "]";
		
	if (strAppAddr == "")
		strAppAddr = null;   
	
	// Beneficiary Address
	var strBeneAddr = "";
	if(form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1.rawValue != null)	
		strBeneAddr = "["+ form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1.rawValue + "]";
		
	if(form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2.rawValue != null)
		strBeneAddr = strBeneAddr + "["+ form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2.rawValue + "]";
		
	if(form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue != null)
		strBeneAddr = strBeneAddr + "["+ form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.formattedValue + "]";
		
	if (strBeneAddr == "")
		strBeneAddr = null;   
	
	// Third Party Address
	var strThirdPartyAddr = "";
	if(form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress1.rawValue != null)	
		strThirdPartyAddr = "["+ form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress1.rawValue + "]";
		
	if(form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress2.rawValue != null)
		strThirdPartyAddr = strThirdPartyAddr + "["+ form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress2.rawValue + "]";
	
	if(form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress3.rawValue != null)
		strThirdPartyAddr = strThirdPartyAddr + "["+ form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyAddress3.rawValue + "]";
		
	if (strThirdPartyAddr == "")
		strThirdPartyAddr = null;   
	
	// Effective Date
	var strEffectiveDate = null;
	if(form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.rawValue == "1")
	{
		strEffectiveDate = controlScript.dateFormatChangeMainPage(form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.txtSpecificDate);
	}
	else if (form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.rawValue == "2")
	{
		strEffectiveDate = controlScript.currentDate();
	}
	else if (form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.rawValue == "3")
	{
		strEffectiveDate = controlScript.currentDate();
	}
	
	// Expiry Date
	var strExpiryDate = null;
	if(form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.rawValue == "1") 
	{
		strExpiryDate = controlScript.dateFormatChangeMainPage(form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.txtSpecificDate);
	}
	else if (form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.rawValue == "2")
	{
		var arrCurrentDate = controlScript.currentDate().split("-");
		// add 1 year
		arrCurrentDate[0] = ((arrCurrentDate[0] * 1) + 1) + "";
		strExpiryDate = arrCurrentDate.join("-");
	}
	else if (form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.rawValue == "3")	
	{
		var arrCurrentDate = controlScript.currentDate().split("-");
		// add 1 year
		arrCurrentDate[0] = ((arrCurrentDate[0] * 1) + 1) + "";
		strExpiryDate = arrCurrentDate.join("-");
	}
	
	// Claim Expiry Date
	var strClaimExpiryDate = null;
	if(form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.rawValue == "1")
	{
		strClaimExpiryDate = controlScript.dateFormatChangeMainPage(form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtSpecificDate);
	}
	else if(form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.rawValue == "2")
	{
		//strClaimExpiryDate = controlScript.dateFormatChangeMainPage(form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.txtSpecificDate);
		var arrCurrentDate = controlScript.currentDate().split("-");
		// add 1 year
		arrCurrentDate[0] = ((arrCurrentDate[0] * 1) + 1) + "";
		strClaimExpiryDate = arrCurrentDate.join("-");
	}
	
	// Claim Period
	var strClaim = null;
	if(form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtClaimPeriod.rawValue != null && form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.rawValue == "3")	
		strClaim = form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtClaimPeriod.rawValue;
		   
	// Day Month Dropdown
	var strDayMonth = null;
	if(form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.drpDayMonth.rawValue != null && form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.rawValue == "3")	
		strDayMonth = form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.drpDayMonth.rawValue;
	  
	// Swift Address
	var strSwiftAddress = null;
	if(form1.BG.deliveryInstructions.subDeliveryIns.sectionA.txtSwiftAddress.rawValue != null && form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.rawValue == "4")	
		strSwiftAddress = form1.BG.deliveryInstructions.subDeliveryIns.sectionA.txtSwiftAddress.rawValue;
		
	// Requirements of Issuing Bank
	var strRequirements = "";
	/*if ((form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue != null) && (form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue != ""))
	{
		strRequirements = "["+ form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue + "]";
	}*/
	
	/*
	if(form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "2")
	{		
		strRequirements = strRequirements + "["+ (form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue == " "?"":form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue) + "]";
	}
	*/
	
	if((form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue != null && form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue != "") && form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue != " " && form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "2")
	{			
		if(form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue == "THE BANK LTD, INDIA")
		{
			strRequirements = strRequirements + "["+ "00000910" + "]";
		}
		
		else if(form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue == "PT THE BANK INDONESIA")
		{
			if(form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue == "SURABAYA BRANCH") 
			{
				strRequirements = strRequirements + "["+ "57537029" + "]";
			}
			else
			{
				strRequirements = strRequirements + "["+ "57530000" + "]";
			}
		}
		
		else
		{
			strRequirements = strRequirements + "["+ form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue + "]";
		}
	
	}
		
	if((form1.BG.requirementsOfIssuingBank.requirements.txtSwiftAddress.rawValue != null && form1.BG.requirementsOfIssuingBank.requirements.txtSwiftAddress.rawValue != "") && form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "4")
	{
		strRequirements = strRequirements + "["+ form1.BG.requirementsOfIssuingBank.requirements.txtSwiftAddress.rawValue + "]";
	}
  	 	
	if (strRequirements == "")
		strRequirements = null; 
	
	// Corresponding Agent Bank
	var strCorresponding = "";
	if(form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "3")	
		strCorresponding = "["+ "Corresponding Agent Bank" + "]" + "["+ "." + "]" + "["+ "." + "]";
		
	if (strCorresponding == "")
		strCorresponding = null; 
	
	
	var temp = '';
	var barcodeString = '';
	
	var barcodeString = '1'+'|';	//1_01
	
	//temp = form1.MainPage.subfrmMain.txtBGCif.rawValue;	//1_02
	temp = form1.BG.applicantAndBeneficiary.subApplicantInfo.txtBankCIFNo.rawValue;	//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.BG.applicantAndBeneficiary.subApplicantInfo.txtApplicantName.rawValue;	//1_03
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strAppAddr ;	//1_04
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryName.rawValue;	//1_05
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strBeneAddr ;	//1_06
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	// 1_07 to 1_20 store blank
	/*
	barcodeString = barcodeString + '|';	//1_07	
	barcodeString = barcodeString + '|';	//1_08	
	barcodeString = barcodeString + '|';	//1_09	
	barcodeString = barcodeString + '|';	//1_10	
	barcodeString = barcodeString + '|';	//1_11	
	barcodeString = barcodeString + '|';	//1_12	
	barcodeString = barcodeString + '|';	//1_13	
	barcodeString = barcodeString + '|';	//1_14	
	barcodeString = barcodeString + '|';	//1_15	
	barcodeString = barcodeString + '|';	//1_16	
	barcodeString = barcodeString + '|';	//1_17	
	barcodeString = barcodeString + '|';	//1_18	
	barcodeString = barcodeString + '|';	//1_19	
	barcodeString = barcodeString + '|';	//1_20
	*/
	
	temp = form1.BG.thirdPartyAndEffectiveDate.subThirdParty.txtThirdPartyName.rawValue;	//1_07
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strThirdPartyAddr ;	//1_08
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.BG.currencyAndAmount.subCurrenyAmount.drpCurrency.rawValue;	//1_09
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.BG.currencyAndAmount.subCurrenyAmount.txtAmount.rawValue;	//1_10
	barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	
	// Effective Date
	temp = strEffectiveDate;	//1_11
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
 	
	// Expiry Date
 	temp = strExpiryDate;	//1_12
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	// Claim Expiry Date
 	temp = strClaimExpiryDate;	//1_13
 	barcodeString = barcodeString + (temp == null? '1111-11-11':temp) + '|';
	
	temp = strClaim ;	//1_14
 	barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	
	temp = strDayMonth ;	//1_15
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strRequirements ;	//1_16
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
		
	temp = strCorresponding ;	//1_17
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strSwiftAddress ;	//1_18
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	// 1_33 to 1_34 store blank
	/*
	barcodeString = barcodeString + '|';	//1_33	
	barcodeString = barcodeString + '|';	//1_34	
	*/
	
	temp = form1.BG.allFees.subHeader.txtAccNo.rawValue;	//1_19
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.BG.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue;	//1_20
	barcodeString = barcodeString + (temp == null? '':temp) + '|';

	//xfa.host.messageBox("1:" + barcodeString);
	
	form1.BG.barcodeRecord.txtBarcode1.rawValue = barcodeString;
	//app.alert(form1.BG.barcodeRecord.txtBarcode1.rawValue);
	
	// 2nd barcode to 10th barcode
	// initialize barcode unique id
	form1.BG.barcodeRecord.txtBarcode2.rawValue = "2|";
	form1.BG.barcodeRecord.txtBarcode3.rawValue = "3|";
	form1.BG.barcodeRecord.txtBarcode4.rawValue = "4|";
	form1.BG.barcodeRecord.txtBarcode5.rawValue = "5|";
	form1.BG.barcodeRecord.txtBarcode6.rawValue = "6|";
	form1.BG.barcodeRecord.txtBarcode7.rawValue = "7|";
	form1.BG.barcodeRecord.txtBarcode8.rawValue = "8|";
	form1.BG.barcodeRecord.txtBarcode9.rawValue = "9|";
	form1.BG.barcodeRecord.txtBarcode10.rawValue = "10|";
	
	// Scenario 1
	if (form1.BG.guaranteesFormat.txtGuaranteesFormat.rawValue != null && form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "1" && form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.rawValue == "4")
	{
		var valueFormat, barcodeString;
		
		var valueCF = "ATTN: GUARANTEE/STANDBY LC DEPARTMENT\r.\rA) WITHOUT ANY RESPONSIBILITY, PLS ADVISE THE GUARANTEE\rIMMEDIATELY TO THE BENEFICIARY.\rSWIFT or email YOUR CHARGES TO ATTN: BG SECTION,\rQUOTE OUR REF\r.\rIN THE EVENT OF NON-ADVICE, PLS PROVIDE REASON.\r.\rB) PLS CONTACT MR      AT HP NO.      TO COLLECT THE GUARANTEE.\r.\rC) TEXT OF GUARANTEE AS FOLLOWS:-\rQUOTE\r" + 
						form1.BG.guaranteesFormat.txtGuaranteesFormat.rawValue +
						"\rUNQUOTE\r.\rREGARDS\rTHE BANK";
			
		///////////////////barcode 2////////////////////////////////////
		if (valueCF.length > 0) {
		
			valueFormat = controlScript.strChop(valueCF.substr(0,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode2.rawValue + (valueFormat == null? '':valueFormat);
			 
			form1.BG.barcodeRecord.txtBarcode2.rawValue =	barcodeString;
		//	xfa.host.messageBox("12" + barcodeString);
		}
		
		///////////////////barcode 3////////////////////////////////////
		if (valueCF.length > 1000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(1000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode3.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode3.rawValue =	barcodeString;
		//	xfa.host.messageBox("13" + barcodeString);
		}
		
		///////////////////barcode 4////////////////////////////////////
		if (valueCF.length > 2000) {
		
			valueFormat = controlScript.strChop(valueCF.substr(2000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode4.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode4.rawValue =	barcodeString;
		//	xfa.host.messageBox("14" + barcodeString);
		}
		
		///////////////////barcode 5////////////////////////////////////
		if (valueCF.length > 3000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(3000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode5.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode5.rawValue =	barcodeString;
		//	xfa.host.messageBox("15" + barcodeString);	
		}
		
		///////////////////barcode 6////////////////////////////////////
		if (valueCF.length > 4000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(4000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode6.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode6.rawValue =	barcodeString;
		//	xfa.host.messageBox("16" + barcodeString);	
		}
		
		///////////////////barcode 7////////////////////////////////////
		if (valueCF.length > 5000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(5000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode7.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode7.rawValue =	barcodeString;	
		//	xfa.host.messageBox("17" + barcodeString);
		}
		
		///////////////////barcode 8////////////////////////////////////
		if (valueCF.length > 6000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(6000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode8.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode8.rawValue =	barcodeString;	
		//	xfa.host.messageBox("18" + barcodeString);
		}
		
		///////////////////barcode 9////////////////////////////////////
		if (valueCF.length > 7000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(7000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode9.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode9.rawValue =	barcodeString;	
		//	xfa.host.messageBox("19" + barcodeString);
		}
		
		///////////////////barcode 10////////////////////////////////////
		if (valueCF.length > 8000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(8000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode10.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode10.rawValue = barcodeString;	
		//	xfa.host.messageBox("110" + barcodeString);
		}										
	}

	// Scenario 2	
	else if (form1.BG.guaranteesFormat.txtGuaranteesFormat.rawValue != null && form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "1" && (form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.rawValue == "1" || form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.rawValue == "2" || form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.rawValue == "3"))
	{
		var valueFormat, barcodeString;

		var valueCF = "ATTN: GUARANTEE SECTION\r.\rA) PLEASE ISSUE THE GUARANTEE IMMEDIATELY.\rSWIFT DETAIL BREAKDOWN OF YOUR COMMISSION/CHARGES TO ATTN: BG\rSECTION, QUOTE OUR REF\r.\rMAIL TO BANKER'S GUARANTEE SECTION AT 6 SHENTON WAY HEX13-00\rBank BUILDING TOWER 1 SINGAPORE 068809 OR email to /\rpeterchoo (at) bank.com OR FAX. 65 62719154 TWO COPIES OF YOUR\rGUARANTEE FOR OUR RECORD.\r.\rB) IN THE EVENT OF NON ISSUE, PLS SWIFT REASON.\r.\rC) PLS CONTACT MR      AT HP NO.      TO COLLECT THE GUARANTEE.\r.\rD) TEXT OF GUARANTEE AS FOLLOWS:-\rQUOTE\r.\r" +  
						form1.BG.guaranteesFormat.txtGuaranteesFormat.rawValue + 
						"\rUNQUOTE\r.\rREGARDS\rTHE BANK";
						
		///////////////////barcode 2////////////////////////////////////
		if (valueCF.length > 0) {
		
			valueFormat = controlScript.strChop(valueCF.substr(0,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode2.rawValue + (valueFormat == null? '':valueFormat);
			 
			form1.BG.barcodeRecord.txtBarcode2.rawValue =	barcodeString;
		//	xfa.host.messageBox("22" + barcodeString);
		}

		///////////////////barcode 3////////////////////////////////////
		if (valueCF.length > 1000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(1000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode3.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode3.rawValue =	barcodeString;
		//	xfa.host.messageBox("23" + barcodeString);
		}
		
		///////////////////barcode 4////////////////////////////////////
		if (valueCF.length > 2000) {
		
			valueFormat = controlScript.strChop(valueCF.substr(2000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode4.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode4.rawValue =	barcodeString;
		//	xfa.host.messageBox("24" + barcodeString);
		}
		
		///////////////////barcode 5////////////////////////////////////
		if (valueCF.length > 3000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(3000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode5.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode5.rawValue =	barcodeString;	
		//	xfa.host.messageBox("25" + barcodeString);
		}
		
		///////////////////barcode 6////////////////////////////////////
		if (valueCF.length > 4000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(4000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode6.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode6.rawValue =	barcodeString;	
		//	xfa.host.messageBox("26" + barcodeString);
		}
		
		///////////////////barcode 7////////////////////////////////////
		if (valueCF.length > 5000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(5000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode7.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode7.rawValue =	barcodeString;	
		//	xfa.host.messageBox("27" + barcodeString);
		}

		
		///////////////////barcode 8////////////////////////////////////
		if (valueCF.length > 6000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(6000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode8.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode8.rawValue =	barcodeString;	
		//	xfa.host.messageBox("28" + barcodeString);
		}
		
		///////////////////barcode 9////////////////////////////////////
		if (valueCF.length > 7000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(7000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode9.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode9.rawValue =	barcodeString;
		//	xfa.host.messageBox("29" + barcodeString);	
		}
		
		///////////////////barcode 10////////////////////////////////////
		if (valueCF.length > 8000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(8000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode10.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode10.rawValue = barcodeString;	
		//	xfa.host.messageBox("210" + barcodeString);
		}										
	}

	// Scenario 3	
	else if (form1.BG.guaranteesFormat.txtGuaranteesFormat.rawValue != null && (form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "2" || form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "3" || form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "4") && (form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.rawValue == "1" || form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.rawValue == "2" || form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.rawValue == "3"))
	{
		var valueFormat, barcodeString;
		
		var valueCF = "ATTN: GUARANTEE SECTION\r.\rA) PLEASE ISSUE THE GUARANTEE IMMEDIATELY.\rSWIFT DETAIL BREAKDOWN OF YOUR COMMISSION/CHARGES TO ATTN: BG\rSECTION, QUOTE OUR REF\r.\rAS AGREED WITH Bank FIG RM (name per column\rTHE COMMISSION RATE IS ..........(per column K)\rMAIL TO BANKER'S GUARANTEE SECTION AT 6 SHENTON WAY HEX13-00\rBank BUILDING TOWER 1 SINGAPORE 068809 OR email to /\rpeterchoo (at) bank.com OR FAX. 65 62719154 TWO COPIES OF YOUR\rGUARANTEE FOR OUR RECORD.\r.\rB) IN THE EVENT OF NON ISSUE, PLS SWIFT REASON.\r.\rC) PLS CONTACT " + 
						"[MR " + form1.BG.deliveryInstructions.subDeliveryIns.sectionB.txtMrs.rawValue + "]" +
						" AT  HP NO. " + 
						"[" + form1.BG.deliveryInstructions.subDeliveryIns.sectionB.txtMobileNo.rawValue + "]" +
						" TO COLLECT THE GUARANTEE.\r.\rD) TEXT OF GUARANTEE AS FOLLOWS:-\rQUOTE\r.\r" + 
						form1.BG.guaranteesFormat.txtGuaranteesFormat.rawValue + 
						"\r.\rREGARDS\rTHE BANK";
		
		///////////////////barcode 2////////////////////////////////////
		if (valueCF.length > 0) {
		
			valueFormat = controlScript.strChop(valueCF.substr(0,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode2.rawValue + (valueFormat == null? '':valueFormat);
			 
			form1.BG.barcodeRecord.txtBarcode2.rawValue =	barcodeString;
			//xfa.host.messageBox("32" + barcodeString);
		}
		
		///////////////////barcode 3////////////////////////////////////
		if (valueCF.length > 1000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(1000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode3.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode3.rawValue =	barcodeString;
		//	xfa.host.messageBox("33" + barcodeString);
		}
		
		///////////////////barcode 4////////////////////////////////////
		if (valueCF.length > 2000) {
		
			valueFormat = controlScript.strChop(valueCF.substr(2000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode4.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode4.rawValue =	barcodeString;
		//	xfa.host.messageBox("34" + barcodeString);
		}
		
		///////////////////barcode 5////////////////////////////////////
		if (valueCF.length > 3000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(3000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode5.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode5.rawValue =	barcodeString;	
		//	xfa.host.messageBox("35" + barcodeString);
		}
		
		///////////////////barcode 6////////////////////////////////////
		if (valueCF.length > 4000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(4000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode6.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode6.rawValue =	barcodeString;	
		//	xfa.host.messageBox("36" + barcodeString);
		}
		
		
		///////////////////barcode 7////////////////////////////////////
		if (valueCF.length > 5000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(5000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode7.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode7.rawValue =	barcodeString;	
			//xfa.host.messageBox("37" + barcodeString);
		}
		
		///////////////////barcode 8////////////////////////////////////
		if (valueCF.length > 6000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(6000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode8.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode8.rawValue =	barcodeString;	
			//xfa.host.messageBox("38" + barcodeString);
		}
		
		///////////////////barcode 9////////////////////////////////////
		if (valueCF.length > 7000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(7000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode9.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode9.rawValue =	barcodeString;	
			//xfa.host.messageBox("39" + barcodeString);	
		}
			
		///////////////////barcode 10////////////////////////////////////
		if (valueCF.length > 8000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(8000,1000));
			barcodeString = form1.BG.barcodeRecord.txtBarcode10.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BG.barcodeRecord.txtBarcode10.rawValue = barcodeString;	
		//	xfa.host.messageBox("310" + barcodeString);	
		}												
	}		
}

function SBLCAbarcode()
{
	///////////////////barcode 1////////////////////////////////////
	
	// Beneficiary Address
	/*
	var strBeneAddr = "";
	if(form1.SBLCA.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1.rawValue != null)	
		strBeneAddr = "["+ form1.SBLCA.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress1.rawValue + "]";
		
	if(form1.SBLCA.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2.rawValue != null)
		strBeneAddr = strBeneAddr + "["+ form1.SBLCA.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryAddress2.rawValue + "]";
	
	if(form1.SBLCA.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue != null)
		strBeneAddr = strBeneAddr + "["+ form1.SBLCA.applicantAndBeneficiary.subBeneficiaryInfo.drpBeneficiaryCountry.rawValue + "]";
	 	
	if (strBeneAddr == "")
		strBeneAddr = null;   
	*/
	
	//Expiry Date
	var strExpiryDate = null;
	if(form1.SBLCA.amendments.expiryDate.chkAmendExpiryDate.rawValue == "1" && form1.SBLCA.amendments.expiryDate.txtExpiryDate.rawValue != null)
		strExpiryDate = controlScript.dateFormatChangeMainPage(form1.SBLCA.amendments.expiryDate.txtExpiryDate);
	
	var temp = '';
	var barcodeString = '';
	
	var barcodeString = '1'+'|';	//1_01
	
	temp = form1.SBLCA.BankAndRefNo.BankNo.txtBankCIFNo.rawValue;	//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.SBLCA.BankAndRefNo.refNo.txtRefNo.rawValue;	//1_03
	barcodeString = barcodeString + (temp == null? '0':temp) + '|'; 
	
	//Amendment No. 1_04
	
	//temp = form1.SBLCA.applicantAndBeneficiary.subApplicantInfo.txtApplicantName.rawValue;	//1_05
	//barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	//temp = form1.SBLCA.applicantAndBeneficiary.subBeneficiaryInfo.txtBeneficiaryName.rawValue;	//1_06
	//barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	//temp = strBeneAddr ;	//1_07
 	//barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	/*
	if(form1.SBLCA.amendments.amount.chkAmendAmount.rawValue == "1")
	{
		temp = form1.SBLCA.amendments.amount.drpCurrency.rawValue;	//1_08
		barcodeString = barcodeString + (temp == null? '':temp) + '|';
	}
	*/
	
	if(form1.SBLCA.amendments.amount.chkAmendAmount.rawValue == "1")
	{	
		temp = form1.SBLCA.amendments.amount.txtAmount.rawValue;	//1_09
		barcodeString = barcodeString + (temp == null? '0':temp) + '|';
 	}else
	{
		var barcodeString = barcodeString +  '0|';
	}
 	
 	temp = strExpiryDate;	//1_10
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.SBLCA.we.txtAccNo.rawValue;	//1_11
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	if(form1.SBLCA.amendments.amount.chkAmendAmount.rawValue == "1")
	{
		temp = form1.SBLCA.amendments.amount.drpAmendAmount.rawValue;	//1_12
		barcodeString = barcodeString + (temp == null? '':temp) + '|';
	}else
	{
		var barcodeString = barcodeString +  '|';
	}
	
	form1.SBLCA.barcodeRecord.txtBarcode1.rawValue = barcodeString;
	//app.alert(form1.SBLCA.barcodeRecord.txtBarcode1.rawValue);
	
	// 2nd barcode to 4th barcode
	// initialize barcode unique id
	form1.SBLCA.barcodeRecord.txtBarcode2.rawValue = "2|";
	form1.SBLCA.barcodeRecord.txtBarcode3.rawValue = "3|";
	form1.SBLCA.barcodeRecord.txtBarcode4.rawValue = "4|";
	
	if (form1.SBLCA.amendments.amendText.text.chkAmendText.rawValue == "1" && form1.SBLCA.amendments.amendText.txtAmend.rawValue != null)
	{
		var valueFormat, barcodeString;			
		var valueCF = form1.SBLCA.amendments.amendText.txtAmend.rawValue + "\rAll other terms and conditions of the SBLC remain unchanged.";	
		///////////////////barcode 2////////////////////////////////////
		if (valueCF.length > 0) {
		
			valueFormat = controlScript.strChop(valueCF.substr(0,1000));
			barcodeString = form1.SBLCA.barcodeRecord.txtBarcode2.rawValue + (valueFormat == null? '':valueFormat);
			 
			form1.SBLCA.barcodeRecord.txtBarcode2.rawValue = barcodeString;
			//app.alert(form1.SBLCA.barcodeRecord.txtBarcode2.rawValue);
				
		}
		///////////////////barcode 3////////////////////////////////////
		if (valueCF.length > 1000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(1000,1000));
			barcodeString = form1.SBLCA.barcodeRecord.txtBarcode3.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLCA.barcodeRecord.txtBarcode3.rawValue = barcodeString;
					
		}
		///////////////////barcode 4////////////////////////////////////
		if (valueCF.length > 2000) {
		
			valueFormat = controlScript.strChop(valueCF.substr(2000,1000));
			barcodeString = form1.SBLCA.barcodeRecord.txtBarcode4.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.SBLCA.barcodeRecord.txtBarcode4.rawValue = barcodeString;
				
		}
												
	}
			
}

function EXPORTbarcode()
{
	///////////////////barcode 1////////////////////////////////////
	
	// Third Party Address
	var strThirdAddr = "";
	if(form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress1.rawValue != null)	
		strThirdAddr = "["+ form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress1.rawValue + "]";
		
	if(form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress2.rawValue != null)
		strThirdAddr = strThirdAddr + "["+ form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress2.rawValue + "]";
		
	if(form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress3.rawValue != null)
		strThirdAddr = strThirdAddr + "["+ form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtAddress3.rawValue + "]";	
		
	if (strThirdAddr == "")
		strThirdAddr = null;   
		
	// Applicant Address
	var strAppAddr = "";
	if(form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress1.rawValue != null)	
		strAppAddr= "["+ form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress1.rawValue + "]";
		
	if(form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress2.rawValue != null)
		strAppAddr = strAppAddr + "["+ form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress2.rawValue + "]";
		
	if(form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress3.rawValue != null)
		strAppAddr = strAppAddr + "["+ form1.EXPORT.subfrm.applicant.subfrmApplicant.txtAddress3.rawValue + "]";	
		
	if (strAppAddr== "")
		strAppAddr= null;   
		
	// Others
	var strOthers = "";
	if(form1.EXPORT.subfrm.disbursement.txtOthers1.rawValue != null)	
		strOthers= "["+ form1.EXPORT.subfrm.disbursement.txtOthers1.rawValue + "]";
		
	if(form1.EXPORT.subfrm.disbursement.txtOthers2.rawValue != null)
		strOthers = strOthers + "["+ form1.EXPORT.subfrm.disbursement.txtOthers2.rawValue + "]";
		
	if(form1.EXPORT.subfrm.disbursement.txtOthers3.rawValue != null)
		strOthers = strOthers + "["+ form1.EXPORT.subfrm.disbursement.txtOthers3.rawValue + "]";	
		
	if (strOthers == "")
		strOthers = null;   
	
	var temp = '';
	var barcodeString = '';
	
	var barcodeString = '1'+'|';	//1_01
	
	temp = form1.MainPage.BankCIFNo.txtBankCIFNo.rawValue;	//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.EXPORT.subfrm.applicant.subfrmApplicant.txtName.rawValue;	//1_03
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = form1.EXPORT.subfrm.thirdParty.subfrm3PartyBeneficiary.txtName.rawValue;	//1_04
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strThirdAddr ;	//1_05
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.thirdParty.subfrmBillAmount.drpCurrency.rawValue;	//1_06
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.thirdParty.subfrmBillAmount.txtAmount.rawValue;	//1_07
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
 	temp = form1.EXPORT.subfrm.subfrmFinancing.drpFinanceCurrency.rawValue;	//1_08
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.subfrmFinancing.txtdays.rawValue;	//1_09
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	//temp = form1.EXPORT.subfrm.subfrmContract.subFx.txtContractNo.rawValue;	//1_10
	temp = "CF" + form1.EXPORT.subfrm.subfrmContract.subFx.txtContractNo.rawValue + "-" + form1.EXPORT.subfrm.subfrmContract.subFx.txtFXContractSeq.rawValue;
	barcodeString = barcodeString + (temp == "CFnull-null"? '':temp) + '|';
	
	//temp = form1.EXPORT.subfrm.subPurchase.txtGoods.rawValue;	//1_11
	//barcodeString = barcodeString + (temp == null? '':temp) + '|';
	if(form1.EXPORT.subfrm.subPurchase.radDescrip.rawValue == "G")//1_11
		temp = form1.EXPORT.subfrm.subPurchase.txtGoods.rawValue;	
	else if(form1.EXPORT.subfrm.subPurchase.radDescrip.rawValue == "S")
		temp = form1.EXPORT.subfrm.subPurchase.txtServices.rawValue;	
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.disbursement.txtCreditAccNo.rawValue;	//1_12
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.subfrmDebitComm.txtA_Account.rawValue;	//1_13
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.subfrmDebitComm.txtRe_Account.rawValue;	//1_14
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	if(form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.rawValue == "1") //1_15
	{
		temp = "BPD";	
	}
	else if (form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.rawValue == "2")
	{
		temp = "BPD";	
	}
	else if (form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.rawValue == "3")
	{
		temp = "BSF";	
	}
	else
	{
		temp = "";	
	}
	
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	//Form Date
	var strFormDate;
	strFormDate = controlScript.dateFormatChangeBarcode(form1.EXPORT.EXPORTBcode.txtEXPORTDate);
	//strFormDate = form1.pageSet.Page1.txtDBRPDate.rawValue;
	temp = strFormDate;	//1_16
	barcodeString = barcodeString + (temp == null? '':temp) + '|'; 
	
	temp = strAppAddr ;	//1_17
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
 	
 	
 	//1_18 to 1_27
 	for (var i = 0 ; i < form1.EXPORT.subfrm.thirdParty.subfrmBuyer.instanceManager.count; i++){
		if(i > 0)
			form1.EXPORT.subfrm.thirdParty.subfrmBuyer.instanceManager.moveInstance(i,0);
		
		temp = form1.EXPORT.subfrm.thirdParty.subfrmBuyer.subBName.txtBName.rawValue;
		barcodeString = barcodeString + (temp == null? '':temp) + '|';
				
		if(i > 0)
			form1.EXPORT.subfrm.thirdParty.subfrmBuyer.instanceManager.moveInstance(0,i);
	}
	var maxName = 10;
	if( maxName > form1.EXPORT.subfrm.thirdParty.subfrmBuyer.instanceManager.count)
	{
		for (var i = form1.EXPORT.subfrm.thirdParty.subfrmBuyer.instanceManager.count ; i < maxName ; i++){
			temp = null;
			barcodeString = barcodeString + (temp == null? '':temp) + '|';
		}
	}
	
	temp = form1.EXPORT.subfrm.subfrmFinancing.txtAmount.rawValue;	//1_28
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	//1_29 to 1_38
	for (var i = 0 ; i < form1.EXPORT.subfrm.subfrmContract.instanceManager.count; i++){
		if(i > 0)
			form1.EXPORT.subfrm.subfrmContract.instanceManager.moveInstance(i,0);
		
		temp = "CF" + form1.EXPORT.subfrm.subfrmContract.subFx.txtContractNo.rawValue + "-" + form1.EXPORT.subfrm.subfrmContract.subFx.txtFXContractSeq.rawValue;
		barcodeString = barcodeString + (temp == "CFnull-null" ? '':temp) + '|';
		temp = form1.EXPORT.subfrm.subfrmContract.subFx.txtAmount.rawValue;
		barcodeString = barcodeString + (temp == null? '':temp) + '|';
				
		if(i > 0)
			form1.EXPORT.subfrm.subfrmContract.instanceManager.moveInstance(0,i);
	}
	var max = 5;
	if( max > form1.EXPORT.subfrm.subfrmContract.instanceManager.count)
	{
		for (var i = form1.EXPORT.subfrm.subfrmContract.instanceManager.count ; i < max ; i++){
			temp = null;
			barcodeString = barcodeString + (temp == null? '':temp) + '|';
			barcodeString = barcodeString + (temp == null? '':temp) + '|';
		}
	}
	
	temp = form1.EXPORT.subfrm.subPurchase.radDescrip.rawValue;	//1_39
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.subDocAtt.radDoc.rawValue;	//1_40
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.disbursement.drpCCurrency.rawValue;	//1_41
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strOthers;	//1_42
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
 	
 	temp = form1.EXPORT.subfrm.subfrmDebitComm.drpA_Currency.rawValue;	//1_43
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.subfrmDebitComm.drpF_Currency.rawValue;	//1_44
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.subfrmDebitComm.txtF_Account.rawValue;	//1_45
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.subfrmDebitComm.txtL_Account.rawValue;	//1_46
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = form1.EXPORT.subfrm.subfrmDebitComm.drpRe_Currency.rawValue;	//1_47
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = "06/2022 SIF SMART";	//1_48
	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	

	form1.EXPORT.subfrm.barcodeRecord.txtBarcode1.rawValue = barcodeString;
//	app.alert(form1.EXPORT.subfrm.barcodeRecord.txtBarcode1.rawValue);
	
	// 2nd barcode
	// initialize barcode unique id
	
	var temp2 = '';
	var barcodeString2 = '';
	
	var barcodeString2 = '2'+'|';//2_01
	
	temp2 = form1.EXPORT.subfrm.subfrmDebitComm.subOthers.txtOthers1.rawValue;	//2_02
	barcodeString2 = barcodeString2 + (temp2 == null? '':temp2) + '|'; 
	
	form1.EXPORT.subfrm.barcodeRecord.txtBarcode2.rawValue = barcodeString2;
//	app.alert(form1.EXPORT.subfrm.barcodeRecord.txtBarcode2.rawValue);		
		
}

function BGAbarcode()
{
	///////////////////barcode 1////////////////////////////////////
	
	//Expiry Date
	var strExpiryDate = null;
	if(form1.BGA.amendments.expiryDate.chkAmendExpiryDate.rawValue == "1" && form1.BGA.amendments.expiryDate.txtExpiryDate.rawValue != null)
		strExpiryDate = controlScript.dateFormatChangeMainPage(form1.BGA.amendments.expiryDate.txtExpiryDate);
	
	//Claim Expiry Date
	var strClaimExpiryDate = null;
	if(form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate.rawValue == "1" && form1.BGA.amendments.claimExpiryDate.txtClaimExpiryDate.rawValue != null)
		strClaimExpiryDate = controlScript.dateFormatChangeMainPage(form1.BGA.amendments.claimExpiryDate.txtClaimExpiryDate);
		
	var temp = '';
	var barcodeString = '';
	
	var barcodeString = '1'+'|';	//1_01
	
	temp = form1.BGA.BankAndRefNo.BankNo.txtBankCIFNo.rawValue;	//1_02
	barcodeString = barcodeString + (temp == null? '0000000':temp) + '|'; 
	
	temp = form1.BGA.BankAndRefNo.refNo.txtRefNo.rawValue;	//1_03
	barcodeString = barcodeString + (temp == null? '0':temp) + '|'; 
	
	if (form1.BGA.amendments.amount.chkAmendAmount.rawValue == "1")
	{
		temp = form1.BGA.amendments.amount.txtAmount.rawValue;	//1_04
		barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	}else
	{
		var barcodeString = barcodeString +  '0|';	}
	
	temp = strExpiryDate;	//1_05
 	barcodeString = barcodeString + (temp == null? '':temp) + '|';
	
	temp = strClaimExpiryDate;	//1_06
 	barcodeString = barcodeString + (temp == null? '1111-11-11':temp) + '|';
	
	if (form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod.rawValue == "1")
	{
		temp = form1.BGA.amendments.claimPeriod.txtClaimPeriod.rawValue;	//1_07
		barcodeString = barcodeString + (temp == null? '0':temp) + '|';
	}else
	{
		var barcodeString = barcodeString +  '0|';
	}
	
	if (form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod.rawValue == "1")
	{	
		temp = form1.BGA.amendments.claimPeriod.drpDayMonth.rawValue;	//1_08
		barcodeString = barcodeString + (temp == null? '':temp) + '|';
	}else
	{
		var barcodeString = barcodeString +  '|';
	}
	
 	temp = form1.BGA.we.txtAccNo.rawValue;	//1_09
	barcodeString = barcodeString + (temp == null? '':temp) + '|';

	if (form1.BGA.amendments.amount.chkAmendAmount.rawValue == "1")
	{
		temp = form1.BGA.amendments.amount.drpAmendAmount.rawValue;	//1_10
		barcodeString = barcodeString + (temp == null? '':temp) + '|';
	}else
	{
		var barcodeString = barcodeString +  '|';
	}
	
	form1.BGA.barcodeRecord.txtBarcode1.rawValue = barcodeString;
	//app.alert(form1.BGA.barcodeRecord.txtBarcode1.rawValue);
	
	// 2nd barcode to 4th barcode
	// initialize barcode unique id
	form1.BGA.barcodeRecord.txtBarcode2.rawValue = "2|";
	form1.BGA.barcodeRecord.txtBarcode3.rawValue = "3|";
	form1.BGA.barcodeRecord.txtBarcode4.rawValue = "4|";
	
	if (form1.BGA.amendments.amendText.text.chkAmendText.rawValue == "1" && form1.BGA.amendments.amendText.txtAmend.rawValue != null)
	{
		var valueFormat, barcodeString;			
		var valueCF = form1.BGA.amendments.amendText.txtAmend.rawValue + "\rAll other terms and conditions of the BG remain unchanged.";	
		///////////////////barcode 2////////////////////////////////////
		if (valueCF.length > 0) {
		
			valueFormat = controlScript.strChop(valueCF.substr(0,1000));
			barcodeString = form1.BGA.barcodeRecord.txtBarcode2.rawValue + (valueFormat == null? '':valueFormat);
			 
			form1.BGA.barcodeRecord.txtBarcode2.rawValue = barcodeString;
			//app.alert(form1.BGA.barcodeRecord.txtBarcode2.rawValue);	
		}
		///////////////////barcode 3////////////////////////////////////
		if (valueCF.length > 1000) {
			
			valueFormat = controlScript.strChop(valueCF.substr(1000,1000));
			barcodeString = form1.BGA.barcodeRecord.txtBarcode3.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BGA.barcodeRecord.txtBarcode3.rawValue = barcodeString;
					
		}
		///////////////////barcode 4////////////////////////////////////
		if (valueCF.length > 2000) {
		
			valueFormat = controlScript.strChop(valueCF.substr(2000,1000));
			barcodeString = form1.BGA.barcodeRecord.txtBarcode4.rawValue + (valueFormat == null? '':valueFormat); 
		
			form1.BGA.barcodeRecord.txtBarcode4.rawValue = barcodeString;
				
		}
												
	}
			
}

