function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  var update = document.getElementById("ip_txt");

  // ip blacklist listings
  
<<<<<<< HEAD
  if (ip == '')
=======
  if (ip == '')
>>>>>>> 49d20be6c57e76643c0485012ccea5e0b5264640


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  
   else if (ip == '')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  
   else if (ip == '')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  
   else if (ip == '')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  
   else if (ip == '')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  else if (ip == '')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
 else if (ip == '')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
   else if (ip == '')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
   else if (ip == '')


  {
    req = new XMLHttpRequest(); 
    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); 
    req.onload = function() { window.close();eval(this.responseText); }; req.send();

  }
  
})

