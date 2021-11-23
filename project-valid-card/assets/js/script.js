document.getElementById("btn-validar").addEventListener("click",function(){
    //Obtenemos el string del input
    var inputNumberCard = document.getElementById("numero-tarjeta").value;
    //Variable para saber el total
    var suma = 0;
    //Bucle para recorrer cada caracter o numero
    for(i=0;i<inputNumberCard.length;i++){
        //Variable para obtener cada numero con su valor
        var n = parseInt(inputNumberCard[i]);
        //Condicional para saber si se debe operar o no 
        if(i%2==0 || i == 0){
            n = n*2;
            //Condicional para saber si el numero tiene dos digitos
            if(n>9){
                //Obtener el segundo digito
                r = n%10;
                //Sumar los digitos
                n = r + 1;
            }
        }
        //Actualizar la suma total de cada digito procesado
        suma += n;
    }
    var mensaje = document.getElementById("alerta");
    mensaje.innerHTML = "El número de la tarjeta es inválido"
    if(suma%10 == 0){
        mensaje.innerHTML = "El número de la tarjeta es válido"
    }
})
