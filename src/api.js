const api_base = "http://api.weatherapi.com/v1";
const api_key = "f64be6df2ee44509b3f50906241707";

export async function getForecastWeather(location, days = 3){
    const response = await fetch(`${api_base}/forecast.json?key=${api_key}&q=${location}&lang=de&days=${days}`);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
}