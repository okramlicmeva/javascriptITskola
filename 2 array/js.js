let products = ["hleb", "mleko", "jogurt"]; // liste, jedan array je jedna lista
console.log(products);
//uvek se krece od nule, 0 je hleb
console.log(products, products[1]);
console.log(products[5]); // podatak nije definisan, imamo listu, da dodjemo do 5, njega nema i zato kaze undefined

//vezba, nemam novine u products, zelim da dodam novu stavku

products.push("novine");
console.log(products);

products.shift();
console.log(products);

products.splice(0, 1);
console.log(products);


let prices = [22.5, 12, 99, 85];

let cars = ["bMW", "AUDI", "MERCEDES"]
console.log(cars);

cars[0] = "Zastava";
console.log(cars);

cars.sort(); // po defaultu sortira alfabetski
console.log(cars);

// objekt = set kljuceva i njihovih vrednosti;
let personalID = {
    name: "Marko",
    lastName: "Malevic",
    dob: "01/01/1995",
    country: "Serba",
    address: "Smm 20a",
    hobbies: ["3dstampa", "putovanja", "setnja", "gitara"]
};

console.log(personalID.name);

//vezba -> dodaj visinu od xy centimetara, ali da se doda uz neku metodu, a ne rucno
personalID["height"] = "195.5cm";
console.log(personalID);

personalID.municipality = "Rakovica";
console.log(personalID);


//vezba ispisi moj prvi hobi
console.log(personalID.hobbies[0]);

//vezba uz pomoc objekta sastavi novu varijablu i da se ispise -> "ime" has gone "hobby"

let status = personalID.name + " je otisao u " + personalID.hobbies[2];
console.log(status);
