
var idNasc = 1000;
var dataAgora = 2023;

function idade( dataAgora, idNasc ){
    resp = dataAgora - idNasc;
    
    if(resp < 100) {
        console.log(`sua idade é de ${resp}`)
    } else{
        console.log(`imopossível, você é um vampiro`);
    }
}

idade(dataAgora, idNasc);