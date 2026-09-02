

let data;
let allRecipes = document.querySelector("#allRecipes");
let selektor = document.querySelector("#selektuj")
let singleRecipes;
let names;
let preptime;
let ingredients;
let prep;
let lists;
let tag;
let a;

//vezba 1
// izlistati 9 recepata
// ispisati u htmlu
// sortirati po imenu asc (a-z);

let params = new URLSearchParams(window.location.search);
let category = params.get("category");
console.log(category);

if (category === null) {
    fetch("https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc")
.then(res => res.json())
.then(function(data) {

    for(recipes of data.recipes) {
        createAllrecipes(recipes)
        
    }
});

} else {
       let apiUrl = "https://dummyjson.com/recipes/tag/"+category;
    fetch(apiUrl)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        allRecipes.innerHTML = "";
        console.log(data.recipes);
        for (let recipes of data.recipes) {
            createAllrecipes(recipes)
        }
    })
}

fetch("https://dummyjson.com/recipes/tags")
.then(res => res.json())
.then(function(tags){
buildTagSelector(tags);
})
// vezba 5 -> prikazi recepte po selektoru 

selektor.addEventListener("change", function() {
    console.log(this.value);

    // let c = new URLSearchParams(window.location.search);
    // let urlTag = c.get("tags");
    // console.log(urlTag);

 
    let apiUrl = "https://dummyjson.com/recipes/tag/"+this.value;
    fetch(apiUrl)
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        allRecipes.innerHTML = "";
        console.log(data.recipes);
        for (let recipes of data.recipes) {
            createAllrecipes(recipes)
        }
    })

    // let getUrl = window.location.href
    // getUrl = "http://127.0.0.1:5500/16vezbanjeifetch/domaci/index.html?tags="+this.value;
    // window.location.href=getUrl;
   
})



function createAllrecipes(recipes) {

    let cookingInstructions = buildInstruction(recipes.instructions) //ovde uzimamo podatke od recepta -> instrukcije -> funkcija ih obradjuje i kreira listu

    singleRecipes = document.createElement("div");
    names = document.createElement("h1");
    preptime = document.createElement("h2");
    ingredients = document.createElement("p");
    //prep = document.createElement("p") // ja sam ovo unapred odradio kroz jednu funkciju, druga vezba kaze da ovo mora posebno

    names.textContent = recipes.name;
    preptime.textContent ="Prep time in minutes: " + recipes.prepTimeMinutes;
    ingredients.textContent = recipes.ingredients;
    // prep.textContent = recipes.instructions; // ja sam ovo unapred odradio kroz jednu funkciju, druga vezba kaze da ovo mora posebno

    singleRecipes.classList.add("recipe");
    names.classList.add("names");
    preptime.classList.add("preptime");
    ingredients.classList.add("ingredients");

    let permaLinkElem = document.createElement("a");
    permaLinkElem.textContent = "Show Recipe";
    permaLinkElem.href = "permalink.html?id="+recipes.id;

   

    singleRecipes.append(names, preptime, ingredients, cookingInstructions, permaLinkElem); // ovde kroz cookinInstructions (koji je funkcija) -> pravimo ul i apendujemo u jedan prozvod
    allRecipes.append(singleRecipes);

}


function buildInstruction(instructions) {
   let prep = document.createElement("ul");
        for (let recepti of instructions) {
          
            let list = document.createElement("li");
            list.innerText = recepti; // ne treba ti recipes.instro jer recipes vec sprovodis ovde, dovoljno je samo instro jer ih kroz instro vec sadrzi iskljucivo samo instructions
            prep.append(list);
        }
        return prep;
}

function buildTagSelector(tagovi) {
   
    for (tags of tagovi) {
       
        a = document.createElement("option");
        a.innerText = tags;
        a.value = tags;
    
        
        selektor.append(a);
        
    }
   


}



