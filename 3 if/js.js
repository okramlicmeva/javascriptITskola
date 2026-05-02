// ifovi, uslovi ili conditional statements

let prozivod = "hleb";
let cena = 50;



//ako je hleb 99 dinara ispisi da je hleb skup, a ako je manje onda ispisi da je jeftin

/* \
* if -> govorimo kodu da radimo poredjenje
* () => gde stavljamo nas uslov, da li je hleb toliko i toliko, tj. 99 dinara u ovom slucaju
* {} -> sta trena da se dsi -> ispisati "hleb je skup / jeftin"
* = -> dodelimo vrednost / postavimo vrednost => prozivod = hleb
* == -> za poredjenje vrednosti znaci
* */

if(cena <  99) {
    console.log("Hleb je jeftin")

}

//vezb -> proveite da li je prozivod hleb, ako jeste ispisi nasli smo hleb

if(prozivod == "hleb") {
    console.log("Nasli smo hleb");
}


let automobil = "BMW";

if(automobil == "BMW") {
    console.log("M3");
}

else  {
    console.log("Nije BMW");
}

