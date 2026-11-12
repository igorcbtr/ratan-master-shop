const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');
const header = document.getElementById('header');

const setMenuState = (isOpen) => {
    burger.classList.toggle('active', isOpen);
    navList.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
};

burger.addEventListener('click', () => setMenuState(!navList.classList.contains('active')));
navList.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuState(false)));
document.addEventListener('click', (event) => {
    if (!burger.contains(event.target) && !navList.contains(event.target)) setMenuState(false);
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        setMenuState(false);
        burger.focus();
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
    });
});

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

const revealTargets = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealTargets.forEach((element) => revealObserver.observe(element));
} else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
}

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const fields = ['name', 'phone', 'message'].map((id) => document.getElementById(id));

const validate = (field) => {
    const value = field.value.trim();
    let message = '';
    if (!value) message = 'Заполните это поле.';
    if (field.id === 'name' && value && value.length < 2) message = 'Введите минимум 2 символа.';
    if (field.id === 'phone' && value && value.replace(/\D/g, '').length < 7) message = 'Введите корректный контакт.';
    if (field.id === 'message' && value && value.length < 8) message = 'Расскажите немного подробнее.';
    const error = document.getElementById(`${field.id}-error`);
    field.classList.toggle('is-invalid', Boolean(message));
    field.setAttribute('aria-invalid', String(Boolean(message)));
    error.textContent = message;
    return !message;
};

fields.forEach((field) => {
    field.addEventListener('blur', () => validate(field));
    field.addEventListener('input', () => {
        if (field.classList.contains('is-invalid')) validate(field);
    });
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const valid = fields.map(validate).every(Boolean);
    if (!valid) {
        status.textContent = 'Проверьте выделенные поля.';
        fields.find((field) => field.classList.contains('is-invalid'))?.focus();
        return;
    }

    const submitButton = form.querySelector('button[type="submit"]');
    const payload = new FormData(form);
    payload.append('_subject', 'Новая заявка с сайта Ratan Master');
    payload.append('_captcha', 'false');
    submitButton.disabled = true;
    status.textContent = 'Отправляем сообщение…';

    try {
        const response = await fetch(form.dataset.endpoint, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: payload,
        });
        if (!response.ok) throw new Error(`FormSubmit returned ${response.status}`);
        const result = await response.json();
        if (result.success === false) throw new Error('FormSubmit rejected the request');
        status.textContent = 'Спасибо — сообщение отправлено. Мы скоро свяжемся с вами.';
        form.reset();
        fields.forEach((field) => validate(field));
    } catch (error) {
        console.error('Contact form submission failed:', error);
        status.textContent = 'Не удалось отправить сообщение. Попробуйте ещё раз или позвоните нам.';
    } finally {
        submitButton.disabled = false;
    }
});
