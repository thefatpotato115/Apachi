var i_e = document.createElement("div");
i_e.innerHTML = ` <div style="color:green;background-color:black;width:100%;height:100%"> <center><h1> Apachi system</h1>
<br>
<p1> Apachi system is an 'everything else' page were we put things that we cant fit into another category. currently we have Chat GPT, a game request form, and a bug report form.</p1>
<br>
<br>
<br>
<br>
<br>
<br>
<button style="color:green;background-color:black;border-color:green;width:100px;height:40px" onclick='var iframe = document.createElement("iframe"); iframe.src="https://m4qh56.sse.codesandbox.io/prefix/aHR0cHM6Ly9jaGF0Z3B0cHJveHkubWU=/"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
   '> Chat gpt </button>

   <button style="color:green;background-color:black;border-color:green;width:100px;height:40px" onclick='var iframe = document.createElement("iframe"); iframe.src="https://form.typeform.com/to/afCrigNp"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
   d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
   d.innerHTML="X";
   d.style="background-color:red";
   document.body.appendChild(d);
      '> Request a game </button> 
   
   <button style="color:green;background-color:black;border-color:green;width:100px;height:40px" onclick='var iframe = document.createElement("iframe"); iframe.src="https://form.typeform.com/to/TmtkSH1E"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
   d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
   d.innerHTML="X";
   d.style="background-color:red";
   document.body.appendChild(d);
      '> Report a bug </button>
</center>
<title>System</title>
 </div>`;
var tab = window.open();

tab.document.body.appendChild(i_e);
