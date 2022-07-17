document.addEventListener("DOMContentLoaded", event => {
    let skycons8 = new Skycons({"color": "#00000"});
    skycons8.add("icon8", Skycons.CLOUDY);
    skycons8.play();
});


const apiUrl = `#`

fetch(apiUrl)

.then(response => response.json())

.then(data => {
    const tempDisplay = document.getElementById('temp-display');
    const humidityDisplay = document.getElementById('humidity-display'); 
    const precDisplay = document.getElementById('prec-display');
    const icon = document.getElementById('icon8');

    let tempValue = (data.main.temp);
    let humidity = (data.main.humidity);
    let precipitation = (data.weather[0].description)
    let weatherIcon = (data.weather[0].icon);

    tempDisplay.innerHTML = `Temp: <br> ${Math.round(tempValue)}`;
    humidityDisplay.innerHTML = `Humidity: <br> ${humidity}%`;
    precDisplay.innerHTML = `Precipitation: <br> ${precipitation}`;
    icon.style.backgroundImage = `${weatherIcon}`;

    console.log(data);
});
