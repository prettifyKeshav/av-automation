/*******************************
Common Java Script Functions 
Developed By- Atul chauhan
Date- 01-05-06
Updation on 18-05-06 
		(Add maxLen Function)
Update By- Atul Chauhan
Updation on 19-05-06
		(Add chkRadioList Function)
Update By- Atul Chauhan
Updation on 23-05-06
		(Add isEmail Function)
******************************/
var strError
function chkValue(objValue,value,strError)
	{
		if (objValue.value==value)
			{
				alert(strError)
				objValue.focus()
				strError=''
				return false
			}
		else
			return true
	
	}
function isValidURL(url){
    var RegExp = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    if(RegExp.test(url)){
        return true;
    }else{
        return false;
    }
}
function chkAlphaNum(objValue,strError)
	{
		var charpos = objValue.value.search("[^A-Za-z0-9' ']"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
				{ 
					if(!strError || strError.length ==0) 
						{ 
							strError = objValue.name+": Only alpha-numeric characters allowed "; 
						}//if 
					alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
					strError=''
					objValue.focus()
					return false
				}
		
	}
	
	function chkMinLen(objValue,cmdvalue,strError)
    {
	    if(eval(objValue.value.length) <  eval(cmdvalue)) 
		    { 
			    if(!strError || strError.length ==0) 
				    { 
					    strError = objValue.name + " : " + cmdvalue + " characters minimum  "; 
				    }//if               
			    alert(strError + "\n[Current length = " + objValue.value.length + " ]"); 
			    objValue.focus();
			    strError=''
			    return false;                 
		    }//if 
	    return true
    }


function chkMaxLen(objValue,cmdvalue,strError)
	{
		if(eval(objValue.value.length) >  eval(cmdvalue)) 
			{ 
				if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name + " : " + cmdvalue + " characters minimum  "; 
					}//if               
				alert(strError + "\n[Current length = " + objValue.value.length + " ]"); 
				objValue.focus();
				strError=''
				return false;                 
			}//if 
		return true
	}
function req(objValue,strError)
	{
		if(eval(objValue.value.length) == 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name + " : Required Field"; 
				}//if 
				objValue.focus();
				alert(strError); 
				strError=''
				return false; 
			}//if 
		else
			return true
	}
function chkDesc(objValue,strError)
	{
		var charpos = objValue.value.search("[^A-Za-z0-9\-_\\/\ ]"); 
		if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
			{ 
			strError = objValue.name+":characters allowed are 0-9,- and ,"; 
		}//if                             
		alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
		objValue.focus();
		return false; 
		}//if 
		else
		return true		
	}

function chkDesc1(objValue,strError)
	{
		var charpos = objValue.value.search("[^0-9\.,\ ]"); 
		if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
			{ 
			strError = objValue.name+": characters allowed are 0-9,- and,"; 
		}//if                             
		alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
		objValue.focus();
		return false; 
		}//if 
		else
				return true	
	}
function chkNum(objValue,strError)
	{
		var charpos = objValue.value.search("[^0-9]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": Only digits allowed "; 
						
					}//if               
                alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                strError=""
                objValue.focus()
                return false; 
              }//if 
             else
				return true
	}
function chkNumeric(objValue,strError)
	{
		var charpos = objValue.value.search("[^0-9 . 0-9]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": Only digits allowed "; 
						
					}//if               
                alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                strError=""
                objValue.focus()
                return false; 
              }//if 
             else
				return true
	}
	function chkNum1(objValue,strError)
	{
		var charpos = objValue.value.search("[^0-9 -]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": Only digits allowed "; 
						
					}//if               
                alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                strError=""
                objValue.focus()
                return false; 
              }//if 
             else
				return true
	}
	
	function chkAlpha(objValue,strError)
	{
		var charpos = objValue.value.search("[^A-Za-z' '/&]"); 
              if(objValue.value.length > 0 &&  charpos >= 0) 
              { 
                if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": Only Charecter allowed "; 
						
					}//if               
                alert(strError + "\n [Error character position " + eval(charpos+1)+"]"); 
                strError=""
                objValue.focus()
                return false; 
              }//if 
             else
				return true
	}
	
