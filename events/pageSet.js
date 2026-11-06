// Event scripts for pageSet: 28 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.pageSet.Page1.#subform[0].txtLCDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{	
	form1.MainPage.subfrmMain.txtLC.rawValue = this.rawValue;
	form1.MainPage.subfrmMain.btnLC.execEvent("click");
}		


if (this.rawValue == null)
		controlScript.currentDate( this );

// ===== form1.pageSet.Page1.#subform[0].txtLCDate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtLC.rawValue;

// ===== form1.pageSet.Page1.#subform[0].Button1  ::  calculate =====
lblLCFoot.presence = "hidden";
if (LC.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "hidden";
	
	lblVertical.presence = "visible";
	lblLC.presence = "visible";
	lblLCA.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "visible";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "visible";
    Pages.presence = "visible";
		
	btnShowMainPage.presence = "visible";
	btnReset.presence = "visible";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "visible";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
	
	MainPage.presence = "hidden";
	lblFoot.presence = "hidden";
	lblLCFoot.presence = "visible";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence = "hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "visible";
	pLogo.presence = "visible";
	
	lblBankAddress.presence = "visible";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "visible";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";
	
	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "hidden";
	//txtMainCif.presence = "hidden";
	//txtOBCCif.presence = "hidden";
	//txtLCCif.presence = "visible";
	//txtLCACif.presence = "hidden";
	//txtDBRPCif.presence = "hidden";
}
else if (MainPage.presence == "visible")
{
	mainMenuHeader.presence = "visible";
	NewFormHeader.presence = "hidden";
	
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
	Pages.presence = "visible";
		
	btnShowMainPage.presence = "hidden";
	btnReset.presence = "hidden";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
		
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
	
	lblFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";	
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence="hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "hidden";
	pLogo.presence = "hidden";
	
	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";	
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";
//	LCTermsAndConditions.presence = "hidden";
//	LC.presence = "hidden";	

	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "hidden";
	//txtMainCif.presence = "visible";
	//txtOBCCif.presence = "hidden";
	//txtLCCif.presence = "hidden";
	//txtLCCif.presence = "hidden";
	//txtLCACif.presence = "hidden";
	//txtDBRPCif.presence = "hidden";
}
else if (EBLC.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "hidden";
	
	MainPage.presence ="hidden";
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "visible";
	lblBEGeneric.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "visible";
	Pages.presence = "visible";
		
	btnShowMainPage.presence = "visible";
	btnReset.presence = "visible";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "visible";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "visible";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
		
	lblFoot.presence = "hidden";
	lblEBLCFoot.presence = "visible";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence="hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "visible";
	pLogo.presence = "visible";
	
	lblBankAddress.presence = "visible";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "visible";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "visible";
	txtEBLC_BankUse.presence = "visible";	
	lblDBRP.presence = "hidden";
//	LCTermsAndConditions.presence = "hidden";
//	LC.presence = "hidden";

	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "visible";
	//txtMainCif.presence = "hidden";
	//txtOBCCif.presence = "hidden";
	//txtLCCif.presence = "hidden";
	//txtLCACif.presence = "hidden";
	//txtDBRPCif.presence = "hidden";
}

