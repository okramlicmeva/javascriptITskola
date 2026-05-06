// vezba 1

let name = "admin"; // capital letter

name = name.toLowerCase(); // konvertuje u malo slovo
//name = name.toUpperCase(); // konvertuje u velika slova
console.log(name);

if(name == "admin") { //targetiramo sta smo odje napisali
    console.log("Vi ste admin")
} else {
    console.log("vi niste administrator");
}

if (name.startsWith("b")) {
    console.log("Pocinje sa samoglasnikom")
} else {
    console.log("ne pocinje sa samoglasnikom");
}

// jbg ja nisam znao za nacin objasnjenj u resenju
// dakle string je niz karaktera tj moze se tumaciti tako admin -> ["a", "d", "m", "i", "n"],
// i isto tako mozemo da trazimo prvo slovo (ali to je kad mi znamo rec) i guess.

if (name[0] == "a") {
    console.log("Pocinje sa samoglasnikome");
} else {
    console.log("ne pocinje sa samoglasnikome");
}

//vezba 3
// proveriti da li je prvo slovo samoglasnik ili aeiou.


//moje resenje - aha, ok ovo je i resenje u 5.9 lekciji.. izgleda da imam malo kefala. (tomin drugi nacin za resvanje)
let samoglasnici = ["a", "e", "i", "o", "u"];

if (samoglasnici.includes(name[0])) {
    console.log("Pocinje sa samoglasnikomeee");
} else {
    console.log("ne pocinje");
}

//tomino resenje:

if(name[0] == "a" || name[1] == "e" || name[2] == "i" || name[3] == "o" || name[4] == "u") {
    console.log("da pocinje");
}