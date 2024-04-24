'use strict'

// BOM Browser Object Model
function getBom() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    //tamaño de la pantalla
    console.log(screen.width);
    console.log(screen.height);

    //url cargada
    console.log(window.location);
    console.log(window.location.href);
}

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url,"","width=400,heigth=300");
}

getBom();
