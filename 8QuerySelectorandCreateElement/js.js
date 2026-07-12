// let title = document.querySelector("#title");
// title.style.color = "red";


// let subtitle = document.querySelector(".subtitle")
// subtitle.style.color = "blue";


// let docs = document.getElementsByClassName("subtitle2");
// docs[0].style.color = "red";


let products = document.querySelectorAll(".product");
console.log(products);

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

let productPrices = document.querySelectorAll(".productPrice");
console.log(productPrices);

for (let product of products) {
    product.style.color = "#878a88";



}


for (let propri of productPrices) {
    if(propri.innerHTML < 5000){ //toma koristi ovde .textContent / mozda je ispravnije ne znam. 
propri.style.color ="blue";
    } else {
        propri.style.color = "green";
    }

console.log(propri.innerHTML);
console.log(propri.textContent);
//pokazuje iste vrednosti. ja bih rekao da je isto

//savet, ako ces varijablu koristiti samo jednom, onda radi direktno, 
// ali ako ces je vise puta pozivati i raditi nesto sa njom, onda je napravi. 
} 

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
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e"
    },
    {
        name: "Audi RS7",
        price: 128000,
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
    },
    {
        name: "Mercedes-Benz AMG GT",
        price: 119000,
        img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
    },
    {
        name: "Porsche 911 Carrera",
        price: 114000,
        img: "https://images.unsplash.com/photo-1502877338535-766e1452684a"
    },
    {
        name: "Lamborghini Huracán EVO",
        price: 249000,
        img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b"
    },
    {
        name: "Ferrari F8 Tributo",
        price: 280000,
        img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d"
    },
    {
        name: "Tesla Model S Plaid",
        price: 89990,
        img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89"
    },
    {
        name: "Toyota Supra GR",
        price: 56900,
        img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
    }
];


// DODATNA VEZBA
// napraviti petlju koja ce na stranici ispisati sve proizovde / automobila
// struktura ide ->  div -> slika -> ime -> cena