else if (OBC.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "hidden";
	
	MainPage.presence ="hidden";
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblOBC.presence = "visible";
	lblEBLC.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "visible";
	Pages.presence = "visible";
	
	lblFoot.presence = "visible";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence="hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "visible";
	pLogo.presence = "visible";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "visible";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
	
	lblBankAddress.presence = "visible";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "visible";

	btnShowMainPage.presence = "visible";
	btnReset.presence = "visible";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";	
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "visible";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";
	
	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "hidden";
	//txtMainCif.presence = "hidden";
	//txtOBCCif.presence = "visible";
	//txtLCCif.presence = "hidden";
	//txtLCACif.presence = "hidden";
	//txtDBRPCif.presence = "hidden";
}
else if (BEGeneric.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "hidden";
	
	MainPage.presence ="hidden";
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblOBC.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "visible";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
    Pages.presence = "hidden";
		
	lblFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence="hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "hidden";
	pLogo.presence = "visible";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
	
	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";

	btnShowMainPage.presence = "visible";
	btnReset.presence = "visible";
	btnSave.presence = "visible";
	btnPrint.presence = "visible";	
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";	

	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";	
	lblDBRP.presence = "hidden";
	
	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "hidden";
	//txtMainCif.presence = "hidden";
	//txtOBCCif.presence = "hidden";
	//txtLCCif.presence = "hidden";
	//txtLCACif.presence = "hidden";
	//txtDBRPCif.presence = "hidden";
}
else if (BEOBC.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "hidden";
	
	MainPage.presence ="hidden";
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblOBC.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "visible";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
	Pages.presence = "hidden";	
		
	lblFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";	
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence="hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "hidden";
	pLogo.presence = "visible";

	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
	
	btnShowMainPage.presence = "visible";
	btnReset.presence = "visible";
	btnSave.presence = "visible";
	btnPrint.presence = "visible";	
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	btnOBC.presence = "visible";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";	
	lblDBRP.presence = "hidden";
	
	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "hidden";
	//txtMainCif.presence = "hidden";
	//txtOBCCif.presence = "hidden";
	//txtLCCif.presence = "hidden";
	//txtLCACif.presence = "hidden";
	//txtDBRPCif.presence = "hidden";
}
else if (BEEBLC.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "hidden";
	
	MainPage.presence ="hidden";
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "visible";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
	Pages.presence = "hidden";	
		
	lblFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence="hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "hidden";
	pLogo.presence = "visible";

	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";	
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
	
	btnShowMainPage.presence = "visible";
	btnReset.presence = "visible";
	btnSave.presence = "visible";
	btnPrint.presence = "visible";	
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";	

	btnOBC.presence = "hidden";
	btnEBLC.presence = "visible";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";	
	lblDBRP.presence = "hidden";
	
	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "hidden";
	//txtMainCif.presence = "hidden";
	//txtOBCCif.presence = "hidden";
	//txtLCCif.presence = "hidden";
	//txtLCACif.presence = "hidden";
	//txtDBRPCif.presence = "hidden";
}
else if (DBRP.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "hidden";
	
	lblVertical.presence = "hidden";
	lblDBRP.presence = "visible";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "visible";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "visible";
    Pages.presence = "visible";
		
	btnShowMainPage.presence = "visible";
	btnReset.presence = "visible";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "visible";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
	
	MainPage.presence ="hidden";
	lblFoot.presence = "hidden";
	lblLCFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";
	lblLCAFoot.presence="hidden";
	lblDPRPFoot.presence = "visible";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "visible";
	pLogo.presence = "visible";
	
	lblBankAddress.presence = "visible";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "visible";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	
	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "hidden";
	//txtMainCif.presence = "hidden";
	//txtOBCCif.presence = "hidden";
	//txtLCCif.presence = "hidden";
	//txtLCACif.presence = "hidden";
	//txtDBRPCif.presence = "visible";
	
}
else if (LC_Amendment.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "hidden";
	
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "visible";
	lblDBRP.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "visible";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "visible";
    Pages.presence = "visible";
		
	btnShowMainPage.presence = "visible";
	btnReset.presence = "visible";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "visible";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "hidden";
	
	MainPage.presence ="hidden";
	lblFoot.presence = "hidden";
	//lblLCFoot.presence = "visible";
	lblLCAFoot.presence="visible";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence= "hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
//	txtDate.presence = "visible";
	pLogo.presence = "visible";
	
	lblBankAddress.presence = "visible";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "visible";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";
	
	//txtAPFCif.presence = "hidden";
	//txtEBLCCif.presence = "hidden";
	//txtMainCif.presence = "hidden";
	//txtOBCCif.presence = "hidden";
	//txtLCCif.presence = "hidden";
	//txtLCACif.presence = "visible";
	//txtDBRPCif.presence = "hidden";
}
else if (SBLC.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "visible";
	NewFormHeader.lblBG.presence = "hidden";
	NewFormHeader.lblSBLCA.presence = "hidden";
	NewFormHeader.lblEXPORT.presence = "hidden";
	NewFormHeader.lblBGA.presence = "hidden";
	
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
    Pages.presence = "visible";
		
	btnShowMainPage.presence = "hidden";
	btnReset.presence = "hidden";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "visible";
//	txtBGDate.presence = "hidden";
	
	MainPage.presence = "hidden";
	lblFoot.presence = "hidden";
	lblLCFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence= "hidden";
	lblSBLCFoot.presence = "visible";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
	pLogo.presence = "hidden";
	
	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";

}

