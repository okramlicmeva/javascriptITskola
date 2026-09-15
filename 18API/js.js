const apiUrl = "http://www.omdbapi.com/"
let apiKey = "1e4cff59";


fetch(apiUrl+"?apikey="+apiKey+"&t=Terminator")
.then(result => result.json())
.then(function(data) {
    console.log(data);
})