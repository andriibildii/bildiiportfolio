const home = document.querySelector(".home");
const image = document.querySelectorAll(".image");

home.onmousemove = function (e) {
	let X = e.pageX;
	let Y = e.pageY;

	image[0].style.transform =
		"translate(" + (X / 100) * 7 + "px, " + (Y / 100) * 7 + "px)";
};
