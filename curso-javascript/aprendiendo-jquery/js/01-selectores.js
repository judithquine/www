$(document).ready(function(){
	//console.log("Estamos listos!");

	//selector de ID
	var rojo = $("#rojo");
	// console.log(rojo);


	$("#rojo").css("background","red")
			  .css("color", "white");

	// console.log(rojo);
	$("#amarillo").css("background","yellow")
				  .css("color", "green");

	$("#verde").css("background","green")
			   .css("color", "white");


	//selectores de clases
	var mi_clase = $('.zebra').css("padding", "5px");
	// mi_clase.css("border", "5px dashed black");
	// console.log(mi_clase[0]);
	// console.log(mi_clase.eq(1));

	$('.sin_borde').click(function(){
		console.log("Click dado !!");
		$(this).addClass('zebra');
	});
	//console.log(mi_clase[0]);

	// Selectore de etiqueta
	var parrafos = $('p').css("cursor", "pointer");

	parrafos.click(function (){
		var that = $(this);
		if(!that.hasClass('grande')){
			that.addClass('grande');
		}else{
			that.removeClass('grande');
		}
	});

	// Selectores de atributo
	$('[title="Google"]').css('background', '#ccc');
	$('[title="Facebook"]').css('background', 'blue');

	// Otros
	// $('p, a').addClass('margen-superior');

	// var busqueda = $("#caja").find('.resaltado');
	// var busqueda = $("#caja .resaltado");

	// var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="Google"]');
	var busqueda = $("#elemento2").parent().parent().find('.resaltado');
	console.log(busqueda);
});