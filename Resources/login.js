var tab = document.createElement("div");
tab.innerHTML = `
<div style="background-color:black;width:100%;height:100%">
<title> LOGIN </title>
<center>
<h1 style="color:green"> please login </h1>
</center> <p1 id="version_json" style="color:green"> </p1> <center><br>
<p1 id="error msg" style="color:red"> </p1>
<br>
<br>
<button id="sen" style="background-color:black;border-color:green;color:green" > LOGIN </button>
<input id="1" style="background-color:black;border-color:green;color:green" placeholder="user name"> 
<input id="2" style="background-color:black;border-color:green;color:green" placeholder="password">
<input id="3" style="background-color:black;border-color:green;color:green;width:40px" placeholder="1.4.1"> <txt style="color:green">version * has to be > than 1.4.1</txt>
<br>
<br>
<br>
<br>
<p1 id="port" style="color:green">
<br>
<br>
<br>
<h1 style="color:green"> TO BUY </h1>
<p1 style="color:green"> product: 2.50$ <br> contact: getapachipro@gmail.com </p1>
<br>
<br>
</center>
</div>
<style> body{background-color:black}</style>
`;
var tb = window.open();
tb.document.body.appendChild(tab);
var sen = tb.document.getElementById("sen");

sen.onclick = function () {
  var ac = tb.document.getElementById("1");
  var k = tb.document.getElementById("2");
  var port = tb.document.getElementById("port");
  var acc = ac.value;
  var key = k.value;
  var l = tb.document.getElementById("error msg");
  var log = l.innerHTML;
  var ver = "",
    int = tb.document.getElementById("3");
  port.innerHTML = "";

  req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/Versions/" +
      int.value +
      ".json",
  );
  req.onload = function () {
    port.innerHTML += `<br><br>` + this.responseText;
    ver = this.responseText;
  };
  req.send();

  if (acc == null) {
    l.innerHTML = "ERROR COULD NOT PROCCESS READING ---> null <---";
  } else if (acc == undefined) {
    l.innerHTML = "ERROR COULD NOT PROCCESS READING ---> undefined <---";
  } else if (acc == "") {
    l.innerHTML = "ERROR COULD NOT PROCCESS READING --->  <---";
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open(
    "GET",
    "https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/acc/" +
      acc +
      ".json",
  );
  xmlhttp.onload = function () {
    var myObj = JSON.parse(this.responseText);
    if (myObj.Bl == false) {
      port.innerHTML += `<br><br>` + "Blacklisted:false" + `<br>`;

      if (acc == myObj.name) {
        port.innerHTML += "Name:success" + `<br>`;

        if (key == myObj.loginKey) {
          port.innerHTML += "key:success" + `<br>`;

          if (myObj.auth == true) {
            port.innerHTML += "Access:succsess" + `<br>`;
            if (myObj.accType == "paid") {
              port.innerHTML += "AccessingOnType:Paid" + `<br>`;
              if (myObj.hasPaid == true) {
                port.innerHTML +=
                  "Access:succsess, AccessType:paid, Key:succsess, Name:succsess, auth:true, Version:" +
                  ver.name;
                port.style = "color:lime";
                l.innerHTML = "LOGIN:success";
                l.style = "color:lime";
                req2 = new XMLHttpRequest();
                req2.open(
                  "GET",
                  "https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/Versions/" +
                    int.value +
                    ".js",
                );
                req2.onload = function () {
                  eval(this.responseText);
                };
                req2.send();
              } else if (myObj.hasPaid == false) {
                port.innerHTML +=
                  "Access:faild, Reason: No Payment. To fix please contact an apachi sales rep to pay and have acc updated.";
                port.style = "color:red";
              }
            } else if (myObj.accType == "free") {
              //free script here

              port.innerHTML += "Access:running free... END";
              port.style = "color:lime";
              l.innerHTML = "LOGIN:success";
              l.style = "color:green";
            }
          } else if (myObj.auth == false) {
            port.innerHTML +=
              "Access:faild, Reason: Auth fail. To fix please contact an apachi sales rep.";
            port.style = "color:red";
          }
        } else if (key !== myObj.loginKey) {
          port.innerHTML += "Access:faild, Reason:Wrong password.";
          port.style = "color:red";
        } else if (myObj.Bl == true) {
          port.innerHTML +=
            "Access:faild, Reason:" + `<p1 style="color:red">Blacklisted</p1>`;
          port.style = "color:red";
        }
      } else {
        l.innerHTML = "ERROR COULD NOT READ ¯_(ツ)_/¯";
      }
    }
  };
  xmlhttp.open(
    "GET",
    "https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/acc/" +
      acc +
      ".json",
  );
  xmlhttp.send();
};
