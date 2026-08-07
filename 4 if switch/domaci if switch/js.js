
let dayOfTheWeek = "utorakrrrr";

switch (dayOfTheWeek) {

    case "ponedeljak":
        console.log("work work")
        break;
    case "utorak":
        console.log("Work work");
        break;

    case "sreda":
        console.log("work work");
        break;

    case "cetvrtak":
        console.log("Work work");
        break;

    case "petak":
        console.log("weekend is coming");
        break;

    case "subota":
        console.log("weekend!");
        break;

    case "nedelja":
        console.log("weekend!");
        break;
}


// aha nakon gledanja resenja moze to i krace tj pametnije
// izdvojili smo subotu nedelju i subotu kao i petak, ostatak je default.

switch (dayOfTheWeek) {

    case "nedelja":
    case "subota":
        console.log("weekend!");
        break;

    case "petak":
        console.log("weekend is coming");
        break;

    default:
        console.log("work work"); // sve ostalo u sustini ce biti work work (sto nije dobro, jer bilo sta da napisem on ce work work da kaze"


}