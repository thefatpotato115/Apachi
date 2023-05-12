function Apachi_Open() {
  var e = document.createElement("div");

  e.innerHTML = `
  <html>
  <center>
    <div style="width: 100%; height: 100%; background-color: black;">
      <text style="color: green;"> <h1>Apachi Version 2.0.1 Demo</h1></text>

      <br>
      <text style="color: green;"> Welcome to the Apachi Proxy homepage. </text>

      <text style="color: green;"> please use this tool wisely </text>
    <br>
<text style="color: green;"> Remember, YOU ONLY GET ONE CHANCE. </text>
    
    <br>
    <br>
    <br>

  
  <button id="games" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/games.js'); 
      req.onload = function() { eval(this.responseText); }; 
      req.send();document.body.removeChild(e);"> 
  games
  
  </button>
  
      <button id="system" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/iframe.js'); 
      req.onload = function() { eval(this.responseText); }; 
      req.send();document.body.removeChild(e);"> 
  system
  
  </button>
  
      <button id="iframe" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/system.js'); 
      req.onload = function() { eval(this.responseText); }; 
      req.send();document.body.removeChild(e);"> 
  iframe
  
  </button>
      
      
      <button id="proxy" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="req = new XMLHttpRequest(); 
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/files/proxy.js'); 
      req.onload = function() { eval(this.responseText); }; 
      req.send();document.body.removeChild(e);"> 
  proxy
  
  </button>
  
    </div>

 </center>
   
 
  
  
  
  <title>Apachi Home</title>
  <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
 
</html>


      `;
      var tab = window.open();
  tab.document.body.appendChild(e);
}
Apachi_Open();