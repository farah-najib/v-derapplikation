
 const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual Google Maps API key

export function searchCity() {
    const city = document.getElementById('city').value

    // Geocoding API to convert city to coordinates
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${googleMapsApiKey}`

    fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'OK') {
                const { lat, lng } = data.results[0].geometry.location
                getWeather(lat, lng)
            } else {
                alert('City not found!')
            }
        })
        .catch((error) => {
            console.error('Error fetching geocode data:', error)
        })
}
