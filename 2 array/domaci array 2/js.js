
//domaci:
// objekat koji se zove shop i da ima -> ime,
// prozivode (lista), radno vreme (open / close),


let shop = {
    name: "ememic",
    products: ["ram memory", "motherboards", "GPUs", "CPUs", "PSUs"],
    openHour: 7,
    closeHour: 15
}

console.log(shop);
let intro = "Moja radna " + shop.name + " pocinje da radi od " + shop.openHour + " i zatvara se u " + shop.closeHour + " svi ste dobrodosli";
console.log(intro);