

for(id = 20; id < 100; id++){
    
    if(id === 50){
        console.log("passou em pai");
        continue
    }
    console.log(id);
}

/////////////////////////////////////

for(idade = 1; idade < 30; idade++){
    if(idade == 20){
        console.log(`Saia seu vagabundo`);
        break
    }
    console.log(idade);
}