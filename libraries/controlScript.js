// Shared script object form1.variables.controlScript (Designer: Hierarchy > Variables)
// Extracted verbatim from Trade-Smartform.pdf (XFA template). Language: JavaScript.



var mandatoryArray = new Array();
var mandatoryColor = "250,100,100";
var normalColor = "255,255,255";

var currencyArray =
 	new Array(
		"AED","AED - UAE DIRHAM",
		"ARS","ARS - ARGENTINA PESO",
		"AUD","AUD - AUSTRALIAN DOLLAR",
		"BDT","BDT - BANGLADESH TAKA",
		"BHD","BHD - BAHRAINI DINAR",
		"BND","BND - BRUNEI DOLLAR",
		"BOB","BOB - BOLIVIANO",
		"BRL","BRL - BRAZILIAN CRUZEIRO",
		"CAD","CAD - CANADIAN DOLLAR",
		"CHF","CHF - SWISS FRANCS",
		"CLP","CLP - CHILEAN PESO",
		"CNH","CNH - CHINESE RENMINBI (OFFSHORE)",
		"CNY","CNY - CHINA YUAN RENMINBI",
		"CYP","CYP - CYPRUS POUND",
		"CZK","CZK - CZECH KORUNA",
		"DKK","DKK - DANISH KRONER",
		"DZD","DZD - ALGERIAN DINAR",
		"EGP","EGP - EGYPTIAN POUND",
		"EUR","EUR - EURO",
		"FJD","FJD - FIJI DOLLAR",
		"GBP","GBP - GREAT BRITISH POUND",
		"HKD","HKD - HONG KONG DOLLAR",
		"IDR","IDR - INDONESIAN RUPIAH",
		"ILS","ILS - ISRAEL SHEKEL",
		"INR","INR - INDIAN RUPEE",
		"IRR","IRR - IRANIAN RIAL",
		"JOD","JOD - JORDANIAN DINAR",
		"JPY","JPY - JAPANESE YEN",
		"KES","KES - KENYAN SHILLING",
		"KRW","KRW - KOREAN WON",
		"KWD","KWD - KUWAITI DINAR",
		"LBP","LBP - LEBANESE POUND",
		"LKR","LKR - SRI LANKA RUPEES",
		"MMK","MMK - BURMESE KYAT",
		"MOP","MOP - MACAU PAT",
		"MTL","MTL - MALTESE LIRA",
		"MUR","MUR - MAURITIUS RUPEE",
		"MXN","MXN - MEXICAN PESO",
		"MYR","MYR - MALAYSIAN RINGGIT",
		"NOK","NOK - NORWEGIAN KRONER",
		"NZD","NZD - NEW ZEALAND DOLLAR",
		"OMR","OMR - RIAL OMANI",
		"PGK","PGK - PAPUA NEW GUINEA KINA",
		"PHP","PHP - PHILIPPINE PESOS",
		"PKR","PKR - PAKISTAN RUPEES",
		"QAR","QAR - QATARI RIAL",
		"RUR","RUR - RUSSIAN ROUBLE",
		"SGD","SGD - SINGAPORE DOLLARS",
		"SAR","SAR - SAUDI RIAL",
		"SCR","SCR - SEYCHELLES RUPEES",
		"SEK","SEK - SWEDISH KRONER",
		"THB","THB - THAI BAHTS",
		"TND","TND - TUNISIAN DINAR",
		"TRY","TRY - TURKISH LIRA",
		"TWD","TWD - NEW TAIWAN DOLLAR",
		"USD","USD - US DOLLAR",
		"UYU","UYU - PESO URUGUAYO",
		"ZAR","ZAR - SOUTH AFRICA RAND");

var currencyArray_Short =
 	new Array(
		"AED","AED",
		"ARS","ARS",
		"AUD","AUD",
		"BDT","BDT",
		"BHD","BHD",
		"BND","BND",
		"BOB","BOB",
		"BRL","BRL",
		"CAD","CAD",
		"CHF","CHF",
		"CLP","CLP",
		"CNH","CNH",
		"CNY","CNY",
		"CYP","CYP",
		"CZK","CZK",
		"DKK","DKK",
		"DZD","DZD",
		"EGP","EGP",
		"EUR","EUR",
		"FJD","FJD",
		"GBP","GBP",
		"HKD","HKD",
		"IDR","IDR",
		"ILS","ILS",
		"INR","INR",
		"IRR","IRR",
		"JOD","JOD",
		"JPY","JPY",
		"KES","KES",
		"KRW","KRW",
		"KWD","KWD",
		"LBP","LBP",
		"LKR","LKR",
		"MMK","MMK",
		"MOP","MOP",
		"MTL","MTL",
		"MUR","MUR",
		"MXN","MXN",
		"MYR","MYR",
		"NOK","NOK",
		"NZD","NZD",
		"OMR","OMR",
		"PGK","PGK",
		"PHP","PHP",
		"PKR","PKR",
		"QAR","QAR",
		"RUR","RUR",
		"SGD","SGD",
		"SAR","SAR",
		"SCR","SCR",
		"SEK","SEK",
		"THB","THB",
		"TND","TND",
		"TRY","TRY",
		"TWD","TWD",
		"USD","USD",
		"UYU","UYU",
		"ZAR","ZAR");

var currencyArrayFC_Short =
 	new Array(
		"AED","AED",
		"ARS","ARS",
		"AUD","AUD",
		"BDT","BDT",
		"BHD","BHD",
		"BND","BND",
		"BOB","BOB",
		"BRL","BRL",
		"CAD","CAD",
		"CHF","CHF",
		"CLP","CLP",
		"CNH","CNH",
		"CNY","CNY",
		"CYP","CYP",
		"CZK","CZK",
		"DKK","DKK",
		"DZD","DZD",
		"EGP","EGP",
		"EUR","EUR",
		"FJD","FJD",
		"GBP","GBP",
		"HKD","HKD",
		"IDR","IDR",
		"ILS","ILS",
		"INR","INR",
		"IRR","IRR",
		"JOD","JOD",
		"JPY","JPY",
		"KES","KES",
		"KRW","KRW",
		"KWD","KWD",
		"LBP","LBP",
		"LKR","LKR",
		"MMK","MMK",
		"MOP","MOP",
		"MTL","MTL",
		"MUR","MUR",
		"MXN","MXN",
		"MYR","MYR",
		"NOK","NOK",
		"NZD","NZD",
		"OMR","OMR",
		"PGK","PGK",
		"PHP","PHP",
		"PKR","PKR",
		"QAR","QAR",
		"RUR","RUR",
		"SAR","SAR",
		"SCR","SCR",
		"SEK","SEK",
		"THB","THB",
		"TND","TND",
		"TRY","TRY",
		"TWD","TWD",
		"USD","USD",
		"UYU","UYU",
		"ZAR","ZAR");
		
var countryArray =
 	new Array(
		"AF","AFGHANISTAN",
		"AL","ALBANIA",
		"DZ","ALGERIA",
		"AS","AMERICAN SAMOA",
		"AD","ANDORRA",
		"AO","ANGOLA",
		"AI","ANGUILLA",
		"AQ","ANTARCTICA",
		"AG","ANTIGUA AND BARBUDA",
		"AR","ARGENTINA",
		"AM","ARMENIA",
		"AW","ARUBA",
		"AU","AUSTRALIA",
		"AT","AUSTRIA",
		"AZ","AZERBAIJAN",
		"BS","BAHAMAS",
		"BH","BAHRAIN",
		"BD","BANGLADESH",
		"BB","BARBADOS",
		"BY","BELARUS",
		"BE","BELGIUM",
		"BZ","BELIZE",
		"BJ","BENIN",
		"BM","BERMUDA",
		"BT","BHUTAN",
		"BO","BOLIVIA",
		"BQ","BONAIRE, SINT EUSTATIUS",
		"BA","BOSNIA-HERZEGOVINA",
		"BW","BOTSWANA",
		"BV","BOUVET ISLAND",
		"BR","BRAZIL",
		"IO","BRITISH INDIAN OCEAN TER",
		"VG","BRITISH VIRGIN ISLAND",
		"BN","BRUNEI DARUSSALAM",
		"BG","BULGARIA",
		"BF","BURKINA FASO",
		"BI","BURUNDI",
		"KH","CAMBODIA",
		"CM","CAMEROON",
		"CA","CANADA",
		"CV","CAPE VERDE",
		"KY","CAYMAN ISLANDS",
		"CF","CENTRAL AFRICAN REPUBLIC",
		"TD","CHAD",
		"CL","CHILE",
		"CN","CHINA",
		"CX","CHRISTMAS ISLAND",
		"CC","COCOS (KEELING) ISLANDS",
		"CO","COLOMBIA",
		"KM","COMOROS",
		"CG","CONGO",
		"CD","CONGO-DemocraticRepublic",
		"CK","COOK ISLANDS",
		"CR","COSTA RICA",
		"HR","CROATIA",
		"CU","CUBA",
		"CW","CURACAO",
		"CY","CYPRUS",
		"FR","FRANCE",
		"GF","FRENCH GUIANA",
		"PF","FRENCH POLYNESIA",
		"TF","FRENCH SOUTHERN TERR.",
		"GA","GABON",
		"GM","GAMBIA",
		"GE","GEORGIA",
		"DE","GERMANY",
		"GH","GHANA",
		"GI","GIBRALTAR",
		"GR","GREECE",
		"GL","GREENLAND",
		"GD","GRENADA",
		"GP","GUADELOUPE",
		"GU","GUAM",
		"GT","GUATEMALA",
		"GG","GUERNSEY, C.I.",
		"GN","GUINEA",
		"GW","GUINEA BISSAU",
		"GY","GUYANA",
		"HT","HAITI",
		"HM","HEARD & MCDONALD ISLANDS",
		"VA","HolySee-VaticanCityState",
		"HN","HONDURAS",
		"HK","HONG KONG",
		"HU","HUNGARY",
		"IS","ICELAND",
		"IN","INDIA",
		"ID","INDONESIA",
		"IR","IRAN",
		"IQ","IRAQ",
		"IE","IRELAND (IRISH REPUBLIC)",
		"IM","ISLE OF MAN",
		"IL","ISRAEL",
		"IT","ITALY",
		"CI","IVORY COAST",
		"JM","JAMAICA",
		"JP","JAPAN",
		"JE","JERSEY, C.I.",
		"JO","JORDAN",
		"KZ","KAZAKHSTAN",
		"KE","KENYA",
		"KI","KIRIBATI",
		"KW","KUWAIT",
		"KG","KYRGYZSTAN",
		"LA","LAOS",
		"LV","LATVIA",
		"LB","LEBANON",
		"LS","LESOTHO",
		"LR","LIBERIA",
		"LY","LIBYA",
		"LI","LIECHTENSTEIN",
		"LT","LITHUANIA",
		"LU","LUXEMBOURG",
		"MO","MACAU",
		"MK","MACEDONIA",
		"MG","MADAGASCAR, DEM. REP.",
		"MW","MALAWI",
		"MY","MALAYSIA",
		"MV","MALDIVES",
		"ML","MALI",
		"MT","MALTA",
		"MH","MARSHALL ISLANDS",
		"MQ","MARTINIQUE",
		"MR","MAURITANIA",
		"MU","MAURITIUS",
		"YT","MAYOTTE",
		"MX","MEXICO",
		"FM","MICRONESIA(FED.STATE OF)",
		"MD","MOLDOVA, REPUBLIC OF",
		"MC","MONACO",
		"MN","MONGOLIA",
		"ME","MONTENEGRO, REPUBLIC OF",
		"MS","MONTSERRAT",
		"MA","MOROCCO",
		"MZ","MOZAMBIQUE",
		"MM","MYANMAR",
		"NA","NAMIBIA",
		"NR","NAURU",
		"NP","NEPAL",
		"NL","NETHERLANDS",
		"NC","NEW CALEDONIA",
		"NZ","NEW ZEALAND",
		"NI","NICARAGUA",
		"NE","NIGER",
		"NG","NIGERIA",
		"NU","NIUE",
		"NS","NON SINGAPORE",
		"NF","NORFOLK ISLAND",
		"KP","NORTH KOREA",
		"MP","NORTHERN MARIANA ISLANDS",
		"NO","NORWAY",
		"OM","OMAN",
		"**","OTHERS",
		"PK","PAKISTAN",
		"PW","PALAU",
		"PS","PalestinianTerr,Occupied",
		"PA","PANAMA",
		"PZ","PANAMA CANAL ZONE",
		"PG","PAPUA NEW GUINEA",
		"PY","PARAGUAY",
		"PE","PERU",
		"PH","PHILIPPINES",
		"PN","PITCAIRN",
		"PL","POLAND",
		"PT","PORTUGAL",
		"PR","PUERTO RICO",
		"QA","QATAR",
		"YE","REPUBLIC OF YEMEN",
		"RE","REUNION ISLAND",
		"RO","ROMANIA",
		"RU","RUSSIAN FEDERATION",
		"RW","RWANDA",
		"GS","S.GEORGIA&S.SANDWICH IS.",
		"SH","SAINT HELENA",
		"KN","SAINT KITTS AND NEVIS",
		"WS","SAMOA ISLANDS",
		"SM","SAN MARINO",
		"ST","SAO TOME AND PRINCIPE",
		"SA","SAUDI ARABIA",
		"SN","SENEGAL",
		"RS","SERBIA, REPUBLIC OF",
		"SC","SEYCHELLES",
		"SL","SIERRA LEONE",
		"SG","SINGAPORE",
		"SX","SINT MAARTEN, DUTCH PART",
		"SK","SLOVAKIA",
		"SI","SLOVENIA",
		"SB","SOLOMON ISLANDS",
		"SO","SOMALIA",
		"ZA","SOUTH AFRICA",
		"KR","SOUTH KOREA",
		"ES","SPAIN",
		"LK","SRI LANKA",
		"PM","ST PIERRE & MIQUELON",
		"LC","ST. LUCIA",
		"VC","St.Vincent&TheGrenadines",
		"SD","SUDAN",
		"SR","SURINAME",
		"SJ","Svalbard & Jan Mayen Is.",
		"SZ","SWAZILAND",
		"SE","SWEDEN",
		"CH","SWITZERLAND",
		"SY","SYRIAN ARAB REPUBLIC",
		"TW","TAIWAN",
		"TJ","TAJIKISTAN",
		"TZ","TANZANIA",
		"TH","THAILAND",
		"TL","TIMOR-LESTE",
		"TG","TOGO",
		"TK","TOKELAU",
		"TO","TONGA",
		"TT","TRINIDAD AND TOBAGO",
		"TN","TUNISIA",
		"TR","TURKEY",
		"TM","TURKMENISTAN",
		"TC","TURKS AND CAICOS ISLANDS",
		"TV","TUVALU",
		"UM","U.S. MINOR OUTLAYING IS.",
		"UG","UGANDA",
		"UA","UKRAINE",
		"AE","UNITED ARAB EMIRATES",
		"GB","UNITED KINGDOM",
		"US","UNITED STATES",
		"UY","URUGUAY",
		"UZ","UZBEKISTAN",
		"VU","VANUATU",
		"VE","VENEZUELA",
		"VN","VIETNAM",
		"VI","VIRGIN ISLAND, U.S.",
		"WF","WALLIS & FUTUNA ISLANDS",
		"EH","WESTERN SAHARA",
		"YU","YUGOSLAVIA",
		"ZM","ZAMBIA",
		"ZW","ZIMBABWE");	

