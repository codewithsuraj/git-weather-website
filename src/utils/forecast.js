const request = require('request');

const forecast = (latitude, longitude, callback) => {
     const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=0083fb1f70897058bbe0e8e8c8625bcc'
     
     request({ url, json: true}, (error, {body}) => {
          if(error) {
               callback('Unable to connect to weather service!', undefined)
          } else if (body.message) {
               callback('Unable to find location!', undefined)
          } else{
               callback(undefined, body.weather[0].description + ', It is currently ' + body.main.temp + ' degress out. This high today is '+ body.main.temp_max + ' with a low of '+ body.main.temp_min +'. It feels like ' + body.main.feels_like +' degress out. The humidity is ' + body.main.humidity + '%.' );
          }
     });
}

module.exports = forecast