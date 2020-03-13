const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull")
const scoreText = document.getElementById("score");

let currentQuestion = {};
acceptingAnswers = false;
let score =0;
questionCounter = 0;
let availableQuestions = [];

let questions =[
    {
        question: "Inside which HTML element do we but the javascript ?",
        choice1: "<script>",
        choice2: "<javascrips>",
        choice3: "<js>",
        choice4: "<scriptimg>",
        answer: 1


    },
    {
        question: "What is the correct syntax for referring to external javascript called xxx.js ?",
        choice1:"<script href='xxx.js'>",
        choice2: "<scrips name='xxx.js'>",
        choice3: "<script img ='xxx.js >",
        choice4: "<script files ='xxx.js>",
        answer: 3


    },
    {
        question: "how do you write 'Hello world' in the alert box ?",
        choice1:"<msgBox('Hello world')>",
        choice2: "<alertBox('Hello world')>",
        choice3: "<msg('Hello world')>",
        choice4: "<alert(Hello world)>",
        answer:4


    }

];

//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [... questions];
    console.log();
    getNewQuestion();

};

getNewQuestion = () =>{
    if(availableQuestions.length === 0){
        //go to the end page
        return window.location.assign("/end.html")
    }


    questionCounter++;



    //increments the number of selected items
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //update of the progress Bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


    //random function to randomly select qoustions 
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex,1);
    console.log();
    acceptingAnswers= true;

};

choices.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply  = selectedAnswer == currentQuestion.answer ? "correct":"incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        //timer that enebles the click colore to go
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply);
            //console.log(selectedAnswer)
             getNewQuestion();
        }, 1000);
        
    });
});
incrementScore = num =>{
    score += num;
    scoreText.innerText = score;
}

startGame();
