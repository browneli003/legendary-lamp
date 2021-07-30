var getDailyWeather = function(lat, lon) {
    var openWeatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon +"&exclude=current.temp,current.wind_deg,current.humidity&appid=341d4c7bb0c2900cac68e22f95df4b8a"
    fetch(openWeatherAPI).then(function(response) {
        if(response.ok) {
        response.json().then(function(data) {

            //displayWeather(data);
    });
}
else { 
    alert("Please enter a city!");
}
    })
    .catch(function(error) {
        alert("Unable to display weather!");
    });
}

