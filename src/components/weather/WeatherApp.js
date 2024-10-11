export class WeatherApp {
  constructor(weatherService, ui) {
    this.weatherService = weatherService;
    this.ui = ui;
    this.weatherData = null;
    this.weatherCityInput = document.querySelector(".weather__city");
    this.saveCityButton = document.querySelector(".save-city-button");
  }

  async init() {
    this.weatherCityInput.value = localStorage.getItem("city") || "Краснодар";
    document.addEventListener("DOMContentLoaded", () => this.getUserWeather());
    this.saveCityButton.addEventListener("click", () => this.saveCity());
    this.weatherCityInput.addEventListener("focus", () =>
      this.activateSaveButton()
    );
    this.weatherCityInput.addEventListener("blur", () =>
      this.deactivateSaveButton()
    );
  }

  async getUserWeather() {
    try {
      let city = localStorage.getItem("city");
      if (!city) {
        const location = await this.weatherService.getLocation();
        this.weatherData = await this.weatherService.getWeather(location);
      } else {
        this.weatherData = await this.weatherService.getWeather(city);
      }
      this.ui.updateWeatherUI(this.weatherData);
    } catch (error) {
      console.error(error);
    }
  }

  saveCity() {
    const city = this.weatherCityInput.value;
    localStorage.setItem("city", city);
    this.getUserWeather();
  }

  activateSaveButton() {
    this.saveCityButton.classList.add("active");
  }

  deactivateSaveButton() {
    setTimeout(() => {
      this.saveCityButton.classList.remove("active");
    }, 100);
  }
}
