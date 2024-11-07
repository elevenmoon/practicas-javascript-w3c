//prompt basico
//prompt('Que edad tienes?');

//prompt guardando variable
//var edad = prompt('Que edad tienes?');

//prompt guardando variable y un escrito dentro del cuadro
//var edad = prompt('Que edad tienes?','pon numeros y enter');

do{
var edad = prompt('Que edad tienes?','pon numeros y enter');
console.log(edad);
var verificar = !isNaN(edad)
console.log(verificar)
}while(isNaN(edad))

alert(edad);