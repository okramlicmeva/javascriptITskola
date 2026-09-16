let apiUrl = "http://www.omdbapi.com/"
let apiKey = "1e4cff59";

let searchValue = document.querySelector(".title");
let searchBtn = document.querySelector("#search");
let resultDiv = document.querySelector(".movieResults");




searchBtn.addEventListener("click", function() {

    let movie = searchValue.value;
    callMovieApi(movie);

  

    // fetch(apiUrl+"?apiKey="+apiKey+"&s="+movie)
    // .then(result => result.json())
    // .then(function(data){
    //     console.log(data)
    // }) klasican nacin radi aj sad asinhroni nacin 

    async function callMovieApi(movie) {
        const callurl = apiUrl+"?apiKey="+apiKey+"&s="+movie; //ne znam zasto sam morao da promenim ime apirul u callurl (jer nije globalna, ovde mogu da je nazovvem kako hocu)
        const waittogetdata = await fetch(callurl);
        const waittogetresults = await waittogetdata.json()
        console.log(waittogetresults);
        renderMovies(waittogetresults.Search)
    }

})
console.log(searchBtn, searchValue, resultDiv)

function renderMovies(searched) {

    resultDiv.innerHTML = "";

for (let movie of searched) {
    console.log(movie.Title)
    console.log(movie.Type);
    console.log(movie.Year);
    console.log(movie.Poster);
    // console.log(movie. year, type, poster (image), all start with capital letters )
    // sad izbildamo div.ove za svaki rezultat, appendujemo u result div za kartice 
    // i to je to. 

 let kartica = document.createElement("div");
 let img = document.createElement("img")
 let title = document.createElement("p");
 let type = document.createElement("p");
 let year = document.createElement("p");
 console.log(kartica, title, img);

 title.textContent = movie.Title;
 img.src = movie.Poster;
 type.textContent = "Type: " + movie.Type;
 year.textContent = "Year: " + movie.Year;

 kartica.className = "movieCard";
title.className = "movieTitle";
img.className = "movieImage";
type.className = "movieType";
year.className = "movieYear"

kartica.append(img, title, type, year);
resultDiv.append(kartica);
}
}

//that should be it my dude