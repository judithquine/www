<?php
    $cantantes = ['2pac', 'Drake', 'Jennifer Lopez', 'Alfredo'];
    $numeros = [1, 2, 5, 8, 3, 4];

//Ordenar
//asort($cantantes);
//arsort($cantantes);
    sort($cantantes);
    var_dump($cantantes);


//Añadir elementos array
$cantantes[] = "Natos";
$cantantes[] = "Natos";
$cantantes[] = "Natos";
var_dump($cantantes);

$cantantes[] = "Natos";
array_push($cantantes, 'Waor');
//var_dump($cantantes);

//Eliminar elementos array
array_pop($cantantes);
unset($cantantes[2]);
//var_dump($cantantes);

//Aleatorio
$indice = arrae
$indice =  array_rand($cantantes);
echo $cantantes[$indice];

//Dar la vuelta
?>