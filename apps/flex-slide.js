const accommodationArr = [
    {
        image: "assets/headerbg.jpg",
        title: "HeaderBg",
        price: "200TL"
    }
];

const accommodation = document.querySelector("#accommodation");

const createContent = () => {
    let flexSlide = document.createElement("section");
    flexSlide.classList.add("accommodation-flex-slide");
    flexSlide.innerHTML = `
    <article class="accommodation-flex-slide-item">
    <img src="${accommodationArr[0].image}" alt="">
    <h1>${accommodationArr[0].title}</h1>
    </article>
    `;
    accommodation.prepend(flexSlide);
}

const flexSlideActive = () => {
    let flexPrice = document.createElement("p");

    let flexItems = document.querySelectorAll(".accommodation-flex-slide-item");

    flexItems.forEach((flexItem, index) => {
        flexItem.addEventListener("click", () => {
            flexItem.classList.toggle("flex-slide-item-active");

            if (flexItem.classList.contains("flex-slide-item-active")) {
                flexPrice.innerHTML = accommodationArr[index].price;

                setTimeout(() => {
                    flexItem.appendChild(flexPrice);
                }, 400);
            } else {
                flexPrice.remove();
            }
        });
    });
}

// <button class="btn-standart">Rez</button>

createContent();
flexSlideActive();



