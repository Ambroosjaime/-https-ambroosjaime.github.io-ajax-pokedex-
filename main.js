/*$("#buttonGlass").click(function getRequest() {
    let url = "https://pokeapi.co/api/v2/pokemon/"
    let inputName = document.getElementById("text").value
    xhr = new XMLHttpRequest();
    xhr.open("GET", url + inputName, true);
    xhr.onreadystatechange = function () {
        /*Functie die moet worden uitgevoerd bij het wijzigen van de staat tijdens de AJAX-procedure*/
/*hier maak in een variable, uit de input id gaat je de waarde halen en deze ga je bijhouden met behulp van Value*/

/* if (xhr.readyState == 4 && xhr.status == 200) {
     //Antwoord van de server

     let response = JSON.parse(xhr.responseText);
     /*response die je wilt hebben */
/*let pokeName = response.name

/*   document.getElementById("name").innerHTML = pokeName;  

        };
    };
    xhr.send();
});
*/

$("#buttonGlass").click(function getRequest() {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            /*response is dat je een antwoord krijgt en de foto's noemt sprites image zoeken*/
            image.src = response.sprites.front_default;

            document.getElementById("name").innerHTML = "<strong>Name: </strong>" + response.name;
            document.getElementById("idPKM").innerHTML = "<strong>Id: </strong>" + response.id;
            document.getElementById("height").innerHTML = "<strong>Height: </strong>" + response.height;
            document.getElementById("weight").innerHTML = "<strong>Weight: </strong>" + response.weight;

            console.log(response.sprites.front_default);
            console.log(response.name);
            console.log(response.height);
            console.log(response.weight);

        }
    }
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + "pikachu", true);
    xhr.send();

})