(function () {
  var saved = localStorage.getItem('concept');
  if (saved) document.documentElement.setAttribute('data-concept', saved);

  // Real DOM reordering per concept - not CSS `order` (which only changes
  // paint order, not source order, so it wouldn't survive a DOM audit or
  // help screen-reader/tab order). Each page defines its own map on
  // window.SECTION_ORDER; pages without one are left alone.
  function reorderSections() {
    var map = window.SECTION_ORDER;
    var container = document.querySelector('.reorder-sections');
    if (!map || !container) return;
    var concept = document.documentElement.getAttribute('data-concept') || 'onyx';
    var order = map[concept];
    if (!order) return;
    order.forEach(function (cls) {
      var el = container.querySelector('.' + cls);
      if (el) container.appendChild(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    reorderSections();

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
        reorderSections();
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
