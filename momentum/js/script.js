import playList from "./playList.js";

const time = document.querySelector(".time");
const greeting = document.querySelector(".greeting");
const names = document.querySelector(".name");
const focus = document.querySelector(".focus");
const date = document.querySelector(".date");
const slidePrev = document.querySelector(".slide-prev");
const slideNext = document.querySelector(".slide-next");
const changeQuote = document.querySelector(".change-quote");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-discription");
const city = document.querySelector(".city");
const windSpeed = document.querySelector(".windSpeed");
const humidity = document.querySelector(".humidity");
const author = document.querySelector(".author");
const quotes = document.querySelector(".quote");
const playBtn = document.querySelector(".play");
const playListUl = document.querySelector(".play-list");
const volumeControls = document.querySelector(".volume-controls");
const volumeControlsSlider = document.querySelector(".volume-controls__slider");

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    week = today.getDay(),
    month = today.getMonth(),
    day = today.getDate();
  if (min == 0 && sec == 0) setTimeout(setBg, 1000);
  if (min == 0 && sec == 0) setTimeout(Greet, 1000);

  // Output Date & Time
  date.innerHTML = `${getDay(week)}, ${getMonth(month)} ${day}`;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function getDay(d) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[d];
}

function getMonth(d) {
  let months = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[d];
}

//Get Random
const imgSet = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
];

let res = [];
function shuffle(imgSet) {
  for (let i = imgSet.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [imgSet[i], imgSet[j]] = [imgSet[j], imgSet[i]];
    res = arguments[0][0];
  }
  return res;
}

let imgList = [];
async function bgList() {
  const baseUrl = "./assets/images/";
  for (let i = 0; i < 24; i++) {
    if (i < 6) {
      imgList[i] = baseUrl + "night/" + shuffle(imgSet);
    } else if (i < 12) {
      imgList[i] = baseUrl + "morning/" + shuffle(imgSet);
    } else if (i < 18) {
      imgList[i] = baseUrl + "day/" + shuffle(imgSet);
    } else {
      imgList[i] = baseUrl + "evening/" + shuffle(imgSet);
    }
  }
}
bgList();

//Set Bg
function setBg() {
  let today = new Date(),
    hour = today.getHours();
  let src = imgList[hour];
  const img = document.createElement("img");
  img.src = src;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${src})`;
  };
}

//Refresh Bg
let inx = new Date();
let numImg = inx.getHours();

slidePrev.addEventListener("click", refresh);
slideNext.addEventListener("click", refresh);

function refresh() {
  if (numImg < imgList.length - 1) {
    let src = imgList[numImg + 1];
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
    numImg++;
  } else {
    numImg = -1;
    refresh();
  }
}

function Greet() {
  let today = new Date();
  let hour = today.getHours();
  if (hour < 6) {
    greeting.textContent = "Good Night, ";
  } else if (hour < 12) {
    greeting.textContent = "Good Morning, ";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon, ";
  } else {
    greeting.textContent = "Good Evening, ";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem(".name") === null) {
    names.textContent = "[Enter Name]";
  } else {
    names.textContent = localStorage.getItem(".name");
  }
}

let nameStorage = "";

function hiddenName(e) {
  localStorage.setItem(".name", e.target.innerText);
  nameStorage = localStorage.getItem(".name");
  if (e.type === "click") {
    names.textContent = "";
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem(".name", e.target.innerText);
      names.blur();
    }
  } else {
    localStorage.setItem(".name", e.target.innerText);
  }
  if (localStorage.getItem(".name") === "") {
    localStorage.setItem(".name", e.target.innerText);
    names.textContent = nameStorage;
    localStorage.removeItem(".name");
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem(".focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem(".focus");
  }
}

let focusStorage = "";

function hiddenFocus(e) {
  localStorage.setItem(".focus", e.target.innerText);
  focusStorage = localStorage.getItem(".focus");
  if (e.type === "click") {
    focus.textContent = "";
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem(".focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem(".focus", e.target.innerText);
  }
  if (localStorage.getItem(".focus") === "") {
    localStorage.setItem(".focus", e.target.innerText);
    focus.textContent = focusStorage;
    localStorage.removeItem(".focus");
  }
}

//Get Quotes
changeQuote.onclick = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let finish = Date.now() - start;
    changeQuote.style.transform = `rotate(${finish}deg)`;
    if (finish > 180) clearInterval(timer);
  }, 20);
};

async function getQuote() {
  // const url = `https://quote-garden.herokuapp.com/api/v3/quotes/random`;
  const url = `https://quote-garden.onrender.com/api/v3/quotes/random`;

  const res = await fetch(url);
  const datas = await res.json();
  if (datas.data[0].quoteText.length > 165) {
    getQuote();
  } else {
    quotes.textContent = datas.data[0].quoteText;
    author.textContent = datas.data[0].quoteAuthor;
  }
}

