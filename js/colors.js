
console.log('colors');

// CONST FOR SCREEN COLORS
const myColors = ['#19A7CE','#F97B22','#00FFCA', '#F9F54B','#AD7BE9','#FF55BB'];
console.log(myColors);


//  PRINTING COLORS ON SCREEN

const colorPicker = (xId, yId) => {
    let colorPickerInput = document.getElementById(xId);
    let colorBoard = document.getElementById(yId);


    colorPickerInput.oninput = () => {
        colorBoard.style.backgroundColor = colorPickerInput.value;
    }
}

 colorPicker ('cPblue','blueColor');
 colorPicker ('cPorange','orangeColor');
 colorPicker ('cPgreen','greenColor');
 colorPicker ('cPyellow','yellowColor');
 colorPicker ('cPpurple','purpleColor');
 colorPicker ('cPpink','pinkColor');



 
// SAVING COLORS ON SCREEN 

const saveColors = () => {
    const colors = document.getElementsByClassName('pickedColor');
    const selectedColor = [];

Array.from(colors).forEach(color =>{
    const setBackG = color.style.backgroundColor;
    selectedColor.push(setBackG);
});
 sessionStorage.setItem('selectedColor', JSON.stringify(selectedColor));

}