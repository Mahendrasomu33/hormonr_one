
  const leftArrow = document.querySelector('.left');
  const rightArrow = document.querySelector('.right');
  const sliderWrapper = document.querySelector('.home_slider_wrapper');
  const slides = document.querySelectorAll('.home_div_slider');
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }

  rightArrow.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  leftArrow.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

