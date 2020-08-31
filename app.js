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

// toggle mobile hamburger to display nested links
const mobile_hamburgers = document.querySelectorAll('.mobile__hamburger');

mobile_hamburgers.forEach((mobile_hamburger) => {
	mobile_hamburger.addEventListener('click', (e) => {
		const open_nav = e.target.parentElement; // returns the mobile__humbuger div
		open_nav.classList.toggle('open');
		const nested_list = e.target.parentElement.nextElementSibling; // return the inner__div ul
		// console.log(nested_list);
		nested_list.classList.toggle('open');
	});
});

//service worker for caching, check if the browser support serviceworker the register the service worker.

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then((res) => console.log('Service Registered', res.scope))
		.catch((err) => console.log('unable to register serviceworker', err));
}

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
