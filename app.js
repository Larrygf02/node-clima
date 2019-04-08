
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp))*/

/*clima.getClima(40.750000,-74.000000 )
    .then(resp => console.log(resp))
    .catch(err => console.log(err))*/

const getInfo = async (direccion) => {
    const resp = await lugar.getLugarLatLng(direccion);
    let info = ''
    try {
        const { lat, lon } = resp
        let temp = await clima.getClima(lat, lon)
        info = `El clima de ${direccion} es ${temp}`
    } catch (error) {
        info = `No se puede determinar el clima de ${direccion}`
    }

    return info;
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))

