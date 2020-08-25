const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const close_nav = document.querySelector('.close__nav');
const overlay = document.querySelector('.main__overlay');
const links = document.querySelectorAll('.nav__links');

hamburger.addEventListener('click', toggle_mobile);
close_nav.addEventListener('click', toggle_mobile);
overlay.addEventListener('click', toggle_mobile);

function toggle_mobile() {
	body.classList.toggle('mobile-active');
}

links.forEach((link) => {
	link.addEventListener('click', () => {
		if (body.classList.contains('mobile-active')) {
			body.classList.remove('mobile-active');
		}
	});
});

// glide.js for autoplay desktop
let glide = new Glide('.desktop__glide', {
	autoplay: 5000,
	hoverpause: false,
	dragThreshold: false
});
glide.mount();

let glide2 = new Glide('.mobile__glide', {
	autoplay: 5000,
	hoverpause: false,
	dragThreshold: false
});
glide2.mount();
