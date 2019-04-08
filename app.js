const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encodeUlr = encodeURI( argv.direccion)
console.log(encodeUlr);

//Configurando los headers del axios
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
    timeout: 2000,
    headers: {'X-RapidAPI-Key': 'd116b3b575msh72bb459d1f32b31p12e75djsn18ea9184dba1'}
  });

instance.get()
        .then( resp => console.log(resp.data.Results[0]))
        .catch( err => console.log(err))