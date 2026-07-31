/**
 * functions -> methods
 * methods: array.find(), .console.log(), (pre-built, already existing, ugradjene)
 * funkcije i metode 
 * 
 * function -> kada kreiramo / pravimo funkciju, prefix -> function (kada je pravimo)
 * function imeFunckije -> ista pravila kao varijable (ne tacke,ne zareze, ne brojevi)
 * () -> funkcije bez argumenata
 * (ime, prezime) -> funkcije sa argumentima (vrednosti koje prosledjujemo funkcijama)
 * return -> trenutno nije bitno
 * svaka funckija (kao if) mora imati svoje zagrade {} -> viticaste
 * unutar viticastih zagrada se nalazi kod / logika koji/a ce se izvrsiti
 * 
*/

function sayHello(){
    console.log("Hello");
}


sayHello();

// napraviti funckiju -> online -> funkcija treba da ispise poruku
// sajt je online

function Online() {
    console.log("sajte je online")
  
}

Online();



/**
 * funkcije sa argumentima
 * prolsediti koja je cena moje korpe i koje smo artikle kupili
 * 
 */

// isAdult funkcija, proverava da li osoba ima 18 godina,
// ako ima ispisati adult, ako nema not adult

// ono sto je definisano kao argumenit (unutar), nema nikakve
// veze sa arijablama ili bilo cim ostalim, vec vazi iskljucivo 
// samo za funkciju i unutar nje

function isAdult(age){

if (age >= 18) {
    console.log("adult: " + age)
}else {
    console.log("Not Adult: " + age)
}
}

isAdult(15)
isAdult(18)
isAdult(20)


//imenuj funckije po onome sto rade
// na osnovu onoga sto rade 
// 