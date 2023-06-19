async function getCityWeatherAsync(cityName) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5a5df93641744e5384a225720230506&q=${cityName}&aqi=no`
  )

  const data = await response.json()
  return data
}

export default getCityWeatherAsync
