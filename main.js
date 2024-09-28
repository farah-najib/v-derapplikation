import { getWeather } from './js/api'
import { showCurrentTime } from './js/time'

const latitude = 59.3293
const longitude = 18.0686
getWeather(latitude, longitude)
showCurrentTime()
setInterval(() => showCurrentTime(), 1000)
