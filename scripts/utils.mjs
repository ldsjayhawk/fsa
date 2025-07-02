// responsive navigation
const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamburger.classList.toggle('open');
});


// footer info -- copyright and last updated
export function getFooterInfo() {
    const currentyear = new Date().getFullYear();
    const date = new Date(document.lastModified).toLocaleDateString()
    
    document.getElementById("footer-info").innerHTML = `©️ ${currentyear} Cris Altman  Updated: ${date}`;
}

getFooterInfo();