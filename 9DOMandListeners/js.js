//napravimo niz sa listom gradova, te gradove da napravimo u options forme.
//probaj prvo sam *bravo*
// onda guglaj nacin resenja
// ako i to ode u tri lepe, onda chatgpt


let gradovi = [
    "Beograd",
    "Subotica",
    "Sarajevo",
    "Novi Sad",
    "Podgorica",
    "Zagreb"
]

let tipovi = [
    "Stanovi",
    "Kuce",
    "Poslovni Prostor",
    "Placevi",
    "Garaze/parking"
]

let brojsoba = [
    "garsonjera",
    "Jednosoban stan",
    "Jednoiposoban stan",
    "Dvosoban stan",
    "Dvoiposoban stan",
    "Trosoban stan",
    "Troiposoban stan",
    "Cetvorosoban stan",
    "4.5 stan i vise soba"
]


let realestates = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]


let options = document.querySelector(".svigradovi")



for (grad of gradovi) {
    let option = document.createElement("option");
    option.innerText = grad;
    option.classList = "izabranigrad";
    options.appendChild(option)
}

let type = document.querySelector(".tip");
let nor = document.querySelector(".brojsoba");


for (tip of tipovi) {
    let addtip = document.createElement("option");

    addtip.innerHTML = tip;
    type.appendChild(addtip);
}

for (sobe of brojsoba) {
    let dodajvrstu = document.createElement("option");
    dodajvrstu.textContent = sobe;
    nor.appendChild(dodajvrstu);
}


//dodajemo eventlistener
// javna / globalna varijabla - radi svuda
// ona unutar funkcije radi samo u funkciji 
//valjda je to resenjje ovoga 
// bravo smekeru imas kefala - barem malo... 
let promena;


//npravi event listener na select / option kad izaberemo neki drugi

let gradic = document.querySelector(".svigradovi");
gradic.addEventListener("change", function(e) {
    promena = e.currentTarget.value;
        event.preventDefault();
})

//vezba 9.16 tu smo stali


//vezba 9.18 odradi isto sto si i za 9.16 samo druga polja


//globalne
let brojsobica; //za broj soba
let tipici; //za tip oglasa

//uzeli smo dropdown-e vec 
/***
 * let type = document.querySelector(".tip");
let nor = document.querySelector(".brojsoba");
 */

type.addEventListener("change", function(t) {
    
    tipici = t.currentTarget.value;
})


nor.addEventListener("change", function(b) {
   
    brojsobica = b.currentTarget.value;
})


//updatujemo button da postuje sve sto smo izabrali

let dugme = document.querySelector("#button")
dugme.addEventListener("click", function() {
   
    console.log("Izabrali ste: " + promena, tipici, brojsobica)
    event.preventDefault();
    
})
