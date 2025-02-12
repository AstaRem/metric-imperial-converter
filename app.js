// gaunam vartotojo įvedama reikšmę
// •
// Patikrinam įvesta reikšmę (ar tai skaičius ir panašiai)
// •
// Gaunam vartotojo padarytą pasirinkimą iš išskleidžiamų sąrašų, iš ko į ką konvertuosim
// •
// Išvedam rezultatą į ekraną vartotojui

const inputForm = document.querySelector('[data-input-form]');
const result = document.querySelector('[data-result]');
const metricInput  = document.getElementById('metric-input');

const metricChoice = inputForm.querySelector('#metric-unit').value;
const imperialChoice = document.querySelector('#imperial-unit').value;    

let amount = '';
let validate;


function showInputValues(event){
    event.preventDefault(); // stops the page refresh(before I can see the result in console)
    amount = inputForm.querySelector("input").value; 
    amount = validateInput();
    // console.log(imperialChoice);
    // console.log(metricChoice);
    // console.log(amount);

    let conversionKey = `${metricChoice}_to_${imperialChoice}`;

    console.log(conversionKey);

    let output = amount * conversionFactors[conversionKey];
    console.log(output);

    result.innerText = output;
    // console.log(`number entered: ${amount}`);
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

function validateInput(){
 
    let sanitizedValue = amount.replace(/[^0-9]/g, '');
    metricInput.value = sanitizedValue;

    if(sanitizedValue.length === 0){
        setError('Only numbers please');
        return null;
    }

    const number = parseInt(sanitizedValue, 10); // 10 - desimtaine sistema
    console.log(`here is the number variable: ${number}`);
    clearError();
    return number;
}

function setError(message){
    infoMsg.textContent = '';
    infoMsg.style.opacity = '0';

    errorMsg.textContent = message;
    errorMsg.style.opacity = '1';
    errorMsg.style = 'color: red;text-align: center;';
    metricInput.style = 'border: 1px solid red ';
    metricInput.value = '';
}

function clearError(){
    errorMsg.textContent = '';
    errorMsg.style.opacity = '0';
    metricInput.style.border = 'none';
    infoMsg.style.opacity = '1';

}





