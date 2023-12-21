// Elementos del DOM
const ele = document.getElementById("ele1");

// Variables
const pintar = (elemento, color = "green") => {
    elemento.style.backgroundColor = color
}

// Funciones

// Eventos

pintar(ele);

ele.addEventListener("click", function () {
    pintar(ele, 'yellow');
});