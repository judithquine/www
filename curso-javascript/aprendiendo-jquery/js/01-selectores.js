$(document).ready(function(){
	//console.log("Estamos listos!");

	//selector de ID
	$("#rojo").css("background","red")
			  .css("color", "white");

	$("#amarillo").css("background","yellow")
				  .css("color", "green");

	$("#verde").css("background","green")
			   .css("color", "white");


	//selectores de clases
	var mi_clase = $('.zebra');
	mi_clase.css("border", "5px dashed black");

	$('.sin_borde').click(function(){
		console.log("Click dado !!");
		$(this).addClass('zebra');
	});


	//console.log(mi_clase[0]);

});