document.getElementById("btn-validar").addEventListener("click",function(){
    //obtenemos el string del input
    var inputNumberCard = document.getElementById("numero-tarjeta").value;
    //variable para saber el total
    var suma = 0;
    //buble para obtener cada numero con su valor
    for(i=0;i<inputNumberCard.length;i++){
        if(i%2==0 || i == 0){
            var n = parseInt(inputNumberCard[i]);
            n = n*2;
            if(n>9){
                r = n%10;
                n = r + 1; 
            }
        }
        //actualizar la suma total de cada digito procesado
            suma +- n;
           
    }
    var mensaje = document.getElementById("alerta");
    mensaje.innerHTML = "el numero de la tarjeta es invalido"
    if(suma%10 == 0){
        mensaje.innerHTML = "El número de la tarjeta es valido"
            
    }
})
//Evento de click en el boton con el id 'btn-cambiar'
document.getElementById("btn-cambiar").addEventListener("click",function(){
    //Variable para guardar el valor del input
    var mensaje = document.getElementById("msj").value;
    //Arreglo vacío para los nuevas códigos
    var codigosNuevos = [];
    //Creamos una variable para el nuevo mensaje
    var nuevoMensaje = "";
    //Bucle para recorrer las letras de la palabra
    for(i=0;i<mensaje.length ;i++){
        var c = mensaje[i].toLowerCase();
        //Variable para guardar el número de la posición de la letra del mensaje
        var codMsj = c.charCodeAt();
        //Variable para obtener el nuevo código de mi nueva letra
        var codNuevo = codMsj + 2;
         if(codNuevo > 122){
             var d = codNuevo - 122;
             codNuevo = 96 + d;
         }
        //Agregar el nuevo codigo al arreglo
        codigosNuevos.push(codNuevo);
        //Concatenar las nuevas letras en un solo string, la variable nuevoMensaje
        nuevoMensaje;
    }
})