let cadastro = {
    nome: "marcos",
    idade: 20,
}

if (cadastro.nome == "ikarus"){
    console.log(`Bem vindo ${cadastro.nome}`);
} if (cadastro.idade >= 20 && cadastro.nome == "ikarus") {
    console.log(`Sua idade é ${cadastro.idade}, você está apto para tirar a carteira`);
}
 else {
    console.log(`Não é ${cadastro.nome}, clique aqui para sair`);
}
