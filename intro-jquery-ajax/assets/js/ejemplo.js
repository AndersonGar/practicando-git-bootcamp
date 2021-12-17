function showImg(data){
    let img = $('<img></img>');
    img.attr("src",data.download_url);
    img.addClass("img-api");
    let p = '<span>'+data.author+'</span>';
    $("#gallery").append(img);
    $("#gallery").append(p);
}

$(document).ready(function(){
    $("#btn-hide").click(function(){
        $("p").hide("slow");
    })

    $("#btn-create").click(function(){
        let span = "<span>Parrafo nuevo</span>";
        $("#new-content").append(span);
        $("span").addClass("parrafo");
    })

    let n = 15;

    $.ajax({
        type: 'GET',
        url: 'https://picsum.photos/id/'+n+'/info',
        dataType: 'json',
        async: true,
        success: function(data){
            showImg(data);
        },
    })
})

