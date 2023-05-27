// SETTING  LEVELS EN SESSION STORAGE
console.log('level');

const keepB = () => {
    sessionStorage.setItem('level', 10);
    window.location.href = '../pages.colorB.html';
}

const keepA = () => {
    sessionStorage.setItem('level', 8);
    window.location.href = '../pages.colorA.html';
}
const keepE = () => {
    sessionStorage.setItem('level', 6);
    window.location.href = '../pages.colorE.html';
}

// GETTING THE LEVEL EN SESSION STORAGE
let getLevel = sessionStorage.getItem('level');
console.log('pick the level',  getLevel);