let cars = [
{
    name: "BMW M4 Competition",
    price: 89500,
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=200&h=100&fit=crop",
    uploaded: 2024,
    godiste: 2002
},
{
    name: "Audi RS7",
    price: 128000,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=200&h=100&fit=crop",
    uploaded: 2024,
    godiste: 2005
},
{
    name: "Mercedes-Benz AMG GT",
    price: 119000,
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=200&h=100&fit=crop",
    uploaded: 2023,
    godiste: 2007
},
{
    name: "Porsche 911 Carrera",
    price: 114000,
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=200&h=100&fit=crop",
    uploaded: 2023,
    godiste: 2009
},
{
    name: "Lamborghini Huracán EVO",
    price: 249000,
    img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=200&h=100&fit=crop",
    uploaded: 2022,
    godiste: 2012
},
{
    name: "Ferrari F8 Tributo",
    price: 280000,
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=200&h=100&fit=crop",
    uploaded: 2026,
    godiste: 2014
},
{
    name: "Tesla Model S Plaid",
    price: 89990,
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=100&fit=crop",
    uploaded: 2026,
    godiste: 2016
},
{
    name: "Toyota Supra GR",
    price: 56900,
    img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=200&h=100&fit=crop",
    uploaded: 2026,
    godiste: 2018
}
    
];

for (car of cars) {
    console.log(car); //izlistao je svaki auto pojedinacno
 
    let carBox = document.createElement("div");
    let imageDiv = document.createElement("div");
    let mainInfo = document.createElement("div");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let date = document.createElement("p");
    let span = document.createElement("span");
    console.log(span);

    mainInfo.classList = "maininfo"
    carBox.classList = "box";
    title.classList = "title";
    price.classList = "price";
    date.classList = "date";
    span.classList = "spanic";

    span.innerText = car.godiste;
    imageDiv.style.backgroundImage = "url("+car.img+")"
    imageDiv.classList = "slika";

    title.innerText = car.name;
     span.textContent = car.godiste + ".god";
    price.innerHTML = "Price: " + car.price + "€";
    price.appendChild(span);
    date.textContent = car.uploaded;
    


    mainInfo.appendChild(title);
    mainInfo.appendChild(price);
  


    carBox.appendChild(imageDiv);
    carBox.appendChild(mainInfo);

    
    // ddate = uploaded -> kad je oglas uplodovan, i onda mi ima smisla da je 
    // "novi oglas" -> zato je dobio label "novi" -> a ne zato sto je nov auto. 
    // mozda sam se ja tu zeznuo, ali koncept se svodi na isto. 
     if (date.textContent == 2026) {
        imageDiv.appendChild(date);
        date.classList = "efekat";
        date.textContent = "Novo";
      
    }
   
    document.querySelector("#maindiv").appendChild(carBox);
}