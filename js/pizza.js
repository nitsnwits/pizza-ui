$(document).ready(function() {
	$('#pizza-charts').hide();

	$('#mushroom').slider().on('slideStop', function() {
		mushroom = $('#mushroom').slider('getValue');
		sessionStorage.setItem("mushroom", mushroom);
	});

	$('#onion').slider().on('slideStop', function() {
		onion = $('#onion').slider('getValue');
		sessionStorage.setItem("onion", onion);
	});

	$('#olive').slider().on('slideStop', function() {
		olive = $('#olive').slider('getValue');
		sessionStorage.setItem("olive", olive);
	});

	$('#pepper').slider().on('slideStop', function() {
		pepper = $('#pepper').slider('getValue');
		sessionStorage.setItem("pepper", pepper);
	});

	$('#tomato').slider().on('slideStop', function() {
		tomato = $('#tomato').slider('getValue');
		sessionStorage.setItem("tomato", tomato);
	});

	$('#show-button').on('click', function(){
		window.location.href = "./Display.html";
	});

});