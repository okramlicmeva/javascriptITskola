

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

//vezba 1
// izlistati 9 recepata
// ispisati u htmlu
// sortirati po imenu asc (a-z);

fetch("https://dummyjson.com/recipes?limit=9&sortBy=name&order=asc")
.then(res => res.json())
.then(function(data) {

    for(recipes of data.recipes) {
        createAllrecipes(recipes)
        console.log(recipes);
    }
});

fetch("https://dummyjson.com/recipes/tags")
.then(res => res.json())
.then(function(tags){
buildTagSelector(tags);
})


function createAllrecipes(recipes) {

    let cookingInstructions = buildInstruction(recipes.instructions) //ovde uzimamo podatke od recepta -> instrukcije -> funkcija ih obradjuje i kreira listu

    singleRecipes = document.createElement("div");
    names = document.createElement("h1");
    preptime = document.createElement("h2");
    ingredients = document.createElement("p");
    //prep = document.createElement("p") // ja sam ovo unapred odradio kroz jednu funkciju, druga vezba kaze da ovo mora posebno

    names.textContent = recipes.name;
    preptime.textContent = recipes.prepTimeMinutes;
    ingredients.textContent = recipes.ingredients;
    // prep.textContent = recipes.instructions; // ja sam ovo unapred odradio kroz jednu funkciju, druga vezba kaze da ovo mora posebno

    singleRecipes.classList.add("recipe");
    names.classList.add("names");
    preptime.classList.add("preptime");
    ingredients.classList.add("ingredients");

    singleRecipes.append(names, preptime, ingredients, cookingInstructions); // ovde kroz cookinInstructions (koji je funkcija) -> pravimo ul i apendujemo u jedan prozvod
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
        let a = document.createElement("option");
        a.innerText = tags;
        a.value = tags;
        selektor.append(a);
    }

}

