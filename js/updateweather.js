import { getWeatherDescr } from './weathercode'
export function updateWeather(
    temperature,
    weatherCode,
    wind,
    humidity,
    realFeel,
    uvIndex,
    sunrise,
    sunset
) {
    const { description, icon } = getWeatherDescr(weatherCode)

    // Update the weather div with temperature
    document.getElementById('temp').innerHTML = `${temperature} °C`
    // Dynamically add the weather icon class
    const weatherIconContainer = document.getElementById('weather-icon')
    weatherIconContainer.innerHTML = `${icon}`
    document.getElementById('wmo').innerHTML = `${description}`

    // Set additional weather information
    document.getElementById('wind').textContent = `Wind: ${wind}`
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`
    document.getElementById(
        'real-feel'
    ).textContent = `Real Feel: ${realFeel}°C`
    document.getElementById('uv-index').textContent = `UV Index: ${uvIndex}`
    document.getElementById('sunrise').textContent = `Sunrise: ${sunrise}`
    document.getElementById('sunset').textContent = `Sunset: ${sunset}`
}
