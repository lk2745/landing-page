/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// variable for storing the Element of the navigation bar

const navbarList = document.getElementById('navbar__list');

// variable for storing all the sections on the page
const allSections = document.querySelectorAll('section');




/**
 * End Global Variables
 * 
 * 
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNavMenu() {
    // variable for navigation menu elements unordered list
    let navElement = '';

    // loop through each of the sections
    allSections.forEach(section => {
        const sectionTag = section.id;
        const sectionName = section.dataset.nav;
        
        // Set the class that is in style.css and reference each section with ability to click to each section
        navElement += `<li><a class="menu__link" href="#${sectionTag}">${sectionName}</a></li>`
    });
    // variable to set element navbar__list HTML 
    navbarList.innerHTML = navElement;

};



// Add class 'your-active-class' to a section when near top of viewport
function makeActive() {
    allSections.forEach(section => {
        if (section.getBoundingClientRect().top < 150 && section.getBoundingClientRect().bottom >=150){
            // Set sections as active
            section.classList.add('your-active-class');
            section.style.cssText = "background-color: gray;";
        }
        else {
            section.classList.remove('your-active-class');
            section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
        
            
        }
    });
};


function scrollToSection() {
    // variable for storing navigation links
    const navLinks = document.querySelectorAll('a.menu__link');
    for (let i = 0; i <= allSections.length; i++) {
        const sectionTop = allSections[i].getBoundingClientRect().top + window.pageYOffset;
        navLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({ 
            sectionTop, 
            behavior: 'smooth'
            })
        });    
    }
};





// Build menu 

buildNavMenu();


scrollToSection();


//Add a listener for scrolling through sections, to run the makeActive Funtion
document.addEventListener('scroll', makeActive);



/**
 * End Main Functions


 * Begin Events
 * 
*/





