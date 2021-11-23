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