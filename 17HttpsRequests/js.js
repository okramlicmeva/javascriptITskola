/**
 * https://dummyjson.com/recipes?sortBy=name&order=asc (ovo su javni podaci)
 * get -> https://dummyjson.com/login?username=marko&password=12345 (ovo ne sme da bude javno, treba nam middleman)
 * 
 * middleman attack -> bi mogao da ukrade ovo iznad, zbog toga postoji post metoda da bi se tajno prosledili podaci (niko tu destinaciju ne zna osim
 * krajnog usera -> zato sluze psot requestovi, pozivamo putem razlicite metode, sifrovane pdatke dobijamo)
 * post - u pozadini salje (username, password....)
 * 
 * 
 * najvise se koristi kod
 * registracije
 * logina
 * password resset
 * kupovine 
 * osetljivi podaci = POST metoda
 * neosetljivi podaci = GET
 */


//vezba 1
let registerButton = document.getElementById("regBtn");
let names = document.querySelector(".names");
let surname = document.querySelector(".surname");
let age = document.querySelector(".age");


registerButton.addEventListener("click", function() {
console.log( names.value, surname.value, age.value);
})


fetch("https://dummyjson.com/auth/login", {
    //ovo je payload - podatke koje saljemo
    method: "POST",
    headers: {'Content-Type': "application/json"}, // nije uvek obavezan, ali ga treba proslediti da ga server prepoznaje -> mi ti saljemo content (sadrzaj) koji je u vodu jsona tj objekta
    body: JSON.stringify({ // moramo proslediti podatke u vidu string-a  p
    // primer body: "username:marko&passowrd=markomalevic123"
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
    }),
    
})
.then(response => response.json())
.then(function(data) {
    console.log(data);
})

//token - infomracija da smo ulogovani na sajtu / garancija / propusnica da smo ulogovani -> evo ti prousnica da mozes da imas dalje, da ne bi morali na svakoj stranici da se logijume


