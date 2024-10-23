document.getElementById('getWeather').addEventListener('click', function() {
    const city = prompt("Please enter the city name:");
    const apiKey = 'YOUR_API_KEY';  // Replace this with your actual OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    if (city) {
        // Fetch weather data from OpenWeatherMap API
        fetch(url)
            .then(response => response.json())  // Convert the response to JSON
            .then(data => {
                // Log the API response in the console
                console.log(data);

                // Check if the city was found
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
