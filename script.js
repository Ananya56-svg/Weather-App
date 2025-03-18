async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "4c99fe3c677c8b43262cff20f4c9d216";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        const icon = data.weather[0].icon;
        const weather = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon">
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Feels Like: ${data.main.feels_like}°C</p>
            <p>Weather: ${data.weather[0].main}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Pressure: ${data.main.pressure} hPa</p>
        `;
        document.getElementById("weatherResult").innerHTML = weather;
    } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found!</p>`;
    }
}
