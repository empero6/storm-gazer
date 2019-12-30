import axios from 'axios';
import {key, proxy} from '../needed';

export default class Weather {
    constructor(latitude, longitude){
        this.latitude = latitude;
        this.longitude = longitude;
    }

    async getWeather(){
        try{
        const res = await axios(`${proxy}https://api.darksky.net/forecast/${key}/${this.latitude},${this.longitude}?exclude=daily,hourly,minutely`);
        console.log(res);
        
        this.result = res.data;
        this.icon = res.data.currently.icon;
        this.temp = res.data.currently.temperature;
        this.tempApp = res.data.currently.apparentTemperature;
        console.log(this.icon);
        console.log(this.temp);
        console.log(this.tempApp);
        
        
        
        
        }catch(error){
            alert(error);
        }
    }
}