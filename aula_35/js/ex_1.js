var h2 = document.createElement("h3");
h2.classList= "elemento1"

var texto1 = document.createTextNode("subtítulo 2");
h2.appendChild(texto1);
console.log(h2)


///////////////////////////////////////////////////

var trocar = document.querySelector(".sub2");
console.log(trocar);
var pai = trocar.parentNode;

pai.replaceChild(h2, trocar);


