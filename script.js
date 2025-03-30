// populate the select element
addPokemon();

// requests the list of pokemon and populates the select element
function addPokemon(){
    // create the request
    const request = new XMLHttpRequest();
    request.open("GET", "https://pokeapi.co/api/v2/pokemon/");
    
    request.onload = function(){    
        // pokeList stores the response
        let pokeList;
        pokeList = JSON.parse(this.response);

        // if the request is successful
        if (request.status == 200){
            console.log("Response OK.");
            pokeList.results.forEach(
                pokemon=>{
                    let option = document.createElement("option");
                    let textNode = document.createTextNode(`${pokemon.name}`);
                    option.appendChild(textNode);
                    document.querySelector("#pokeMenu").appendChild(option);
                });
            }

        // if the request has an error
        else {
            console.log(`Error Status: ${request.status}`);
        }   
    };
    // send request
    request.send(); 
}

// requests the selected pokemon's info and displays name, height, and weight
function pokeInfo(){
    // clear any previous outputs
    document.querySelector("#name").innerHTML = null;
    document.querySelector("#height").innerHTML = null;
    document.querySelector("#weight").innerHTML = null;

    // get the name of the pokemon the user selected and output it
    let pokemon = document.querySelector("#pokeMenu").value;
    document.querySelector("#name").innerHTML = pokemon;
    
    // create the request
    const request = new XMLHttpRequest();
    request.open("GET","https://pokeapi.co/api/v2/pokemon/".concat(pokemon));
    
    request.onload = function(){
        // pokeInfo stores the response
        let pokeInfo;
        pokeInfo = JSON.parse(this.response);
        
        // if the request is successful
        if (request.status = 200){
            console.log("Response OK.");

            let height = document.createElement("div");
            let heightNode = document.createTextNode(`${pokeInfo.height}`);
            height.appendChild(heightNode);
            document.querySelector("#height").appendChild(height);

            let weight = document.createElement("div");
            let weightNode = document.createTextNode(`${pokeInfo.weight}`);
            weight.appendChild(weightNode);
            document.querySelector("#weight").appendChild(weight);
        }
        // if the request has an error
        else{
            console.log(`Error status: ${request.status}`);
        }
    };
    // send request
    request.send();
}