const introductionSwiper = new Swiper(".introduction .swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoplay: {
		delay: 2000,
	},

	// If we need pagination
	pagination: {
		el: ".introduction .swiper-pagination",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".introduction .swiper-button-next",
		prevEl: ".introduction .swiper-button-prev",
	},
});
const collectionSwiper = new Swiper(".collection .swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
	// If we need pagination
	autoplay: {
		delay: 1500,
	},

	// If we need pagination
	// pagination: {
	// 	el: ".swiper-pagination",
	// 	clickable: true,
	// },
	// // Navigation arrows
	// navigation: {
	// 	nextEl: ".swiper-button-next",
	// 	prevEl: ".swiper-button-prev",
	// },
});
