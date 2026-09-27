let link = window.location.search;
console.log(link);
let urlParams = new URLSearchParams(link);
let movieId = urlParams.get("id");
console.log(movieId);

let idResults;
let apiUrl = "http://www.omdbapi.com/"
let apiKey = "1e4cff59";





const callurl = apiUrl+"?apikey="+apiKey+"&i="+movieId;
const sendcall = await fetch(callurl);
const getresults = await sendcall.json()
console.log(getresults)


let info = document.getElementById("iDInfo");
info.className ="information";

let actors = document.createElement("p")
let runtime = document.createElement("p");
let rated = document.createElement("p")
let released = document.createElement("p")
let type = document.createElement("p")
actors.innerHTML = getresults.Actors;
runtime.innerHTML = getresults.Runtime;
rated.textContent = getresults.Rated;
released.textContent = getresults.Released;
type.textContent = getresults.Type;


info.append(actors, runtime, rated, released, type)

    


