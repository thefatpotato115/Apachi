// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/index.js":[function(require,module,exports) {
function Apachi_LaunchPage_Open() {
  var e = document.createElement("div");
  e.innerHTML = "\n <center>\n        <div style=\"width:100%;height:100%;background-color:black; \"> \n<text style=\"color:green\"> <h1>Apachi Version 1.3.6</h1> <txt style=\"color:green\" id=\"ip_txt\">ip:undefined</txt> </text>\n\n<br>\n<text style=\"color:green\"> You will need a code to access this page </text>\n<br>\n<br>\n<text style=\"color:green\"> Recent reports show Apachi is being used with out my knowledge. Please check if anyone is looking before use </text>\n<br>\n<br>\n<text style=\"color:green\"> So i have implemented this system. If anyone asks tell them NO i do not want to lose this agein </text>\n<br>\n<br>\n<text style=\"color:green\"> Or have this spiral out of control like last time</text>\n<br>\n<br>\n<text style=\"color:green\"> So, user please use this wisely. You have one chance</text>\n<br>\n<br>\n<button onclick=\"window.open();\" \nstyle=\"color:green;background-color:black;border-color:green\"> test pop-ups </button>\n<input style=\"background-color:black;color:green;border-color:green; width:40%\"  \nid=\"intp\" type=\"password\"> </input> \n<button style=\"color:green;background-color:black;border-color:green\" \nonclick=\"\n\nvar cd = document.getElementById('intp').value;\nreq = new XMLHttpRequest(); \nreq.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/favicon_link.txt'); \nreq.onload = function() {var x = atob(this.responseText);if(cd == x) { req2 = new XMLHttpRequest(); req2.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/src/Application.js'); \nreq2.onload = function() { window.close();eval(this.responseText);}; req2.send();} else {window.open('https://discord.gg');} ;}; req.send();\n\n\n\n        \"> deploy paid </button> \n        \n        <button style=\"color:green;background-color:black;border-color:green;\" onclick=\"req = new XMLHttpRequest();\n    req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/ip_data.js');\n    req.onload = function() {\n      eval(this.responseText);\n    };req.send();\">Login via IpV4 address </button> \n        <button onclick=\"req = new XMLHttpRequest();         \nreq.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Free/Free_Application.js'); \nreq.onload = function() { window.close();eval(this.responseText);}; req.send();\" \nstyle=\" color:green;background-color:black;border-color:green\"> deploy free </button>\n\n<button onclick=\" req = new XMLHttpRequest();req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js'); \nreq.onload = function() { eval(this.responseText); }; req.send();\"> test blacklist </button>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n<text style =\"color:green\"> Terms of service may apply to any user money spent to get to this project does not matter to me because it has no effect on myself. If you have received this from a friend</text>\n<br> <br> <text style =\"color:green\"> Then DO NOT COMPLAIN to them it only annoys your friend. Because of the passcode. If you have authorization to the project then you may have access </text>\n<br>\n<br>\n<text style =\"color:green\"> if the password gets leaked by an authorized individual then it will change. so please be honest on what you do with this ;)</text>\n\n<br>\n<br>\n<h1 style=\"color:green\">How to use </h1>\n<p1 style=\"color:green\"> to deploy (paid or free) please enable pop-ups to do this click test pop-ups there should be a red thing in your search bar on the top right of your screen </p1>\n<p1 style=\"color:green\"> click on it and it should show a screen saying \"continue blocking\" or \"always allow pop-ups\" click always allow then click test pop-ups again once it opens </p1>\n<p1 style=\"color:green\"> about:blank then deploy paid or free *note that you only have to do this once then all you have to do is click on a deployment method\n<text style =\"color:green\"></text>\n       </div> </center>\n<title>Apachi launcher</title>\n<link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.jpg\">\n\n\n\n        ";
  function text(url) {
    return fetch(url).then(function (res) {
      return res.text();
    });
  }
  text('https://www.cloudflare.com/cdn-cgi/trace').then(function (data) {
    var ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
    var ip = data.match(ipRegex)[0];
    var update = document.getElementById("ip_txt");
    update.innerHTML = "ip:" + ip;
    if (ip == '2a00:23c4') {
      req = new XMLHttpRequest();
      req.open('GET', 'https://raw.githubusercontent.com/thefatpotato115/Apachi/main/Resources/blacklisted_page.js');
      req.onload = function () {
        window.close();
        eval(this.responseText);
      };
      req.send();
    } else {
      var tab = window.open();
      tab.document.body.appendChild(e);
    }
    ;
  });
}
Apachi_LaunchPage_Open();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33813" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map