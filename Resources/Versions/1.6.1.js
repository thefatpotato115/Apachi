// start
var tab = window.open();

var E = document.createElement("div");
//setting setup
var c1l, c2l, c3l, c4l;

E.innerHTML = `
  <html>
  <body>
  
    <div style="width: 100%; height: 100%; background-image: url('https://raw.githubusercontent.com/ApachiPro/Wallpapers/main/defualt.png')" id="bg">


  
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
 
   
  <title>Apachi 1.6.1</title>
  	




      
      <div>
 
  

  
  </div>
  
  <link rel="icon" type="image/x-icon" href="/favicon.jpg" />
 </body>
<style id="styles">
  </style>
  <style > body{background-color:black}</style>

 </button>
 <div id="logo" style="top:90%;left:93%;position:absolute">
 <a href="https://raw.githack.com/thefatpotato115/Apachi/main/Support/terms.html">
   <img src="https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/logo.png" />
 </a>
</div>
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

p.onmouseover = function() {
  if (msu == true) {
    p.style =
      "background-color:" +
      c4l +
      ";width:60px;height:50px;color:" +
      c6l +
      ";border-color:" +
      c6l;
  }
};
p.onmouseleave = function() {
  p.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c2l +
    ";border-color:" +
    c3l;
};

i.onmouseover = function() {
  if (msu == true) {
    i.style =
      "background-color:" +
      c4l +
      ";width:60px;height:50px;color:" +
      c6l +
      ";border-color:" +
      c6l;
  }
};
i.onmouseleave = function() {
  i.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c2l +
    ";border-color:" +
    c3l;
};

g.onmouseover = function() {
  if (msu == true) {
    g.style =
      "background-color:" +
      c4l +
      ";width:60px;height:50px;color:" +
      c6l +
      ";border-color:" +
      c6l;
  }
};
g.onmouseleave = function() {
  g.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c2l +
    ";border-color:" +
    c3l;
};

s.onmouseover = function() {
  if (msu == true) {
    s.style =
      "background-color:" +
      c4l +
      ";width:60px;height:50px;color:" +
      c6l +
      ";border-color:" +
      c6l;
  }
};
s.onmouseleave = function() {
  s.style =
    "background-color:" +
    c4l +
    ";width:60px;height:50px;color:" +
    c2l +
    ";border-color:" +
    c3l;
};
//imgs
if (imgbg == true) {
  if (textL == "og") {
    bg.style = "background-image: url('" + linkog + "');width:100%;height:100%"
  } else {
    bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

  }

}

//onclicks

p.onclick = function() {
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
  if (msu == true) {
    ref.onmouseover = function() {
      ref.style =
        "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
    };
    ref.onmouseleave = function() {
      ref.style =
        "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
    };

    retur.onmouseover = function() {
      retur.style =
        "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
    };
    retur.onmouseleave = function() {
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
    links = "https://jamssmp.net/";
    prox.innerHTML = "Tinf0il";
    prox.style = "color:lime";
  } else if (BproxId == 5) {
    links = "https://ttrdln-8080.csb.app/";
    prox.innerHTML = " toast unblocker";
    prox.style = "color:brown";
  } else if (BproxId == 6) {
    links = "https://k9nnmj-8080.csb.app/";
    prox.innerHTML = "interstellar proxy";
    prox.style = "color:yellow";
  } else if (BproxId == 7) {
    links = "https://67.207.72.190/";
    prox.innerHTML = "Croxy Proxy";
    prox.style = "color:green";
  } else if (BproxId == 8) {
    links = "https://qpqtl9-8080.csb.app";
    prox.innerHTML = "Xenon Alloy";
    prox.style = "color:darkred";
  }
  frame.src = links;
  frame.style = "width:100%;height:97.5%";

  retur.onclick = function() {
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
    if (imgbg == true) {
      if (textL == "og") {
        bg.style = "background-image: url('" + oglink + "');width:100%;height:100%";
        console.log("yay")
      } else {
        bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }

    }
    if (tacoT == true) {
      st.innerHTML = tacostr

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
    if (imgbg == true) {
      if (textL == "og") {
        bgp.style = "background-image: url('');width:100%;height:100%"
      } else {
        bgp.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }

    }
    if (tacoT == true) {
      rgas.innerHTML = tacostr

    }
    if (rgb == true) {
      rgas.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        bgpg.style =
          "#background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
      }
    }
  } else {
    bgpg.style.background = c1l;

    retur.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    ref.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    txt2.style = "color:" + c2l;

    if (tacoT == true) {
      rgas.innerHTML = tacostr

    }
    if (rgb == true) {
      rgas.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        bgpg.style =
          "background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
      }
    }
  }

  ref.onclick = function() {
    frame.src = links;
  };

  console.log("else rought");
};

//iframe onclick src
i.onclick = function() {
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

  if (msu == true) {
    retu.onmouseover = function() {
      retu.style =
        "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
    };
    retu.onmouseleave = function() {
      retu.style =
        "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
    };

    re.onmouseover = function() {
      re.style =
        "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
    };
    re.onmouseleave = function() {
      re.style =
        "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
    };
    refre.onmouseover = function() {
      refre.style =
        "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l;
    };
    refre.onmouseleave = function() {
      refre.style =
        "background-color:" + c4l + ";color:" + c2l + ";border-color:" + c3l;
    };
  }
  retu.onclick = function() {
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
    if (imgbg == true) {
      if (textL == "og") {
        bg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
      } else {
        bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }

    }
    if (tacoT == true) {
      st.innerHTML = tacostr

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
    refre.style = "background-color:black ;border-color:green;color:green;";
    re.style = "background-color:black;border-color:green;color:green";
    if (imgbg == true) {
      if (textL == "og") {
        ifbg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
      } else {
        ifbg.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }

    }
    if (tacoT == true) {
      rgs.innerHTML = tacostr

    }
    if (rgb == true) {
      rgs.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        ifbg.style =
          "background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
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
    refre.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    re.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    if (imgbg == true) {
      if (textL == "og") {
        ifbg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
      } else {
        ifbg.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }

    }
    if (tacoT == true) {
      rgs.innerHTML = tacostr

    }
    if (rgb == true) {
      rgs.innerHTML =
        rgbT +
        "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
      if (rgbT == "#bg") {
        ifbg.style =
          "background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%};width:100%;height:100%";
      }
    }
  }

  re.onclick = function() {
    iframe.src = link.value;
    ifbg.style.height = "5%";
    iframe.style.height = "97%"
  };
  refre.onclick = function() {
    iframe.src = iframe.src
    ifbg.style.height = "5%"

  }

  link.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      re.click();
    }
  });

  console.log("else rought");
};

//games onclick src
g.onclick = function() {
  tab.document.body.removeChild(E)
  var data, dataContainer;
  req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/games.json");
  req.onload = function() {

    var e = document.createElement("div");


    e.innerHTML = `
  
  <div id="bg" style="background-color:black; width:100%;height:100%"> 
 <center>
 <title> Apachi games V1.1</title>
 <h1 style="color:green" id="txt">Apachi Games <button id="home">Home</button>  </h1>
  <br>
  
  <p class='3' style='color:red'> It has come to our attention that many of the games on this page have been blocked by school administration. </p>
  <p class='3' style='color:red'> We are trying to fix this as fast as we can, but it may take a while to find new urls. The games that are red have been found as Not Working, but they may still function for you.</p>
  <p class='3' style='color:red'> Please do not submit bug reports for these games at this time.</p> 
  <br>
