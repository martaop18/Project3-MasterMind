// GAME BOARD-GETTING THE ARRAY WITH THE SELECTED COLORS

const arrayColors = JSON.parse(sessionStorage.getItem("arrayColors"));
console.log("the selected colors are", arrayColors);

// DEFINING THE SECRET CODE
let secretCode = [];
const colorsRandom = () => {
  if (secretCode.length === 0) {
    for (let i = 0; i < 4; i++) {
      const randomColor =
        arrayColors[Math.floor(Math.random() * arrayColors.length)];
      secretCode.push(randomColor);
    }
  }
  console.log("the secret code is", secretCode);
  return secretCode;
};

colorsRandom();

// DEFINING CONSTANTS TO WORK FURTHER WITH THEM

const span1 = document.getElementById("1");
const span2 = document.getElementById("2");
const span3 = document.getElementById("3");
const span4 = document.getElementById("4");
const secretDiv1 = document.getElementById("codeColor1");
const secretDiv2 = document.getElementById("codeColor2");
const secretDiv3 = document.getElementById("codeColor3");
const secretDiv4 = document.getElementById("codeColor4");

// CONST TO SET COLORS ON THE BOARD

const setColors = () => {
  if (arrayColors && arrayColors.length >= 4) {
    span1.style.backgroundColor = arrayColors[0];
    span2.style.backgroundColor = arrayColors[1];
    span3.style.backgroundColor = arrayColors[2];
    span4.style.backgroundColor = arrayColors[3];
  }
};
setColors();

// DEFINING VARIABLES TO PRINT COLORS ON EACH ROW

let currentRow = 1;
let currentCol = 1;

const printColor = (color) => {
  const col = document.getElementById(`fila${currentRow}-${currentCol}`);
  col.style.backgroundColor = color;
  currentCol++;
  if (currentCol > 4) {
    currentCol = 1;
  }
};

// DEFINING CONSTANTS TO STORE COLORS ON THE BOARD
const saveColor = () => {
  span1.addEventListener("click", () => {
    const selectedColor1 = span1.style.backgroundColor;
    printColor(selectedColor1);
  });
  span2.addEventListener("click", () => {
    const selectedColor2 = span2.style.backgroundColor;
    printColor(selectedColor2);
  });
  span3.addEventListener("click", () => {
    const selectedColor3 = span3.style.backgroundColor;
    printColor(selectedColor3);
  });
  span4.addEventListener("click", () => {
    const selectedColor4 = span4.style.backgroundColor;
    printColor(selectedColor4);
  });
};
saveColor();

// DEFINING CONSTANT FOR ENDING LAST TURN
const nextRow = () => {
  let player = sessionStorage.getItem("user");

  currentRow++;
  if (currentRow > 10) {
    const loserMessage = document.getElementById("loserMessage");
    loserMessage.innerHTML = `
    <p>Sorry ${player}!😢. You haven't guessed the code.</p>
    <p>Wanna try more? Click on &ltmasterGame&gt</p>`;
    loserMessage.style.display = "block";
    $(loserMessage).slideDown();

    console.log("Sorry, try next time");
    return;
  }
  console.log(currentCol, "this  is the current col");
  console.log(currentRow, "this  is the current row");
  currentCol = 1;
};

// DEFINING CONSTANT TO CHECK COMBINATION

