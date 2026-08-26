// let params = window.location.search;
// console.log(params);

// moguce je ali treba konvertovati, jker dobijamo kao string

let params = new URLSearchParams(window.location.search); // pravimo novi objekat, i prosledjujemo ono sto imamo u linku
//console.log(params.get("id")); // i ovako izvucemo samo broj 13 is onog sto smo uzeli u params;

let recipeId = params.get("id");
let divrecipe = document.querySelector("#recipe");


console.log(recipeId);



fetch("https://dummyjson.com/recipes/"+recipeId)
.then(response => response.json())
.then(function(data) {
    console.log(data);

    
    let title = document.createElement("h1");
    let ingredients = document.createElement("h2");
    let preptime = document.createElement("P")
   

    title.innerText = data.name;
    ingredients.innerText = data.ingredients;
    preptime.innerText = data.prepTimeMinutes;

    divrecipe.append(title, ingredients, preptime);

})

//minivezba
// napraviti dugme koje nas vraca na staru stranicu tj. prethodnu stranicu. 


//domaci:
// moras da imas selektor na perma strani
// izabirom preko selektora na perma strani -> vraca nas na index strani -> i tamo nam prikazuje sve recepte sa izabranim selektorom. 
// dakle poenta je da nas vrati i onda prikaze sve recepte opet na htmlu. 
// misljenje -> neki redirect / link koji ce da se poziva prilikom kliktanja -> kada se vrati
// kada se vrati upotrebi iste funkcije koje ima i guess, ali kako ce se to odraditi ne znam.
// brainstorm bez gledanja resenja. 



