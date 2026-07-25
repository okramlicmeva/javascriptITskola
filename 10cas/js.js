//napravimo niz sa listom gradova, te gradove da napravimo u options forme.
//probaj prvo sam *bravo*
// onda guglaj nacin resenja
// ako i to ode u tri lepe, onda chatgpt

let realEstates = [
    {
        city:"Beograd",
        option: "Garsonjera",
        type: "Stanovi",
        price:48200,
        size: 25,
    },
    {
        city:"Novi Sad",
        option: null,
        type: "Kuca",
        price: 120000,
        size: 85,
    },
      {
        city: "Sarajevo",
        option: "Trosoban stan",
        type: "Stanovi",
        price: 135000,
        size: 78,
    },
     {
        city: "Zagreb",
        option: "Dvoiposoban stan",
        type: "Stanovi",
        price: 185000,
        size: 66,
    },
     {
        city: "Podgorica",
        option: "Cetvorosoban stan",
        type: "Stanovi",
        price: 240000,
        size: 118,
    },
      {
        city: "Zagreb",
        option: "Jednoiposoban stan",
        type: "Stanovi",
        price: 142000,
        size: 48,
    },
     {
        city: "Subotica",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: 67000,
        size: 54,
    }
]

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
];


let estateCities;
let estateOptions;
let estateTypes;
let estatePrice;
let estateSize; 

for (let estate of realEstates) {
    
    estatecities = estate.city;
    estateOptions = estate.option;
    estateTypes = estate.type;
    estatePrice = estate.price;
    estateSize = estate.size;

}

let options = document.querySelector(".citySelector");
let type = document.querySelector(".typeSelector");
let nor = document.querySelector(".roomSelector");


//dodali smo gradove
for (grad of gradovi) {
    let option = document.createElement("option");
    option.innerText = grad;
    option.classList = "selectedcity";
    options.appendChild(option)
}

// dodali smo tipove
for (tip of tipovi) {
    let typeSelector = document.createElement("option");

    typeSelector.innerHTML = tip;
    type.appendChild(typeSelector);
}

//dodali smo sobe
for (sobe of brojsoba) {
    let roomSelector = document.createElement("option");
    roomSelector.textContent = sobe;
    nor.appendChild(roomSelector);
}


let cityChange = null;
let numberOfRoomsChange = null; 
let typeChange = null; 

let gradic = document.querySelector(".citySelector");
gradic.addEventListener("change", function(e) {
    cityChange = e.currentTarget.value;

        event.preventDefault();


    let allestates = document.getElementsByClassName("svaki");
   

     for (let reales of allestates) {
       // console.log(realEstate.querySelector(".city")); //ovo nisam imao veze da je moguce
       
         let estatecity = reales.querySelector(".city");
         
         
         if (estatecity.textContent === cityChange) {
            console.log(reales);
           //10.08
         }
    
    }
})


type.addEventListener("change", function(t) {
    
    typeChange = t.currentTarget.value;
})


nor.addEventListener("change", function(b) {
   
    numberOfRoomsChange = b.currentTarget.value;
 
})


//komentar stavljen da se sacuva, stari kod iz dom1
// let dugme = document.querySelector("#button")
// dugme.addEventListener("click", function() {
   
//     console.log("Izabrali ste: " + cityChange, typeChange, numberOfRoomsChange)
//     event.preventDefault();
    
// })



/* ceo ovaj kodoko dugmeta -> pretraga brisemo, jer moze bolje */
// let dugme = document.querySelector("#button")
// dugme.addEventListener("click", function() {
   
// if (cityChange !== null) {
//     console.log("test")
// }


// if(typeChange !== null) {
//     console.log("test2")
// }

// if(numberOfRoomsChange !== null) {
//     console.log("test3")
// }


// event.preventDefault();

// })






/**
 * koja je pretraga?
 * da li je grad?
 * da li je tip?
 * da li je brojsoba?
 * 
 */


///sveza estates


let mainDiv = document.querySelector("#estates");


for (let estate of realEstates){
   // console.log(estate);
    let title = estate.city;
    //console.log(title);

    let options = estate.option;
    if (options === null) {
        options = "- -";
       // console.log(options)
    }
    let price = estate.price;
   // console.log(price)
    let size = estate.size;
    //console.log(size);

    let estateDivs = document.createElement("div");
    let helement = document.createElement("h1");
    let cena = document.createElement("p");
    let velicina = document.createElement("p");
    let opcija = document.createElement("p")
    
    helement.innerHTML = title;
    cena.innerHTML ="Cena: " + price;
    velicina.innerHTML = "Kvadratura: " + size;
    opcija.innerHTML = "Opcija :" + options;
    //console.log( helement, cena, velicina)


    estateDivs.appendChild(helement)
    estateDivs.appendChild(opcija);
    estateDivs.appendChild(cena);
    estateDivs.appendChild(velicina);
    mainDiv.appendChild(estateDivs);
   
    estateDivs.className = "svaki";
    helement.className = "city";
    cena.className = "cena";
    velicina.className = "velicina";
}