else if (BG.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "visible";
	NewFormHeader.lblSBLC.presence = "hidden";
	NewFormHeader.lblSBLCA.presence = "hidden";
	NewFormHeader.lblEXPORT.presence = "hidden";
	NewFormHeader.lblBGA.presence = "hidden";
	
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
    Pages.presence = "visible";
		
	btnShowMainPage.presence = "hidden";
	btnReset.presence = "hidden";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "visible";
	
	MainPage.presence = "hidden";
	lblFoot.presence = "hidden";
	lblLCFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence= "hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "visible";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "hidden";
	
	pLogo.presence = "hidden";
	
	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";

}

else if (SBLCA.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "visible";
	NewFormHeader.lblSBLC.presence = "hidden";
	NewFormHeader.lblBG.presence = "hidden";
	NewFormHeader.lblEXPORT.presence = "hidden";
	NewFormHeader.lblBGA.presence = "hidden";
	
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
    Pages.presence = "visible";
		
	btnShowMainPage.presence = "hidden";
	btnReset.presence = "hidden";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "visible";
	
	MainPage.presence = "hidden";
	lblFoot.presence = "hidden";
	lblLCFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence= "hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "visible";
	lblEXPORTFoot.presence = "hidden";
	
	pLogo.presence = "hidden";
	
	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";

}

else if (EXPORT.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "visible";
	NewFormHeader.lblSBLC.presence = "hidden";
	NewFormHeader.lblBG.presence = "hidden";
	NewFormHeader.lblSBLCA.presence = "hidden";
	NewFormHeader.lblBGA.presence = "hidden";
	
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
    Pages.presence = "visible";
		
	btnShowMainPage.presence = "hidden";
	btnReset.presence = "hidden";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "visible";
	
	MainPage.presence = "hidden";
	lblFoot.presence = "hidden";
	lblLCFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence= "hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "hidden";
	lblEXPORTFoot.presence = "visible";
	
	pLogo.presence = "hidden";
	
	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";

}

else if (BGA.presence == "visible")
{
	mainMenuHeader.presence = "hidden";
	NewFormHeader.presence = "visible";
	NewFormHeader.lblSBLC.presence = "hidden";
	NewFormHeader.lblBG.presence = "hidden";
	NewFormHeader.lblEXPORT.presence = "hidden";
	NewFormHeader.lblSBLCA.presence = "hidden";
	
	lblVertical.presence = "hidden";
	lblLC.presence = "hidden";
	lblLCA.presence = "hidden";
	lblDBRP.presence = "hidden";
	lblOBC.presence = "hidden";
	lblEBLC.presence = "hidden";
	lblBEGeneric.presence = "hidden";
	lblBEOBC.presence = "hidden";
	lblBEEBLC.presence = "hidden";
	lblOriginalCopy.presence = "hidden";
	lblDuplicate.presence = "hidden";
	lblMandatory.presence = "hidden";
    Pages.presence = "visible";
		
	btnShowMainPage.presence = "hidden";
	btnReset.presence = "hidden";
	btnSave.presence = "hidden";
	btnPrint.presence = "hidden";
	btnBEEBLC.presence = "hidden";
	btnBEOBC.presence = "hidden";
	
	txtLCDate.presence = "hidden";
	txtOBCDate.presence = "hidden";
	txtEBLCDate.presence = "hidden";
	txtDBRPDate.presence = "hidden";
	txtLCADate.presence = "hidden";
//	txtSBLCDate.presence = "hidden";
//	txtBGDate.presence = "visible";
	
	MainPage.presence = "hidden";
	lblFoot.presence = "hidden";
	lblLCFoot.presence = "hidden";
	lblEBLCFoot.presence = "hidden";
	lblDPRPFoot.presence = "hidden";
	lblLCAFoot.presence= "hidden";
	lblSBLCFoot.presence = "hidden";
	lblBGFoot.presence = "hidden";
	lblSBLCAFoot.presence = "visible";
	lblEXPORTFoot.presence = "hidden";
	
	pLogo.presence = "hidden";
	
	lblBankAddress.presence = "hidden";
	lblBankAddressFull.presence = "hidden";
	lblBankName.presence = "hidden";
	
	btnOBC.presence = "hidden";
	btnEBLC.presence = "hidden";
	lblEBLC_BankUse.presence = "hidden";
	txtEBLC_BankUse.presence = "hidden";
	lblDBRP.presence = "hidden";

}

