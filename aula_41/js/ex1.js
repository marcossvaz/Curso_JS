function exibir(num) {
  console.log("O número é: "+num);
}

function soma(a, b, cb){
  var op= a + b;
  cb(op);
}

soma (5, 5, exibir);