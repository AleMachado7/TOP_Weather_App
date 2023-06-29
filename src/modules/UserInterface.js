import countryIcon from "../assets/images/world-svgrepo-com.svg"
import cityIcon from "../assets/images/city-svgrepo-com.svg"
import timeIcon from "../assets/images/clock-svgrepo-com.svg"
import temperatureIcon from "../assets/images/temperature-svgrepo-com.svg"
import humidityIcon from "../assets/images/humidity-svgrepo-com.svg"
import getCityWeatherAsync from "../globalFunctions/getCityWeatherAsync"

class UserInterface {
  static setSearchButtonEvent() {
    const searchInput = document.getElementById("search-input")
    const searchButton = document.getElementById("search-button")

    searchButton.addEventListener("click", async () => {
      if (searchInput.value === "") return

      searchButton.disabled = true
      const weatherData = await getCityWeatherAsync(searchInput.value)
      UserInterface.renderRequestResult(weatherData)
      searchButton.disabled = false
    })
  }

  static renderRequestResult(data) {
    const resultContainer = document.getElementById("result-container")

    if ("error" in data) {
      resultContainer.innerHTML = `
                <p class="error-message">Error! Unable to get result.</p>
                <p>${data.error.message}</p>
            `
    } else {
      const [datePart, timePart] = data.location.localtime.split(" ")
      const [year, month, day] = datePart.split("-")
      const formattedDate = `${day}/${month}/${year} ${timePart}`

      resultContainer.innerHTML = `
        <ul class="weather-data">
            <li><img src=${countryIcon} class="icon"><span>Country: ${data.location.country}</span></li>
            <li><img src=${cityIcon} class="icon">City: ${data.location.name}</li>
            <li><img src=${timeIcon} class="icon">Local Time: ${formattedDate}</li>
            <li><img src=${temperatureIcon} class="icon">Temperature: ${data.current.temp_c}° C</li>
            <li><img src=${humidityIcon} class="icon">Humidity: ${data.current.humidity}</li>
        </ul>
        `
    }
  }
}

export default UserInterface
