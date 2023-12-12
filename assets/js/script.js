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
 * Compares playersChoice with computersChoice
 * Changes score points depending on outcome
 */
function turnPoint(playersChoice, computersChoice) {
  if (playersChoice === computersChoice) {
    drawScore++;
  }
  if (weapons[playersChoice].beats === computersChoice) {
    winScore++;
  }
  if (weapons[computersChoice].beats === playersChoice) {
    loseScore++;
  }
  editScores();
}

// hide countdown timer circles section, show games results section //
function editScores() {
  document.getElementById("win-tally").innerText = game.winScore;
  document.getElementById("lose-tally").innerText = game.loseScore;
  document.getElementById("draw-tally").innerText = game.drawScore;
}

/**
 * Event: on weapon button click:
 * Hide game-area section.
 * Show game-countdown section
 */
$(".game-btn").click(function () {
  $("#game-area").hide();
  $("#game-countdown").removeClass("hidden");
  $("#No3").delay(500).fadeOut(500, 0);
  $("#No2").delay(1000).removeClass("hidden").delay(500).fadeOut(500, 0);
  $("#No1").delay(2000).removeClass("hidden").delay(500).fadeOut(500, 0);
  turnPoint(playersChoice, computersChoice);
});

// show new scores tally in scores section //

// event listener: play again  //
