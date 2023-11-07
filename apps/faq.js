const faq = [
    {
        question: "Soru1",
        answer: "Cevap 1"
    },
    {
        question: "Soru2",
        answer: "Cevap 2"
    },
    {
        question: "Soru3",
        answer: "Cevap 3"
    },
    {
        question: "Soru4",
        answer: "Cevap 4"
    },
    {
        question: "Soru5",
        answer: "Cevap 5"
    },
];

const createFaqElements = () => {
    let faqContent = document.querySelector(".faq-content");

    faq.forEach((faqItem, counter) => {
        counter += 1;
        let faqItemArticle = document.createElement("article");
        faqItemArticle.classList.add("faq-item");
        faqItemArticle.innerHTML = `
        <div class="faq-question-${counter}">
            <p>${faqItem.question}</p>
        </div>
        <div class="faq-answer-${counter}">
            <p>${faqItem.answer}</p>
        </div> 
        `;
        faqContent.appendChild(faqItemArticle);
    });
}

const faqController = () => {
    counter+=1;
    let allAnswers = document.querySelectorAll(".faq-answer");
    let allQuestions = document.querySelectorAll(".faq-question");
    let clickID =(event) => {
        const clickedElementId = event.target.classList;
        console.log("Tıklanan elementin ID'si:", clickedElementId);
    }
    allAnswers.forEach(element => {
        element.style.display = "none";
    });
    allQuestions.forEach(element => {
        element.addEventListener("click",clickID)
    });


}

createFaqElements();
faqController();