
let registerButton = document.getElementById("regBtn");
let names = document.querySelector(".names");
let surname = document.querySelector(".surname");
let age = document.querySelector(".age");
let godi = document.querySelector("#godine");

registerButton.addEventListener("click", function() {


if(names.value.trim() === "" || surname.value.trim() === "") {
    alert("Niste uneli sve podatke");
    return;
} else {
    console.log(names.value, surname.value, age.value);
}

register(names.value, surname.value, age.value);
document.createElement("button").inner
})


function register(names, surname, age) {
    fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {'content-type': "application/json"},
        body: JSON.stringify({
            firstName: names,
            lastName: surname,
            age: age
        })
    })
    .then(response => response.json())
    .then(function(data) {
        alert("Uspesno ste se registrovali sa imenom "+data.firstName);
        let btn = document.createElement("button");                         ////domaci -> pravimo dugme za delete nakon registracije
        btn.innerHTML = "Delete";                                           ////domaci -> pravimo dugme za delete nakon registracije
          console.log(data.id);                                             /// domaci -> proveravam da li ce da uhvati id koji trazim
        document.body.appendChild(btn);                                     /// domaci -> pojavljuje se samo nakon registracije
        btn.addEventListener("click", function() {                          /// domaci -> dodajem event listener na dugme 
            deleteUser(data.id);                                            /// domaci -> funkcija posebno napravljena za delete, prosledjujem id
        })
      
    })
}


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



for (let i = 21; i <= 100; i++) {
let options = document.createElement("option")
options.innerText = i;
godi.appendChild(options);

}




//domaci -> posle registracije -> kad kliknem register -> ispod treba da mi pokaze "delete" -> i na njegovo kliktanje da mi obrise korisnika kog sam ja licno napravio






function deleteUser(data) {                                     //// domaci -> funkcija za brisanje usera
    fetch("https://dummyjson.com/users/"+data, {                //// domaci -> funkcija za brisanje usera
        method: "DELETE"                                        //// domaci -> funkcija za brisanje usera
    })                                                          //// domaci -> funkcija za brisanje usera
    .then(response => response.json())                          //// domaci -> funkcija za brisanje usera
    .then(console.log)                                          //// domaci -> funkcija za brisanje usera 
} 