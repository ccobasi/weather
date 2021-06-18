import './style.css';
import { error, weatherReport } from './app';

const buttonDiv = document.querySelector('.button-div');
buttonDiv.style.display = 'none';

const bgOne = document.querySelector('.body-one');

const changeBackground = (temp) => {
  if (temp.description === 'cloudy') {
    bgOne.style.backgroundImage = 'url(./images/cloud.gif)';
  } else if (temp.description === 'rain') {
    bgOne.style.backgroundImage = 'url(./images/rain.gif)';
  } else if (temp.description === 'sun') {
    bgOne.style.backgroundImage = 'url(./images/sunligth.jpg)';
  } else if (temp.description === 'thunder') {
    bgOne.style.backgroundImage = 'url(./images/thunder.gif)';
  } else if (temp.description === 'fog') {
    bgOne.style.backgroundImage = 'url(./images/fog.gif)';
  } else {
    bgOne.style.backgroundImage = 'url(./images/snow.gif)';
  }
};

const convertToFerhenheit = (temp) => Math.round(temp * (9 / 5) + 32);

const convertToCelsius = (temp) => Math.round(temp);

const dataInfo = (location) => {
  const submitButton = document.getElementById('submit');

  submitButton.onclick = () => {
    location = document.getElementById('location').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=c7911001fbb406aa98e26c70ab98ec78`, { mode: 'cors' })
      .then((response) => (response.json()))
      .then((response) => {
        const { description } = response.weather[0];
        const mainTemp = Math.round((response.main.temp) - 273.15);
        const cityName = response.name;
        const countryName = response.sys.country;
        const { humidity } = response.main;
        const { pressure } = response.main;
        const lowTemp = Math.round((response.main.temp_min) - 273.15);
        const highTemp = Math.round((response.main.temp_max) - 273.15);

        weatherReport(mainTemp, cityName, countryName, lowTemp,
          highTemp, humidity, pressure, description);
        buttonDiv.style.display = 'block';

        changeBackground(mainTemp);

        // convert temp units
        document.getElementById('f').onclick = () => {
          const temp = convertToFerhenheit(mainTemp);
          const high = convertToFerhenheit(highTemp);
          const low = convertToFerhenheit(lowTemp);
          document.getElementById('main-temp').innerHTML = `${temp}°F`;
          document.getElementById('low-temp').innerHTML = `${low}°F`;
          document.getElementById('high-temp').innerHTML = `${high}°F`;
        };

        document.getElementById('c').onclick = () => {
          const temp = convertToCelsius(mainTemp);
          const high = convertToCelsius(highTemp);
          const low = convertToCelsius(lowTemp);
          document.getElementById('main-temp').innerHTML = `${temp}°C`;
          document.getElementById('low-temp').innerHTML = `${low}°C`;
          document.getElementById('high-temp').innerHTML = `${high}°C`;
        };
      }).catch((err) => {
        document.querySelector('#body').innerHTML = '';
        return error(err);
      });
    document.getElementById('error').innerHTML = '';
  };
};

const getWeatherData = async () => {
  const weather = await dataInfo();
  return weather;
};

export default getWeatherData;
