function Apachi_LaunchPage_Open() {
  
  var e = document.createElement("div");

  e.innerHTML = `
  <body style="background: url(/Resources/background.png);">
 <center>
        <div style="width:100%;height:100%;background-color:black; "> 
<text style="color:green"> <h1>Apachi Version 1.4.2 secure</h1> <h1 style="color:green" id="ip_txt">ip:undefined</h1> </text>

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
req.onload = function() {var x = atob(this.responseText);if(cd == x) { 
       req2 = new XMLHttpRequest(); req2.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js'); 
req2.onload = function() { 
   var g = document.getElementById('Launch_Options');
var value = g.value;
var type = g.options[g.selectedIndex].text;
if( type == 'Close Launcherpage On Open')
{ 
 window.close();eval(this.responseText);


        ;}


else if (type == 'Keep Launcherpage On Open' )

{ 
    eval(this.responseText);
 
        ;}
  }; 
  
  
  req2.send();} else {window.open('https://discord.gg');} ;}; req.send();



        "> deploy paid </button> 
         
        <button onclick="
        
        req = new XMLHttpRequest();         
req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Free/Free_Application.js'); 


req.onload = function() { 
  var g = document.getElementById('Launch_Options');
var value = g.value;
var type = g.options[g.selectedIndex].text;
if( type == 'Close Launcherpage On Open')
{ 

 window.close();eval(this.responseText);

        ;}


else if (type == 'Keep Launcherpage On Open')

{ 
   eval(this.responseText);
 
        ;}
  
  
  
 }; req.send();

" 
style=" color:green;background-color:black;border-color:green"> deploy free </button> 


<select id="Launch_Options" style="color:green;background-color:black;border-color:green">
  <option value="1" selected="selected"> Close Launcherpage On Open</option>
  <option value="2"> Keep Launcherpage On Open</option>
</select>

<br>
<br>
 <button style="color:green;background-color:black;border-color:green;" onclick="req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/ip_data.js');
    req.onload = function() {
      eval(this.responseText);
    };req.send();">Login via IpV4 address </button>
 
  <button style="color:green;background-color:black;border-color:green;" onclick="req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/ip_help.js');
    req.onload = function() {
      window.close();eval(this.responseText);
    };req.send();"> Ip help? </button>  
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
<h1 style="color:green">How to use </h1>
<p1 style="color:green"> To deploy Apachi Pro: Click "Login Via IpV4 address." This will pull a key from your computer and match it with our servers to identify you and log you in</p1>
<br>
<br>
<p1 style="color:green"> If this button does not work, use the password you were given when you purchased Apachi Pro. </p1>
<br>
<br>
<p1 style="color:green"> To deply free: click the button labeled "Deply Free" this will deply a free version of Apachi that has fewer features. To purchase Apachi Pro, go to the System page.
<text style ="color:green"></text>
       </div> </center>
<title>Apachi launcher</title>
<link rel="icon" type="image/x-icon" href="/favicon.jpg">
</body>

</body>

        `;
       function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];

  
  
  if (ip == '2600:1700')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  
  else if (ip == '') 


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  
  
   else {
         
         
         var tab = window.open();
         tab.document.body.appendChild(e);
      
      window.close();
      
      
                };
  
  
  
  
  }) 
       
       
      
      
      
      
      
      ;}
 
 
  Apachi_LaunchPage_Open();







