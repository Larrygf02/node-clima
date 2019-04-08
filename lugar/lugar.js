const axios = require('axios');

const getLugarLatLng = async (direccion) => {
    const encodeUlr = encodeURI(direccion)
    
    //Configurando los headers del axios
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        timeout: 2000,
        headers: {'X-RapidAPI-Key': 'd116b3b575msh72bb459d1f32b31p12e75djsn18ea9184dba1'}
      });
    
    const resp = await instance.get()

    if ( resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const { name, lat, lon} = resp.data.Results[0]
    return {
        direccion: name,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}
