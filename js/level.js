// SETTING  LEVELS EN SESSION STORAGE
console.log('level');

const keepB = ()=>{
    sessionStorage.setItem('level', 10);
    window.location.href = '../pages.colorB.html';
}

// GETTING THE LEVEL EN SESSION STORAGE
// let getLevel = sessionStorage.getItem('level');
// console.log('pick the level',  getLevel);