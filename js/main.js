$(document).ready(function () {
	$("#first-button").click(function () {
		$("#first-block").toggleClass("first-block-img");
	});

	$("#second-button").click(function () {
		$("#second-block").toggleClass("second-block-img");
	});

	$("#change-button").click(function () {
		$("#change-block").toggleClass("second-block-img");
	});
});
