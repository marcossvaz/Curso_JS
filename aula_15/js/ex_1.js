let situacao = {
    nome: "marcos",
    idade: 14,
    responsavel: "desacompanhos"
}

if(situacao.nome === "marcos" && situacao.idade >= 15 || (situacao.responsavel == "acompanhados") ){
    console.log(`Sr ${situacao.nome} você tem autorização`);
} else {
    console.log(`Infelizmente, o Sr ${situacao.nome} não tem autirização`)
}