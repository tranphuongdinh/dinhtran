const API_ID = "1f5b7f5451c8043db86577b9f1873729";

const searchInput = document.querySelector("#search-input");

const DEFAULT_VALUE = "--";

const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const windSpeed = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");

window.addEventListener("load", () => {
    getData("Ho Chi Minh", API_ID);
});

searchInput.addEventListener("change", (e) => {
    getData(e.target.value, API_ID);
});

const getData = (value, API_ID) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_ID}&units=metric&lang=vi`
    ).then(async (res) => {
        const data = await res.json();
        console.log(data);
        if (data.message === "city not found") {
            alert("Không tìm thấy thành phố!");
            searchInput.value = "";
            cityName.innerHTML = DEFAULT_VALUE;
            weatherState.innerHTML = DEFAULT_VALUE;
            weatherIcon.setAttribute(
                "src",
                `http://openweathermap.org/img/wn/10d@2x.png`
            );
            temperature.innerHTML = DEFAULT_VALUE;
            sunrise.innerHTML = DEFAULT_VALUE;
            sunset.innerHTML = DEFAULT_VALUE;
            humidity.innerHTML = DEFAULT_VALUE;
            windSpeed.innerHTML = DEFAULT_VALUE;
        } else {
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML =
                data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.setAttribute(
                "src",
                `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            );
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
            sunrise.innerHTML =
                moment.unix(data.sys.sunrise).format("H:mm") || DEFAULT_VALUE;
            sunset.innerHTML =
                moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML =
                (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
        }
    });
};
