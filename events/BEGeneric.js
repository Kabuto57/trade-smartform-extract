// Event scripts for BEGeneric: 48 scripts, in template order.
// Each block: the object's path and the event it runs on. Extracted verbatim from Trade-Smartform.pdf.

// ===== form1.BEGeneric.subfrmFirst.txtNo  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtNo  ::  change =====
controlScript.changeUpper();
controlScript.specialCharacterCheck();

// ===== form1.BEGeneric.subfrmFirst.txtDate  ::  exit =====
controlScript.dateFormatChange(this);
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtDate  ::  ready ($form) =====
if(this.rawValue == null)
{
	controlScript.currentDate( this );	
	controlScript.exchangeMap(this);
}

// ===== form1.BEGeneric.subfrmFirst.txtDate  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtExchange  ::  exit =====
if (drpCurrency.rawValue == null)
{
	this.rawValue = null;
}

if(drpCurrency.rawValue != null && txtExchange.rawValue != null)
{
	var strAmount = currencyConvertor.toWords(txtExchange.formattedValue, drpCurrency.rawValue);
		
	var strFill1 = currencyConvertor.massageString(strAmount, form1.BEGeneric.subfrmFirst.Dummy1.somExpression);
	
	var strFill2 = currencyConvertor.cutString(strFill1, strAmount);
	strFill2 = currencyConvertor.massageString(strFill2, form1.BEGeneric.subfrmFirst.Dummy2.somExpression);
	
	var strFill3 = currencyConvertor.cutString(strFill1 + strFill2, strAmount);
	strFill3 = currencyConvertor.massageString(strFill3, form1.BEGeneric.subfrmFirst.Dummy2.somExpression);
			
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

// ===== form1.BEGeneric.subfrmFirst.txtExchange  ::  ready ($form) =====
if (form1.BEGeneric.subfrmFirst.drpCurrency.rawValue != null){
	if((form1.BEGeneric.subfrmFirst.drpCurrency.rawValue == "THB")||(form1.BEGeneric.subfrmFirst.drpCurrency.rawValue == "JPY") || (form1.BEGeneric.subfrmFirst.drpCurrency.rawValue == "TRY"))
	{
		form1.BEGeneric.subfrmFirst.txtExchange.resolveNode("value.#decimal").leadDigits = "12";
		form1.BEGeneric.subfrmFirst.txtExchange.resolveNode("value.#decimal").fracDigits = "0";
		form1.BEGeneric.subfrmFirst.txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
		
		form1.BEGeneric.subfrmSecond.txtExchange.resolveNode("value.#decimal").leadDigits = "12";
		form1.BEGeneric.subfrmSecond.txtExchange.resolveNode("value.#decimal").fracDigits = "0";
		form1.BEGeneric.subfrmSecond.txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9)}";
	}
	else
	{
		form1.BEGeneric.subfrmFirst.txtExchange.resolveNode("value.#decimal").leadDigits = "12";
		form1.BEGeneric.subfrmFirst.txtExchange.resolveNode("value.#decimal").fracDigits = "2";
		form1.BEGeneric.subfrmFirst.txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
		
		form1.BEGeneric.subfrmSecond.txtExchange.resolveNode("value.#decimal").leadDigits = "12";
		form1.BEGeneric.subfrmSecond.txtExchange.resolveNode("value.#decimal").fracDigits = "2";
		form1.BEGeneric.subfrmSecond.txtExchange.format.picture.value = "num{(zzz,zzz,zzz,zz9.99)}";
	}
}

// ===== form1.BEGeneric.subfrmFirst.txtExchange  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtAt  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtAt  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtSum1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtSum1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtSum2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtSum2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtSum3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtSum3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtValue1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtValue1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtValue2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtValue2  ::  change =====
controlScript.changeUpper();
if(txtValue1.rawValue == null)
	xfa.event.change = "";

// ===== form1.BEGeneric.subfrmFirst.txtValue3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtValue3  ::  change =====
controlScript.changeUpper();
if(txtValue1.rawValue == null || txtValue2.rawValue == null)
	xfa.event.change = "";

// ===== form1.BEGeneric.subfrmFirst.txtDocumentary  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtDocumentary  ::  change =====
controlScript.changeUpper();
controlScript.specialCharacterCheck();

// ===== form1.BEGeneric.subfrmFirst.txtTo1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtTo1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtTo2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtTo2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtTo3  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtTo3  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtSignature1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtSignature2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtDated  ::  exit =====
if(! controlScript.dateFormatChange(this))
	controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtDated  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtTo4  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtTo4  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtFor1  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtFor1  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.txtFor2  ::  exit =====
controlScript.exchangeMap(this);

// ===== form1.BEGeneric.subfrmFirst.txtFor2  ::  change =====
controlScript.changeUpper();

// ===== form1.BEGeneric.subfrmFirst.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BEGeneric.subfrmFirst.drpCurrency  ::  change =====
if((this.boundItem(xfa.event.change) == "THB")||(this.boundItem(xfa.event.change) == "JPY") || (this.boundItem(xfa.event.change) == "TRY"))
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
subfrmSecond.drpCurrency.execEvent("change");

// ===== form1.BEGeneric.subfrmFirst.drpCurrency  ::  exit =====
if(drpCurrency.rawValue != null && txtExchange.rawValue != null)
{
	var strAmount = currencyConvertor.toWords(txtExchange.formattedValue, drpCurrency.rawValue);
		
	var strFill1 = currencyConvertor.massageString(strAmount, form1.BEGeneric.subfrmFirst.Dummy1.somExpression);
	
	var strFill2 = currencyConvertor.cutString(strFill1, strAmount);
	strFill2 = currencyConvertor.massageString(strFill2, form1.BEGeneric.subfrmFirst.Dummy2.somExpression);
	
	var strFill3 = currencyConvertor.cutString(strFill1 + strFill2, strAmount);
	strFill3 = currencyConvertor.massageString(strFill3, form1.BEGeneric.subfrmFirst.Dummy2.somExpression);
			
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

// ===== form1.BEGeneric.subfrmSecond.txtDate  ::  ready ($form) =====
if(this.rawValue == null){
	controlScript.currentDate( this );	
	controlScript.exchangeMap(this);
}

// ===== form1.BEGeneric.subfrmSecond.txtDated  ::  exit =====
 controlScript.dateFormatChange(this);

// ===== form1.BEGeneric.subfrmSecond.drpCurrency  ::  initialize =====
controlScript.populateDropDownlist(this, "Short");

// ===== form1.BEGeneric.subfrmSecond.drpCurrency  ::  change =====
if((this.boundItem(xfa.event.change) == "THB")||(this.boundItem(xfa.event.change) == "JPY") || (this.boundItem(xfa.event.change) == "TRY"))
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
	

// ===== form1.BEGeneric  ::  ready ($form) =====
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

