async function getCityWeatherAsync(cityName) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=5a5df93641744e5384a225720230506&q=${cityName}&aqi=no`
    )

    const data = response.json()
    return data
  } catch (error) {
    console.log("Failed to fetch data")
  }
}

export default getCityWeatherAsync
