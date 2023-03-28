(() => {
	const menuBtnRef = document.querySelector("[data-menu-button]");
	const mobileMenuRef = document.querySelector("[data-menu]");
	const body = document.querySelector("[data-body]");
	const headerInts = document.querySelector("[data-header-ints]");

	menuBtnRef.addEventListener("click", () => {
		const expanded =
			menuBtnRef.getAttribute("aria-expanded") === "true" || false;

		menuBtnRef.classList.toggle("is-open");
		menuBtnRef.setAttribute("aria-expanded", !expanded);

		mobileMenuRef.classList.toggle("is-open");
		headerInts.classList.toggle("is-open");
		body.classList.toggle("lock");
	});

})();

$('.anchor').on('click', function () {
	$('.menu__btn').removeClass('is-open');
	$('.menu__list').removeClass('is-open');
	$('.header__ints').removeClass('is-open');
	$(body).removeClass('lock');
});

window.onscroll = function showHeader() {
	const header = document.querySelector('.header-for-main')

	if (window.scrollY > 100) {
		header.classList.add('fixed')

	} else {
		header.classList.remove('fixed')
	}
}

$(document).ready(function () {

	$('.popup-youtube').magnificPopup({
		// disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			swipe: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title');
			}
		}
	});



	$('.pro__popup-gallery').slick({
		dots: true,
		arrows: true
	});


});