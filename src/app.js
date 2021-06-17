const weatherReport = (mainTemp, cityName, countryName, lowTemp, highTemp,
    humidity, pressure, description) => {
    document.querySelector('#body').innerHTML = '';
    // card Container
    const cardContainer = document.createElement('div');
    cardContainer.setAttribute('class', 'weather-card mt-5 border shadow');
  
    const body = document.getElementById('body');
    body.appendChild(cardContainer);
  
    // cloud icon
    const cloudIcon = document.createElement('i');
    cloudIcon.setAttribute('class', 'fas fa-cloud-sun-rain cloud');
    cardContainer.appendChild(cloudIcon);
  
    // data Container
    const dataContainer = document.createElement('div');
    dataContainer.setAttribute('class', 'd-flex justify-content-center color-font');
    cardContainer.appendChild(dataContainer);

    // max temperature container
  const maxTempContainer = document.createElement('div');

  const maxTemp = document.createElement('h4');
  maxTemp.setAttribute('class', 'px-3 fw-bold');
  const maxTempText = document.createTextNode('Max-Temp');
  maxTemp.appendChild(maxTempText);

  const maxTempValue = document.createElement('h4');
  maxTempValue.setAttribute('class', 'px-5 fw-bold');
  maxTempValue.setAttribute('id', 'high-temp');
  const maxValue = document.createTextNode(`${highTemp}°C`);
  maxTempValue.appendChild(maxValue);

  maxTempContainer.appendChild(maxTemp);
  maxTempContainer.appendChild(maxTempValue);

  dataContainer.appendChild(maxTempContainer);

  // min temperature container
  const minTempContainer = document.createElement('div');

  const minTemp = document.createElement('h4');
  minTemp.setAttribute('class', 'px-3 fw-bold');
  const minTempText = document.createTextNode('Min-Temp');
  minTemp.appendChild(minTempText);

  const minTempValue = document.createElement('h4');
  minTempValue.setAttribute('class', 'px-5 fw-bold');
  minTempValue.setAttribute('id', 'low-temp');
  const minValue = document.createTextNode(`${lowTemp}°C`);
  minTempValue.appendChild(minValue);

  minTempContainer.appendChild(minTemp);
  minTempContainer.appendChild(minTempValue);

  dataContainer.appendChild(minTempContainer);

  // humidity container
  const humidityContainer = document.createElement('div');

  const minHumidity = document.createElement('h4');
  minHumidity.setAttribute('class', 'px-3 fw-bold');
  const minHumidityText = document.createTextNode('Humidity');
  minHumidity.appendChild(minHumidityText);

  const minHumidityValue = document.createElement('h4');
  minHumidityValue.setAttribute('class', 'px-5 fw-bold');
  const humidityValue = document.createTextNode(`${humidity}%`);
  minHumidityValue.appendChild(humidityValue);

  humidityContainer.appendChild(minHumidity);
  humidityContainer.appendChild(minHumidityValue);

  dataContainer.appendChild(humidityContainer);

  // pressure container
  const pressureContainer = document.createElement('div');

  const minPressure = document.createElement('h4');
  minPressure.setAttribute('class', 'px-3 fw-bold');
  const minPressureText = document.createTextNode('Pressure');
  minPressure.appendChild(minPressureText);

  const minPressureValue = document.createElement('h4');
  minPressureValue.setAttribute('class', 'px-5 fw-bold');
  const pressureValue = document.createTextNode(`${pressure}ha`);
  minPressureValue.appendChild(pressureValue);

  pressureContainer.appendChild(minPressure);
  pressureContainer.appendChild(minPressureValue);

  dataContainer.appendChild(pressureContainer);