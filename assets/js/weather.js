import { weather_data } from './data.js';

let loadDayForecastData = () => {
    let [ciudad1] = weather_data;
	let {city_code, city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, ...restoDeWeatherData} = ciudad1;

    document.getElementById('city').innerHTML = city;
    document.getElementById('date').innerHTML = date;
    document.getElementById('maxtemperature').innerHTML = maxtemperature;
    document.getElementById('mintemperature').innerHTML = mintemperature;
    document.getElementById('cloudiness').innerHTML = cloudiness;
    document.getElementById('wind').innerHTML = wind;
    document.getElementById('rainfall').innerHTML = rainfall;

    let [tarde, noche] = forecast_today
    let {lapse, text, temperature, forecast, icon} = tarde;

    
};

let loadWeekForecastData = () => {
	
	
}


loadDayForecastData();
loadWeekForecastData();