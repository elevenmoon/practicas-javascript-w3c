//inizalizacion del carrito
var carritoCompra = new Object();
var controlOpciones = true;
var numeroItemAgregado = 0;

//opciones del carrito
const agregarElmentos = function(carritoCompra){
    //alert('entro en agregar');
    //datos que se piden para generar el elemento del carrito
    let cantidad = parseInt(prompt('introducir la cantidad del producto', 'colocar numeros naturales'));
    let descripcionElemento = prompt('descripcion del producto', 'coloque el nombre del producto');
    let valorPruducto = parseFloat(prompt('valor del producto sin IVA', 'colocar el decimal con punto'));
    let codigoProducto = 'item'+numeroItemAgregado;

    //revisar la entrada de datos
    //alert(codigoProducto);
    //alert(cantidad);
    //alert(descripcionElemento);
    //alert(valorPruducto);
    
    //crear el objeto del nuevo elemento
    let nuevoElemento = { [codigoProducto]: { cantidad: cantidad, descripcionelemento: descripcionElemento, valorproducto: valorPruducto } };

    //contador de Items agregados
    numeroItemAgregado++;

    //revisar la salida de objetos
    //console.log(carritoCompra);
    //console.log(nuevoElemento);

    //agregar el nuevo item al carrito de compra
    Object.assign(carritoCompra,nuevoElemento);
    
    //console.log(carritoCompra);

    return carritoCompra;
}

const mostrarElementos = function(carritoCompra){
    alert('entro en mostrar');
    let claves = Object.keys(carritoCompra);
    console.log(claves.length)
    for(let i=0; i<claves.length; i++){
        let clave = claves[i];
        console.log(clave);
        console.log(carritoCompra[clave]);
        Object.entries(carritoCompra[clave]).forEach(([key, value]) => {
            console.log(key +' '+value)
          });
    }
    /*formas que no funcionaron por errores basicos XD despues las pruebo
    /*let clavesInternas = Object.keys(claves);
    console.log(clavesInternas.length);
    for(let j=0;j<clavesInternas.length; j++){
        let claveIinterna = clavesInternas[j];
        console.log(claves[claveIinterna]);
    }*/
    /*for(let clavesInternas in carritoCompra[clave]){

        console.log(carritoCompra[clave[clavesInternas]]);
    }*/

}

const modificarElemento = function(carritoCompra){
    alert('modificar');
    //pedir el codigo del elemento del carrito a modificar
    let codigoElemento = prompt('Pasar el codigo del elemento a modificar', 'ejemplo: item0');

    //
    if(carritoCompra.hasOwnProperty(codigoElemento)){

        //pedir los datos para modificar
        let cantidaProducto = parseInt(prompt('cantidad del producto','numeros naturales'));
        let montoProducto = parseFloat(prompt('precio del producto sin IVA', 'monto con decimales'));
    
        //modificar los datos
        carritoCompra[codigoElemento["cantidad"]] = cantidaProducto;
        carritoCompra[codigoElemento["valorproducto"]] = montoProducto;

        //mensaje para saber si modifico los datos
        alert(`el elemento del carrito a sido modificado`)
    }else{
        //mensaje para saber sino encuentra el codigo del elemento en el carrito
        alert(`el codigo ${codigoElemento} no se encuentra en el carrito`)
    }
    
    //console.log(carritoCompra);
}

const eliminarElemento = function(carritoCompra){
    //alert('eliminar');

    //console.log(carritoCompra);
    //alert(carritoCompra);
    
    //pedir el codigo elemento del carrito que se va eliminar
    let codigoElemento = prompt('codigo del producto', 'item0');

    //eliminando producto
    if(carritoCompra.hasOwnProperty(codigoElemento)){
    
    //eliminar el producto ingresado del carrito
        delete carritoCompra[codigoProducto];
        alert('elemento eliminado');
    }else{
        //no se encotro el codigo del elemento en el carrito
        alert('el codigo del elemento a eliminar no se encontro en el carrito de compra')
    }

    //alert(carritoCompra);
}



do{
    
    if(Object.keys(carritoCompra).length !== 0 /*&& carritoCompra.constructor === Object*/){
        var controlCRUDCarrito = 0;
        controlCRUDCarrito =  parseInt(prompt(`seleccione la interracion con el carrito
            1 - Asigar un elemento.
            2 - Mostrar los elementos.
            3 - Modificar el elemento.
            4 - Sacar un elemento.`));
        //console.log(controlCRUDCarrito);
        //alert(controlCRUDCarrito);
        if(parseInt(controlCRUDCarrito) == 1){
            //crear un elemento
            agregarElmentos(carritoCompra);

        } else if(parseInt(controlCRUDCarrito) == 2) {
            //mostrar un elemento
            mostrarElementos(carritoCompra);

        } else if(parseInt(controlCRUDCarrito) == 3) {
            //modificar un elmento solo se puede modificar la cantidad
            modificarElemento(carritoCompra);

        } else if(parseInt(controlCRUDCarrito) == 4) {
            //borrar un elemento
            eliminarElemento(carritoCompra);
        
        }else{
            // ingreso un valor valido
            alert('No ingreso un valor permitido');

        }
    }else{
        //revisar si el usuario quiere agregar un numero
        let agregarElemento = confirm('el carrito no tiene elementos quiere agregar uno?');
        console.log(agregarElemento);

        if(agregarElemento == true){
            agregarElmentos(carritoCompra);
        }
    }

    //console.log('voy por aqui');
    controlOpciones = confirm('Quiere agregar un nuevo elemento al carrito');
     
    //console.log(controlOpciones);

}while(controlOpciones == true);
