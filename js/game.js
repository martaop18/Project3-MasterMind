// START THE GAME
// DEFINING CONSTANS AND VARIABLES FOR THE GAME

let arrayGanador = [];

//Funcion que genera la combinación ganadora.
const generaGanadora = () => {
  //De forma hardcodeada voy a inventarme los colores posibles...
  let coloresPosibles = [
    '#19A7CE',
    '#F97B22',
    '#00FFCA', 
    '#F9F54B',
    '#AD7BE9',
    '#FF55BB'
  ];

  for (let i = 0; i < 4; i++) {
    let posicionRandom = Math.floor(Math.random() * coloresPosibles.length);

    arrayGanador.push(coloresPosibles[posicionRandom]);
  }

  // console.log(coloresPosibles, "estos son los colores posibles...")
  // console.log(arrayGanador, "estos son los colores ganadores....")
};

generaGanadora();

let tablero = document.getElementById("board");

let dificultad = 10;
let contador = 1;

//Esta parte acaca de ser hardcodeada, es decir, arbitrariamente hemos
//decidido que tenga una dificultad de tipo fácil, dándole 10 líneas, naturalmente.

const compruebaGanadora = () => {
  //Hardcodeo la combinación por la que yo apuesto
  let combinacionQueJuega = ["naranja", "rosa", "verde", "verde"];
  let combinacionFiltrar = combinacionQueJuega;

  let blancas = 0;
  let negras = 0;

  console.log(combinacionFiltrar, " soy la que juega");
  console.log(arrayGanador, " soy la que gana...");

  for (let i = 0; i < arrayGanador.length; i++) {
    if (arrayGanador.includes(combinacionFiltrar[i])) {
      //El include saca la ficha blanca......

      //Pero antes de darle la ficha blanca, comprobamos si es negra....
      if (arrayGanador[i] === combinacionFiltrar[i]) {
        //Esto es para ver si tenemos la ficha negra....
        negras += 1;
        console.log("he ganado..... ", negras, " fichas negras");

        combinacionFiltrar.filter( quitamos => quitamos !== arrayGanador[i]);

        if (negras === 4) {
          //Hemos ganado la partida...entonces nos vamos a otro html...
          window.location.href = "../pages/winner.html";
        }
      } else {

        combinacionFiltrar.filter( quitamos => quitamos !== arrayGanador[i]);
        
        blancas += 1;
        console.log("tenemos ", blancas, " ficha blanca");
      }
    }
  }
};

const pintaBola = (numeroDeFila) => {
  console.log("has clickado en la fila.......", numeroDeFila);
};

const pintaTablero = () => {
  compruebaGanadora();

  //Al no haber ganado nadie, el código continúa por aquí debajo...

  if (dificultad > 1) {
    document.getElementById(`row${contador}`).removeAttribute("onclick");

    contador++;

    tablero.innerHTML += `<div id='row${contador}' class='row' onclick='pintaBola(${contador})'>${contador}</div>`;

    dificultad -= 1;
  } else {
    console.log("you died!");
  }
};



