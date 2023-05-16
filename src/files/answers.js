function Answers_Open() {
  var e = document.createElement("div");

  e.innerHTML = `
  <html>
    <center>
      <div style="width: 100%; height: 100%; background-color: black;">
        <text style="color: green;"> <h1>Apachi Version 2.0.1 Demo</h1></text>
  
        <br>
        <text style="color: green;"> Welcome to the Apachi answer database. </text>
  
        <text style="color: green;"> Currently we only have answers for math. </text>
<text style="color: green;"> Please select your math level. </text>
      <br>
      <br>
      <br>
  
    
    <button id="algebra" style="background-color:black;border-color:green;color:green;" onclick="req = new XMLHttpRequest(); 
        req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/Answers/Algebra.js'); 
        req.onload = function() { eval(this.responseText); }; 
        req.send();document.body.removeChild(e);"> 
    Algebra
    
    </button>
    <br>
    <br>
    <br>
        <button id="eighth-h" style="background-color:black;border-color:green;color:green;" onclick="req = new XMLHttpRequest(); 
        req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/Answers/Eighth-honors.js'); 
        req.onload = function() { eval(this.responseText); }; 
        req.send();document.body.removeChild(e);"> 
    8th Grade honors
    
    </button>
    <br>
    <br>
    <br>
        <button id="eighth" style="background-color:black;border-color:green;color:green;" onclick="req = new XMLHttpRequest(); 
        req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/Eighth/iframe.js'); 
        req.onload = function() { eval(this.responseText); }; 
        req.send();document.body.removeChild(e);"> 
    8th Grade
    
    </button>
        <br>
    <br>
        <br>
        
        <button id="seventh-h" style="background-color:black;border-color:green;color:green;" onclick="req = new XMLHttpRequest(); 
        req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/Answers/Seventh-honors.js'); 
        req.onload = function() { eval(this.responseText); }; 
        req.send();document.body.removeChild(e);"> 
    7th Grade honors
    
    </button>

    <br>
    <br>
    <br>
    <button id="seventh" style="background-color:black;border-color:green;color:green;" onclick="req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/Answers/Seventh.js'); 
    req.onload = function() { eval(this.responseText); }; 
    req.send();document.body.removeChild(e);"> 
7th Grade

</button>

      </div>
  
   </center>
     
   
    
    
    
    <title>Apachi Answers</title>
    <link rel="icon" type="image/x-icon" href="/Resources/favicon.jpg" />
   
  </html>
  


      `;
  var tab = window.open();
  tab.document.body.appendChild(e);
}
Answers_Open();
