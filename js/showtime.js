export function showCurrentTime() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0') // Leading zero
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0') // Get day of the month
    const month = String(now.getMonth() + 1).padStart(2, '0') // Months are 0-indexed, so we add 1
    const year = now.getFullYear() // Get full year
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    const dayName = daysOfWeek[now.getDay()] // Get the current day of the week
    // Format the time as HH:MM:SS
    const currentTime = `${day}-${month}-${year}`
    // Update the #time element with the current time
    document.getElementById('date').innerHTML = `${currentTime}`
    document.getElementById('daystatus').innerHTML = `${dayName}`
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`
}