var EntityArray =
 	new Array(
		"THE BANK LTD","THE BANK LTD",
		"THE BANK (CHINA) LTD","THE BANK (CHINA) LTD",
		"THE BANK (HONG KONG) LTD","THE BANK (HONG KONG) LTD",
		"THE BANK LTD, INDIA","THE BANK LTD, INDIA",
		"PT THE BANK INDONESIA","PT THE BANK INDONESIA",
		"THE BANK (TAIWAN) LTD","THE BANK (TAIWAN) LTD",
		"OTHERS","OTHERS");
		
var iMaxChar = 65;
var strAddition = " ";

function Trim(strData)
{
	return strData.replace(/^\s+/, '').replace(/\s+$/, '');
}

function RemoveLR(strData)
{
	return strData.replace(/^\r+/, '').replace(/\r+$/, '');
}

function Show(strData)
{
	xfa.host.messageBox(":"+ strData + ":");
}

function BankProcess1(strData)
{
	var strReturn = strData;
	
	// Trim prefix and suffix white spaces.	
	strReturn = Trim(replaceAll(strReturn,"\r","{}"));
	var strReturnTemp = Trim(replaceAll(strReturn, "{}",""));
	
	return RemoveLR(strReturn);
}

function BankProcess2(strData)
{
	var strOrig = strData;
	var strReturn = "";
	var iPos = 0;
	var iCharCount = iMaxChar;
	
	while(strOrig.length > 0)
	{
		if(strOrig.length > iCharCount)
		{
			strReturn = strReturn + strOrig.substr(iPos, iCharCount) + "{}";
			strOrig = strOrig.substr(iCharCount, strOrig.length - iCharCount);
		}
		else
		{
			strReturn = strReturn + strOrig;
			strOrig = "";
		}
	}
	
	return strReturn;
}

function BankProcess3(strData)
{
	var strReturn = "";
	var vArr = new Array();
	vArr = strData.split("\r");
		
	for(var i = 0 ; i < vArr.length ; i++)
	{
		if(i != vArr.length - 1)
		{
			strReturn = strReturn + BankProcess2(Trim(vArr[i])) + "{}";
		}
		else
			strReturn = strReturn + BankProcess2(Trim(vArr[i]));
	}
	
	return strReturn;
}


function BankProcess4(strData)
{
	//Show(strData);
	var strReturn = "";
	var strOrig = strData;
	var strAry = strData.split(" ");
	var strFinal = new Array();
	var strInner = new Array();
	var iIndex = 0;
	var strResult = "";
	var iCounter = 0;
	
	var vA = "";
	for(var i = 0 ; i < strAry.length ; i++)
	{
		if(strAry[i].length > iMaxChar)
			strAry[i] = BankProcess2(strAry[i]);
	}
	
	
	for(var i = 0; i< strAry.length; i++)
	{
		if ((strResult + strAry[i]).length > iMaxChar)
		{
			if (strAry[i].length <= iMaxChar)
			{
				if (strAry[i].indexOf("\r") <= 0)
				{
					//strResult = strResult.substr(0, strResult.length - (strAry[i].length + 1));
					
					i = i - 1;
	
					while (strResult.length < iMaxChar)
						strResult = strResult + strAddition;
						
					strResult = strResult + "{}";
					strFinal[iIndex] = strResult;
					iIndex = iIndex + 1;
					
					strResult = "";
				}
				else
				{ 
					// settle enter key.
					/*
					strInner = strAry[i].split("\r");
					for(var a = 0; a < strInner.length ; a++)
					{
						
					}
					*/
				}
			}
			else
			{
				if(strResult != "")
				{
					while (strResult.length < iMaxChar)
						strResult = strResult + strAddition;
					
					strResult = strResult + "{}";
				}
				
				strFinal[iIndex] = strResult + strAry[i] + " ";
				iIndex = iIndex + 1;
				strResult = "";
			}
		}
		else
		{
			strResult = strResult + strAry[i] + " ";
			//Show(strResult);
		}
    }
    
    if (strResult != "")
    {
    	strFinal[iIndex] = strResult;
        strResult = "";
    }
	
	for(var i = 0; i < strFinal.length; i++)
	{
		if(i == (strFinal.length - 1))
		{
			//Show(strFinal[i].length + "--" + strFinal[i] + "--" + strFinal[i].substr(0,strFinal[i].length-1));
			//Show(strFinal[i].substr(strFinal[i].length - 1, 1));
			//Show(strFinal[i].substr(0, strFinal[i].length - 1));
			if(strFinal[i].substr(strFinal[i].length - 1, 1) == " ")
				strReturn = strReturn + strFinal[i].substr(0, strFinal[i].length - 1);
			else
				strReturn = strReturn + strFinal[i];
		}
		else
			strReturn = strReturn + strFinal[i];
	}
	
	return strReturn;
}

function BankProcess5(strData)
{
	var strReturn = "";
	var strOrig = strData;
	
	strData = replaceAll(strData,"\r","~");			// Replace Enter key with ~ for easy splitting.
	
	var strAry = strData.split("~");
	var strFinal = new Array();
	var iIndex = 0;
	var strResult = "";
	var iCounter = 0;
	
	for(var i = 0 ; i < strAry.length ; i++)
	{
		if(strAry[i].length > iMaxChar)
			strAry[i] = BankProcess4(strAry[i]);
	}
	
	for(var i = 0 ; i < strAry.length ; i++)
	{
		if(i == (strAry.length - 1))
		{
			if(strAry[i].substr(strAry[i].length - 2, 2) == "{}")
				strReturn = strReturn + strAry[i].substr(0, strAry[i].length - 2);
			else
				strReturn = strReturn + strAry[i];
		}
		else
			strReturn = strReturn + strAry[i] + "{}";
	}
	
	return strReturn;
}


