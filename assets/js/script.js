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

/**
 * Takes eventListener data
 * Reassigns playersChoice with users selection
 */
function handleButtonClick(event) {
  playersChoice = event.target.dataset.weapon;
  game.turnNumber++;
  console.info(`Turn Number = ${game.turnNumber}`);
  computersChoice = getRandomWeapon();
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
 * @param {integer} a
 * @param {integer} b
 * @param {integer} c
 * Takes the win/lose/draw scores from game object.
 * If any = 3. Game over. New game.
 */
function bestOfThree(a, b, c) {
  if (a === 3 || b === 3 || c === 3) {
    console.log("GAME OVER. PLEASE REFRESH");
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
  editScores();
  bestOfThree(game.winScore, game.loseScore, game.drawScore);
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
    resultChoices.innerText = `Your ${playersChoice} beats ${computersChoice}!`;
    resultText.innerText = "you score!";
    console.info(`${playersChoice} beats ${computersChoice}! You score!`);
  }
  if (result === "lose") {
    resultChoices.innerText = `Your ${playersChoice} loses to  ${computersChoice}!`;
    resultText.innerText = "AI scores.";
    console.info(`${playersChoice} loses to ${computersChoice}! AI scores!`);
  }
  $("#continueButton").on("click", function () {
    $("#game-area").show();
    $("#next-turn").removeClass("hidden");
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

// show new scores tally in scores section //

// event listener: play again  //