<button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://ytxrqv.sse.codesandbox.io/prefix/aHR0cHM6Ly8zZ2hvc3QtZGVwbG95LXNldmVuLnZlcmNlbC5hcHA=/projects/backrooms/index.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>The backrooms</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://landgreen.github.io/sidescroller/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'> N-gon</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/666344820848380631/baldi.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>baldis basics</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if1dv@f245b5d104814d56632fdf3c5e7845c3a1633a94/k39xn5j/d8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>2048</button>

<button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://ytxrqv.sse.codesandbox.io/prefix/aHR0cHM6Ly8zZ2hvc3QtZGVwbG95LXNldmVuLnZlcmNlbC5hcHA=/projects/DogeMiner/index.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Dodge miner</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://486017395-735910036185936427.preview.editmysite.com/uploads/b/139890129-378637188943279878/files/mx3m3.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Moto X3M</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@b54da92e54b10f5fe25673e9da9bacc789771094/7thxcv4f/vd8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Flappy bird</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Ffactory-balls.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Factory ballz</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="-	https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if3dv@6a3aa6b5b121c4c1f7da6cc5bfd9e71b40f1262b/zm48hw/bs.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'> Basket ball stars</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if5dv@32f5e8d96044c679901af34b956be812e8e7253f/f82kes7/craftmine.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Craft mine</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if2dv@040102de939133290db9b52abd1a0c8f2804b49d/zbk36g7/d8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Grind craft</button>

<button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://ytxrqv.sse.codesandbox.io/prefix/aHR0cHM6Ly8zZ2hvc3QtZGVwbG95LXNldmVuLnZlcmNlbC5hcHA=/projects/minecraft/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Minecraft V1.5</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://zke41r.sse.codesandbox.io/prefix/aHR0cHM6Ly8zZ2hvc3QtZGVwbG95LXNldmVuLnZlcmNlbC5hcHA=/projects/minecraft-classic/index.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Minecraft classic</button>
<br>
<br>
<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@843c1a10f4bf78019b513ea7a8a8c3146f3dfa59/2slope.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>slope</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://zke41r.sse.codesandbox.io/prefix/aHR0cHM6Ly8zZ2hvc3QtZGVwbG95LXNldmVuLnZlcmNlbC5hcHA=/projects/tunnel-rush/index.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Tunnle rush</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://ytxrqv.sse.codesandbox.io/prefix/aHR0cHM6Ly9yZXRyby1ib3dsLm5ldA==/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Retro Bowl</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://zke41r.sse.codesandbox.io/prefix/aHR0cHM6Ly8zZ2hvc3QtZGVwbG95LXNldmVuLnZlcmNlbC5hcHA=/projects/subway-surfers/index.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Subway Surfers</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://zke41r.sse.codesandbox.io/prefix/aHR0cHM6Ly8zZ2hvc3QtZGVwbG95LXNldmVuLnZlcmNlbC5hcHA=/projects/scrapmetal/index.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Scrap metal 3</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://ytxrqv.sse.codesandbox.io/prefix/aHR0cHM6Ly91YmczNjUuZ2l0aHViLmlv/monkey-mart/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Monkey mart</button>

