// let button = document.getElementById("clickMe");
// let buttonTwo = document.getElementById("clickMeTwo");

// button.addEventListener('click', clickEvent) //anonimna funkcija -> funkcija samo za ovaj kod
// buttonTwo.addEventListener("click", clickEvent);

// function clickEvent(){
//     console.log("test klik event");
// } //custom funkcija -> koju pozivamo negde drugde (kao sto smo to gore npr) 



//plan

/**
 * 1. napravi event listener za klik unutar kanvasa
 * 2. pratiti da li je prvi klik ili drugi klik, na treci klik resetujemo
 * 3. uzeti poziciju na ekranu (koordinate), 
 * 4. nacrtati liniju
 */



// x: koliko smo udaljeni od leve ivice ekrana
// clientX -=> gde smo mi kliknuli unutar kanvasa
let clickPoints = [];
let canvas = document.getElementById("drawArea");
let canvasLine = canvas.getContext("2d");
canvas.addEventListener("click", function(event){

let rect = canvas.getBoundingClientRect()

let x = event.clientX - rect.left;
let y = event.clientY - rect.top;


clickPoints.push({x : x, y : y});


if (clickPoints.length >= 5){

canvasLine.beginPath();
canvasLine.moveTo(clickPoints[0].x, clickPoints[0].y)
canvasLine.lineTo(clickPoints[1].x, clickPoints[1].y)
canvasLine.lineTo(clickPoints[2].x, clickPoints[2].y)
canvasLine.lineTo(clickPoints[3].x, clickPoints[3].y)
canvasLine.lineTo(clickPoints[4].x, clickPoints[4].y)
canvasLine.stroke();

    clickPoints = [];
}



})



//ako je klikpoints prazan -> znamo da je prvi klik
// ako je klipoints ima jedan upis -> znamo da je drugi klik
// ako vec ima dva upisa onda je to treci klik -> vreme da ga ispraznimo / restujemo





