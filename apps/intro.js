window.onload = () => {
    const INTRO = document.querySelector("#intro");
    const INTRO_VIDEO = document.querySelector("#intro>video");
    let _introContent = document.querySelector(".intro-content");
    let btnNextMenu = document.querySelector("#btn-next-menu");
    let container=document.querySelector(".container");

    btnNextMenu.addEventListener("click", () => {
        slide();
    });

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

    INTRO_VIDEO.onended = () => {
        slide();
    };

    // Slide
    const innerWidth = window.innerWidth;
    const slide = () => {
        INTRO.style.left = `-${innerWidth}px`;
        setTimeout(() => {
            INTRO.remove();
            container.style.overflow="auto";
        }, 2100);
    };
};
