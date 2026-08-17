// Xflow — mobile navigation + contact form handling

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');
  var body = document.body;

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      body.classList.toggle('nav-open', isOpen);
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('nav-open');
      });
    });
  }

  // Contact form: builds a real mailto: link from the entered fields so the
  // enquiry actually reaches info@xflow.co.za via the visitor's own mail client.
  var form = document.querySelector('#enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var route = form.querySelector('#route').value;
      var subject = form.querySelector('#subject').value.trim();
      var message = form.querySelector('#message').value.trim();

      var mailSubject = '[' + route + '] ' + (subject || 'Website enquiry');
      var bodyLines = [
        'Name: ' + name,
        'Email: ' + email,
        'Enquiry route: ' + route,
        '',
        message || '(no message provided)'
      ];

      var mailto = 'mailto:info@xflow.co.za'
        + '?subject=' + encodeURIComponent(mailSubject)
        + '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailto;
    });
  }
});
