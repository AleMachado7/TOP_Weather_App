class UserInterface {
  static renderResult(data) {
    const resultContainer = document.getElementById("result-container")

    if ("error" in data) {
      resultContainer.innerHTML = `
                <p class="error-message">Error! Unable to get result.</p>
                <p>${data.error.message}</p>
            `
    } else {
      resultContainer.innerHTML = `
        <ul class="weather-data">
            <li>Country: ${data.location.country}</li>
            <li>City: ${data.location.name}</li>
            <li>Local Time: ${data.location.localtime}</li>
            <li>Temperature (C): ${data.current.temp_c}</li>
            <li>Humidity: ${data.current.humidity}</li>
        </ul>
        `
    }
  }
}

export default UserInterface
