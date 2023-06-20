var e = document.createElement("div");
e.innerHTML = `<title> Apachi Debug</title>
<center> 
<div style="background-color:black;width:100%;height:100%">
<h1 style="color:green"> Debug menu</h1>
<p1 style="color:green"><font size="3"> *note this is intended for developers only </font> </p1>
<br>
<br>
<p1 style="color:green"> <font size="3" id="ip_txt">ip:undefined </font> </p1>

<button onclick="
function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  var update = document.getElementById('ip_txt');
  update.innerHTML = "ip:" +ip;
  ;});" style="background-color:black;border-color:green;color:green"> Test ip </button>


<button style="color:green;background-color:black;border-color:green" 
onclick=""req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();
> Test blacklist </button>

<p1 style="color:green"> <font size="3"> Test iframe </font> </p1>
<br>
<br>
<p1 style="color:green"> *if you are not seeing a iframe to 'https://example.com' then you might have a wifi problem</p1>
<iframe style="width:25%;height:25%" src="https://example.com"> </iframe>
</div>
</center>
`;
var win = window.open();
win.document.body.appendChild(e);