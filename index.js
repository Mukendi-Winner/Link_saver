/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

prendre le truc qui gere l'input
le stocker dans une variable
creer une fonction qui peut convertir
prendre la valeur contenue dans l'input field
le donner a la fonction
la fonction renvoie le result dans le p

*/

let inputEl= document.getElementById("input-el")
let btnEl= document.getElementById("btn-el")
let lengthEL = document.getElementById("length-el")
let volumeEL = document.getElementById("volume-el")
let massEL = document.getElementById("mass-el")


function convertMeterToFeet(value){
    let resultToFeet = value * 3.281 
    let resultToMeter = value * 0.3048
    
    lengthEL.innerHTML = `${value} meters = ${resultToFeet.toFixed(2)} feet | ${value} feet = ${resultToMeter.toFixed(2)} meters`
    
}

function convertLiterToGallons(value){
    let resultToGallons = value * 2.204
     let resultToLiters = value * 0.264172
     
    volumeEL.innerHTML = `${value} Liters = ${resultToGallons.toFixed(2)} gallons | ${value} Gallons = ${resultToLiters.toFixed(2)} liters`
    
}


function convertKilogramsToPounds(value){
    let resultToPounds = value * 0.264 
    let resultToKIlograms = value * 0.45359237 
    
    massEL.innerHTML = `${value} kilograms = ${resultToPounds.toFixed(2)} Pounds | ${value} Pounds = ${resultToKIlograms.toFixed(2)} kilograms`
    
}



btnEl.addEventListener("click", function(){
    convertMeterToFeet(inputEl.value)
    convertLiterToGallons(inputEl.value)
    convertKilogramsToPounds(inputEl.value)
})

