var novoElemento = document.createElement("h2");
var titulo_2 = document.createTextNode("título_2");

novoElemento.appendChild(titulo_2);
console.log(novoElemento);

var body = document.querySelector("body");

body.appendChild(novoElemento);