function strChop(strData)
{
	if(strData == null || strData.length <= 0)
		return "|";
		
	// Remove extra enter key infront and behind.
	strData = Trim(RemoveLR(strData));
	if (strData.length <= 0)
		return "|";

	// For less than 64 char (With or without Enter key and with or without space). 
	if(strData.length <= iMaxChar)
		return BankProcess1(strData) + "|";
	
	// For > 64 chars, NO SPACE.
	if(strData.indexOf(" ") <= 0)
	{
		if(strData.indexOf("\r") <= 0)			// For > 65 chars. No enter key.
			return BankProcess2(strData) + "|";
		else if(strData.indexOf("\r") > 0)		// For > 65 chars with Enter key.
			return BankProcess3(strData) + "|";
	}
	
	// For > 64 chars, WITH SPACE.
	if (strData.indexOf(" ") > 0)
	{
		if(strData.indexOf("\r") <= 0)			// For > 65 chars. No enter key.
			return BankProcess4(strData) + "|";
		else if (strData.indexOf("\r") > 0)		// For > 65 chars with Enter key.
			return BankProcess5(strData) + "|";
	}
	
	
	// if not all above, return original string.
	return strData + "|";
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function strChop1(str1)
{
	if (str1.length > 64)
	{
		var sAry = new Array();
		var iPos = 0;
		var iCurPos = 0;
		var iEndPos = 0;
		var strSpace = "";
		var iLoop = 0;
		var iIndex = 0;
		var iCounter = 0;
		var bEnd = 0;
		
		iLoop = Math.floor(str1.length / 64);	
		iCurPos = 66;		
		iEndPos = 0;
		while(iLoop >= 0)
		{
			//xfa.host.messageBox("bEnd="+bEnd +  "  . iLoop=" + iLoop);
			if(bEnd == 0)
			{
				for (var i = iCurPos; i > iEndPos; i--) 
				{
					if(str1.substr(i,1) == " ")	
					{
						//xfa.host.messageBox("i=" + i);
						iPos = i - iEndPos;
						i = iEndPos;
					}
					else if (i < (iCurPos - 1))
						strSpace = strSpace + " ";
				}
				
				if (iPos > 0)		// > 0
					sAry[iIndex] = str1.substr(iEndPos,iPos)+ strSpace;
				else
					sAry[iIndex] = str1;
			}
			else
			{
				sAry[iIndex] = str1.substr(iEndPos,iPos)+ strSpace;
			}
				
			iLoop = iLoop - 1;		// Decrease looping counter by 1.
			iIndex = iIndex + 1;	// Increase index by 1.
			iEndPos = iPos + iEndPos;		// 65
			iCurPos = iEndPos + 66;		// Next sector.
			if(iCurPos > str1.length)
			{
				iCurPos = str1.length;
				bEnd = 1;
			}
			strSpace = "";
		}
		
		var vReturn = "";
		for(var i = 0; i < sAry.length; i++)
		{
			//xfa.host.messageBox("i=" + i + "  . len=" + (sAry.length-1));
			if(i < (sAry.length-1))
				vReturn = vReturn + sAry[i] + "{}";
			else
				vReturn = vReturn + sAry[i] + "|";
		}
		//xfa.host.messageBox(vReturn);
		return vReturn;
	}
	else
		return str1 + "|";
}


function checkMaxLength(field1,field2,len,str)
{
	var cLen = xfa.event.fullText.length;
	var fldLen1 = 0;
	var fldLen2 = 0;
	

	if(field1 != null)
	{
		fldLen1 = field1.length;
	}
	if(field2 != null)
	{
		fldLen2 = field2.length;
	}
	
	if(str == 1)
	{
		if(cLen + fldLen2 >len)
		{
			xfa.event.change = "";
		}
	}	
	else if(str == 2)
	{
		if(cLen + fldLen1 >len)
		{
			xfa.event.change = "";
		}
	}	
}
function validateRegularExpChange(regExp){
	if(validateRegularExp(regExp)){
	}
}

//Execute in change event
function validateRegularExp(regExp)
{
	var rxp = new RegExp(regExp);
	if (rxp.test(xfa.event.change.toString()) == true ) {
		// swallow the change
		xfa.event.change = "";
		// if the user has selected a range of characters,
		// then leave the range intact by re-setting the start/en
		xfa.event.selStart = 0;
		xfa.event.selEnd = 0;
		return false;
	}
	return true;
}
function validateRegularExpNumeric()
{
	var rxp = new RegExp(Number.value);
	if (rxp.test(xfa.event.change.toString()) == true ) {
		// swallow the change
		xfa.event.change = "";
		// if the user has selected a range of characters,
		// then leave the range intact by re-setting the start/en
		xfa.event.selStart = 0;
		xfa.event.selEnd = 0;
	}
}

function CIFChange(strCIF)
{
	xfa.resolveNode("form1.MainPage.subfrmMain.txtDBRPCif").rawValue = strCIF;
	xfa.resolveNode("form1.MainPage.subfrmMain.txtMainCif").rawValue = strCIF;
	xfa.resolveNode("form1.MainPage.subfrmMain.txtEBLCCif").rawValue = strCIF;
	xfa.resolveNode("form1.MainPage.subfrmMain.txtAPFCif").rawValue = strCIF;
	xfa.resolveNode("form1.MainPage.subfrmMain.txtLCCif").rawValue = strCIF;
	xfa.resolveNode("form1.MainPage.subfrmMain.txtOBCCif").rawValue = strCIF;
	xfa.resolveNode("form1.MainPage.subfrmMain.txtLCACif").rawValue = strCIF;
	xfa.resolveNode("form1.MainPage.subfrmMain.txtDBRPCif").rawValue = strCIF;
}


function checkMaxLength_BE(field1,field2,field3,str)
{
	var cLen = xfa.event.fullText.length;
	var fldLen1 = 0;
	var fldLen2 = 0;
	var fldLen3 = 0;
	

	if(field1 != null)
	{
		fldLen1 = field1.length;
	}
	if(field2 != null)
	{
		fldLen2 = field2.length;
	}
	if(field3 != null)
	{
		fldLen3 = field3.length;
	}
	
	if(str == 1)
	{
		if(cLen + fldLen2 + fldLen3 >200)
		{
			xfa.event.change = "";
		}
	}	
	else if(str == 2)
	{
		if(cLen + fldLen1 + fldLen3 >200)
		{
			xfa.event.change = "";
		}
	}	
	else if(str == 3)
	{
		if(cLen + fldLen1 + fldLen2 >200)
		{
			xfa.event.change = "";
		}
	}
}


function currentDate(field)
{
	var now = new Date();
	var date = now.getDate();
	var month = now.getMonth();
	var year = now.getFullYear();

	month=month+1;

	year=year.toString();

	if (date<10)
	{
   	  date=date.toString();
 	  date=0+date;
	}
	else
	   	date=date.toString();

	if (month<10)
	{
   		month=month.toString();
   		month=0+month;
	}
	else
   		month=month.toString();  

	var aa=new Date(year,month,date);

	if (field == null)
		return year+"-"+month+"-"+date;
	else
		field.rawValue =year+"-"+month+"-"+date;
}


function wordVisible(fieldObj, visible)
{
	if(visible)
		fieldObj.fontColor = "0,0,0";	
	else
		fieldObj.fontColor = "255,255,255";
}


function accessChangeBE( field, atr )
{
	if(field != null)
	{
		field.access = atr;
	
		var tValueColor = field.somExpression + ".ui.oneOfChild.border.fill.color";
		
		if(tValueColor != null)
		{
			if (atr == "readOnly")
			{
				if (field.name.substr(0,3) != "rad")
				{
					field.rawValue = null;
					field.validate.nullTest = "disabled";		
					xfa.resolveNode(tValueColor).value = normalColor;
					if (field.name.substr(0,3) != "rad")
					controlScript.wordVisible(field, true);
				}
				else
				{
					field.rawValue = "";
					radioMandatoryCheck();
					radioColorRemove();
				}
			}
		}
	}
}

function accessChange( field, atr )
{
	if(field != null)
	{
		field.access = atr;
	
		var tValueColor = field.somExpression + ".ui.oneOfChild.border.fill.color";
		
		if(tValueColor != null)
		{
			if (atr == "readOnly")
			{
				field.validate.nullTest = "disabled";	
				
				if (field.name.substr(0,3) != "rad" && field.name.substr(0,3) != "chk")
				{
					xfa.resolveNode(tValueColor).value = normalColor;
					controlScript.wordVisible(field, false);
				}
				else
				{
					field.rawValue = "";
					radioMandatoryCheck();
					radioColorRemove();
				}
			}
			else
			{
				if (field.name.substr(0,3) != "rad")
				{
					controlScript.wordVisible(field, true);
				}
			}
		}
	}
}


function accessChanger( field, atr )
{
	if(field != null)
	{		field.access = atr;
	
		var tValueColor = field.somExpression + ".ui.oneOfChild.border.fill.color";
		
		if(tValueColor != null)
		{
			if (atr == "readOnly")
			{
				field.validate.nullTest = "disabled";	
				
				if (field.name.substr(0,3) != "rad" && field.name.substr(0,3) != "chk")
				{
					//field.rawValue = null;	
					xfa.resolveNode(tValueColor).value = normalColor;
					controlScript.wordVisible(field, false);
				}
				else
				{
					field.rawValue = "";
					radioMandatoryCheck();
					radioColorRemove();
				}
			}
			else
			{
				if (field.name.substr(0,3) != "rad")
				{
					controlScript.wordVisible(field, true);
				}
			}
		}
	}
}

function presenceChange( subform, atr )
{
	subform.presence = atr;
}


function lengthLimit( val )
{
	if (xfa.event.fullText.length > val)
	{	
		xfa.event.change = "";
	}
}


function checkValue( val )
{
	xfa.host.messageBox("" + val);
}


function concatValue( field1, field2, field3, field4)
{
	var returnValue = "";
	
	if (field1.rawValue != null)
		returnValue = returnValue + field1.rawValue;
		
	if (field2.rawValue != null)
		returnValue = returnValue + field2.rawValue;
		
	if (field3.rawValue != null)
		returnValue = returnValue + field3.rawValue;
	
	if (field4.rawValue != null)
		returnValue = returnValue + field4.rawValue;
	
	return returnValue;
}



function plusNumeric( field )
{
	if (field.rawValue == null)
		return;
			
	if (field.rawValue < 0)
	{
		 field.rawValue = null;
		 xfa.host.messageBox("" + errorMessage.plusNumeric);
	}
}



function dateFormatChange( field)
{
	if (field.rawValue == null)	
		return true;

	var dValue = new String(field.rawValue);
	var array = dValue.split("-");
	
	
	if(array[1] < 10) 
		array[1] = array[1]-0;
		
	if(array[2] < 10)
		array[2] = array[2]-0;
		
	array[0] = parseInt(array[0]);
	array[1] = parseInt(array[1]);
	array[2] = parseInt(array[2]);
	
	
	if ((array[0] >= 0 && array[0] <= 9999)&&(array[1] >= 1 && array[1] <= 12)&&(array[2] >= 1 && array[2] <= 31))
		return false;
	else
	{	
		field.rawValue = null;
		xfa.host.messageBox("" + errorMessage.msgErrorDate);
			
		xfa.host.setFocus(field);
		
		return true;
	}
}

function dateFormatChangeMainPage( field )
{
	if (field.rawValue == null)	
		return "";
		
	var dValue = new String(field.rawValue);
	var array = dValue.split("-");
	var returnValue;
	
	if (array.length != 3)
	{
		field.rawValue = null;
		returnValue = "";
	}
	else
	{
		returnValue = array[0] +"-"+ array[1] +"-"+ array[2];
	}
	return returnValue;
}

function dateFormatChangeBarcode( field )
{
	if (field.rawValue == null)	
		return "";
		
	var dValue = new String(field.rawValue);
	var array = dValue.split("-");
	var returnValue;
	
	if (array.length != 3)
	{
		field.rawValue = null;
		returnValue = "";
	}
	else
	{
		returnValue = array[2] + array[1] + array[0];
	}
	return returnValue;
}


function selectMandaotoryField()
{
    mandatoryArray.splice(0,mandatoryArray.length);
      
	for( var i = 0; i < xfa.host.numPages; i++ )
	{
		var ofields = xfa.layout.pageContent(i,"field");
		var nNodesLength = ofields.length;
		
		for( var a = 0; a < nNodesLength; a++)
		{
			var mandatoryValue =  ofields.item(a).mandatory;
			if (mandatoryValue == "error")
				mandatoryArray.push(ofields.item(a).somExpression);
		}
	}
}


function setMandatoryBackColor()
{
   var mandatoryArrayLength = mandatoryArray.length;
   var a;
   var firstBackColor = 0;
   var tValue;
   var tValueColor;
   var mandatoryEmpty = 0;
      
   for( var i = 0; i < mandatoryArrayLength; i++)
   {
		tValue = mandatoryArray[i];
   	  	tValueColor = mandatoryArray[i] + ".ui.oneOfChild.border.fill.color";
   	  
   	  	a = xfa.resolveNode(tValue).rawValue;
   	  
	  	if ((a == null)||(a == "")) 
	  	{ 		
			if ((a == 0)&&(xfa.resolveNode(tValue).name.substr(0,3) == "txt"))
		  	{
		  		if (xfa.resolveNode(tValueColor).value != normalColor)
		  			xfa.resolveNode(tValueColor).value = normalColor;
		  		continue;
		  	}
	  	
			if (xfa.resolveNode(tValue).name == "txtPlusValue")
			{
				var tMinusValue = mandatoryArray[i+1];
				if(xfa.resolveNode(tMinusValue).rawValue != null)
				{
					xfa.resolveNode(tValueColor).value = normalColor;
					continue;
				}
			}
	
			if (xfa.resolveNode(tValue).name == "txtMinusValue")
			{
				var tPlusValue = mandatoryArray[i-1];
				if(xfa.resolveNode(tPlusValue).rawValue != null)
				{
					xfa.resolveNode(tValueColor).value = normalColor;
					continue;
				}
			}
	  	
    	  	xfa.resolveNode(tValueColor).value = mandatoryColor;
    	  	mandatoryEmpty = 1;
    	  	if (firstBackColor == 0)
    	  	{
    	  		xfa.host.setFocus(tValue);
    	  		firstBackColor = 1;
    	  	}	  
		}
      	else
      	{
    		xfa.resolveNode(tValueColor).value = normalColor;
  		}
	}
	
	radioColorRemove();

	return mandatoryEmpty;
}



function mandatoryChange( field, val )
{
	var mandatoryValue;
	
	if (val == 1)
		mandatoryValue = "error";
	else
		mandatoryValue = "disabled";		

	field.validate.nullTest = mandatoryValue;
}



function radioMandatoryCheck()
{
	var oNode;
	
	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList");
	
	if (oNode.rawValue == "")	
	{

		oNode.FOB.validate.nullTest = "error";
 		oNode.CFR.validate.nullTest = "error";
 		oNode.CIF.validate.nullTest = "error";
 		oNode.LocalDelivery.validate.nullTest = "error";
 		oNode.Others.validate.nullTest = "error";
 		oNode.FCA.validate.nullTest = "error";
 		oNode.CIP.validate.nullTest = "error";
 		oNode.CPT.validate.nullTest = "error";
	}
	else
	{

		oNode.FOB.validate.nullTest = "disabled";
 		oNode.CFR.validate.nullTest = "disabled";
 		oNode.CIF.validate.nullTest = "disabled";
 		oNode.LocalDelivery.validate.nullTest = "disabled";
 		oNode.Others.validate.nullTest = "disabled";
 		oNode.FCA.validate.nullTest = "disabled";
 		oNode.CIP.validate.nullTest = "disabled";
 		oNode.CPT.validate.nullTest = "disabled";
	}	


	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment");
	
	if (oNode.rawValue == "")	
	{
		oNode.allowed.validate.nullTest ="error";
 		oNode.notAllowed.validate.nullTest ="error";
	}
	else
	{
		oNode.allowed.validate.nullTest ="disabled";
 		oNode.notAllowed.validate.nullTest ="disabled";
	}	

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment");
	
	if (oNode.rawValue == "")	
	{
 		 oNode.allowed.validate.nullTest ="error";
 		 oNode.notAllowed.validate.nullTest ="error";
	}
	else
	{
 		 oNode.allowed.validate.nullTest ="disabled";
 		 oNode.notAllowed.validate.nullTest ="disabled";
	}	
 
	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee");
	
	if ((oNode.rawValue == "")&&(oNode.access != "readOnly"))	
	{
 		 oNode.OrderOfBankBankLtd.validate.nullTest ="error";
 		 oNode.OrderBlankEndorse.validate.nullTest ="error";
 		 oNode.MadeOutTo.validate.nullTest ="error";
	}
	else
	{
 		 oNode.OrderOfBankBankLtd.validate.nullTest ="disabled";
 		 oNode.OrderBlankEndorse.validate.nullTest ="disabled";
 		 oNode.MadeOutTo.validate.nullTest ="disabled";
	}		

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radFreight");
	
	if ((oNode.rawValue == "")&&(oNode.access != "readOnly"))	
	{
 		 oNode.Prepaid.validate.nullTest ="error";
 		 oNode.Collect.validate.nullTest ="error";
	}
	else
	{
 		 oNode.Prepaid.validate.nullTest ="disabled";
 		 oNode.Collect.validate.nullTest ="disabled";
	}		


	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList");
	
	if ((oNode.rawValue == "")&&(oNode.access != "readOnly"))	
	{
 		 oNode.Prepaid.validate.nullTest ="error";
 		 oNode.Collect.validate.nullTest ="error";
	}
	else
	{
 		 oNode.Prepaid.validate.nullTest ="disabled";
 		 oNode.Collect.validate.nullTest ="disabled";
	}		


	oNode = xfa.resolveNode("form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList");
	
	if ((oNode.rawValue == "")&&(oNode.access != "readOnly"))	
	{
 		 oNode.Applicant.validate.nullTest ="error";
 		 oNode.Beneficiary.validate.nullTest ="error";
	}
	else
	{
 		 oNode.Applicant.validate.nullTest ="disabled";
 		 oNode.Beneficiary.validate.nullTest ="disabled";
	}		

	oNode = xfa.resolveNode("form1.OBC.subfrmOBC.subfrmTenor.radTenor");

	if (oNode.rawValue == "")	
	{
 		 oNode.Sight.validate.nullTest ="error";
 		 oNode.Term.validate.nullTest ="error";
	}
	else
	{
 		 oNode.Sight.validate.nullTest ="disabled";
 		 oNode.Term.validate.nullTest ="disabled";
	}		

	oNode = xfa.resolveNode("EBLC.subfrmEBLC.subfrmTenor.radTenor");

	if (oNode.rawValue == "")	
	{
 		 oNode.Sight.validate.nullTest ="error";
 		 oNode.Term.validate.nullTest ="error";
	}
	else
	{
 		 oNode.Sight.validate.nullTest ="disabled";
 		 oNode.Term.validate.nullTest ="disabled";
	}		

	oNode = xfa.resolveNode("form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest1");
	if ((oNode.rawValue == "")&&(oNode.access != "readOnly"))	
	{
 		 oNode.withRecourse.validate.nullTest ="error";
 		 oNode.withoutRecourse.validate.nullTest ="error";
	}
	else
	{
 		 oNode.withRecourse.validate.nullTest ="disabled";
 		 oNode.withoutRecourse.validate.nullTest ="disabled";
	}		
	
	oNode = xfa.resolveNode("form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest2");
	if ((oNode.rawValue == "")&&(oNode.access != "readOnly"))	
	{
 		 oNode.afterAccept.validate.nullTest ="error";
 		 oNode.priorAccept.validate.nullTest ="error";
	}
	else
	{
 		 oNode.afterAccept.validate.nullTest ="disabled";
 		 oNode.priorAccept.validate.nullTest ="disabled";
	}
	//=============DBRP================//
	oNode = xfa.resolveNode("form1.DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP");

	if (oNode.rawValue == "")	
	{
 		 oNode.BRP.validate.nullTest ="error";
 		 oNode.Loan.validate.nullTest ="error";
 		 oNode.seller.validate.nullTest ="error";
 		 oNode.credit.validate.nullTest ="error";
	}
	else
	{
 		 oNode.BRP.validate.nullTest ="disabled";
 		 oNode.Loan.validate.nullTest ="disabled";
 		 oNode.seller.validate.nullTest ="disabled";
 		 oNode.credit.validate.nullTest ="disabled";
	}	
	
	oNode = xfa.resolveNode("form1.DBRP.subfrmAPF.subfrmInstructions.radRemit");

	if (oNode.rawValue == "")	
	{
 		 oNode.remit.validate.nullTest ="error";
  		 oNode.credit.validate.nullTest ="error";
	}
	else
	{
 		 oNode.remit.validate.nullTest ="disabled";
 		 oNode.credit.validate.nullTest ="disabled";
	}	
	
	oNode = xfa.resolveNode("form1.DBRP.subfrmAPF.subfrmInstructions.radRemit");

	if (oNode.rawValue == "2")	
	{
		oNode = xfa.resolveNode("form1.DBRP.subfrmAPF.subfrmInstructions.radInstructions");
		if (oNode.rawValue == "")	
		{
	 		 oNode.electronic.validate.nullTest ="error";
	  		 oNode.cashier.validate.nullTest ="error";
		}
		else
		{
	 		 oNode.electronic.validate.nullTest ="disabled";
	 		 oNode.cashier.validate.nullTest ="disabled";
		}	
		oNode = xfa.resolveNode("form1.DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.radSupYN");
		if (oNode.rawValue == "")	
		{
	 		 oNode.Yes.validate.nullTest ="error";
	  		 oNode.No.validate.nullTest ="error";
		}
		else
		{
	 		 oNode.Yes.validate.nullTest ="disabled";
	 		 oNode.No.validate.nullTest ="disabled";
		}	
	}
	oNode = xfa.resolveNode("form1.DBRP.subfrmAPF.subDocAtt.radDoc");

	if (oNode.rawValue == "")	
	{
 		 oNode.INV.validate.nullTest ="error";
  		 oNode.SUM.validate.nullTest ="error";
	}
	else
	{
 		 oNode.INV.validate.nullTest ="disabled";
 		 oNode.SUM.validate.nullTest ="disabled";
	}	
	//=============DBRP================//
	oNode = xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.radChargeAccount");

	if (oNode.rawValue == "")	
	{
 		 oNode.Beneficiary.validate.nullTest ="error";
 		 oNode.Applicant.validate.nullTest ="error";
	}
	else
	{
 		 oNode.Beneficiary.validate.nullTest ="disabled";
 		 oNode.Applicant.validate.nullTest ="disabled";
	}	
	oNode = xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts");

	if (oNode.rawValue == "" && LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.chkTrustReceipts.rawValue == 1 )	
	{
 		 oNode.chkSGD.validate.nullTest ="error";
 		 oNode.chkForgeign.validate.nullTest ="error";
 		 oNode.chkApplyForward.validate.nullTest ="error";
	}
	else
	{
 		 oNode.chkSGD.validate.nullTest ="disabled";
 		 oNode.chkForgeign.validate.nullTest ="disabled";
 		 oNode.chkApplyForward.validate.nullTest ="disabled";
	}	
		
	//SBLC
	oNode = xfa.resolveNode("form1.SBLC.partialAndCharges.subPartialDrawings.radPartial");
	
	if (oNode.rawValue == "")	
	{
		oNode.allowed.validate.nullTest ="error";
 		oNode.notAllowed.validate.nullTest ="error";
	}
	else
	{
		oNode.allowed.validate.nullTest ="disabled";
 		oNode.notAllowed.validate.nullTest ="disabled";
	}	

	oNode = xfa.resolveNode("form1.SBLC.partialAndCharges.subCharges.radCharges");
	
	if (oNode.rawValue == "")	
	{
		oNode.applicant.validate.nullTest ="error";
 		oNode.beneficiary.validate.nullTest ="error";
	}
	else
	{
		oNode.applicant.validate.nullTest ="disabled";
 		oNode.beneficiary.validate.nullTest ="disabled";
	}	

	oNode = xfa.resolveNode("form1.SBLC.thisApplication.radApplication");
	
	if (oNode.rawValue == "")	
	{
		oNode.uniform.validate.nullTest ="error";
 		oNode.international.validate.nullTest ="error";
	}
	else
	{
		oNode.uniform.validate.nullTest ="disabled";
 		oNode.international.validate.nullTest ="disabled";
	}		
	
	//BG
	oNode = xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate");
	
	if (oNode.rawValue == "")	
	{
		oNode.radSpecific.validate.nullTest ="error";
 		oNode.radFormat.validate.nullTest ="error";
		oNode.radDate.validate.nullTest ="error";
	}
	else
	{
		oNode.radSpecific.validate.nullTest ="disabled";
 		oNode.radFormat.validate.nullTest ="disabled";
		oNode.radDate.validate.nullTest ="disabled";
	}

	oNode = xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate");
	
	if (oNode.rawValue == "")	
	{
		oNode.radSpecific.validate.nullTest ="error";
 		oNode.radFormat.validate.nullTest ="error";
		oNode.radOpen.validate.nullTest ="error";
	}
	else
	{
		oNode.radSpecific.validate.nullTest ="disabled";
 		oNode.radFormat.validate.nullTest ="disabled";
		oNode.radOpen.validate.nullTest ="disabled";
	}

	oNode = xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate");
	
	if (oNode.rawValue == "")	
	{
		oNode.radSpecific.validate.nullTest ="error";
 		oNode.radFormat.validate.nullTest ="error";
		oNode.radExpiry.validate.nullTest ="error";
	}
	else
	{
		oNode.radSpecific.validate.nullTest ="disabled";
 		oNode.radFormat.validate.nullTest ="disabled";
		oNode.radExpiry.validate.nullTest ="disabled";
	}

	oNode = xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements");
	
	if (oNode.rawValue == "")	
	{
		oNode.radBank.validate.nullTest ="error";
 		oNode.radBranchOfBank.validate.nullTest ="error";
		oNode.radAgent.validate.nullTest ="error";
		oNode.radNominated.validate.nullTest ="error";
	}
	else
	{
		oNode.radBank.validate.nullTest ="disabled";
 		oNode.radBranchOfBank.validate.nullTest ="disabled";
		oNode.radAgent.validate.nullTest ="disabled";
		oNode.radNominated.validate.nullTest ="disabled";
	}

	oNode = xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG");
	
	if (oNode.rawValue == "")	
	{
		oNode.radSelf.validate.nullTest ="error";
 		oNode.radDirect.validate.nullTest ="error";
		oNode.radCourier.validate.nullTest ="error";
		oNode.radSWIFT.validate.nullTest ="error";
	}
	else
	{
		oNode.radSelf.validate.nullTest ="disabled";
 		oNode.radDirect.validate.nullTest ="disabled";
		oNode.radCourier.validate.nullTest ="disabled";
		oNode.radSWIFT.validate.nullTest ="disabled";
	}

	oNode = xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG");
	
	if (oNode.rawValue == "")	
	{
		oNode.radOriginal.validate.nullTest ="error";
 		oNode.radDirect.validate.nullTest ="error";
		oNode.radBack.validate.nullTest ="error";
	}
	else
	{
		oNode.radOriginal.validate.nullTest ="disabled";
 		oNode.radDirect.validate.nullTest ="disabled";
		oNode.radBack.validate.nullTest ="disabled";
	}	
	
	//SBLCA
	oNode = xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery");
	
	if (oNode.rawValue == "")	
	{
		oNode.contact.validate.nullTest ="error";
 		oNode.send.validate.nullTest ="error";
		oNode.freeText.validate.nullTest ="error";
	}
	else
	{
		oNode.contact.validate.nullTest ="disabled";
 		oNode.send.validate.nullTest ="disabled";
		oNode.freeText.validate.nullTest ="disabled";
	}
	
	oNode = xfa.resolveNode("form1.SBLCA.we.charges.radCharges");
		
	if (oNode.rawValue == "")	
	{
		oNode.applicant.validate.nullTest ="error";
		oNode.beneficiary.validate.nullTest ="error";
	}
	else
	{
		oNode.applicant.validate.nullTest ="disabled";
		oNode.beneficiary.validate.nullTest ="disabled";
	}			
	
	var sum = form1.SBLCA.amendments.amount.chkAmendAmount.rawValue + form1.SBLCA.amendments.expiryDate.chkAmendExpiryDate.rawValue + form1.SBLCA.amendments.amendText.text.chkAmendText.rawValue;

	if (sum != "000")
	{
		controlScript.mandatoryChange(form1.SBLCA.amendments.amount.chkAmendAmount, 0);
		controlScript.mandatoryChange(form1.SBLCA.amendments.expiryDate.chkAmendExpiryDate, 0);
		controlScript.mandatoryChange(form1.SBLCA.amendments.amendText.text.chkAmendText, 0);
		
	}
	
	else
	{
		controlScript.mandatoryChange(form1.SBLCA.amendments.amount.chkAmendAmount, 1);
		controlScript.mandatoryChange(form1.SBLCA.amendments.expiryDate.chkAmendExpiryDate, 1);
		controlScript.mandatoryChange(form1.SBLCA.amendments.amendText.text.chkAmendText, 1);
		
	}
	
	//EXPORT 
	oNode = xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment");
	
	if (oNode.rawValue == "")	
	{
		oNode.pre.validate.nullTest ="error";
 		oNode.preShip.validate.nullTest ="error";
		oNode.postShip.validate.nullTest ="error";
	}
	else
	{
		oNode.pre.validate.nullTest ="disabled";
 		oNode.preShip.validate.nullTest ="disabled";
		oNode.postShip.validate.nullTest ="disabled";
	}

	oNode = xfa.resolveNode("form1.EXPORT.subfrm.disbursement.radDisbursement");
	
	if (oNode.rawValue == "")	
	{
		oNode.credit.validate.nullTest ="error";
 		oNode.others.validate.nullTest ="error";
	}
	else
	{
		oNode.credit.validate.nullTest ="disabled";
 		oNode.others.validate.nullTest ="disabled";
	}		
	
	//BGA
	oNode = xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery");
	
	if (oNode.rawValue == "")	
	{
		oNode.contact.validate.nullTest ="error";
 		oNode.send.validate.nullTest ="error";
		oNode.freeText.validate.nullTest ="error";
	}
	else
	{
		oNode.contact.validate.nullTest ="disabled";
 		oNode.send.validate.nullTest ="disabled";
		oNode.freeText.validate.nullTest ="disabled";
	}
	
	var sum = form1.BGA.amendments.amount.chkAmendAmount.rawValue + form1.BGA.amendments.expiryDate.chkAmendExpiryDate.rawValue + form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate.rawValue + form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod.rawValue + form1.BGA.amendments.amendText.text.chkAmendText.rawValue;

	if (sum != "00000")
	{
		controlScript.mandatoryChange(form1.BGA.amendments.amount.chkAmendAmount, 0);
		controlScript.mandatoryChange(form1.BGA.amendments.expiryDate.chkAmendExpiryDate, 0);
		controlScript.mandatoryChange(form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate, 0);
		controlScript.mandatoryChange(form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod, 0);
		controlScript.mandatoryChange(form1.BGA.amendments.amendText.text.chkAmendText, 0);
	}
	
	else
	{
		controlScript.mandatoryChange(form1.BGA.amendments.amount.chkAmendAmount, 1);
		controlScript.mandatoryChange(form1.BGA.amendments.expiryDate.chkAmendExpiryDate, 1);
		controlScript.mandatoryChange(form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate, 1);
		controlScript.mandatoryChange(form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod, 1);
		controlScript.mandatoryChange(form1.BGA.amendments.amendText.text.chkAmendText, 1);
	}
			
}


function init()
{

	radioMandatoryCheck();
	
	form1.MainPage.presence = "visible";
	LC.presence = "hidden";
	LC_Amendment.presence = "hidden";
	LCTermsAndConditions.presence = "hidden";
	EBLC.presence = "hidden";
	EBLCTermsAndConditions.presence = "hidden";
	EBLCTermsAndConditions1.presence = "hidden";
	OBC.presence = "hidden";
	OBCTermsAndConditions.presence = "hidden";
	DBRP.presence = "hidden";
	BEOBC.presence = "hidden";
	BEEBLC.presence = "hidden";
	BEGeneric.presence = "hidden";
	SBLC.presence = "hidden";
	BG.presence = "hidden";
	SBLCA.presence = "hidden";
	EXPORT.presence = "hidden";
	BGA.presence = "hidden";
	
	controlScript.mandatoryChange( form1.MainPage.subfrmMain.chkRemitTheFunds, 1 );
	
	form1.MainPage.subfrmMain.chkRemitTheFunds.rawValue = "0";
	
	// load branch name 
	if (form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue != "" && form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue != null)
		getBranchName(form1.BG.requirementsOfIssuingBank.requirements.drpEntity.rawValue, form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry.rawValue);
	
}


function radioColorRemove()
{
	var oNode;
	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList");
	
	if ((oNode.rawValue != "") || (oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.FOB").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CFR").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CIF").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.LocalDelivery").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.Others").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.FCA").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CIP").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CPT").ui.oneOfChild.border.fill.color.value = normalColor;	
	}

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment.allowed").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment.notAllowed").ui.oneOfChild.border.fill.color.value = normalColor;	
	}

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))	
	{
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment.allowed").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment.notAllowed").ui.oneOfChild.border.fill.color.value = normalColor;	
	}

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))	
	{
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee.OrderOfBankBankLtd").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee.OrderBlankEndorse").ui.oneOfChild.border.fill.color.value = normalColor; 
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee.MadeOutTo").ui.oneOfChild.border.fill.color.value = normalColor; 			 
	}

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radFreight");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))	
	{
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radFreight.Prepaid").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radFreight.Collect").ui.oneOfChild.border.fill.color.value = normalColor; 	 		 
	}

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Prepaid").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Collect").ui.oneOfChild.border.fill.color.value = normalColor; 	  		 
	}

	oNode = xfa.resolveNode("form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList.Applicant").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList.Beneficiary").ui.oneOfChild.border.fill.color.value = normalColor; 
	}
	oNode = xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.radChargeAccount");

	if (oNode.rawValue != "")	
	{
		xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.radChargeAccount.Beneficiary").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.radChargeAccount.Applicant").ui.oneOfChild.border.fill.color.value = normalColor;
		
	}
	oNode = xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts");

	if (oNode.rawValue != "" || LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.chkTrustReceipts.rawValue == 0 )	
	{
		xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkSGD").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkForgeign").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.radTrustReceipts.chkApplyForward").ui.oneOfChild.border.fill.color.value = normalColor;
	}


	oNode = xfa.resolveNode("form1.OBC.subfrmOBC.subfrmTenor.radTenor");

	if (oNode.rawValue == "")	
	{
		xfa.resolveNode("form1.OBC.subfrmOBC.subfrmTenor.radTenor.Sight").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.OBC.subfrmOBC.subfrmTenor.radTenor.Term").ui.oneOfChild.border.fill.color.value = normalColor;
	}
	

	oNode = xfa.resolveNode("EBLC.subfrmEBLC.subfrmTenor.radTenor");

	if (oNode.rawValue == "")	
	{
		xfa.resolveNode("EBLC.subfrmEBLC.subfrmTenor.radTenor.Sight").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("EBLC.subfrmEBLC.subfrmTenor.radTenor.Term").ui.oneOfChild.border.fill.color.value = normalColor;
	}
	
	//===========DBRP=============//
	oNode = xfa.resolveNode("DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP");

	if (oNode.rawValue != "")	
	{
		xfa.resolveNode("DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP.BRP").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP.Loan").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP.seller").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("DBRP.subfrmAPF.subfrmForBankUse.subfrmBRP.radBRP.credit").ui.oneOfChild.border.fill.color.value = normalColor;
	}
	
	oNode = xfa.resolveNode("DBRP.subfrmAPF.subDocAtt.radDoc");
	if (oNode.rawValue != "")	
	{
		xfa.resolveNode("DBRP.subfrmAPF.subDocAtt.radDoc.INV").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("DBRP.subfrmAPF.subDocAtt.radDoc.SUM").ui.oneOfChild.border.fill.color.value = normalColor;
	}
	
	oNode = xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.radRemit");
	if (oNode.rawValue != "")	
	{
		xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.radRemit.remit").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.radRemit.credit").ui.oneOfChild.border.fill.color.value = normalColor;
	}
	
	oNode = xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.radInstructions");
	if (oNode.rawValue != "")	
	{
		xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.radInstructions.electronic").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.radInstructions.cashier").ui.oneOfChild.border.fill.color.value = normalColor;
	}
	
	oNode = xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.radSupYN");
	if (oNode.rawValue != "")	
	{
		xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.radSupYN.Yes").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("DBRP.subfrmAPF.subfrmInstructions.subfrmSupplier.radSupYN.No").ui.oneOfChild.border.fill.color.value = normalColor;
	}
	//===========DBRP=============//

	//SBLC
	oNode = xfa.resolveNode("form1.SBLC.partialAndCharges.subPartialDrawings.radPartial");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.SBLC.partialAndCharges.subPartialDrawings.radPartial.allowed").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLC.partialAndCharges.subPartialDrawings.radPartial.notAllowed").ui.oneOfChild.border.fill.color.value = normalColor;	
	}

	oNode = xfa.resolveNode("form1.SBLC.partialAndCharges.subCharges.radCharges");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.SBLC.partialAndCharges.subCharges.radCharges.applicant").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLC.partialAndCharges.subCharges.radCharges.beneficiary").ui.oneOfChild.border.fill.color.value = normalColor;	
	}

	oNode = xfa.resolveNode("form1.SBLC.thisApplication.radApplication");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.SBLC.thisApplication.radApplication.uniform").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLC.thisApplication.radApplication.international").ui.oneOfChild.border.fill.color.value = normalColor;	
	}
	
	//BG
	oNode = xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.radSpecific").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.radFormat").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.radDate").ui.oneOfChild.border.fill.color.value = normalColor;		
	}

	oNode = xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.radSpecific").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.radFormat").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.radOpen").ui.oneOfChild.border.fill.color.value = normalColor;
	}

	oNode = xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.radSpecific").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.radFormat").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.radExpiry").ui.oneOfChild.border.fill.color.value = normalColor;
	}

	oNode = xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements.radBank").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements.radBranchOfBank").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements.radAgent").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements.radNominated").ui.oneOfChild.border.fill.color.value = normalColor;
	}

	oNode = xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.radSelf").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.radDirect").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.radCourier").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.radSWIFT").ui.oneOfChild.border.fill.color.value = normalColor;
	}

	oNode = xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.radOriginal").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.radDirect").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.radBack").ui.oneOfChild.border.fill.color.value = normalColor;
	}	
	
	//SBLCA
	oNode = xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery.contact").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery.send").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery.freeText").ui.oneOfChild.border.fill.color.value = normalColor;	
	}
	
	oNode = xfa.resolveNode("form1.SBLCA.we.charges.radCharges");
		
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.SBLCA.we.charges.radCharges.applicant").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLCA.we.charges.radCharges.beneficiary").ui.oneOfChild.border.fill.color.value = normalColor;	
	}
	
	if ((form1.SBLCA.amendments.amount.chkAmendAmount.rawValue != "0") || (form1.SBLCA.amendments.expiryDate.chkAmendExpiryDate.rawValue != "0") || (form1.SBLCA.amendments.amendText.text.chkAmendText.rawValue != "0"))
	{
		xfa.resolveNode("form1.SBLCA.amendments.amount.chkAmendAmount").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLCA.amendments.expiryDate.chkAmendExpiryDate").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.SBLCA.amendments.amendText.text.chkAmendText").ui.oneOfChild.border.fill.color.value = normalColor;	
	}
	
	//EXPORT 
	oNode = xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.pre").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.preShip").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.postShip").ui.oneOfChild.border.fill.color.value = normalColor;		
	}

	oNode = xfa.resolveNode("form1.EXPORT.subfrm.disbursement.radDisbursement");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.EXPORT.subfrm.disbursement.radDisbursement.credit").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.EXPORT.subfrm.disbursement.radDisbursement.others").ui.oneOfChild.border.fill.color.value = normalColor;	
	}
	
	//BGA
	oNode = xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery");
	
	if ((oNode.rawValue != "")||(oNode.access == "readOnly"))
	{
		xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery.contact").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery.send").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery.freeText").ui.oneOfChild.border.fill.color.value = normalColor;	
	}
	
	if ((form1.BGA.amendments.amount.chkAmendAmount.rawValue != "0") || (form1.BGA.amendments.expiryDate.chkAmendExpiryDate.rawValue != "0") || (form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate.rawValue != "0") || (form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod.rawValue != "0") || (form1.BGA.amendments.amendText.text.chkAmendText.rawValue != "0"))
	{
		xfa.resolveNode("form1.BGA.amendments.amount.chkAmendAmount").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BGA.amendments.expiryDate.chkAmendExpiryDate").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BGA.amendments.amendText.text.chkAmendText").ui.oneOfChild.border.fill.color.value = normalColor;
	}
}

