var cadastro = {
    nome: "marcos",
    idade: 29,
    inter: function(){
        console.log(`Ola seu ${this.nome}`);
    },
    aniver: function(){
        this.idade += 1;
    },
}

cadastro.inter();

console.log(cadastro.idade);

cadastro.aniver();

console.log(cadastro.idade);
