

let mensaje = document.getElementById("mensaje");

let sesion = window.sessionStorage.getItem("player");

        mensaje.innerHTML = `Crack your mind ${sesion}`;
