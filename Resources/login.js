var tab = document.createElement("div");
tab.innerHTML = `
<div style="background-color:black;width:100%;height:100%">
<title> LOGIN </title>
<center>
<h1 style="color:green"> please login </h1>
<br>
<p1 id="error msg" style="color:red"> </p1>
<br>
<br>
<button id="sen" style="background-color:black;border-color:green;color:green" > LOGIN </button>
<input id="1" style="background-color:black;border-color:green;color:green" placeholder="user name"> 
<input id="2" style="background-color:black;border-color:green;color:green" placeholder="password">
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
      port.innerHTML += "Blacklisted:false" + `<br>`;

      if (acc == myObj.name) {
        port.innerHTML += "Name:success" + `<br>`;

        if (key == myObj.loginKey) {
          port.innerHTML += "key:success" + `<br>`;

          if (myObj.auth == true) {
            port.innerHTML += "Access:succsess";
            if (myObj.AccType == "paid") {
              port.innerHTML += "AccessingOnType:Paid";
              if (myObj.hasPaid == true) {
                port.innerHTML +=
                  "Access:succsess, AccessType:paid, Key:succsess, Name:succsess, auth:true, Version:1.4.1 ALPHA. ";
                port.style = "color:lime";
                l.innerHTML = "LOGIN:success";
                eval(
                  atob(
                    "cmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7cmVxLm9wZW4oJ0dFVCcsICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdGhlZmF0cG90YXRvMTE1L0FwYWNoaS9tYWluL1Jlc291cmNlcy9pbmRleC5qcycpO3JlcS5vbmxvYWQgPSBmdW5jdGlvbigpIHsgd2luZG93LmNsb3NlKCk7ZXZhbCh0aGlzLnJlc3BvbnNlVGV4dCk7IH07cmVxLnNlbmQoKTs=",
                  ),
                );
              } else if (myObj.hasPaid == false) {
                port.innerHTML +=
                  "Access:faild, Reason: No Payment. To fix please contact an apachi sales rep to pay and have acc updated.";
                port.style = "color:red";
              }
            } else if (myObj.AccType == "free") {
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
          port.innerHTML += "Access:faild, Reason:Key Fail";
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
