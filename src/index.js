function Apachi_LaunchPage_Open() {
  var e = document.createElement("div");

  e.innerHTML = `
 <center>
        <div style="width:100%;height:100%;background-color:black; "> 
<text style="color:green"> <h1>Apachi Version 1.2.0</h1></text>

<br>
<text style="color:green"> You will need a code to access this page </text>
<br>
<br>
<text style="color:green"> Recent reports show Apachi is being used with out my knowledge. Please check if anyone is looking before use </text>
<br>
<br>
<text style="color:green"> So i have implemented this system. If anyone asks tell them NO i do not want to lose this agein </text>
<br>
<br>
<text style="color:green"> Or have this spiral out of control like last time</text>
<br>
<br>
<text style="color:green"> So, user please use this wisely. You have one chance</text>
<br>
<br>
<button onclick="window.open();" 
style="color:green;background-color:black;border-color:green"> test pop-ups </button>
<input style="background-color:black;color:green;border-color:green; width:40%"  
id="intp" type="password"> </input> 
<button style="color:green;background-color:black;border-color:green" 
onclick="

var cd = document.getElementById('intp').value;
req = new XMLHttpRequest(); 
req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/favicon_link.txt'); 
req.onload = function() {var x = atob(this.responseText);if(cd == x) { req2 = new XMLHttpRequest(); req2.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js'); 
req2.onload = function() { window.close();eval(this.responseText);}; req2.send();} else {window.open('https://discord.gg');} ;}; req.send();



        "> deploy paid </button> 
        <button onclick="req = new XMLHttpRequest(); 
req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Free/Free_index.js'); 
req.onload = function() { eval(this.responseText);} req.send(); " 
style=" color:green;background-color:black;border-color:green"> deploy free </button>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<text style ="color:green"> Terms of service may apply to any user money spent to get to this project does not matter to me because it has no effect on myself. If you have received this from a friend</text>
<br> <br> <text style ="color:green"> Then DO NOT COMPLAIN to them it only annoys your friend. Because of the passcode. If you have authorization to the project then you may have access </text>
<br>
<br>
<text style ="color:green"> if the password gets leaked by an authorized individual then it will change. so please be honest on what you do with this ;)</text>

<br>
<br>
<br>

<text style ="color:green"></text>
       </div> </center>
<title>Apachi launcher</title>
<link rel="icon" type="image/x-icon" href="/favicon.jpg">



      `;
  e.style = "background-color:black";
  var tab = window.open();
  tab.document.body.appendChild(e);
}

Apachi_LaunchPage_Open();
window.close();
window.close();
