const apiUrl = `#`

fetch(apiUrl)

.then(response => response.json())

.then(data => {
    const tempDisplay = document.getElementById('temp-display');
    const humidityDisplay = document.getElementById('humidity-display'); 
    const conditionDisplay = document.getElementById('condition-display');
    const cloudIcon = document.getElementById('cloudIcon');
    const sunIcon = document.getElementById('sunIcon');

    let tempValue = (data.main.temp);
    let humidity = (data.main.humidity);
    let precipitation = (data.weather[0].description)

    tempDisplay.innerHTML = `Temp: <br> ${Math.round(tempValue)}°C `;
    humidityDisplay.innerHTML = `Humidity: <br> ${humidity}%`;
    conditionDisplay.innerHTML = `Condition: <br> ${precipitation}`;
    
//    if (precipitation == 'clear sky') {
        
    
//    }
    
    console.log(precipitation);
    console.log(data);
});

