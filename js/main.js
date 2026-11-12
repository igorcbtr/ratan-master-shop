const burger = document.getElementById("burger");
const navList = document.getElementById("nav-list");
const header = document.getElementById("header");

const setMenuState = (isOpen) => {
  burger.classList.toggle("active", isOpen);
  navList.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  burger.setAttribute("aria-expanded", String(isOpen));
  burger.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
};

burger.addEventListener("click", () =>
  setMenuState(!navList.classList.contains("active")),
);
navList
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenuState(false)));
document.addEventListener("click", (event) => {
  if (!burger.contains(event.target) && !navList.contains(event.target))
    setMenuState(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
    burger.focus();
  }
});
window.addEventListener(
  "resize",
  () => {
    if (window.innerWidth > 760 && navList.classList.contains("active"))
      setMenuState(false);
  },
  { passive: true },
);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
});

const updateHeader = () =>
  header.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealTargets = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}
