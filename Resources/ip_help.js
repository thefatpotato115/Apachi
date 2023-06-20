var e = document.createElement("div");
e.innerHTML=`                       
<div style="background-color:black;width:100%;height:100%">
<center>
<h1 style="color:green"> Ip help </h1> <button onclick='
req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/index.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

'> Back to launcher </button>
<br>
<br>
<p1 style="color:green"><font size="5"> problems with Apachis IpV4 verification? </font> </p1> 
<br>
<br>
<p1 style="color:green">if you are having problems you have came to the right place. </p1>


<p style="color:green"> if you are having problems with the ip system that might mean that its getting the wrong ip. </p>
<br>
<p style="color:green"> To fix this simply launch Apachi again and try. If this problem occurs again just spam the button untill it works :/</p>
<p style="color:green">  And launch Apachi again</p>
<br>
<br>
<p style="color:green"> <font size="3">IF YOU ARE BLACKLISTED</font></p>
<p style="color:green"> DO NOT TRY TO GET BACK IN YOU ARE LOCKED OUT FOR A RESON AND WILL NOT UNDER ANY CURCUMSTANCES BE LET BACK IN </p>





</center>
<title>Ip help </title>
</div>
                          `;
                        
var win = window.open();
win.document.body.appendChild(e);