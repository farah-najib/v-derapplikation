import { updateWeather } from './updateweather'
import { displayForecast } from './updateweather'

export async function getWeather(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=Europe/Stockholm`
        )
        const data = await response.json()

        // Extract the current temperature (assuming hourly data)
        const {
            temperature,
            weathercode

        } = data.current_weather

        updateWeather(
            temperature,
            weathercode,

        )
    } catch (error) {
        console.error('Error fetching weather data:', error)
        document.getElementById('temperature').innerHTML =
            'Failed to load weather data.'
    }
}

// Fetch 5-day weather data
export async function fetch5dayweather(latitude, longitude) {
     try {
   const response = await fetch(
       `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe/Stockholm&forecast_days=5`
   )
       const data = await response.json()
       displayForecast(data.daily)

    }
    catch (error) {
        console.error('Error fetching weather data:', error)
    }
}
