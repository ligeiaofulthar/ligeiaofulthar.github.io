document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});


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


// if(coordinate >= 0 || otherCoordinate >= 0) {

// }


// no global variables
// check for let and const


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

// function scrollToSection() {
//     let navi = document.getElementsByTagName("LI");
//     let section = document.getElementsByTagName("SECTION");

//     for (let i = 0; i < navi.length; i++) {
//         navi[i].addEventListener("click", (ev)=>{
//             ev.preventDefault;

//             section[i].scrollIntoView({behavior: "smooth"});
//             console.log(section);
//         });
//     };
// }

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

// function activeSection() {
    // window.addEventListener('scroll', function (evt) {
    //     const sections = document.querySelectorAll('section');
    //     const navLinks = document.querySelectorAll('header__nav-link');

    //     sections.forEach((section)=>{

    //         if (inViewport(section)) {
    //             sections.forEach((section)=>{
    //                 section.classList.add("active");
    //             });
    //             console.log("section");
    //             this.section.classList.add("active");

    //             navLinks.forEach((navLink)=>{
    //                 navLink.classList.add("active");
    //         });
    //     }
    //             // add class active to current section
    // // add class active to current navigation item
    //         else {
    //             navLinks.forEach((navLink) => {

    //             // deactivate class section
    //             navLink.classList.remove("active");
    //             });

    //         }


    //     });
    // }, false);



// activeSection();

//TODO test for speed
//TODO It should be clear which section is being viewed while scrolling through the page.



// listen for scroll
// // add aria-current
// if section in viewport
// add class to nav Element

// loop through sections

// if (current link is in viewport) {
//     links.forEach(link =>
//         link.classList.add("active"));
// } else
// remove Active



// function getCurrentId(currentSection) {
//     currentSection.getAttribute("id");

// }
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
// addLink(section);
            // links.classList.add("active-nav");


        // getCurrentId();
        // linkActive();

    } else {
        section.classList.remove("super");

    }

}, false);
});


const headlines = document.querySelectorAll('h1');
const headlinesId = [];

// function headline(){
headlines.forEach((headline, index) => {
    headline = headline.innerText.toLowerCase();
    headline = headline.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/ +/g, '-');
    headlinesId.push(headline);


    console.log(headline); // the elment

  console.log(index); // the index in the NodeList
});
console.log(headlinesId); // the index in the NodeList
// }


// function addIdToSection() {

    //get h1 array
    // delete all whitespace
    // sections array
    //assign h1 as id to section


    // headlinesId.forEach((element)=>{

    // sections.forEach((section)=>{
    //         section.id = `#${element}`;

    //         });
    //     });

// addIdToSection();
// const nopla = document.getElementsByTagName("section");
// let section2 = nopla[1];

// section2.id = "hello";
// console.log(section2);

// nopla.forEach((helps)=>{
//     helps.id = "fuß";
// console.log(helps);
//     });

const sectionN = document.getElementsByTagName('section');
const sectionA = Array.from(sectionN);
console.log(headlinesId);
    // console.log(section);

    // headlinesId.forEach((element)=>{
        // sectionA.forEach((section) => {
            //  for (i = sectionA.length -1; i >= 0; i--) {

for (i = 0; i < sectionA.length; i++) {
    sectionA[i].id =`${headlinesId[i]}`;
    console.log(sectionA[i])
                // for (j = 0; j < headlinesId.length; j++) {
                // for (j = headlinesId.length -1; j >= 0; j--) {
    
                }
        
    // });
// });


// for (i = 0; i < sectionA.length; i++) {
//     sectionA[i].id =`${headlinesId[i]}`;
//     console.log(sectionA[i])