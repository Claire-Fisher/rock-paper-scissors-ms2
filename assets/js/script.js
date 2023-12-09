// Test to check javascipt loading and connected correctly.
console.log("Js connected properly");

/**
 * Event listener: asigns user weapon selection
 * depending on button clicked.
 * Console logs selection to test working as expected.
 */
const buttons = document.getElementsByClassName("game-btn");

for (button of buttons) {
  button.addEventListener("click", (event) => {
    const playersChoice = event.target.dataset.weapon;
    console.log(playersChoice);
  });
}

// hide game main section, show countdown timer circles //

// function randomise Ai weapon choice //

// game rules object with win/lose combos. Compare user & Ai weapons //
const weapons = [
  { name: "rock", beats: "scissors" },
  { name: "scissors", beats: "paper" },
  { name: "paper", beats: "rock" },
];

// hide countdown timer circles section, show games results section //

// show new scores tally in scores section //

// event listener: play again  //
