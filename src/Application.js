function Apachi_Open() {
  var e = document.createElement("div");

  e.innerHTML = `
  <html>
  <body style="background: url(/Resources/background.png);">
  <center>
    <div style="width: 100%; height: 100%; background-color: black;">
      <text style="color: green;"> <h1>Apachi Version 1.3.0 secure</h1></text>

      <br>
      <text style="color: green;"> Welcome to the Apachi Proxy homepage. </text>

      <text style="color: green;"> Please use this tool wisely. We the APACHI dev team believe in the freedom of internet browsering without content filtering</text>
    <br>
<text style="color: green;"> Remember, YOU ONLY GET ONE CHANCE. There are no refunds in Apachi so if you leak then buddy you just lost 5$ </text>
    
    <br>
    <br>
    <br>

  
  <button id="games" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
  req1 = new XMLHttpRequest(); 
    req1.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/ip_blacklist.js'); 
    req1.onload = function() { window.close();eval(this.responseText); }; req1.send();
  else {
  req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/games.js'); 
      req.onload = function() { window.close();eval(this.responseText); }; 
      req.send();document.body.removeChild(e); }
      
      
      "> 
  Games
  
  </button>
  
      <button id="system" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
      req1 = new XMLHttpRequest(); 
    req1.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/ip_blacklist.js'); 
    req1.onload = function() { window.close();eval(this.responseText); }; req1.send();
      else{
      
      req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/system.js'); 
      req.onload = function() { window.close();eval(this.responseText); }; 
      req.send();document.body.removeChild(e);}
      
      
      "> 
  System
  
  </button>
  
      <button id="iframe" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
      
      req1 = new XMLHttpRequest(); 
    req1.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/ip_blacklist.js'); 
    req1.onload = function() { window.close();eval(this.responseText); }; req1.send();

    else {  

      req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/iframe.js'); 
      req.onload = function() { window.close();eval(this.responseText); }; 
      req.send();document.body.removeChild(e);}
      
      "> 
  Iframe
  
  </button>
      
      
      <button id="proxy" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
      
      req1 = new XMLHttpRequest(); 
    req1.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/ip_blacklist.js'); 
    req1.onload = function() { window.close();eval(this.responseText); }; req1.send();
      
    else {
      
      req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/proxy.js');
      req.onload = function() { window.close();eval(this.responseText); }; 
      req.send();}
      
      "> 
  Proxy
  
  </button>
  <br>
  <br>
  <br>
<br>
<p1 style="color:green"> DISCLAMER </p1>
<br>
<br>
<p1 style="color:green">APACHI is not responsible for any punishment on your behalf you get caught then thats on you </p1>
 <br> 
 <br>
 <p1 style="color:green">Please do not try to contact our dev team it gets quite annoying me would like to remain privet </p1>
 <br>
 <br>
 <p1 style="color:green">if any deployment method gets blocked then we will try to send a new one to you </p1>
 </div>
 </center>
 
   
 
  
  
  
  <title>Apachi Home</title>
  <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
 </body>
</html>


      `;
  var tab = window.open();
  tab.document.body.appendChild(e);
}
Apachi_Open();
