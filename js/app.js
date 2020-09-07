document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

//TODO:
// no global variables
// check for let and const

//helper function for inViewport

function inViewport (elem) {
	let distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

// get every h1
const sectionH = document.getElementsByTagName('h1');

// make an empty array
const sectionArray = [];

// loop trough the array of h1s
for (h = 0; h < sectionH.length; h++) {
    // get the text of h1
    let link = sectionH[h].innerText;
    //push the text of h1 back into the former empty array sectionArray
    sectionArray.push(link);
}

// define nav
const nav = document.querySelector('.nav__menu');

// create a navigation from the h1s
function createNav(sectionArray) {
    // loop through the now full sectionArray eg. section one, section two, ...
    for (i = 0; i < sectionArray.length; i++) {
        //create li
        const li = document.createElement('li');
        // create a
        const a = document.createElement('a');
        // add class
        a.className = 'header__nav-link';

        // add id
        let newId = (sectionArray[i]);
        // newId = newId.replace(/ /, "__link--");
        newId = newId.replace(/\s+/g, '');
        a.id = newId;

        //add href
        let newHref = (sectionArray[i]);
        newHref = newHref.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');
        newHref = newHref.toLowerCase();
        a.href = '#'+newHref;

        const newText = document.createTextNode(sectionArray[i]);

        //add newText to a
        a.appendChild(newText);
        //add a to li
        li.appendChild(a);
        //add li to nav
        nav.appendChild(li);
    }
    return nav;

}

nav.insertAdjacentElement('afterend', createNav(sectionArray));

// scroll to Section
function scrollToSection() {
    let links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (evt) {
            evt.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: "center",
                inline: "nearest"
            });
        });
    });
}

scrollToSection();

// TODO:
// Add functionality to distinguish the section in view. While navigating through the page, the section that is active in the viewport/closest to the top should be distinguished from the other sections.
// Are you listening for an event for sections to become active?
// How are you going to test which section should be highlighted?
// How can we use classList methods to change the CSS being displayed? What about removing that CSS?
// Check the HTML and CSS files to ensure that what you chose is updated in the other locations.

let currentSectionId;

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".header__nav-link");


// const linkHref = links.getAttribute("href");
// const newHref = linkHref.replace(/#/, "");
console.log(links);
let link;

window.addEventListener('scroll', function (event) {
    sections.forEach((section)=>{
        if (inViewport(section)) {
            section.classList.add("super");
            currentSectionId = section.id;
            console.log(currentSectionId);
            links.forEach((link)=>{
                if (link.getAttribute('href') == `#${currentSectionId}`) {
                    link.classList.add("active-nav");
                } else {
                    link.classList.remove("active-nav");
                }
            });
        } else {
            section.classList.remove("super");
        }
    }, false);
});

// get headlines
const headlines = document.querySelectorAll('h1');
const headlinesId = [];

// function headline(){
headlines.forEach((headline, index) => {
    headline = headline.innerText.toLowerCase();
    headline = headline.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');
    headlinesId.push(headline);
});

const sectionN = document.getElementsByTagName('section');
const sectionA = Array.from(sectionN);

for (i = 0; i < sectionA.length; i++) {
    sectionA[i].id =`${headlinesId[i]}`;
}