const _introContent = document.querySelector(".intro-content");
setTimeout(() => {
    _introContent.innerHTML = `
    <img src="${INTRO_LOGO}" alt="logo">
    <h1 class="intro-title">${INTRO_TITLE}</h1>`;
    _introContent.classList.remove("hidden");
}, INTRO_LOGO_TIME);

setTimeout(() => {
    _introContent.classList.add("hidden");
}, INTRO_HIDE_TIME);

setTimeout(() => {
    _introContent.classList.remove("hidden");
    _introContent.innerHTML = `
    <h1>${INTRO_TEXT}</h1>`;
}, INTRO_TEXT_TIME);

setTimeout(() => {
    window.location.href=       " https://github.com/damlahub";
}, 28000);
