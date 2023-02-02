var frase = "O automóvel é um carro";
console.log(frase);

console.log(frase.toLocaleUpperCase());
var frase2 = "  marco ";
console.log(frase2);

var novaFrase2 = frase2.trim();
console.log(novaFrase2);


var tags = "audi, ferrari, bugatti";

var ntags = tags.split(",");
console.log(ntags)

var frase3 = "o mercado é bom para comprar frutas e o mercado é bom para comprar carne";

console.log(frase3.lastIndexOf("mercado"));
console.log(frase3.slice(40, 47));
console.log(frase3.replace("mercado", "hortifrut"));
