(function () {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");
  const form = document.getElementById("contact-form");
  const formNote = document.getElementById("form-note");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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

  const revealTargets = document.querySelectorAll(".pillar, .service, .process-card, .contact-form, .location-card, .section-photo, .hero-visual, .edu-card, .article-card, .video-card, .sparq-card");
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  document.querySelectorAll(".video-frame[data-youtube-id]").forEach(function (frame) {
    const id = (frame.getAttribute("data-youtube-id") || "").trim();
    if (!id) return;
    frame.innerHTML =
      '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
      '" title="Educational video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const subject = encodeURIComponent("Appointment Request — " + form.name.value.trim());
      const body = encodeURIComponent(
        "Name: " + form.name.value.trim() + "\n" +
        "Phone: " + form.phone.value.trim() + "\n" +
        "Email: " + form.email.value.trim() + "\n" +
        "Preferred location: " + form.location.options[form.location.selectedIndex].text + "\n" +
        "Concern: " + form.concern.options[form.concern.selectedIndex].text + "\n\n" +
        (form.message.value.trim() || "(no additional notes)")
      );
      window.location.href = "mailto:drjonathonross@gmail.com?subject=" + subject + "&body=" + body;
      if (formNote) formNote.hidden = false;
    });
  }
})();
