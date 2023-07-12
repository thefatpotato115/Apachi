 var e = document.createElement("div");
e.innerHTML=`                       
<div style="background-color:black;width:100%;height:100%">
<center>
<h1 style="color:green"> Ip help </h1> <button onclick='
req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/index.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

' style="color:green;border-color:green;background-color:black"> Back to launcher </button>
<br>
<br>
<p1 style="color:green"><font size="5"> Problems with Apachi's IP verification? </font> </p1> 
<br>
<br>
<p1 style="color:green">If so, you have came to the right place. </p1>


<p style="color:green"> If you are having problems with the ip verification system that may mean that it is getting the wrong ip. </p>
<br>
<p style="color:green"> To fix this, simply launch Apachi again and try. If this problem occurs again just spam the button until it works :/</p>
<p style="color:green">  then, launch Apachi again. We apologize if you are not able to get in, and we will try to get it fixed.</p>
<br>
   <button style="color:green;background-color:black;border-color:green;width:300px;height:40px" onclick='var iframe = document.createElement("iframe"); iframe.src="https://form.typeform.com/to/TmtkSH1E"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
   d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
   d.innerHTML="X";
   d.style="background-color:red";
   document.body.appendChild(d);
      '>If the login continues to not work, report it here. </button>
<br>
<br>
<br>
<br>
<br>
<p style="color:red"> <font size="3">IF YOU ARE BLACKLISTED,</font></p>
<p style="color:red"> DO NOT TRY TO GET BACK IN. YOU ARE LOCKED OUT FOR A REASON AND WILL NOT UNDER ANY CURCUMSTANCES BE LET BACK IN </p>





</center>
<title>Ip help</title>
</div>
                          `;
                        
var win = window.open();
win.document.body.appendChild(e);