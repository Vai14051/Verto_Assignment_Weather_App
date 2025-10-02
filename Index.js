// ================================
// DOM Elements
// ================================
const currentWeatherTab = document.querySelector(".currenttab");
const forecastWeatherTab = document.querySelector(".forecast");
const currentweathercard = document.querySelector(".current-weather-card");
const forecastweathercard = document.querySelector(".forecast-Card");
const forecastweatherinfo = document.querySelector(".weather-info-card");
const searchform = document.querySelector(".search-form");
const searchform1 = document.querySelector(".search-form1");
const searchInputCurrent = document.querySelector("[data-searchinput]");
const searchInputForecast = document.querySelector("[data-forecastsearchform]");

const searchFormCurrent = document.querySelector(".currentweather-searchform");
const searchFormForecast = document.querySelector(".forecastweather-searchform");

const loading = document.querySelector(".loading-gif");
// ================================
// API Keys
// ================================
const OPENWEATHER_KEY = "cecec8518b91e815e33be1c287ae0715"; // Current Weather
const WEATHERAPI_KEY = "a33c1cefa35e4d85b68175005250110";  // 5-day Forecast

// ================================
// Tab State
// ================================
let currentTab = currentWeatherTab;
currentTab.classList.add("current-tab");
searchform.classList.add("active");
// currentweathercard.classList.add("active");

// ================================
// Switch Tabs
// ================================
function switchTab(clickedTab) {
    if (clickedTab !== currentTab) {

        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if (currentTab === currentWeatherTab) {
            searchform.classList.add("active");
            // currentweathercard.classList.add("active");
            searchform1.classList.remove("active");
            forecastweathercard.classList.remove("active");
        } else {
            searchform.classList.remove("active");
            searchform1.classList.add("active");
            forecastweathercard.classList.add("active");
            currentweathercard.classList.remove("active");
        }
    }
}

// Event Listeners for Tabs
currentWeatherTab.addEventListener("click", () => switchTab(currentWeatherTab));
forecastWeatherTab.addEventListener("click", () => switchTab(forecastWeatherTab));

// ================================
// CURRENT WEATHER
// ================================
function renderWeatherInfo(data) {
    document.querySelector("[data-cityname]").innerText = data?.name || "❌ Not Available";
    document.querySelector("[data-temp]").innerText = data?.main?.temp ? `${data.main.temp}°C` : "--";
    document.querySelector("[data-clouds]").innerText = data?.clouds?.all ?? "--";
    document.querySelector("[data-humidity]").innerText = data?.main?.humidity ?? "--";
    currentweathercard.classList.add("active");
}

async function fetchCurrentWeather(cityName) {
    loading.classList.add("active");
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${OPENWEATHER_KEY}&units=metric`
        );

        if (!response.ok) throw new Error("❌ City not found");

        const data = await response.json();
        loading.classList.remove("active");
        renderWeatherInfo(data);
    } catch (error) {
        document.querySelector("[data-cityname]").innerText = error.message;
        document.querySelector("[data-temp]").innerText = "--";
        document.querySelector("[data-clouds]").innerText = "--";
        document.querySelector("[data-humidity]").innerText = "--";
    }
}

// Handle Search Submit (Current Weather)
searchFormCurrent.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityName = searchInputCurrent.value.trim();

    if (!cityName) {
        alert("⚠️ Please enter a city name");
        return;
    }
    fetchCurrentWeather(cityName);
});

// ================================
// 5-DAY FORECAST
// ================================
function renderForecastInfo(data) {
    forecastweatherinfo.innerHTML = ""; // Clear old cards
    const forecast = data.forecast.forecastday;

    forecast.forEach((day) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${day.date}</h3>
            <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
            <div class="temp">${day.day.avgtemp_c}°C</div>
            <p>${day.day.condition.text}</p>
            <p>Humidity: ${day.day.avghumidity}%</p>
            <p>Wind: ${day.day.maxwind_kph} kph</p>
        `;
        forecastweatherinfo.appendChild(card);
    });
}

async function fetchForecastWeather(cityName) {
    loading.classList.add("active");
    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_KEY}&q=${cityName},India&days=5`
        );

        if (!response.ok) throw new Error("❌ City not found");

        const data = await response.json();
        loading.classList.remove("active");
        renderForecastInfo(data);
    } catch (error) {
        forecastweatherinfo.innerHTML = `<p style="color:red; font-weight:600;">${error.message}</p>`;
    }
}

// Handle Search Submit (Forecast)
searchFormForecast.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityName = searchInputForecast.value.trim();

    if (!cityName) {
        alert("⚠️ Please enter a city name");
        return;
    }
    fetchForecastWeather(cityName);
});
