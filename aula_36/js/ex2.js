var nome = document.createElement("h3");

nome.classList = "elementoNovo";

var texto = document.createTextNode("elemento2");

nome.appendChild(texto);
console.log(nome);

var titulo = document.querySelector(".t2");
console.log(titulo);

var pai = titulo.parentNode;

pai.replaceChild(nome, titulo);
