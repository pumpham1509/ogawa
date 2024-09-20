$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

header = $("#header");
headerToggle = $("#nav-bar-toggle");
headerList = $("#nav-bar-list");
popupPromotion = $("#popup-promotion");
popupToggle = $("#popup-promotion-toggle");

var a;
window.addEventListener("load", (event) => {
	a = setInterval(showPop, 1500);
});
function showPop() {
	popupPromotion.style.display = "block";
	popupPromotion.style.opacity = "1";
}
// window.addEventListener("resize", (event) => {
// 	console.log(event);
// 	if (event.screen.availWidth > 1200) {
// 		overflow.style.right = "-100%";
// 	}
// });
header.addEventListener("click", function () {
	if (!header.classList.contains("active")) {
		header.classList.add("active");
		overflow.style.right = "0%";
	} else {
		header.classList.remove("active");
		overflow.style.right = "-100%";
	}
});

overflow.addEventListener("click", function () {
	overflow.style.right = "-100%";
	header.classList.remove("active");
});

popupToggle.addEventListener("click", function () {
	popupPromotion.style.display = "none";
	popupPromotion.style.opacity = "0";
	clearInterval(a);
});

popupPromotion.addEventListener("click", function () {
	popupPromotion.style.display = "none";
	popupPromotion.style.opacity = "0";
});
