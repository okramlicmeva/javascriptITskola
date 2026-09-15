const apiUrl = "http://www.omdbapi.com/"
let apiKey = "1e4cff59";


// fetch(apiUrl+"?apikey="+apiKey+"&t=Terminator")
// .then(result => result.json())
// .then(function(data) {
//     console.log(data);
// })


// let response = await callOMDBapi("t=Terminator"); //ne radi, mora da bude asinhrono
// console.log(response)





//prvi nacin wrapping funkcije da se kroz funkciju dobije podatak ili podaci koji nama trebaju

// getMovieByTitle("Terminator");
// async function getMovieByTitle(title) {
//     let response = await callOMDBapi("t="+title);
//     console.log(response);
// }
// ovo je lep nacin - vrati nam movie po title, pa imamo logiku koju idemo za to, ali mana je kako izvuci logiku van toga

//drugi nacin je da u html-u stavimo u js linkovan "type="module"" i onda napisemo sledece
// let response = await callOMDBapi("t=Terminator"); 
// console.log(response)
//ovo je bolji nacin module -> lakse je, pozovi api, dobij odgovor i nastavi dale.  (ovaj nacin toma roka)

//  async function callOMDBapi(params) {
//     fetch(apiUrl+"?apikey="+apiKey+"&"+params)
// .then(result => result.json())
// .then(function(data) {
//     console.log(data);
// })

// }

//promise / promisa -> asinhrona funkcija obecava da cu dobiti odgovor, ali nije dovoljno samo uraditi ovo gore
// neophodno je rekonstruisati kod, kako bi to zapravo funkcionisalo

// async function callOMDBapi(params) {
//     const url = apiUrl+"?apikey="+apiKey+"&"+params;
//     const response = await fetch(url); //pozovi api i asinhrono sacekaj odgovor. Sto znaci pozovi, i ne cekaj, nek nastavi sve dalje da radi, ali kada dobijes odgovor ti nastavi do ove linije koda. (cycle)
//     const result = await response.json();
//     return result;
// }

// await se mora koristiti u funkciji 



//znati termine

// promise -> obecanje da cemo dobiti neki odgovor nazad od fetch-a ili bilo kojeg asinhroni kod (u nekom trenutku, kakav ce biti, sta ce biti, nebitno je)
// await -> sluzi da se vrati na kod kada dobije odgovor od promise, ako kazemo await na liniji 15, kod kaze da ce se vratiti na liniju 15 kad dobije odgovor, sto znaci
// on ne blokira ostatak skripte. On radi -> posalji poziv, nastavi dalje sa kodom, i vrati se nazad na liniju 15 i obradi je (taj deo koda). 
// primer, luk, serpa, meso. (promisa je da ce biti rucka)
// async -> da neki kod treba da se izvrsi asinhrono -> izvrsi ovaj kod, kad budes imao vremena, na raspolaganju ti izvrsi taj kod

//ponavaljanje koda 

// async function pozoviIMDBapi(paramkojizelim) {
//     const url = apiUrl+"?apikey="+apiKey+"&"+params; //nnapravili smo link koji ce da poziva
//     const response = await fetch(url) // pozivamo link koji nam treba
//     const result = await response.json() /// dobijamo odgovor (tj cekamo odgovor), 
//     return result; // vracamo podatke 

    //moze da se returnuje i na ovaj nacin return await response.json();
//}


//vezba 
// treba da trazimo homealone koji je izasao 1990 godine, dakle po imenu i po godini

let odgovor = await movieByTitleAndYear("s=Home+Alone", "y=1990");
console.log(odgovor);

async function movieByTitleAndYear(title, year) {
    const url= apiUrl+"?apikey="+apiKey+"&"+title+"&"+year;
    console.log(url);
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

//domaci, forma sa poljima gde unesemo podatke o filmu i prikaze nam kartice sa tim filmovima (pretraga, html, kartice, css)
// ako trazim lord of the rings, hocu sve lord of the rings filmove da mi pokaze. 

