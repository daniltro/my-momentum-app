export class DateTime {
  constructor() {
    this.date = document.querySelector(".date");
    this.time = document.querySelector(".time");
    this.updateTime();
    this.startClock();
  }

  updateTime() {
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");

    this.time.textContent = `${hours}:${minutes}:${seconds}`;
  }

  startClock() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  showDate() {
    const currentDate = new Date();
    const month = currentDate.getMonth();
    console.log(month);
    const day = currentDate.getDate();

    this.date.textContent = this.formatDate(day, month, day);
  }

  formatDate(day, month, year) {
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    const weekDays = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ];

    const formattedDay = String(day).padStart(2, "0");
    const formattedMonth = months[month];
    const weekDayIndex = new Date(year, month, day).getDay();
    const formattedWeekDay = weekDays[weekDayIndex];

    return `${formattedDay} ${formattedMonth}, ${formattedWeekDay}`;
  }
}
