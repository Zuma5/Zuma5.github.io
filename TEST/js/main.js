$(document).ready (() => {
	$('button').on('click' , () => {
		$('.first').toggle();
		$('.middle').fadeToggle();
		$('.last').slideToggle();
	});
});