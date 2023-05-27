
// DEFINING CONST FOR SCREEN COLORS
const myColors = ['#19A7CE','#F97B22','#00FFCA','#AD7BE9','#FF55BB','#F9F54B'];
console.log(myColors)

// SAVING COLORS ON SCREEN 

const saveColors = () => {
    const colors = document.getElementsByClassName ('pickedColor');
    const selectedColor = [];

Array.from(colors).forEach(color =>{
    const setBackG = color.style.backgroundColor;
    selectedColor.push(setBackG);
});
 sessionStorage.setItem('selectedColor', JSON.stringify(selectedColor));

}

 

// 