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

let dugme = document.querySelector("#button")
dugme.addEventListener("click", function() {
    console.log("test");
    event.preventDefault();
})

//npravi event listener na select / option kad izaberemo neki drugi

let gradic = document.querySelector(".svigradovi");
gradic.addEventListener("change", function(e) {
    let promena = e.currentTarget.value;
    console.log(promena);
})

//vezba 9.16 tu smo stali