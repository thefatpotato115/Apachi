// start
var tab = window.open();

var E = document.createElement("div");
//setting setup
var c1l, c2l, c3l, c4l;

E.innerHTML = `
  <html>
  <body>
  
    <div style="width: 100%; height: 100%;" id="bg">


  
  <button id="games" style="background-color:black;border-color:green;color:green; width:60px;height:50px" > 
  Games
  
  </button> <br> <br>
  
      <button id="system" style="background-color:black;border-color:green;color:green; width:60px;height:50px" >
  System
  
  </button> <br> <br>
  
      <button id="iframe" style="background-color:black;border-color:green;color:green; width:60px;height:50px" >
  Iframe
  
  </button> <br> <br>
      
      
      <button id="proxy" style="background-color:black;border-color:green;color:green; width:60px;height:50px" 
      
     
      

      
      >
  Proxy
  
  </button> <br> <br>
  
  
 

</div>
 
   
  <title>Apachi 1.5.2</title>
  	




      
      <div>
 
  

  
  </div>
  
  <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
 </body>
<style id="styles">
  </style>
  <style > body{background-color:black}</style>

 </button>
</html>



      `;

//mouse thing

tab.document.body.appendChild(E);
	
var p = tab.document.getElementById("proxy"),
  i = tab.document.getElementById("iframe"),
  g = tab.document.getElementById("games"),
  s = tab.document.getElementById("system"),
  t = tab.document.getElementById("theme"),
  bg = tab.document.getElementById("bg"),
  st = tab.document.getElementById("styles");
//on mouse over *quality of life thing :/

p.onmouseover = function () {
 if(msu==true) 
 {p.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c6l +
    ";border-color:" +
    c6l;}
};
p.onmouseleave = function () {
  p.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c2l +
    ";border-color:" +
    c3l;
};

i.onmouseover = function () {
 if(msu==true) 
 {i.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c6l +
    ";border-color:" +
    c6l;}
};
i.onmouseleave = function () {
  i.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c2l +
    ";border-color:" +
    c3l;
};

g.onmouseover = function () {
  if(msu == true)
  {g.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c6l +
    ";border-color:" +
    c6l;}
};
g.onmouseleave = function () {
  g.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c2l +
    ";border-color:" +
    c3l;
};

