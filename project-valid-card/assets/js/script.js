//Evento de la la funcion id
document.getElementById("btn-validar").addEventListener("click",function(){
    //Obtenemos el string del input
    var inputNumberCard = document.getElementById("numero-tarjeta").value;

    //Variable para saber el total
    var suma = 0;
    //Bucle para recorrer cada caracter o número 
    for(i=0;i<inputNumberCard.length;i++){
        //Variable para obtener cada número con su valor
        var n = parseInt(inputNumberCard[i]);
        //Condicional para saber si se puedo operar o no
        if(i%2==0 || i == 0){
            n = n*2;
            //Condicional, si el numero es mayor que 9
            if(n>9){
                //Se dividi entre 10, para obtener el segundo digito o residuo
                r = n%10;
                //El residuo se suma con 1 y asi da el resultado
                n = r + 1;
            }
        }
        //Actualizar la suma total de cada digito procesado
        suma += n;
        }
        var mensaje = document.getElementById("alerta");
        mensaje.innerHTML = "El número de la trajeta es invalido"
        if(suma%10 == 0){
            mensaje.innerHTML = "El numero de la tarjeta es valido"
    }
})