function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  var update = document.getElementById("ip_txt");
  update.innerHTML="ip:"+ip;
  
  
  if (ip == '2600:1700')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  
  
  
  
  
  
  
  })