const toggleButton = document.getElementsByClassName('toggle-navbar')[0];
const navbarLinks = document.getElementsByClassName('navbar-list')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');

  toggleButton.classList.toggle('changeIcon');
});

// * ANIMATE WHEN IN VIEWPORT

var animateHTML = function () {
  var elems;
  var windowHeight;

  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }

  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }

      if (positionFromTop - windowHeight > 1 || positionFromTop < 0) {
        elems[i].className = elems[i].className.replace(
          'fade-in-element',
          'hidden'
        );
      }
    }
  }

  return {
    init: init,
  };
};
