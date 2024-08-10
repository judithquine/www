'use strict'

window.addEventListener('load', function (){

    // Timers

    // se ejecuta una vez
    // var tiempo = setTimeOut(function(){}

    // se ejecuta en bucle
    // var tiempo = setInterval(function(){
    //     console.log("Set Interval ejecutado");
    //
    //     // document.querySelector("h1").style.fontSize = "50px";
    //     var encabezado = document.querySelector("h1");
    //     if(encabezado.style.fontSize == "50px"){
    //         encabezado.style.fontSize = "30px";
    //     }else{
    //         encabezado.style.fontSize = "50px";
    //     }
    //
    // }, 1000);

    //
    function intervalo(){
        var tiempo = setInterval(function(){
            console.log("Set Interval ejecutado");

            // document.querySelector("h1").style.fontSize = "50px";
            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize = "30px";
            }else{
                encabezado.style.fontSize = "50px";
            }

        }, 1000);

        return tiempo;
    }

    var tiempo = intervalo();

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", function (){
        alert("Has parado el intervalo en bucle")
       clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", function (){
        alert("Has iniciado el intervalo en bucle")
        intervalo(tiempo);
    });


});