// ===== form1.pageSet.Page1.#subform[0].btnShowMainPage  ::  click =====
LC.presence = "hidden";
LC_Amendment.presence = "hidden";
LCTermsAndConditions.presence = "hidden";
MainPage.presence ="visible";
EBLC.presence = "hidden";
EBLCTermsAndConditions.presence = "hidden";
EBLCTermsAndConditions1.presence = "hidden";
OBC.presence = "hidden";
OBCTermsAndConditions.presence = "hidden"
BEOBC.presence = "hidden";
BEEBLC.presence = "hidden";
BEGeneric.presence = "hidden";
DBRP.presence = "hidden";
//SBLC.presence = "hidden";
//BG.presence = "hidden";

xfa.host.currentPage = 0;

// ===== form1.pageSet.Page1.#subform[0].CurrentPage  ::  ready ($layout) =====
this.rawValue = xfa.layout.page(this);

// ===== form1.pageSet.Page1.#subform[0].PageCount  ::  ready ($layout) =====
this.rawValue = xfa.layout.pageCount();

// ===== form1.pageSet.Page1.#subform[0].btnReset  ::  click =====
if(xfa.host.messageBox("Are you sure you want to reset the form?","",3,1) == 1)
{
	//var tempValue = form1.variables.checkSumValue.value;

//	xfa.host.resetData("form1.LC");
	
	if (LC.presence == "visible")
	{
		checkSumValue.value = "";
		xfa.host.resetData("form1.LC");
	}
	else if (EBLC.presence == "visible")
	{
		form1.MainPage.subfrmMain.txtEBLCCif.rawValue = "";
		checkSumValueEBLC.value = "";
		xfa.host.resetData("form1.EBLC");
	}
	else if (OBC.presence == "visible")
	{
		checkSumValueOBC.value = "";
		xfa.host.resetData("form1.OBC");
	}
	else if (BEOBC.presence == "visible")
	{
		checkSumValueBEOBC.value = "";
		xfa.host.resetData("form1.BEOBC");
	}
	else if (BEEBLC.presence == "visible")
	{
		checkSumValueBEEBLC.value = "";
		xfa.host.resetData("form1.BEEBLC");
		form1.BEEBLC.subfrmSecond.txtValue1.rawValue = "";
	}
	else if (BEGeneric.presence == "visible")
	{
		checkSumValueBEGeneric.value = "";
		xfa.host.resetData("form1.BEGeneric");
	}
	else if (LC_Amendment.presence == "visible")
	{
		checkSumValueLCAGeneric.value = "";
		xfa.host.resetData("form1.LC_Amendment");
	}
	else if (DBRP.presence == "visible")
	{
		checkSumValueLCAGeneric.value = "";
		xfa.host.resetData("form1.DBRP");
	}
	/*
	else if (SBLC.presence == "visible")
	{
		checkSumValueSBLC.value = "";
		xfa.host.resetData("form1.SBLC");
	}
	else if (BG.presence == "visible")
	{
		checkSumValueBG.value = "";
		xfa.host.resetData("form1.BG");
	}
	*/
	
	controlScript.selectMandaotoryField();

	controlScript.resetMandatoryBackColor();
	controlScript.radioColorRemoveReset();

	//form1.variables.checkSumValue.value = tempValue;
	form1.variables.checkSumValue.value = "";

	controlScript.resetInit();
}

// ===== form1.pageSet.Page1.#subform[0].btnSave  ::  click =====
app.execMenuItem("SaveAs");	