function populateDropDownlist(drp, type)
{
		drp.clearItems();
		
		if(type == "Short")
		{
			for (var i=0; i<currencyArray_Short.length; i++) 
			{
				drp.addItem(currencyArray_Short[++i], currencyArray_Short[--i]);			
				i++;
			}
	
		}else if(type == "FC")
		{
			for (var i=0; i<currencyArrayFC_Short.length; i++) 
			{
				drp.addItem(currencyArrayFC_Short[++i], currencyArrayFC_Short[--i]);			
				i++;
			}
	
		}
		else
		{
			for (var i=0; i<currencyArray.length; i++) 
			{
				drp.addItem(currencyArray[++i], currencyArray[--i]);			
				i++;
			}
		}
}



function checkBoxMandatoryChange( field1, field2)
{

  var sum = field1.rawValue + field2.rawValue;
  
	if (sum == "00")
	{
		field2.validate.nullTest = "error";
		field1.validate.nullTest = "error";
	}
	else
	{
		field2.validate.nullTest = "disabled";
		field1.validate.nullTest = "disabled";	
		field1.ui.oneOfChild.border.fill.color.value = normalColor;
		field2.ui.oneOfChild.border.fill.color.value = normalColor;
		

	}
	

}

function specialCharacterCheck()
{		
	if ( xfa.event.newText.match("[\\~]") != null)
	{
		xfa.event.change = "";
	}
}



function resetInit()
{
	if ( LC.presence == "visible") 
	{
		form1.LC.subfrmLC.subfrmCreditAmount.chkTolerance.execEvent("change");
 		form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.execEvent("change");

 //		form1.LC.subfrmLC.subfrmShipmentTo.subfrmLoadDeparture.presence = "hidden"
 //		form1.LC.subfrmLC.subfrmShipmentFrom.subfrmDischargeDestination.presence = "hidden";

		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPortOfLoad, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfReceipt, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmPlaceOfTakingInCharge, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmDispatchfrom, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentFrom.subfrmLoadDeparture.subfrmAirportOfDeparture, "hidden");

		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDischarge, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmForTransportationTo, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmDestination, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfFinalDestination, "hidden");
		controlScript.presenceChange( form1.LC.subfrmLC.subfrmShipmentTo.subfrmDischargeDestination.subfrmPlaceOfDelivery, "hidden");

 		form1.LC.subfrmLC.subfrmDrafts.sufrmDraft.chkDraft.execEvent("change");
 		form1.LC.subfrmLC.subfrmDrafts.chkFullSet.execEvent("change");
 		form1.LC.subfrmLC.subfrmOriginalAirWaybill.chkOriginalAirWaybill.execEvent("change");
 		form1.LC.subfrmLC.subfrmTransportDocumentsByDO.chkDeliveryOrderIn.execEvent("change");
 		form1.LC.subfrmLC.subfrmInsurance.chkInsurance.execEvent("change");
 		form1.LC.subfrmLC.subfrmBeneficiaryCertificate.chkBeneficiaryCertificate.execEvent("change");
 		form1.LC.subfrmLCFoot.subfrmInvoice.chkSignedCommercialInvoice.execEvent("change");
 		form1.LC.subfrmLCFoot.subfrmInvoice.chkPackingList.execEvent("change");
 		form1.LC.subfrmLCFoot.subfrmInvoice.chkWeightNote.execEvent("change");
 		form1.LC.subfrmLCFoot.subfrmInvoice.chkCertificateOfOrigin.execEvent("change");
 		form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.chkBankCharges.rawValue = 1;
 		form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmBankCharges.radChargeAccount.rawValue = "LAB";
 		form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.chkConfirmation.execEvent("change");
 		form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmIssuanceCharges.chkDebit.rawValue = 1;
 		form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.chkTrustReceipts.execEvent("change");
 		form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.chkForgeign.execEvent("change");
 		form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmSettlementInstructions.chkApplyForward.execEvent("change");
 		
		controlScript.currentDate( form1.pageSet.Page1.txtLCDate); 
 	}
	else if (EBLC.presence == "visible")
	{
		form1.EBLC.subfrmEBLC.subfrmTenor.radTenor.execEvent("change");
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest1.execEvent("change");
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest2.execEvent("change");
		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmOtherInstructions.chkCreditFund.execEvent("change");
 		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmOtherInstructions.chkRemitTheFunds.execEvent("change");
 		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmOtherInstructions.chkUseTheFunds.execEvent("change");
 		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmOtherInstructions.chkUseFX.execEvent("change");
 		form1.EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.radFinancing.execEvent("change");
 		
		controlScript.currentDate( form1.pageSet.Page1.txtEBLCDate ); 
 	}
 	else if (OBC.presence == "visible")
 	{
	 form1.OBC.subfrmOBC.subfrmTenor.radTenor.execEvent("change");
 	 form1.OBC.subfrmOBC.subfrmInterestDrawee.chkInterestDrawee.execEvent("change");
 	 form1.OBC.subfrmOBC.subfrmCreditFinancing.chkCreditFinancing.execEvent("change");
 	 form1.OBC.subfrmOBC.subfrmFXContract.chkFX.execEvent("change");
 	 
	 controlScript.currentDate( form1.pageSet.Page1.txtOBCDate); 
	}

}


function dateCompare( vardate1, vardate2 )
{
    if ((vardate1 == null)||(vardate2 == null))
        return false;
        
    var date1 = util.scand("yyyy-mm-dd", vardate1);
    var date2 = util.scand("yyyy-mm-dd", vardate2);
     
    if (date1==null || date2==null) return false;
   
    var nYear1 = date1.getFullYear();
    var nMonth1 = date1.getMonth() + 1;
    var nDay1 = date1.getDate();
    
    var nYear2 = date2.getFullYear();
    var nMonth2 = date2.getMonth() + 1;
    var nDay2 = date2.getDate();
    
    var mYear = nYear2 - nYear1;
    var mMonth = nMonth2 - nMonth1;
    var mDay = nDay2 - nDay1;
    
    if (mYear < 0)
        return true;
    else if ((mYear == 0)&&(mMonth < 0))
        return true;
    else if ((mYear == 0)&&(mMonth == 0)&&(mDay < 0))
        return true;
    else
        return false;
}




function exchangeMap( field )
{
	if(field != null)
	{
		var fName = field.name;
	
		var subfrmName = "";
		
		if (form1.BEEBLC.presence == "visible")
			 subfrmName = "BEEBLC";
		else if (form1.BEOBC.presence == "visible")
			 subfrmName = "BEOBC";
		else if (form1.BEGeneric.presence == "visible")
			 subfrmName = "BEGeneric";
		
		if(subfrmName == "")
			return;
		
		var tField = "form1." + subfrmName + ".subfrmSecond." + fName;

		if(tField != null && field.rawValue != null)
	 		xfa.resolveNode(tField).rawValue = field.rawValue;
	}
}


function versionCheck()
{
	var cVersion = xfa.host.version;
	
	if(cVersion.length > 1)
	{
		var array = cVersion.split(".");
		var arr1 = array[1].substr(0,1);
		var arr2 = array[1].substr(2,1);

		if ((parseInt(array[0]) == 8 && parseInt(arr1) == 1 && parseInt(arr2) < 3))
		{
			xfa.host.messageBox("This file appears to use a new format that this version of Reader does not support. It may not open or display correctly. please ensure that you uses v8.1.3 and above of the free Adobe Reader via http://www.adobe.com/reader website.","",3,0);
		}
	}			
}	

var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length * chrsz));}
function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length * chrsz));}
function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length * chrsz));}
function hex_hmac_sha1(key, data){ return binb2hex(core_hmac_sha1(key, data));}
function b64_hmac_sha1(key, data){ return binb2b64(core_hmac_sha1(key, data));}
function str_hmac_sha1(key, data){ return binb2str(core_hmac_sha1(key, data));}

/*
 * Perform a simple self-test to see if the VM is working
 */
