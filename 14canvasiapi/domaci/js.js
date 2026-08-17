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
let tekst = document.getElementById("text");
let canvasLine = canvas.getContext("2d");
let numbers = 0; //posle gledanja resenja - nemam pojma zasto sam ja mislio da je ovo potrebno
let randomGenNum;
let randomcolor;
let click = 0;
let c;
canvas.addEventListener("click", racunaj);

function racunaj() {
    numbers++;
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    clickPoints.push({x : x, y : y});
    
}





nacrtaj.addEventListener("click", primeni);

function primeni() {
    click++
//console.log(numbers); // radi
    if (clickPoints.length >= numbers){
        //console.log(numbers); // radi
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


function randomColorGenerator() {
 randomGenNumOne = Math.round(Math.random() * 1000);
 randomGenNumTwo = Math.round(Math.random() * 1000);
 randomGenNumThree = Math.round(Math.random() * 1000);

 if (randomGenNumOne > 256) {
    randomGenNumOne = Math.round(randomGenNumOne / 4);
    randomGenNumOne = Math.round(randomGenNumOne)
    console.log(randomGenNumOne)
 }

  if (randomGenNumTwo > 256) {
    randomGenNumTwo = Math.round(randomGenNumOne / 4);
    randomGenNumTwo = Math.round(randomGenNumTwo)
    console.log(randomGenNumTwo)
 }

  if (randomGenNumThree > 256) {
    randomGenNumThree = randomGenNumThree / 4;
    randomGenNumThree = Math.round(randomGenNumThree)
    console.log(randomGenNumThree)
 }
randomcolor = "rgb("+(randomGenNumOne + "," + randomGenNumTwo + "," + randomGenNumThree) + ")";
canvasLine.strokeStyle = randomcolor;

console.log(randomcolor);

}
canvasLine.stroke();
randomColorGenerator();


clickPoints = [];
numbers = 0;

let a = document.getElementsByClassName(".brojLinije")
let b = document.getElementsByClassName(".bojaLinije")

a = click ;
b = randomcolor;
console.log(a);
console.log(b)

c = document.createElement("p");
c.textContent += "Linija je broj " + a + "," + "a boja linije je " + b; 
text.append(c);
}
}

resetuj.addEventListener("click", reset);

function reset() {
   
   canvasLine.reset(); 
  click = 0;
    c.textContent = "";
    text.append(c);
}



//domaci 13.20
// dodaj dugme koje ce da ti nacrta kad zavrsis sveukupno kliktanje - event listenr na canvas da broji klikove? novi? valjda?
// dodaj dugme koji ce da clean-uje sve - u sustini po mom mislsjenju clickPoints = [] se desi kad kliknes dugme reset..  sto znaci clickpoints je event listener sa funkcijom?hmmm
// opet sam zeznuo github - mora da sam ekstermno glup-hub 