// ===== form1.pageSet.Page1.#subform[0].btnPrint  ::  click =====
	form1.MainPage.subfrmMain.txtPrint.rawValue = 1;

//form1.variables.LCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtLCDate);
//form1.variables.OBCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtOBCDate);
//form1.variables.EBLCDateBarcode.value = controlScript.dateFormatChangeMainPage(form1.pageSet.Page1.txtEBLCDate);


//barcodeScript.LCbarcode();
//controlScript.selectMandaotoryField();
//controlScript.radioMandatoryCheck();
//controlScript.setMandatoryBackColor();

	//		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 0, 0, 0);
	

//controlScript.selectMandaotoryField();
//controlScript.radioMandatoryCheck();
//controlScript.setMandatoryBackColor();
/*
if  (controlScript.setMandatoryBackColor() == 0)
			xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 0, 0, 0);
else
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
*/
//checkSumValue.value = controlScript.checkSum();

if(BEOBC.presence == "visible")
{
if   (controlScript.mandatoryCheckBE(BEOBC.subfrmFirst) != 0)
{
	var retMsgBox = xfa.host.messageBox("Mandatory field(s) are not filled in. Are you sure you want to print?","Validation",1,2);
	if (retMsgBox == 4)
	{
		fieldsCheck.checkBEOBCMandatory();
	
		form1.variables.checkSumValueBEOBC.value = controlScript.checkSum();
		txtCheckSum.rawValue = checkSumValueBEOBC.value;
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	
	}
	if (retMsgBox == 3)
	{
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
	}
}
if   (controlScript.mandatoryCheckBE(BEOBC.subfrmFirst) == 0)
	{
		BEOBC.subfieldsCheck.presence = "hidden";
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	
	}	
/*	if  (controlScript.mandatoryCheckBE(BEOBC.subfrmFirst) == 0)
	{
				form1.variables.checkSumValueBEOBC.value = controlScript.checkSum();
				txtCheckSum.rawValue = checkSumValueBEOBC.value;
				xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	}
	else
			xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
*/
}
else if(BEEBLC.presence == "visible")
{
if  (controlScript.mandatoryCheckBE(BEEBLC.subfrmFirst) != 0)
{
		BEEBLC.subfieldsCheck.presence = "visible";
	var retMsgBox = xfa.host.messageBox("Mandatory field(s) are not filled in. Are you sure you want to print?","Validation",1,2);
	if (retMsgBox == 4)
	{
		fieldsCheck.checkBEEBLCMandatory();
	
		form1.variables.checkSumValueBEEBLC.value = controlScript.checkSum();
		txtCheckSum.rawValue = checkSumValueBEEBLC.value;
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	
	}
	if (retMsgBox == 3)
	{
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
	}
}
if  (controlScript.mandatoryCheckBE(BEEBLC.subfrmFirst) == 0)
	{
		BEEBLC.subfieldsCheck.presence = "hidden";
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	
	}	
	/*if  (controlScript.mandatoryCheckBE(BEEBLC.subfrmFirst) == 0)
	{
				form1.variables.checkSumValueBEEBLC.value = controlScript.checkSum();
				txtCheckSum.rawValue = checkSumValueBEEBLC.value;
				xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	}
	else
			xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);*/
}
else if(BEGeneric.presence == "visible")
{	
if (controlScript.mandatoryCheckBE(BEGeneric.subfrmFirst) != 0)
{
	var retMsgBox = xfa.host.messageBox("Mandatory field(s) are not filled in. Are you sure you want to print?","Validation",1,2);
	if (retMsgBox == 4)
	{
		fieldsCheck.checkBEGenericMandatory();
	
		form1.variables.checkSumValueBEGeneric.value = controlScript.checkSum();
		txtCheckSum.rawValue = checkSumValueBEGeneric.value;
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	
	}
	if (retMsgBox == 3)
	{
		xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
	}
}
if  (controlScript.mandatoryCheckBE(BEGeneric.subfrmFirst) == 0)
	{
		BEGeneric.subfieldsCheck.presence = "hidden";
		xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	
	}	
	
/*	if  (controlScript.mandatoryCheckBE(BEGeneric.subfrmFirst) == 0)
	{
				form1.variables.checkSumValueBEGeneric.value = controlScript.checkSum();
				txtCheckSum.rawValue = checkSumValueBEGeneric.value;
				xfa.host.print(1, "0", (xfa.host.numPages -1).toString(), 0, 1, 1, 0, 0);
	}
	else
			xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
*/
}

	form1.MainPage.subfrmMain.txtPrint.rawValue = 0;

