document.getElementById("btn-validar").addEventListener("click",function(){
    //Obtenemos el string del input
    var inputNumberCard = document.getElementById("numero-tarjeta").value;
    //variable para saber el total
    var suma = 0;
    //bucle para recorrer cada caracter o numero
    for(i=0;i<inputNumberCard.length;i++){
        //variable para obtener cada numero con su valor
        var n = parseInt(inputNumberCard[i]);
          if(i%2==0 || i == 0){ 
            n = n*2;
            if(n>9){
                r = n%10;
                n = r + 1;
            }
        }
        //Actualizar la suma total de cada digito procesado
        suma += n; 
    }
    alert(suma)
    var mensaje = document.getElementById("alert");
    mensaje.innerHTML = "El numero de la tarjeta es invalido"
    if(suma%10 == 0){
        mensaje.innerHTML = "El numero de la tarjeta es valido"
    }
})
