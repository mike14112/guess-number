const btnCheck = document.querySelector(".btn_add"),
  btnAgainGame = document.querySelector(".btn_again");

let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score = 20,
  highScore = 0;

function displayGuessMessage(meesage) {
  document.querySelector(".start_guessing_place").textContent = meesage;
}

btnCheck.addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".input_number").value);

  if (!inputNumber) {
    displayGuessMessage("Please write to Number");
  }
  if (inputNumber === secretNumber) {
    displayGuessMessage("Correctly!");
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        ".best_result_place"
      ).textContent = `results:${highScore}`;
    }
  } else if (inputNumber !== secretNumber && score !== 0) {
    displayGuessMessage(inputNumber > secretNumber ? "To High" : "To Low");
    score--;
    document.querySelector(".counter").textContent = score;
  } else {
    displayGuessMessage("Game Over!");
    document.querySelector(".counter").textContent = 0;
  }
});

btnAgainGame.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayGuessMessage("Start Guess Message!");
  document.querySelector(".input_number").value = "";
  score = 20;
  document.querySelector(".counter").textContent = score;
});
