
// komentari - opisi deo koda, sekciju, sta treba da radi, heads-up za devove ili mozda nesto slicno
let name = "Marko Malevic"; // ovde smo napravili varijablu
console.log(name); //ovde smo je pozvali

let name2 = "Marko"; //string
let age = 1; // intiger
let dane = true // boolean
let objomarko = {
    ime: "Marko",
    prezime: "Malevic",
    godina: 31,
    adresa: "SMM20a",
    Drzava: "Srbija",
    Grad: "Beograd",
    Mesto: "Vidikovac",
    Opstina: "Rakovica",
    OsnovnaSkola: "Vladimir Rolovic",
    SrednjaSkola: "Memorial International School of Tirana",
    Fakultet: "Pravni Fakultet Univerziteta u Beogradu",
    Posao: "Account Manager - BA"
}
let niz = ["crvena", "zuta", "zelena"];

let name3 = objomarko.ime;

console.log(name2, name, dane);
console.log(objomarko);
console.log(niz);
console.log(name3);

//vezba -> napravite 2 varijable, ime i prezime, napravite 3 caraijablu koja je spoj ove dve

let firstName = "Marko";
let secondName = "Malevic";
let fullName = firstName + " " + secondName; //ovim sam odradio i drugu vezbu 1.18

console.log(fullName);

// vezba 1.20, napravite 2 varijable, prvi broj i drugi broj, i treba da imamo trecu variablu
// koca ce biti zbir ta dva broja


let firstNum = 15;
let secondNum = 25;
let add = firstNum + secondNum;
console.log(add);

// + se inace koristi za spajanje podataka, i to mu je prva i glavna funkcija,
// zato bi se spojile vrednosti firstnum (da je definisan kao string "15", i druge koja je intiger 25,
//rezultat ib bio 1525, da nije sabrao bi ih... dakle namera mora da postoji brojevi se uvek pisu bez navodnika
// ako je cilj da dobijemo nesto sa brojevima, kao sto je sabiranje.

