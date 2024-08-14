$(document).ready(function (){
    //Load
    // $("#datos").load("https://reqres.in/");

    //Get y Post
    $.get("https://reqres.in/api/users", {page: 2}, function (response){
        console.log(response);
    });
});