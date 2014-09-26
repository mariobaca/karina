// JavaScript Document
$(document).ready(function(){
	
	var pantallas = $('.pantallas').length;
	$("#totalpags").html(pantallas);
	
	var pantallactual = 1;
	$("#pantallactual").html(pantallactual);
	
	$('#pantalla1').hide();
	<!--$('#pantalla1').show('slide',{direction: 'right'},500);-->
	$('#pantalla1').delay(500).show('fade',500);
	
	$('#anterior').css('visibility','hidden');
	
	$('#siguiente').click(function() {
		window.scrollTo(0,0);
		$("#pantallactual").html(++pantallactual);
		$('.actual').removeClass('actual').hide()
			.next().show('slide',{direction: 'right'},500).addClass('actual');
		if ($('.actual').hasClass('ultima')) {
			$('#siguiente').css('visibility','hidden');
		}
		$('#anterior').css('visibility','visible');
	});
	
	$('#anterior').click(function() {
		window.scrollTo(0,0);
		$("#pantallactual").html(--pantallactual);
		$('.actual').removeClass('actual').hide()
			.prev().show('slide',{direction: 'left'},500).addClass('actual');
		if ($('.actual').hasClass('primera')) {
			$('#anterior').css('visibility','hidden');
		}
		$('#siguiente').css('visibility','visible');
	});
});