let vezbe = 7;

if( vezbe > 5) {
    console.log("broj je veci od 5");
}

let godine = 16;

if (vezbe < 18) {
    console.log("maloletan")
} else {
    console.log("punoletan");
}
// treca vezba

let ocene = [5,3,4,2,5];

for (let i = 0; i < ocene.length; i++) {
    if (ocene[i] >= 4) {
        console.log("ovo su ocene :", ocene[i]);
    }
}


// cetvrta vezba


let brojevi = [1,2,3,4,5,6];

for (let i = 0; i <= brojevi.length; i++ ) {
    if (brojevi[i] % 2 === 0) {
        console.log(brojevi[i])
    }
}

let imena = ["Ana", "marko", "Jovan"];

for (let b = 0; b < imena.length; b++) {
    let lowercase = imena[b][0].toUpperCase();

    if (lowercase.startsWith("A")) {
        console.log(imena[b]);
    }


}



let gradovi = ["Beograd", "Novi Sad", "Nis"];

for (let i = 0; i < gradovi.length; i++) {
    if (gradovi[i].length > 5) {
        console.log(gradovi[i]);
    }
}

let dan = 3;

switch (dan) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break
}


let boja = "crvena";

switch (boja) {
    case "zelena":
        console.log("Kreni");
        break;
    case "zuta":
        console.log("paznja");
        break;
    case "crvena":
        console.log("STOP");
        break;
}

let statusi = ["online", "offline", "online"];

for (let i = 0; i < statusi.length; i++) {
    switch (statusi[i]) {
        case "online":
            console.log("korisnik aktivan");
            break;
        case "offline":
            console.log("korisnik nije aktivan");
            break;
        }
    }

// 10

let broj = 10;
if (broj % 2 === 0) {
    console.log("broj je paran");
} else {
    console.log("broj je neparan")
}

//11
let rezultati = [45, 70, 90];

for (let i = 0; i < rezultati.length; i++) {
    if (rezultati[i] >= 60) {
        console.log("Polozio", rezultati[i])
    } else {
        console.log("nedovoljno", rezultati[i]);
    }
}

//12

let brojevidva = [3,5,8,2];
let novcanik = 0;
for (let i = 0; i < brojevidva.length; i++) {
    novcanik += brojevidva[i];
    console.log(novcanik);
}

