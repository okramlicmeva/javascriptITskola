// let title = document.querySelector("#title");
// title.style.color = "red";


// let subtitle = document.querySelector(".subtitle")
// subtitle.style.color = "blue";


// let docs = document.getElementsByClassName("subtitle2");
// docs[0].style.color = "red";


// let products = document.querySelectorAll(".product");
// console.log(products);

// for (a in products) {
//tek u 8.6 se objasnjava zasto je "undifiend", error koji se pojavljuje u konzoli. 
//     products[a].style.color = "red";

// dakle postoji razlika izmedju in (u) i of (od) prozivoda,  of se ne vezuje za niz,
// on zapravo direktno izvlaci element izabrani iz div-a i boji ga ili menja na osnovu input-a,
// tako da ne treba da stoji products[product].style.color = "red", nema potrebe, jer nije vezan za niz
// tako da uzimas ono sto izvlacis i njega menjas product.style.color = red, jer se direktno 
// na njega vezuje. 



// }

// for (i = 0; i < products.length; i++) {
//     products[i].style.color = "pink";
//     console.log(products[i]);
// }



// for (let product of products) {
//     console.log(product);
//     product.style.color = "#878a88";



// }

//vezba 2 - promeniti da postojeca petlja menja boju u recimo tamno sivo (slova), 
// pored toga drugi deo vezbe jeste da uzmemo ako je cena iznad 5000 obojiti cenu u crveno
// ako je manje od 5000 obojiti cenu u svetloplavu. 

// let productPrices = document.querySelectorAll(".productPrice");
// console.log(productPrices);

// for (let product of products) {
//     product.style.color = "#878a88";



// }


// for (let propri of productPrices) {
//     if(propri.innerHTML < 5000){ //toma koristi ovde .textContent / mozda je ispravnije ne znam. 
// propri.style.color ="blue";
//     } else {
//         propri.style.color = "green";
//     }

// console.log(propri.innerHTML);
// console.log(propri.textContent);
//pokazuje iste vrednosti. ja bih rekao da je isto

//savet, ako ces varijablu koristiti samo jednom, onda radi direktno, 
// ali ako ces je vise puta pozivati i raditi nesto sa njom, onda je napravi. 


// VEZBA
/**
 * napraviti array sa objektima sa 8 automobila
 * mora imatei name, price, sliku
 * 
 * 
 */

let carProducts = [
    {
        name: "BMW M4 Competition",
        price: 89500,
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
        uploaded: 2025
    },
    {
        name: "Audi RS7",
        price: 128000,
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        uploaded: 2025
    },
    {
        name: "Mercedes-Benz AMG GT",
        price: 119000,
        img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        uploaded: 2025
    },
    {
        name: "Porsche 911 Carrera",
        price: 114000,
        img: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
    },
    {
        name: "Lamborghini Huracán EVO",
        price: 249000,
        img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
        uploaded: 2025
    },
    {
        name: "Ferrari F8 Tributo",
        price: 280000,
        img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
        uploaded: 2025
    },
    {
        name: "Tesla Model S Plaid",
        price: 89990,
        img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
        uploaded: 2026
    },
    {
        name: "Toyota Supra GR",
        price: 56900,
        img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
        uploaded: 2026
    },
    
];


// DODATNA VEZBA
// napraviti petlju koja ce na stranici ispisati sve proizovde / automobila
// struktura ide ->  div -> slika -> ime -> cena

/** 
 * kako je rekao covek - uzmi sam sve izvuci prvo
 * probaj vidi sta radi pa idi korak po korak
 */

let carImages = document.querySelectorAll(".productImage");
let carNames = document.querySelectorAll(".carName");
let carPrices = document.querySelectorAll(".productPrice")


// for (let a in carProducts) {
//     // carNames[a].textContent = carProducts[a].name;
//     carImages[a].src = carProducts[a].img;
//     carPrices[a].textContent = carProducts[a].price;
// }


//toimno ucenje nas na ovaj basic nacin koji nije tyoliko dobar ali radi (ne radi se na ovaj nacin, izbegavati ovaj nacin)
// for (let b of carProducts){
//     document.querySelector("#allProducts").innerHTML += "<p class='carName'>"+b.name +"</p>" + "<img class='productImage' src='"+b.img+"'>" + "<p class='productPrice'>"+b.price+"</p>"

// }


for (let b of carProducts){
    //document.querySelector("#allProducts").innerHTML += "<p class='carName'>"+b.name +"</p>" + "<img class='productImage' src='"+b.img+"'>" + "<p class='productPrice'>"+b.price+"</p>"

    let carDiv = document.createElement("div");
    let carImage = document.createElement("img");
    let carPrice = document.createElement("p");
    let carName = document.createElement("p");

    carName.textContent = b.name;
    carImage.src = b.img;
    carPrice.textContent = b.price;

    carDiv.appendChild(carName);
    carDiv.appendChild(carPrice);
    carDiv.appendChild(carImage);
    document.querySelector("#allProducts").appendChild(carDiv);
}