<button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://ytxrqv.sse.codesandbox.io/prefix/aHR0cHM6Ly9kaWVwaW8tMi5jb20=/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'> Diep io 2</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2Fmonopoly_idle.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Monopoly</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2Fapple-shooter-champ.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Apple shoot</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if10dv@13ab1571f45774e15fa3adec99ee2b951e81594a/g7kh63s/bitlife.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Bitlife</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@b72ce32e265120aa3060e756da84279ab9a862e0/9fjdsd4h/hole-io.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Hole.io</button>

<button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://jmw.strangled.net/gs/stickman-hook/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Stickman Hook</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fduck-life-4.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Ducklife 4</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://raw.githack.com/CBGamesdev/chilibowlflash/main/assroid.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe);
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Astroid</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.gstatic.com/atari/embeds/7925c5f8e01bacb9b4b0a3783ae0b867/intermediate-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.S9zOXUg9rrA.O%2Fd%3D1%2Frs%3DAHpOoo-AXjUK4hNAaKzui0P9Fr9nG2_yZQ%2Fm%3D__features__&r=817413054"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Pong 3d</button>

<button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://raw.githack.com/CBGamesdev/chilibowlflash/main/bubble.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Bubble pop</button>

<br>
<br>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://m4qh56.sse.codesandbox.io/prefix/aHR0cHM6Ly9qY3c4Ny5naXRodWIuaW8=/c2-sans-fight/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Sans fight</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://doodle-pile.gitlab.io/unfair-undyne/v0.99"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Undyne</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://395713058-173957204856294731.preview.editmysite.com/uploads/b/139890129-314264279627264120/files/smb.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Mario Bros.</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/edit@main/d3hjf73j2e92ge4y.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>1v1.lol</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.mathplayground.com/pg_lows_adventures2.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Lows adventure</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.mathplayground.com/pg_x_trench_run.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>X-trench run</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.mathplayground.com/pg_drift_boss.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Drift boss</button>

<button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://littlealchemy2.com/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Little alchemy 2</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.mathplayground.com/pg_rise_higher.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Rise higher</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://538104932-173620588274136504.preview.editmysite.com/uploads/b/139890129-436559681805495872/files/bts.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Big tall small</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.mathplayground.com/pg_lows_adventures.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Lows adventure 1</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.mathplayground.com/pg_epic_city_driver_game.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>City driver</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.mathplayground.com/pg_escape_from_aztec.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Temple run</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://script.google.com/macros/s/AKfycbzKQLL6uVjJ5OHtkFH2X32Gtm9fXJFaekf_65oP_KT7hVghQKdI6CvGlD8njrqj5HFC/exec"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Wordle âˆž</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://www.gstatic.com/atari/embeds/7925c5f8e01bacb9b4b0a3783ae0b867/intermediate-frame-minified.html?jsh=m%3B%2F_%2Fscs%2Fabc-static%2F_%2Fjs%2Fk%3Dgapi.lb.en.S9zOXUg9rrA.O%2Fd%3D1%2Frs%3DAHpOoo-AXjUK4hNAaKzui0P9Fr9nG2_yZQ%2Fm%3D__features__&r=382930989"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Snake</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://slf17r.sse.codesandbox.io/prefix/aHR0cHM6Ly9zYW1teWNoZWV6LmNvbQ==/drive-mad/"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Drive mad >:(</button>
 <br>
 <br> 
 <button class="1" style='background-color:black;color:green;border-color:green;' 
 onclick='var iframe = document.createElement("iframe"); 
 iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Ffive-nights-at-freddy-s.xml"; 
 iframe.style=" width:100%; height:100%";
 document.body.appendChild(iframe); 
 var d = document.createElement("button");
 d.onclick= function () {document.body.removeChild(iframe);
 document.body.removeChild(d) ;};
 d.innerHTML="X";
 d.style="background-color:red";
 document.body.appendChild(d);
 '>Fnaf 1</button>
 
 <button class="1" style='background-color:black;color:green;border-color:green;' 
 onclick='var iframe = document.createElement("iframe"); 
 iframe.src="https://scratch.mit.edu/projects/469219637/embed"; 
 iframe.style=" width:100%; height:100%";
 document.body.appendChild(iframe); 
 var d = document.createElement("button");
 d.onclick= function () {document.body.removeChild(iframe);
 document.body.removeChild(d) ;};
 d.innerHTML="X";
 d.style="background-color:red";
 document.body.appendChild(d);
 '>Fnaf 2</button>

 <button class="1" style='background-color:black;color:green;border-color:green;' 
 onclick='var iframe = document.createElement("iframe"); 
 iframe.src="https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/602302113323144959/fnaf-final-purgatory.html"; 
 iframe.style=" width:100%; height:100%";
 document.body.appendChild(iframe); 
 var d = document.createElement("button");
 d.onclick= function () {document.body.removeChild(iframe);
 document.body.removeChild(d) ;};
 d.innerHTML="X";
 d.style="background-color:red";
 document.body.appendChild(d);
 '>Fnaf Final Purgatory</button>

 <button class="1" style='background-color:black;color:green;border-color:green;' 
 onclick='var iframe = document.createElement("iframe"); 
 iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Frun2.xml"; 
 iframe.style=" width:100%; height:100%";
 document.body.appendChild(iframe); 
 var d = document.createElement("button");
 d.onclick= function () {document.body.removeChild(iframe);
 document.body.removeChild(d) ;};
 d.innerHTML="X";
 d.style="background-color:red";
 document.body.appendChild(d);
 '> Run</button>

 <button class="1" style='background-color:black;color:green;border-color:green;' 
 onclick='var iframe = document.createElement("iframe"); 
 iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fpacman.xml"; 
 iframe.style=" width:100%; height:100%";
 document.body.appendChild(iframe); 
 var d = document.createElement("button");
 d.onclick= function () {document.body.removeChild(iframe);
 document.body.removeChild(d) ;};
 d.innerHTML="X";
 d.style="background-color:red";
 document.body.appendChild(d);
 '>Pacman</button>

 <button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://raw.githack.com/CBGamesdev/chilibowlflash/main/stickrpg.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Stick rpg </button>

  <button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Ftetris.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Tetris</button>

 <button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2Fmario-kart.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Mario Kart</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@28385476653e724a811795dff60a8ef6fa652bcf/h5j7dg3s/death_run.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Death run</button>

