let box = document.querySelector(".box");
let x = document.querySelector(".offset-x");
let y = document.querySelector(".offset-y");
let radius = document.querySelector(".blur-radius");
let spread = document.querySelector(".blur-spread");
let color = document.querySelector(".color");
let cssValue = document.querySelector(".css-value");

const updateBoxShadow = function () {
  let value = `${x.value}px ${y.value}px ${radius.value}px ${spread.value}px ${color.value}`;
  cssValue.value = value;
  box.style.boxShadow = value;
};

[x, y, radius, spread, color].forEach((element) => {
  element.oninput = updateBoxShadow;
});

updateBoxShadow();
