const accommodationArr = [
    {
        image: "assets/flex-slide/1.jpg",
        title: "Günübirlik Giriş",
        price: "100TL"
    },
    {
        image: "assets/flex-slide/2.jpg",
        title: "Kendi Çadırınızla Konaklama",
        price: "250TL"
    },
    {
        image: "assets/flex-slide/3.jpg",
        title: "Tesis Çadır Konaklama",
        price: "750TL"
    },
    {
        image: "assets/flex-slide/4.jpg",
        title: "Karavan Park",
        price: "300TL"
    },
    {
        image: "assets/flex-slide/5.jpg",
        title: "Bungalov",
        price: "1750TL"
    },
    {
        image: "assets/flex-slide/6.jpg",
        title: "Hobbit Ev",
        price: "2000TL"
    }
];

const accommodation = document.querySelector("#accommodation");
const createContent = () => {
    accommodationArr.forEach((arr, index) => {
        let flexSlideContent = document.createElement("section");
        flexSlideContent.classList.add("accommodation-flex-slide-item");

        flexSlideContent.innerHTML = `
                <img src="${accommodationArr[index].image}" alt="">
                <h1>${accommodationArr[index].title}</h1>
        `;
        accommodation.append(flexSlideContent);
    });
    setTimeout(() => {
        let counterAccommodation = accommodationArr.length;
        document.querySelectorAll(".accommodation-flex-slide-item")[counterAccommodation - 1].click();
    }, 1000);

}

const flexSlideActive = () => {
    let flexButton = document.createElement("button");
    let flexPrice = document.createElement("p");
    let flexInfo = document.createElement("article");
    let activeFlexItem = null;

    let flexItems = document.querySelectorAll(".accommodation-flex-slide-item");

    flexItems.forEach((flexItem, index) => {
        flexItem.addEventListener("click", () => {


            if (activeFlexItem && activeFlexItem !== flexItem) {
                activeFlexItem.classList.remove("flex-slide-item-active");
                flexPrice.remove();
            }

            flexItem.classList.toggle("flex-slide-item-active");

            if (flexItem.classList.contains("flex-slide-item-active")) {
                flexPrice.innerHTML = accommodationArr[index].price;
                flexInfo.classList.add("flex-slide-info");

                flexButton.classList.add("btn-standart");
                flexButton.textContent = "Rezervasyon";

                flexInfo.appendChild(flexPrice);
                flexInfo.appendChild(flexButton);
                flexItem.appendChild(flexInfo);
            } else {
                flexInfo.remove();
            }

            if (flexItem.classList.contains("flex-slide-item-active")) {
                activeFlexItem = flexItem;
            } else {
                activeFlexItem = null;
            }
        });
    });
}

createContent();
flexSlideActive();