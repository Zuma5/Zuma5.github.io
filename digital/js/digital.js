$(document).ready(function() {
	$(".click").click(function() {
		$(".hide").fadeToggle(600);
		$(".hide").css("background", "rgba(0,0,0, .3)");
		$(".hide").css("color", "#ececec");
	});
});