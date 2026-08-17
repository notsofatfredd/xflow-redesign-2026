// XFLOW — DELTA site scripts
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");
  var closeBtn = document.querySelector(".mobile-nav .close-btn");

  function openNav() {
    mobileNav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-locked");
  }
  function closeNav() {
    mobileNav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-locked");
  }

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.contains("is-open");
      if (isOpen) { closeNav(); } else { openNav(); }
    });
    if (closeBtn) closeBtn.addEventListener("click", closeNav);

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
        closeNav();
      }
    });
  }

  // Contact form: route selector updates the mailto subject line for real
  var routeSelect = document.getElementById("enquiry-route");
  var form = document.getElementById("contact-form");
  if (routeSelect && form) {
    var subjectField = form.querySelector('input[name="subject"]');
    var updateSubject = function () {
      var routeLabel = routeSelect.options[routeSelect.selectedIndex].text;
      if (subjectField) subjectField.value = "Xflow enquiry — " + routeLabel;
    };
    routeSelect.addEventListener("change", updateSubject);
    updateSubject();
  }
})();
