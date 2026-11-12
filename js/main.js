// Mobile menu toggle
const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('active');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navList.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !navList.contains(e.target)) {
        burger.classList.remove('active');
        navList.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Header shadow on scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Contact form handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    console.log('Form submitted:', data);

    alert('Thank you! Your application has been sent. We will contact you shortly.');
    contactForm.reset();
});