function sha1_vm_test()
{
  return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function core_sha1(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++)
    {
      if(j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);

}

/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function sha1_ft(t, b, c, d)
{
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1_kt(t)
{
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}

/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
function core_hmac_sha1(key, data)
{
  var bkey = str2binb(key);
  if(bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
  return core_sha1(opad.concat(hash), 512 + 160);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i%32);
  return bin;
}

/*
 * Convert an array of big-endian words to a string
 */
function binb2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (32 - chrsz - i%32)) & mask);
  return str;
}

/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
function binb2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}





function checkSum()
{
	var now = new Date(); 
	
	var str = "" + now.getFullYear() + now.getMonth() + now.getDate() + now.getHours() + now.getMinutes()+ now.getSeconds() + Math.random();

	return hex_sha1(str);
}

function BEMapping_EBLC()
{
	//No

	if (form1.EBLC.subfrmEBLC.subfrmBankUse.txtDraftInvNo.rawValue != null)
	{
		accessChangeBE(form1.BEEBLC.subfrmFirst.txtNo, "readOnly" );
		accessChangeBE(form1.BEEBLC.subfrmSecond.txtNo, "readOnly" );
	
 		form1.BEEBLC.subfrmFirst.txtNo.rawValue = form1.EBLC.subfrmEBLC.subfrmBankUse.txtDraftInvNo.rawValue;
 		form1.BEEBLC.subfrmSecond.txtNo.rawValue = form1.EBLC.subfrmEBLC.subfrmBankUse.txtDraftInvNo.rawValue;

	}
	else
	{
		//accessChange( form1.BEEBLC.subfrmFirst.txtNo, "open" );
		accessChangeBE(  form1.BEEBLC.subfrmFirst.txtNo, "readOnly" );

 		form1.BEEBLC.subfrmFirst.txtNo.rawValue = null;
 		form1.BEEBLC.subfrmSecond.txtNo.rawValue = null;
	}


	//Exchange
	if ((EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue == null)||(EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue == "")
	||(EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.rawValue == null)||(EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.rawValue == ""))
	{
		//accessChange( BEEBLC.subfrmFirst.drpCurrency, "open" );
		//accessChange( BEEBLC.subfrmFirst.txtExchange, "open" );
		accessChangeBE( BEEBLC.subfrmFirst.drpCurrency, "readOnly" );
		accessChangeBE( BEEBLC.subfrmFirst.txtExchange, "readOnly" );
		
		BEEBLC.subfrmFirst.drpCurrency.rawValue = null;
		BEEBLC.subfrmSecond.drpCurrency.rawValue = null;

		BEEBLC.subfrmFirst.txtExchange.rawValue = null;
		BEEBLC.subfrmSecond.txtExchange.rawValue = null;
		
		BEEBLC.subfrmFirst.txtSum1.rawValue = null;
		BEEBLC.subfrmFirst.txtSum2.rawValue = null;
		BEEBLC.subfrmFirst.txtSum3.rawValue = null;
		
		BEEBLC.subfrmSecond.txtSum1.rawValue = null;
		BEEBLC.subfrmSecond.txtSum2.rawValue = null;
		BEEBLC.subfrmSecond.txtSum3.rawValue = null;
	}
	else
	{
		accessChangeBE( BEEBLC.subfrmFirst.drpCurrency, "readOnly" );
		accessChangeBE( BEEBLC.subfrmFirst.txtExchange, "readOnly" );
		

		BEEBLC.subfrmFirst.drpCurrency.rawValue = EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue;
		BEEBLC.subfrmSecond.drpCurrency.rawValue = EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.drpCurrency.rawValue;
			
		BEEBLC.subfrmFirst.drpCurrency.execEvent("exit");
		BEEBLC.subfrmSecond.drpCurrency.execEvent("exit");
			
		BEEBLC.subfrmFirst.txtExchange.rawValue =  EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.rawValue;
		BEEBLC.subfrmSecond.txtExchange.rawValue =  EBLC.subfrmEBLC.subfrmRight.subfrmCreditAmount.txtAmount.rawValue;
		
		BEEBLC.subfrmFirst.txtExchange.execEvent("exit");
	}

	//Tenor

	if ( form1.EBLC.subfrmEBLC.subfrmTenor.radTenor.rawValue == "N")
	{
		accessChangeBE( form1.BEEBLC.subfrmFirst.txtAt, "readOnly" );
		accessChangeBE( form1.BEEBLC.subfrmSecond.txtAt, "readOnly" );	
		
		var tString;		

		if (form1.EBLC.subfrmEBLC.subfrmTenor.txtTerm.rawValue == null)
				tString = " days ";
		else
				tString = form1.EBLC.subfrmEBLC.subfrmTenor.txtTerm.rawValue + " days ";
				
		if (form1.EBLC.subfrmEBLC.subfrmTenor.txtDaysAfter.rawValue != null)
						tString = tString + form1.EBLC.subfrmEBLC.subfrmTenor.txtDaysAfter.rawValue;
						
		if (tString == " days ")
			tString = "";

			form1.BEEBLC.subfrmFirst.txtAt.rawValue = tString;
			form1.BEEBLC.subfrmSecond.txtAt.rawValue = tString;
	}
	else if( form1.EBLC.subfrmEBLC.subfrmTenor.radTenor.rawValue == "Date")
	{
		accessChangeBE( form1.BEEBLC.subfrmFirst.txtAt, "readOnly" );
		
		form1.BEEBLC.subfrmFirst.txtAt.rawValue = EBLC.subfrmEBLC.subfrmTenor.txtTenorDate.rawValue;
		form1.BEEBLC.subfrmSecond.txtAt.rawValue = EBLC.subfrmEBLC.subfrmTenor.txtTenorDate.rawValue;
	}
	else if( form1.EBLC.subfrmEBLC.subfrmTenor.radTenor.rawValue == "Y")
	{
		accessChangeBE( form1.BEEBLC.subfrmFirst.txtAt, "readOnly" );
		
		form1.BEEBLC.subfrmFirst.txtAt.rawValue = "Sight";
		form1.BEEBLC.subfrmSecond.txtAt.rawValue = "Sight";
	}
	else
	{
		accessChangeBE( form1.BEOBC.subfrmFirst.txtAt, "open" );
		
		form1.BEEBLC.subfrmFirst.txtAt.rawValue = "";
		form1.BEEBLC.subfrmSecond.txtAt.rawValue = "";
	}


	if ((form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue == null) && (form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue == null))
	{
	
		accessChangeBE( form1.BEEBLC.subfrmFirst.txtValue1, "open" );
		accessChangeBE( form1.BEEBLC.subfrmFirst.txtValue2, "open" );
		accessChangeBE( form1.BEEBLC.subfrmFirst.txtValue3, "open" );

		form1.BEEBLC.subfrmFirst.txtValue1.rawValue = null;
		form1.BEEBLC.subfrmFirst.txtValue2.rawValue = null;
		form1.BEEBLC.subfrmFirst.txtValue3.rawValue = null;
		
		form1.BEEBLC.subfrmSecond.txtValue1.rawValue = null;
		form1.BEEBLC.subfrmSecond.txtValue2.rawValue = null;
		form1.BEEBLC.subfrmSecond.txtValue3.rawValue = null;
		
		form1.BEEBLC.subfrmFirst.txtTo1.rawValue = null;
 		form1.BEEBLC.subfrmFirst.txtTo2.rawValue = null;
 		form1.BEEBLC.subfrmFirst.txtTo3.rawValue = null;
 		
 		form1.BEEBLC.subfrmSecond.txtTo1.rawValue = null;
 		form1.BEEBLC.subfrmSecond.txtTo2.rawValue = null;
 		form1.BEEBLC.subfrmSecond.txtTo3.rawValue = null;
	}
	else
	{
	
	var strIssBankName ;
	if (form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue == null)
			strIssBankName = form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue;				
	else if (form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue == null)
			strIssBankName = form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue;	
	else
			strIssBankName = form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName.rawValue + " " + form1.EBLC.subfrmEBLC.subfrmRight.subfrmIssueBank.txtIssuingBankName1.rawValue;
		
		    
		var To1 = strIssBankName.substring(0,47);
		var To2 = strIssBankName.substring(47,100);
		var To3 = strIssBankName.substring(100,147);
		
		var To4 = strIssBankName.substring(0,35);
		var To5 = strIssBankName.substring(35,70);
		var To6 = strIssBankName.substring(70,100);

			
 		form1.BEEBLC.subfrmFirst.txtTo1.rawValue = To4;
 		form1.BEEBLC.subfrmFirst.txtTo2.rawValue = To5;
 		form1.BEEBLC.subfrmFirst.txtTo3.rawValue = To6;
 		
 		form1.BEEBLC.subfrmSecond.txtTo1.rawValue = To4;
 		form1.BEEBLC.subfrmSecond.txtTo2.rawValue = To5;
 		form1.BEEBLC.subfrmSecond.txtTo3.rawValue = To6;
 		
 		form1.BEEBLC.subfrmFirst.txtValue1.rawValue = To1;
 		form1.BEEBLC.subfrmFirst.txtValue2.rawValue = To2;
 		form1.BEEBLC.subfrmFirst.txtValue3.rawValue = To3;
 		
 		form1.BEEBLC.subfrmSecond.txtValue1.rawValue = To1;
 		form1.BEEBLC.subfrmSecond.txtValue2.rawValue = To2;
 		form1.BEEBLC.subfrmSecond.txtValue3.rawValue = To3;

		form1.BEEBLC.subfrmFirst.txtValue1.execEvent("exit");	
	}


	if ( form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtCreditNo.rawValue != null)
	{
		 accessChangeBE( form1.BEEBLC.subfrmFirst.txtDocumentary, "readOnly" );

		 form1.BEEBLC.subfrmFirst.txtDocumentary.rawValue =  form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtCreditNo.rawValue;
		 form1.BEEBLC.subfrmSecond.txtDocumentary.rawValue =  form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtCreditNo.rawValue;
	}
	else
	{
		 accessChangeBE( form1.BEEBLC.subfrmFirst.txtDocumentary, "open" );


		 form1.BEEBLC.subfrmFirst.txtDocumentary.rawValue = null;
		 form1.BEEBLC.subfrmSecond.txtDocumentary.rawValue = null;
	}

	if ( form1.EBLC.subfrmEBLC.subfrmRight.txtDated.rawValue != null){
		 accessChangeBE( form1.BEEBLC.subfrmFirst.txtDated, "readOnly" );
		 accessChangeBE( form1.BEEBLC.subfrmSecond.txtDated, "readOnly" );	

		 form1.BEEBLC.subfrmFirst.txtDated.rawValue =  form1.EBLC.subfrmEBLC.subfrmRight.txtDated.rawValue ;
		 form1.BEEBLC.subfrmSecond.txtDated.rawValue =  form1.EBLC.subfrmEBLC.subfrmRight.txtDated.rawValue ;
	}
	else{
		//accessChange( form1.BEEBLC.subfrmFirst.txtDated, "open" );
		accessChangeBE( form1.BEEBLC.subfrmFirst.txtDated, "readOnly" );

		form1.BEEBLC.subfrmFirst.txtDated.rawValue = null;
		form1.BEEBLC.subfrmSecond.txtDated.rawValue = null;
	}

	if ( form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtBeneficiaryName.rawValue != null)
	{
		//accessChange( form1.BEEBLC.subfrmFirst.txtFor1, "readOnly" );
		//accessChange( form1.BEEBLC.subfrmFirst.txtFor2, "readOnly" );		

 		form1.BEEBLC.subfrmFirst.txtFor1.rawValue = form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtBeneficiaryName.rawValue;
 		form1.BEEBLC.subfrmFirst.txtFor2.rawValue = form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtBeneficiaryName.rawValue;

 		form1.BEEBLC.subfrmSecond.txtFor1.rawValue = form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtBeneficiaryName.rawValue;
 		form1.BEEBLC.subfrmSecond.txtFor2.rawValue = form1.EBLC.subfrmEBLC.subfrmLeft.subfrmBeneficiary.txtBeneficiaryName.rawValue;

	}
	else
	{
		accessChangeBE(  form1.BEEBLC.subfrmFirst.txtFor1, "open" );
		accessChangeBE(  form1.BEEBLC.subfrmFirst.txtFor2, "open" );	
		
 		form1.BEEBLC.subfrmFirst.txtFor1.rawValue = null;
 		form1.BEEBLC.subfrmFirst.txtFor2.rawValue = null;

 		form1.BEEBLC.subfrmSecond.txtFor1.rawValue = null;
 		form1.BEEBLC.subfrmSecond.txtFor2.rawValue = null;
	}
}


