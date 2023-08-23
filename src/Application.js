function Apachi_Open() {
  var e = document.createElement("div");

  e.innerHTML = `
  <html>
  <body style="background: url(/Resources/background.png);">
  <center>
    <div style="width: 100%; height: 100%; background-color: black;" id="bg">
      <text style="color: green;" id="txt2"> <h1>Apachi Version 1.5.0 color</h1></text>
<text2 id="txt3" style="color:green">
      <br>
      <text> Welcome to the Apachi Proxy homepage. </text>

      <text > Please use this tool wisely. We the APACHI dev team believe in the freedom of internet browsering without content filtering</text>
    <br>
<text> Remember, YOU ONLY GET ONE CHANCE. There are no refunds in Apachi so if you leak then buddy you just lost 5$ </text>
    </text2>
<br>
<br>
<br
>
 
  <button id="games" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
 
  req = new XMLHttpRequest();
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/games.js');
      req.onload = function() { window.close();eval(this.responseText); };
      req.send();
     
     
      ">
  Games
 
  </button>
 
      <button id="system" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
     
     
     
     
      req = new XMLHttpRequest();
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/system.js');
      req.onload = function() { window.close();eval(this.responseText); };
      req.send();document.body.removeChild(e);
      req.send();
     
     
      ">
  System
 
  </button>
 
      <button id="iframe" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
     
     

      req = new XMLHttpRequest();
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/iframe.js');
      req.onload = function() { window.close();eval(this.responseText); };
      req.send();
     
      ">
  Iframe
 
  </button>
     
     
      <button id="proxy" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
     
     
     
      req = new XMLHttpRequest();
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/proxy.js');
      req.onload = function() { window.close();eval(this.responseText); };
      req.send();
     
      ">
  Proxy
 
  </button>
 
  <button id="theme" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="
  var color = document.getElementById('bg');
  var txtclr = document.getElementById('txt')
   var txtclr2 = document.getElementById('txt2')
    var txtclr3 = document.getElementById('txt3')
   var btn = document.getElementById('games')
   var btn2 = document.getElementById('system')
   var btn3 = document.getElementById('iframe')
   var btn4 = document.getElementById('proxy')
   var btn5 = document.getElementById('theme')
   
  var c1 = prompt('BG color');
  var c2 = prompt('Text color');
  var c3 = prompt('Button border color');
  var c4 = prompt('Button inner color');
 
 
  color.style='width:100%;height:100%;background-color:' + c1
  txtclr.style='color:' + c2
    txtclr2.style='color:' + c2
      txtclr3.style='color:' + c2
     
     
      btn.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
      btn2.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
      btn3.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
      btn4.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
      btn5.style='background-color:'+c4+';border-color:'+c3+';color:'+ c2+ '; width:60px;height:50px';
     
     
  "
 
 
 
 
  > theme</button>
  <br>
  <br>
  <br>
<br>
<p2 id="txt" style="color:green">
<p1> DISCLAMER </p1>
<br>
<br>
<p1 >APACHI is not responsible for any punishment on your behalf you get caught then thats on you </p1>
 <br>
 <br>
 <p1 >Please do not try to contact our dev team it gets quite annoying me would like to remain privet </p1>
 <br>
 <br>
 <p1 >if any deployment method gets blocked then we will try to send a new one to you </p1>
 </p2>
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