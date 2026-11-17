(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");
  const form = document.getElementById("quote-form");
  const formNote = document.getElementById("form-note");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  const revealTargets = document.querySelectorAll(".service-card, .why-card, .area-cta-card, .quote-form");
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const subject = encodeURIComponent("Quote Request — " + form.service.options[form.service.selectedIndex].text);
      const body = encodeURIComponent(
        "Name: " + form.name.value.trim() + "\n" +
        "Phone: " + form.phone.value.trim() + "\n" +
        "Email: " + (form.email.value.trim() || "not provided") + "\n" +
        "Service: " + form.service.options[form.service.selectedIndex].text + "\n" +
        "Address: " + (form.address.value.trim() || "not provided") + "\n\n" +
        form.message.value.trim()
      );
      window.location.href = "mailto:info@tonysplumbing.com?subject=" + subject + "&body=" + body;
      if (formNote) formNote.hidden = false;
    });
  }
})();
