const axios = require('axios')

const getClima = async (lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=506287a7ef7a1718527a7caa8dc2d42e&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}