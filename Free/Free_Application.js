function Apachi_Open() {
  var e = document.createElement("div");

  e.innerHTML = `
  <html>
  <center>
    <div style="width: 100%; height: 100%; background-color: black;" id="bg">
      <text style="color:green;" id="txt"> <h1>Apachi Free Version 1.2.0 color</h1></text>

      <br> <p1 style="color:green" id="txt2">
      <text > Welcome to the Apachi Free Proxy homepage. </text>

      <text > please use this tool wisely. We the APACHI dev team believe in the freedom of internet browsering without content filtering</text>
    <br>
<text > Remember, This is not the full version. We have a paid one that costs 5$ it has more games more proxys and other stuff only on paid  </text></p1>
   
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
 
 <button id="theme" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
  var color = document.getElementById('bg');
  var txtclr = document.getElementById('txt')
   var txtclr2 = document.getElementById('txt2')
    var txtclr3 = document.getElementById('txt3')
   var btn = document.getElementById('games')
 
   var btn3 = document.getElementById('iframe')
   var btn4 = document.getElementById('proxy')
   var btn5 = document.getElementById('theme')
   
  var c1 = prompt('BG color');
  var c2 = prompt('Text color');
  var c3 = prompt('border color');
  var c4 = prompt('button inner color');
 
 
  color.style='width:100%;height:100%;background-color:' + c1
  txtclr.style='color:' + c2
    txtclr2.style='color:' + c2
      txtclr3.style='color:' + c2
     
     
      btn.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
      btn3.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
      btn4.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
      btn5.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
     
     
  "
 
 
 
 
  > theme</button>
 
  <br>
  <br>
  <br>
<br>
<p1 style="color:green" id="txt3"> DISCLAMER
<br>
<br>
 <p1>Apachi is not responsible for any punishment that may occur because of our product.</p1>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
 <p style="color:yellow"> <font size="3">TO UPGRADE TO APACHI PAID </p>
 <br>
 <p style="color:yellow">
 Method 1: Email
 </p>
 <p style="color:yellow">
 Email GetApachiPro@gmail.com for more information on how to purchase Apachi Pro.
 </p>
 <p style="color:yellow">
Option 2: Discord
</p>
<p style="color:yellow">
On another device, go to discord.gg/nxFtjs4jH9 and navigate to the 'Buy Apachi Pro' Channel for more information.
</p>
<p style="color:yellow">
Option 3: In-Person
</p>
<p style="color:yellow">
Find an Apachi sales representative and give them $5.
</p>
<p style="color:yellow">
 PRICE:5$ *note prices may change depending on demand
 </p>
 <p style="color:yellow">
 DISCLAMER: IF APACHI PRO IS LEAKED TO NON-PAID USERS, PASSWORD WILL BE CHANGED
 AND YOU WILL BE BLACKLISTED.

 </font>
</p>
 
 </center>
 
   </div>
 
 
 
 
 
  <title>Apachi Free</title>
  <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
 
</html>


      `;
  var tab = window.open();
  tab.document.body.appendChild(e);
}
Apachi_Open();