$(document).ready(function (){
    reloadLinks();

    //Le agrega la función al boton deshabilitado
    $('#add_button')
        .removeAttr('disabled')
        .click(function (){
        // console.log($("#add_link").val()); //ver el valor introducido
        // $('#menu').html('<li><a href="'+$("#add_link").val()+'"></a></li>'); //recarga toda la página
        // prepend, before, after
        $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
            $("#add_link").val(''); //pone en vacio el input
        reloadLinks();
    })

    // cuenta los enlaces o elementos
    console.log($('a').length);
/* Lo llevo a una función
    $('a').each(function (index){
        // console.log($(this));  //veo los enlaces
        // console.log($(this).attr("href")); //capturo el atributo, así lo veo
        var that = $(this);
        var enlace = that.attr("href");
        that.text(enlace);
    });*/

});
   function reloadLinks(){
    $('a').each(function (index){
        var that = $(this);
        var enlace = that.attr("href");

        that.attr('target','_blank'); //abre en una nueva ventana

        that.text(enlace);
    });
   }