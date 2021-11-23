document.getElementById("btn-validar").addEventListener("click",function(){
 var inputNumberaCard = document.getElementById("numero-tarjeta").value;
var suma =0;
   for(i=0;i<inputNumberaCard.length;i++){
   //
    var n = parseInt(inputNumberaCard[i]);
    //condicional para saber si se debe operar o no
   if(i%2==0 || i == 0 ){
       n= n*2;
       //condicional para saber si el numero tiene dos digitos
       if(n>9){
       //obtener el segundo digito
          r = n%10;
       //sumar lo digitos
           n = r + 1;
        }
    }
    //Actualizar la suma total de cada digito  procesado
    suma += n;
   }
   alert(suma);
   var mensaje =document.getElementById("alerta");
   mensaje.innerHTML ="El numero de la tarjeta invalido";
   if(suma%10 == 0){
       mensaje.innerHTML ="El numero de la tarjeta es valido";
   }

})