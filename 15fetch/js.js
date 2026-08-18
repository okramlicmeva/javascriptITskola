/**
 * najcesci nacini -> ajax, Axios, Fetch, postReq, XHR.. -> ovo su nazivi da pozovemo neki link, api
 * axios -> je dodatna biblioteka
 * ajax - dolazi uz jquery 
 * sve su ovo iste stvari, drugacije se zovu, samo ih je neko drugi napravio (kao posiljke, dhl kompanija, dex, posta srbije, kuriri u sustini)
 * sve su nacini da pozovemo neki api, u njima je i razlika -> ali ne treba brinuti oko svih razlicitih nacina, bitno je nauciti fetch, pa sve ostalo 
 * 
 * FETCH 
 * dummyjson -> lazni api da bi mogli da testiramo lazne stvari - nemamo podatke, koristimo dummyjson
 * /* -> api koji cemo pozvati, zato nam treba CORS (meaning -> cross origini resources sharing -> pravilo / politika.. izvor -> odakle pozivamo api. to je origin)
 * CORS
 *      -> izvor (origin) -> odakle pozivamo API
 *      -> da bi ovo resili ili primenjivali -> treba nam nas server
 *      -> sta server radi?-> potvrde, sertifikati -> da bi se jedan api pozvao, on ima validan izvor (live server u vscode) 
 * 
 * // mora da postoji protokol https:// -> ako ne stavimo on pokusava to da otvori na nasem serveru ne na tudjem, jako je kljucno staviti https:// -> OBAVEZNO
 * // js onda zna da treba da ucita podatke sa internet (negde drugde), a ne sa mog racunara. 
 * 
 * NETWORK TAB
 * // network je kljucan kada se radi sa API-ima, pored svega ostalog sto radi i ucitava -> sve belezi
 * // network taboivi -> headers -> svaki poziv / izvora -> saljemo header-e 
 */


// PROMISE


// let response = fetch("https://dummyjson.com/test") 
// console.log(response)

// ovo ne moze ovako, jer nije klasicna funckija
// ove stvari se desavaju asinhrono -> idi na dummyjson/test -> u nekoj situaciji kazemo uzmi odgovor -> i onda imamo korak koji kaze prikazi odgovor
// sve ovo se radi asinhrono -> async (kao rec), kada odradimo ovaj poziv -> radi nesto sto se zove promise
// promise -> garancije da cemo dobiti odgovor (obecanje)
// ne znamo kada ce biti odgovor, sta ce biti odgovor, da li uopste dolazi do neke greske? (ovo su 3 nepoznanice koje su nama poznate)
// one nam kazu da cemo u nekom trenutku dobiti odgovor, ali ne znamo kad (ucitavanje, cekanje, server erros....)

// pozivi -> https://dummyjson.com/test
// promisa mi obecava / garantuje da cu nekada dobiti neki odgovor
// a kod nastavlja dalje da se izvrsava

// 


let response = fetch("https://dummyjson.com/test") // on je napravio ovaj poziv -> sad cekamo da vidimo kada ce odgovor doci 
.then(function(response) {
    if(response.ok){
        console.log("uspesno smo pozvali api");
        return response.json();
    }
})
.then(function(data) {
    console.log(data.status);
})


// u ovom primeru imamo sledece -> nama promisa obecava da ce dati odgovor ali ne znam kada -> moze se desiti i za 10 minuta
// ali nas kod nastavlja dalje da se izvresava, zato u konzoli i vidimo prvo broj 1 -> pa onda 2. 
// sta ovo resava -> 


let productsEle = document.getElementById("allProducts");
fetch("https://dummyjson.com/products?limit=20&sortBy=price&order=desc")
.then(function(response) {
    console.log(response);
    return response.json()
})
.then (function(data){
    
console.log(data)
// a = data.products;
// console.log(a);

// for (products of a) {
//     console.log("Title is: " +  products.title, "Category is :" + products.category);
// }
// nije moralo ovako, moglo je i na sledeci nacin ispod


//vezbva 15.13 ispisati sve prozivode i categorije unutar jednog diva koji vec imamo napraljen. 

for (let productes of data.products) {
   
    appendProductToDiv(productes);
   
    
}

})


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


//zadatak 2 -> api vraca dvadeset podataka, sortiranih po ceni od najvise ka najnizoj. 

//domaci -> pretraga -> input polje u koje unosimo tekst -> kliknem pretrazi i koristi njihov api kako bi pretrazio taj odredjeni prozivod. 