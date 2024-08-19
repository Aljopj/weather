async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '1777141cfc1c0c2b7a0722b68dd7531a'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${`1777141cfc1c0c2b7a0722b68dd7531a`}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weather').innerText = 'City not found';
        } else {
            const temperature = data.main.temp;
            const weather = data.weather[0].description;
            const weatherInfo = `Temperature: ${temperature}°C\nWeather: ${weather}`;
            document.getElementById('weather').innerText = weatherInfo;
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('weather').innerText = 'Error fetching weather data';
    }
}