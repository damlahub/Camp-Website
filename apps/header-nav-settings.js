const HEADER_NAV_ITEMS = [
    "Ana Sayfa",
    "Kamp Alanı",
    "Konaklama",
    "Etkinlikler",
    "Restoran",
    "Galeri",
    "Konum"
];
let MENU=document.querySelector(".header-nav>ul");

HEADER_NAV_ITEMS.forEach((navItem)=>{
    let liDOM=document.createElement("li");
    liDOM.innerHTML=`
        <a href="#">${navItem}</a>
    `;
    MENU.appendChild(liDOM);
});
