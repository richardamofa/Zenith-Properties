const slider = document.querySelector('.discoverpropertyslider');
const slides = document.querySelectorAll('.discoverpropertycard');
const dots = document.querySelectorAll('.dot');
const prev = document.querySelector('.arrow.left');
const next = document.querySelector('.arrow.right');

let index = 0;

function updateSlider() {
  slider.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});