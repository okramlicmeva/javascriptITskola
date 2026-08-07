// query selectors 7.15 
/**
 * - getElementById -> prosledite ID, dobijate element
 * - getElementsByClassName -> prosledis klasu i dobijate array sa elementima
(stari nacin)

//. poenta je nauciti sta koji vraca, kad se vraca jedan, kad se vraca vise njih
(novi nacin)
 * - guerySelector ->> "#name", ".name", -> vraca jedan element
 * - querySelectorAll --> vraca array sa elementima svi elementi sa tim imenom koji trazimo "#name"
 */


let deskripciji = document.getElementsByClassName("description");
console.log(deskripciji);
// sta je htmlcollection -> array sa html elementima. 
// getElementsByClassName vraca nam niz (array) 


deskripciji[0].style.color = "red";
deskripciji[1].style.color = "pink";

let title = document.getElementsByClassName("title");
console.log(title); //dakle opet je vratio niz (htmlcollection, sto govori da je nebitno da li je jedan element ili njkih 555)

//vezba 6 
// u konzoli ispisati koliko elemenata imamo sa klasom description

console.log(deskripciji.length);

//vezba 7 
// napravi petlju koja ce preci preko svih elemenata koji imaju klasu description
// i zameniti da pise njihov redni broj (0,1,2,3,4,5, koliko god ih ima) -> redni broj areya


// for (let i = 0; i <= deskripciji.length; i++) {

// deskripciji[i].innerText = i;

// }

//tomino je brze bolje / po novom
for (e in deskripciji) {
    deskripciji[e].innerText = e;
}


//sto se tice selektora to je gotovo, dalje ce biti u 8. casu


