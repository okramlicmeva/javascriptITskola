

let ads = [
    {
        title: "Skoda octavia 2015",
        price: 9950,
        image: "https://car-images.bauersecure.com/wp-images/13846/0001skodaoctaviatdireview.jpg"

    },
    {
        title: "Ford Mustang",
        price: 11950,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWYmmZ04Usl6NiT5aaO0GH2xFbp23dOUz5Az1IyZFIPIgPY_wXK3RNSI&s=10"

    },
    {
        title: "Audi A4 2022",
        price: 23650,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5iOl7T1oe83Q-j3tXpWWPN9HLJutCQsARv-DFtmfm5Y0l7ViUFo3e9M&s=1"

    }

];


console.log(ads[0].title);


let divTitles = document.getElementsByClassName("title");
let divPrices = document.getElementsByClassName("price");
let divImages = document.getElementsByClassName("image");


for (let i = 0; i <= ads.length; i++) {




    divTitles[i].innerText = "Name: " + ads[i].title;
    divPrices[i].innerText = "Price: $" + ads[i].price;
    divImages[i].src = ads[i].image;

}