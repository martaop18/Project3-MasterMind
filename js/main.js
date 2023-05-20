// RANDOM COLOR CREATION-EXPERT LEVEL

let secretCode = [];
const randomColors = ["blue", "orange", "green", "purple", "pink","yellow"]
console.log(randomColors.length)

for (i=0; i<4; i++){
    secretCode.push(randomColors[Math.floor(Math.random()*6)])
    console.log(secretCode)
}