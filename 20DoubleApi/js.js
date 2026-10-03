const mealDbApi = "https://themealdb.com/api/json/v1/1/";
const getCategoryDetails = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

const response = await fetch(mealDbApi+"categories.php")
const data = await response.json()


let categorieSelector = document.querySelector("#categories");
let container = document.querySelector("#container");
// console.log(categorieSelector);


renderOptions(data)

function renderOptions(options) {

    console.log(options)
    for (let eachcategory of options.categories) {
      let categoryselect = document.createElement("option")
      categoryselect.value = eachcategory.strCategory;
      categoryselect.innerHTML = eachcategory.strCategory;
    
      categorieSelector.append(categoryselect);
  
    }
  

}

categorieSelector.addEventListener("change", async ()=> {
  container.innerHTML ="";
    const response = await fetch(getCategoryDetails+categorieSelector.value);
    const data = await response.json();
    console.log(data);
    
    for (let meals of data.meals) {
        let minirecipes = document.createElement("div");
        minirecipes.className = "minidivs";
       
        console.log(meals);
        let img = document.createElement("img");
        let title = document.createElement("h5");
        let country = document.createElement("p");
        
        minirecipes.append(img, title, country, );

        img.className = "foodimg";


        title.innerText = meals.strMeal;
        img.src = meals.strMealThumb;
        country.innerText = meals.strCountry;

        
        container.append(minirecipes)
    }
    
  
    
 
   
})


//vezba kad kliknes tj izaberes odredjenu kategoriju da ti recepte --> koristi recept api. nek ispise 


//filter by category

let filterByCaregory = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";


// function renderRecipies(values){
    
//     let minirecipes = document.createElement("div");
//     minirecipes.innerHTML = "test";
//     container.append(minirecipes);

    
// }