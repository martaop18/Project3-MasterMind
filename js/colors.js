
// DEFINING CONST FOR SCREEN COLORS
const myColors = ['#19A7CE','#F97B22','#00FFCA','#AD7BE9','#FF55BB','#F9F54B'];

// DEFINING THE PICKER COLOR BOX
const colorBox = document.getElementById('colorOptions');

function accordingToLevel(total){
    for(let i = 1; i <= total; i++){
        const picker = document.createElement('input');
        picker.value = myColors[i-1];
        picker.type ='color';
        colorBox.appendChild(picker);
    }
}

// ADDING THE EVENT TO  PLAY BUTTON 

const pickColor = document.getElementsByClassName('pickColor');
pickColor.addEventlistener('click', ()=>{
    const  cPickers = Array.from(
        document.querySelectorAll('#colorOptions > input')
    );

    const finalColors = cPickers.map((picker) => picker.value);
    sessionStorage.setItem('finalColors', JSON.stringify(finalColors));
    window.Location = '../game.html'
});