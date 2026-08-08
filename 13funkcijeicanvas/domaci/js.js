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
let numbers = 0; //posle gledanja resenja - nemam pojma zasto sam ja mislio da je ovo potrebno
canvas.addEventListener("click", racunaj);

function racunaj() {
    let b = numbers++;
    let rect = canvas.getBoundingClientRect()
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    clickPoints.push({x : x, y : y});
    console.log(b)
}





nacrtaj.addEventListener("click", primeni);

function primeni() {
console.log(numbers); // radi
    if (clickPoints.length >= numbers){
        console.log(numbers); // radi
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
numbers = 0; // mora da pocnemo od nule, u suprotnom nastavlja da broji u beskonacno.. (ovo mu dodje kao limiter)
// ali je nepotrebno....
// ne razumem zasto je moja logika pogresna, i zasto sam ocigledno pokusao da iskomplikumem stvari ovde..  
// moja vizija je bila - ok imam jedan event listener koji broji svaki klik
// taj klik treba da primeni u funkciji primeni -> kako ne bih menjao kod tj da bi if naastavio da radi, jer ima svoj limitr prema broju klikova
// i onda na kraju reset dugme koje resetuje.. 
// ovo me malo obeshrabljuje.. 
//  STA SAM POGRESNO URADIO I ZASTO?
// SVE RADI - ALI OCIGLEDNO NE ONAKO KAKO SAM ZAMISLIO? 
}
}

resetuj.addEventListener("click", reset);

function reset() {
    //clickPoints = []; // mislio sam da ce ovo sve izbrisati i resetovati. 
   canvasLine.reset(); // morao sam da nadjem, nisam imao blage veze
    console.log("sam te resetgovao?");
    
}



//domaci 13.20
// dodaj dugme koje ce da ti nacrta kad zavrsis sveukupno kliktanje - event listenr na canvas da broji klikove? novi? valjda?
// dodaj dugme koji ce da clean-uje sve - u sustini po mom mislsjenju clickPoints = [] se desi kad kliknes dugme reset..  sto znaci clickpoints je event listener sa funkcijom?hmmm
// opet sam zeznuo github - mora da sam ekstermno glup-hub 





