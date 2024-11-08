var comida = ['pasta','hamburguesa','pizza','pabellon'];

//primer metodo
for(let i = 0; i < comida.length; i++){
    console.log(comida[i]);
}

//segundo metodo
let index = 0;
console.log('recorrido con while');
while (index<comida.length){
    console.log(comida[index]);
    index++;
}

//tercer metodo
let indexDoWhile = 0;
console.log('recorrido con do while');
do{
    console.log(comida[indexDoWhile]);
    indexDoWhile++;
}while(indexDoWhile<comida.length);

//cuarto metodo
console.log('recorrido con for each');
comida.forEach(function(comid,indexForEach) {
    console.log(comid+' '+indexForEach);
    //preguntar este tipo de concatenacion
    console.log(`${comid} : ${indexForEach}`);
    console.log(`que comida quieres hoy ${comid}`);
});