'use strict'

// BOM Browser Object Model
function getBom() {
    //en consola getBom();
    //ver ancho de la ventana
    console.log(window.innerWidth);

    //ver altura de la ventana
    console.log(window.innerHeight);

    //tamaño de la pantalla del usuario
    console.log(screen.width);
    console.log(screen.height);

    //url cargada
    console.log(window.location);
    console.log(window.location.href);
}

//en consola >redirect(https://google.com);
function redirect(url){
    window.location.href = url;
}


//en consola >abrir Ventana("https://google.com");
function abrirVentana(url){
    window.open(url,"","width=400,height=300");
}

getBom();
