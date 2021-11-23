document.getElementById("btn-validar").addEventListener("click",function(){
    //Obtenemos el string del input
    var inputNumberCard = document.getElementById("numero-tarjeta").value;
    //variable para saber el total
    var suma = 0;
    //bucle para recorrer cada caracter o número
    for(i=0;i<inputNumberCard.length;i++){
        //variable para obtener cada numero con su valor
        var n = parseInt(inputNumberCard[i]);
        //Condicional para saber si se debe operar o no
        if(i%2==0 || i == 0){
            n = n*2;
            //Condicional para saber si el número tiene 2 digitos
            if(n>9){
                //Obtener el segundo dígito
                r = n%10;
                //Sumar los digitos
                n = r + 1;
            }
        }
        //Actualizar la suma total de cada digito procesado
        suma += n;
    }
    alert(suma);
    var mensaje = document.getElementById("alerta");
    mensaje.innerHTML = "El número de la tarjeta es inválido";
    if(suma%10 == 0){
        mensaje.innerHTML = "El número de la tarjeta es válido";
    }
    
})