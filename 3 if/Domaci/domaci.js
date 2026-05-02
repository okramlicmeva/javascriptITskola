/*
napravi fajl domaci.js
napravite dve varijable, name and password
nane= admin
password = tajnasifra      OVDE KAZE SIFRA pocinje sa malo S... napravi slucajeve onda i guess

napravite sledece poredjenje

-> ako je name admin i ako je sifra tajnaSifra -> ispisati dobrodosli nazad
-> ako je name toma i ako je sifra tajnaSifra -> ispisati dobrodosao tomo
-> ako nije nista od ponudjenih -> ispisati potgresna lozinka ili ime

 */


let name = "admin";
let password = "tajnasifra";

/*
testing copy/paste

case1:
let name = "toma";
let password = "tajnaSifra";

case2:
let name = "admin"
password = "tajnaSifra";
 */



if (name == "admin" && password == "tajnaSifra") {
    console.log("Dobrodosli nazad");
} else if (name == "toma" && password == "tajnaSifra") {
    console.log("Dobrodoosao Tomo");
} else {
    console.log("Pogresna lozinka ili ime");
}

