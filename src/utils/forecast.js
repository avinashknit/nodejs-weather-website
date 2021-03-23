const request=require('request')

const forecast=((latitude,longitude,callback)=>{
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url='http://api.weatherstack.com/current?access_key=5667babdb4b8c27f0990b52aabc8ebc0&query='+ latitude + ',' + longitude
    request({ url:url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degress out. There is a ' + response.body.current.feelslike + '% chance of rain.')
        }
    })
})

module.exports= forecast;
