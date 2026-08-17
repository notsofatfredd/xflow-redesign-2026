// XFLOW — ONYX
// Mobile nav + contact form behaviour. No frameworks.

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".hamburger");
  var mobileNav = document.querySelector(".mobile-nav");
  var closeBtn = document.querySelector(".mobile-nav-close");

  function openNav() {
    mobileNav.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  }
  function closeNav() {
    mobileNav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      var expanded = burger.getAttribute("aria-expanded") === "true";
      if (expanded) { closeNav(); } else { openNav(); }
    });
  }
  if (closeBtn) { closeBtn.addEventListener("click", closeNav); }
  document.querySelectorAll(".mobile-nav a").forEach(function (a) {
    a.addEventListener("click", closeNav);
  });

  // Contact form: builds a real mailto: with the entered data, since this
  // is a static site with no backend to receive a POST. This genuinely
  // opens the visitor's mail client with the message pre-filled rather
  // than pretending to submit.
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#f-name").value.trim();
      var email = form.querySelector("#f-email").value.trim();
      var route = form.querySelector("#f-route").value;
      var subjectField = form.querySelector("#f-subject").value.trim();
      var message = form.querySelector("#f-message").value.trim();

      var routeLabel = route === "investor" ? "Investor & Partnership" : "General & Project Enquiry";
      var subject = "[" + routeLabel + "] " + (subjectField || "Enquiry from " + name);
      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        "Route: " + routeLabel,
        "",
        message
      ];
      var mailto = "mailto:info@xflow.co.za"
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      var success = document.getElementById("form-success");
      if (success) { success.classList.add("show"); }
    });
  }
});
