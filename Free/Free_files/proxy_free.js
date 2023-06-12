var p_e = document.createElement("div");
p_e.innerHTML = `<body>


<div style="color:green;background-color:black;width:100%;height:100%">
<center>
<h1 style="color:green"> Apachi Free Proxy servers <button style="color:green;background-color:black;border-color:green"  onclick="
req = new XMLHttpRequest(); req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Free/Free_Application.js'); 
req.onload = function() { window.close();eval(this.responseText);}; req.send();
">Home</button> 
</h1>
<br>
<br>
<br>

<p1> Apachi offers a variety of proxy servers.</p1>

<p1>On our databace you can find taco proxy variations
Alloy proxy variations and VPNS (paid features) </p1>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<button id="taco_1" style="color:green;background-color:black;border-color:green;width:100px;height:40px" onclick='var iframe = document.createElement("iframe"); iframe.src="https://hscowe.sse.codesandbox.io/"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
   '> taco proxy </button>

<button id="alloy_1" style="color:green;background-color:black;border-color:green;width:100px;height:40px" onclick='var iframe = document.createElement("iframe"); iframe.src="https://ym8c5.sse.codesandbox.io/"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
   '> Alloy proxy </button>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



<h1>How to use? </h1>

<p1> First, click on the proxy server you want to deploy. Then scroll sown and type in a link. If it does not work try adding "https://" to the start of the link.


 </p1>
</center>

</body>
<title>Apachi Free Proxy</title>
           `;

var tab = window.open();

tab.document.body.appendChild(p_e);

