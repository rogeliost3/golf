// import { fetchData, LEAGUES, ENDPOINT } from "./api.js";
// import { URL_BASE } from "./apikey.js";
import { urls } from "./data.js";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAllData() {
    for (let i = 0; i < urls.length; i++) {
        let status = "";
        let url=urls[i].url;
        let fileName = urls[i].fileName;
        try {
            //const data={filename:url};
            //const data = await fetchData(url);
            console.log("guardando: "+fileName);
            console.log("FUNCION CONDONADA PARA NO SOBREESCRIBIR LOS JSON QUE YA ME HE BAJADO Y NO ME BANEEN DE LA API");
            //fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
            status = fileName+": saved";
        } catch (error) {
            status = fileName+": error: " + error.message;
        }
        console.log(status);
        await delay (5000);
    }
    // const results = await Promise.all(fetchPromises);
    // return results;
}

// Función para cargar un archivo JSON usando Fetch
async function readJsonFile(ruta) {
    console.log(`Cargando archivo JSON desde ${ruta}`);
    const response = await fetch(ruta);
    
    // Verificar si la respuesta fue exitosa
    if (!response || !response.ok) {
      console.error(`Error HTTP: ${response?.status}`);
      throw new Error(`Error HTTP: ${response?.status}`);
    }
    
    // Convertir y retornar los datos JSON
    console.log("response ok, pasando a json");
    const data = await response.json();
    if (!data) {
      throw new Error("Error al parsear el JSON");
    }
    return data;
}
  
async function ejemploDeUso() {
    try {
      const datos = await cargarJSON('datos/config.json');
      console.log('Datos cargados:', datos);
      procesarDatos(datos);
    } catch (error) {
      console.error('Error al cargar el JSON:', error);
    }
}

//fetchAllData();
export { readJsonFile }