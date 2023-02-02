var button = document.querySelector(".submit")
var temp = document.querySelector("#temp")
var name = document.querySelector("#name")
var clouds = document.querySelector("#clouds")
var weather = document.querySelector("#weather")
// this allows for future IDs to be used in functions and if statement below.

const input = document.querySelector('.input')
input.addEventListener('keypress', setQuery);
// This adds an event listener to the input text box.

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getresults(input.value);
        console.log(input.value);
    }
}
// this plugs in the value to match the input above or transfer to a no city found statement.

function weatherBalloon(cityID) {
    var key = '2c630db7e04b1c9bd7a6667ef6186aa0';
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityID + '&appid=' + key)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data.list[0].main.temp);
            temp.textContent = data.list[0].main.temp
// This places the data in kelvins for temperature under the ID temp
    

            console.log(data.list[0].wind.speed)
            clouds.textContent = data.list[0].wind.speed;
            // this retrieves the data from directly under the data list and pasts it in the ID location of clouds.
        })
        .catch(function () {

        });
}



button.addEventListener('click', function () {
    weatherBalloon(input.value);
});
// This code strip listens for the submit button and also functions with the input box to find a value that suits the data.

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
}
// This serves no purpose, but was meant to apply farenheit to the kelvin value instead, but failed horribly to actually make it work.