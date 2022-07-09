const quizData = [
    {
        questionNumber:1,
        question:"** What does JSON stand for ? **", 
        a:"Javascript Oriented Notation",
        b:"Javascript Object Notation",
        c:"Javascript Olives Notation",
        d:"Javascript Omega Notation",
        correct:"b"
    },
    {
        questionNumber:2,
        question: "** What does CSS stand for ? **",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        questionNumber:3,
        question: "** What does HTML stand for ? **",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        questionNumber:4,
        question: "** What year was JavaScript launched ? **",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        questionNumber:5,
        question:"** What Js framework has useState() and useEffect() functions ? **",
        a:"React",
        b:"Angular",
        c:"Vue",
        d:"Fresh",
        correct:"a",
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const Qnum = document.getElementById('questionNumber')
const questionEl = document.getElementById('question')
const A_Choice = document.getElementById('A_Choice')
const B_Choice = document.getElementById('B_Choice')
const C_Choice = document.getElementById('C_Choice')
const D_Choice = document.getElementById('D_Choice')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

LoadQuestions()

function LoadQuestions() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    Qnum.innerHTML = "Question Number : " + currentQuizData.questionNumber + " / " + (quizData.length).toString()
    questionEl.innerText = currentQuizData.question
    A_Choice.innerText = currentQuizData.a
    B_Choice.innerText = currentQuizData.b
    C_Choice.innerText = currentQuizData.c
    D_Choice.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            LoadQuestions()
        } else {
            quiz.innerHTML = `
                <h2>You Answered ${score}/${quizData.length} Questions Correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})