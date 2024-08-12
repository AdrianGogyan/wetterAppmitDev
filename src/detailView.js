import { rootElement } from "../main";
import { getForecastWeather } from "./api";
import { formatTemperatur } from "./utils";

export async function loadDetailView(){
    //loading screen
    // daten fetchen
    const weatherData = await getForecastWeather("Mannheim");
    // detail view rendern
    renderDetailView(weatherData);
    // eventlistener registrieren
}

function renderDetailView(weatherData){
    
    const {location, current, forecast} = weatherData;
    const currentDay = forecast.forecastday[0];


    rootElement.innerHTML = getHeaderHtml(
        location.name, 
        formatTemperatur(current.temp_c), 
        current.condition.text, 
        formatTemperatur(currentDay.day.maxtemp_c), 
        formatTemperatur(currentDay.day.mintemp_c));
}

function getHeaderHtml(location, currentTemp, condition, maxTemp, minTemp){
    return `
        <div class="currentWeather">
            <h2 class="currentWeathe__location">${location}</h2>
            <h1 class="currentWeather__current-temperature">${currentTemp}°</h1>
            <p class="currentWeather__condition">${condition}</p>
            <div class="currentWeather__day-temp">
                <span class="currentWeather__max-temp">H: ${maxTemp}°</span>
                <span class="currentWeather__min-temp">T: ${minTemp}°</span>
            </div>
        </div>
    `;
}