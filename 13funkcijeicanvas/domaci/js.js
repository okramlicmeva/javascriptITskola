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
let nacrtaj = document.querySelector("#nacrtaj");
let resetuj = document.querySelector("#resetuj");
let canvasLine = canvas.getContext("2d");
let numbers = 0;
canvas.addEventListener("click", racunaj);

function racunaj() {
    numbers++;
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    clickPoints.push({x : x, y : y});
}

console.log(numbers);



nacrtaj.addEventListener("click", primeni);

function primeni() {

    if (clickPoints.length >= numbers){
    canvasLine.beginPath();
    canvasLine.moveTo(clickPoints[0].x, clickPoints[0].y)



    for (let cor in clickPoints){
        if (cor == 0){
            continue;

        }
    canvasLine.lineTo(clickPoints[cor].x, clickPoints[cor].y)
    canvasLine.lineTo(clickPoints[cor].x, clickPoints[cor].y)
    canvasLine.lineTo(clickPoints[cor].x, clickPoints[cor].y)
    canvasLine.lineTo(clickPoints[cor].x, clickPoints[cor].y)
}
canvasLine.stroke();
clickPoints = [];
numbers = 0; // mora da pocnemo od nule, da ne bi nastavio da crta od poslednje tacke gde je stao -> ako je to cilj, ima smisla i jedno i drugo. 
}
}

resetuj.addEventListener("click", reset);

function reset() {
    //clickPoints = []; // mislio sam da ce ovo sve izbrisati i resetovati. 
   canvasLine.reset(); // morao sam da nadjem, nisam imao blage veze
    console.log("sam te resetgovao?");
    
}



/*
canvas.addEventListener("click", function(event){

let rect = canvas.getBoundingClientRect()
let x = event.clientX - rect.left;
let y = event.clientY - rect.top;
console.log(numbers);

clickPoints.push({x : x, y : y});
console.log(clickPoints);

if (clickPoints.length >= numbers){

canvasLine.beginPath();
canvasLine.moveTo(clickPoints[0].x, clickPoints[0].y)



for (let cor in clickPoints){
    if (cor == 0){
        continue;

    }
    canvasLine.lineTo(clickPoints[cor].x, clickPoints[cor].y)
    canvasLine.lineTo(clickPoints[cor].x, clickPoints[cor].y)
    canvasLine.lineTo(clickPoints[cor].x, clickPoints[cor].y)
    canvasLine.lineTo(clickPoints[cor].x, clickPoints[cor].y)
}
canvasLine.stroke();

    clickPoints = [];
}

})

*/

//domaci 13.20
// dodaj dugme koje ce da ti nacrta kad zavrsis sveukupno kliktanje - event listenr na canvas da broji klikove? novi? valjda?
// dodaj dugme koji ce da clean-uje sve - u sustini po mom mislsjenju clickPoints = [] se desi kad kliknes dugme reset..  sto znaci clickpoints je event listener sa funkcijom?hmmm
// 