// ===== form1.pageSet.Page1.#subform[0].btnBEEBLC  ::  click =====
LC.presence = "hidden";
LCTermsAndConditions.presence = "hidden";
MainPage.presence ="hidden";
EBLC.presence = "hidden";
EBLCTermsAndConditions.presence = "hidden";
EBLCTermsAndConditions1.presence = "hidden";
OBC.presence = "hidden";
OBCTermsAndConditions.presence = "hidden";
BEGeneric.presence = "hidden";
BEOBC.presence = "hidden";
BEEBLC.presence = "visible";
SBLC.presence = "hidden";
BG.presence = "hidden";
SBLCA.presence = "hidden";
EXPORT.presence = "hidden";
BGA.presence = "hidden";

controlScript.BEMapping_EBLC();

// ===== form1.pageSet.Page1.#subform[0].btnBEOBC  ::  click =====
LC.presence = "hidden";
LCTermsAndConditions.presence = "hidden";
MainPage.presence ="hidden";
EBLC.presence = "hidden";
EBLCTermsAndConditions.presence = "hidden";
EBLCTermsAndConditions1.presence = "hidden";
OBC.presence = "hidden";
OBCTermsAndConditions.presence = "hidden";
BEGeneric.presence = "hidden";
BEOBC.presence = "visible";
BEEBLC.presence = "hidden";
SBLC.presence = "hidden";
BG.presence = "hidden";
SBLCA.presence = "hidden";
EXPORT.presence = "hidden";
BGA.presence = "hidden";

controlScript.BEMapping_OBC();

// ===== form1.pageSet.Page1.#subform[0].txtOBCDate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtOBC.rawValue;
controlScript.accessChangeBE( BEOBC.subfrmFirst.txtDate, "readOnly" );
controlScript.accessChangeBE( BEOBC.subfrmSecond.txtDate, "readOnly" );

form1.BEOBC.subfrmFirst.txtDate.rawValue = this.rawValue;
form1.BEOBC.subfrmSecond.txtDate.rawValue = this.rawValue;

// ===== form1.pageSet.Page1.#subform[0].txtOBCDate  ::  exit =====
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

// ===== form1.pageSet.Page1.#subform[0].txtEBLCDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{
	form1.MainPage.subfrmMain.txtEBLC.rawValue = this.rawValue;

	//controlScript.accessChange( form1.BEEBLC.subfrmFirst.txtDate, "readOnly" );
	controlScript.accessChangeBE( form1.BEEBLC.subfrmSecond.txtDate, "readOnly" );
	
 	form1.BEEBLC.subfrmFirst.txtDate.rawValue = this.rawValue;
 	form1.BEEBLC.subfrmSecond.txtDate.rawValue = this.rawValue;
}




if (this.rawValue == null)
		controlScript.currentDate( this );
		

// ===== form1.pageSet.Page1.#subform[0].txtEBLCDate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtEBLC.rawValue;
	
form1.BEEBLC.subfrmFirst.txtDate.rawValue = this.rawValue;
form1.BEEBLC.subfrmSecond.txtDate.rawValue = this.rawValue;

// ===== form1.pageSet.Page1.#subform[0].btnEBLC  ::  click =====
//form1.MainPage.subfrmMain.btnEBLC.execEvent("click");
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();


	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence = "hidden";
	EBLC.presence = "visible";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "hidden";
	OBCTermsAndConditions.presence = "hidden";
	//BE.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
	SBLC.presence = "hidden";
	BG.presence = "hidden";
	SBLCA.presence = "hidden";
	EXPORT.presence = "hidden";
	BGA.presence = "hidden";

