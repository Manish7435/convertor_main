/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input = document.getElementById("input")
let btnEl = document.getElementById("btn")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
btnEl.addEventListener("click",function(){
    convertor()
})

function convertor(){
   
    let feet = ((input.value)*(3.281)).toFixed(3)
    let meter = ((input.value)*(1/3.281)).toFixed(3)
    lengthEl.textContent= `${input.value} meters = ${feet} feets | ${input.value} feets = ${meter} meters`
    
    let gallons = ((input.value)*(0.264)).toFixed(3)
    let liters = ((input.value)*(1/0.264)).toFixed(3)
    volumeEl.textContent = `${input.value} liters = ${gallons} gallons | ${input.value} gallons = ${liters} liters`
    
    let pounds = ((input.value)*(2.204)).toFixed(3)
    let kilos = ((input.value)*(1/2.204)).toFixed(3)
    massEl.textContent = `${input.value} kilos = ${pounds} pounds | ${input.value} pounds = ${kilos} kilos`
    
}