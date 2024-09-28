import { getWeatherDescr } from './weathercode'
export function updateWeather(
    temperature,
    weatherCode,
) {
    const { description, icon } = getWeatherDescr(weatherCode)

    // Update the weather div with temperature
    document.getElementById('temp').innerHTML = `${temperature} °C`
    // Dynamically add the weather icon class
    const weatherIconContainer = document.getElementById('weather-icon')
    weatherIconContainer.innerHTML = `${icon}`
    document.getElementById('wmo').innerHTML = `${description}`
}

export function displayForecast(daily) {
    const { temperature_2m_max, temperature_2m_min, weathercode, time } = daily
    const forecastContainer = document.getElementById('forecast-container')
    forecastContainer.innerHTML = ''

    for (let i = 0; i < temperature_2m_max.length; i++) {
        const maxTemp = temperature_2m_max[i]
        const minTemp = temperature_2m_min[i]
        const date = new Date(time[i]).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'numeric',
            day: 'numeric'
        })

        const weather = getWeatherDescr(weathercode[i])

        const cardHTML = `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
                         <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">${date}</h5>
                                <h5 class="card-title">${weather.iconsymbol}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${weather.description}</h6>
                                <p class="card-text"><span class="low"> ${maxTemp}°</span> | <span class="low">${minTemp}°</span></p>
                            </div>
                        </div>
                    </div>
                `

        forecastContainer.innerHTML += cardHTML
    }
}
