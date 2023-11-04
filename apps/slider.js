const slider = document.querySelector('.slider');
let count = 0;

function nextSlide() {
  count++;
  if (count >= slider.children.length) {
    count = 0;
  }
  updateSlider();
}
function prevSlide() {
  count--;
  if (count < 0) {
    count = slider.children.length - 1;
  }
  updateSlider();
}
function updateSlider() {
  // 4 resmim olduğu için 400 yazdım.
  const transformValue = -count * 300 / slider.children.length + '%';
  // console.log(transformValue);
  slider.style.transform = 'translateX(' + transformValue + ')';
}
setInterval(nextSlide, 3000);
