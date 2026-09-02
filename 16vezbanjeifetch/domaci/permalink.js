// let params = window.location.search;
// console.log(params);

// moguce je ali treba konvertovati, jker dobijamo kao string

let params = new URLSearchParams(window.location.search); // pravimo novi objekat, i prosledjujemo ono sto imamo u linku
//console.log(params.get("id")); // i ovako izvucemo samo broj 13 is onog sto smo uzeli u params;
console.log(params);
let recipeId = params.get("id");
let divrecipe = document.querySelector("#recipe");
let permaSelect = document.querySelector("#permaSelect");
let  indexLink;

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

// ovde vec izvlacim svve tagove 
fetch("https://dummyjson.com/recipes/tags")
.then(res => res.json())
.then(function(data) {
    
    for (let tags of data){
    let b = document.createElement('option');
    b.innerText = tags;
    permaSelect.append(b);
    }
});


//minivezba
// napraviti dugme koje nas vraca na staru stranicu tj. prethodnu stranicu. 





// tomino resenje:::::
// iskopirati logiku za prakiz sto sam ja vec uradio tj napravio sam ponovo isto. 
// kako da se vratim na index html ne znam -> jedino redirect pa tamo after load nesto mozda da se odradi - kad pogledas resenje deluje ekstremno lako.. 
// napravi event listener change -> kada se promeni -> sta da radi (ali da li to zncaci da na indexhu moramo da dodamo ?category - da link - nikad pre nisam imao dodirnih tacaka 
// sa ovim - zato mi ideje za resenja ne padaju na pamet...)

permaSelect.addEventListener("change", function()  {
    console.log(this.value); //dobijamo tag
    window.location.href = "index.html?category="+this.value; // napravili smo link redirect u sustini

})





//domaci:
// moras da imas selektor na perma strani
// izabirom preko selektora na perma strani -> vraca nas na index strani -> i tamo nam prikazuje sve recepte sa izabranim selektorom. 
// dakle poenta je da nas vrati i onda prikaze sve recepte opet na htmlu. 
// misljenje -> neki redirect / link koji ce da se poziva prilikom kliktanja -> kada se vrati (ubo)

