document.getElementById("btn-validar").addEventListener("click",function(){
   //Obtenemos el sting del input
    var inputNumberCard = document.getElementById("numero-tarjeta").value;
    //variable para saber el total
    var suma = 0;
    //bucle para recorrer cada caracter o número 
    for(i=0;i<inputNumberCard.length;i++){
        //variable para obtener cada número con su valor
        if(i%2==0 || i ==0){
            var n = parseInt(inputNumberCard[i]);
            n = n*2;
            if(n>9){
                r = n%10;
                n = r + 1;
            }
        }
        suma += n;
    }
    
    var mensaje = document.getElementById("alerta")
    mensaje.innerHTML = "El número de la tarjeta es invalido"
    if(suma%10 ==0){
        mensaje.innerHTML = "El número de la tarjeta es valido"
    }
})
