import { weather_data } from './data.js';

let loadDayForecastData = (ciudad) => {
    //let [ciudad] = weather_data;
    let arrciudad = weather_data.filter(elemento => elemento.city === ciudad);
	let {city_code, city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, ...restoDeWeatherData} = arrciudad[0];

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
    //let [ciudad] = weather_data;
    let ciudad = document.getElementById("dropdownMenuButton").value;
    let arrciudad = weather_data.filter(elemento => elemento.city === ciudad);
	let {city_code, city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today, forecast_week, ...restoDeWeatherData} = arrciudad[0];

    let listaPronosticoSemana = document.getElementsByClassName('list-group');
    let plantilla_pronostico = '';

    for (let i = 0; i < forecast_week.length; i++) {
        let {day, text, date, temperature: {min, max}, icon} = forecast_week[i];

        plantilla_pronostico += `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
        <div class="d-flex flex-column">
          <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
          <span class="text-xs">${date}</span>
        </div>
        <div class="d-flex align-items-center ">
          <span class="font-weight-bold text-dark mx-2">${max}</span> |  <span class="text-dark mx-2">${min}</span>
          <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
        </div>
      </li>`;
    };

    listaPronosticoSemana[0].innerHTML = plantilla_pronostico;
s};

let cargaCiudades = () => {
    let plantilla_ciudades = `<option value="" selected disabled hidden>Seleccione una ciudad</option>`;
    let elementoDropDown = document.getElementById("dropdownMenuButton");

    for (let elemento of weather_data) {
        plantilla_ciudades += `<option class="dropdown-item" value="${elemento.city}">${elemento.city}</option>`;
    };

    elementoDropDown.innerHTML = plantilla_ciudades;
};

document.addEventListener("DOMContentLoaded", (event) => {
    cargaCiudades();
});

let elementoDropDown = document.getElementById("dropdownMenuButton");

elementoDropDown.addEventListener('change', (event) => {
    let ciudad = event.target.value
    document.getElementsByClassName('list-group')[0].innerHTML="";
    loadDayForecastData(ciudad);
});

let elementoCargar = document.getElementById("loadinfo");

elementoCargar.addEventListener('click', (event) => {
    loadWeekForecastData();
});
