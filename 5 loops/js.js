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


//petlje / loopovi ->
let cars = ["bmw", "audi", "mercedes","toyota", "honda","MG", "peugeot", "renault", "honda"];
console.log(cars);

// koje petlje postoje -> for, forEach, while, do while, for in, for of
// forEach i for in su najabitnije
// for, while, do while -> nekada.

// for petlja
// nesto sto nabraja stvari

// prvi argument u njoj je -> odakle krece, od cega krece
// zasto stavljamo i? - nebitno je kako cemo je nazvati naziv i, ali zasto i -> ona se smatra jednom iteracijom
// tj. jednom ponavljanjem, petlje bukvalno i jesu ponavljanje. U sustini govorimo joj da ponovi nesto 100 puta (ako ide do 100)
// i<100 -> je uslov do kada ce petlja da radi
// i++ -> znaci, nakon svakog ponavljanja povecaj i za jedan, let i = 0, to jeste manje od 100, tako da u sledecoj
// povecaj za jedan, pa ce biti let i = 1, to jeste manje od 100. dok ne stigne do 99


for(let i = 0; i < 100; i++) {
    console.log(i);
}

// vezba 5.22 koliko automobila imamo toliki broj stavi kao uslo u cika petlju

for(let i = 0; i < cars.length; i++){
    console.log(cars[i], + i);
}
