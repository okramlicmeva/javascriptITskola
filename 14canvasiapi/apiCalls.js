/**
 * axios, ajax, fetch, postFect... (manje vise sve alati)
 * 
 * 
 * https pozivi:
 * - get -> google.com/search?q=javaascript 
 * - post  -> salju se podaci, a da ih ne vidimo
 * 
 * -> kada ih povlacimo sa drugih sajtova to se zovu api-i -> adressa sa koje dobijamo informacije u obliku json-a ili xml formata
 * -> JSON = objekat (malko se drugacije pise, ali je to manje vise objeka koji imamo u javascripti -> kljuc i vrednost)
 * -> XML = zastareo format, mi cemo se fokusirati na json
 * => pozovemo link 
 * = > dobijemo objekat sa odredjenim podacima 
 * ==> google.com/api/getWeather?city=Belgrade => dobijemo podatke da je tepmeratura 20, cloudy itd itd itd 
 * 
 * -> REST API, SOAP API,  -> standard po kom se api pise  (kako se vracaju poruke itd itd)
 * 
 */

let div = document.getElementById("#welcome");
let users = [];


fetch("https://dummyjson.com/users/1")
.then(response => response.json())
.then(data => {
    users = data;
console.log(users);
})

console.log(users);