function maxLen(objValue,value,strError)
	{
		if(parseInt(objValue.value.length)>parseInt(value))
			{
				alert(strError+ "\n [Current length is " + objValue.value.length);
				return false;
			}	
	}
function chkRadioList(objValue,value,strError)
	{
		var chk=false;
		for(i=0;i<value;i++)
			{
				//objValue[i].style.border='none'
				if(objValue[i].checked)
					chk=true;
			}
		if(chk==false)
			{
				alert(strError);
				objValue[0].focus();
			}
		return chk;
	}
	function chkBoxList(objValue,value,strError)
	{
		var chk=false;
		for(i=0;i<value;i++)
			{
				//objValue[i].style.border='none'
				if(objValue[i].checked)
					chk=true;
			}
		if(chk==false)
			{
				alert(strError);
				objValue[0].focus();
			}
		return chk;
	}
function setRadioBorder(objValue,value)
	{
		for(i=0;i<value;i++)
			{
				objValue[i].style.border='none'
			}
	}
function charCode(objValue,charCode)
	{
		output=0
		for (var i = 0; i <objValue.value.length; i++) 
						{
							if (objValue.value.charCodeAt(i) == charCode) 
								{
									output +=1 
								} 
						}
		return output
	}
	

function isEmail(objValue)
{
	
	theValue=objValue.value
	objValue.focus()
	if(theValue!="")
		{
			var chk_mail = "true"
			var ch = ""
			var at = ""
			var dot=""
			theValue = trim(theValue) ;  /* ------  removes leading & trailing spaces ------ */
			var theLen = theValue.length 
											
			if(theValue.indexOf('@', 0) == -1)  /*---- if @ is not present ---- */
			{
				alert("Email must contain @ ");
				return(false) ;
			}
			if(theValue.charAt(0)=='@' || theValue.charAt(theLen)=='@' || theValue.charAt(theLen-1)=='@')
			{
				alert("@ not allowed at start or end of email") ;
				return false ;
			}
			
			/* ------  no dot allowed at start, end  ------ */
			if(theValue.charAt(0)=='.' || theValue.charAt(theLen)=='.' || theValue.charAt(theLen-1)=='.')
			{
				alert("Dot(.) not allowed at start or end of email") ;
				return false ;
			}
			
			at = theValue.indexOf('@', 0) ;

			dotat=theValue.indexOf('.',0) ;	

			if( theValue.charAt(dotat+1) == '.' || theValue.charAt(dotat+1) == '@' )
			{
				alert("Dot and @ are not allowed immediately following the dot in email") ;
				return false ;
			}

			/*  ----  no @ or dot allowed following @ ----  */
			if( theValue.charAt(at+1) == '.' || theValue.charAt(at+1) == '@' )
			{
				alert("Dot and @ are not allowed immediately following the @ in email") ;
				return false ;
			}
				
			if ((theValue.indexOf('@', at+1))!=-1)  /* ---  multiple @ in email-id  ---  */
			{
				alert("Multiple @ are not allowed in email ");
				return false ;
			}	
			
			/* ------  no @ allowed at start, end  ------ */
			
						
			if(theValue.indexOf(" ",0) != -1)  /* ---- blank spaces present in email-id  ----  */
			{
				alert("Blank spaces are not allowed in email") ;
				return false ;
			}

			for (k = 0 ; k < theLen ; ++k)
			{
				ch =  theValue.substring(k, k+1)
				if (ch =="@")
				{
					if(theValue.substring(k, theLen)=='@')
					{
						return false ;
					}
					if(theValue.indexOf('.', k) == -1) /* --- dot not present after @ ---  */
					{
						alert("Invalid Email Id")
						return false ;
					}
				}
				
				/*  ------  no dot allowed immediately following @  ------  */
				if ((ch == '.')&&(theValue.substring(k+1, k+2) == "."))
				{
					alert("Consecutive dots are not allowed in email") ;
					dot = k
					return false ;					
				}

				if (!( (ch >= 'a' && ch <= "z") || (ch >= 'A' && ch <= "Z") || (ch >= '0' && ch <= "9") || ch =="@" || ch =="." || ch =="_" || ch =="-" ))
				{
					alert("No special characters allowed except @, dot(.)") ;
					return false ;					
				}
			}  /* ---  end of for loop  ---  */

			for(var j=theValue.indexOf('.', at);j<=theLen;++j)
			{
				if(theValue.charAt(j)>='0' && theValue.charAt(j)<='9')
				{
					alert("Invalid domain name  ");
					return false;
					break;
				}
			}

		}
	return true            /*  ------ if no above condition found to be true ------  */
}  //   end of isEmail()

