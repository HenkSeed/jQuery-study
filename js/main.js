$(document).ready(function () {
	$("#first-button").click(function () {
		$("#first-block").toggleClass("first-block-img");
	});

	$("#second-button").click(function () {
		$("#second-block").toggleClass("second-block-img");
	});

	$("#change-button").click(function () {
		alert("Что ты наделал !!!");
		$("#first-block").toggleClass("first-block-img second-block-img");
		$("#second-block").toggleClass("first-block-img second-block-img");
	});
});
