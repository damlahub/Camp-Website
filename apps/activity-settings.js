const ACTIVITY_H4_ITEMS = [
    "Kano",
    "Atlı Plaj Safari",
    "Atlı Orman Safari",
    "ATV Turu",
    "Havuz Paketi",
    "Dalış",
    "Bisiklet Turu",
    "Doğada Yaşam"
];

const ACTIVITY_H6_ITEMS = [
    "45 Dakika",
    "20 Dakika",
    "50 Dakika",
    "-",
    "-",
    "1 saat",
    "-",
    "-"
];

const ACTIVITY_SPAN_ITEMS = [
    "400TL",
    "300TL",
    "600TL",
    "250TL",
    "150TL",
    "200TL",
    "180TL",
    "180TL"
];

const ACTIVITY_ITEMS = document.querySelector(".activity-items");

ACTIVITY_H4_ITEMS.forEach((item_h4, index) => {
    let activityContent = document.createElement("article");
    activityContent.classList.add("activity-item");
    
    let itemH4 = document.createElement("h4");
    itemH4.textContent = item_h4;
    activityContent.appendChild(itemH4);

    let itemH6 = document.createElement("h6");
    itemH6.textContent = ACTIVITY_H6_ITEMS[index];
    activityContent.appendChild(itemH6);

    let itemSpan = document.createElement("span");
    itemSpan.textContent = ACTIVITY_SPAN_ITEMS[index];
    activityContent.appendChild(itemSpan);

    ACTIVITY_ITEMS.appendChild(activityContent);
});
