import {elements} from './base';

export const getInput1 = () => parseFloat(elements.searchInput1.value);

export const getInput2 = () => parseFloat(elements.searchInput2.value);

export const clearInput = () => {
    elements.searchInput1.value = ''; 
    elements.searchInput2.value = '';  
};

export const clearResults = () => {
    elements.forecastRes.innerHTML = '';
}

export const percentage = num => {
    const newNum = num * 100;
    return newNum;
}


export const date = timestamp =>{
    const d = new Date(timestamp*1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const date = d.getDate();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec; 
    return time;
}

export const renderWeather = weather => {
    const markup = `
    <div class="forecast__timezone">${weather.timezone}</div>
    <div class="forecast__Temp"><span class="forecast__iconNew"><canvas id="${weather.currently.icon}" width="50" height="50"></canvas></span>${Math.round(weather.currently.temperature)}&#x2109;</div>
    <p class="forecast__summary">${weather.currently.summary}</p>
    <ul class="forecast__details">
        <li class="forecast__atmoPressure">AtmoSpheric Pressure: ${Math.round(weather.currently.pressure)} mb</li>
        <li class="forecast__humidity">Humidity: ${percentage(weather.currently.humidity)}&#x25;</li>
        <li class="forecast__dewPoint">Dewpoint: ${Math.round(weather.currently.dewPoint)}&#xb0;</li>
        <li class="forecast__windSpeed">Windspeed: ${Math.round(weather.currently.windSpeed)}mph</li>
        <li class="forecast__uvIndex">UVindex: ${Math.round(weather.currently.uvIndex)}</li>
        <li class="forecast__precipProb">Precipitation Probability: ${percentage(weather.currently.precipProbability)}&#x25;</li>
    </ul>
    `;
    elements.forecastRes.insertAdjacentHTML('afterbegin', markup);
}