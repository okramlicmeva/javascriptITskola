let productsEle = document.getElementById("allProducts");
let fetchURL = "https://dummyjson.com/products";
let customSearch;
let searchText = document.querySelector("#searchField");
let searchBtn = document.querySelector("#searchButton");
searchBtn.addEventListener("click", collect)
console.log(searchBtn)
console.log(searchText);


//jedina stvar koja me kopa je ta sto nemamo unapred display prozivoda, vec praznu listu koja radi samo onda kada search-ujemo nesto
// u real life scenariju to ne bi bilo tako, vec bi imao prozivode, pa bi onda trazio u zavisnosti gde si na strani. (gigatron kao primer); / ali ajde mozda previse razmisljam


// zadatak -> kada ponovo searchujes nemoj da nadodaje -> neko obrise to sto je pokazao i priikaze samo nove rezultat.. 
     // znaci na neki nacin moram da ispraznim div -> znaci mora da isprazni all products, pa da doda nove products po kljucnoj reci
     // uspeli smo
     




function collect(){
    productsEle.replaceChildren();
    customSearch = fetchURL+"/search?q="+searchText.value;
    console.log(customSearch)
    fetch(customSearch)
    .then(function(response) {
    console.log(response);
    return response.json()
})
    .then (function(data){
    console.log(data)


for (let productes of data.products) {
    appendProductToDiv(productes);
}

})

}


function appendProductToDiv(productes){
     let oneProduct = document.createElement("div");
    let productTitle = document.createElement("h2");
    let productcategory = document.createElement("h3");
    let productprice = document.createElement("h6");
    console.log(oneProduct);
    oneProduct.classList.add("test")

    productTitle.textContent = productes.title;
    productcategory.textContent = productes.category;
    productprice.textContent = productes.price;
    oneProduct.append(productTitle, productcategory, productprice);
    allProducts.append(oneProduct);
};



// ne razumem, mozda samo mogao funkciju da pozovem u fetch, umesto sto sam obrnuto odradio? (to sto sam fetch stavio u funkciju)
// u mojoj glavi je fetch je odradio svoje nasao je neke random prozivode, ja sam ga onda update na nesto specificno (search custom api link) -> nasao prozivode i prikazao njih
// tada ako bih refreshovao stranu sve bi se ponistilo opet bi se vratilo na to da pokazuje random prozivode dok ne odradim search.. nisam pametan
// predajem domaci pa gledam resenje