function BEMapping_OBC()
{
	if ((OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue == null)||(OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue == "")
	    ||(OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.rawValue == null)||(OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.rawValue == ""))
	{
		accessChangeBE( BEOBC.subfrmFirst.drpCurrency, "open" );
		accessChangeBE( BEOBC.subfrmFirst.txtExchange, "open" );

		BEOBC.subfrmFirst.drpCurrency.rawValue = null;
		BEOBC.subfrmSecond.drpCurrency.rawValue = null;
		BEOBC.subfrmFirst.txtExchange.rawValue = null;
		BEOBC.subfrmSecond.txtExchange.rawValue = null;
		
		BEOBC.subfrmFirst.txtSum1.rawValue = null;
		BEOBC.subfrmFirst.txtSum2.rawValue = null;
		BEOBC.subfrmFirst.txtSum3.rawValue = null;
			
		BEOBC.subfrmSecond.txtSum1.rawValue = null;
		BEOBC.subfrmSecond.txtSum2.rawValue = null;
		BEOBC.subfrmSecond.txtSum3.rawValue = null;
	}
	else
	{
		accessChangeBE( BEOBC.subfrmFirst.drpCurrency, "readOnly" );
		accessChangeBE( BEOBC.subfrmFirst.txtExchange, "readOnly" );

		BEOBC.subfrmFirst.drpCurrency.rawValue = OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue;
		BEOBC.subfrmSecond.drpCurrency.rawValue = OBC.subfrmOBC.subfrmCurrencyAmount.drpCurrency.rawValue;
			
		BEOBC.subfrmFirst.drpCurrency.execEvent("exit");
		BEOBC.subfrmSecond.drpCurrency.execEvent("exit");
			
		BEOBC.subfrmFirst.txtExchange.rawValue =  OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.rawValue;
		BEOBC.subfrmSecond.txtExchange.rawValue =  OBC.subfrmOBC.subfrmCurrencyAmount.txtAmount.rawValue;
		
		BEOBC.subfrmFirst.txtExchange.execEvent("exit");
	}
	
	if ( form1.OBC.subfrmOBC.subfrmTenor.radTenor.rawValue == "N")
	{
		accessChangeBE( form1.BEOBC.subfrmFirst.txtAt, "readOnly" );
		accessChangeBE( form1.BEOBC.subfrmSecond.txtAt, "readOnly" );
	
		var tString;		
		if (form1.OBC.subfrmOBC.subfrmTenor.txtTerm.rawValue == null)
			tString = " days ";
		else
			tString = form1.OBC.subfrmOBC.subfrmTenor.txtTerm.rawValue + " days ";
		
		if (form1.OBC.subfrmOBC.subfrmTenor.txtDaysAfter.rawValue != null)
			tString = tString + form1.OBC.subfrmOBC.subfrmTenor.txtDaysAfter.rawValue;
				
		if (tString == " days ")
			tString = "";
		form1.BEOBC.subfrmFirst.txtAt.rawValue = tString; 	
		form1.BEOBC.subfrmSecond.txtAt.rawValue = tString; 	    
	}
	else if( form1.OBC.subfrmOBC.subfrmTenor.radTenor.rawValue == "Y")
	{
		accessChangeBE( form1.BEOBC.subfrmFirst.txtAt, "readOnly" );
		accessChangeBE( form1.BEOBC.subfrmSecond.txtAt, "readOnly" );
		
		form1.BEOBC.subfrmFirst.txtAt.rawValue = "Sight";
		form1.BEOBC.subfrmSecond.txtAt.rawValue = "Sight";
	}
	else
	{
		accessChangeBE( form1.BEOBC.subfrmFirst.txtAt, "open" );
		
		form1.BEOBC.subfrmFirst.txtAt.rawValue = null;
		form1.BEOBC.subfrmSecond.txtAt.rawValue = null;
	}
	
	if (form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName.rawValue != null)
	{
		//accessChangeBE(  form1.BEOBC.subfrmFirst.txtFor1, "readOnly" );
		//accessChangeBE(  form1.BEOBC.subfrmFirst.txtFor2, "readOnly" );			

 		form1.BEOBC.subfrmSecond.txtFor1.rawValue = form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName.rawValue;
 		form1.BEOBC.subfrmSecond.txtFor2.rawValue = form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName.rawValue;

 		form1.BEOBC.subfrmFirst.txtFor1.rawValue = form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName.rawValue;
 		form1.BEOBC.subfrmFirst.txtFor2.rawValue = form1.OBC.subfrmOBC.subfrmDrawer.subfrmNameAndAddress.txtName.rawValue;

	}
	else
	{			
		accessChangeBE(  form1.BEOBC.subfrmFirst.txtFor1, "open" );
		accessChangeBE(  form1.BEOBC.subfrmFirst.txtFor2, "open" );			

 		form1.BEOBC.subfrmSecond.txtFor1.rawValue = null;
 		form1.BEOBC.subfrmSecond.txtFor2.rawValue = null;

 		form1.BEOBC.subfrmFirst.txtFor1.rawValue = null;
 		form1.BEOBC.subfrmFirst.txtFor2.rawValue = null;
	}
	if(OBC.subfrmOBC.subfrmDrawee.txtDrawee.rawValue != null)
	{
		form1.BEOBC.subfrmFirst.txtTo1.rawValue = form1.OBC.subfrmOBC.subfrmDrawee.txtDrawee.rawValue;
 		
 		form1.BEOBC.subfrmSecond.txtTo1.rawValue = form1.OBC.subfrmOBC.subfrmDrawee.txtDrawee.rawValue;
	}
	else
	{
		accessChangeBE(  form1.BEOBC.subfrmFirst.txtTo1, "open" );
		accessChangeBE(  form1.BEOBC.subfrmSecond.txtTo1, "open" );			

 		form1.BEOBC.subfrmFirst.txtTo1.rawValue = null;
 		form1.BEOBC.subfrmSecond.txtTo1.rawValue = null;
	}
	
}





function resetMandatoryBackColor()
{
   var mandatoryArrayLength = mandatoryArray.length;
   var a;
   var firstBackColor = 0;
   var tValue;
   var tValueColor;
   var mandatoryEmpty = 0;
      
   for( var i = 0; i < mandatoryArrayLength; i++)
   {
   	  tValue = mandatoryArray[i];
   	  tValueColor = mandatoryArray[i] + ".ui.oneOfChild.border.fill.color";
   	  
   	  a = xfa.resolveNode(tValue).rawValue;

	  if ((xfa.resolveNode(tValue).name.substr(0,3) == "txt")||(xfa.resolveNode(tValue).name.substr(0,3) == "drp"))
	  {
	  	if (xfa.resolveNode(tValueColor).value != normalColor) 
  			xfa.resolveNode(tValueColor).value = normalColor;
	  }
	}
}





function radioColorRemoveReset()
{
	var oNode;
	
	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList");
	

		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.FOB").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CFR").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CIF").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.LocalDelivery").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.Others").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.FCA").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CIP").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPriceBasis.RadioButtonList.CPT").ui.oneOfChild.border.fill.color.value = normalColor;	

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment");
	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment.allowed").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radPartialShipment.notAllowed").ui.oneOfChild.border.fill.color.value = normalColor;	


	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment");
	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment.allowed").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmPartialshipment.radTranshipment.notAllowed").ui.oneOfChild.border.fill.color.value = normalColor;	

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee");
	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee.OrderOfBankBankLtd").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee.OrderBlankEndorse").ui.oneOfChild.border.fill.color.value = normalColor; 
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radConsignee.MadeOutTo").ui.oneOfChild.border.fill.color.value = normalColor; 			 

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radFreight");
	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radFreight.Prepaid").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmDrafts.radFreight.Collect").ui.oneOfChild.border.fill.color.value = normalColor; 	 		 

	oNode = xfa.resolveNode("form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList");
	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Prepaid").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLC.subfrmOriginalAirWaybill.radioButtonList.Collect").ui.oneOfChild.border.fill.color.value = normalColor; 	  		 

	oNode = xfa.resolveNode("form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList");
	
		xfa.resolveNode("form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList.Applicant").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.LC.subfrmLCFoot.subfrmDetails.subfrmOne.subfrmConfirmation.radioButtonList.Beneficiary").ui.oneOfChild.border.fill.color.value = normalColor; 

	oNode = xfa.resolveNode("form1.OBC.subfrmOBC.subfrmTenor.radTenor");

		xfa.resolveNode("form1.OBC.subfrmOBC.subfrmTenor.radTenor.Sight").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.OBC.subfrmOBC.subfrmTenor.radTenor.Term").ui.oneOfChild.border.fill.color.value = normalColor;

	oNode = xfa.resolveNode("EBLC.subfrmEBLC.subfrmTenor.radTenor");

		xfa.resolveNode("EBLC.subfrmEBLC.subfrmTenor.radTenor.Sight").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("EBLC.subfrmEBLC.subfrmTenor.radTenor.Term").ui.oneOfChild.border.fill.color.value = normalColor;
		
	oNode = xfa.resolveNode("EBLC.subfrmEBLC2.subfrmOtherInstructions.radProceedOptions");
		
		xfa.resolveNode("EBLC.subfrmEBLC2.subfrmOtherInstructions.radProceedOptions.immediately").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("EBLC.subfrmEBLC2.subfrmOtherInstructions.radProceedOptions.future").ui.oneOfChild.border.fill.color.value = normalColor;
		
	oNode = xfa.resolveNode("EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest1");
		
		xfa.resolveNode("EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest1.withRecourse").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest1.withoutRecourse").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest2.afterAccept").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("EBLC.subfrmEBLC.subfrmfinancing.subfrmFinancing.subfrmFinanceDetails.subfrmOptions.radRequest2.priorAccept").ui.oneOfChild.border.fill.color.value = normalColor;
	
	//SBLC
	oNode = xfa.resolveNode("form1.SBLC.partialAndCharges.subPartialDrawings.radPartial");
	
		xfa.resolveNode("form1.SBLC.partialAndCharges.subPartialDrawings.radPartial.allowed").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLC.partialAndCharges.subPartialDrawings.radPartial.notAllowed").ui.oneOfChild.border.fill.color.value = normalColor;	

	oNode = xfa.resolveNode("form1.SBLC.partialAndCharges.subCharges.radCharges");
	
		xfa.resolveNode("form1.SBLC.partialAndCharges.subCharges.radCharges.applicant").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLC.partialAndCharges.subCharges.radCharges.beneficiary").ui.oneOfChild.border.fill.color.value = normalColor;	

	oNode = xfa.resolveNode("form1.SBLC.thisApplication.radApplication");
	
		xfa.resolveNode("form1.SBLC.thisApplication.radApplication.uniform").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLC.thisApplication.radApplication.international").ui.oneOfChild.border.fill.color.value = normalColor;	
	
	//BG
	oNode = xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate");
	
		xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.radSpecific").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.radFormat").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.radEffectiveDate.radDate").ui.oneOfChild.border.fill.color.value = normalColor;		
	
	oNode = xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate");
	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.radSpecific").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.radFormat").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.radExpiryDate.radOpen").ui.oneOfChild.border.fill.color.value = normalColor;
		
	oNode = xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate");
	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.radSpecific").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.radFormat").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.radClaimExpiryDate.radExpiry").ui.oneOfChild.border.fill.color.value = normalColor;
		
	oNode = xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements");
	
		xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements.radBank").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements.radBranchOfBank").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements.radAgent").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BG.requirementsOfIssuingBank.requirements.radRequirements.radNominated").ui.oneOfChild.border.fill.color.value = normalColor;
		
	oNode = xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG");
	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.radSelf").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.radDirect").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.radCourier").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionA.radSG.radSWIFT").ui.oneOfChild.border.fill.color.value = normalColor;
		
	oNode = xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG");
	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.radOriginal").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.radDirect").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BG.deliveryInstructions.subDeliveryIns.sectionB.radNonSG.radBack").ui.oneOfChild.border.fill.color.value = normalColor;
	
	//SBLCA
	oNode = xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery");
	
		xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery.contact").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery.send").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.SBLCA.deliveryInstructions.radDelivery.freeText").ui.oneOfChild.border.fill.color.value = normalColor;
	
	oNode = xfa.resolveNode("form1.SBLCA.we.charges.radCharges");
		
	xfa.resolveNode("form1.SBLCA.we.charges.radCharges.applicant").ui.oneOfChild.border.fill.color.value = normalColor;	
	xfa.resolveNode("form1.SBLCA.we.charges.radCharges.beneficiary").ui.oneOfChild.border.fill.color.value = normalColor;
	
	xfa.resolveNode("form1.SBLCA.amendments.amount.chkAmendAmount").ui.oneOfChild.border.fill.color.value = normalColor;	
	xfa.resolveNode("form1.SBLCA.amendments.expiryDate.chkAmendExpiryDate").ui.oneOfChild.border.fill.color.value = normalColor;
	xfa.resolveNode("form1.SBLCA.amendments.amendText.text.chkAmendText").ui.oneOfChild.border.fill.color.value = normalColor;
		
	//EXPORT 
	oNode = xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment");
	
		xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.pre").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.preShip").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.EXPORT.subfrm.applicant.subfrmShipment.radShipment.postShip").ui.oneOfChild.border.fill.color.value = normalColor;		

	oNode = xfa.resolveNode("form1.EXPORT.subfrm.disbursement.radDisbursement");
	
		xfa.resolveNode("form1.EXPORT.subfrm.disbursement.radDisbursement.credit").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.EXPORT.subfrm.disbursement.radDisbursement.others").ui.oneOfChild.border.fill.color.value = normalColor;	
	
	//BGA
	oNode = xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery");
	
		xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery.contact").ui.oneOfChild.border.fill.color.value = normalColor;	
		xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery.send").ui.oneOfChild.border.fill.color.value = normalColor;
		xfa.resolveNode("form1.BGA.deliveryInstructions.radDelivery.freeText").ui.oneOfChild.border.fill.color.value = normalColor;
	
	xfa.resolveNode("form1.BGA.amendments.amount.chkAmendAmount").ui.oneOfChild.border.fill.color.value = normalColor;	
	xfa.resolveNode("form1.BGA.amendments.expiryDate.chkAmendExpiryDate").ui.oneOfChild.border.fill.color.value = normalColor;
	xfa.resolveNode("form1.BGA.amendments.claimExpiryDate.chkAmendClaimExpiryDate").ui.oneOfChild.border.fill.color.value = normalColor;	
	xfa.resolveNode("form1.BGA.amendments.claimPeriod.chkAmendClaimPeriod").ui.oneOfChild.border.fill.color.value = normalColor;
	xfa.resolveNode("form1.BGA.amendments.amendText.text.chkAmendText").ui.oneOfChild.border.fill.color.value = normalColor;
		
}

function mandatoryCheckBE( subfrm )
{
	var a=0;
	var oNodes = subfrm.resolveNodes("#field[*]");
		for( var i=0; i < oNodes.length; i++)
		{
			if((oNodes.item(i).mandatory == "error")&&(oNodes.item(i).rawValue == null))
			{ 
				//if(!((oNodes.item(i).name == "txtSum2")||(oNodes.item(i).name == "txtTo2")||(oNodes.item(i).name == "txtTo3")||(oNodes.item(i).name == "txtTo4")||(oNodes.item(i).name == "txtValue2")))
				//{
					oNodes.item(i).ui.oneOfChild.border.fill.color.value = mandatoryColor;
					a=1;
				//}
			}
			else
					oNodes.item(i).ui.oneOfChild.border.fill.color.value = normalColor;
		}
	return a;
}


