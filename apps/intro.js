window.onload = () => {
    const INTRO = document.querySelector("#intro");
    const INTRO_VIDEO = document.querySelector("#intro>video");
    let _introContent = document.querySelector(".intro-content");
    let _pages = document.querySelectorAll(".page");
    let btnNextMenu = document.querySelector("#btn-next-menu");
    let translate = 0;
    let translateAmount = 100;

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
            INTRO_VIDEO.currentTime = 28;
            slide();
        };

    // Slide
    const slide = () => {
        translate -= translateAmount;
        _pages.forEach(
            (_page) => (_page.style.transform = `translateX(${translate}%)`)
        );
        setTimeout(() => {
            const HOME_PAGE = document.querySelector("#home-page");
            const HOME_PAGES = document.querySelector(".pages");
            const CONTAINER = document.querySelector(".container");
            HOME_PAGE.style = "";
            HOME_PAGE.classList.remove("page");
            HOME_PAGE.style.width = "100%";
            INTRO.parentNode.removeChild(INTRO);
            HOME_PAGES.style.width = "100%";
            CONTAINER.style.overflow = "auto";
        }, 1000);
    };
};
