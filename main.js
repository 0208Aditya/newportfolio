// Typing Animation
var typed = new Typed(".typing", {
    strings: ["HTML EXPERT", "WEB DEVELOPER", "GRAPHIC DESIGNER"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Aside
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll(''); // Replace with the specific selector

// SCROLL SECTIONS ACTIVE LINK 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// SCROLL SECTIONS ACTIVE LINK 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal 
const sr = ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });
