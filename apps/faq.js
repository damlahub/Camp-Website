const faq = [
    {
        question: "Güvenli Turizm Sertifikası",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    },
    {
        question: "Covid-19 (Corona) için önlem aldınız mı?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    },
    {
        question: "Kampa Evcil Hayvan Kabul Ediyor Musunuz?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    },
    {
        question: "Kampta Yeme İçme İhtiyaçlarımızı Nasıl Gideririz?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    },
    {
        question: "KeyfKamp'a Ulaşım Nasıl Sağlanır?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur iure laborum enim ratione vel, cumque deserunt est, nihil consectetur, exercitationem recusandae? Iste illum non ratione dolorem earum? Totam, beatae magni."
    }
];
const createFaqElements = () => {
    let faqContent = document.querySelector(".faq-content");

    faq.forEach((faqItem, counter) => {
        counter += 1;
        let faqItemArticle = document.createElement("article");
        faqItemArticle.classList.add("faq-item");
        faqItemArticle.innerHTML = `
        <button class="f${counter} faq-question">
            ${faqItem.question}
        </button>
        <div class="faq-answer-${counter} faq-answer">
            <p>${faqItem.answer}</p>
        </div> 
        `;
        faqContent.appendChild(faqItemArticle);
    });
}

const faqController = () => {
    let allAnswers = document.querySelectorAll(".faq-answer");
    let allQuestions = document.querySelectorAll(".faq-question");
    let clickID =(event) => {
        const clickedElementId = event.target.classList[0];
        const idNumber= clickedElementId.charAt(1);
        
        const answerElement = document.querySelector(`.faq-answer-${idNumber}`);
        if (answerElement.style.display === "block") {
              answerElement.style.display = "none";
          } else {
            answerElement.style.display = "block";
          }
    }
    allAnswers.forEach(element => {
        element.style.display = "none";
    });
    allQuestions.forEach(element => {
        element.addEventListener("click",clickID);
    });
}

createFaqElements();
faqController();