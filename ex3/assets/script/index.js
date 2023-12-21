// Elementos del DOM

const div1 = document.getElementById("one");
const div2 = document.getElementById("two");
const div3 = document.getElementById("three");
const div4 = document.getElementById("four");
const divKey = document.getElementById("key");

// Variables

const changeBackgroundColor = (event) => {
    event.target.style.backgroundColor = "black";
  };

    div1.addEventListener("click", changeBackgroundColor)
    div2.addEventListener("click", changeBackgroundColor)
    div3.addEventListener("click", changeBackgroundColor)
    div4.addEventListener("click", changeBackgroundColor)

// Funciones

function applyStyle(elemento, color, width = "200px", height = "200px", margin = "20px") {
    elemento.style.backgroundColor = color;
    elemento.style.width = width;
    elemento.style.height = height;
    elemento.style.margin = margin;
  }
  
    applyStyle(div1, "yellow");
    applyStyle(div2, "blue");
    applyStyle(div3, "red");
    applyStyle(div4, "green");
    applyStyle(divKey, "white");
    divKey.style.border = "solid 1px black";

    function creatingDiv(color) {
        const newDiv = document.createElement("div");
        newDiv.style.width = "200px";
        newDiv.style.height = "200px";
        newDiv.style.margin = "20px";
        newDiv.style.backgroundColor = color;
      
        document.body.appendChild(newDiv);
      }

// Eventos

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        divKey.style.backgroundColor = "pink";
      } else if (event.key === 's') {
        divKey.style.backgroundColor = "orange";
      } else if (event.key === 'd') {
        divKey.style.backgroundColor = "skyblue";
      } else if (event.key === 'q') {
        creatingDiv("purple");
      } else if (event.key === 'w') {
        creatingDiv("gray");
      } else if (event.key === 'e') {
        creatingDiv("brown");
      }
    });

