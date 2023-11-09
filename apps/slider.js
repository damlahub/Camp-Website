const sliderItems=[
  "assets/slider/1.jpg",
  "assets/slider/2.jpg",
  "assets/slider/3.jpg",
  "assets/slider/4.jpg",
  "assets/slider/1.jpg",
  "assets/slider/2.jpg",
  "assets/slider/4.jpg",
  "assets/slider/3.jpg",
  "assets/slider/1.jpg",
  "assets/slider/4.jpg",
  "assets/slider/2.jpg",
  "assets/slider/3.jpg",
  "assets/slider/1.jpg"
];
const sliderCreate=()=>{
  let createSliderContainer=document.querySelector(".slider-container");
  let createSlider=document.createElement("article");
  createSlider.classList.add("slider");

  sliderItems.forEach(element => {

    let sliderImages=document.createElement("img");
    sliderImages.src=element;

    createSlider.appendChild(sliderImages);
  });
  createSliderContainer.appendChild(createSlider);

}

const sliderController= ()=>{
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
    const transformValue = -count * 325 / slider.children.length + '%';
    // console.log(transformValue);
    slider.style.transform = 'translateX(' + transformValue + ')';
  }
  setInterval(nextSlide, 3000);
  
}
sliderCreate();
sliderController();