// -----------The Function trim() is used to trim the balnk Spaces ----------------
function trim(str)
{
	var strReturn = str ;
	var i = 0 ;
	for(i = 0;i< strReturn.length;i++)
	{
		if(!(strReturn.charAt(i)==' '))
			break ;
	}
	strReturn = strReturn.substring(i);
	for(i = strReturn.length ; i>0 ; i--)
	{
		if(!(strReturn.charAt(i-1)==' '))
			break;
	}
	strReturn = strReturn.substring(0,i);
	return strReturn;
}

//-----------------------END of Function trim ------------------------------------------


function persent(objValue,strError)
{
	if(objValue.value>100)
		{
			alert(strError)
			objValue.focus()
			return false
		}
	return true
}
function chkPassMatch(objValue,objCValue,strError)
{
if (objValue.value!=objCValue.value)
	{
		alert(strError)
		objValue.focus()
		strError=''
		return false
	}
else
	return true
} 
function SetDec(objvalue,str, places) { //chops decimal places to max number of places	
	//if (isNaN(str.replace(.))) {
	//alert("Percentage should be Numeric");
	//objvalue.focus();
	//return false	
	//}
   var ValidChars = "0123456789.";
   var IsNumber=true;
   var Char;
   
   for (i = 0; i < str.length && IsNumber == true; i++) 
      { 
      Char = str.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         alert("Percentage should be Numeric");
			objvalue.focus();
			return false	
         }
      }
    if((str>100)||(str<0))
   {
   alert("Percentage should be less than 100 and not be negative ");
	objvalue.focus();
	return false	
   }
	if (str.indexOf(".") != -1) {
	    if (places > 0) {
		str = str.substring(0, eval(str.indexOf(".")) + eval(places) + eval(1));
	    } else {
		str = str.substring(0, str.indexOf("."));
	    }
	}
	alert("only two decimal places are allowed");
	objvalue.focus();
	return false
}

function IsNumeric(sText,obj)
{
   var ValidChars = "0123456789.";
   var IsNumber=true;
   var Char;

 
   for (i = 0; i < sText.length && IsNumber == true; i++) 
      { 
      Char = sText.charAt(i); 
      if (ValidChars.indexOf(Char) == -1) 
         {
         IsNumber = false;
         alert("Percentage should be Numeric");
			obj.focus();
			return false	
         }
      }
   return true;
   
   }
   
   
   function lssel(objval)
   {
    var count=0;
        for (var item = 0; item < objval.length; item++)
        {
        count++;
        }
         if(count==0)
         {
          alert("Percentage should be Numeric");
          return false;
          }
     return true;
   }

function compareDates(value1,value2) 
{ 
   //var str1  = document.getElementById("txtDOB").value;
  // var str2  = document.getElementById("txtDOA").value;
   var dt1   = parseInt(value1.substring(0,2),10); 
   var mon1  = parseInt(value1.substring(3,5),10);
   var yr1   = parseInt(value1.substring(6,10),10); 
   var dt2   = parseInt(value2.substring(0,2),10); 
   var mon2  = parseInt(value2.substring(3,5),10); 
   var yr2   = parseInt(value2.substring(6,10),10); 
   var date1 = new Date(yr1, mon1, dt1); 
   var date2 = new Date(yr2, mon2, dt2); 

   if(date2 < date1)
   {
      alert("To date cannot be greater than from date");
      return false; 
   } 
 }

