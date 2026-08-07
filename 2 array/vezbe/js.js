// napravi niz brojeva sa vrednsotima 12345

let nizBrojeva = [1,2,3,4,5];

// ispisi ceo niz brojeva
console.log(nizBrojeva);

//ispisi prvi element niza brojeva
console.log(nizBrojeva[0]);

// ispisi poslednji element niza brojva
console.log(nizBrojeva[4]);

//napravi niz imena sa vrednostima ana marko jovana

let imena = ["Ana", "Marko", "Jovan"];

// ispisi drugi niz imena
console.log(imena);

// promeni vrednost "marko" u "Nikola" u nizu imena

imena[1] = "Nikola";
// ispisi ceo niz imena posle izmene
console.log(imena);

// napravi niz ocena sa vrednsotima 543;

let ocene = [5,4,3];

//10 ispisi zbir prve dve ocene
let zbir = ocene[0] + ocene[1];
console.log(zbir);

//napravi niz gradova, beograd, novi sad.

let gradovi = ["Beograd", "Novi Sad"];

// dodaj nis na kraju niza

gradovi.push("Niš");

// ispisi niz gradova
console.log(gradovi);

// ukloni poslednji element iz niza gradovi

//gradovi.pop();
//a moze i ova verzija ispod
gradovi.splice(2,1);

//ispisi niz nakon uklanjanja
console.log(gradovi);

//16 napravi niz brojevi2 sa 10 20 30

let brojevi2 = [10,20,30];

// ispisi zbir svih elemenata niza brojevi2 koristi indekse

let zbir2 = brojevi2[0] + brojevi2[1] + brojevi2[2];
console.log(zbir2);

// napravi niz cene 100 200 300

let cene = [100, 200, 300];

// uvecaj prvu cenu za 50 i ispisi novi niz
cene[0] = cene[0] + 50;
console.log(cene[0]);
console.log(cene);

//20 napravi niz jezici html css java

let jezici = ["html", "css", "java"];

//21 u nizu jezici zameni java sa javascript

jezici[2] = "JavaScript";
//22 ispisi niz jezici

console.log(jezici);

// napravi statusi true false true

let statusi = [true, false, true];

//24 ispisi vrednosti drugog elementa niza status
console.log(statusi[1]);

//25 napravi niz poruke  = zdravo cao, ispisi obe poruke jednu ispod druge
let poruke = ["Zdravo", "cao"];

console.log(poruke[0]);
console.log(poruke[1]);