function showCheckSumValue( field )
{
	//Added by hui zhi --- start
	var now = new Date();
	var date = now.getDate();
	var month = now.getMonth();
	var year = now.getFullYear();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	month = month+1;
	
	year = year.toString();
	year = year.substring(2,4);

	date = date.toString().length !=2 ? "0" + date.toString() : date.toString();
	month= month.toString().length !=2 ? "0" + month.toString() : month.toString();
	hours = hours.toString().length !=2 ? "0" + hours.toString() : hours.toString();
	minutes = minutes.toString().length !=2 ? "0" + minutes.toString() : minutes.toString();
	seconds = seconds.toString().length !=2 ? "0" + seconds.toString() : seconds.toString();
	
	var currentTiming = date + month + year + hours + minutes + seconds;
	//Added by hui zhi --- end
	
	if (MainPage.presence == "visible")
			field.rawValue = "";
	else if (LC.presence == "visible")
	{		
			field.rawValue = checkSumValue.value; 
	}
	else if (EBLC.presence == "visible")
			field.rawValue = checkSumValueEBLC.value;
	else if (OBC.presence == "visible")
			field.rawValue = checkSumValueOBC.value;
	else if (BEOBC.presence == "visible")
	{		
			field.rawValue = checkSumValueBEOBC.value;
	}
	else if (BEEBLC.presence == "visible")
	{		
			field.rawValue = checkSumValueBEEBLC.value;
	}
	else if (BEGeneric.presence == "visible")
	{		
			field.rawValue = checkSumValueBEGeneric.value;
	}
	else if (SBLC.presence == "visible")
	{		
			field.rawValue = checkSumValueSBLC.value;
	}
	else if (BG.presence == "visible")
	{		
			field.rawValue = checkSumValueBG.value;
	}
	else if (SBLCA.presence == "visible")
	{		
			field.rawValue = checkSumValueSBLCA.value;
	}
	else if (EXPORT.presence == "visible")
	{		
			field.rawValue = checkSumValueEXPORT.value;
	}
	else if (BGA.presence == "visible")
	{		
			field.rawValue = checkSumValueBGA.value;
	}
	
	//Added by hui zhi - start
	if(field.rawValue != null && field.rawValue != "" && field.rawValue != " ")
		field.rawValue =  field.rawValue + "-" + currentTiming;
	//Added by hui zhi - end
}

//Execute in change event
function ForceNumberAndDecimalOnly(field)
{
	if (xfa.event.change.match(/[^0-9\.]/) !== null) {
		// swallow the change
		xfa.event.change = "";
		// if the user has selected a range of characters,
		// then leave the range intact by re-setting the start/en
		xfa.event.selStart = 0;
		xfa.event.selEnd = 0;
	}
}

function changeUpper(){
	xfa.event.change = xfa.event.change.toString().toUpperCase();
}

function forceNumberOnly()
{	
	if(!xfa.event.change.match("^[0-9]*$"))
		xfa.event.change = "";
}

function forceAlphaNumericOnly()
{	
	if(!xfa.event.change.match("^[A-Za-z0-9]*$"))
		xfa.event.change = "";
}

function populateCountryList(drp)
{		
	drp.clearItems();
	
	for (var i=0; i<countryArray.length; i++) 
	{
		drp.addItem(countryArray[i+1], countryArray[i]);			
		i++;
	}
		
}

// effective, expiry and claim date checking for BG
function validateDate(varObject)
{
	//date format YYYY-MM-DD
	var dateVal = varObject.rawValue;
	if (dateVal == "" || dateVal == null) return true;

	//	Use regular expression to validate the date
	var reGeneral = "^((19[0-9]{2}|[2][0-9]{3})[-/.](0?[1-9]|1[012])[-/.](0?[1-9]|[12][0-9]|3[01]))$";
	var reMonth = "^(((19[0-9]{2}|[2][0-9]{3})[-/.](0?[246]|11)[-/.]31)|((19[0-9]{2}|[2][0-9]{3})[-/.](0?2)[-/.]30))$";

	if (dateVal.match(reGeneral) == null || dateVal.match(reMonth) != null) 
	{
		varObject.rawValue = "";
		xfa.host.setFocus(varObject.somExpression);
		return false;
	}
		
	var arrDate = dateVal.split("-");
	if (arrDate[1].length==1) arrDate[1] = "0" + arrDate[1];
	if (arrDate[2].length==1) arrDate[2] = "0" + arrDate[2];
	
	//	Finally do the Leap Year checking
	if (arrDate[2] >= 29 && arrDate[1]=="02") 
	{
		if (arrDate[0] % 4 != 0) 
		{
			varObject.rawValue = "";
			xfa.host.setFocus(varObject.somExpression);
			return false;
		}
	}	
	varObject.rawValue = arrDate.join("-");
	return true;
}

function checkOnExpiryDate()
{
	
	var arrEffectiveDate = form1.BG.thirdPartyAndEffectiveDate.subEffectiveDate.effectiveDate.txtSpecificDate.rawValue.split("-");
	var dtEffectiveDate = new Date(arrEffectiveDate[0], (arrEffectiveDate[1] * 1) - 1, arrEffectiveDate[2]);
	
	var arrExpiryDate = form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.txtSpecificDate.rawValue.split("-");
	var dtExpiryDate = new Date(arrExpiryDate[0], (arrExpiryDate[1] * 1) - 1, arrExpiryDate[2]);
	
	var arrClaimDate = form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtSpecificDate.rawValue.split("-");
	var dtClaimDate = new Date(arrClaimDate[0], (arrClaimDate[1] * 1) - 1, arrClaimDate[2]);

	//compare effective date
	if(dtEffectiveDate > dtExpiryDate)
	{
		form1.BG.expiryDateAndClaimExpiryDate.expiryDate.expireDate.txtSpecificDate.rawValue = "";
	}
	
	//compare expiry date
	if(dtExpiryDate > dtClaimDate)
	{
		form1.BG.expiryDateAndClaimExpiryDate.claimExpiryDate.claimExpiryDate.txtSpecificDate.rawValue = "";
	}
}

function compareEffectiveDate(date1, date2, isLessThan)
{	
	var arrCurrentFldDate = date1.rawValue.split("-");
	var dtCurrentFld = new Date(arrCurrentFldDate[0], (arrCurrentFldDate[1] * 1) - 1, arrCurrentFldDate[2]);

	if(date2.rawValue != "" && date2.rawValue != null)
	{
		var arrFldDate = date2.rawValue.split("-");
		var dtFld = new Date(arrFldDate[0], (arrFldDate[1] * 1) - 1, arrFldDate[2]);
		
		if(isLessThan)
		{
			if(dtCurrentFld <= dtFld)
			{
				app.alert("Expiry date cannot be earlier than or equal to effective date.");
				date1.rawValue = "";
				xfa.host.setFocus(date1.somExpression);
			}
		}
		else
		{
			if(dtCurrentFld >= dtFld)
			{
				app.alert("Expiry date cannot be earlier than or equal to effective date.");
				date1.rawValue = "";
				xfa.host.setFocus(date1.somExpression);
			}
		}
	}
}

function compareExpiryDate(date1, date2, isLessThan)
{	
	var arrCurrentFldDate = date1.rawValue.split("-");
	var dtCurrentFld = new Date(arrCurrentFldDate[0], (arrCurrentFldDate[1] * 1) - 1, arrCurrentFldDate[2]);

	if(date2.rawValue != "" && date2.rawValue != null)
	{
		var arrFldDate = date2.rawValue.split("-");
		var dtFld = new Date(arrFldDate[0], (arrFldDate[1] * 1) - 1, arrFldDate[2]);
		
		if(isLessThan)
		{
			if(dtCurrentFld < dtFld)
			{
				app.alert("Claim expiry date cannot be earlier than expiry date.");
				date1.rawValue = "";
				xfa.host.setFocus(date1.somExpression);
			}
		}
		else
		{
			if(dtCurrentFld > dtFld)
			{
				app.alert("Claim expiry date cannot be earlier than expiry date.");
				date1.rawValue = "";
				xfa.host.setFocus(date1.somExpression);
			}
		}
	}
}

function populateEntityList(drp)
{		
	if (drp.length > 0)
		return;
	
	for (var i=0; i<EntityArray.length; i++) 
	{
		drp.addItem(EntityArray[i+1], EntityArray[i]);			
		i++;
	}
		
}

function getBranchName(strEntity, strBranchName)
{
	var drpBranch = form1.BG.requirementsOfIssuingBank.requirements.drpBranchCountry;
	
	if (form1.BG.requirementsOfIssuingBank.requirements.radRequirements.rawValue == "2")
	{
		if (strEntity == "THE BANK LTD")
		{
			drpBranch.clearItems();
			//drpBranch.addItem("SINGAPORE (HEAD OFFICE)","00000000");
			drpBranch.addItem("DUBAI BRANCH","00001013");
			drpBranch.addItem("HONG KONG BRANCH","00000908");
			drpBranch.addItem("HO CHI MINH BRANCH","00002611");
			drpBranch.addItem("LABUAN BRANCH","00000912");
			drpBranch.addItem("LONDON BRANCH","00000903");
			//drpBranch.addItem("LOS ANGELES BRANCH","00004207");
			drpBranch.addItem("SEOUL BRANCH","00000904");
			drpBranch.addItem("SYDNEY BRANCH","00007032");
			drpBranch.addItem("TAIPEI BRANCH","00000905");
			//drpBranch.addItem("TOKYO BRANCH","00000901");
			drpBranch.addItem("OTHERS"," ");
			drpBranch.rawValue = "";
		}
		else if (strEntity == "THE BANK (CHINA) LTD")
		{
			drpBranch.clearItems();
			drpBranch.addItem("SHANGHAI BRANCH","81740000");
			drpBranch.addItem("BEIJING BRANCH","81740817");
			drpBranch.addItem("CHONGGING BRANCH","81740720");
			drpBranch.addItem("DONGGUAN BRANCH","81741130");
			drpBranch.addItem("SHANGHAI FREE TRADE ZONE SUB-BRANCH","81744306");
			drpBranch.addItem("GUANGZHOU BRANCH","81742207");
			drpBranch.addItem("HANGZHOU BRANCH","81742605");
			drpBranch.addItem("NANNING BRANCH","81745520");
			drpBranch.addItem("QINGDAO BRANCH","81742716");
			drpBranch.addItem("SHENZHEN BRANCH","81747112");
			drpBranch.addItem("SUZHOU BRANCH","81747031");
			drpBranch.addItem("TIANJIN BRANCH","81747409");
			drpBranch.addItem("XI'AN BRANCH","81749005");
			drpBranch.addItem("OTHERS"," ");
			drpBranch.rawValue = "";
		}
		else if (strEntity == "THE BANK (HONG KONG) LTD")
		{
			drpBranch.clearItems();
			drpBranch.addItem("HONGKONG BRANCH","53160000");
			drpBranch.addItem("MACAU BRANCH","39024601");
			drpBranch.addItem("OTHERS"," ");
			drpBranch.rawValue = "";
		}		
		else if (strEntity == "THE BANK LTD, INDIA")
		{
			drpBranch.clearItems();
			drpBranch.addItem("MUMBAI BRANCH","MUMBAI BRANCH");
			drpBranch.addItem("BANGALORE BRANCH","BANGALORE BRANCH");
			drpBranch.addItem("CHENNAI BRANCH","CHENNAI BRANCH");
			drpBranch.addItem("CUDDALORE BRANCH","CUDDALORE BRANCH");
			drpBranch.addItem("KOLHAPUR BRANCH","KOLHAPUR BRANCH");
			drpBranch.addItem("KOLKATA BRANCH","KOLKATA BRANCH");
			drpBranch.addItem("MORADABAD BRANCH","MORADABAD BRANCH");
			drpBranch.addItem("NASHIK BRANCH","NASHIK BRANCH");
			drpBranch.addItem("NEW DELHI BRANCH","NEW DELHI BRANCH");
			drpBranch.addItem("PUNE BRANCH","PUNE BRANCH");
			drpBranch.addItem("SALEM BRANCH","SALEM BRANCH");
			drpBranch.addItem("SURAT BRANCH","SURAT BRANCH");
			drpBranch.addItem("OTHERS"," ");
			drpBranch.rawValue = "";
		}
		else if (strEntity == "PT THE BANK INDONESIA")
		{
			drpBranch.clearItems();
			drpBranch.addItem("JAKARTA BRANCH","JAKARTA BRANCH");
			//drpBranch.addItem("BANDUNG BRANCH","BANDUNG BRANCH");
			drpBranch.addItem("MEDAN BRANCH","MEDAN BRANCH");
			//drpBranch.addItem("MAKASSAR BRANCH","MAKASSAR BRANCH");
			//drpBranch.addItem("PALEMBANG BRANCH","PALEMBANG BRANCH");
			//drpBranch.addItem("PEKANBARU BRANCH","PEKANBARU BRANCH");
			//drpBranch.addItem("PONTIANAK BRANCH","PONTIANAK BRANCH");
			//drpBranch.addItem("SAMARINDA BRANCH","SAMARINDA BRANCH");
			//drpBranch.addItem("SEMARANG BRANCH","SEMARANG BRANCH");
			drpBranch.addItem("SURABAYA BRANCH","SURABAYA BRANCH");
			//drpBranch.addItem("YOGYAKARTA BRANCH","YOGYAKARTA BRANCH");
			drpBranch.addItem("OTHERS"," ");
			drpBranch.rawValue = "";
		}
		else if (strEntity == "THE BANK (TAIWAN) LTD")
		{
			drpBranch.clearItems();
			drpBranch.addItem("TAIWAN BRANCH","63590000");
			drpBranch.addItem("OTHERS"," ");
			drpBranch.rawValue = "";
		}
		else if (strEntity == "OTHERS")
		{
			drpBranch.clearItems();
			drpBranch.rawValue = "";
		}	
	}
	
	if (strBranchName != null)
		drpBranch.rawValue = strBranchName;

}
function trim(stringToTrim){
	if(stringToTrim != null)
		stringToTrim  = stringToTrim.toString();
	if(stringToTrim == null || stringToTrim.length == 0)
		return null;
	else
		return ltrim(rtrim(stringToTrim));
}