const checkCombination = () => {
  let player = sessionStorage.getItem("user");
  const col1 = document.getElementById(`fila${currentRow}-1`).style
    .backgroundColor;
  const col2 = document.getElementById(`fila${currentRow}-2`).style
    .backgroundColor;
  const col3 = document.getElementById(`fila${currentRow}-3`).style
    .backgroundColor;
  const col4 = document.getElementById(`fila${currentRow}-4`).style
    .backgroundColor;

  // ADDING FUNCTION TO CHANGE COLOR VALUE FROM RGB TO HEX

  function rgbToHex(rgb) {
    const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) {
      return rgb;
    }

    const hex =
      "#" +
      match
        .slice(1)
        .map((component) => parseInt(component).toString(16).padStart(2, "0"))
        .join("");
    return hex;
  }

  const col1ToHex = rgbToHex(col1);
  const col2ToHex = rgbToHex(col2);
  const col3ToHex = rgbToHex(col3);
  const col4ToHex = rgbToHex(col4);

  console.log(col1ToHex);
  console.log(col2ToHex);
  console.log(col3ToHex);
  console.log(col4ToHex);

  console.log("color 1-1", col1);
  console.log("color 1-2", col2);
  console.log("color 1-3", col3);
  console.log("color 1-4", col4);

  const dot1 = document.getElementById(`dot${currentRow}-1`);
  const dot2 = document.getElementById(`dot${currentRow}-2`);
  const dot3 = document.getElementById(`dot${currentRow}-3`);
  const dot4 = document.getElementById(`dot${currentRow}-4`);

  console.log("this is the secret code ", secretCode);

  // COMPARING ADDED COLORS WITH THE SECRET CODE AND CHECKING RED AND WHITE CLUES
  if (col1ToHex === secretCode[0]) {
    dot1.style.backgroundColor = "red";
  } else if (secretCode.includes(col1ToHex)) {
    dot1.style.backgroundColor = "white";
  } else {
    dot1.style.backgroundColor = "";
  }

  if (col2ToHex === secretCode[1]) {
    dot2.style.backgroundColor = "red";
  } else if (secretCode.includes(col2ToHex)) {
    dot2.style.backgroundColor = "white";
  } else {
    dot2.style.backgroundColor = "";
  }
  if (col3ToHex === secretCode[2]) {
    dot3.style.backgroundColor = "red";
  } else if (secretCode.includes(col3ToHex)) {
    dot3.style.backgroundColor = "white";
  } else {
    dot3.style.backgroundColor = "";
  }
  if (col4ToHex === secretCode[3]) {
    dot4.style.backgroundColor = "red";
  } else if (secretCode.includes(col4ToHex)) {
    dot4.style.backgroundColor = "white";
  } else {
    dot4.style.backgroundColor = "";
  }

  // SETTING WINNER CONDITION
  if (
    col1ToHex === secretCode[0] &&
    col2ToHex === secretCode[1] &&
    col3ToHex === secretCode[2] &&
    col4ToHex === secretCode[3]
  ) {
    const winnerMessage = document.getElementById("winnerMessage");
    winnerMessage.innerHTML = `
  <p>🥳 Well done ${player}! You've guessed the code!🎉</p>
  <p>Wanna try more? Click on &ltmasterGame&gt</p>`;
    winnerMessage.style.display = "block";
    $(winnerMessage).slideDown();

    console.log("well done you have guessed the code!");

    const setColorCode = () => {
      if (arrayColors && arrayColors.length >= 4) {
        secretDiv1.style.backgroundColor = col1;
        secretDiv2.style.backgroundColor = col2;
        secretDiv3.style.backgroundColor = col3;
        secretDiv4.style.backgroundColor = col4;
      }
    };
    setColorCode();
  } else {
    console.log("colors are not the same");
    nextRow();
  }
};
// CHECKING EACH ROW FUNCTION, SETTING CONDITION FOR CONTINUING CLICKING
const checkButton = document.getElementById("check");

checkButton.addEventListener("click", () => {
  const col1 = document.getElementById(`fila${currentRow}-1`).style
    .backgroundColor;
  const col2 = document.getElementById(`fila${currentRow}-2`).style
    .backgroundColor;
  const col3 = document.getElementById(`fila${currentRow}-3`).style
    .backgroundColor;
  const col4 = document.getElementById(`fila${currentRow}-4`).style
    .backgroundColor;

  if (!col1 || !col2 || !col3 || !col4) {
    return;
  } else {
    checkCombination();
  }
});
