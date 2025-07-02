const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
});

const visits = document.querySelector(".visits");

let requests = Number(window.localStorage.getItem("requests-ls")) || 0;
requests++;

if (requests !== 1) {
	visits.textContent = `This is visit # ${requests}.`;
} else {
	visits.textContent = `Thank you for your first request!`;
}

localStorage.setItem("requests-ls", requests);