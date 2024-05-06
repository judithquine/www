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

      <label for="sexo">Sexo:  </label>
      <p>
          Hombre<input type="checkbox" name="sexo"  value="hombre"/></p>
          Mujer<input type="checkbox" name="sexo"  value="mujer" checked="checked"/>
      </p>

      <label for="color">Color: </label>
      <p><input type="color" name="color"/></p>

      <label for="fecha">Fecha: </label>
      <p><input type="date" name="fecha"/></p>

      <label for="correo">Email: </label>
      <p><input type="email" name="correo"/></p>

      <label for="archivo">Archivo: </label>
      <p><input type="text" name="apellido"/></p>

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
