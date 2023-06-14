//paid user ips

function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  var update = document.getElementById("ip_txt");
  update.innerHTML="ip:"+ip;

  if (ip == '2a00:23c4') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();

  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();
  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();
  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();


  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();


  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();


  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();


  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();


  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();


  }

  else if (ip == '') {
    req = new XMLHttpRequest();
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js');
    req.onload = function() {
      eval(this.responseText);
    };
    req.send();


  }






;});
