novoH1 = document.createElement('h1');

novoTexto = document.createTextNode("Texto 2");
novoH1.appendChild(novoTexto);
console.log(novoH1);

var body = document.querySelector('body');
console.log(body);
body.appendChild(novoH1);

