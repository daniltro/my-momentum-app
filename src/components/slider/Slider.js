export class BackgroundSlider {
  constructor() {
    this.body = document.body;
  }
  setBackground() {
    let currentTime = new Date().getHours();
    currentTime = 7
    let backgroundStyle = "";

    if (currentTime >= 0 && currentTime <= 6) {
      backgroundStyle =
        "url('/my-momentum-app/images/01.jpg') no-repeat center center / cover"; // Используем абсолютный путь
    } else if (currentTime > 6 && currentTime <= 12) {
      backgroundStyle =
        "url('/my-momentum-app/images/02.jpg') no-repeat center center / cover"; // Используем абсолютный путь
    } else if (currentTime >= 12 && currentTime <= 18) {
      backgroundStyle =
        "url('/my-momentum-app/images/03.jpg') no-repeat center center / cover"; // Используем абсолютный путь
    } else if (currentTime > 18) {
      backgroundStyle =
        "url('/my-momentum-app/images/04.jpg') no-repeat center center / cover"; // Используем абсолютный путь
    }

    this.body.style.background = backgroundStyle;
    this.body.style.backgroundAttachment = "fixed";
  }
}
