(function () {
  var saved = localStorage.getItem('concept');
  if (saved) document.documentElement.setAttribute('data-concept', saved);

  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.switcher-tabs button');
    var current = document.documentElement.getAttribute('data-concept') || 'flow';

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
  });
})();
