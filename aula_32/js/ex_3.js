var h1 = document.createElement("h1");

const elemento1 = document.createTextNode("carro de hoje");

h1.appendChild(elemento1);
console.log(h1);

var body = document.querySelector("body");
body.appendChild(h1);