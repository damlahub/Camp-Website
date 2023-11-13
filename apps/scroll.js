let header = document.querySelector(".home-page-header");
let headerDistance = header.offsetTop+100;


window.onscroll = function () {
    FixedScroll();
}

function FixedScroll() {
    if (window.scrollY > headerDistance) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.animation = "dropAnimation 1s ease-out";
    } else {
        header.style.position = "relative";
        header.style.boxShadow = "none";
        header.style.animation = "none";
    }
}
