const HEADER_NAV_ITEMS = [
    {
        name: "Ana Sayfa",
        href: "#"
    },
    {
        name: "Konaklama",
        href: "#accommodation"
    },
    {
        name: "Aktiviteler",
        href: "#activity"
    },
    {
        name: "Galeri",
        href: "#gallery"
    },
    {
        name: "S.S.S",
        href: "#faq"
    },
    {
        name: "Konum",
        href: "#location"
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
