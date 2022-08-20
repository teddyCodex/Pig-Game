let scores,
  roundScore,
  activePlayer,
  dice,
  diceBtn,
  newGameBtn,
  holdBtn,
  gameActive;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
diceBtn = document.querySelector(".btn--roll");
newGameBtn = document.querySelector(".btn--new");
holdBtn = document.querySelector(".btn--hold");
gameActive = false;

init();

function init() {
  document.getElementById("score--0").innerHTML = 0;
  document.getElementById("score--1").innerHTML = 0;
  document.getElementById("current--0").innerHTML = 0;
  document.getElementById("current--1").innerHTML = 0;
  document.querySelector(".dice").style.display = "none";
  gameActive = true;
}

// Event listener for the New Game Button
newGameBtn.addEventListener("click", init);
// End of Event listener for the new game button

// Event Listener for the Roll Dice Button
diceBtn.addEventListener("click", function () {
  if (gameActive === true) {
    // generate a random number between 1 and 6
    dice = Math.floor(Math.random() * 6) + 1;

    // display result of dice roll for active player
    let diceImage = document.querySelector(".dice");
    diceImage.style.display = "block";
    diceImage.src = "dice-" + dice + ".png";

    // update roundScore for current player where dice roll is not 1.
    roundScore += dice;
    if (dice !== 1) {
      document.getElementById("current--" + activePlayer).innerHTML =
        roundScore;
    } else {
      roundScore = 0;
      document.getElementById("current--" + activePlayer).innerHTML = 0;
      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }
      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");
      alert("Turn Lost. Next Player!");
    }
  }
});
// End of Event Listener for the Roll Dice Button

// Event Listener for the Hold Button
holdBtn.addEventListener("click", function () {
  scores[activePlayer] += roundScore;
  document.getElementById(`score--${activePlayer}`).innerHTML =
    scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    gameActive = false;
    document
      .querySelector(".player--" + activePlayer)
      .classList.add("player--winner");
    document.getElementById(`name--${activePlayer}`).innerHTML = "Winner!!!";
  } else {
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
  }
  roundScore = 0;

  console.log(scores);
});

// function nextPlayer() {
//   if (activePlayer === 0) {
//     activePlayer = 1;
//   } else {
//     activePlayer = 0;
//   }
//   document.querySelector(".player--0").classList.toggle("player--active");
//   document.querySelector(".player--1").classList.toggle("player--active");
//   console.log(scores);
// }
