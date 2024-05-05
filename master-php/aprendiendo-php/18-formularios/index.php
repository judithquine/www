<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario en PHP y HTML</title>
</head>
<body>
  <h1>Formulario</h1>
  <form action="" method=POST  enctype="multipart/form-data">
    <label for="nombre">Nombre: </label> 
    <p><input type="text" name="nombre" /></p>

    <label for="apellido">Apellido: </label>
    <p><input type="text" name="apellido"/></p>

    <label for="boton">Boton: </label>
    <p><input type="button" name="boton" value="Cliclame"/></p>


    <input type="submit" value="Enviar" />
  </form>
</body>
</html>

//autofocus="autofocus"
//disable = "disable"
//maxlength = "5"
//min ="5"
//pattern = "[A-Z ]+"
//required = "required"
//placeholder = "mete tu apellido"
//value = "mete tu apellido"
