let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const resultMsg = document.getElementById("result-msg");
const userChoiceEl = document.getElementById("user-choice");
const compChoiceEl = document.getElementById("comp-choice");
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const resetBtn = document.querySelector(".reset-btn");

const options = ["rock", "paper", "scissors"];

function getCompChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function showResult(userChoice, compChoice) {
  userChoiceEl.textContent = userChoice;
  compChoiceEl.textContent = compChoice;

  if (userChoice === compChoice) {
    resultMsg.textContent = "It's a Draw!";
    resultMsg.style.backgroundColor = "#f1c40f";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    resultMsg.textContent = "You Win!";
    resultMsg.style.backgroundColor = "#2ecc71";
  } else {
    compScore++;
    resultMsg.textContent = "You Lose!";
    resultMsg.style.backgroundColor = "#e74c3c";
  }

  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    const compChoice = getCompChoice();
    showResult(userChoice, compChoice);
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userChoiceEl.textContent = "-";
  compChoiceEl.textContent = "-";
  resultMsg.textContent = "Make your move!";
  resultMsg.style.backgroundColor = "#00f5ff";
  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;
});
