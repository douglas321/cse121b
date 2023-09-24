/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Carter Sperry";
let currentYear = "2023";
let profilePicture = 'images/me.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById("food");
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('image');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of [Insert Name Variable]`);



/* Step 5 - Array */

let favFoods = ['ramen', 'popcicles', 'pizza'];
let favFood = 'potato';

foodElement.innerHTML = `${favFoods}`;

favFoods.push(favFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;




