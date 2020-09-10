document.addEventListener("DOMContentLoaded", function(event) {
});

//helper function for inViewport
function inViewport (elem) {
	let distance = elem.getBoundingClientRect();
	return (
		distance.top >= -30 &&
		distance.left >= -30 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

// get every h1
const headlines = document.querySelectorAll('h1');

// make an empty array
const sectionArray = [];

function getH1(){
    // loop trough the array of h1s
    for (h = 0; h < headlines.length; h++) {
        // get the text of h1
        let link = headlines[h].innerText;
        //push the text of h1 back into the former empty array sectionArray
        sectionArray.push(link);
    }
}

/* helperfunction: turn headline into id and assign to section */
function headlineToSectionId(){
    // get headlinesId
    const headlinesId = [];

    // loop through headlines, turn into lowercase, replace characters and push back into array
    headlines.forEach((headline) => {
        headline = headline.innerText.toLowerCase();
        headline = headline.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');
        headlinesId.push(headline);
    });

    const sectionN = document.getElementsByTagName('section');
    const sectionA = Array.from(sectionN);

    // assign id to corresponding section
    for (i = 0; i < sectionA.length; i++) {
        sectionA[i].id =`${headlinesId[i]}`;
    }
}

/* build dynamic navigation */
// define nav
const nav = document.querySelector('.nav__menu');
getH1();

// create a navigation from the h1s
function createNav(sectionArray) {
    // loop through the now full sectionArray eg. section one, section two, ...
    for (i = 0; i < sectionArray.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        let newId = (sectionArray[i]);
        let newHref = (sectionArray[i]);
        const newText = document.createTextNode(sectionArray[i]);

        // add class
        a.className = 'header__nav-link';

        // add id
        newId = newId.replace(/\s+/g, '');
        a.id = newId;

        //add href
        newHref = newHref.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');
        newHref = newHref.toLowerCase();
        a.href = '#'+newHref;

        //add newText to a
        a.appendChild(newText);
        //add a to li
        li.appendChild(a);
        //add li to nav
        nav.appendChild(li);
    }
    return nav;
}

// scroll to Section
function scrollToSection() {
    let links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (evt) {
            evt.preventDefault();

            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: "center",
                inline: "nearest"
            });
        });
    });
}

/* highlight section in viewport */
function addStyleToSection() {
    let currentSectionId;

    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".header__nav-link");

    //on scroll if section in viewport, add class to section and corresponding nav element
    window.addEventListener('scroll', function () {
        sections.forEach((section)=>{
            if (inViewport(section)) {
                section.classList.add("super");
                currentSectionId = section.id;
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
}

headlineToSectionId();

nav.insertAdjacentElement('afterend', createNav(sectionArray));

scrollToSection();

addStyleToSection();