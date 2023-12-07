// start
var tab = window.open();

var E = document.createElement("div");
//setting setup
var c1l, c2l, c3l, c4l;

E.innerHTML = `
  <html>
  <body>
  
    <div style="width: 100%; height: 100%; background-color: black;" id="bg">


  
  <button id="games" style="background-color:black;border-color:green;color:green; width:60px;height:50px" >  <br> <br> <br>
  Games
  
  </button> <br> <br>
  
      <button id="system" style="background-color:black;border-color:green;color:green; width:60px;height:50px" >  <br> <br> <br>
  System
  
  </button> <br> <br>
  
      <button id="iframe" style="background-color:black;border-color:green;color:green; width:60px;height:50px" >  <br> <br> <br>
  Iframe
  
  </button> <br> <br>
      
      
      <button id="proxy" style="background-color:black;border-color:green;color:green; width:60px;height:50px" 
      
     
      

      
      >  <br> <br> <br>
  Proxy
  
  </button> <br> <br>
  
  
 

</div>
 
   
  <title>Apachi 1.4.1</title>
  




      
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

//onclicks

p.onclick = function () {
  var bing = tab.document.createElement("div");

  bing.innerHTML = `
  <div id="bgp" style="width:100%;height:2.5%"> <title> Apachi Proxy</title>
    <center> <button id="return"> return </button> <button id="ref"> refresh </button>	
    <txt id="is2"> server: <p1 id="prox"> </txt> </p1></center>
    </div> <div>
    <iframe id="frame" style= "width:100%;height:97.5%"> 
</div>   
<style id="prx"> </style>
 <style > 
 body {background-color:black} 
 </style>
`;

  tab.document.body.removeChild(E);
  tab.document.body.appendChild(bing);
  var bgpg = tab.document.getElementById("bgp");
  var frame = tab.document.getElementById("frame"),
    ref = tab.document.getElementById("ref"),
    txt2 = tab.document.getElementById("is2"),
    rgas = tab.document.getElementById("prx"),
    prox = tab.document.getElementById("prox");

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

  var retur = tab.document.getElementById("return");
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
  };
  console.log("proxy");

  //set up themes

  if (themeC == false) {
    bgpg.style = "background-color:black";

    retur.style = "background-color:black ;border-color:green;color:green;";
    ref.style = "background-color:black;border-color:green;color:green";
    txt2.style = "color:green";
  } else {
    bgpg.style.background = c1l;

    retur.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    ref.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    txt2.style = "color:" + c2l;
  }

  ref.onclick = function () {
    frame.src = links;
  };

  console.log("else rought");
};

//iframe onclick src
i.onclick = function () {
  var ifr = document.createElement("div")
  ifr.innerHTML = `
<div id="ifbg" style="width:100%;height:2.5%>
<center>
<button id="retu">return </button> <button id="re"> enter </button>
<br> <input id="link" placeholder="https://wikipedia.org"></center>
</div>
<iframe id="iframe"> 



<style id="ifr_sty"> </style>

<style> body{background-color:black}
  `;
tab.document.body.appendChild(ifr)
tab.document.removeChild(E);

var retu = tab.document.getElementById("retu"),
ifbg = tab.document.getElementById("ifbg"),
iframe = tab.document.getElementById("iframe"),
re = tab.document.getElementById("re");

retu.onclick = function () {
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
  if (rgb == true) {
    st.innerHTML = rgbT + rgbstr;
  }
  if (themeC == false) {
    ifbg.style = "background-color:black";
    link.style = "width:95%;background-color:black ;border-color:green;color:green;";
    retu.style = "background-color:black ;border-color:green;color:green;";
    re.style = "background-color:black;border-color:green;color:green";

  } else {
    ifbg.style.background = c1l;

    link.style =
      "width:95%;background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    retu.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";
    re.style =
      "background-color:" + c4l + ";border-color:" + c3l + ";color:" + c2l + "";

  }

  re.onclick = function () {
    iframe.src = link.value;
  };

  console.log("else rought");
};

};




  console.log("iframe");
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
<button class="b"> rgb theme </button> <txt class="txt">
<br>
<br>
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
    if (rgb == true) {
      st.innerHTML = rgbT + rgbstr;
    }
  };
  //set up themes

  if (themeC == false) {
    divi[0].style = "color:green";
    divi[1].style = "color:green";
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
    home.style =
      "background-color:black ;border-color:green;color:green;width:100px;height:40px";
    syst_bg.style.background = "black";

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

  function updateCols5(id) {
    if (c5i == 1) {
      rgbT = "body";
      rgb = true;
    } else if (c5i == 2) {
      rgbT = "#bg";
    }

    btns[id].innerHTML = "rgb:" + rgbT;
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

  updateCols(1);
  updateCols2(2);
  updateCols3(3);
  updateCols4(4);
  updateCols5(6);
  proxLoad();

  console.log("system");
};

//key red=1 orange=2 yellow=3 lime=4 green=5 cyan=6 blue=7 pink=8 purple=9 black=0
var c1l = "black",
  c2l = "green",
  c3l = "green",
  c4l = "black",
  c1i = 0,
  c2i = 5,
  c3i = 5,
  c4i = 0,
  c5i = 0,
  themeC = true,
  rgb = false,
  rgbT = "",
  Bproxy = "taco",
  BproxId = 1;
var rgbstr =
  "{background: linear-gradient(-90deg, #FF0000, #FFFF00, #00FF00,#0000FF,#A020F0,#FF0000);background-size: 4000% 400%;animation: gradient 10s ease infinite;}@keyframes gradient {0% {	background-position: 0% 50%;} 50% {background-position: 100% 50%;}100%{background-position: 0% 0%;}} ";
