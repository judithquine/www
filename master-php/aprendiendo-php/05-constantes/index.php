<?php

// constantes

define('nombre', 'judith');
define('web', 'judithweb');

echo '<h1>'.nombre.'</h1>';
echo '<h1>'.web.'</h1>';

// variable

$web = "judithweb.es/develop";
$web = "judithweb.es/story";
echo '<h1>'.$web.'</h1>';

// constantes predefinidas

echo PHP_OS;
echo PHP_VERSION;
echo PHP_EXTENSION_DIR;
echo __FILE__;

function holaMundo(){
	echo __FUNCTION__;	
}

holaMundo();

?>