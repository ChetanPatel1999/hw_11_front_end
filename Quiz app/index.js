const questions = [
    {
        question: "Which of the following is used to store multiple values in a single variable in JavaScript?",
        answers: [
            { text: "String", correct: false },
            { text: "Array", correct: true },
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Machine Language", correct: false },
            { text: "HyperTool Markup Language", correct: false },
            { text: "HighText Mark Language", correct: false },
        ]
    },
    {
        question: "In programming, which symbol is commonly used for single-line comments in JavaScript?",
        answers: [
            { text: "<!---", correct: false },
            { text: "#", correct: false },
            { text: "//", correct: true },
            { text: "/#", correct: false },
        ]
    },
    {
        question: "In CSS, which property is used to change the text color?",
        answers: [
            { text: "background-color", correct: false },
            { text: "text-align", correct: false },
            { text: "color", correct: true },
            { text: "font-size", correct: false },
        ]
    }
]

const questionElement = document.querySelector("#question");
const buttonsElement = document.querySelector(".answer-buttons");
const nextBtn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    nextBtn.innerHTML = "Next";
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
function showQuestion() {
    resetButton();
    let questionData = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + questionData.question;

    questionData.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        buttonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);
    })
}
function selectAns(evt) {
    let ans = evt.target.dataset.correct;
    if (ans) {
        evt.target.classList.add("correct-option");
        score++;
    }
    else {
        evt.target.classList.add("incorrect-option");
    }
    Array.from(buttonsElement.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct-option");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
}
function resetButton() {
    nextBtn.style.display = "none";
    while (buttonsElement.firstChild) {
        buttonsElement.firstChild.remove();
    }
}
function showQuizeScore() {
    if (currentQuestionIndex < questions.length + 1) {
        resetButton();
        questionElement.innerHTML = `Quize score ${score} outof ${questions.length}`;
        nextBtn.style.display = "block";
        nextBtn.innerHTML = "Play Again";
    }
    else {
        startQuiz();
    }
}
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showQuizeScore();
    }
})
startQuiz();