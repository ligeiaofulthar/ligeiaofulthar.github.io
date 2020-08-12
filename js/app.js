document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});
// choose navigation
// create li
// create a
// create insert variables for href ?
// loop over section ids and insert into href
// if new section is added insert to nav
// check for reflow and repaint
// wrap inside function for nav
// call function

// const nav = document.querySelector('.nav__menu');
// const li = document.createElement('li');
// const a = document.createElement('a');

// a.className = 'header__nav-link';
// <a class="header__nav-link" id="section__link--one" href="#section--one" aria-current="page">about</a>
// const aClass = a.outerHTML;
// console.log(aClass);

// a.id = "section__link--one";
// const aId = a.outerHTML;
// console.log(aId);

// a.href = "#section--one";
// const aHref = a.outerHTML;
// console.log(aHref);

// const sectionName = document.getElementsByTagName('section');
// const sectionId = [...sectionName];
// console.log(sectionId);

// var hui = "textContent" in document.body ? "textContent" : "innerText";
// var text = document.getElementsByTagName("h1")[0][hui];
// console.log(text);

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

        //TODO: autogenerate id
        // add id
        a.id = "section__link--one";

        //add href
        let newHref = (sectionArray[i]);
        newHref = newHref.replace(/ /, "--");
        a.href = '#'+newHref;
        console.log(newHref);

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

//TODO test for speed
//TODO It should be clear which section is being viewed while scrolling through the page.

const sections = document.getElementsByTagName('section');
const links = document.querySelectorAll('.header__nav-link');

window.addEventListener('scroll', function(highlight) {
    console.log("hello");
    // while(sections.length < 0) {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        document.getElementByName(".header__nav-link").className = "active";
} else {
        document.getElementByName(".header__nav-link").className = "";
}

});

function scrollSmooth() {
    const hash = document.querySelector('.header__nav-link');
    hash.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });

  }

//   if (sections > 10 ) {
//     links.forEach(link =>
//         link.classList.add("active"));
// } else {
//     links.forEach(link =>
//         link.classList.remove("active"));
// }


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




// function getH1() {

//     sectionH1.forEach(function (item, index) {
//         const textH1 = singleH1[index].textContent;
//         console.log(textH1);
//         return textH1;
//     });

// };
// getH1();

// const singleH1 = arrayH1.textContent;
// // const navName = document.querySelector("section > div > h1");
// console.log(singleH1);


//returns array of section ids e.g. [0] <section id="section--one">…</section>
// const sectionId = document.getElementsByTagName('section')[0].id;

// const sectionId = ["<section class='section--one'", "<section class='section--two'", "<section class='section--three'"];


// forEach loop gets id from every section and splits it

// function getId() {

//     sectionId.forEach(function (item, index) {
//         const seperateId = sectionId[index].id;
//         console.log('old'+seperateId);
//         return seperateId;
//     });

// };
// getId();

// sectionId.forEach(function (li, index) {
//     const hello = getId();
// console.log(hello);
// return hello;
// });


// var i;
// for (i = 0; i < 1; i++) {
    // sectionId[i].style.color = "red";


        // for (var j = 0; j < 3; j++) {
        //     var hui = "textContent" in document.body ? "textContent" : "innerText";
        //     var text = document.getElementsByTagName("h1")[j][hui];
        //     // var x = document.getElementsByTagName("h1")[j].textContent;
        //     // document.getElementsByTagName("a").innerHTML = x;
        //     // console.log(a);
        //     // console.log(text);
        //     nav.insertAdjacentElement('afterbegin', li);
        //     li.insertAdjacentElement('afterbegin', a);
        //     a.insertAdjacentText('beforeend', text);

        // }

        // .forEach(function (item, index) {
        //     getId()
        //     const seperateId = sectionId[index].id;
        //     console.log(seperateId);
        //     return seperateId;
        // });

//   }

// const section = document.getElementById(id);

// for (let i of arr) {

// }


// let navLinkClass = document.getElementsByClassName('.header__nav-link');
// let hrefSection = document.getElementById('section__link--one').href;
// let sectionId = document.getElementById('section__link--one').id;

// hrefSection.innerHTML = `href="${hrefSection}"`;
// console.log(sectionId);

// '<a class='+navLinkClass+' id='+idName+' href='+hrefSection



// const navMenu = document.querySelector('.nav__menu');
// const navLi = document.createElement('li');

// navLi.textContent = 'hello';
// navMenu.insertAdjacentElement('afterbegin', navLi);

// const mainHeading = document.querySelector('#main-heading');
// const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

// mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);

// const myPara = document.createElement('p');

// myPara.textContent = 'I am the text for the paragraph!';
// document.body.appendChild(myPara);


// let count = 1

// function generateParagraphs() {
//     const fragment = document.createDocumentFragment();

//     for (let i = 1; i <= 500; i++) {
//         const newElement = document.createElement('p');
//         newElement.textContent = 'This is paragraph number ' + count;
//         count = count + 1;

//         fragment.appendChild(newElement);
//     }

//     document.body.appendChild(fragment);

//     if (count < 20000) {
//         setTimeout(generateParagraphs, 0);
//     }
// }

// generateParagraphs();

