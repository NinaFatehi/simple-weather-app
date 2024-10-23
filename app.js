
document.getElementById('getWeather').addEventListener('click', function() {
    const city = prompt("Please enter the city name:");
    const apiKey = '8f2160a8c95f5f92231c86b63321368d'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    if (city) {
        // Fetch weather data from OpenWeatherMap API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("API Response Data:", data);  // Log the full API response to the console

                if (data.cod === "404") {
                    document.getElementById('weatherInfo').innerHTML = `<p>City not found. Please try again.</p>`;
                } else {
                    const weatherInfo = `
                        <h2>${data.name}</h2>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                    `;
                    document.getElementById('weatherInfo').innerHTML = weatherInfo;
                }
            })
            .catch(error => {
                document.getElementById('weatherInfo').innerHTML = `<p>Something went wrong. Please try again.</p>`;
                console.error('Error fetching the weather data:', error);
            });
    } else {
        document.getElementById('weatherInfo').innerHTML = `<p>No city entered. Please try again.</p>`;
    }
});
  