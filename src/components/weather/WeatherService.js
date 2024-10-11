import { fakeWeatherData } from "./constants";

export class WeatherService {
  constructor() {
    this.apiKey = "3befaad8c74b8d2c4f5a9607979164d6";
    this.useFakeData = true;
  }

  async getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          resolve(location);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getWeather(location) {
    if (this.useFakeData) {
      // Используем моковые данные
      return fakeWeatherData;
    }

    let url;
    if (
      typeof location === "object" &&
      location.latitude &&
      location.longitude
    ) {
      url = `https://api.weatherstack.com/current?access_key=${this.apiKey}&query=${location.latitude},${location.longitude}`;
    } else if (typeof location === "string") {
      url = `https://api.weatherstack.com/current?access_key=${this.apiKey}&query=${location}`;
    } else {
      throw new Error("Неверный формат для параметра location");
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const data = await response.json();
    return data;
  }
}
