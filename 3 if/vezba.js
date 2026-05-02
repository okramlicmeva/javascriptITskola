let content = "video";
let url = "https://www.youtube.com/watch?v=mvQZ8hKvB_s&list=RDmvQZ8hKvB_s&start_radio=1";
let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dhx72gZxz-I1M738UumFODf45Hf-cXjm2g&s";
let site = "https://www.google.com";


if(content == "video") {
    console.log("Link do Videa: " + url )
}

else if (content == "sajt") {
    console.log("link do sajta: " + site);
}

else {
    console.log("link do slike: " + img);
}


// moze koliko god else if-ova, moze da se koristi samo if, moze da se koristi samo if i else,
// moze i da se koristi samo if i else....
// struktura mora da se prati if, else if, else (to je pravi redosled, bez obzira na broj else if-a)

let cena = 599;

if(cena < 500) {
    console.log("jeftino");
}
else if (cena > 500) {
    console.log("skupo je")
}

//vezba 3.16, prmeni uslov tako da gleda da li je manje od 500 ili je 500

let cenaVezba = 401;

if(cenaVezba <= 399) {
    console.log("jefino je")
}
else {
    console.log("skupo je");
}

// da li je komponenta tastatura i da li je cena 50, poredjenje

let component = "tastatura";
let price = 40;

if (component == "tastatura" && price == 50) {
    console.log("jeste sve je tacno")
} else {
    console.log("ne nije tako");
}

