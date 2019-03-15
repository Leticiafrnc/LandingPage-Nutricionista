$(function () {
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,boby').animate({'scrollTop':offSetTop});
		return false;
	})
})