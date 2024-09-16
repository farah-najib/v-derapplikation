import { updateWeather } from './updateweather'

export async function getWeather(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=Europe/Stockholm`
        )
        const data = await response.json()

        // Extract the current temperature (assuming hourly data)
        const {
            temperature,
            windspeed,
            winddirection,
            apparent_temperature,
            weathercode,
            uv_index
        } = data.current_weather
        const { sunrise, sunset } = data.daily

        // Convert wind direction to cardinal points (e.g., East, West)
        const windDirection = getWindDirection(winddirection)

        // Convert Unix sunrise/sunset time to human-readable format
        const formattedSunrise = new Date(sunrise[0]).toLocaleTimeString()
        const formattedSunset = new Date(sunset[0]).toLocaleTimeString()

        updateWeather(
            temperature,
            weathercode,
            `${windspeed} km/h ${windDirection}`,
            data.current_weather.humidity,
            apparent_temperature,
            uv_index,
            formattedSunrise,
            formattedSunset
        )
    } catch (error) {
        console.error('Error fetching weather data:', error)
        document.getElementById('temperature').innerHTML =
            'Failed to load weather data.'
    }
}
function getWindDirection(degrees) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    const index = Math.floor((degrees + 22.5) / 45) % 8
    return directions[index]
}


//   export async function fetchWeather() {
//       const apiUrl =
//           'https://api.open-meteo.com/v1/forecast?latitude=59.3293&longitude=18.0686&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Stockholm&forecast_days=5'
//       try {
//           const response = await fetch(apiUrl)
//           const data = await response.json()
//           displayForecast(data.daily)
//       } catch (error) {
//           console.error('Error fetching weather data:', error)
//       }
//   }
