const weatherCodeMap = {
    0: {
        description: 'Clear sky',
        icon: '<div class="weather-sun"><div class="sun"><div class="rays"></div><div class="rays"></div><div class="rays"></div><div class="rays"></div></div></div>',
        iconsymbol: '☀️'
    },
    1: {
        description: 'Mainly clear',
        icon: '<div class="weather-sun"><div class="sun"><div class="rays"></div><div class="rays"></div><div class="rays"></div><div class="rays"></div></div></div>',
        iconsymbol: '🌤️'
    },
    2: {
        description: 'Partly cloudy',
        icon: '<div class="weather-cloudAndSun" style="background-color: red;"><div class="cloud"></div><div class="sun"><div class="rays"></div><div class="rays"></div><div class="rays"></div><div class="rays"></div></div></div>',
        iconsymbol: '⛅'
    },
    3: {
        description: 'Overcast',
        icon: '<div class="weather-cloud"><div class="cloud"></div><div class="cloud"></div></div>',
        iconsymbol: '☁️'
    },
    45: {
        description: 'Foggy',
        icon: '	<div class="weather-cloud"><div class="cloud"></div><div class="cloud"></div></div>',
        iconsymbol: '🌫️'
    },
    48: {
        description: 'Depositing rime fog',
        icon: '<div class="weather-cloud"><div class="cloud"></div><div class="cloud"></div></div>',
        iconsymbol: '🌫️'
    },
    51: {
        description: 'Light drizzle',
        icon: '<div class="weather-sun"><div class="sun"><div class="rays"></div><div class="rays"></div><div class="rays"></div><div class="rays"></div></div></div>',
        iconsymbol: '🌧️'
    },
    61: {
        description: 'Light rain',
        icon: '	<div class="weather-rain"><div class="cloud"></div><div class="rain"></div><div class="rain"></div><div class="rain"></div><div class="rain"></div></div>',
        iconsymbol: '🌧️'
    },
    63: {
        description: 'Moderate rain',
        icon: '<div class="weather-rain"><div class="cloud"></div><div class="rain"></div><div class="rain"></div><div class="rain"></div><div class="rain"></div></div>',
        iconsymbol: '🌧️'
    },
    71: {
        description: 'Light snow',
        icon: '<div class="weather-snow"><div class="snow"><div class="f"></div></div></div>',
        iconsymbol: '🌨️'
    },
    95: {
        description: 'Thunderstorm',
        icon: '<div class="weather-snow"><div class="snow"><div class="f"></div></div></div>',
        iconsymbol: '⛈️'
    }
}

export const getWeatherDescr = (code) => {
    return (
        weatherCodeMap[code] || {
            description: 'Unknown weather',
            icon: '',
            iconsymbol: ''
        }
    )
}
