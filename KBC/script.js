const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Jupiter", "Mars", "Venus", "Saturn"],
    answer: "Mars",
  },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;
let lifelineUsed = false;


const mainqs = document.getElementById("mainqs");
const optionsContainer = document.getElementById("options");
const fiftyFifty = document.getElementById("fiftyFifty");


function loadQuestion() {
  const questionData = questions[currentQuestion];
  mainqs.textContent = questionData.question;
  optionsContainer.innerHTML = ""; // Clear previous options

  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add(
      "bg-blue-500",
      "hover:bg-blue-700",
      "text-white",
      "font-bold",
      "py-3",
      "px-6",
      "rounded",
      "w-full"
    );
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedAnswer === correctAnswer) {
    score += 1000000; // Award points for correct answers
    alert("Correct!");
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      gameOver();
    }
  } else {
    alert("Incorrect!");
    gameOver();
  }
}


function fiftyFifty() {
  if (!lifelineUsed) {
    lifelineUsed = true;
    const questionData = questions[currentQuestion];
    const correctIndex = questionData.options.indexOf(questionData.answer);
    const incorrectOptions = questionData.options.filter(
      (option, index) => index !== correctIndex
    );

    let optionsToRemove = incorrectOptions.splice(0,2);
    optionsContainer.innerHTML = ""; //Clear previous options
    const correctOption = document.createElement("button");
    correctOption.textContent = questionData.answer;
    correctOption.classList.add(
      "bg-blue-500",
      "hover:bg-blue-700",
      "text-white",
      "font-bold",
      "py-3",
      "px-6",
      "rounded",
      "w-full"
    );
    correctOption.addEventListener("click", () => checkAnswer(questionData.answer));
    optionsContainer.appendChild(correctOption);

    
  } else {
    alert("50/50 lifeline already used!");
  }
}

function gameOver() {
  alert(`Game Over! Your final score is: ${score}`);
  //You can add a functionality to restart the game or display final score on the screen.
}

fiftyFifty.addEventListener("click", fiftyFifty);
loadQuestion();