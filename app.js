document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '8f2160a8c95f5f92231c86b63321368d'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p>City not found. Please try again.</p>`;
            console.error('Error fetching the weather data:', error);
        });
});