<button class="1" style='background-color:black;color:green;border-color:red;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://unblocked-games.s3.amazonaws.com/games/stickman-ragdoll/index.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Stickman Ragdoll</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@a72a12890a66a6708db57cd155e45ec5740d7cb1/4td05jdy2cxl5/ts3.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Times shooter 3</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://174620846-1408264916283502371.preview.editmysite.com/uploads/b/139890129-853193733110235683/files/sis.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Slither.io</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://427396048-642845047394716217.preview.editmysite.com/uploads/b/139890129-761103484729797659/files/ovo.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>OvO</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@851701926b4c2b0a3f9be56b723f416a185d726e/l8jh3d/Helix-Jump.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Helix Jump</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if1dv@cc17334589e4fb70d755b99e8b2a527679f22ec1/39fks64h/d8g3s.xml
"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Apple Shooter</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@f0981e94dcc7836acb298d369a6e65391b802904/d65uds32/SnowRider3D.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Snow Rider</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Flearn-to-fly-3.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Learn to Fly 3</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://grandcanyonshuttles.com/uploads/5/0/5/6/5056555/custom_themes/607463927942590340/madalinsc2.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Car Game</button>

<br>
<br>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/850704625817689097/gas2.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>GTA</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@1a76f51c689c229f40ee4d5aacd15a3cccca9bd3/ge5dc6/Classic-Uno.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Uno</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if7dv@ee7a604faef0253326c18d233a5689f6ebfc03c8/xv78kr4/geometry-dash-classic.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Geometry dash</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://361820596-851580422716946014.preview.editmysite.com/uploads/b/139890129-473108247243760926/files/tf.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Tiny Fishing</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2F2-player-chess.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Chess</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if1dv@e583f8c0c58d62fcb092e0da5452635bc97056fd/4h8sk3g/among-us.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Among Us</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2Fbusiness-simulator.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Business Simulator</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@25ea1da0fd27d58c36d0e4b21ae1e18405ea1244/build/id-br/ibo.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Idle Breakout</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://519482740-385904716395847264.preview.editmysite.com/uploads/b/139890129-760473003654130876/files/id.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Idle Dice</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://485925-736174.preview.editmysite.com/uploads/b/139890129-640425360949992905/files/idmt.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Idle Minors 0-0</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Flearn-to-fly-idle.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Learn 2 Fly Idle</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/253523348422157506/1granny.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Granny</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@5d82d5db558d10535dcf4dc091afd9a954a4c678/j65dk8s/Javelin-Fighting.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Javelin Fighting</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@7d448ccfef049494f2bdef77ffd41857fb387c31/f73jd7i/vd8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Happy Wheels</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@8bdc32be5900c87ba60dc88214b85928105c32c6/osgkeb5/tabs.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Battle Simulator</button>
<br>
<br>
<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@d2542b2b948a265eddaa25f984368f25fafc1447/g64dh6j/Getaway-Shootout.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Getaway Shootout</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@4097a0079bddeaf3602b956f555f08a14fea6d93/6rghd4/penguin-io.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Penguin io</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@bebe39cca0417c9c18da5899c28a8abeb922b015/jf94os8/Rooftop-Snipers.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Rooftop Snipers</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://grandcanyonshuttles.com/uploads/5/5/6/7/5567194/custom_themes/136734914403232081/drift_hunter.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Drift Hunters</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://638508418-274639104736829364.preview.editmysite.com/uploads/b/139890129-212982790859809719/files/at1.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Awesome Tanks</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://37406915-471836402253847146.preview.editmysite.com/uploads/b/139890129-165727670653336700/files/at2.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Awesome Tanks 2</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://zayaruzostreetorgan.com/uploads/5/0/5/6/5056555/custom_themes/664718197367015386/bottle-flip.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Bottle Flip 3D</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if7dv@9eff8ba8aa9d37273c8e1c134ee339acd8dcb6cb/hg3j6i/d8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Fire boy & Water Girl 2</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/zhit73/8y3ds26tf3s@main/sc51di7fwus3.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Smash Carts</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@c9d716d51de509bb1bfa4f82694f8c518d3a54d3/z6kg3f/vd8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Mr Bullet</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://590384729-104728463944275026.preview.editmysite.com/uploads/b/139890129-446136497302390429/files/ting.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>There is no game</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://script.google.com/macros/s/AKfycbz1JWJf7nF49Unm5GRRW5G972NLnRyyEajLsP9pm42uumQgckEqwXepS2M_oVb4qH4neA/exec"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Cookie Clicker</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2F5-minutes-to-kill-yourself.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>5 Minutes to kys</button>