s.onmouseover = function () {
if(msu == true){
  s.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c6l +
    ";border-color:" +
    c6l;}
};
s.onmouseleave = function () {
  s.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c2l +
    ";border-color:" +
    c3l;
};
//imgs
if(imgbg == true)
{
if (textL == "og"){
bg.style="background-image: url('"+linkog+"');width:100%;height:100%"}
else {
bg.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}

//onclicks

p.onclick = function () {
  var bing = tab.document.createElement("div");

  bing.innerHTML = `
  <div id="bgp" style="width:100%;height:2.5%"> <title> Apachi Proxy</title>
    <center> <button id="return"> return </button> <button id="ref"> refresh </button>	
    <txt id="is2"> server: <p1 id="prox"> </txt> </p1></center>
    </div> 
    <iframe id="frame" style= "width:100%;height:97.5%"> </iframe>
</div>   
<style id="prx">  body{background-color:black} </style>
<style >  body{background-color:black} </style>

`;

  tab.document.body.removeChild(E);
  tab.document.body.appendChild(bing);
  var bgpg = tab.document.getElementById("bgp");
  var frame = tab.document.getElementById("frame"),
    ref = tab.document.getElementById("ref"),
    txt2 = tab.document.getElementById("is2"),
    rgas = tab.document.getElementById("prx"),
    prox = tab.document.getElementById("prox");
  var retur = tab.document.getElementById("return");
if(msu == true) {
  ref.onmouseover = function () {
    ref.style =
      "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
  };
  ref.onmouseleave = function () {
    ref.style =
      "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
  };

  retur.onmouseover = function () {
    retur.style =
      "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
  };
  retur.onmouseleave = function () {
    retur.style =
      "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
  };
 }
  var links = "";

  if (BproxId == 1) {
    links = "https://rn3yg5-8080.csb.app/";
    prox.innerHTML = " taco";
    prox.style = "color:cyan";
  } else if (BproxId == 2) {
    links = "https://t3ck9-8080.csb.app/";
    prox.innerHTML = " alloy";
    prox.style = "color:silver";
  } else if (BproxId == 3) {
    links = "https://sxffrn-8000.csb.app/";
    prox.innerHTML = " astral";
    prox.style = "color:purple";
  } else if (BproxId == 4) {
    links = "https://proxyunblock.vercel.app";
    prox.innerHTML = " node unblocker (nw)";
    prox.style = "color:lime";
  } else if (BproxId == 5) {
    links = "https://ttrdln-8080.csb.app/";
    prox.innerHTML = " toast unblocker";
    prox.style = "color:brown";
  } else if (BproxId == 6) {
    links = "https://k9nnmj-8080.csb.app/";
    prox.innerHTML = "interstellar proxy";
    prox.style = "color:yellow";
  }
  frame.src = links;
  frame.style = "width:100%;height:97.5%";

  retur.onclick = function () {
    tab.document.body.removeChild(bing);
    tab.document.body.appendChild(E);
    p.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    i.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    g.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    s.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    bgpg.style = "background-color:" + c1l + ";width:100%;height:100%";
    if(imgbg == true)
{
if(textL == "og") {
bg.style="background-image: url('');width:100%;height:100%"; console.log("yay")}
else {
bg.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}

    if (rgb == true) {
      st.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        st.style =
          "body {background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
      }
    }
  };
  console.log("proxy");

  //set up themes

  if (themeC == false) {
    bgpg.style = "background-color:black";

    retur.style = "background-color:black ;border-color:green;color:green;";
    ref.style = "background-color:black;border-color:green;color:green";
    txt2.style = "color:green";
        if(imgbg == true)
{
if(textL == "og"){
bgp.style="background-image: url('');width:100%;height:100%"}
else {
bgp.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}
    if (rgb == true) {
      rgas.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        rgas.style =
          "#bgp {background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
      }
    }
  } else {
    bgpg.style.background = c1l;

    retur.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    ref.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    txt2.style = "color:" + c2l;
    if (rgb == true) {
      rgas.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        rgas.style =
          "bgp {background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
      }
    }
  }

  ref.onclick = function () {
    frame.src = links;
  };

  console.log("else rought");
};

