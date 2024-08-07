document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
                document.getElementById('weather-result').innerHTML = weatherInfo;
            } else {
                document.getElementById('weather-result').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-result').innerHTML = `<p>Failed to fetch weather data.</p>`;
        });
});
