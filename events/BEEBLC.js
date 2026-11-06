// Event scripts for BEEBLC: 67 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.BEEBLC.subfrmFirst.txtNo  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtNo  ::  change =====
controlScript.changeUpper();
controlScript.specialCharacterCheck();

// ===== form1.BEEBLC.subfrmFirst.txtDate  ::  exit =====
controlScript.exchangeMap(this);
subfrmSecond.txtDate.rawValue = this.rawValue;
//subfrmSecond.txtFor2.rawValue = this.rawValue;

// ===== form1.BEEBLC.subfrmFirst.txtDate  ::  ready ($form) =====
controlScript.currentDate( this );
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtDate  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtExchange  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

if(drpCurrency.rawValue != null && txtExchange.rawValue != null)
{
	var strAmount = currencyConvertor.toWords(txtExchange.formattedValue, drpCurrency.rawValue);
		
	var strFill1 = currencyConvertor.massageString(strAmount, form1.BEEBLC.subfrmFirst.Dummy1.somExpression);
	
	var strFill2 = currencyConvertor.cutString(strFill1, strAmount);
	strFill2 = currencyConvertor.massageString(strFill2, form1.BEEBLC.subfrmFirst.Dummy2.somExpression);
	
	var strFill3 = currencyConvertor.cutString(strFill1 + strFill2, strAmount);
	strFill3 = currencyConvertor.massageString(strFill3, form1.BEEBLC.subfrmFirst.Dummy2.somExpression);
			
	subfrmSecond.txtSum1.rawValue = subfrmFirst.txtSum1.rawValue = strFill1;
	subfrmSecond.txtSum2.rawValue = subfrmFirst.txtSum2.rawValue = strFill2;
	subfrmSecond.txtSum3.rawValue = subfrmFirst.txtSum3.rawValue = strFill3;
}
else
{
	subfrmFirst.txtSum1.rawValue = null;
	subfrmFirst.txtSum2.rawValue = null;
	subfrmFirst.txtSum3.rawValue = null;
	subfrmSecond.txtSum1.rawValue = null;
	subfrmSecond.txtSum2.rawValue = null;
	subfrmSecond.txtSum3.rawValue = null;
}
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtExchange  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtAt  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtAt  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtSum1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtSum1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.Dummy1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtSum2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtSum2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtSum3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtSum3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.Dummy2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtTo1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtTo1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtTo2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtTo2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtTo3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtTo3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtSignature1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtDocumentary  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtDocumentary  ::  change =====
controlScript.changeUpper();
controlScript.specialCharacterCheck();

// ===== form1.BEEBLC.subfrmFirst.txtSignature2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtTo4  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtTo4  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtFor1  ::  exit =====
controlScript.exchangeMap(this);
txtFor2.rawValue = this.rawValue;
subfrmSecond.txtFor1.rawValue = this.rawValue;
subfrmSecond.txtFor2.rawValue = this.rawValue;

// ===== form1.BEEBLC.subfrmFirst.Dummy3  ::  exit =====
if ((form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue != null) || (form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue != null))
{

	//controlScript.accessChange( form1.BEEBLC.subfrmFirst.txtValue1, "readOnly" );
	//controlScript.accessChange( form1.BEEBLC.subfrmFirst.txtValue2, "readOnly" );
	//controlScript.accessChange( form1.BEEBLC.subfrmFirst.txtValue3, "readOnly" );

	var strName;
	if (form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue == null)
			strName = form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue;				
	else if (form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue == null)
			strName = form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue;	
	else
			strName = form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue + " " + form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue;
		
	var strFill1 = currencyConvertor.massageString(strName, form1.BEEBLC.subfrmFirst.Dummy3.somExpression);
	
	var strFill2 = currencyConvertor.cutString(strFill1, strName);
	strFill2 = currencyConvertor.massageString(strFill2, form1.BEEBLC.subfrmFirst.Dummy4.somExpression);
	
	var strFill3 = currencyConvertor.cutString(strFill1 + strFill2, strName);
	strFill3 = currencyConvertor.massageString(strFill3, form1.BEEBLC.subfrmFirst.Dummy4.somExpression);
		
	form1.BEEBLC.subfrmSecond.txtValue1.rawValue = form1.BEEBLC.subfrmFirst.txtValue1.rawValue = strFill1;
	form1.BEEBLC.subfrmSecond.txtValue2.rawValue = form1.BEEBLC.subfrmFirst.txtValue2.rawValue = strFill2;
	form1.BEEBLC.subfrmSecond.txtValue3.rawValue = form1.BEEBLC.subfrmFirst.txtValue3.rawValue = strFill3;
}

controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.Dummy3  ::  change =====
controlScript.checkMaxLength_BE(txtValue1.rawValue, txtValue2.rawValue, txtValue3.rawValue, 1);

// ===== form1.BEEBLC.subfrmFirst.txtValue2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtValue2  ::  change =====
controlScript.changeUpper();
if(txtValue1.rawValue == null)
	xfa.event.change = "";

controlScript.checkMaxLength_BE(txtValue1.rawValue, txtValue2.rawValue, txtValue3.rawValue, 2);

// ===== form1.BEEBLC.subfrmFirst.txtValue3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtValue3  ::  change =====
controlScript.changeUpper();
if(txtValue1.rawValue == null || txtValue2.rawValue == null)
	xfa.event.change = "";

controlScript.checkMaxLength_BE(txtValue1.rawValue, txtValue2.rawValue, txtValue3.rawValue, 3);

// ===== form1.BEEBLC.subfrmFirst.Dummy4  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.Dummy4  ::  change =====
if(txtValue1.rawValue == null || txtValue2.rawValue == null)
	xfa.event.change = "";

controlScript.checkMaxLength_BE(txtValue1.rawValue, txtValue2.rawValue, txtValue3.rawValue, 3);

// ===== form1.BEEBLC.subfrmFirst.txtDated  ::  exit =====
if(!controlScript.dateFormatChange(this))
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtDated  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmFirst.txtFor2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BEEBLC.subfrmFirst.drpCurrency  ::  exit =====
if((this.rawValue == "THB")||(this.rawValue == "JPY") || (this.rawValue == "TRY"))
{
	txtExchange.resolveNode("value.#decimal").leadDigits = "12";
	txtExchange.resolveNode("value.#decimal").fracDigits = "0";
	txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
}
else
{
	txtExchange.resolveNode("value.#decimal").leadDigits = "12";
	txtExchange.resolveNode("value.#decimal").fracDigits = "2";
	txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
}

controlScript.exchangeMap(this);
subfrmSecond.drpCurrency.execEvent("exit");


if(drpCurrency.rawValue != null && txtExchange.rawValue != null)
{
	var strAmount = currencyConvertor.toWords(txtExchange.formattedValue, drpCurrency.rawValue);
		
	var strFill1 = currencyConvertor.massageString(strAmount, form1.BEEBLC.subfrmFirst.Dummy1.somExpression);
	
	var strFill2 = currencyConvertor.cutString(strFill1, strAmount);
	strFill2 = currencyConvertor.massageString(strFill2, form1.BEEBLC.subfrmFirst.Dummy2.somExpression);
	
	var strFill3 = currencyConvertor.cutString(strFill1 + strFill2, strAmount);
	strFill3 = currencyConvertor.massageString(strFill3, form1.BEEBLC.subfrmFirst.Dummy2.somExpression);
			
	subfrmSecond.txtSum1.rawValue = subfrmFirst.txtSum1.rawValue = strFill1;
	subfrmSecond.txtSum2.rawValue = subfrmFirst.txtSum2.rawValue = strFill2;
	subfrmSecond.txtSum3.rawValue = subfrmFirst.txtSum3.rawValue = strFill3;
}
else
{
	subfrmFirst.txtSum1.rawValue = null;
	subfrmFirst.txtSum2.rawValue = null;
	subfrmFirst.txtSum3.rawValue = null;
	subfrmSecond.txtSum1.rawValue = null;
	subfrmSecond.txtSum2.rawValue = null;
	subfrmSecond.txtSum3.rawValue = null;
}

