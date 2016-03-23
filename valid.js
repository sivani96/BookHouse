function validate()
{
	var fn=reg.fname.value;
	var l=reg.lname.value;
	var u=reg.uname.value;
	var p=reg.pwd.value;
	var e=reg.eid.value;
	var ph=parseInt(reg.phno.value);
	var a=reg.add.value;
	if((fn=="")||(fn==null))
	{
		alert("Enter First Name");
		document.reg.fname.focus();
	}
	else if(!nameval(fn))
	{
		alert("Enter valid First Name");
		document.reg.fname.focus();
	}
	else if((l=="")||(l==null))
	{
		alert("Enter Last Name");
		document.reg.lname.focus();
	}
	else if(!nameval(l))
	{
		alert("Enter valid Last Name");
		document.reg.lname.focus();
	}
	else if((u=="")||(u==null))
	{
		alert("Enter Username");
		document.reg.uname.focus();
	}
	else if(!uval(u))
	{
		alert("Enter valid username");
		document.reg.uname.focus();
	}
	else if((p=="")||(p==null))
	{
		alert("Enter Password");
		document.reg.pwd.focus();
	}
	else if(!pval(p))
	{
		alert("Enter valid Password");
		document.reg.pwd.focus();
	}
	else if((e=="")||(e==null))
	{
		alert("Enter Email ID");
		document.reg.eid.focus();
	}
	else if(!eval(e))
	{
		alert("Enter valid Email ID");
		document.reg.eid.focus();
	}
	else if((reg.gender[0].checked==false)&&(reg.gender[1].checked==false))
	{
		alert("Select Gender");
		document.reg.gender.focus();
	}
	else if((ph=="")||(ph==null))
	{
		alert("Enter Phone no");
		document.reg.phno.focus();
	}
	else if(!phval(ph))
	{
		alert("Enter valid Phone no");
		document.reg.phno.focus();
	}
	else if(reg.dob_month.value=="-")
	{
		alert("Select DOB Month");
		document.reg.dob_month.focus();
	}
	else if(reg.dob_day.value=="-")
	{
		alert("Select DOB Day");
		document.reg.dob_day.focus();
	}
	else if(reg.dob_year.value=="-")
	{
		alert("Select DOB Year");
		document.reg.dob_year.focus();
	}
	else if((reg.lang[0].checked==false)&&(reg.lang[1].checked==false)&&(reg.lang[0].checked==false))
	{
		alert("Select Languages");
		document.reg.lang.focus();
	}
	else if((a=="")||(a==null))
	{
		alert("Enter Adderess");
		document.reg.add.focus();
	}
}
function nameval(n)
{
	var npat=/^[a-zA-Z]{6,20}$/;
	return npat.test(n);

}
function uval(u)
{
	var upat=/^[a-zA-Z0-9]{6,15}$/;
	return upat.test(u);
}
function pval(p)
{
	var ppat=/^[a-zA-Z0-9_]{8,20}$/;
	return ppat.test(p);
}
function eval(e)
{
	var epat=/^[a-z0-9_]+@[a-zA-Z0-9]+[a-zA-Z.]+$/;
	return epat.test(e);
}
function phval(ph)
{
		var phpat=/^[0-9]{10}$/;
		return phpat.test(ph);
}
