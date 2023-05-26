
// SESSION STORAGE

const savePlayer = ()=>{
    let player = document.getElementById('playerName').value;

    sessionStorage.setItem('user', player);
    window.location.href = "../pages/gameOver.html"
}

// START THE GAME
// DEFINING CONSTANS AND VARIABLES FOR COLOR PICKER










// // RANDOM COLOR CREATION-EXPERT LEVEL

// let secretCodeExpert = [];
// const randomColorsE = ["blue", "orange", "green", "purple", "pink","yellow"];


// for (i=0; i<4; i++){
//     secretCodeExpert.push(randomColorsE[Math.floor(Math.random()*6)]);
//     console.log(secretCodeExpert);
// }
// // RANDOM COLOR CREATION-ADVANCED LEVEL

// let secretCodeAdvanced = [];
// const randomColorsA = ["blue", "orange", "green", "purple", "pink"];


// for (i=0; i<4; i++){
//     secretCodeAdvanced.push(randomColorsA[Math.floor(Math.random()*5)]);
//     console.log(secretCodeAdvanced);
// }
// // RANDOM COLOR CREATION-BEGINNER LEVEL

// let secretCodeBeginner = [];
// const randomColorsB = ["blue", "orange", "green", "purple"];


// for (i=0; i<4; i++){
//     secretCodeBeginner.push(randomColorsB[Math.floor(Math.random()*4)]);
//     console.log(secretCodeBeginner);
// }


// TO SHOW SECRET CODE COLORS FUNCTION





