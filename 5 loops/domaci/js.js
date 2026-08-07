// domaci -> ako ime automobila pocinje slovom "a", ne ispisati ga.
// moj nacin, znam da sve pocinje sa velikim slovom i lako mi je da stavim starts with.
let cars = ["Abarth", "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Citroën", "Dacia", "Daewoo", "Daihatsu", "Dodge", "Ferrari", "Fiat", "Ford", "Genesis", "Honda", "Hummer", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lamborghini", "Lancia", "Land Rover", "Lexus", "Lincoln", "Lotus", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan", "Opel", "Peugeot", "Polestar", "Porsche", "Renault", "Rolls-Royce", "Saab", "Seat", "Škoda", "Smart", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"];


for (let i = 0; i < cars.length; i++){
    if (!cars[i].startsWith("A")) {
        console.log(cars[i]);
    }

}


// ovo je tomin way - verovatno bolji iz vise razloga
// standardizacija -> konvertuj slova tj pretvori u mala / velika

for (let c = 0; c < cars.length; c++) {

    let firstLetter = cars[c][0].toLowerCase();

    if (firstLetter === "a"){
        continue;
    }

console.log(cars[c])
}

/test