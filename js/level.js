// SETTING  LEVEL EN SESSION STORAGE
console.log('level');

const levelB = () => {
    sessionStorage.getItem(pickedColors);
    window.location.href = '../pages.level.html';
}

