$(document).ready(function (){
    console.log("hola");
    //Mover elemento por la pagina
    $(".elemento").draggable();

    //Redimensionar
    $(".elemento").resizable();

    //Seleccionar o  ordenar elementos
    // $(".lista-seleccionable").selectable();

    //$(".lista-seleccionable").sortable();
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });

    // Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function (){
            console.log("Has soltado algo dentro de el area");
        }
    });

    // Efectos
    $("#mostrar").click(function (){
        //Muestra y oculta al precionar el boton en jQuery
        // $(".caja-efectos").toggle("fade");
        // $(".caja-efectos").fadeToggle();

        //Efecto no nativo se tiene que pasar por effect
        // $(".caja-efectos").effect("explode");
        // $(".caja-efectos").toggle("explode");

        //Efecto desplegar hacia abajo y hacia arriba
        // $(".caja-efectos").toggle("blind");

        //Efecto hacia la derecha aparece y desaparece hacia la izquierda
        // $(".caja-efectos").toggle("slide");

        //El mismo pero degradado
        // $(".caja-efectos").toggle("drop");

        //abajo arriba
        // $(".caja-efectos").toggle("fold");

        // $(".caja-efectos").toggle("puff");

        // $(".caja-efectos").toggle("scale");

        //vibrar
        // $(".caja-efectos").toggle("shake");

        // $(".caja-efectos").toggle("shake", "slow");
        $(".caja-efectos").toggle("shake", 4000);
    });

    //Tooltip
    $(document).tooltip();

    //Dialog
    // $("#popup").dialog();
    $("#lanzar-popup").click(function (){
        $("#popup").dialog();
    })

    //Datepicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
});