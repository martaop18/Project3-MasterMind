// GAME BOARD-GETTING THE ARRAY WITH THE SELECTED COLORS

const arrayColors = JSON.parse(sessionStorage.getItem("arrayColors"));
console.log('Arraycolors', arrayColors)

// DEFINING THE SECRET CODE---------------------------------------
const colorsRandom = () => {
  let secretCode = [...arrayColors].sort(() => Math.random() -0.5)
  console.log('Secretcode', secretCode);
    }
  
  colorsRandom();

// DEFINING CONSTANTS TO WORK FURTHER WITH THEM---------------------

  const span1 = document.getElementById("1");
  const span2 = document.getElementById("2");
  const span3 = document.getElementById("3");
  const span4 = document.getElementById("4");
  const secretDiv1 = document.getElementById("codeColor1");
  const secretDiv2 = document.getElementById("codeColor2");
  const secretDiv3 = document.getElementById("codeColor3");
  const secretDiv4 = document.getElementById("codeColor4");
  
  // CONST TO SET COLORS ON THE BOARD---------------------------------  

  const setColors = () => {
  if (arrayColors && arrayColors.length >= 4) {
    span1.style.backgroundColor = arrayColors[0];
    span2.style.backgroundColor = arrayColors[1];
    span3.style.backgroundColor = arrayColors[2];
    span4.style.backgroundColor = arrayColors[3];
  }
};
setColors();

// DEFINING VARIABLES TO PRINT COLORS ON EACH ROW------------------------

let currentRow = 1;
let currentCol = 1;

const printColor = (color) => {
  const col = document.getElementById(`fila${currentRow}-${currentCol}`);
  col.style.backgroundColor = color;
  currentCol++;
  if (currentCol > 4){
    currentCol = 1;
  }
}

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
}
saveColor();

// DEFINING CONSTANT FOR ENDING LAST TURN
const nexRow = ()=>{
  currentRow++;
  if (currentRow > 10){
    console.log('sorry, try next time');
  }
console.log(currentCol, 'this  is the currect col')
console.log(currentRow, 'this  is the currect row')
currentCol = 1;
}

// DEFINING CONSTANT TO CHECK COMBINATION

const checkCombination = () => {
const col1 = document.getElementById(`fila${currentRow}-1`).style.backgroundColor;
const col2 = document.getElementById(`fila${currentRow}-2`).style.backgroundColor;
const col3 = document.getElementById(`fila${currentRow}-3`).style.backgroundColor;
const col4 = document.getElementById(`fila${currentRow}-4`).style.backgroundColor;
}

// ADDING FUNCTION TO CHANGE COLOR VALUE FROM RGB TO HEX (COPIED FROM STACK OVERFLOW)

function rgbToHex(rgb) {
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) {
    return rgb;
  }

  const hex = "#" + match.slice(1).map(component => parseInt(component).toString(16).padStart(2, '0')).join('');
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

console.log('color 1-1', col1);