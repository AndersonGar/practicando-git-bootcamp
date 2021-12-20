//Funcion para mostrar la imagen
function showImage(data) {
    //Creando un string para etiqueta img
    let img = $('<img>');
    //Dando atributo a la etiqueta con la data que devuelve la api
    img.attr('src',data.sprites.other['official-artwork'].front_default);
    //Insertando la imagen a un contenedor
    $('#pk-img').append(img);
    //Creando una etiqueta p con el nombre
    let name = '<p>'+data.name+'</p>';
    //Insertando la etiqueta p a un contenedor
    $('#pl-name').append(name);
}
//Funcion para empezar la búsqueda
function searchPokemon(name) {
    //Iniciando AJAX
    $.ajax({
        type: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${name}/`,
        dataType: 'json',
        async: true,
        success: function(data) {
            showImage(data);
        }
    })
}

//Iniciar el jquery
$(document).ready(function(){
    //Evento cuando se de click en el boton #btn-buscar
    $("#btn-buscar").click(function(e) {
        //Obtener lo que se ha escrito en el input
        var name = $("#pk-name").val().toLowerCase();
        //Verificar si lo que se ha escrito es diferente que vacío
        if(name!=""){
            //Llamar a la funcion para que haga la busqueda con el nombre
            searchPokemon(name);
        }
    })
})