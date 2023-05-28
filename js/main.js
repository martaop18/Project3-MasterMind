
// SESSION STORAGE PLAYER

const savePlayer = ()=>{
    let player = document.getElementById('playerName').value;

    sessionStorage.setItem('user', player);
    window.location.href = "../pages/gameOver.html"
    
}





