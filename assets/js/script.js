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

const buttons = document.getElementsByClassName("game-btn");

/**
 * Event listener: asigns user weapon selection
 * depending on button clicked.
 * Console logs selection to test working as expected.
 */

for (const button of buttons) {
  button.addEventListener("click", (event) => {
    return (playersChoice = event.target.dataset.weapon);
  });
}

/**
 *
 * returns computer's random selection
 */
const getRandomWeapon = () => {
  const weaponNames = Object.keys(weapons);
  return weaponNames[Math.floor(Math.random() * weaponNames.length)];
};

var computersChoice = getRandomWeapon();
playersChoice = "";
console.info("Computer has chosen: ", computersChoice);
console.info("Player has chosen: ", playersChoice);

// Placeholder text for user weapon choice paragraph //
$(".game-btn").click(function () {
  $("#users-choice").text(`Your weapon = ${playersChoice}`);
});

// Compare user & Ai weapons //
function turnPoint(a, b) {
  if (a === b) {
    drawScore++;
  } else if (weapons[a].beats === computersChoice) {
    winScore++;
  } else (weapons[b].beats === playersChoice) {
    loseScore++;    
  };
};

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

// hide countdown timer circles section, show games results section //

// show new scores tally in scores section //

// event listener: play again  //
