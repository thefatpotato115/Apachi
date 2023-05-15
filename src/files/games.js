function Apachi_Games() {
  var e = document.createElement("div");

  e.innerHTML = `
  <iframe
  width="100%"
  height="100%"
  src=" https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Flearn-to-fly-3.xml"
  frameborder="0"
  allowfullscreen
></iframe>;

  `;
  var tab = window.open();
  tab.document.body.appendChild(e);
}
Apachi_Games();
