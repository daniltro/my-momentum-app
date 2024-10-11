import { weatherDescriptionsRu } from "./constants";

export class WeatherUI {
  constructor() {
    this.weatherTemperature = document.querySelector(".weather__temperature");
    this.weatherDescription = document.querySelector(".weather__description");
    this.weatherLogo = document.querySelector(".weather-logo");
  }

  updateWeatherUI(data) {
    const temperature = data.current.temperature + "°";
    const description = data.current.weather_descriptions[0];

    function translateWeatherDescription(description) {
      return weatherDescriptionsRu[description] || description; // Если перевода нет, возвращаем оригинальное значение
    }

    const weatherIconUrl = data.current.weather_icons[0];
    this.weatherLogo.style.backgroundImage = `url(${weatherIconUrl})`;

    this.weatherTemperature.textContent = temperature;

    this.weatherDescription.textContent =
      translateWeatherDescription(description);
  }
}