<br>
<br>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if11dv@005f55d82c14142ae539cf0d79220cfe1d5529b1/y4dg6/d8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Tower Defense</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if3dv@e5e9185f3853af2f524d5d7039ffa0ed0fdc8e3b/ge4q26/btts.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Big tower tiny square</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://183662057-183305820582754925.preview.editmysite.com/uploads/b/139890129-258428596653956378/files/btts2.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Big tower tiny square 2</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://835140793-361837406927483175.preview.editmysite.com/uploads/b/139890129-331646845806169131/files/bntower.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Big neon tower tiny square</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/r3tq6l1/to9d2if8dv@face51ec4fff642dba84d37cceeb4771b5a9e1f8/6hdk7d/d8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Happy Glass</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/139948058740159493/files/index.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Ball stars</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2Fbad-piggies.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Bad Piggies</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@1d542582dcaee7ab79cfa3031e3d5d7cd1769f0c/js72bx/vd8g3s.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Angry birds</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fbloons-tower-defense-4.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Bloons td 4</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/8c491f21-7353-4f1f-b2a0-9544824c4d28%2Fhangman_plus.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Hang man+</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/666344820848380631/combat_cubic_arena.html"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Pixel combat</button>

<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/fr6ks8ab/vi9syd1rm@f21b546390f3a65db48edf584f21f7d7bea4f41c/i3nd8b/justfall.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Ball guys</button>


<button class="1" style='background-color:black;color:green;border-color:green;' 
onclick='var iframe = document.createElement("iframe"); 
iframe.src="https://s6jf3nx0gk1d6n-opensocial.googleusercontent.com/gadgets/ifr?url=https://372518406-153950463925106749.preview.editmysite.com/uploads/b/139890129-156013607588663671/files/bca.xml"; 
iframe.style=" width:100%; height:100%";
document.body.appendChild(iframe); 
var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);
document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
'>Penguin Mario</button>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<button class='2' style="color:green;background-color:black;border-color:red;width:200px;height:35px" onclick='var iframe = document.createElement("iframe"); iframe.src="https://form.typeform.com/to/TmtkSH1E"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
   '> Game not working? Report it! </button>

<button class='2' style="color:green;background-color:black;border-color:red;width:200px;height:35px" onclick='var iframe = document.createElement("iframe"); iframe.src="https://form.typeform.com/to/afCrigNp"; iframe.style=" width:100%; height:100%";document.body.appendChild(iframe); var d = document.createElement("button");
d.onclick= function () {document.body.removeChild(iframe);document.body.removeChild(d) ;};
d.innerHTML="X";
d.style="background-color:red";
document.body.appendChild(d);
   '> Have a game we should add? </button>
