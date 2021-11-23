document.getElementById("btn-validar").addEventListener("click",function(){
    var inputNumberCard =document.getElementById("numero-tarjeta").value;
   // alert(inputNumberCard);
    var suma = 0;
     for(i=0;i<inputNumberCard.length;i++){
        var n = parseInt(inputNumberCard[i]);
        if(i%2==0 || i == 0){
            n = n*2;
            if(n>9){
                r = n%10;
                n = r + 1;
            }
        }
        suma += n;
    } 
    alert(suma);
    var mensaje = document.getElementById("alerta");
    mensaje.innerHTML = "El numero de la tarjeta es invalido";
    if(suma%10 ==0){
        mensaje.innerHTML = "El numero de la tarjeta es valido ";
    }
})