//Get Weather
function getCity() {
  if (
    localStorage.getItem(".city") === null ||
    localStorage.getItem(".city") == "Omsk"
  ) {
    city.textContent = "Omsk";
  } else {
    city.textContent = localStorage.getItem(".city");
    getWeather();
  }
}

let cityStorage = "";

function hiddenCity(e) {
  localStorage.setItem(".city", e.target.innerText);
  cityStorage = localStorage.getItem(".city");
  if (e.type === "click") {
    city.textContent = "";
  }
}

// Set City
function setCity(e) {
  if (e.code === "Enter") {
    localStorage.setItem(".city", e.target.innerText);
    city.blur();
    getWeather();
  }
}

city.onblur = function () {
  getWeather();
};

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=e9d10888e8b177ee92d64bc8d8df83d3&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (city.textContent == "") {
      localStorage.setItem(".city", cityStorage);
      city.textContent = localStorage.getItem(".city");
    } else if (data.cod != 200) {
      city.textContent = "[Wrong city]";
      weatherIcon.className = "weather-icon owf";
      temperature.textContent = ``;
      weatherDescription.textContent = "";
      humidity.textContent = ``;
      windSpeed.textContent = ``;
    } else {
      weatherIcon.className = "weather-icon owf";
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
      city.textContent = data.name;
      weatherDescription.textContent = data.weather[0].description;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind speed: ${Math.ceil(data.wind.speed)}m/s`;
    }
  } catch {
    temperature.textContent = "";
    city.textContent = "[Error API]";
    windSpeed.textContent = "";
  }
}

//get Playlist
function getPlayList() {
  playList.forEach((el, i) => {
    let li = document.createElement("li");
    li.classList.add("play-item");
    li.textContent = playList[i].title;
    playListUl.appendChild(li);
  });
}

//get Audio
let isPlay = false;
const audio = new Audio();

function playAudio() {
  audio.src = playList[0].src;
  audio.currentTime = 0;
  audio.volume = 0.25;
  if (!isPlay) {
    playBtn.classList.toggle("pause");
    audio.play();
    isPlay = true;
    audio.onended = () => {
      playBtn.classList.remove("pause");
      isPlay = false;
    };
  } else {
    playBtn.classList.toggle("pause");
    audio.pause();
    isPlay = false;
  }
}

//get Sound value
volumeControls.addEventListener(
  "click",
  (e) => {
    const volumeControlsWidth = parseInt(
      window.getComputedStyle(volumeControls).width
    );
    let newVolumeValue = e.offsetX / volumeControlsWidth;
    audio.volume = newVolumeValue;
    volumeControlsSlider.style.width = `${newVolumeValue * 100}%`;
  },
  false
);

playBtn.addEventListener("click", playAudio);
document.addEventListener("DOMContentLoaded", getQuote);
document.addEventListener("DOMContentLoaded", getPlayList);
document.addEventListener("DOMContentLoaded", getWeather);
changeQuote.addEventListener("click", getQuote);
city.addEventListener("click", hiddenCity);
city.addEventListener("keypress", setCity);
city.addEventListener("blur", setCity);
names.addEventListener("click", hiddenName);
names.addEventListener("keypress", setName);
names.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);
focus.addEventListener("click", hiddenFocus);

// Run
showTime();
setBg();
Greet();
getName();
getFocus();
getCity();

console.log("Самооценка:");
console.log("время выводится в 24-часовом формате, например: 21:01:00: +5");
console.log(
  "время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается): +5"
);
console.log(
  `выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня": +5`
);
console.log(
  "текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток: +5"
);
console.log(
  "пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется: +5"
);
console.log(
  "ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз: +5"
);
console.log(
  "при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения: +5"
);
console.log(
  "при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage: +5"
);
console.log(
  "для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел: +5"
);
console.log(
  "выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов): +5"
);
console.log(
  "при загрузке страницы приложения отображается рандомная цитата и её автор: +5"
);
console.log(
  "при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую): +5 "
);
console.log(
  "при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause: +3"
);
console.log(
  "при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play: +3"
);
console.log(
  "добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука: +3"
);
console.log(
  "ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным: +10(не знаю как выглядит оригинальный туду, поэтому оценку можно не брать в расчет)"
);
console.log(`----------------------`);
console.log(`79 баллов`);
console.log(`----------------------`);
