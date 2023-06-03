// GAME BOARD-GETTING THE ARRAY WITH THE SELECTED COLORS

const arrayColors = JSON.parse(sessionStorage.getItem("arrayColors"));
console.log('Arraycolors', arrayColors)

// DEFINING THE SECRET CODE--------


const colorsRandom = () => {
  let secretCode = [...arrayColors].sort(() => Math.random() -0.5)
  console.log('Secretcode', secretCode);
    }
  
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
  
  
  
  


  const setColors = () => {
  if (arrayColors && arrayColors.length >= 4) {
    span1.style.backgroundColor = arrayColors[0];
    span2.style.backgroundColor = arrayColors[1];
    span3.style.backgroundColor = arrayColors[2];
    span4.style.backgroundColor = arrayColors[3];
  }
};

setColors();


