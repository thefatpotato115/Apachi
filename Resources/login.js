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
            //proced

            port.innerHTML += "Access:succsess";
            port.style = "color:lime";
          } else if (myObj.auth == false) {
            port.innerHTML +=
              "Access:faild, Reason: Auth fail. To fix please contact an apachi sales rep.";
          }
        } else if (key !== myObj.loginKey) {
          port.innerHTML += "Access:faild, Reason:Key Fail";
        } else if (myObj.Bl == true) {
          port.innerHTML +=
            "Access:faild, Reason:" + `<p1 style="color:red">Blacklisted</p1>`;
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
