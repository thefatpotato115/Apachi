function Apachi_Open() {
  var e = document.createElement("div");

  e.innerHTML = `
  <html>
  <center>
    <div style="width: 100%; height: 100%; background-color: black;">
      <text style="color: green;"> <h1>Apachi Free Version 1.1.0</h1></text>

      <br>
      <text style="color: green;"> Welcome to the Apachi Free Proxy homepage. </text>

      <text style="color: green;"> please use this tool wisely. We the APACHI dev team believe in the freedom of internet browsering without content filtering</text>
    <br>
<text style="color: green;"> Remember, This is not the full version. We have a paid one that costs 5$ it has more games more proxys and other stuff only on paid  </text>
    
    <br>
    <br>
    <br>

  
  <button id="games" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Free/Free_files/games_free.js'); 
      req.onload = function() { window.close();eval(this.responseText); }; 
      req.send();document.body.removeChild(e);"> 
  Games
  
  </button>
  
     
  
      <button id="iframe" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Free/Free_files/iframe_free.js'); 
      req.onload = function() { window.close();eval(this.responseText); }; 
      req.send();document.body.removeChild(e);"> 
  Iframe
  
  </button>
      
      
      <button id="proxy" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Free/Free_files/proxy_free.js');
      req.onload = function() { window.close();eval(this.responseText); }; 
      req.send();"> 
  Proxy
  
  </button>
  <br>
  <br>
  <br>
<br>
<p1 style="color:green"> DISCLAMER </p1>
<br>
<br>
<p1 style="color:green">APACHI is not responsible for any punishment that may ocour</p1>
 </div>
 <br>
 <p style="color:yellow"> <font size="5">TO UPGRADE TO APACHI PAID 
 <br>
 <br>
 <br>
 EMAIL:apachipro328@gmail.com

 TRANSACTION METHOD: YOU WILL BE EMAILD THE METHOD
 
 PRICE:5$ *note prices may change depending on demmand
 
 DISCLAMER: IF APACHI PRO IS LEAKED TO NON-PAID USERS FILE WILL BECOME VOIDED
 AND YOU WILL BECOME BLACKLISTED. 

 </font>
</p> 
 
 </center>
 
   
 
  
  
  
  <title>Apachi Free Home</title>
  <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
 
</html>


      `;
  var tab = window.open();
  tab.document.body.appendChild(e);
}
Apachi_Open();
