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

const navbar = document.getElementById('navbar__list'),

      sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Check if the section in the viewport

const getActiveSection = () => {

    let sectionNum = sections[0];

    let rectValue = 1000000;

    for ( let section of sections ) {

        let rect = section.getBoundingClientRect();

        if ( rect.top > -300 & rect.top < rectValue ) {

            rectValue = rect.top;

            sectionNum = section;

      }

    }

    return sectionNum;

};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const createNavLists = () => {

  for ( let section of sections ) {

    let lists = document.createElement('li');

    lists.className = 'menu__link';

    lists.dataset.nav = section.id;

    lists.textContent = lists.dataset.nav;

    navbar.appendChild(lists);

  }

}

// Add class 'active' to section when near top of viewport


const addActiveClass = () => {

  window.addEventListener('scroll', function(){

    // Add Active Class To Section

    let _section = getActiveSection();

    _section.classList.add('active-section');

    for ( let section of sections ) {

      if ( section.id != _section.id && section.classList.contains('active-section') ) {

        section.classList.remove('active-section');

      }

    }

    // Add Active Class To Navigation Links

    const links = document.querySelectorAll('menu__link');

    let _link = document.querySelector(`li[data-nav='${_section.id}']`);

    _link.classList.add('active-link');

    for ( let link of links ) {

      if ( link.dataset.nav != _link.dataset.nav && link.classList.contains('active-link') ) {
        
        link.classList.remove('active-link');
      
      }

    }

  })

}


// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
