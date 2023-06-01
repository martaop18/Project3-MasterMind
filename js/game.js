
// GAME BOARD

const setColors = () => {
    const span1 = document.getElementById("1");
    const span2 = document.getElementById("2");
    const span3 = document.getElementById("3");
    const span4 = document.getElementById("4");



    const arrayColores = JSON.parse(sessionStorage.getItem("arrayColores"));

    if (arrayColores && arrayColores.length >=4) {
        span1.style.backgroundColor = arrayColores[0];
        span2.style.backgroundColor = arrayColores[1];
        span3.style.backgroundColor = arrayColores[2];
        span4.style.backgroundColor = arrayColores[3];
    }
}

setColors();


