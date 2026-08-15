(function () {
  var saved = localStorage.getItem('concept');
  if (saved) document.documentElement.setAttribute('data-concept', saved);

  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.switcher-tabs button');
    var current = document.documentElement.getAttribute('data-concept') || 'onyx';

    buttons.forEach(function (btn) {
      var active = btn.dataset.set === current;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-checked', active ? 'true' : 'false');

      btn.addEventListener('click', function () {
        document.documentElement.setAttribute('data-concept', btn.dataset.set);
        localStorage.setItem('concept', btn.dataset.set);
        buttons.forEach(function (b) {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
      });
    });

    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', function () {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        menu.classList.toggle('open', !open);
        menu.hidden = open;
      });
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('open');
          menu.hidden = true;
        });
      });
    }
  });
})();
