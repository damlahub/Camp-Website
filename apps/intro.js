let _introContent = document.querySelector(".intro-content");
let _pages = document.querySelectorAll(".page");
let translate = 0;
const translateAmount = 100;


setTimeout(() => {
    _introContent.innerHTML = `
    <img src="${INTRO_LOGO}" alt="logo">
    <h1 class="intro-title">${INTRO_TITLE}</h1>`;
    _introContent.classList.remove("intro-hidden");
}, INTRO_LOGO_TIME);

setTimeout(() => {
    _introContent.classList.add("intro-hidden");
}, INTRO_HIDE_TIME);

setTimeout(() => {
    _introContent.classList.remove("intro-hidden");
    _introContent.innerHTML = `
    <h1>${INTRO_TEXT}</h1>`;
}, INTRO_TEXT_TIME);

setTimeout(() => {
    slide("next");
}, 28000);

// Slide

const slide = (direction) => {

    direction === "next" ? translate -= translateAmount : translate += translateAmount;

    _pages.forEach(
        _pages => (_pages.style.transform = `translateX(${translate}%)`)
    );
}