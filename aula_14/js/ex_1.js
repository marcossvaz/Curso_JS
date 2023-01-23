var usuario = {
    nome: "marcos",
    idade: 19,
}

if(usuario.nome === "marcos" && usuario.idade >= 20){
    console.log(`Bem vindo ${usuario.nome}, você pode participar desse brinquedo`);
} else {
    console.log(`você ainda não tem permisão para usufruir desse brinquedo`);
}

