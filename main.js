import { getWeather } from './js/getfromapi'
import { showCurrentTime } from './js/showtime'

const latitude = 59.3293
const longitude = 18.0686
getWeather(latitude, longitude)
showCurrentTime()
setInterval(() => showCurrentTime(), 1000)
