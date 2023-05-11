//make github page title APACHI-APP

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
    <br>
    <br>

  
  <button id="games" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="<--- add XMLHTTP request --->"> 
  games
  
  </button>
  
      <button id="system" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="<--- add XMLHTTP request --->"> 
  system
  
  </button>
  
      <button id="iframe" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="<--- add XMLHTTP request --->"> 
  iframe
  
  </button>
      
      
      <button id="proxy" style="background-color:black;border-color:green;color:green; width:60px;height:50px" onclick="<--- add XMLHTTP request --->"> 
  proxy
  
  </button>
  
    </div>

 </center>
   
 
  
  
  
  <title>Apachi Home</title>
  <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
 
</html>


      `;
}
Apachi_Open();
