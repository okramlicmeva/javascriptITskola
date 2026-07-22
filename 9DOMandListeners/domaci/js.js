let realEstates = [
    {
        city:"Beograd",
        option: "Garsonjera",
        type: "Stan",
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
        type: "Stan",
        price: 135000,
        size: 78,
    },
     {
        city: "Zagreb",
        option: "Dvoiposoban stan",
        type: "Stan",
        price: 185000,
        size: 66,
    },
     {
        city: "Podgorica",
        option: "Cetvorosoban stan",
        type: "Stan",
        price: 240000,
        size: 118,
    },
      {
        city: "Zagreb",
        option: "Jednoiposoban stan",
        type: "Stan",
        price: 142000,
        size: 48,
    },
     {
        city: "Subotica",
        option: "Dvosoban stan",
        type: "Stan",
        price: 67000,
        size: 54,
    },

      {
        city: "Novi Pazar",
        option: "Dvosoban stan",
        type: "Stan",
        price: 67000,
        size: 54,
    }
]


let mainDiv = document.querySelector("#estates");
console.log(mainDiv);

for (let estate of realEstates){
   // console.log(estate);
    let title = estate.type + " " + estate.city;
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
    helement.className = "typecity";
    cena.className = "cena";
    velicina.className = "velicina";
}



