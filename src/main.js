import { WeatherApp } from "./components/weather/WeatherApp";
import { WeatherService } from "./components/weather/WeatherService";
import { WeatherUI } from "./components/weather/WeatherUI";
import { BackgroundSlider } from "./components/slider/Slider";
import { DateTime } from "./components/dateTime/dateTime";
import { MyTodoList } from "./components/todoList/MyTodoList";
import "./styles/main.css";

const todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);

const weatherService = new WeatherService();
const ui = new WeatherUI();
const app = new WeatherApp(weatherService, ui);
const backgroundSlider = new BackgroundSlider();
const date = new DateTime();
const todoList = new MyTodoList(todos);

todoList.showTodos();
date.startClock();
date.showDate();
backgroundSlider.setBackground();
app.init();