//iframe onclick src
i.onclick = function () {
  var ifr = document.createElement("div");
  ifr.innerHTML = `
<div id="ifbg" style="width:100%;height:5%">
<center>
<title> Apachi iframe </title>
<button id="retu"> return </button> 

<button id="re"> enter </button>

<br> 

<input id="link" placeholder="https://wikipedia.org">
<button id="refresh"> refresh </button>
</center>
</div>
<iframe id="iframe" style="width:100%;height:100%">

</iframe>

<style id="ifr_sty"> </style>

<style> body{background-color:black} </style>
  `;
  tab.document.body.appendChild(ifr);
  tab.document.body.removeChild(E);

  var retu = tab.document.getElementById("retu"),
    ifbg = tab.document.getElementById("ifbg"),
    iframe = tab.document.getElementById("iframe"),
    re = tab.document.getElementById("re"),
    link = tab.document.getElementById("link"),
    refre = tab.document.getElementById("refresh"),
    rgs = tab.document.getElementById("ifr_sty");
    
	if(msu == true) {
  retu.onmouseover = function () {
    retu.style =
      "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
  };
  retu.onmouseleave = function () {
    retu.style =
      "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
  };

  re.onmouseover = function () {
    re.style =
      "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
  };
  re.onmouseleave = function () {
    re.style =
      "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
  };
  refre.onmouseover = function () {
   refre.style =
      "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
  };
  refre.onmouseleave = function () {
   refre.style =
      "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
  };
}
  retu.onclick = function () {
    tab.document.body.removeChild(ifr);
    tab.document.body.appendChild(E);
    p.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    i.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    g.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    s.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    bg.style = "background-color:" + c1l + ";width:100%;height:100%";
    if(imgbg == true)
{
if(textL == "og"){
bg.style="background-image: url('"+oglink+"');width:100%;height:100%"}
else {
bg.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}
    if (rgb == true) {
      st.innerHTML = rgbT + rgbstr;
    }
  };
  if (themeC == false) {
    ifbg.style = "background-color:black";
    link.style =
      "width:95%;background-color:black ;border-color:green;color:green;";
    retu.style = "background-color:black ;border-color:green;color:green;";
    re.style = "background-color:black;border-color:green;color:green";
    if(imgbg == true)
{
if(textL == "og"){
ifbg.style="background-image: url('"+oglink+"');width:100%;height:100%"}
else {
ifbg.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}
    if (rgb == true) {
      rgs.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        rgs.style =
          "#ifbg {background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
      }
    }
  } else {
    ifbg.style.background = c1l;

    link.style =
      "width:95%;background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      "";
    retu.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    re.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
      if(imgbg == true)
{
if(textL == "og"){
ifbg.style="background-image: url('"+oglink+"');width:100%;height:100%"}
else {
ifbg.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}
    if (rgb == true) {
      rgs.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        rgs.style =
          "#ifbg {background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
      }
    }
  }

  re.onclick = function () {
    iframe.src = link.value;
    ifbg.style.height = "2.5%";
  };

  console.log("else rought");
};

//games onclick src
g.onclick = function () {
  console.log("games");
};

//system onclick src
s.onclick = function () {
  //load pg
  var system_pg = tab.document.createElement("div");
  system_pg.innerHTML = `
  <div id="bgt" style="width:100%;height:100%">
    <center> <button id="home"> return </button></center>
<title> Apachi System</title>
<button class="b"> theme carry-over </button> <txt class="txt"> </txt> 
<br>
<br>
<p1 class='divider'> Themes </p1>
<br>
<br>
<button class="b"> bg color: </button> <txt class="txt"> </txt>
<br>
<button class="b"> text color: </button> <txt class="txt"> </txt>
<br>
<button class="b"> border color: </button> <txt class="txt"> </txt>
<br>
<button class="b"> button inner color: </button> <txt class="txt"> </txt>
<br>
<br>
<br>
<br>
<p1 class="divider"> proxy settings </p1>
<br>
<br>
<button class="b"> proxy server: </button> <txt class="txt"> </txt>
<br>
<br>
<p1 class="divider"> MORE THEMES </p1>
<br>
<br>
<button class="b"> rgb theme </button> <txt class="txt"> </txt>
<br>
<br>
<button class="b"> highlight color </button> <txt class="txt"> </txt>
<br>
<br>
<button class="b"> mouse highlight </button> <txt class="txt"> </txt>
<br>
<br>
<button class="b"> img bg </button> <txt class="txt"> </txt>
<br>
<br>
<input class="b" placeholder="insert img url here">  <button class="b"> upload </button>
</div>



	<style id="systemS"> </style>
  <style > body {background-color:black}</style>
 
`;

  tab.document.body.removeChild(E);
  tab.document.body.appendChild(system_pg);
  var syst_bg = tab.document.getElementById("bgt");

  //get elements

  var btns = tab.document.getElementsByClassName("b");
  var divi = tab.document.getElementsByClassName("divider");
  var home = tab.document.getElementById("home");
  var str = tab.document.getElementById("systemS");
  home.onclick = function () {
    tab.document.body.removeChild(system_pg);
    tab.document.body.appendChild(E);
    p.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    i.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    g.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    s.style =
      "background-color:" +
      c4l +
      " ;border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:60px;height:50px";
    bg.style = "background-color:" + c1l + ";width:100%;height:100%";
    if(imgbg == true)
{
if(textL == "og"){
bg.style="background-image: url('"+oglink+"');width:100%;height:100%"}
else {
bg.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}
    if (rgb == true) {
      st.innerHTML = rgbT + rgbstr;
    }
  };
  if(msu == true) {
  home.onmouseover = function () {
			home.style =
      "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l + ';width:100px;height:40px';
  };
  home.onmouseleave = function () {
    home.style =
      "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l + ';width:100px;height:40px';
  };
 }
  //set up themes

  if (themeC == false) {
    divi[0].style = "color:green";
    divi[1].style = "color:green";
    divi[2].style = "color:green";
    btns[0].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[1].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[2].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[3].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[4].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[5].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[6].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[7].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[8].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
		btns[9].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    btns[10].style =
      "background-color:black ;border-color:green;color:green;width:200px;height:20px";
		btns[11].style =
      "background-color:black ;border-color:green;color:green;width:50px;height:20px";
    home.style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    syst_bg.style.background = "black";
if(imgbg == true)
{
if(textL == "og"){
syst_bg.style="background-image: url('"+oglink+"');width:100%;height:100%"}
else {
syst_bg.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}
    if (rgb == true) {
      console.log("rgb");
      str.innerHTML =
        "body{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        syst_bg.style =
          "background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%";
      }
    }

    console.log("theme false rought");
  } else {
    divi[0].style = "color:" + c2l;
    divi[1].style = "color:" + c2l;
    divi[2].style = "color:" + c2l;
    btns[0].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    btns[1].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    btns[2].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    btns[3].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    btns[4].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    btns[5].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    btns[6].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    btns[7].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
 		btns[8].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    btns[9].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
	  btns[10].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:200px;height:20px";
    btns[11].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:50px;height:20px";
    home.style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
    syst_bg.style.background = c1l;
    var systS = tab.document.getElementById("systemS");
        if(imgbg == true)
{
if(textL == "og"){
syst_bg.style="background-image: url('"+oglink+"');width:100%;height:100%"}
else {
syst_bg.style="background-image: url('"+linke+"');width:100%;height:100%"

}

}
    if (rgb == true) {
      str.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        syst_bg.style =
          "background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%";
      }
    }
    console.log("else rought");
  }

  // stats
  var stat_text = tab.document.getElementsByClassName("txt");

  function setStatOn(num) {
    stat_text[num].innerHTML = "on";
    stat_text[num].style = "color:lime";
  }

  function setStatOff(num) {
    stat_text[num].innerHTML = "off";
    stat_text[num].style = "color:red";
  }
  // set up style stuff (boring)
  function changeProxy() {
    BproxId = BproxId + 1;

    if (BproxId == 1) {
      Bproxy = "taco";
      stat_text[5].style = "color:cyan";
    } else if (BproxId == 2) {
      Bproxy = "alloy ";
      stat_text[5].style = "color:silver";
    } else if (BproxId == 3) {
      Bproxy = "astral proxy";
      stat_text[5].style = "color:purple";
    } else if (BproxId == 4) {
      Bproxy = "node unblocker (nw)";
      stat_text[5].style = "color:lime";
    } else if (BproxId == 5) {
      Bproxy = "toast unblocker";
      stat_text[5].style = "color:brown";
    } else if (BproxId == 6) {
      Bproxy = "interstellar proxy";
      stat_text[5].style = "color:yellow";
    } else if (BproxId > 6) {
      BproxId = 0;
      Bproxy = "click again to reset";
      stat_text[5].style = "color:red";
    }
    stat_text[5].innerHTML = Bproxy;
  }

  function proxLoad() {
    if (BproxId == 1) {
      Bproxy = "taco";
      stat_text[5].style = "color:cyan";
    } else if (BproxId == 2) {
      Bproxy = "alloy ";
      stat_text[5].style = "color:silver";
    } else if (BproxId == 3) {
      Bproxy = "astral proxy";
      stat_text[5].style = "color:purple";
    } else if (BproxId == 4) {
      Bproxy = "node unblocker (nw)";
      stat_text[5].style = "color:lime";
    } else if (BproxId == 5) {
      stat_text[5].style = "color:brown";
    } else if (BproxId == 6) {
      Bproxy = "interstellar proxy";
      stat_text[5].style = "color:yellow";
    } else if (BproxId > 6) {
      BproxId = 0;
      Bproxy = "click again to reset";
      stat_text[5].style = "color:red";
    }
    stat_text[5].innerHTML = Bproxy;
  }

  function updateCols(id) {
    if (c1i == 1) {
      c1l = "red";
    } else if (c1i == 2) {
      c1l = "orange";
    } else if (c1i == 3) {
      c1l = "yellow";
    } else if (c1i == 4) {
      c1l = "lime";
    } else if (c1i == 5) {
      c1l = "green";
    } else if (c1i == 6) {
      c1l = "cyan";
    } else if (c1i == 7) {
      c1l = "blue";
    } else if (c1i == 8) {
      c1l = "purple";
    } else if (c1i == 9) {
      c1l = "pink";
    } else if (c1i == 0) {
      c1l = "black";
    }
    btns[id].style =
      "background-color:" +
      c1l +
      ";border-color:green;color:gold;width:100px;height:40px";
    btns[id].innerHTML = "bg color: " + c1l;
  }

  function updateCols2(id) {
    if (c2i == 1) {
      c2l = "red";
    } else if (c2i == 2) {
      c2l = "orange";
    } else if (c2i == 3) {
      c2l = "yellow";
    } else if (c2i == 4) {
      c2l = "lime";
    } else if (c2i == 5) {
      c2l = "green";
    } else if (c2i == 6) {
      c2l = "cyan";
    } else if (c2i == 7) {
      c2l = "blue";
    } else if (c2i == 8) {
      c2l = "purple";
    } else if (c2i == 9) {
      c2l = "pink";
    } else if (c2i == 0) {
      c2l = "black";
    }
    btns[id].style =
      "background-color:" +
      c2l +
      ";border-color:green;color:gold;width:100px;height:40px";
    btns[id].innerHTML = "text color: " + c2l;
  }

  function updateCols3(id) {
    if (c3i == 1) {
      c3l = "red";
    } else if (c3i == 2) {
      c3l = "orange";
    } else if (c3i == 3) {
      c3l = "yellow";
    } else if (c3i == 4) {
      c3l = "lime";
    } else if (c3i == 5) {
      c3l = "green";
    } else if (c3i == 6) {
      c3l = "cyan";
    } else if (c3i == 7) {
      c3l = "blue";
    } else if (c3i == 8) {
      c3l = "purple";
    } else if (c3i == 9) {
      c3l = "pink";
    } else if (c3i == 0) {
      c3l = "black";
    }
    btns[id].style =
      "background-color:" +
      c3l +
      ";border-color:green;color:gold;width:100px;height:40px";
    btns[id].innerHTML = "border color: " + c3l;
  }

  function updateCols4(id) {
    if (c4i == 1) {
      c4l = "red";
    } else if (c4i == 2) {
      c4l = "orange";
    } else if (c4i == 3) {
      c4l = "yellow";
    } else if (c4i == 4) {
      c4l = "lime";
    } else if (c4i == 5) {
      c4l = "green";
    } else if (c4i == 6) {
      c4l = "cyan";
    } else if (c4i == 7) {
      c4l = "blue";
    } else if (c4i == 8) {
      c4l = "purple";
    } else if (c4i == 9) {
      c4l = "pink";
    } else if (c4i == 0) {
      c4l = "black";
    }
    btns[id].style =
      "background-color:" +
      c4l +
      ";border-color:green;color:gold;width:100px;height:40px";
    btns[id].innerHTML = "button inner color: " + c4l;
  }

  function updateCols6(id) {
    if (c6i == 1) {
      c6l = "red";
    } else if (c6i == 2) {
      c6l = "orange";
    } else if (c6i == 3) {
      c6l = "yellow";
    } else if (c6i == 4) {
      c6l = "lime";
    } else if (c6i == 5) {
      c6l = "green";
    } else if (c6i == 6) {
      c6l = "cyan";
    } else if (c6i == 7) {
      c6l = "blue";
    } else if (c6i == 8) {
      c6l = "purple";
    } else if (c6i == 9) {
      c6l = "pink";
    } else if (c6i == 0) {
      c6l = "black";
    }
    btns[id].style =
      "background-color:" +
      c6l +
      ";border-color:green;color:gold;width:100px;height:40px";
    btns[id].innerHTML = "highlight color: " + c6l;
  }
  function updateCols5(id) {
    if (c5i == 1) {
      rgbT = "body";
      rgb = true;
    } else if (c5i == 2) {
      rgbT = "#bg";
    }

    btns[id].innerHTML = "rgb:" + rgbT;
  }
   function updateCols7(id) {
    if (c7i == 1) {
      linkog = "https://imagehost9.online-image-editor.com/oie_upload/images/111713141A82yiG/11181143b7g4JHz4.png";
      imgbg = true;
      textL = "og"
    } else if (c7i == 2) {
    	btns[10].value = linke
      textL = "custom"
    }

    btns[id].innerHTML = "img bg " + textL ;
  }

  function changeCol1() {
    c1i = c1i + 1;

    if (c1i > 9) {
      c1i = 0;
    }
    updateCols(1);
  }

  function changeCol2() {
    c2i = c2i + 1;

    if (c2i > 9) {
      c2i = 0;
    }
    updateCols2(2);
  }

  function changeCol3() {
    c3i = c3i + 1;

    if (c3i > 9) {
      c3i = 0;
    }
    updateCols3(3);
  }

  function changeCol4() {
    c4i = c4i + 1;

    if (c4i > 9) {
      c4i = 0;
    }
    updateCols4(4);
  }

  function changeCol5() {
    c5i = c5i + 1;

    if (c5i > 2) {
      st.innerHTML = "";
      rgb = false;
      rgbT = "";
      btns[6].innerHTML = "rgb";
      c5i = 0;
    }
    updateCols5(6);
  }
  
   function changeCol7() {
    c7i = c7i + 1;

    if (c7i > 2) {
  		textL = "off"
      imgbg = false
      btns[9].innerHTML = "";
      btns[10].value = ""
      c7i = 0;
    }
    updateCols7(9);
  }
  function changeCol6() {
    c6i = c6i + 1;

    if (c6i > 9) {
      c6i = 0;
    }
    updateCols6(7);
  }
  btns[0].onclick = function () {
    if (themeC == true) {
      themeC = false;
      setStatOff(0);
    } else {
      themeC = true;
      setStatOn(0);
    }
  };
  //setting onclicks colors :)

  btns[1].onclick = function () {
    changeCol1();
  };

  btns[2].onclick = function () {
    changeCol2();
  };

  btns[3].onclick = function () {
    changeCol3();
  };

  btns[4].onclick = function () {
    changeCol4();
  };
  //bing proxy
  btns[5].onclick = function () {
    changeProxy();
  };

  //other onclicks

  btns[6].onclick = function () {
    changeCol5();
    if (rgb == true) {
      setStatOn(6);
    } else {
      setStatOff(6);
    }
  };

  btns[7].onclick = function () {
    changeCol6();
  };
  btns[8].onclick = function () {
   if (msu == true) {
   		msu = false;
      setStatOff(8);
    } else {
    	msu = true
      setStatOn(8);
    }
  
  }
	btns[9].onclick = function () {
    changeCol7();
    if (imgbg == true) {
      setStatOn(9);
    } else {
      setStatOff(9);
    }
  };
  btns[11].onclick = function () {
  	linke = btns[10].value
  	btns[10].value =""
  }
  //on pg loads

  if (themeC == true) {
    setStatOn(0);
  } else {
    setStatOff(0);
  }

  if (rgb == true) {
    setStatOn(6);
  } else {
    setStatOff(6);
  }
  
  
   if (msu == false) {
      setStatOff(8);
    } else {
      setStatOn(8);
    }
	if (imgbg == true) {
      setStatOn(9);
    } else {
      setStatOff(9);
    }

  updateCols(1);
  updateCols2(2);
  updateCols3(3);
  updateCols4(4);
  updateCols5(6);
  updateCols6(7);
  updateCols7(9);
  proxLoad();

  console.log("system");
};

//key red=1 orange=2 yellow=3 lime=4 green=5 cyan=6 blue=7 pink=8 purple=9 black=0
var c1l = "black",
  c2l = "green",
  c3l = "green",
  c4l = "black",
  c6l = "lime",
  c1i = 0,
  c2i = 5,
  c3i = 5,
  c4i = 0,
  c5i = 0,
  c6i = 4,
  c7i = 1,
  imgbg = true,
  oglink = "https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/wallpaper.png",
  linke = "",
  textL = "og",
  themeC = true,
  rgb = false,
  rgbT = "",
  Bproxy = "taco",
  msu = true,
  BproxId = 1;

var rgbstr =
  "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}} ";
