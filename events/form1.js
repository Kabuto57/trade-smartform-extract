// Event scripts for form1: 3 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1  ::  initialize =====
controlScript.init();

// ===== form1  ::  prePrint ($host) =====
 if(form1.MainPage.subfrmMain.txtPrint.rawValue == 0)
 {
	xfa.host.messageBox("Please DO NOT use the print feature from File menu or toolbar. \nPlease use the 'Confirm & Print Form' button beside the barcode in the form instead.");
	MainPage.presence = "visible";
	MainPage.subfrmBlankPage.presence = "visible";
	MainPage.subfrmMain.presence = "hidden";
	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	OBC.presence = "hidden";
	OBCTermsAndConditions.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
	SBLC.presence = "hidden";
	BG.presence = "hidden";
	SBLCA.presence = "hidden";
	EXPORT.presence = "hidden";
	BGA.presence = "hidden";
 }
else
{
	form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

	//form1.variables.checkSumValue.value = controlScript.checkSum();


	if(LC.presence == "visible")
	{			
			form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
			form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
			form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);

			barcodeScript.LCbarcode();
			controlScript.selectMandaotoryField();
			controlScript.radioMandatoryCheck();		
			controlScript.setMandatoryBackColor();
			

			if(form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.validate.nullTest != "error")
			{
					form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkFaxed.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;
					form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkMailed.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;
					form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkCouriered.ui.oneOfChild.border.fill.color.value = controlScript.normalColor;
			}		  
			
	}
	else if(EBLC.presence == "visible")
	{						
			form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
			form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
			form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);

			barcodeScript.EBLCbarcode();
			controlScript.selectMandaotoryField();
			controlScript.radioMandatoryCheck();
			controlScript.setMandatoryBackColor();
		

			xfa.host.messageBox("Please remember to click on the BE '(EBLC mapping)' button at the top of the form if you would like to generate a Bill of Exchange with EBLC mapping. \n\n" +
			                    "Please remember to click on the ‘Bill of Exchange (Generic – free format)’ button on the Main Menu page if you would like to generate a Bill of Exchange with additional information.","",3,0);

	}
	else if(OBC.presence == "visible")
	{
						
			form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
			form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
			form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);

			barcodeScript.OBCbarcode();
			controlScript.selectMandaotoryField();
			controlScript.radioMandatoryCheck();
			controlScript.setMandatoryBackColor();
		
			xfa.host.messageBox("Please remember to click on the ‘BE (OBC mapping)’ button at the top of the form if you would like to generate a Bill of Exchange with OBC mapping. If you have additional information to be included – enter at ‘value received’ field after the defaulted value of ‘As per invoice’.","",3,0);

	}
}

 	

// ===== form1  ::  ready ($form) =====
controlScript.versionCheck();

