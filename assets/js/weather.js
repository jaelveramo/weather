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

    for (let i = 0; i <= 1; i++) {

        let {lapse, text, temperature, forecast, icon} = forecast_today[i];

        if (i === 0) {
            document.getElementById('late_icon').innerHTML = icon;
            document.getElementById('late_temperature').innerHTML = temperature;
            document.getElementById('late_forecast').innerHTML = forecast;
            document.getElementById('late_text').innerHTML = text;
        }
        else if (i === 1) {
            document.getElementById('night_icon').innerHTML = icon;
            document.getElementById('night_temperature').innerHTML = temperature;
            document.getElementById('night_forecast').innerHTML = forecast;
            document.getElementById('night_text').innerHTML = text;
        }
    };
};

let loadWeekForecastData = () => {
    let [ciudad1] = weather_data;
	let {city_code, city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, forecast_week, ...restoDeWeatherData} = ciudad1;

    let listaDeElementos = document.getElementsByClassName('list-group');

    for (i = 0; i < forecast_week.length; i++) {
        let {day, text, date, temperature, icon} = forecast_week[i];
        let {min, max} = temperature;

        let template_forecast = `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
          <span class="text-xs">${date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${max}</span> |  <span class="text-dark mx-2">${min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
        </div>
      </li>`;
    
        listaDeElementos.push(template_forecast);
    };
};


loadDayForecastData();
loadWeekForecastData();