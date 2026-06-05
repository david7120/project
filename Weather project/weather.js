let searchBtn = document.getElementById("search-btn");
let cityInput = document.getElementById("city-input");
let weatherInfo = document.getElementById("weather-info");
let errorMsg = document.getElementById("error-msg");

// we use event handling
// this click event handling
searchBtn.addEventListener("click",
    getWeather);


// this keypress event handling
cityInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        getWeather();
    }
});

//   we use in async function  
async function getWeather() {
    let city = cityInput.value.trim();
    if (city === "") {
        alert("Enter city name");
        return;
    }
    //  create the weather  apikey
    let apiKey =
        "5bda7845939922903a35014239ed0bd4";
    let url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {

        weatherInfo.classList.add("hidden");
        errorMsg.classList.add("hidden");
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        if (data.cod === "404") {
            errorMsg.classList.remove("hidden");
            return;
        }

        document.getElementById("city-name").textContent = data.name;
        document.getElementById("description").textContent = data.weather[0].main;
        document.getElementById("temperature").textContent = Math.floor(data.main.temp);
        document.getElementById("wind").textContent = data.wind.speed;
        document.getElementById("humidity").textContent = data.main.humidity;
        weatherInfo.classList.remove("hidden");

        // current weather background change akum
        let weather = data.weather[0].main;
        if (weather === "Clear") {
            document.body.style.backgroundImage = "url('weather image/clear sky.jpg')";
        }
        else if (weather === "Clouds") {
            document.body.style.backgroundImage = "url('weather image/clouds-sky-clouds.jpg')";
        }
        else if (weather === "Rain") {
            document.body.style.backgroundImage = "url('weather image/rain sky.jpg')";
        }
        else {
            document.body.style.backgroundImage = "url('weather image/clear sky 1.jpg')";
        }
    }
    catch (error) {
        errorMsg.classList.remove("hidden");
        errorMsg.classList.remove("hidden");
        errorMsg.textContent = "Something went wrong";
    }
}
