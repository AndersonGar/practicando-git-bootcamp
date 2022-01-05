//Declaración de Variables
let vidas = 3;
let promedio = 20.0;
let nombre = "Juan";


//Red Social -> publicaciones

let reacciones_disponibles = ["Me gusta","Me divierte", "Me entristece"];
let correo_electronico = "usuario_78@gmail.com"; //string
let clave = "usuario1234";
let url_foto_perfil = "assets.mysocialnetwork.com?=id/assets/img/perfil.png";
let nombre = "Juan Gutierrez";
let edad = 20;
let cant_notificaciones = 0;
let genero = "Masculino";
let nmr_amigos = 421;


let estado_cuenta = true;
let privacidad = ["Solo yo","Solo amigos", "Público"];



$(document).ready(function(){
    $("#btn-ingresar").click(function(){
        var correo = $("#mail").val();
        var clave = $("#pass").val();
        if(correo == "ctc@gmail.com" & clave=="1234"){
            alert("Ingreso correcto");
            //Llevar al sitio web de la cuenta
        }
        else{
            alert("Datos incorrectos");
            //Popup para avisar
        }
    })
})













