const slideRadios = document.querySelectorAll('.slider input[type="radio"]');
const slidesContainer = document.querySelector('.slider');
let autoIndex = 0;
let autoSlideInterval;

function autoSlide() {
  autoIndex = (autoIndex + 1) % slideRadios.length;
  slideRadios[autoIndex].checked = true;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(autoSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

slidesContainer.addEventListener('mouseenter', stopAutoSlide);
slidesContainer.addEventListener('mouseleave', startAutoSlide);
startAutoSlide();
