var getDailyWeather = function(lat, lon) {
    var openWeatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly,alerts&units=imperial&appid=341d4c7bb0c2900cac68e22f95df4b8a"
    fetch(openWeatherAPI).then(function(response) {
        if(response.ok) {
        response.json().then(function(data) {

            displayWeather(data);
    });
}
else { 
    alert("Please enter a city!");
}
    })
    .catch(function(error) {
        alert("Unable to display weather!");
    });
};

var weatherForm = document.querySelector("#Cities");
var popularCity = document.querySelector("#bigcities");
var forecast = document.querySelector("#cities");
var dayForecast = document.querySelector("#forecast-container");
var search = document.querySelector("#searchbutton");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var cityName = weatherForm.value.trim();

    if (cityName) {
        getDailyWeather(cityName);
        return
    }

    }

    var displayWeather = function(name) {
        $("#forecast-container").empty();
        for (var i = 0; i < 5; i++) {
            var cityList = name[i].temp.humidity.wind;
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var dailyUnixTime = data.daily[i].dt;
            var millisecond = dailyUnixTime * 1000;
            var dailyDate = new Date(millisecond);
            var dailyDate = dailyDate.toLocaleString("en-US", options);
            var days = $("<div>");
            days.addClass("flex row list-item");
            var titleEl = document.createElement("span");
            titleEl.append(dailyDate, cityList);
            days.append(titleEl);

            $("#forecast-container").append(days);
            function displayCityInfo() {
            forecast.innerHTML = dayForecast;
            
        }
        displayCityInfo();
        //function displayCityInfo (data) {
            //forecast.innerHTML = data.name
        
        }
    }




weatherForm.addEventListener("click", formSubmitHandler);
