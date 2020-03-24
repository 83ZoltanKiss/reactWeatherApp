const Axios = require('axios');
const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=ecbc4df27d13b2ffdf2c0ec5fb238c7b&units=metric';

module.exports = {
  getTemp: function (location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_URL}&q=${encodedLocation}`
    
    return Axios.get(requestUrl).then((res) => {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    },(err) => {
      throw new Error(err.data.message);
    })
  }
}