var novoParagrafo = document.createElement("p");

var conteudo = document.createTextNode("Entre os carros zero quilômetro, a Fiat se destacou ao ocupar quatro posições entre os dez modelos mais procurados no período. De acordo com o levantamento, o Fastback, uma das mais recentes novidades da montadora italiana no País, lidera o levantamento pelo quarto mês consecutivo, seguido por Jeep Compass e Honda HR-V. ");

novoParagrafo.appendChild(conteudo);
console.log(novoParagrafo);

var body = document.querySelector("body");

body.appendChild(novoParagrafo);