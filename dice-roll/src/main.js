function createDice(number) {
  const dotPositionMatrix = {
    1: [[50, 50]],
    2: [
      [20, 20],
      [80, 80],
    ],
    3: [
      [20, 20],
      [50, 50],
      [80, 80],
    ],
    4: [
      [20, 20],
      [20, 80],
      [80, 20],
      [80, 80],
    ],
    5: [
      [20, 20],
      [20, 80],
      [50, 50],
      [80, 20],
      [80, 80],
    ],
    6: [
      [20, 20],
      [20, 80],
      [50, 20],
      [50, 80],
      [80, 20],
      [80, 80],
    ],
  };

  const dice = document.createElement("div");
  dice.classList.add("dice");

  for (const dotPosition of dotPositionMatrix[number]) {
    const dot = document.createElement("div");
    dot.classList.add("dice-dot");
    dot.style.setProperty("--top", dotPosition[0] + "%");
    dot.style.setProperty("--left", dotPosition[1] + "%");
    dice.appendChild(dot);
  }

  return dice;
}

const randomDice = function (numberOfDice) {
  diceContainer.innerHTML = "";

  for (let i = 0; i < numberOfDice; i++) {
    const random = Math.floor(Math.random() * 6 + 1);
    const dice = createDice(random);
    diceContainer.appendChild(dice);
  }
};

const NUMBER_OF_DICE = 6;
const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");

randomDice(NUMBER_OF_DICE);

btnRollDice.addEventListener("click", function () {
  const interval = setInterval(() => {
    randomDice(NUMBER_OF_DICE);
  }, 50);
  setTimeout(() => {
    clearInterval(interval);
  }, 600);
});
