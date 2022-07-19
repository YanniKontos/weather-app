const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=4c553b35fe5bd4983d58eba9c3fe5c6c`;

fetch(apiUrl)

.then(response => response.json())

.then(data => {
    const tempDisplay = document.getElementById('temp-display');
    const humidityDisplay = document.getElementById('humidity-display'); 
    const conditionDisplay = document.getElementById('condition-display');
    const cloudIcon = document.getElementById('icon8');
    const sunIcon = document.getElementById('sunIcon');

    let tempValue = (data.main.temp);
    let humidity = (data.main.humidity);
    let precipitation = (data.weather[0].description);

    tempDisplay.innerHTML = `Temp: <br> ${Math.round(tempValue)}°C `;
    humidityDisplay.innerHTML = `Humidity: <br> ${humidity}%`;
    conditionDisplay.innerHTML = `Condition: <br> ${precipitation}`;
    
    function changeIcon() {
        if (precipitation === 'broken clouds' || precipitation === 'scattered clouds' ||
            precipitation === 'few clouds') {
            cloudIcon.src = '/visual media/cloud.png' 
        }

        else if (precipitation === 'clear sky') {
            cloudIcon.src ='/visual media/sun.png' 
        }

        else if (precipitation === 'shower rain' || precipitation === 'rain') {
            cloudIcon.src ='/visual media/rain.png' 
        }

        else if (precipitation === 'thunderstorm') {
            cloudIcon.src ='/visual media/thunder.png' 
        }

        else {
            cloudIcon.src ='/visual media/snow.png' 
        };
        
    };

    changeIcon()
    // else if spaghetti code , much help appreciated !

    
    console.log(data);

});