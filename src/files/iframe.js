var i_e = document.createElement("div");
i_e.innerHTML = ` <div style="color:green;background-color:black;width:100%;height:100%"> <center><h1> Iframe</h1>
<br>
<p1> apachi offers a built-in Iframer so you can view websites directly form Apachi so extentions cant see them.</p1>
<br>
<br>
<br>
<br>
<br>
<br>
<input style="color:green;background-color:black;border-color:green;width:40%" id="search"> </input> 

<button style="background-color:black;border-color:green;color:green" onclick=' var i = document.getElementById("search").value;var iframe = document.createElement("iframe");iframe.src=i;iframe.style="width:100%;height:100%;";document.body.appendChild(iframe); 
         
         var o = document.createElement("button");
o.onclick= function() {window.open(iframe.src);};
o.innerHTML = "open as a tab";
o.style= "background-color:rgb(0,255,0)";

         
         var d = document.createElement("button");
             d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d);document.body.removeChild(o);};
             d.innerHTML="X";
             d.style="background-color:red";
             document.body.appendChild(d);
             document.body.appendChild(o);
              '> enter </button>
</center>
 </div>`;
 var tab = window.open();
 
 tab.document.body.appendChild(i_e);