</center>
</div>
<style id="g_sty"> </style>
<style> body{background-color:black} </style>
`;
    tab.document.body.appendChild(e);
    var b_id = tab.document.getElementsByClassName('1');
    var b_id_2 = tab.document.getElementsByClassName('2');
    var stys = tab.document.getElementById('g_sty');
    var s1 = c1l
    var s2 = c2l
    var s3 = c4l
    var s4 = c3l
    var t_id = tab.document.getElementById('txt');
    var t_id1 = tab.document.getElementsByClassName('3');
    var bg = tab.document.getElementById('bg');
    var home = tab.document.getElementById('home');
    home.onclick = function() {
      tab.document.body.removeChild(e)
      tab.document.body.appendChild(E)
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
      if (imgbg == true) {
        if (textL == "og") {
          bg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
        } else {
          bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

        }

      }
      if (tacoT == true) {
        st.innerHTML = tacostr

      }
      if (rgb == true) {
        st.innerHTML = rgbT + rgbstr;
      }

    }



    if (imgbg == true) {
      if (textL == "og") {
        bg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
      } else {
        bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }
    }

    if (tacoT == true) {
      stys.innerHTML = tacostr

    }
    if (rgb == true) {
      stys.innerHTML = rgbT + rgbstr;
    }


    if (themeC == false) {

      b_id_2[0].style = 'color:' + s2 + ';background-color:' + s3 + ';border-color:' + s4 + ';width:200px;height:35px';
      b_id_2[1].style = 'color:' + s2 + ';background-color:' + s3 + ';border-color:' + s4 + ';width:200px;height:35px'


      bg.style = 'width:100%;height:100%;background-color:' + s1;
      t_id.style = 'color:' + s2;

      home.style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4;
      b_id[0].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4;
      b_id[1].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[2].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[3].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[4].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[5].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[6].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[7].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[8].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[9].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[10].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[11].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[12].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[13].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[14].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[15].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[16].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[17].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[18].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[19].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[20].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[21].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[22].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[23].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[24].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[25].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[26].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[27].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[28].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[29].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[30].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[31].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[32].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[33].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[34].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[35].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[36].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[37].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[38].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[39].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[40].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[41].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[42].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[43].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[44].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[45].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[46].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[47].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[48].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[49].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[50].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[51].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[52].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[53].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[54].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[55].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[56].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[57].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[58].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[59].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[60].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[61].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[62].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[63].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[64].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[65].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[66].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[67].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[68].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[69].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[70].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[71].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[72].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[73].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[74].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[75].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[76].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[77].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[78].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[79].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[80].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[81].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[82].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[83].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[84].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[85].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[86].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[87].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[88].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[89].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[90].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[91].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[92].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[93].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[94].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[95].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[96].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[97].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[98].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[99].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[100].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[101].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[102].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[103].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      t_id1[0].style = 'color:' + s2;
      t_id1[1].style = 'color:' + s2;
      t_id1[2].style = 'color:' + s2;
      if (imgbg == true) {
        if (textL == "og") {
          bg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
        } else {
          bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

        }

      }
      if (tacoT == true) {
        stys.innerHTML = tacostr

      }
      if (rgb == true) {
        stys.innerHTML =
          rgbT +
          "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
        if (rgbT == "#bg") {
          bg.style =
            "background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%}";
        }
      }
    } else {
      b_id_2[0].style = 'color:' + s2 + ';background-color:' + s3 + ';border-color:' + s4 + ';width:200px;height:35px';
      b_id_2[1].style = 'color:' + s2 + ';background-color:' + s3 + ';border-color:' + s4 + ';width:200px;height:35px'


      bg.style = 'width:100%;height:100%;background-color:' + s1;
      t_id.style = 'color:' + s2;

      home.style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4;
      b_id[0].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4;
      b_id[1].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[2].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[3].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[4].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[5].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[6].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[7].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[8].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[9].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[10].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[11].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[12].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[13].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[14].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[15].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[16].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[17].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[18].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[19].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[20].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[21].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[22].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[23].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[24].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[25].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[26].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[27].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[28].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[29].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[30].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[31].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[32].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[33].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[34].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[35].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[36].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[37].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[38].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[39].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[40].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[41].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[42].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[43].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[44].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[45].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[46].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[47].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[48].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[49].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[50].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[51].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[52].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[53].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[54].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[55].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[56].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[57].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[58].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[59].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[60].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[61].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[62].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[63].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[64].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[65].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[66].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[67].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[68].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[69].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[70].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[71].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[72].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[73].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[74].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[75].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[76].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[77].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[78].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[79].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[80].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[81].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[82].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[83].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[84].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[85].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[86].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[87].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[88].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[89].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[90].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[91].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[92].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[93].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[94].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[95].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[96].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[97].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[98].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[99].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[100].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[101].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[102].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      b_id[103].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      t_id1[0].style = 'color:' + s2;
      t_id1[1].style = 'color:' + s2;
      t_id1[2].style = 'color:' + s2;
      if (imgbg == true) {
        if (textL == "og") {
          bg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
        } else {
          bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

        }

      }
      if (tacoT == true) {
        stys.innerHTML = tacostr

      }
      if (rgb == true) {
        stys.innerHTML =
          rgbT +
          "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}";
        if (rgbT == "#bg") {
          bg.style =
            "background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 100%;}100%{background-position: 0% 0%;};width:100%;height:100%};width:100%;height:100%";
        }
      }
    }


    function mouseover(id) {
      b_id[id].style = 'background-color:' + c4l + ';color:' + c6l + ';border-color:' + c6l + ';';
      b_id[id].onmouseleave = function() {

        b_id[id].style = 'background-color:' + s3 + ';color:' + s2 + ';border-color:' + s4 + ';';
      }
    }
    if (msu == true) {
      b_id[0].onmouseover = function() {
        mouseover(0);
      }
      b_id[1].onmouseover = function() {
        mouseover(1);
      }
      b_id[2].onmouseover = function() {
        mouseover(2);
      }
      b_id[3].onmouseover = function() {
        mouseover(3);
      }
      b_id[4].onmouseover = function() {
        mouseover(4);
      }
      b_id[5].onmouseover = function() {
        mouseover(5);
      }
      b_id[6].onmouseover = function() {
        mouseover(6);
      }
      b_id[7].onmouseover = function() {
        mouseover(7);
      }
      b_id[8].onmouseover = function() {
        mouseover(8);
      }
      b_id[9].onmouseover = function() {
        mouseover(9);
      }
      b_id[10].onmouseover = function() {
        mouseover(10);
      }
      b_id[11].onmouseover = function() {
        mouseover(11);
      }
      b_id[12].onmouseover = function() {
        mouseover(12);
      }
      b_id[13].onmouseover = function() {
        mouseover(13);
      }
      b_id[14].onmouseover = function() {
        mouseover(14);
      }
      b_id[15].onmouseover = function() {
        mouseover(15);
      }
      b_id[16].onmouseover = function() {
        mouseover(16);
      }
      b_id[17].onmouseover = function() {
        mouseover(17);
      }
      b_id[18].onmouseover = function() {
        mouseover(18);
      }
      b_id[19].onmouseover = function() {
        mouseover(19);
      }
      b_id[20].onmouseover = function() {
        mouseover(20);
      }
      b_id[21].onmouseover = function() {
        mouseover(21);
      }
      b_id[22].onmouseover = function() {
        mouseover(22);
      }
      b_id[23].onmouseover = function() {
        mouseover(23);
      }
      b_id[24].onmouseover = function() {
        mouseover(24);
      }
      b_id[25].onmouseover = function() {
        mouseover(25);
      }
      b_id[26].onmouseover = function() {
        mouseover(26);
      }
      b_id[27].onmouseover = function() {
        mouseover(27);
      }
      b_id[28].onmouseover = function() {
        mouseover(28);
      }
      b_id[29].onmouseover = function() {
        mouseover(29);
      }
      b_id[30].onmouseover = function() {
        mouseover(30);
      }
      b_id[31].onmouseover = function() {
        mouseover(31);
      }
      b_id[32].onmouseover = function() {
        mouseover(32);
      }
      b_id[33].onmouseover = function() {
        mouseover(33);
      }
      b_id[34].onmouseover = function() {
        mouseover(34);
      }
      b_id[35].onmouseover = function() {
        mouseover(35);
      }
      b_id[36].onmouseover = function() {
        mouseover(36);
      }
      b_id[37].onmouseover = function() {
        mouseover(37);
      }
      b_id[38].onmouseover = function() {
        mouseover(38);
      }
      b_id[39].onmouseover = function() {
        mouseover(39);
      }
      b_id[40].onmouseover = function() {
        mouseover(40);
      }
      b_id[41].onmouseover = function() {
        mouseover(41);
      }
      b_id[42].onmouseover = function() {
        mouseover(42);
      }
      b_id[43].onmouseover = function() {
        mouseover(43);
      }
      b_id[44].onmouseover = function() {
        mouseover(44);
      }
      b_id[45].onmouseover = function() {
        mouseover(45);
      }
      b_id[46].onmouseover = function() {
        mouseover(46);
      }
      b_id[47].onmouseover = function() {
        mouseover(47);
      }
      b_id[48].onmouseover = function() {
        mouseover(48);
      }
      b_id[49].onmouseover = function() {
        mouseover(49);
      }
      b_id[50].onmouseover = function() {
        mouseover(50);
      }
      b_id[51].onmouseover = function() {
        mouseover(51);
      }
      b_id[52].onmouseover = function() {
        mouseover(52);
      }
      b_id[53].onmouseover = function() {
        mouseover(53);
      }
      b_id[54].onmouseover = function() {
        mouseover(54);
      }
      b_id[55].onmouseover = function() {
        mouseover(55);
      }
      b_id[56].onmouseover = function() {
        mouseover(56);
      }
      b_id[57].onmouseover = function() {
        mouseover(57);
      }
      b_id[58].onmouseover = function() {
        mouseover(58);
      }
      b_id[59].onmouseover = function() {
        mouseover(59);
      }
      b_id[60].onmouseover = function() {
        mouseover(60);
      }
      b_id[61].onmouseover = function() {
        mouseover(61);
      }
      b_id[62].onmouseover = function() {
        mouseover(62);
      }
      b_id[63].onmouseover = function() {
        mouseover(63);
      }
      b_id[64].onmouseover = function() {
        mouseover(64);
      }
      b_id[65].onmouseover = function() {
        mouseover(65);
      }
      b_id[66].onmouseover = function() {
        mouseover(66);
      }
      b_id[67].onmouseover = function() {
        mouseover(67);
      }
      b_id[68].onmouseover = function() {
        mouseover(68);
      }
      b_id[69].onmouseover = function() {
        mouseover(69);
      }
      b_id[70].onmouseover = function() {
        mouseover(70);
      }
      b_id[71].onmouseover = function() {
        mouseover(71);
      }
      b_id[72].onmouseover = function() {
        mouseover(72);
      }
      b_id[73].onmouseover = function() {
        mouseover(73);
      }
      b_id[74].onmouseover = function() {
        mouseover(74);
      }
      b_id[75].onmouseover = function() {
        mouseover(75);
      }
      b_id[76].onmouseover = function() {
        mouseover(76);
      }
      b_id[77].onmouseover = function() {
        mouseover(77);
      }
      b_id[78].onmouseover = function() {
        mouseover(78);
      }
      b_id[79].onmouseover = function() {
        mouseover(79);
      }
      b_id[80].onmouseover = function() {
        mouseover(80);
      }
      b_id[81].onmouseover = function() {
        mouseover(81);
      }
      b_id[82].onmouseover = function() {
        mouseover(82);
      }
      b_id[83].onmouseover = function() {
        mouseover(83);
      }
      b_id[84].onmouseover = function() {
        mouseover(84);
      }
      b_id[88].onmouseover = function() {
        mouseover(85);
      }
      b_id[86].onmouseover = function() {
        mouseover(86);
      }
      b_id[87].onmouseover = function() {
        mouseover(87);
      }
      b_id[88].onmouseover = function() {
        mouseover(88);
      }
      b_id[89].onmouseover = function() {
        mouseover(89);
      }
      b_id[90].onmouseover = function() {
        mouseover(90);
      }
      b_id[91].onmouseover = function() {
        mouseover(91);
      }
      b_id[92].onmouseover = function() {
        mouseover(92);
      }
      b_id[93].onmouseover = function() {
        mouseover(93);
      }
      b_id[94].onmouseover = function() {
        mouseover(94);
      }
      b_id[95].onmouseover = function() {
        mouseover(95);
      }
      b_id[96].onmouseover = function() {
        mouseover(96);
      }
      b_id[97].onmouseover = function() {
        mouseover(97);
      }
      b_id[98].onmouseover = function() {
        mouseover(98);
      }
      b_id[99].onmouseover = function() {
        mouseover(99);
      }
      b_id[100].onmouseover = function() {
        mouseover(100);
      }
      b_id[101].onmouseover = function() {
        mouseover(101);
      }
      b_id[102].onmouseover = function() {
        mouseover(102);
      }
      b_id[103].onmouseover = function() {
        mouseover(103);
      }
    }

    //data stored here for simplicity reasons
    data = this.responseText;
    //setup



  };
  req.send();



  console.log("games");
};

//system onclick src
s.onclick = function() {
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
<br>
<br>
<button class="b"> taco theme </button> <txt class="txt"> </txt>
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
  home.onclick = function() {
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
    if (imgbg == true) {
      if (textL == "og") {
        bg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
      } else {
        bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }

    }
    if (tacoT == true) {
      st.innerHTML = tacostr

    }
    if (rgb == true) {
      st.innerHTML = rgbT + rgbstr;
    }
  };
  if (msu == true) {
    home.onmouseover = function() {
      home.style =
        "background-color:" + c4l + ";color:" + c6l + ";border-color:" + c6l + ';width:100px;height:40px';
    };
    home.onmouseleave = function() {
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
      "background-color:black ;border-color:green;color:green;width:55px;height:20px";
    btns[12].style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    home.style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    syst_bg.style.background = "black";
    if (imgbg == true) {
      if (textL == "og") {
        syst_bg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
      } else {
        syst_bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }

    }
    if (tacoT == true) {
      str.innerHTML = tacostr

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
      ";width:55px;height:20px";
    btns[12].style =
      "background-color:" +
      c4l +
      ";border-color:" +
      c3l +
      ";color:" +
      c2l +
      ";width:100px;height:40px";
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
    if (imgbg == true) {
      if (textL == "og") {
        syst_bg.style = "background-image: url('" + oglink + "');width:100%;height:100%"
      } else {
        syst_bg.style = "background-image: url('" + linke + "');width:100%;height:100%"

      }

    }
    if (tacoT == true) {
      str.innerHTML = tacostr

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
      Bproxy = "Tinf0il";
      stat_text[5].style = "color:lime";
    } else if (BproxId == 5) {
      Bproxy = "toast unblocker";
      stat_text[5].style = "color:brown";
    } else if (BproxId == 6) {
      Bproxy = "interstellar proxy";
      stat_text[5].style = "color:yellow";
    } else if (BproxId == 7) {
      Bproxy = "Corxy Proxy";
      stat_text[5].style = "color:green";
    } else if (BproxId == 8) {
      Bproxy = "Xenon Alloy";
      stat_text[5].style = "color:darkred";
    } else if (BproxId > 8) {
      BproxId = 0;
      Bproxy = "Click again to reset";
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
      Bproxy = "Tinf0il";
      stat_text[5].style = "color:lime";
    } else if (BproxId == 5) {
      stat_text[5].style = "color:brown";
    } else if (BproxId == 6) {
      Bproxy = "interstellar proxy";
      stat_text[5].style = "color:yellow";
    } else if (BproxId == 7) {
      Bproxy = "Croxy Proxy";
      stat_text[5].style = "color:green";
    } else if (BproxId == 8) {
      Bproxy = "Xenon Alloy";
      stat_text[5].style = "color:darkred";
    } else if (BproxId > 8) {
      BproxId = 0;
      Bproxy = "Click again to reset";
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
      linkog = "https://raw.githubusercontent.com/ApachiPro/Wallpapers/main/defualt.png";
      imgbg = true;
      textL = "og"
    } else if (c7i == 2) {
      btns[10].value = linke
      textL = "custom"
    }

    btns[id].innerHTML = "img bg " + textL;
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
  btns[0].onclick = function() {
    if (themeC == true) {
      themeC = false;
      setStatOff(0);
    } else {
      themeC = true;
      setStatOn(0);
    }
  };
  //setting onclicks colors :)

  btns[1].onclick = function() {
    changeCol1();
  };

  btns[2].onclick = function() {
    changeCol2();
  };

  btns[3].onclick = function() {
    changeCol3();
  };

  btns[4].onclick = function() {
    changeCol4();
  };
  //bing proxy
  btns[5].onclick = function() {
    changeProxy();
  };

  //other onclicks

  btns[6].onclick = function() {
    changeCol5();
    if (rgb == true) {
      setStatOn(6);
    } else {
      setStatOff(6);
    }
  };

  btns[7].onclick = function() {
    changeCol6();
  };
  btns[8].onclick = function() {
    if (msu == true) {
      msu = false;
      setStatOff(8);
    } else {
      msu = true
      setStatOn(8);
    }

  }
  btns[9].onclick = function() {
    changeCol7();
    if (imgbg == true) {
      setStatOn(9);
    } else {
      setStatOff(9);
    }
  };
  btns[11].onclick = function() {
    linke = btns[10].value
    btns[10].value = ""
  }

  btns[10].addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btns[11].click();
    }
  });
  btns[12].onclick = function() {
    if (tacoT == true) {
      tacoT = false
      setStatOff(10);
    } else {
      tacoT = true
      setStatOn(10);
    }
  };
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
  if (tacoT == true) {
    setStatOn(10);
  } else {
    setStatOff(10);
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
  oglink = "https://raw.githubusercontent.com/ApachiPro/Wallpapers/main/defualt.png",
  linke = "",
  textL = "og",
  themeC = true,
  rgb = false,
  rgbT = "",
  tacoT = false,
  Bproxy = "taco",
  msu = true,
  BproxId = 1;

var rgbstr =
  "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}} ",
  tacostr = "body{background: linear-gradient(-90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);background-size: 400% 400%;animation: gradient 15s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}}"
