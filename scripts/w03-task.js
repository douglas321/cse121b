/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  
  function addNumbers() {
    
    const addNumber1 = parseFloat(document.getElementById('add1').value);
    const addNumber2 = parseFloat(document.getElementById('add2').value);
  
    const sumResult = add(addNumber1, addNumber2);
  
    document.querySelector('#sum').value = sumResult;
  }
  
  document.querySelector('#addNumbers').addEventListener('click',addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
  }
  
  
  function subtractNumbers() {
    
    const subtractNumber1 = parseFloat(document.getElementById('subtract1').value);
    const subtractNumber2 = parseFloat(document.getElementById('subtract2').value);
  
    const differenceResult = subtract(subtractNumber1, subtractNumber2);
  
    document.querySelector('#difference').value = differenceResult;
  }
  
  document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;


const multiplyNumbers = () => {
  
  const multiplyNumber1 = parseFloat(document.getElementById('factor1').value);
  const multiplyNumber2 = parseFloat(document.getElementById('factor2').value);

  
  const productResult = multiply(multiplyNumber1, multiplyNumber2);


  document.querySelector('#product').value = productResult;
}


document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
  }
  
  
  function divideNumbers() {
    
    const divideNumber1 = parseFloat(document.getElementById('dividend').value);
    const divideNumber2 = parseFloat(document.getElementById('divisor').value);
  
    const quotientResult = divide(divideNumber1, divideNumber2);
  
    document.querySelector('#quotient').value = quotientResult;
  }
  
  document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);


/* Decision Structure */
const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.getElementById('year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById('array').textContent = numbersArray;
/* Output Odds Only Array */
const oddNumbersArray = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbersArray;
/* Output Evens Only Array */
const evenNumbersArray = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbersArray;
/* Output Sum of Org. Array */
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').textContent = sum;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const total = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').textContent = total;
