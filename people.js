// people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const yourName= require("./names.js");

const yourHobbies= require("./hobbies.js")

function personHobbies(){

    const fullName = yourName();
    const hobbies = yourHobbies();

    return{
        fullName: fullName,
        hobbies: hobbies,
    }
}

console.log(personHobbies());