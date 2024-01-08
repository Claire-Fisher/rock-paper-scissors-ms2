const resultChoices = document.getElementById("turnResultChoices");
const continueButton = document.getElementById("continueButton");
const resultText = document.getElementById("turnResultText");
const buttons = document.getElementsByClassName("game-btn");
const winTally = document.getElementById("win-tally");
const loseTally = document.getElementById("lose-tally");
const drawTally = document.getElementById("draw-tally");

// game rules object with win/lose combos. //
const weapons = {
  rock: {
    beats: "scissors",
  },
  scissors: {
    beats: "paper",
  },
  paper: {
    beats: "rock",
  },
};

let game = {
  winScore: 0,
  loseScore: 0,
  drawScore: 0,
  finalResult: "",
  turnNumber: 0,
};

let playersChoice = "";
let computersChoice = "";

/**
 * Takes eventListener data
 * Reassigns playersChoice with users selection
 */
function handleWeaponClick(event) {
  playersChoice = event.target.dataset.weapon;
  game.turnNumber++;
  computersChoice = getRandomWeapon();
  rollCountdown();
  $("#users-choice").text(`Your weapon = ${playersChoice}`);
}

// Event listener for user weapon selection
for (const button of buttons) {
  button.addEventListener("click", handleWeaponClick);
}

/**
 * @returns random selection from weapons obj keys
 */
const getRandomWeapon = () => {
  const weaponNames = Object.keys(weapons);
  return weaponNames[Math.floor(Math.random() * weaponNames.length)];
};

/**
 * Targets the score board,
 * edits and shows the user the current scores
 */
function editScores() {
  winTally.innerText = game.winScore;
  loseTally.innerText = game.loseScore;
  drawTally.innerText = game.drawScore;
  $("#game-countdown").addClass("hidden");
  $("#game-area").removeClass("hidden");
}

/**
 * Resets scores.
 * Hides/Shows correct game elements
 * Shows clear scores to the user.
 */
function newGame() {
  game.winScore = 0;
  game.loseScore = 0;
  game.drawScore = 0;
  game.turnNumber = 0;
  $(".result-gif").addClass("hidden");
  $("#next-turn").addClass("hidden");
  $("#newGameButton").addClass("hidden");
  $("#continueButton").show();
  $("#turnResultArea").addClass("hidden");
  $("#game-area").show();
  editScores();
  $(".turn-result-box").removeClass("dark-grey-bg").addClass("mid-grey-bg");
  $("#newGameButton").removeClass("mid-grey-bg").addClass("dark-grey-bg");
  $("#newGameButton").removeClass("dark-text").addClass("light-text");
  $("#turnResultChoices").removeClass("light-text").addClass("dark-text");
  $("#turnResultText").removeClass("light-text").addClass("dark-text");
  $("#newGameButton").removeClass("light-grey-bg").addClass("dark-grey-bg");
}

/**
 * Holds final scores info for user until newGameButton is clicked
 */
function finalScores() {
  $("#continueButton").hide();
  $("#newGameButton").removeClass("hidden");
  $("#newGameButton").on("click", newGame);
}

/**
 * Arr of gif IDs for the randomGif() to target
 */
const gifs = ["gif1", "gif2", "gif3", "gif4", "gif5"];

/**
 * @param {int} win
 * @param {int} lose
 * Takes the win/lose/draw scores from game object.
 * If any = 3. Game over. New game.
 */
function bestOfThree(win, lose) {
  let randomGif = () => {
    return gifs[Math.floor(Math.random() * gifs.length)];
  };
  if (win === 3) {
    resultText.innerText = "Congratulations: You Win!";
    let selectedGif = randomGif();
    $(`#${selectedGif}`).removeClass("hidden");
    finalScores();
  }
  if (lose === 3) {
    resultText.innerText = "Game Over: You Lose!";
    $("#game-over").removeClass("hidden");
    $(".turn-result-box").removeClass("mid-grey-bg").addClass("dark-grey-bg");
    $("#turnResultChoices").removeClass("dark-text").addClass("light-text");
    $("#turnResultText").removeClass("dark-text").addClass("light-text");
    $("#newGameButton").removeClass("dark-grey-bg").addClass("mid-grey-bg");
    $("#newGameButton").removeClass("light-text").addClass("dark-text");
    finalScores();
  }
}

/**
 * @param {string} playersChoice
 * @param {string} computersChoice
 * Compares playersChoice with computersChoice
 * Changes score points depending on outcome
 */
function turnPoint(playersChoice, computersChoice) {
  if (playersChoice === computersChoice) {
    game.drawScore++;
    resultAnnouncement("draw");
  }
  if (weapons[playersChoice].beats === computersChoice) {
    game.winScore++;
    resultAnnouncement("win");
  }
  if (weapons[computersChoice].beats === playersChoice) {
    game.loseScore++;
    resultAnnouncement("lose");
  }
  continueButton.innerText = "Continue";
  editScores();
  bestOfThree(game.winScore, game.loseScore);
  if (game.turnNumber >= 1) {
    $("#next-turn").removeClass("hidden");
  }
}

/**
 * @param {string} result
 * Take the result of turnPoint()
 * Edits innerText of Turn Results area to display outcome to the user.
 */
function resultAnnouncement(result) {
  if (result === "draw") {
    resultChoices.innerText = `You both chose ${playersChoice}`;
    resultText.innerText = "it's a draw!";
  }
  if (result === "win") {
    resultChoices.innerText = `Your ${playersChoice} beats ${computersChoice}`;
    resultText.innerText = "you score!";
  }
  if (result === "lose") {
    resultChoices.innerText = `Your ${playersChoice} loses to  ${computersChoice}`;
    resultText.innerText = "AI scores.";
  }
  $("#continueButton").on("click", function () {
    $("#game-area").show();
    $("#turnResultArea").addClass("hidden");
  });
}

/**
 * Event: on weapon button click:
 * Hide game-area section.
 * Show game-countdown section
 */
function rollCountdown() {
  $("#game-area").hide();
  $("#game-countdown").removeClass("hidden");
  $("#No3")
    .show()
    .css("opacity", "1")
    .fadeOut(750)
    .promise()
    .done(function () {
      $("#No2")
        .show()
        .css("opacity", "1")
        .removeClass("hidden")
        .fadeOut(750)
        .promise()
        .done(function () {
          $("#No1")
            .show()
            .css("opacity", "1")
            .removeClass("hidden")
            .fadeOut(750)
            .promise()
            .done(function () {
              $("#turnResultArea").removeClass("hidden");
              resultAnnouncement();
              turnPoint(playersChoice, computersChoice);
            });
        });
    });
}
