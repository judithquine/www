<?php
  
$resultado = 0;

for($i = 0; $i <= 100; $i++){
  $resultado += $i;
}

if(isset($_GET['numero'])){
    //Cambiar tipo de dato - casting
    $numero = (int)$_GET['numero'];
}else{
  $numero = 1;
}
  
var_dump($numero);
  
echo "<h1>Tabla de multiplicar del numero $numero</h1>";

for($contador = 10; $contador <= 10; $contador++){
    echo "$numero x $contador = ".($numero*$contador)."<br/>";
  }
?>