// Shared interactions for all pages: mobile navigation, dynamic year, filters, abstracts, and contact form feedback.
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const filterButtons = document.querySelectorAll(".filter-button");
  const publicationCards = document.querySelectorAll(".publication-card[data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      publicationCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
        card.style.display = shouldShow ? "" : "none";
      });
    });
  });

  const abstractButtons = document.querySelectorAll(".abstract-toggle");
  abstractButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const abstract = button.closest(".publication-card").querySelector(".abstract");
      const isHidden = abstract.hasAttribute("hidden");

      if (isHidden) {
        abstract.removeAttribute("hidden");
        button.textContent = "Hide Abstract";
      } else {
        abstract.setAttribute("hidden", "");
        button.textContent = "Abstract";
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = contactForm.querySelector(".form-status");
      status.textContent = "Thank you. This demo form has no backend yet, so no message was sent.";
      contactForm.reset();
    });
  }
});