function compareDates1(from1,from2,cdate)
 {
//    var cur_dat=new Date();
//    var curdate=cur_dat.getDate();
//    var diff_dat=new Date();
//    diff_dat.setDate(curdate-datecount);
    

    var d1 =   Date.parse(from1.value);
    var d2 =   Date.parse(from2.value);
    var d3 =   cdate;
    
    if (d1 == d2 )
     {
      alert ("The two dates are same");
      return false;
    } 
    else if (d1 > d2)
     {
      alert ("From Date is Greater than To Date");
      return false;
    }
//    if(d1 < d3 || d2 < d3) 
//     {
//      alert ("Dates are before Current date");
////      return false;
//    }
}

function isValidDate(strValue,str1,obj)
{
	//DateValidate = true
	msg = str1 + "\n- Format: dd/mm/yyyy"
	strDate = new Array()
	strDate = strValue.split("/")	
	if (strDate.length !=3)
	{
		//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
	if ((strDate[0].indexOf('.', 0) != -1) || (strDate[1].indexOf('.',0) != -1) || (strDate[2].indexOf('.', 0) != -1))
	{
			msg = msg+"\n- Dot not Allowed in Date"
			//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
	if (isNaN(strDate[0]) || isNaN(strDate[1]) || isNaN(strDate[2]))
	{
			msg=msg+"\n- Character not Allowed"
			//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
	isleapyear =false
	if (strDate[2] % 4 == 0)
	{
	   if (strDate[2] % 100 == 0)
		{	if (strDate[2] % 400 == 0)
			{
			    isleapyear = true
			}
		}
		else
		{
			isleapyear = true
		}
	}

	if (strDate[2]>2100 || strDate[2]<1900)
	{
		msg=msg+"\n- Year out of Range"
		//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
	if (strDate[1]<=0 || strDate[1]>12)
	{
		msg=msg+"\n- Month Out of Range"
		//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
	if (strDate[0] <= 0 || (parseInt(strDate[1]) == 1 || parseInt(strDate[1]) == 3 || parseInt(strDate[1]) == 5 || parseInt(strDate[1]) == 7 || parseInt(strDate[1]) == 8 || parseInt(strDate[1]) == 10 || parseInt(strDate[1]) == 12) && parseInt(strDate[0])>31)
	{
		//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
	if (strDate[0] <= 0 ||  (parseInt(strDate[1]) == 4 || parseInt(strDate[1]) == 6 || parseInt(strDate[1]) == 9 || parseInt(strDate[1]) == 10)   &&  parseInt(strDate[0])>30)
	{
		//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
	if (strDate[0] <= 0 ||  parseInt(strDate[1])==2 && isleapyear==false && strDate[0]>28)
	{
		//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
	if (strDate[0] <= 0 || parseInt(strDate[1])==2 && isleapyear==true && strDate[0]>29)
	{
		//DateValidate = false
		alert(msg)
		obj.focus()
		//return DateValidate
		return false
	}
}


var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr,objvalue){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		alert("The date format should be : dd/mm/yyyy")
		objvalue.focus();
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Please enter a valid month")
		objvalue.focus();
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Please enter a valid day")
		objvalue.focus();
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		objvalue.focus();
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Please enter a valid date")
		objvalue.focus();
		return false
	}
return true
}



extArray = new Array(".jpg", ".gif");
    function LimitAttach(form, file,objvalue) 
    {
        allowSubmit = false;
        //if (!file) return;
        while (file.indexOf("\\") != -1)
        file = file.slice(file.indexOf("\\") + 1);
        ext = file.slice(file.indexOf(".")).toLowerCase();
        for (var i = 0; i < extArray.length; i++)
         {
            if (extArray[i] == ext) { allowSubmit = true; break; }
         }
            if (allowSubmit) return true;
            else
                alert("Only "
                + (extArray.join(" or ")) + " files can be upload");
                objvalue.focus();
                return false;
    }
    extArray1 = new Array(".doc");
    function LimitAttach1(form, file,objvalue) 
    {
        allowSubmit = false;
        //if (!file) return;
        while (file.indexOf("\\") != -1)
        file = file.slice(file.indexOf("\\") + 1);
        ext = file.slice(file.indexOf(".")).toLowerCase();
        for (var i = 0; i < extArray1.length; i++)
         {
            if (extArray1[i] == ext) { allowSubmit = true; break; }
         }
            if (allowSubmit) return true;
            else
                alert("Only "
                + (extArray1.join(" or ")) + " files can be upload");
                objvalue.focus();
                return false;
    }
    extArray2 = new Array(".pdf", ".doc",".txt");
    function LimitAttach2(form, file,objvalue) 
    {
        allowSubmit = false;
        //if (!file) return;
        while (file.indexOf("\\") != -1)
        file = file.slice(file.indexOf("\\") + 1);
        ext = file.slice(file.indexOf(".")).toLowerCase();
        for (var i = 0; i < extArray2.length; i++)
         {
            if (extArray2[i] == ext) { allowSubmit = true; break; }
         }
            if (allowSubmit) return true;
            else
                alert("Only "
                + (extArray2.join(" or ")) + " files can be upload");
                objvalue.focus();
                return false;
    }
    extArray3 = new Array(".xls");
    function LimitAttach3(form, file,objvalue) 
    {
        allowSubmit = false;
        //if (!file) return;
        while (file.indexOf("\\") != -1)
        file = file.slice(file.indexOf("\\") + 1);
        ext = file.slice(file.indexOf(".")).toLowerCase();
        for (var i = 0; i < extArray3.length; i++)
         {
            if (extArray3[i] == ext) { allowSubmit = true; break; }
         }
            if (allowSubmit) return true;
            else
                alert("Only "
                + (extArray3.join(" or ")) + " files can be upload");
                objvalue.focus();
                return false;
    }
 /*--------------------------------------------------------*/
 function IsNumb_decimal(Objstr)
            {
                // function allowed only number and decimal value 
//                mystring = str;
                mystring = Objstr.value;
                if (mystring.match(/^\d+$|^\d+\.\d{2}$/ ) ) 
                {
                    //alert("match");
                    return true;
                }
                else
                {
                    alert("Enter Digit ");
//                    return false;
                }                
            }
 
 /* FUNCTION ADDED BY DEEP FOR DATE COMPARISON */
           
function datecomp(strVal1,strVal2,obj)
{
    var dateSelected1=strVal1;
    var dateComp1=dateSelected1.substring(3,5)+'/'+dateSelected1.substring(0,2)+'/'+dateSelected1.substring(6,10);
    var dateSel1= new Date(dateComp1);
    var dateSelected2=strVal2;
    var dateComp2=dateSelected2.substring(3,5)+'/'+dateSelected2.substring(0,2)+'/'+dateSelected2.substring(6,10);
    var dateSel2= new Date(dateComp2);
    if(dateSel1 != '' && dateSel2 != '' && dateSel2 < dateSel1) 
    {	   
         alert('End Date should be greater then Start Date'); 
         obj.focus();        
         return false;  
    }
    else 
        return true;
}           

//FUNCTION ADDED BY DEEP FOR PREVIOUS DATE VALIDATION

function IsPreviousDate(strVal,obj)
{
    var dateSelected=strVal;
    var dateComp=dateSelected.substring(3,5)+'/'+dateSelected.substring(0,2)+'/'+dateSelected.substring(6,10);
    var dateSel= new Date(dateComp);
    var curDate1=new Date();
    var curDate=new Date(formatDate(curDate1,"MM/DD/YYYY"));
    if(dateSel != '' && dateSel < curDate) 
    {	   
         alert('Selected Date Cannot Be Earlier Than Today'); 
         obj.focus();        
         return false;  
    }
    else 
        return true;
}

function IsFutureDate(strVal,obj)
{
    var dateSelected=strVal;
    var dateComp=dateSelected.substring(3,5)+'/'+dateSelected.substring(0,2)+'/'+dateSelected.substring(6,10);
    var dateSel= new Date(dateComp);
    var curDate1=new Date();
    var curDate=new Date(formatDate(curDate1,"MM/DD/YYYY"));
    if(dateSel != '' && dateSel > curDate) 
    {	   
         alert('Selected Date Cannot Be Greator Than Today'); 
         obj.focus();        
         return false;  
    }
    else 
        return true;
}

function formatDate(dateValue, format) 
{ 
    var fmt = format.toUpperCase(); 
    var re = /^(M|MM|D|DD|YYYY)([\-\/]{1})(M|MM|D|DD|YYYY)(\2)(M|MM|D|DD|YYYY)$/; 
    if (!re.test(fmt)) { fmt = "MM/DD/YYYY"; } 
    if (fmt.indexOf("M") == -1) { fmt = "MM/DD/YYYY"; } 
    if (fmt.indexOf("D") == -1) { fmt = "MM/DD/YYYY"; } 
    if (fmt.indexOf("YYYY") == -1) { fmt = "MM/DD/YYYY"; } 

    var M = "" + (dateValue.getMonth()+1); 
    var MM = "0" + M; 
    MM = MM.substring(MM.length-2, MM.length); 
    var D = "" + (dateValue.getDate()); 
    var DD = "0" + D; 
    DD = DD.substring(DD.length-2, DD.length); 
    var YYYY = "" + (dateValue.getFullYear()); 
    
    var sep = "/"; 
    if (fmt.indexOf("-") != -1) { sep = "-"; } 
    var pieces = fmt.split(sep); 
    var result = ""; 

    switch (pieces[0]) { 
         case "M" : result += M + sep; break; 
         case "MM" : result += MM + sep; break; 
         case "D" : result += D + sep; break; 
         case "DD" : result += DD + sep; break; 
         case "YYYY" : result += YYYY + sep; break; 
    } 

    switch (pieces[1]) { 
         case "M" : result += M + sep; break; 
         case "MM" : result += MM + sep; break; 
         case "D" : result += D + sep; break; 
         case "DD" : result += DD + sep; break; 
         case "YYYY" : result += YYYY + sep; break; 
    } 

    switch (pieces[2]) { 
         case "M" : result += M; break; 
         case "MM" : result += MM; break; 
         case "D" : result += D; break; 
         case "DD" : result += DD; break; 
         case "YYYY" : result += YYYY; break; 
    }
    return result; 
}
//FUNCTION TO DISPALY TEXTLENGTH FOR MULTI LINE TEXT BOX
function ShowTextLength(ObjtxtBox,ObjLbl,NoOfChar)
{
        var txt=ObjtxtBox.value;
        var len = txt.length;
        if(len<=NoOfChar)
        {
            ObjLbl.innerHTML=len;
        }
        else
        {
            var str=txt.substring(0,150);          
            ObjtxtBox.value=str;
            alert('You have entered more than allowed character extra charcter would be truncated');
        }
}

var dtCh= "/";
var minYear=1900;
var maxYear=2100;

function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag){
	var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary (year){
	// February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31
		if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
		if (i==2) {this[i] = 29}
   } 
   return this
}

function isDate(dtStr,objvalue){
	var daysInMonth = DaysArray(12)
	var pos1=dtStr.indexOf(dtCh)
	var pos2=dtStr.indexOf(dtCh,pos1+1)
	var strDay=dtStr.substring(0,pos1)
	var strMonth=dtStr.substring(pos1+1,pos2)
	var strYear=dtStr.substring(pos2+1)
	strYr=strYear
	if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
	if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
	}
	month=parseInt(strMonth)
	day=parseInt(strDay)
	year=parseInt(strYr)
	if (pos1==-1 || pos2==-1){
		alert("The date format should be : dd/mm/yyyy")
		objvalue.focus();
		return false
	}
	if (strMonth.length<1 || month<1 || month>12){
		alert("Please enter a valid month")
		objvalue.focus();
		return false
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
		alert("Please enter a valid day")
		objvalue.focus();
		return false
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
		alert("Please enter a valid 4 digit year between "+minYear+" and "+maxYear)
		objvalue.focus();
		return false
	}
	if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
		alert("Please enter a valid date")
		objvalue.focus();
		return false
	}
return true
}

// Front End validation
//0. Only Number
function numeralsOnly(evt) {
    evt = (evt) ? evt : event;
    var charCode = (evt.charCode) ? evt.charCode : ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 46)) {
        alert("Enter Digit only in this field!");
        return false;
    }
    return true;
}

//2. Its No. Only Number
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//3. Master Page - Quick Inquiry
function PageCheckSubscribeMaster() {
    if (!req(document.getElementById("txtSubscribeEmailID"), "Please enter your email."))
        return false;
    if (!isEmail(document.getElementById("txtSubscribeEmailID"), "Please enter correct email id."))
        return false;
	$('.modal1_1').show();
}

//4. Master Page - Quick Inquiry
function PageCheckQuickInquiryMaster() {
    var txtPhoneNumber = document.getElementById("txtPhoneNo").value;
    if (!req(document.getElementById("txtFullName"), "Please enter your first name."))
        return false;
	if (!req(document.getElementById("txtLastName"), "Please enter your last name."))
        return false;
    if (!req(document.getElementById("txtEmailID"), "Please enter your email."))
        return false;
    if (!isEmail(document.getElementById("txtEmailID"), "Please enter correct email id."))
        return false;
    if (!req(document.getElementById("txtPhoneNo"), "Please enter your phone no."))
        return false;
    if (txtPhoneNumber.length < 10) {
        alert("Please enter 10 digits mobile number.");
        document.getElementById("txtPhoneNo").focus();
        return false;
    }
    if (!req(document.getElementById("textarea1"), "Please enter your message."))
        return false;
	$('.modal1_1').show();
}

//5 Master Page - Normal Inquiry
function PageCheckNormalInquiryMaster() {
    var txtPhoneNumber = document.getElementById("txtNormalPhoneNo").value;
    if (!req(document.getElementById("txtNormalFullName"), "Please enter your first name."))
        return false;
	if (!req(document.getElementById("txtNormalLastName"), "Please enter your last name."))
        return false;
    if (!req(document.getElementById("txtNormalEmailID"), "Please enter your email."))
        return false;
    if (!isEmail(document.getElementById("txtNormalEmailID"), "Please enter correct email id."))
        return false;
    if (!req(document.getElementById("txtNormalPhoneNo"), "Please enter your phone no."))
        return false;
    if (txtPhoneNumber.length < 10) {
        alert("Please enter 10 digits mobile number.");
        document.getElementById("txtNormalPhoneNo").focus();
        return false;
    }
    if (!req(document.getElementById("Normaltextarea1"), "Please enter your message."))
        return false;
	$('.modal1_1').show();
}


function pagecheckCareerEnquiry() {
    var txtPhone = document.getElementById("txtCareerPhoneNo").value;
    if (!req(document.getElementById("txtCareerFullName"), "Please enter your first name."))
        return false;
    if (!req(document.getElementById("txtCareerEmailID"), "Please enter your last name."))
        return false;
    if (!req(document.getElementById("txtCareerPhoneNo"), "Please enter contact no."))
        return false;
    if (txtPhone.length < 10) {
        alert("Please enter minimum 10 digits mobile no.");
        document.getElementById("txtCareerPhoneNo").focus();
        return false;
    }
    if (!req(document.getElementById("txtCareerEmailID"), "Please enter email id."))
        return false;
    if (!isEmail(document.getElementById("txtCareerEmailID"), "Please enter correct email id."))
        return false;
    if (!chkValue(document.getElementById("jobpostselect"), 0, "Please select job category."))
       return false;
    if (!req(document.getElementById("CareerResume"), "Choose cv to upload."))
        return false;
    if (!req(document.getElementById("Careertextarea1"), "Please entrt your message."))
        return false;
	$('.modal1_1').show();
}
