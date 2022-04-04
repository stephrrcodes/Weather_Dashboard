var cityEnteredEl = document.querySelector("#city");
var weatherContainerEL = document.querySelector("#current-weather-container");
var citySearchEl = document.querySelector("#searched-city");
var forecastHeader = document.querySelector("#forecast")
var pastSearchesEl = document.querySelector("#past-searches")
var fivedayContainerEl = document.querySelector("#fiveday-container")

var cities = [];

function displayWeather(event){
    event.preventDefault();
    var city = cityEnteredEl.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityEnteredEl.value = "";
    } else{
        alert("Enter city name");
    }
    saveSearch();
    pastSearch(city);
}
var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};
