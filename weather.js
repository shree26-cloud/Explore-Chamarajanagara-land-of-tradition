function loadWeather(latitude, longitude, placeName){

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`)

.then(response=>response.json())

.then(data=>{

console.log(document.getElementById("cityName"));
console.log(document.getElementById("temperature"));
console.log(document.getElementById("description"));
console.log(document.getElementById("humidity"));
console.log(document.getElementById("wind"));

document.getElementById("cityName").innerHTML=placeName;

document.getElementById("temperature").innerHTML=
"🌡️ "+data.current.temperature_2m+" °C";

document.getElementById("humidity").innerHTML=
"💧 Humidity : "+data.current.relative_humidity_2m+"%";

document.getElementById("wind").innerHTML=
"🌬️ Wind : "+data.current.wind_speed_10m+" km/h";

document.getElementById("description").innerHTML="Weather Updated";

});

}