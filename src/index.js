import "./style.css"
import getCityWeatherAsync from "./globalFunctions/getCityWeather"
import UserInterface from "./modules/UserInterface"

const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-button")

searchButton.addEventListener("click", async () => {
  if (searchInput.value === "") return

  const weatherData = await getCityWeatherAsync(searchInput.value)
  UserInterface.renderResult(weatherData)
})
