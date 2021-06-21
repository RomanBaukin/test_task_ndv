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