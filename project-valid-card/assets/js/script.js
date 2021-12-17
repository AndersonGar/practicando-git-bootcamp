document.getElementById("btn-validar").addEventListener("click",function(){
    //Obtenemos el string del input
    var inputNumberCard = document.getElementById("numero-tarjeta").value;
    //variable para saber el total
    var suma = 0;
<<<<<<< HEAD
    //bucle para recorrer cada caracter o numero
    for(i=0;i<inputNumberCard.length;i++){
        //variable para obtener cada numero con su valor
        var n = parseInt(inputNumberCard[i]);
          if(i%2==0 || i == 0){ 
            n = n*2;
            if(n>9){
                r = n%10;
=======
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
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
                n = r + 1;
            }
        }
        //Actualizar la suma total de cada digito procesado
<<<<<<< HEAD
        suma += n; 
    }
    alert(suma)
    var mensaje = document.getElementById("alert");
    mensaje.innerHTML = "El numero de la tarjeta es invalido"
    if(suma%10 == 0){
        mensaje.innerHTML = "El numero de la tarjeta es valido"
    }
})
=======
        suma += n;
    }
    alert(suma);
    var mensaje = document.getElementById("alerta");
    mensaje.innerHTML = "El número de la tarjeta es inválido";
    if(suma%10 == 0){
        mensaje.innerHTML = "El número de la tarjeta es válido";
    }
    
})
>>>>>>> 5b9d5e56bc32cb79edded49eb7a97e86f035be48
