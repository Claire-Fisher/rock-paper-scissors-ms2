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
const buttons = document.getElementsByClassName("game-btn");

/**
 * Takes eventListener data
 * Reassigns playersChoice with users selection
 */
function handleButtonClick(event) {
  playersChoice = event.target.dataset.weapon;
  game.turnNumber++;
  console.info(`Turn Number = ${game.turnNumber}`);
  rollCountdown();
  updateChoices();
}

// Event listener for user weapon selection
for (const button of buttons) {
  button.addEventListener("click", handleButtonClick);
}

/**
 *
 * returns computer's random selection
 */
const getRandomWeapon = () => {
  const weaponNames = Object.keys(weapons);
  return weaponNames[Math.floor(Math.random() * weaponNames.length)];
};

function updateChoices() {
  console.info("Computer has chosen: ", computersChoice);
  console.info("Player has chosen: ", playersChoice);
  $("#users-choice").text(`Your weapon = ${playersChoice}`);
}

let computersChoice = getRandomWeapon();

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
  $("#next-turn").removeClass("hidden");
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
  editScores();
}

/**
 *
 * @param {string} result
 * Take the result of turnPoint()
 * Edits innerText of Turn Results area to display outcome to the user.
 */
function resultAnnouncement(result) {
  var resultChoices = document.getElementById("turnResultChoices");
  var resultText = document.getElementById("turnResultText");

  if (result === "draw") {
    resultChoices.innerText = `You both chose ${playersChoice}!`;
    resultText.innerText = "it's a draw!";
    console.info(`You both chose ${playersChoice}!  It's a draw!`);
  }
  if (result === "win") {
    resultChoices.innerText = `${playersChoice} beats ${computersChoice}!`;
    resultText.innerText = "you score!";
    console.info(`${playersChoice} beats ${computersChoice}! You score!`);
  }
  if (result === "lose") {
    resultChoices.innerText = `${playersChoice} loses to  ${computersChoice}!`;
    resultText.innerText = "AI scores.";
    console.info(`${playersChoice} loses to ${computersChoice}! AI scores!`);
  }
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
    .fadeOut(1000)
    .promise()
    .done(function () {
      $("#No2")
        .removeClass("hidden")
        .fadeOut(1000)
        .promise()
        .done(function () {
          $("#No1")
            .removeClass("hidden")
            .fadeOut(1000)
            .promise()
            .done(function () {
              $("#turnResultArea").removeClass("hidden");
              resultAnnouncement();
              $("#next-turn").removeClass("hidden");
              $("#game-area").show();
              turnPoint(playersChoice, computersChoice);
            });
        });
    });
}

// show new scores tally in scores section //

// event listener: play again  //
