<?php

$numero = 0;

while($numero <= 100){
  echo "$numero";

  if($numero != 100){
    echo ", ";
  }

  $numero++;
}
echo "<hr/>";

//Ejemplo 

if(isset($_GET['numero'])){
  //Cambiar tipo de dato - casting
  $numero = (int)$_GET['numero'];
}else{
  $numero = 1;
}

var_dump($numero);

echo "<h1>Tabla de multiplicar del numero $numero</h1>";

$contador = 1;
while($contador <= 10){
  echo "$numero x $contador = ".($numero*$contador)."<br/>";
  $contador++;
}
echo "<hr/>";

// Do while
$edad = 18;

do{
  echo "Tienes acceso al local privado $contador";
  $contador++;
}while($edad >= 18 && $contador <= 10);


?>