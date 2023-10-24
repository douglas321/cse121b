

const apiKey = 'cc1d36385049ac3f417c09568ebef49e';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;

    if (city) {
        getWeatherData(city);
    } else {
        displayError('Please enter a city name. (ex. Paris, Rexbug, London)');
    }
});

function getWeatherData(city) {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            displayError(error.message);
        });
}

function displayWeatherData(data) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h2>Weather in ${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°F</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

function displayError(message) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p class="error">${message}</p>`;
}
