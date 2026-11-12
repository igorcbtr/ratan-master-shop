// Keep navigation behavior in one place so keyboard and pointer users share the same state.
const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('header');

const setMenuState = (isOpen) => {
    burger.classList.toggle('active', isOpen);
    navList.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
};

burger.addEventListener('click', () => {
    setMenuState(!navList.classList.contains('active'));
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('click', (event) => {
    if (!burger.contains(event.target) && !navList.contains(event.target)) {
        setMenuState(false);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuState(false);
        burger.focus();
    }
});

// Avoid trying to query an empty selector for the footer/home links.
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (!targetElement) {
            return;
        }

        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
    });
});

const updateHeaderShadow = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 50);
};

window.addEventListener('scroll', updateHeaderShadow, { passive: true });
updateHeaderShadow();

// Fade sections in as they enter the viewport, while respecting reduced-motion preferences.
const fadeTargets = document.querySelectorAll('.hero-content, .hero-image, .section-header, .catalog-card, .testimonial-card, .contact-wrapper');
fadeTargets.forEach((element) => element.classList.add('fade-in'));

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                currentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    fadeTargets.forEach((element) => observer.observe(element));
} else {
    fadeTargets.forEach((element) => element.classList.add('is-visible'));
}

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const fields = ['name', 'phone', 'message'].map((id) => document.getElementById(id));

const setFieldError = (field, message) => {
    const error = document.getElementById(`${field.id}-error`);
    field.classList.toggle('is-invalid', Boolean(message));
    field.setAttribute('aria-invalid', String(Boolean(message)));
    error.textContent = message;
};

const validateField = (field) => {
    const value = field.value.trim();
    let message = '';

    if (!value) {
        message = 'This field is required.';
    } else if (field.id === 'name' && value.length < 2) {
        message = 'Please enter at least 2 characters.';
    } else if (field.id === 'phone' && !/[0-9]{7,}/.test(value.replace(/\D/g, ''))) {
        message = 'Please enter a valid phone number.';
    } else if (field.id === 'message' && value.length < 10) {
        message = 'Please add a little more detail.';
    }

    setFieldError(field, message);
    return !message;
};

fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
        if (field.classList.contains('is-invalid')) {
            validateField(field);
        }
    });
});

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = '';

    const isValid = fields.map(validateField).every(Boolean);
    if (!isValid) {
        formStatus.textContent = 'Please correct the highlighted fields.';
        fields.find((field) => field.classList.contains('is-invalid'))?.focus();
        return;
    }

    formStatus.textContent = 'Thank you! Your application has been sent. We will contact you shortly.';
    contactForm.reset();
    fields.forEach((field) => setFieldError(field, ''));
});
