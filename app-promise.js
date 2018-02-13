const axios = require('axios');
const yargs = require('yargs');

//const geocode = require('./geocode/geocode');
//const weather = require('./weather/weather');
const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for',
    string: true
  }

})
.help()
.alias('help', 'h')
.argv;


var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;


axios.get(geocodeUrl).then((response) =>{
  if (response.data.status === "ZERO_RESULTS") {
    throw new Error('unable to find that address.');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.forecast.io/forecast/4a04d1c42fd9d32c97a2c291a32d5e2d/${lat},${lng}`;
   console.log(response.data.results[0].formatted_address);
   return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`'It's currently' ${temperature}. 'it feels like' ${apparentTemperature}`)
}).catch((e) => {
    if (e.code === "ENOTFOUND") {
      console.log('iunable to connect to server')
  }else {
    console.log(e.message);
  };
});
