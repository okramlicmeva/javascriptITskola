let apiUrl = "http://www.omdbapi.com/"
let apiKey = "1e4cff59";

let searchValue = document.querySelector(".title");
let movieYear = document.querySelector(".movieYear")
let movieType = document.querySelector("#movieType")
let searchBtn = document.querySelector("#search");
let resultDiv = document.querySelector(".movieResults");




searchBtn.addEventListener("click", function() {

    let movie = searchValue.value;
    // let year = "&y="+movieYear.value;
    // let type = "&type="+movieType.value;
    let year = movieYear.value;
    let type = movieType.value;
    console.log(year, type);

//da probgamo sa argumetima

    let queryArgs = [
        "s="+movie,
        "y="+year,
        "type="+type
    ]
console.log(queryArgs);


    if (movie === "") return alert("morate uneti ime filma");
    callMovieApi(queryArgs.join("&") );

  
    async function callMovieApi(queryArgs) {
        const callurl = apiUrl+"?apiKey="+apiKey+"&"+queryArgs; 
        console.log(callurl);
        const waittogetdata = await fetch(callurl);
        const waittogetresults = await waittogetdata.json()
        if(waittogetresults.Response === "False") {
            document.getElementById("errormsg").innerHTML = waittogetresults.Error;
        } else {
            document.getElementById("errormsg").innerHTML = "";
        }
        console.log(waittogetresults);
        renderMovies(waittogetresults.Search)
    }

})
// console.log(searchBtn, searchValue, resultDiv)

function renderMovies(searched) {

    resultDiv.innerHTML = "";

for (let movie of searched) {


 let kartica = document.createElement("a");
 let img = document.createElement("img")
 let title = document.createElement("p");
 let type = document.createElement("p");
 let year = document.createElement("p");
//  console.log(kartica, title, img);

 title.textContent = movie.Title;
 img.src = movie.Poster;
 type.textContent = "Type: " + movie.Type;
 year.textContent = "Year: " + movie.Year;

 kartica.className = "movieCard";
 kartica.setAttribute("href", "movie.html?id="+movie.imdbID)
title.className = "movieTitle";
img.className = "movieImage";
type.className = "movieType";
year.className = "movieYear"

kartica.append(img, title, type, year);
resultDiv.append(kartica);
}
}




//vezba - kako dodati sve ove parametre u vec posotjeci kod tj poziv
// kako dodati sve ove parametre (type i movieYear)