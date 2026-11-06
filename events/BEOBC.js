// Event scripts for BEOBC: 61 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.BEOBC.subfrmFirst.txtNo  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtNo  ::  change =====
controlScript.changeUpper();
controlScript.specialCharacterCheck();

// ===== form1.BEOBC.subfrmFirst.txtDate  ::  ready ($form) =====
controlScript.currentDate(this );
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtDate  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtDate  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtExchange  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}


if(drpCurrency.rawValue != null && txtExchange.rawValue != null)
{
	var strAmount = currencyConvertor.toWords(txtExchange.formattedValue, drpCurrency.rawValue);
	
	//xfa.host.messageBox("" + strAmount);
	
	var strFill1 = currencyConvertor.massageString(strAmount, form1.BEOBC.subfrmFirst.Dummy1.somExpression);
	
	var strFill2 = currencyConvertor.cutString(strFill1, strAmount);
	strFill2 = currencyConvertor.massageString(strFill2, form1.BEOBC.subfrmFirst.Dummy2.somExpression);
	
	var strFill3 = currencyConvertor.cutString(strFill1 + strFill2, strAmount);
	strFill3 = currencyConvertor.massageString(strFill3, form1.BEOBC.subfrmFirst.Dummy2.somExpression);
			
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

// ===== form1.BEOBC.subfrmFirst.txtExchange  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtAt  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtAt  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtSum1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtSum1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.Dummy1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtSum2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtSum2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtSum3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtSum3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.Dummy2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtValue1  ::  full =====
if (this.rawValue.length < 70 )
		xfa.host.setFocus(txtValue2);
		

// ===== form1.BEOBC.subfrmFirst.txtValue1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtValue1  ::  change =====
controlScript.changeUpper();
controlScript.checkMaxLength_BE(txtValue1.rawValue, txtValue2.rawValue, txtValue3.rawValue, 1);

// ===== form1.BEOBC.subfrmFirst.txtValue2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtValue2  ::  change =====
controlScript.changeUpper();
if(txtValue1.rawValue == null)
	xfa.event.change = "";

controlScript.checkMaxLength_BE(txtValue1.rawValue, txtValue2.rawValue, txtValue3.rawValue, 2);

// ===== form1.BEOBC.subfrmFirst.txtValue3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtValue3  ::  change =====
controlScript.changeUpper();
if(txtValue1.rawValue == null || txtValue2.rawValue == null)
	xfa.event.change = "";

controlScript.checkMaxLength_BE(txtValue1.rawValue, txtValue2.rawValue, txtValue3.rawValue, 3);

// ===== form1.BEOBC.subfrmFirst.txtTo1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtTo1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtTo2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtTo2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtTo3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtTo3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtTo4  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtTo4  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtSignature  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtSignature  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmFirst.txtFor1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.txtFor2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmFirst.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BEOBC.subfrmFirst.drpCurrency  ::  exit =====
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
		
	var strFill1 = currencyConvertor.massageString(strAmount, form1.BEOBC.subfrmFirst.Dummy1.somExpression);
	
	var strFill2 = currencyConvertor.cutString(strFill1, strAmount);
	strFill2 = currencyConvertor.massageString(strFill2, form1.BEOBC.subfrmFirst.Dummy2.somExpression);
	
	var strFill3 = currencyConvertor.cutString(strFill1 + strFill2, strAmount);
	strFill3 = currencyConvertor.massageString(strFill3, form1.BEOBC.subfrmFirst.Dummy2.somExpression);
			
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

// ===== form1.BEOBC.subfrmFirst.drpCurrency  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtNo  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtDate  ::  exit =====
//controlScript.currentDate( this );

// ===== form1.BEOBC.subfrmSecond.txtDate  ::  ready ($form) =====
//controlScript.currentDate( this );

// ===== form1.BEOBC.subfrmSecond.txtDate  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtExchange  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtAt  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtSum1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtSum2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtSum3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtValue1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtValue2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtValue3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtTo1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtTo1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEOBC.subfrmSecond.txtTo2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtTo3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtTo4  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtSignature1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.txtSignature2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEOBC.subfrmSecond.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BEOBC.subfrmSecond.drpCurrency  ::  exit =====
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

// ===== form1.BEOBC  ::  ready ($form) =====
if (form1.BEOBC.subfrmFirst.drpCurrency.rawValue != null){
	if((form1.BEOBC.subfrmFirst.drpCurrency.rawValue == "THB")||(form1.BEOBC.subfrmFirst.drpCurrency.rawValue == "JPY") || (form1.BEOBC.subfrmFirst.drpCurrency.rawValue == "TRY"))
	{
		form1.BEOBC.subfrmFirst.txtExchange.resolveNode("value.#decimal").leadDigits = "12";
		form1.BEOBC.subfrmFirst.txtExchange.resolveNode("value.#decimal").fracDigits = "0";
		form1.BEOBC.subfrmFirst.txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
	}
	else
	{
		form1.BEOBC.subfrmFirst.txtExchange.resolveNode("value.#decimal").leadDigits = "12";
		form1.BEOBC.subfrmFirst.txtExchange.resolveNode("value.#decimal").fracDigits = "2";
		form1.BEOBC.subfrmFirst.txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
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
controlScript.exchangeMap(subfrmFirst.txtTo1);
controlScript.exchangeMap(subfrmFirst.txtTo2);
controlScript.exchangeMap(subfrmFirst.txtTo3);
controlScript.exchangeMap(subfrmFirst.txtTo4);

