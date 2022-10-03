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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navList = document.getElementById("navbar__list");
const mainSections = document.getElementsByTagName("section");
const currentFragment = document.createDocumentFragment();
const toggleNavItemsButton = document.getElementById("toggle_nav_items");

const intersectionObserveOptions = {
    root : null,
    rootMargin : "0px",
    threshold:0.6,
};


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * @description intersectionObserveCallback is a callback function used to update active and not active sections and nav links. 
 * @param {HTMLCollection} entries - will be the sections in page.
 */
const intersectionObserveCallback = (entries) => {
    entries.forEach(element => {
        let link = document.querySelector(`a[href = "#${element.target.id}"]`);
        if(element.isIntersecting) {
            element.target.classList.add("your-active-class");
            link.classList.add("active-nav-link");
        } else {
            element.target.classList.remove("your-active-class");
            link.classList.remove("active-nav-link");
        }
    });
};


/**
 * @desc scrollToSection function is used as a callback function for click event on navigation menu,
 *  it take an event and access the target property to get the clicked element and get its href which includes the section id that we need to scroll to it
 * @param {Event} evt event that occurred on the element.
 */
function scrollToSection(evt) {
    evt.preventDefault();
    let sectionId = evt.target.getAttribute("href").split("#")[1];
    let currentSelectedSection =  document.getElementById(sectionId);
    // get the section that we need to scroll to it by its ID.
    currentSelectedSection.scrollIntoView({behavior:"smooth"});

    // 
    const observer = new IntersectionObserver(intersectionObserveCallback , intersectionObserveOptions);
    for(const section of mainSections) {
        observer.observe(section);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let sectionIndex = 0; sectionIndex < mainSections.length ;  sectionIndex++){
    // create a list item and anchors for each node
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");

    // get the section attribute to set it as a text for navigation item.
    const navItemText = mainSections[sectionIndex].getAttribute("data-nav");
    // get the id of the section to add it as a href to be able to scroll to it.
    const navItemId = mainSections[sectionIndex].getAttribute("id");

    // add css style to anchor, its text to be the navItemText and its id.
    navLink.classList.add("menu__link");
    navLink.textContent = navItemText;
    navLink.href = `#${navItemId}`;

    // add active class to first nav item
    if(sectionIndex === 0){
        navLink.classList.add("active-nav-link");
    }

    navItem.appendChild(navLink);
    currentFragment.appendChild(navItem);
}
navList.appendChild(currentFragment);
navList.addEventListener('click' , scrollToSection);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const scrollObserver = new IntersectionObserver(intersectionObserveCallback , intersectionObserveOptions)
window.addEventListener("scroll" , () => {
    for(const section of mainSections){
        scrollObserver.observe(section);
    }
});

// show and hide navigation menu items when click on burger menu.
toggleNavItemsButton.addEventListener("click" , () => {
    toggleNavItemsButton.classList.toggle("active-one");
    navList.classList.toggle("show-nav");
});

// Set sections as active


