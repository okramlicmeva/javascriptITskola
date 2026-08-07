// napravi funckiju "calcilateTax"
// njena uloga je, dva parametra amount, tax: porez (procenat)



function calculateTax(amount, tax){

    let totalTax = amount * (tax / 100);
    let totalAmount = amount + totalTax;

    console.log(totalAmount);
}

calculateTax(5000, 50)



// primer sa optional parametar (tax = 0.15) - uzima ga po default-u ako mi ne damo nesto drugo
function calculateTaxTwo (amount, tax = 0.15) {
return amount+(amount*tax);
}

let porezNaDobra = calculateTaxTwo(900,0.20);
porezNaDobra = porezNaDobra*7;
console.log(porezNaDobra)



function getFullName(firstName, lastName, middleName =''){

return firstName+ "  " + middleName+ " "+ lastName;;

}

getFullName("Marko", "Svetozar", "Malevic");
// ako podesimo da je middlename opcioni parametar, ne mzoemo ga preskociti
// moramo uvek opcioni parametar da stavljamo kao psoeldnji
// u sliucaju da gore nismo uneli "Svetozar", on bi napisao "Marko", "Malevic", "undefined"
// uzima da smo uneli middle name kao malevic, a treci ostavili prazan. 
// mozemo imati koliko god hocemo opcionih parametara 
// dobri su, ali savet je da ima jednog, a ne vise (jer onda onaj prvi ili drugi ne postaje vise opcioni)
// 


// return zapravo sluzi da hvatamo rezultat toga sto funckija radi,
// pa onda to prosledjujemo gde treba ili manipulisemo njim dodatno ako 
// to nesto zahteva dodatno wx. total*5 (ako je kupio 5 istih itema);


let punoIme = getFullName("marko", "malevic", "Joshua");
console.log(punoIme);


//vezba




// napravi funkciju koja se zove check games
// proslediti 2 stvari, listu aumobilia, i automobil koji trazimo
// ako uspesno proandje autmobil koji zelite u listi vratiti true
// ako ne pronadjemo vratiti false



let listOfGames = ["God of War", "GTA", "Doom"]
function checkGames(games, game){
let contains;



for (igrice of listOfGames ){
    igrice = igrice.toLowerCase();
    game = game.toLowerCase();
    if (igrice === game) { // toma je ovde stavio igrice.toLowerCase() i game.toLowerCase()
        return true;
   
    } 
    

}
return false;

}

restulr = checkGames(listOfGames, "GTA");
console.log(restulr);

let result2 = listOfGames.includes("Doom");
console.log(result2);
