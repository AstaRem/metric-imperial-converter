// gaunam vartotojo įvedama reikšmę
// •
// Patikrinam įvesta reikšmę (ar tai skaičius ir panašiai)
// •
// Gaunam vartotojo padarytą pasirinkimą iš išskleidžiamų sąrašų, iš ko į ką konvertuosim
// •
// Išvedam rezultatą į ekraną vartotojui

const inputForm = document.querySelector('[data-input-form]');
const result = document.querySelector('[data-result]');

function showInputValues(event){
    event.preventDefault(); // stops the page refresh(before I can see the result in console)
    const amount = inputForm.querySelector("input").value; //input is in the form, so it is better select it in the form scope, not in document
    // const metricChoice = document.getElementById('metric-unit').value;
    const metricChoice = inputForm.querySelector('#metric-unit').value;
    const imperialChoice = document.querySelector('#imperial-unit').value;
    console.log(imperialChoice);
    console.log(metricChoice);
    console.log(amount);
    inputForm.querySelector("input").value = ''; // clears input field 

    let conversionKey = `${metricChoice}_to_${imperialChoice}`;

    console.log(conversionKey);

    let output = amount * conversionFactors[conversionKey];
    console.log(output);

    result.innerText = output;
}

inputForm.addEventListener("submit", showInputValues);

const conversionFactors = {
    'meter_to_inch': 39.37,
    'meter_to_foot': 3.28,
    'meter_to_mile': 0.00062,

    'centimeter_to_inch': 0.39,
    'centimeter_to_foot': 0.032,
    'centimeter_to_mile': 0.0000062137,
   
    'kilometer_to_inch': 39370.0032,
    'kilometer_to_foot': 3280.8336,
    'kilometer_to_mile': 0.6214

}

