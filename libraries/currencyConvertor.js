// Shared script object form1.variables.currencyConvertor (Designer: Hierarchy > Variables)
// Extracted verbatim from Trade-Smartform.pdf (XFA template). Language: JavaScript.


var th = ['','Thousand','Million', 'Billion','Trillion'];
var dg = ['Zero','One','Two','Three','Four', 'Five','Six','Seven','Eight','Nine']; 
var tn = ['Ten','Eleven','Twelve','Thirteen', 'Fourteen','Fifteen','Sixteen', 'Seventeen','Eighteen','Nineteen']; 
var tw = ['Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety']; 

function toWords(s, fldCurrency)
{
	s = s.toString(); 	
    s = s.replace(/[\, ]/g,'');    
      
    var x = s.indexOf('.');     
     
    if (x == -1) x = s.length;      

    var n = s.split(''); 
    var str = ''; 
    var sk = 0; 
               
    for (var i=0; i < x; i++) 
    {
        if ((x-i)%3==2) 
        {
            if (n[i] == '1')
            {
            	str += tn[(n[i+1])] + ' '; 
            	i++; 
            	sk=1;
            } 
            else if (n[i]!=0) 
            {
                 str += tw[n[i]-2] + ' ';
                 sk=1;
            }
        } 
        else if (n[i]!=0)
        {
        	str += dg[n[i]] +' '; 
            
            if ((x-i)%3==0)
                  str += 'Hundred ';
                  sk=1;
        }

        if ((x-i)%3==1) 
        {
            if (sk) 
                str += th[(x-i-1)/3] + ' ';
                sk=0;
        }
    }
    
	//------------
	var array = s.split(".");
	var arr = array[1];
	
    if (x != s.length && arr != "00") 
    {
         var y = s.length; 
         str += 'and '; 
           
         for (var i=x+1; i<y; i++) 
         {
             // str += dg[n[i]] +' ';
 			if ((y-i)%3==2) 
       	    {
            	if (n[i] == '1')
            	{
            		str += tn[(n[i+1])] + ' '; 
            		i++; 
            		sk=1;
            	} 
            	else if (n[i]!=0) 
            	{
                 	str += tw[n[i]-2] + ' ';
                 	sk=1;
            	}
        	} 
        	else if (n[i]!=0)
        	{
        		str += dg[n[i]] +' '; 
            
            	if ((y-i)%3==0)
                  sk=1;
        	}
       }
       str = addDecimalCurrency(str,fldCurrency);
    } 
       
	str = fldCurrency + " " + str + " " + "only";
	
	    
    return str.replace(/\s+/g,' ');
}  

function addDecimalCurrency(strAmount,strCurrency)
{  	
	if(strCurrency == "USD" || strCurrency == "EUR" ||strCurrency == "SGD" ||strCurrency == "AUD" ||strCurrency == "BND" ||strCurrency == "CAD" ||
	   strCurrency == "CYP" ||strCurrency == "FJD" ||strCurrency == "HKD" || strCurrency == "KES" ||strCurrency == "MTL" ||strCurrency == "MUR" ||
	   strCurrency == "TWD" ||strCurrency == "NZD" ||strCurrency == "SCR" || strCurrency == "ZAR" ||strCurrency == "LKR")
	{
		strAmount += ' cents'; 
	}
	else if(strCurrency == "DKK" || strCurrency == "NOK" ||strCurrency == "SEK")
	{
		strAmount += ' ore'; 		
	}
	
	else if(strCurrency == "BHD" || strCurrency == "KWD" ||strCurrency == "AED")
	{
		strAmount += ' fils'; 		
	}
	
	else if(strCurrency == "ARS" || strCurrency == "BOB" ||strCurrency == "BRL" || strCurrency == "CLP" ||strCurrency == "MXN")
	{
		strAmount += ' centavo'; 		
	}
	
	else if(strCurrency == "EGP" || strCurrency == "JOD" ||strCurrency == "LBP")
	{
		strAmount += ' piastre'; 		
	}
	
	else if(strCurrency == "INR" || strCurrency == "PKR")
	{
		strAmount += ' paise'; 		
	}

	else if(strCurrency == "BDT")
	{
		strAmount += ' poisha'; 		
	}
	
	else if(strCurrency == "MMK")
	{
		strAmount += ' pyas'; 		
	}
	
	else if(strCurrency == "CNY" || strCurrency == "CNH")
	{
		strAmount += ' fen'; 		
	}
	
	else if(strCurrency == "CZK")
	{
		strAmount += ' haleru'; 		
	}
	
	else if(strCurrency == "GBP")
	{
		strAmount += ' pence'; 		
	}
	
	else if(strCurrency == "IRR")
	{
		strAmount += ' dinar'; 		
	}
	
	else if(strCurrency == "ILS")
	{
		strAmount += ' agora'; 		
	}
	
	else if(strCurrency == "MOP")
	{
		strAmount += ' avos'; 		
	}
	
	else if(strCurrency == "MYR")
	{
		strAmount += ' sen'; 		
	}
		
	else if(strCurrency == "PGK")
	{
		strAmount += ' toea'; 		
	}
	
	else if(strCurrency == "UYU")
	{
		strAmount += ' centesimos'; 	
	}
	
	else if(strCurrency == "PHP")
	{
		strAmount += ' sentimo'; 		
	}
	
	else if(strCurrency == "QAR")
	{
		strAmount += ' dirham'; 		
	}
	
	else if(strCurrency == "OMR")
	{
		strAmount += ' baisa'; 		
	}
		
	else if(strCurrency == "RUR")
	{
		strAmount += ' kopeks'; 		
	}
			
	else if(strCurrency == "SAR")
	{
		strAmount += ' halala'; 		
	}
	
	else if(strCurrency == "CHF")
	{
		strAmount += ' rappen'; 		
	}
	
	else if(strCurrency == "THB")
	{
		strAmount += ' satang'; 		
	}
	
	else if(strCurrency == "TND")
	{
		strAmount += ' milim'; 		
	}
			
	return strAmount;
}

// These attributes of the output textfields must be pre-defined
var FLD_HEIGHT = 15.591;		//	height of the textfield (measurement unit in points)

//================================================================
// GLOBAL FUNCTIONS
//================================================================

//	To get the formatted output string from the input string - compare height method
function massageString(inString, fldCompare)
{
	var objCompare = xfa.resolveNode(fldCompare);
	var len = inString.length;
	var iEnd = 0, curWord = "", outString = "";

	for (var i = 0; i < len; i++) {
		iEnd = getWholeWord(inString, i);
		curWord = inString.substr(i, iEnd+1);
		//	Assign dummy output one word at a time, and to compare the height
		objCompare.rawValue = outString + curWord;
		xfa.layout.relayout();

		if (xfa.layout.h(objCompare) > FLD_HEIGHT) 
		{			
			return outString;
		}
		outString += curWord;
		i += iEnd;
	}
	return outString;
}

//	To get the complete word from a position within a string
function getWholeWord(inString, iPos)
{
	var len = inString.length;
	var curChar = "";
	for (var i = iPos; i < len; i++) {
		curChar = inString.substr(i, 1);
		if (curChar == " " || curChar.charCodeAt(0) == 13) {return (i - iPos);}
		else if (i == (len - 1)) {return (i - iPos + 1);}
	}
	return 1;
}

//	Return remaining string from the original text
function cutString(inString, oriString)
{
	return oriString.substring(inString.length, oriString.length);	
}

