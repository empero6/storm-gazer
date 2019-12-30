import Weather from './models/Weather';
import * as weatherView from './views/weatherView';
import {elements, renderLoader, clearloader} from './views/base';


/** Global State of this App
 *  - (Get longitude and latitude from user)?????
 *  - Get results from api for about 7 days(if possible)
 *  - list info of selected day on right handside
 */

 const state = {};
 
 /**
  * RESULTS CONTROLLER
  */

  const controlResults = async () => {

    //1) get latitude and longitude from user
    const latitude = weatherView.getInput1();
    const longitude = weatherView.getInput2();
    
    
    if(latitude && longitude){

        //2) new Weather object and add to state
        state.forecast = new Weather(latitude, longitude);

        //3) prepare UI for results
        weatherView.clearInput();
        weatherView.clearResults();
        renderLoader(elements.forecastRes);

        try{
        
        //4) get forecast from the API
        await state.forecast.getWeather();
        
        //   console.log(state.forecast.result);

        //5) render results on the UI
        clearloader();
        weatherView.renderWeather(state.forecast.result);

        var icons = new Skycons({
          // nasty android hack
          "monochrome": false
        }),
        list  = [ // listing of all possible icons
          "clear-day",
              "clear-night",
              "partly-cloudy-day",
              "partly-cloudy-night",
              "cloudy",
              "rain",
              "showers-day",
              "showers-night",
              "sleet",
              "rain-snow",
              "rain-snow-showers-day",
              "rain-snow-showers-night",
              "snow",
              "snow-showers-day",
              "snow-showers-night",
              "wind",
              "fog",
              "thunder",
              "thunder-rain",
              "thunder-showers-day",
              "thunder-showers-night",
              "hail"
        ], i;
  
    // loop thru icon list array
    for(i = list.length; i--; )
          icons.set(list[i], list[i]);
  
    // animate the icons
    icons.play();
  
  

        } catch(error){
            console.log(error);
            
            
        }
    } 
  }

  elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlResults();
});