// ===== form1.BEEBLC.subfrmFirst.txtValue1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEEBLC.subfrmFirst.txtValue1  ::  change =====
controlScript.changeUpper();
//controlScript.checkMaxLength_BE(txtValue1.rawValue, txtValue2.rawValue, txtValue3.rawValue, 1);

// ===== form1.BEEBLC.subfrmSecond.txtNo  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtDate  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtExchange  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtAt  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtSum1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtSum2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtSum3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtTo1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtTo2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtTo3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtSignature1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtSignature2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtValue1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtValue2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtValue3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtDated  ::  exit =====
 controlScript.dateFormatChange(this);

// ===== form1.BEEBLC.subfrmSecond.txtDated  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtDocumentary  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.txtTo4  ::  change =====
controlScript.changeUpper();

// ===== form1.BEEBLC.subfrmSecond.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BEEBLC.subfrmSecond.drpCurrency  ::  exit =====
if((this.rawValue == "THB")||(this.rawValue == "JPY") || (this.rawValue == "TRY"))
{
	txtExchange.resolveNode("value.#decimal").leadDigits = "12";
	txtExchange.resolveNode("value.#decimal").fracDigits = "0";
	txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
}
else
{
	txtExchange.resolveNode("value.#decimal").leadDigits = "12";
	txtExchange.resolveNode("value.#decimal").fracDigits = "2";
	txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
}

// ===== form1.BEEBLC  ::  ready ($form) =====
if (form1.BEEBLC.subfrmFirst.drpCurrency.rawValue != null)
{
	if((form1.BEEBLC.subfrmFirst.drpCurrency.rawValue == "THB")||(form1.BEEBLC.subfrmFirst.drpCurrency.rawValue == "JPY") || (form1.BEEBLC.subfrmFirst.drpCurrency.rawValue == "TRY"))
	{
		form1.BEEBLC.subfrmFirst.txtExchange.resolveNode("value.#decimal").leadDigits = "12";
		form1.BEEBLC.subfrmFirst.txtExchange.resolveNode("value.#decimal").fracDigits = "0";
		form1.BEEBLC.subfrmFirst.txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
	}
	else
	{
		form1.BEEBLC.subfrmFirst.txtExchange.resolveNode("value.#decimal").leadDigits = "12";
		form1.BEEBLC.subfrmFirst.txtExchange.resolveNode("value.#decimal").fracDigits = "2";
		form1.BEEBLC.subfrmFirst.txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
	}
}

controlScript.exchangeMap(subfrmFirst.txtNo);
controlScript.exchangeMap(subfrmFirst.txtDate);
controlScript.exchangeMap(subfrmFirst.drpCurrency);
controlScript.exchangeMap(subfrmFirst.txtExchange);
controlScript.exchangeMap(subfrmFirst.txtAt);
controlScript.exchangeMap(subfrmFirst.txtSum1);
controlScript.exchangeMap(subfrmFirst.txtSum2);
controlScript.exchangeMap(subfrmFirst.txtSum3);
controlScript.exchangeMap(subfrmFirst.txtValue1);
controlScript.exchangeMap(subfrmFirst.txtValue2);
controlScript.exchangeMap(subfrmFirst.txtValue3);
controlScript.exchangeMap(subfrmFirst.txtDocumentary);
controlScript.exchangeMap(subfrmFirst.txtDated);
controlScript.exchangeMap(subfrmFirst.txtTo1);
controlScript.exchangeMap(subfrmFirst.txtTo2);
controlScript.exchangeMap(subfrmFirst.txtTo3);
controlScript.exchangeMap(subfrmFirst.txtTo4);

