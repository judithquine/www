<?php

/*
 * ARRAYS
 */

$pelicula = "Batman";
$peliculas = array('Batman', 'Spiderman', 'El señor de los anillos');
$cantantes = ['2pac', 'Drake', 'Jennifer Lopez'];
//var_dump($peliculas[2]);
//var_dump($cantantes);


//Array asociativo
$personas = array(
    'nombre' => 'Víctor',
    'apellidos' => 'Garcia',
    'web' => 'https://google.com'
);

//ejemplo modificado en la url, verlo
//url/14-arrays/?hola=1&nombre=paco
var_dump($_GET);

var_dump($personas['apellidos']);
echo $personas['nombre'];

echo $peliculas[0];
echo "<br/>";
echo $cantantes[2];

//Recorrer con FOR
echo "<h1>Listado de peliculas</h1>";

echo "<ul>";

for($i = 0; $i < count($peliculas); $i++) {
    echo "<li>".$peliculas[$i]."</li>";
}

echo "</ul>";

//Recorrer con Foreach
echo "<h1>Listado de cantantes</h1>";

echo "<ul>";

foreach($cantantes as $cantante) {
    echo "<li>".$cantante."</li>";
}

echo "</ul>";

//Arrays multidimensionales

    $contactos = array(
        array(
            'nombre' => 'Antonio',
            'email' => 'antonio@gmail.com'
        ),
        array(
            'nombre' => 'Luis',
            'email' => 'luis@gmail.com'
        ),
        array(
            'nombre' => 'Salvador',
            'email' => 'salva@gmail.com'
        )
    );

//var_dump($contactos);
echo $contactos[1]['nombre'];
echo $contactos[2]['email'];

//foreach($contactos as $key => $value) {
//
//}

foreach($contactos as $key => $contacto) {
    var_dump($contacto);
    var_dump($contacto['nombre']);
}