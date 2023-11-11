const HEADER_NAV_ITEMS = [
    {
        name: "Ana Sayfa",
        href: "#header"
    },
    {
        name: "Konaklama",
        href: "#accommodation"
    },
    {
        name: "Etkinlikler",
        href: "#activity"
    },
    {
        name: "Restoran",
        href: "#restoran"
    },
    {
        name: "Galeri",
        href: "#gallery"
    },
    {
        name: "Konum",
        href: "#konum"
    }
];
let headerMenu=document.querySelector(".header-nav>ul");
let footerMenu=document.querySelector(".footer-nav>ul");

HEADER_NAV_ITEMS.forEach((navItem)=>{
    let headerMenu_liDOM=document.createElement("li");
    let footerMenu_liDOM=document.createElement("li");

    headerMenu_liDOM.innerHTML=`
        <a href="${navItem.href}">${navItem.name}</a>
    `;
    footerMenu_liDOM.innerHTML=`
    <a href="${navItem.href}">${navItem.name}</a>
    `;
    headerMenu.appendChild(headerMenu_liDOM);
    footerMenu.appendChild(footerMenu_liDOM);
});
