// Popup
const togglePopUp = () => {
  const popUp = document.querySelector('.popup'),
    popUpBtn = document.querySelectorAll('.account');

  popUpBtn.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      const target = event.target;

      if (!target.closest('footer')) {
        popUp.style.display = 'block';
      }
    });
  });

  popUp.addEventListener('click', (event) => {
    let target = event.target;

    if (target.matches('.popup__close img')) {
      popUp.style.display = 'none';
    } else {
      target = target.closest('.popup__content');

      if (!target) {
        popUp.style.display = 'none';
      }
    }
  });
};

togglePopUp();

// JS-функция определения поддержки WebP

function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});