/*==== Menu show vertically hidden ====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*==== MENU SHOW ====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', event => {
    navMenu.classList.add('show-menu')
  })
}

/*==== MENU HIDDEN ====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', event => {
    navMenu.classList.remove('show-menu');
  })
}

/*==== Remove menu in mobile screen ====*/

/*==== Accordion design upon skills ====*/

/*==== Qualifications Tab ====*/

/*==== Service Modal ====*/

/*==== Portfolio swiper ====*/

/*==== Testimonial ====*/

/*==== Scroll section active link ====*/

/*==== Change background header ====*/

/*==== Shoe scroll up button ====*/

/*==== Dark/Night Theme ====*/
