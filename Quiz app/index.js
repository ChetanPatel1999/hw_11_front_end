const questions = [
    {
        question: "Which of the following is used to store multiple values in a single variable in most programming languages?",
        answers: [
            { text: "Function", correct: false },
            { text: "Array", correct: true },
            { text: "Loop", correct: false },
            { text: "Operator", correct: false },
        ]
    },
    {
        question: "What is the correct symbol for “equal to” in most programming languages?",
        answers: [
            { text: "=", correct: false },
            { text: "==", correct: true },
            { text: "===", correct: false },
            { text: ":=", correct: false },
        ]
    },
    {
        question: "In programming, which loop executes at least once even if the condition is false?",
        answers: [
            { text: "for", correct: false },
            { text: "while", correct: false },
            { text: "do-while", correct: true },
            { text: "forEach", correct: false },
        ]
    },
    {
        question: "Which of these is NOT a programming language?",
        answers: [
            { text: "HTML", correct: true },
            { text: "python", correct: false },
            { text: "java", correct: false },
            { text: "C++", correct: false },
        ]
    },
]

let questionIndex = 0;
let score = 0;

const questionElement = document.querySelector("#question");
const buttonsElement = document.querySelector(".answer-buttons")
const nextBtn = document.querySelector("#next-btn")

function quizStart() {
    resetbtn();
    questionIndex = 0;
    score = 0;
    showQuestions();
}
function showQuestions() {
    let questionData = questions[questionIndex];
    let currentQuestionIndex = questionIndex + 1;
    questionElement.innerHTML = `${currentQuestionIndex}. ${questionData.question}`;
    questionData.answers.forEach(answer => {
        let button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = answer.text;
        buttonsElement.appendChild(button);
    })
}
function resetbtn() {
    while (buttonsElement.firstChild) {
        buttonsElement.firstChild.remove();
    }
}
quizStart();
