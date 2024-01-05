// Test to check javascipt loading and connected correctly.
console.log("Js connected properly");

// TEST - JQuery connected correctly
$(".game-btn").click(function () {
  console.log("JQuery working correctly");
});

let game = {
  winScore: 0,
  loseScore: 0,
  drawScore: 0,
  finalResult: "",
  turnNumber: 0,
};

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

let playersChoice = "";
let computersChoice = "";
const buttons = document.getElementsByClassName("game-btn");
const continueButton = document.getElementById("continueButton");
let resultChoices = document.getElementById("turnResultChoices");
let resultText = document.getElementById("turnResultText");

/**
 * Takes eventListener data
 * Reassigns playersChoice with users selection
 */
function handleWeaponClick(event) {
  playersChoice = event.target.dataset.weapon;
  game.turnNumber++;
  console.info(`Turn Number = ${game.turnNumber}`);
  computersChoice = getRandomWeapon();
  rollCountdown();
  updateChoices();
}

// Event listener for user weapon selection
for (const button of buttons) {
  button.addEventListener("click", handleWeaponClick);
}

const getRandomWeapon = () => {
  const weaponNames = Object.keys(weapons);
  return weaponNames[Math.floor(Math.random() * weaponNames.length)];
};

function updateChoices() {
  console.info("Computer has chosen: ", computersChoice);
  console.info("Player has chosen: ", playersChoice);
  $("#users-choice").text(`Your weapon = ${playersChoice}`);
}

/**
 * Targets the score board,
 * edits and shows the user the current scores
 */
function editScores() {
  document.getElementById("win-tally").innerText = game.winScore;
  document.getElementById("lose-tally").innerText = game.loseScore;
  document.getElementById("draw-tally").innerText = game.drawScore;
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
}

/**
 * Holds final scores info for user until newGameButton is clicked
 */
function finalScores() {
  $("#continueButton").hide();
  $("#newGameButton").removeClass("hidden");
  $("#newGameButton").on("click", newGame);
  console.log("GAME OVER. PLEASE REFRESH");
}

const gifs = ["gif1", "gif2", "gif3", "gif4", "gif5"];

/**
 *
 * @param {integer} win
 * @param {integer} lose
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
    finalScores();
  }
}

/**
 *
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
 *
 * @param {string} result
 * Take the result of turnPoint()
 * Edits innerText of Turn Results area to display outcome to the user.
 */
function resultAnnouncement(result) {
  if (result === "draw") {
    resultChoices.innerText = `You both chose ${playersChoice}`;
    resultText.innerText = "it's a draw!";
    console.info(`You both chose ${playersChoice}!  It's a draw!`);
  }
  if (result === "win") {
    resultChoices.innerText = `Your ${playersChoice} beats ${computersChoice}`;
    resultText.innerText = "you score!";
    console.info(`${playersChoice} beats ${computersChoice}! You score!`);
  }
  if (result === "lose") {
    resultChoices.innerText = `Your ${playersChoice} loses to  ${computersChoice}`;
    resultText.innerText = "AI scores.";
    console.info(`${playersChoice} loses to ${computersChoice}! AI scores!`);
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
    .fadeOut(750)
    .promise()
    .done(function () {
      $("#No2")
        .removeClass("hidden")
        .fadeOut(750)
        .promise()
        .done(function () {
          $("#No1")
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
