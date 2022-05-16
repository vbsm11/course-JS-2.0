const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "121742f060b4c71631083e2db96ad796"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.name').textContent = 'Город: ' + data.name;
    document.querySelector('.temp').innerHTML = 'Температура воздуха: ' + Math.round(data.main.temp) + '&deg';
    document.querySelector('.wind').textContent = 'Скорость ветра: ' + Math.round(data.wind.speed) + ' м/с';
    document.querySelector('.hum').textContent = 'Влажность: ' + data.main.humidity + '%';
    document.querySelector('.press').innerHTML = 'Атмосферное давление: ' + Math.round(data.main.pressure / 1.333) + ' мм.рт.ст';
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;