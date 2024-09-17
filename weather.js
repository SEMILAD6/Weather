const apiKey = '123d0e921cd2b7d348b3e448fd2ce5f6'; 

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'123d0e921cd2b7d348b3e448fd2ce5f6'}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => displayWeather(data))
        .catch(error => alert('An error occurred. Please try again.'));
}

function displayWeather(data) {
    if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
        return;
    }

    const weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}