const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const date = document.querySelector('.date');
const fabtn = document.querySelector('.fabtn');
const btn = document.querySelector('.btn');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-discription');
const city = document.querySelector('.city');
const windSpeed = document.querySelector('.windSpeed');
const humidity = document.querySelector('.humidity');
const faqus = document.querySelector('.faqus');
const author = document.querySelector('.author');
const quotes = document.querySelector('.quotes');

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
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function getDay(d) {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[d];
}

function getMonth(d) {
  let months = [
    'January',
    'Febrary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[d];
}

//Get Random
const imgSet = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
  '09.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
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
  const baseUrl = './assets/images/';
  for (let i = 0; i < 24; i++) {
    if (i < 6) {
      imgList[i] = baseUrl + 'night/' + shuffle(imgSet);
    } else if (i < 12) {
      imgList[i] = baseUrl + 'morning/' + shuffle(imgSet);
    } else if (i < 18) {
      imgList[i] = baseUrl + 'day/' + shuffle(imgSet);
    } else {
      imgList[i] = baseUrl + 'evening/' + shuffle(imgSet);
    }
  }
}
bgList();

//Set Bg
function setBg() {
  let today = new Date(),
    hour = today.getHours();
  let src = imgList[hour];
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${src})`;
  };
}

//Refresh Bg
fabtn.onclick = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let finish = Date.now() - start;
    fabtn.style.transform = `rotate(${finish}deg)`;
    if (finish > 180) clearInterval(timer);
  }, 20);
};

let inx = new Date();
let numImg = inx.getHours();

btn.onclick = function refresh() {
  if (numImg < imgList.length - 1) {
    let src = imgList[numImg + 1];
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
    numImg++;
  } else {
    numImg = -1;
    refresh();
  }
};

function Greet() {
  let today = new Date();
  hour = today.getHours();
  if (hour < 6) {
    greeting.textContent = 'Good Night, ';
  } else if (hour < 12) {
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    greeting.textContent = 'Good Day, ';
  } else {
    greeting.textContent = 'Good Evening, ';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('.name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('.name');
  }
}

let nameStorage = '';

function hiddenName(e) {
  localStorage.setItem('.name', e.target.innerText);
  nameStorage = localStorage.getItem('.name');
  if (e.type === 'click') {
    name.textContent = '';
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('.name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('.name', e.target.innerText);
  }
  if (localStorage.getItem('.name') === '') {
    localStorage.setItem('.name', e.target.innerText);
    name.textContent = nameStorage;
    localStorage.removeItem('.name');
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('.focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('.focus');
  }
}

let focusStorage = '';

function hiddenFocus(e) {
  localStorage.setItem('.focus', e.target.innerText);
  focusStorage = localStorage.getItem('.focus');
  if (e.type === 'click') {
    focus.textContent = '';
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('.focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('.focus', e.target.innerText);
  }
  if (localStorage.getItem('.focus') === '') {
    localStorage.setItem('.focus', e.target.innerText);
    focus.textContent = focusStorage;
    localStorage.removeItem('.focus');
  }
}

//Get Quotes
faqus.onclick = function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let finish = Date.now() - start;
    faqus.style.transform = `rotate(${finish}deg)`;
    if (finish > 180) clearInterval(timer);
  }, 20);
};

async function getQuote() {
  const url = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;

  const res = await fetch(url);
  const data = await res.json();
  if (data.quote.quoteText.length > 200) {
    getQuote();
  } else {
    quotes.textContent = data.quote.quoteText;
    author.textContent = data.quote.quoteAuthor;
  }
}

//Get Weather
function getCity() {
  if (
    localStorage.getItem('.city') === null ||
    localStorage.getItem('.city') == '[Enter your location]'
  ) {
    city.textContent = '[Enter your location]';
  } else {
    city.textContent = localStorage.getItem('.city');
    getWeather();
  }
}

let cityStorage = '';

function hiddenCity(e) {
  localStorage.setItem('.city', e.target.innerText);
  cityStorage = localStorage.getItem('.city');
  if (e.type === 'click') {
    city.textContent = '';
  }
}

// Set City
function setCity(e) {
  if (e.code === 'Enter') {
    localStorage.setItem('.city', e.target.innerText);
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

    if (city.textContent == '') {
      localStorage.setItem('.city', cityStorage);
      city.textContent = localStorage.getItem('.city');
    } else if (data.cod != 200) {
      city.textContent = '[Wrong city]';
      weatherIcon.className = 'weather-icon owf';
      temperature.textContent = ``;
      weatherDescription.textContent = '';
      humidity.textContent = ``;
      windSpeed.textContent = ``;
    } else {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.trunc(data.main.temp)}°C`;
      city.textContent = data.name;
      weatherDescription.textContent = data.weather[0].description;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind speed: ${data.wind.speed}m/s`;
    }
  } catch {
    temperature.textContent = '';
    city.textContent = '[Error API]';
    windSpeed.textContent = '';
  }
}

document.addEventListener('DOMContentLoaded', getQuote);

faqus.addEventListener('click', getQuote);
city.addEventListener('click', hiddenCity);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
name.addEventListener('click', hiddenName);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', hiddenFocus);

// Run
showTime();
setBg();
Greet();
getName();
getFocus();
getCity();
