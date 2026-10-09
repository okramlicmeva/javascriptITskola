const mealDbApi = "https://themealdb.com/api/json/v1/1/";
const coctailDbApi = "https://www.thecocktaildb.com/api/json/v1/1/";
const getCategoryDetails = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
const getfullmealdetailsurl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
const response = await fetch(mealDbApi+"categories.php")
//const data = await response.json()
const data = await getMealDbData("categories.php")

let categorieSelector = document.querySelector("#categories");
let container = document.querySelector("#container");
// console.log(categorieSelector);
//random.php -> coctaildb

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
    // const response = await fetch(getCategoryDetails+categorieSelector.value);
    const data = await getMealDbData("filter.php?c="+categorieSelector.value)
    console.log(data);
    
    for (let meals of data.meals) {
        let minirecipes = document.createElement("div");
        minirecipes.className = "minidivs";
       
       
        console.log(meals.idMeal);
        let img = document.createElement("img");
        let title = document.createElement("h5");
        let country = document.createElement("p");
        
        minirecipes.append(img, title, country, );

        img.className = "foodimg";


        title.innerText = meals.strMeal;
        img.src = meals.strMealThumb;
        country.innerText = meals.strCountry;

        
        container.append(minirecipes)

      minirecipes.addEventListener("click", async () => {
          // let getfullmealdetails = await fetch(getfullmealdetailsurl+meals.idMeal)
          let responses = await getMealDbData("lookup.php?i="+meals.idMeal)
          let coctailresponse = await fetch(coctailDbApi+"random.php");
          let data = await coctailresponse.json()
          let coctailtitle = document.getElementById("coctailtitle");
          coctailtitle.innerHTML ="Coctail Suggestion: " + data.drinks[0].strDrink
          console.log(data);
          console.log(data)
          let popic = document.getElementById("popup");
          let mealtext = document.querySelector("#mealdetails");
          console.log(mealtext);
          mealtext.innerHTML = responses.meals[0].strInstructions;
          popic.style.display ="block";
      });


    }
    
  
    
 
   
})


document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
})

async function getMealDbData(endpoint) {
  let response = await fetch(mealDbApi+endpoint);
  return await response.json();
}

function showDivs(meals) {
  let minirecipes = document.createElement("div");
        minirecipes.className = "minidivs";
       
       
        console.log(meals.idMeal);
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



let filterByCaregory = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";


// function renderRecipies(values){
    
//     let minirecipes = document.createElement("div");
//     minirecipes.innerHTML = "test";
//     container.append(minirecipes);

    
// }

// async function popup(meals) {
  
//   let getfullmealdetails = await fetch(getfullmealdetailsurl+meals.idMeal)
//   let responses = await getfullmealdetails.json();
//   let popic = document.getElementById("popup");
//   let mealtext = document.getElementById("mealdetails");
//   mealtext.innerHTML = responses.meals[0].strInstructions;
//   popic.append(mealtext);
//   popic.style.display ="block";
// }


//sredjivanje koda funckija koja ce se bavciti pozivanjem api.. 
