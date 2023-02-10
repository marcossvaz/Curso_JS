var novoElemento = document.createElement("h2");

var novo = document.createTextNode("título 2:");
novoElemento.appendChild(novo);
console.log(novoElemento);
//// colocando o elemento para dentro do BODY
var body = document.querySelector("body");
body.appendChild(novoElemento);

