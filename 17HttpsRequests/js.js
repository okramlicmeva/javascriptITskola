/**
 * https://dummyjson.com/recipes?sortBy=name&order=asc (ovo su javni podaci)
 * get -> https://dummyjson.com/login?username=marko&password=12345 (ovo ne sme da bude javno, treba nam middleman)
 * 
 * middleman attack -> bi mogao da ukrade ovo iznad, zbog toga postoji post metoda da bi se tajno prosledili podaci (niko tu destinaciju ne zna osim
 * krajnog usera -> zato sluze psot requestovi, pozivamo putem razlicite metode, sifrovane pdatke dobijamo)
 * post - u pozadini salje (username, password....)
 * 
 * 
 * najvise se koristi kod
 * registracije
 * logina
 * password resset
 * kupovine 
 * osetljivi podaci = POST metoda
 * neosetljivi podaci = GET
 */


//vezba 1
let registerButton = document.getElementById("regBtn");
let names = document.querySelector(".names");
let surname = document.querySelector(".surname");
let age = document.querySelector(".age");
let godi = document.querySelector("#godine");

registerButton.addEventListener("click", function() {

// vezba 17.10 -> kad ne unese jedan od podataka (ime ili prezime) -> prikazati poruku - niste uneli sve podatke
// if(!names.value || !surname.value) {
//     console.log("niste uneli sve podatke");
// } else {
//     console.log(names.value, surname.value, age.value);
// }
// })
// ne moze ovako radi samo sa slovima valjda

if(names.value.trim() === "" || surname.value.trim() === "") {
    alert("Niste uneli sve podatke");
    return;
} else {
    console.log(names.value, surname.value, age.value);
}

register(names.value, surname.value, age.value);
document.createElement("button").inner
})


function register(names, surname, age) {
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {'content-type': "application/json"},
        body: JSON.stringify({
            firstName: names,
            lastName: surname,
            age: age
        })
    })
    .then(response => response.json())
    .then(function(data) {
        alert("Uspesno ste se registrovali sa imenom "+data.firstName);
    })
}


fetch("https://dummyjson.com/auth/login", {
    //ovo je payload - podatke koje saljemo
    method: "POST",
    headers: {'Content-Type': "application/json"}, // nije uvek obavezan, ali ga treba proslediti da ga server prepoznaje -> mi ti saljemo content (sadrzaj) koji je u vodu jsona tj objekta
    body: JSON.stringify({ // moramo proslediti podatke u vidu string-a  p
    // primer body: "username:marko&passowrd=markomalevic123"
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
    }),
    
})
.then(response => response.json())
.then(function(data) {
    console.log(data);
})

//token - infomracija da smo ulogovani na sajtu / garancija / propusnica da smo ulogovani -> evo ti prousnica da mozes da imas dalje, da ne bi morali na svakoj stranici da se logijume


//vezba 17.8

for (let i = 21; i <= 100; i++) {
let options = document.createElement("option")
options.innerText = i;
godi.appendChild(options);

}


//validacija

//preflight - sluzi kako bi nas server proverio - da li je taj poziv siguran, tj. da li je taj server koji mi pozivamo siguran
// mi onda mozemo u headers da vidimo da dobijamo 204 no content -> uspesno povezan ali nikakav sadrzaj
// imamo preview, response, initator i timing -> koji nece imati puno toga
// preflight - njegova svrha je da proveri da li je siguran server i odradice drugi poziv kad treba.

//17.15
/**
 * https i http => protokoli 
 * nacin komunikacije na internetu 
 * koja je razlika izmedju njih
 * http -> obicvan protokol
 * https -> secure protok
 * to konkretno znaci -> prikazuje zeleni kljuc -> conenection is secure, certificate is valid
 * svaki sajt koji ima https -> on ima nesto sto se zove ssl sertifikat -> njegova uloga je da bude sertifikat koji dokazuje validnost sajta
 * ako ga nemamo, ne mozemo da imamo sajt preko kog se vrsi placanje npr 
 * da li to znaci da ne mozemo biti prevareni -> ne, sajt svakako moze imati sertifikat
 * ali to znaci da ce podaci biti enkriptovani kada su poslati / primljeni
 * ako saljem POST podatke -> name: marko, password:12345 -> neko ko slusa ove podatke on ce reci ako idemo preko https -> oni ce biti vidljivi, ali sifrovani tj heshovani
 * dok kod http-a, to nece biti slucaj nego ce prikazi obicno kako jestte
 * mozemo proveriti preko sha256 generatora da vidimo kako ce to da izgleda kad je enkriptovano
 * uvek ih treba da saljemo podatke preko https-a,  
 */

//17.17

/**
 * put/patch -> azuriranje podataka -> ovo bi trebalo uvek da se koristi kad se azuriraju podaci
 * ali ovo najcesce se preskace -> i najcesce se koristi post / get
 * DELETE -> sluzi za brisanje podataka 
 * 
 * 
 * GET - koristimo za neke javne podatke -> koa sto je pretreaga
 * POST - za pravljenje novih podataka, kao sto je slucaj registracije
 * 
 * 
 * registracija -> POST
 * update kostinika ->> PATCH (manje podataka)
 * obrisemo korisnika ->>> DELETE 
 * pretragfu korisnika ->>>> GET 
 * 
 * tipican primer searcha jeste javnost i link sam po sebi, da kad ga posaljemo nekome taj isti lik moze da otvori istu stvar koju sam ja trazio
 * primer sa polovni automobili: https://www.polovniautomobili.com/auto-oglasi/pretraga?brand=Alpine&chassis[]=hatchback&sort=basic&yearFrom=2022&yearTo=2023
 */


//domaci -> posle registracije -> kad kliknem register -> ispod treba da mi pokaze "delete" -> i na njegovo kliktanje da mi obrise korisnika kog sam ja licno napravio



fetch('https://dummyjson.com/users/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);