// ===== form1.pageSet.Page1.#subform[0].btnOBC  ::  click =====
//form1.MainPage.subfrmMain.btnOBC.execEvent("click");
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();


	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "visible";
	OBCTermsAndConditions.presence = "hidden";
	//BE.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
	SBLC.presence = "hidden";
	BG.presence = "hidden";
	SBLCA.presence = "hidden";
	EXPORT.presence = "hidden";
	BGA.presence = "hidden";

// ===== form1.pageSet.Page1.#subform[0].txtCheckSum  ::  ready ($layout) =====
controlScript.showCheckSumValue(this);
//this.rawValue = form1.variables.checkSumValue.value;

// ===== form1.pageSet.Page1.#subform[0].txtDBRPDate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{	
	form1.MainPage.subfrmMain.txtDBRP.rawValue = this.rawValue;
}		

if (this.rawValue == null)
		controlScript.currentDate( this );

// ===== form1.pageSet.Page1.#subform[0].txtDBRPDate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtDBRP.rawValue;

// ===== form1.pageSet.Page1.#subform[0].txtLCADate  ::  exit =====
if(!controlScript.dateFormatChange(this))
{	
	form1.MainPage.subfrmMain.txtLCA.rawValue = this.rawValue;
}		
if (this.rawValue == null)
		controlScript.currentDate( this );

// ===== form1.pageSet.Page1.#subform[0].txtLCADate  ::  initialize =====
this.rawValue = form1.MainPage.subfrmMain.txtLCA.rawValue;

// ===== form1.pageSet.Page1.#subform[0].NewFormHeader.btnShowMainPage  ::  click =====
LC.presence = "hidden";
LC_Amendment.presence = "hidden";
LCTermsAndConditions.presence = "hidden";
MainPage.presence = "visible";
EBLC.presence = "hidden";
EBLCTermsAndConditions.presence = "hidden";
EBLCTermsAndConditions1.presence = "hidden";
OBC.presence = "hidden";
OBCTermsAndConditions.presence = "hidden"
BEOBC.presence = "hidden";
BEEBLC.presence = "hidden";
BEGeneric.presence = "hidden";
DBRP.presence = "hidden";
SBLC.presence = "hidden";
BG.presence = "hidden";
SBLCA.presence = "hidden";
EXPORT.presence = "hidden";
BGA.presence = "hidden";

xfa.host.currentPage = 0;

// ===== form1.pageSet.Page1.#subform[0].NewFormHeader.btnReset  ::  click =====
if(xfa.host.messageBox("Are you sure you want to reset the form?","",3,1) == 1)
{
	if (SBLC.presence == "visible")
	{
		checkSumValueSBLC.value = "";
		xfa.host.resetData("form1.SBLC");
	}
	else if (BG.presence == "visible")
	{
		checkSumValueBG.value = "";
		xfa.host.resetData("form1.BG");
	}
	else if (SBLCA.presence == "visible")
	{
		checkSumValueSBLCA.value = "";
		xfa.host.resetData("form1.SBLCA");
	}
	else if (EXPORT.presence == "visible")
	{
		checkSumValueEXPORT.value = "";
		xfa.host.resetData("form1.EXPORT");
	}
	else if (BGA.presence == "visible")
	{
		checkSumValueBGA.value = "";
		xfa.host.resetData("form1.BGA");
	}
	
	controlScript.selectMandaotoryField();

	controlScript.resetMandatoryBackColor();
	controlScript.radioColorRemoveReset();

	//form1.variables.checkSumValue.value = tempValue;
	form1.variables.checkSumValue.value = "";

	controlScript.resetInit();
}

// ===== form1.pageSet.Page1.#subform[0]  ::  initialize =====
this.presence = "visible";

// ===== form1.pageSet.Page2.CurrentPage  ::  ready ($layout) =====
this.rawValue = xfa.layout.page(this);

// ===== form1.pageSet.Page2.PageCount  ::  ready ($layout) =====
this.rawValue = xfa.layout.pageCount();

// ===== form1.pageSet.Page2.txtCheckSum  ::  ready ($layout) =====
//this.rawValue = form1.variables.checkSumValue.value;

controlScript.showCheckSumValue(this);

