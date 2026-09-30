const mealDbApi = "https://themealdb.com/api/json/v1/1/"

const response = await fetch(mealDbApi+"categories.php")
const data = await response.json()


let categorieSelector = document.querySelector("#categories");
// console.log(categorieSelector);


renderOptions(data)

function renderOptions(options) {

    console.log(options)
    for (let eachcategory of options.categories) {
      let categoryselect = document.createElement("option")
      categoryselect.value = eachcategory.idCategory;
      categoryselect.innerHTML = eachcategory.strCategory;
      categorieSelector.append(categoryselect);

    }

}

//vezba kad kliknes tj izaberes odredjenu kategoriju da ti recepte --> koristi recept api. nek ispise 