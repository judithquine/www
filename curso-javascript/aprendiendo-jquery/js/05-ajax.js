$(document).ready(function (){
    //Load
    // $("#datos").load("https://reqres.in/");

    //Get y Post
    $.get("https://reqres.in/api/users", {page: 2}, function (response){
        // console.log(response);
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+ " "+ element.last_name+"</p>");
        });
    });

    // forma 1
    // var usuario = {
    //     name: "Víctor Robles",
    //     web: "victorrolesweb.es"
    // };
    //
    // $.post("https://reqres.in/api/users", usuario, function (response){
    //     console.log(response);
    // });

    //forma 2
    $("#formulario").submit(function (e){
       e.preventDefault();

       var usuario = {
           name: $('input[name="name"]').val(),
           web: $('input[name="web"]').val()
       };
       console.log(usuario);

       // $.post($(this).attr("action"), usuario, function (response){
       //     console.log(response);
       // }).done(function(){
       //     alert("Usuario añadido correctamente");
       //  });

       $.ajax({
           type: 'POST',
           // datatype: 'json',
           // contentType: 'application/json',
           url: $(this).attr("action"),
           data: usuario,
           beforeSend: function () {
               console.log("Enviando usuario...");
           },
           success: function (response){
               console.log(response);
           },
           error: function (){
               console.log("A ocurrido un error");
           },
           timeout: 2000
       });

       return false;
    });
});