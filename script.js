const navToggle = document.querySelector("[data-nav-toggle]");
const navGroup = document.querySelector("[data-nav-group]");

if (navToggle && navGroup) {
  navToggle.addEventListener("click", () => {
    const isOpen = navGroup.classList.toggle("is-open");
    navGroup.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navGroup.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navGroup.classList.remove("is-open");
      navGroup.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("[data-nav-link]").forEach((link) => {
  const href = link.getAttribute("href");
  const isHome = currentPage === "" || currentPage === "index.html";

  if ((isHome && href === "index.html") || href === currentPage) {
    link.classList.add("is-active");
  }
});

const revealElements = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window && revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
    },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
    element.classList.add("visible");
  });
}

const yearNode = document.querySelector("[data-year]");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    formStatus.textContent =
      "Thanks. This demo form is ready to connect to your preferred inbox or CRM before launch.";
  });
}
