var novoh2 = document.createElement("h2");

var novosub = document.createTextNode("texto2:");
novoh2.appendChild(novosub);
console.log(novoh2);

var body = document.querySelector("body");
body.appendChild(novoh2)

///////////////////////////////////

var novoid = document.getElementById("conteiner");

var el = document.createElement("span");

el.appendChild(document.createTextNode("texto de span"));

novoid.appendChild(el);
console.log(novoid);

