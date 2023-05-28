// START THE GAME
// DEFINING CONSTANS AND VARIABLES FOR THE  BEGGINER LEVEL GAME

const myColors = ['#19A7CE','#F97B22','#00FFCA', '#F9F54B',];
const selectedColor= [];
let secretCode = [];
let staying = [];
let rowCounter = 1;
let colCounter = 1;
let winner = false;

// DEFINING ROW CLASS AND ITS METHODS
class Row  {
    constructor (){
        this.turn = false;
        this.spaces = [];
    }
}

// / DEFINING ROW INSTANCES
const row1 = new Row();
const row2 = new Row();
const row3 = new Row();
const row4 = new Row();
const row5 = new Row();
const row6 = new Row();
const row7 = new Row();
const row8 = new Row();
const row9 = new Row();
const row10 = new Row();


// / DEFINING THE SECRET CODING FUNCTION
for(i = 0; i<4; i++){
    secretCode.push(myColors[Math.floor(Math.random()*4)]);
}

// / SHOWING RANDOM COLORS ON SCREEN
function bGcolor(e,c){
    $(`${e}`).css('background-color', `${c}`);
}

// USING SPREAD OPERATOR TO COPY THE SECRET CODE

let secretCode2 = [...secretCode];
// console.log(secretCode2);


function checkRow(array1, row, next, last){
// CHECKING IF THE ANSWER IS CORRECT === SAME AS SECRET CODE

    if(array1.join('') === secretCode.join('')){
        winner = true;
    // SETTING WINNER MESSAGE

        $('.secretCode > span').slideDown();
        $('.header').text('wellDoneChampion!').css('color','white');
        for(i = 0; i<array1.length; i++) {
            $(`.rows${row} > .dot${counter2}`).css('background-color', 'black');
            
        }
    } else{

    }
}

// CHECKING ROWS IN THE GAME

row10.turn = true;
$('.bottom2 > span')