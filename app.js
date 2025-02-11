// gaunam vartotojo įvedama reikšmę
// •
// Patikrinam įvesta reikšmę (ar tai skaičius ir panašiai)
// •
// Gaunam vartotojo padarytą pasirinkimą iš išskleidžiamų sąrašų, iš ko į ką konvertuosim
// •
// Išvedam rezultatą į ekraną vartotojui

const inputForm = document.querySelector('[data-input-form]');

function showInputQty(event){
    event.preventDefault(); // stops the page refresh(before I can see the result in console)
    const amount = inputForm.querySelector("input").value; //input is in the form, so it is better select it in the form scope, not in document
    // const metricChoice = document.getElementById('metric-unit').value;
    const metricChoice = inputForm.querySelector('#metric-unit').value;
    const imperialChoice = document.querySelector('#imperial-unit').value;
    console.log(imperialChoice);
    console.log(metricChoice);
    console.log(amount);
    inputForm.querySelector("input").value = ''; // clears input field 
}

inputForm.addEventListener("submit", showInputQty);
