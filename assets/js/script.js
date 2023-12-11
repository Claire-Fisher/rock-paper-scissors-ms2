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

/**
 * Event listener: asigns user weapon selection
 * depending on button clicked.
 * Console logs selection to test working as expected.
 */
const buttons = document.getElementsByClassName("game-btn");
var playersChoice = "";
for (button of buttons) {
  button.addEventListener("click", (event) => {
    playersChoice = event.target.dataset.weapon;
    console.info("Player has chosen: ", playersChoice);
    return playersChoice;
  });
}

// Placeholder text for user weapon choice paragraph //
$(".game-btn").click(function () {
  $("#users-choice").text(`Your weapon = ${playersChoice}`);
});

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
});

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

/**
 *
 * @returns computer's random selection
 */
const getRandomWeapon = () => {
  const weaponNames = Object.keys(weapons);
  return weaponNames[Math.floor(Math.random() * weaponNames.length)];
};

const computersChoice = getRandomWeapon();

// Compare user & Ai weapons //

turnOutcome(playersChoice, computersChoice);

// TESTS computer randomising a selection
console.info("Computer chooses: ", computersChoice);

// hide countdown timer circles section, show games results section //

// show new scores tally in scores section //

// event listener: play again  //
