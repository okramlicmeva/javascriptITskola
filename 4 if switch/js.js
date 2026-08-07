let name = "admin";
let password = "tajnaSifra";


if (name == "admin" && password == "tajnaSifra") {
    console.log("sifra tacna, dobrodosao admine");

} else {
    console.log("pogresno ime ili lozinka");
}

// vezba -> napraviti sledecu varijablu
// userType = "admin"
// uraditi proveru ako je usertype admin ili moderator ispistai poruku
// -> vi ste administrator
// ako nije onda ispistai vi ste obican clan


let userType = "admin";

if (userType == "admin" || userType == "moderator") {
    console.log("Vi ste administrator");
} else {
    console.log("Vi ste obican clan");
}


let allowedType = ["admin", "moderator"] // -> dozvoljeni tipovi podataka, ovo je u stvari niz tj array

// da li "userType" postoji unutar "allowedTypes -> lakse je raditi ovako, jer imas jasno definisane role iznad u nizu.
// tako da mozemo sledece da odradimo:

if ( allowedType.includes(userType) ) {
    console.log("dobrodosli")
} else {
    console.log("pristup onemogucen");
}

//hmmm ali moze i ovako

let ifCheck = allowedType.includes(userType);

if (ifCheck == true) { // ako stavimo samo (ifCheck) -> jedina vrednost koja se dobija nazad je true/false
    console.log("vi ste administrator - dobrodosli")
} else {
    console.log("vi ste obican clancic")
}


//vezba proveri koji je dan danas


let dayOfTheWeek = "petak";

if (dayOfTheWeek == "subota" || dayOfTheWeek == "nedelja") {
    console.log("weekeend!")
} else if (dayOfTheWeek == "petak") {
    console.log("weekend is coming");
}

else {
    console.log("work work")
}



