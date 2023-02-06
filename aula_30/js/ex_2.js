var novop = document.createElement("p"); //A tag <p> foi criada

var elementop = document.createTextNode("meu nome é Marcos"); // Criei uma frase com o *createTextNode*.

novop.appendChild(elementop);

var body = document.querySelector("body");
body.appendChild(novop);