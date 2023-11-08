const HEADER_NAV_ITEMS = [
    "Ana Sayfa",
    "Kamp Alanı",
    "Konaklama",
    "Etkinlikler",
    "Restoran",
    "Galeri",
    "Konum"
];
let headerMenu=document.querySelector(".header-nav>ul");
let footerMenu=document.querySelector(".footer-nav>ul");

HEADER_NAV_ITEMS.forEach((navItem)=>{
    let headerMenu_liDOM=document.createElement("li");
    let footerMenu_liDOM=document.createElement("li");

    headerMenu_liDOM.innerHTML=`
        <a href="#">${navItem}</a>
    `;
    footerMenu_liDOM.innerHTML=`
    <a href="#">${navItem}</a>
`;
    headerMenu.appendChild(headerMenu_liDOM);
    footerMenu.appendChild(footerMenu_liDOM);
});
