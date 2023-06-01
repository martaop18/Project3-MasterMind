// GAME BOARD-GETTING THE ARRAY WITH THE SELECTED COLORS

const setColors = () => {
  const span1 = document.getElementById("1");
  const span2 = document.getElementById("2");
  const span3 = document.getElementById("3");
  const span4 = document.getElementById("4");

const arrayColors = JSON.parse(sessionStorage.getItem("arrayColors"));

  if (arrayColors && arrayColors.length >= 4) {
    span1.style.backgroundColor = arrayColors[0];
    span2.style.backgroundColor = arrayColors[1];
    span3.style.backgroundColor = arrayColors[2];
    span4.style.backgroundColor = arrayColors[3];
  }
};

setColors();

// CREATING THE SECRET CODE--------

let secretCode = [];
let userColors = [];
let captureRandom = [];


const colorsRandom = () => {
  const arrayColors = [];
  for (let i=0; i<4; i++) {
    let randomIndex = Math.floor(Math.random()*arrayColors.length);
    secretCode.push(arrayColors[randomIndex]);
  }
}
colorsRandom();
console.log(secretCode);

