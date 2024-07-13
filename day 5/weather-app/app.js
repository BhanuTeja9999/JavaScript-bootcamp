const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "0b6649d6466d91580383ec461c81da0a";

const cityForm = document.querySelector("#city-form");
const searchInput = document.querySelector("#search-input");
const loading = document.querySelector(".loading");
const error = document.querySelector(".error");
const weatherElm = document.querySelector(".weather");
const weatherBehaviorElm = document.querySelector("#behavior");
const weatherIconElm = document.querySelector("#weather-icon");
const temperatureElm = document.querySelector("#temp");
const humidityElm = document.querySelector("#humidity");
const windSpeedElm = document.querySelector("#wind-speed");
const cityElement = document.querySelector("#city");

const weatherBehaviors = {
    200: "Thunderstorm",
    300: "Drizzle",
    500: "Rain",
    600: "Snow",
    700: "Atmosphere",
    800: "Clear",
    801: "Clouds"
};

const weatherIcons = {
    200: "https://openweathermap.org/img/wn/11d@2x.png",
    300: "https://openweathermap.org/img/wn/09d@2x.png",
    500: "https://openweathermap.org/img/wn/10d@2x.png",
    600: "https://openweathermap.org/img/wn/13d@2x.png",
    700: "https://openweathermap.org/img/wn/50d@2x.png",
    800: "https://openweathermap.org/img/wn/01d@2x.png",
    801: "https://openweathermap.org/img/wn/02d@2x.png"
};

cityForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = searchInput.value.trim();
    if (!city || city.length === 0) return;

    const url = getRequestUrl(city);
    initializeState();

    const weatherData = await getWeatherData(url);
    if (weatherData) processWeatherData(weatherData);
    toggleLoading();
});

function getRequestUrl(location) {
    const apiUrl = new URL(WEATHER_API_URL);
    apiUrl.searchParams.append('q', location);
    apiUrl.searchParams.append('appid', API_KEY);
    apiUrl.searchParams.append('units', 'metric'); // Optional: to get the temperature in Celsius
    return apiUrl.href;
}

async function getWeatherData(url) {
    let response;
    try {
        response = await fetch(url);
    } catch (e) {
        error.hidden = false;
        return null;
    }
    if (response.ok) {
        const json = await response.json();
        return json;
    }
    error.hidden = false;
    return null;
}

function toggleLoading() {
    loading.toggleAttribute('hidden');
}

function initializeState() {
    toggleLoading();
    error.hidden = true;
    weatherElm.hidden = true;
}

function processWeatherData(data) {
    const weatherCode = data.weather[0].id;
    const weatherIcon = getWeatherIcon(weatherCode);
    const weatherBehavior = getBehaviour(weatherCode);

    weatherBehaviorElm.textContent = weatherBehavior;
    weatherIconElm.src = weatherIcon;
    temperatureElm.textContent = Math.round(data.main.temp);
    humidityElm.textContent = data.main.humidity;
    windSpeedElm.textContent = data.wind.speed;
    cityElement.textContent = data.name;

    weatherElm.hidden = false;
}

function getBehaviour(weatherCode) {
    if (weatherCode >= 200 && weatherCode < 300) return weatherBehaviors[200];
    if (weatherCode >= 300 && weatherCode < 400) return weatherBehaviors[300];
    if (weatherCode >= 500 && weatherCode < 600) return weatherBehaviors[500];
    if (weatherCode >= 600 && weatherCode < 700) return weatherBehaviors[600];
    if (weatherCode >= 700 && weatherCode < 800) return weatherBehaviors[700];
    if (weatherCode === 800) return weatherBehaviors[800];
    if (weatherCode > 800) return weatherBehaviors[801];
    return "Unknown";
}

function getWeatherIcon(weatherCode) {
    if (weatherCode >= 200 && weatherCode < 300) return weatherIcons[200];
    if (weatherCode >= 300 && weatherCode < 400) return weatherIcons[300];
    if (weatherCode >= 500 && weatherCode < 600) return weatherIcons[500];
    if (weatherCode >= 600 && weatherCode < 700) return weatherIcons[600];
    if (weatherCode >= 700 && weatherCode < 800) return weatherIcons[700];
    if (weatherCode === 800) return weatherIcons[800];
    if (weatherCode > 800) return weatherIcons[801];
    return "https://openweathermap.org/img/wn/01d@2x.png";
}
//User submits the form with a city name.
// The form submission triggers the event listener which prevents default behavior, gets the city name, constructs the API request URL, initializes the state, and fetches the weather data.
// If the data is successfully fetched, it is processed and displayed by updating the corresponding DOM elements.
// Loading animation and error messages are toggled appropriately throughout the process.