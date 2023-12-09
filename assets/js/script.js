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

// game rules object with win/lose combos. Compare user & Ai weapons //
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

// TESTS computer randomising a selection
console.info("Computer chooses: ", computersChoice);

// hide countdown timer circles section, show games results section //

// show new scores tally in scores section //

// event listener: play again  //
