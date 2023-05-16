function Algebra_Open() {
  var e = document.createElement("div");

  e.innerHTML = `
  <html>
    <center>
      <div style="width: 100%; height: 100%; background-color: black;">
        <text style="color: green;"> <h1>Apachi Version 2.0.1 Demo</h1></text>
  
        <br>
        <text style="color: green;"> <p>Algebra I answers</p></text>
<br>
       <text style="color: green;"> <p>If this gets shut down, it will not be re-made. Please be careful.</p></text>
  <br>
  <text style="color: red;"> <p>*Please note that answers are not guaranteed to be correct and may not be updated.</p></text>
        
        </div>
  
        </center>
          
        
         
         
         
         <title>Apachi Answers</title>
         <link rel="icon" type="image/x-icon" href="/Resources/favicon.jpg" />
        
       </html>
       
     
     
           `;
       var tab = window.open();
       tab.document.body.appendChild(e);
     }
     Algebra_Open();