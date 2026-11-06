// Event scripts for MainPage: 25 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.MainPage.BankCIFNo.txtBankCIFNo  ::  change =====
controlScript.forceNumberOnly();

// ===== form1.MainPage.subfrmBlankPage.Button4  ::  click =====
subfrmBlankPage.presence = "hidden";
subfrmMain.presence = "visible";

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[0].btnLC  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if(controlScript.setMandatoryBackColor() == 0)
{
	LC.presence = "visible";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
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
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[0].btnLCA  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if(controlScript.setMandatoryBackColor() == 0)
{
	LC_Amendment.presence = "visible";
	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
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
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[1].btnEBLC  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if (controlScript.setMandatoryBackColor() == 0)
{
	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence = "hidden";
	EBLC.presence = "visible";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
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
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);
	
	

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[1].btnOBC  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if(controlScript.setMandatoryBackColor() == 0)
{
	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "visible";
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
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[1].btnBE  ::  click =====
LC.presence = "hidden";
LCTermsAndConditions.presence = "hidden";
MainPage.presence ="hidden";
EBLC.presence = "hidden";
EBLCTermsAndConditions.presence = "hidden";
EBLCTermsAndConditions1.presence = "hidden";
OBC.presence = "hidden";
OBCTermsAndConditions.presence = "hidden";
BEGeneric.presence = "visible";
BEGeneric.subfieldsCheck.
BEOBC.presence = "hidden";
BEEBLC.presence = "hidden";
SBLC.presence = "hidden";
BG.presence = "hidden";
SBLCA.presence = "hidden";
EXPORT.presence = "hidden";
BGA.presence = "hidden";

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[2].btnDBRP  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if(controlScript.setMandatoryBackColor() == 0)
{
	DBRP.presence = "visible";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
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
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[2].btnEXPORT  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if (controlScript.setMandatoryBackColor() == 0)
{
	EXPORT.presence = "visible";
	SBLC.presence = "hidden";
	BG.presence = "hidden";
	SBLCA.presence = "hidden";
	BGA.presence = "hidden";
	DBRP.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "hidden";
	OBCTermsAndConditions.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
	
}
else
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[3].btnBG  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if(controlScript.setMandatoryBackColor() == 0)
{
	BG.presence = "visible";
	SBLC.presence = "hidden";
	SBLCA.presence = "hidden";
	EXPORT.presence = "hidden";
	BGA.presence = "hidden";
	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "hidden";
	OBCTermsAndConditions.presence = "hidden";
	BE.presence = "hidden";
	DBRP.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
}
else
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[3].btnSBLC  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if(controlScript.setMandatoryBackColor() == 0)
{
	SBLC.presence = "visible";
	BG.presence = "hidden";
	SBLCA.presence = "hidden";
	EXPORT.presence = "hidden";
	BGA.presence = "hidden";
	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "hidden";
	OBCTermsAndConditions.presence = "hidden";
	BE.presence = "hidden";
	DBRP.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
}
else
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[3].btnBGA  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if(controlScript.setMandatoryBackColor() == 0)
{
	BGA.presence = "visible";
	SBLCA.presence = "hidden";
	SBLC.presence = "hidden";
	BG.presence = "hidden";
	EXPORT.presence = "hidden";
	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "hidden";
	OBCTermsAndConditions.presence = "hidden";
	BE.presence = "hidden";
	DBRP.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
}
else
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.#subform[0].#subform[3].btnSBLCA  ::  click =====
controlScript.selectMandaotoryField();
controlScript.radioMandatoryCheck();
controlScript.setMandatoryBackColor();

if(controlScript.setMandatoryBackColor() == 0)
{
	SBLCA.presence = "visible";
	SBLC.presence = "hidden";
	BG.presence = "hidden";
	EXPORT.presence = "hidden";
	BGA.presence = "hidden";
	LC.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	MainPage.presence ="hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "hidden";
	OBCTermsAndConditions.presence = "hidden";
	BE.presence = "hidden";
	DBRP.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
}
else
	xfa.host.messageBox("" + errorMessage.msgMandatoryEmpty);

// ===== form1.MainPage.subfrmMain.Button3  ::  click =====
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
BGA.presence = "hidden";
EXPORT.presence = "hidden";

// ===== form1.MainPage.subfrmMain.Button3  ::  click =====
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
BGA.presence = "hidden";
EXPORT.presence = "hidden";

// ===== form1.MainPage.subfrmMain.txtLC  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtEBLC  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtOBC  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtDBRP  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtLCA  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtSBLC  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtSBLCA  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtBG  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtBGA  ::  ready ($form) =====
controlScript.currentDate( this );

// ===== form1.MainPage.subfrmMain.txtEXPORT  ::  ready ($form) =====
controlScript.currentDate( this );

