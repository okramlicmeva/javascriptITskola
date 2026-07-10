
let namess = prompt("Kako se zoves?");
namess = namess.toLowerCase();
console.log(namess);

let names = ["marko", "milan", "zoran", "djordje"]

if (names.includes(namess)){
    alert("Dobrodosao Administratore");
} else {
    alert("Nemate pristup sajtu");
}
