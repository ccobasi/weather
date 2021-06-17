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
  