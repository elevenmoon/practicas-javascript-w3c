function validarImpar(n1, n2){
    console.log(n1);
    console.log(n2);
    if(parseInt(n1)<parseInt(n2)){
    for ( i = n1; i <= n2; i++) {
        if(i%2 == 1){
        document.write('<p>'+i+'<p></br>');
        //console.log('es impar:'+i);
        } else {
            console.log('es par:'+i);
        } 
      }
    }else if(n1==n2){
        document.write('<h1>pusistes los dos valores iguales 🙄<h1>')
    }else {
        document.write('<p>pusistes el segundo numero mas pequeno que el primero 🤪<p></br>');
        for ( i = n2; i <= n1; i++) {
            /* console.log('entro al for invertido'); */
            if(i%2 == 1){
            document.write('<p>'+i+'<p></br>');
            //console.log('es impar:'+i);
            } else {
                console.log('es par:'+i);
            } 
          }
    }
}

function imprimirEntreNumeros(n1,n2){
    console.log(n1);
    console.log(n2);

    let loQueSeVaAImprimir= '<p>Imprimir desde '+n1+' hasta '+n2+': ';
    /* console.log(loQueSeVaAImprimir);*/
    if(parseInt(n1)<parseInt(n2)){
        for ( i = n1; i <= n2; i++){
            loQueSeVaAImprimir += 'ED-'+i;
        }
    }else if(n1==n2){
        document.write('<h1>pusistes los dos valores iguales 🙄<h1>');
    }else{
        document.write('<p>pusistes el segundo numero mas pequeno que el primero 🤪<p></br>');
        for ( i = n1; i >= n2; i--){
            loQueSeVaAImprimir += 'ED-'+i;
        }
    }
    
    loQueSeVaAImprimir += '<p></br>'

    document.write(loQueSeVaAImprimir);
}

function imprimirTabla(n1){
    console.log(n1);
    let valorMultiplicacion;
    
    document.write('<h1>Se va a imprimir la tabla del '+n1+'</h1></br>');

    for(var i=0; i<=10;i++){
        disenoTabla(n1,i);
    }
}

function disenoTabla(n1,i){
    document.write('<p>'+n1+' x '+i+' = '+(n1*i)+'<p></br>');
}

//esta funcion no se uso
function validarNumeroMayor(n1,n2){

    if(n1>n2){

    }else{
        console.log("los numeros estan de menor a mayor");
    }

}

var cualEjercicio = prompt("cual ejercicio quiere?", "puede ser el ejercicio 1 - 2 - 3");
var primerValor, segundoValor, numeroParaLaTabla;

if(parseInt(cualEjercicio)==1){
    //alert('valor para el primer ejercicio');
    alert('vamos a imprimir los numeros impares entre 2 numeros')
    primerValor = prompt('Introducir el primer valor', "Debe ser un numero");
    segundoValor = prompt('Introducir el segundo valor', "Debe ser un numero");

    validarImpar(primerValor,segundoValor);

}else if (parseInt(cualEjercicio)==2){
    alert('vamos a imprimir los entre dos numeros concatenando');
    primerValor = prompt('Introducir el primer valor', "Debe ser un numero");
    segundoValor = prompt('Introducir el segundo valor', "Debe ser un numero");

    imprimirEntreNumeros(primerValor,segundoValor);
    
}else if(parseInt(cualEjercicio)==3){
    alert('vamos a imprimr la tabla de multiplicar del valor ingresado');
    numeroParaLaTabla = prompt('Introducir el numero de una tabla', 'Debe ser un numero');

    imprimirTabla(numeroParaLaTabla);

}else{
    alert('no es un valor permitido');
}