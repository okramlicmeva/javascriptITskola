

/*
document.getElementById("name").style.color = "red";
*/



//VEZBA dodaj background color tekstu
/*
document.getElementById("name").style.backgroundColor = "yellow";
*/
//ok :check:

//napravi varijavlu i preko nje sve radi brze je i lakse

let name = document.getElementById("name");

// name.style.color = "blue";
// name.style.backgroundColor = "pink";



// VEZBA 2
//promeni "Marko Malevic" -> da pise nesto drugo - sta god mi zelimo

name.innerHTML = "Teodora Miljakovic";
console.log(name.innerHTML);
name.innerText = "sta tebe pa briga";
console.log(name.innerText);
//mislim da bi to bilo to dva nacina.


//VEZBA 3
//iskoci prozor, unesi svoje ime i to ime da pise u id-u tj paragrafu napralvjenom
//-> znaci treba da napravim prompt
//-> taj prompt treba da sacuva vrednost (znaci preko let-a)
//-> taj let treba da iskoristim tako sto cu da ga ubacim u paragraf dodavajuci varijablu umesto cistog teksta
// aj da probamo

// let novoIme = prompt("Unesi svoje ime: ");
// console.log(novoIme);
// name.innerHTML = novoIme;
// console.log(name.innerHTML);

//uspesno radi, aj da vidimo tomino resenje. 

// VEZBVA 4 - pitaj ga koju boju zeli i to primeni isto kao i sa imenom
// 
// let novoIme = prompt("Unesi svoje ime: ");
// console.log(novoIme);
// let novaBoja = prompt("U kojoj boji zelis da ti bude ime?");
// console.log(novaBoja);
// name.style.color = novaBoja;
// name.innerHTML = novoIme;
// console.log(name.innerHTML);


// Vezba 5 - pitaj za background color - i primeni sve isto

let novoIme = prompt("Unesi svoje ime: ");
let novaBoja = prompt("U kojoj boji zelis da ti bude ime?");
let novaPozadinskaBoja = prompt("Koju pozadnisku boju zelis?");
name.innerHTML = novoIme;
name.style.color= novaBoja;
name.style.backgroundColor = novaPozadinskaBoja;
console.log(name.innerHTML);


// query selectors 7.15 
/**
 * - getElementById -> prosledite ID, dobijate element
 * - getElementsByClassName -> prosledis klasu i dobijate array sa elementima
 * - guerySelector ->> "#name", ".name", -> vraca jedan element
 * - querySelectorAll --> vraca array sa elementima svi elementi sa tim imenom koji trazimo "#name"
 */

//. poenta je nauciti sta koji vraca, kad se vraca jedan, kad se vraca vise njih

