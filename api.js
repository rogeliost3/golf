import { APIKEY, HOST } from "./apikey.js";
import {readJsonFile} from "./common.js";

const   APP_NAME= "Golf Tracker",
        VERSION_APP= "0.0.5",

// ruta a archivos de datos json descargados para simular la API y usar ghostFetch
//y la url a la llamada de la API real que los provee

urls=[
    {
        "url": "https://live-golf-data1.p.rapidapi.com/leaderboard?league=all", 
        "fileName": "./scrapped_data/leaderboard-league_all.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/schedule?season=2025",
        "fileName": "./scrapped_data/schedule_season.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/scoreboard?year=2025&month=3&day=27&league=lpga",
        "fileName": "./scrapped_data/scoreboard-league_lpga.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/rankings",
        "fileName": "./scrapped_data/rankings.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/news?league=all",
        "fileName": "./scrapped_data/news-league_all.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/news?league=lpga",
        "fileName": "./scrapped_data/news-league_lpga.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/news?league=champions-tour",
        "fileName": "./scrapped_data/news-league_champions-tour.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/news?league=liv",
        "fileName": "./scrapped_data/news-league_liv.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/news?league=eur",
        "fileName": "./scrapped_data/news-league_eur.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/news?league=ntw",
        "fileName": "./scrapped_data/news-league_ntw.json"
    },
    {
        "url": "https://live-golf-data1.p.rapidapi.com/standings",
        "fileName": "./scrapped_data/standings.json"
    }
    ];

// Endpoints de la API y los parametros de cada uno
const ENDPOINT = [ 

    /*This endpoint retrieves the leaderboard for a specific golf event within a chosen league. 
    It returns information about player standings, scores, and other relevant details. */ 
    { name: "leaderboard", display: "Leaderboard",
        params: ["league", "limit"]}, // devuelve el mismo json sin importar el league, con -all- datos mas completos

    /*This endpoint retrieves the schedule for golf events within a specific season and league. 
    It provides information about upcoming tournaments, dates, locations, and other relevant details. */ 
    { name: "schedule", display: "Schedule",
        params:["season"]},

    /*This endpoint retrieves scoreboard data for golf events on a specific date within a chosen league.
     It provides information about ongoing tournaments, scores, and other relevant details. */ 
    { name: "scoreboard", display: "Scoreboard",
        params:["year","month","day","league","limit"]},

    /*This endpoint retrieves rankings data for golf players.
     It provides information about player rankings based on different seasons and types. */ 
    { name: "rankings", display: "Rankings",
         params:["seasonType","limit"]}, // devuelve el mismo json sin importar el seasonType

    /*This endpoint retrieves news articles for golf events within a specified league or across all leagues. 
    It provides access to the latest news, updates, and stories related to golf. */ 
    { name: "news", display: "News",
        params:["league","limit"]},

    /*This endpoint retrieves standings data for golf players. 
    It provides information about player standings based on different seasons and types.*/
    { name: "standings", display: "Standings",
        params:["seasonType","limit"]} //devuelve el mismo json sin importar el seasonType

    /*This endpoint retrieves the schedule for golf tours within a specific season. 
    It provides information about upcoming tournaments, dates, locations, and other relevant details. */ 
    /*{ name: "tour-schedule", display: "TOUR_SCHEDULE",
        params:["season"]},*/

];
    
// Ligas accesibles en el API, usado en el combobox de seleccion de ligas, entre otros
const LEAGUES = [
    { value: "all", text: "Todas", selected: true },
    { value: "lpga", text: "LPGA The Chevron Championship" },
    { value: "champions-tour", text: "PGA Tour Champions" },
    { value: "liv", text: "LIV" },
    { value: "eur", text: "DP World" },
    { value: "ntw", text: "NTW Korn Ferry" }
];

// Headers de la llamada a la API
const OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': APIKEY,
        'x-rapidapi-host': HOST
    }
};


// GHOSTFETCH
// La API es de pago y solo da unos fetchs mensuales gratuitos. 
// Dado que agoté pronto los que tenia, realicé una nueva cuenta y descargué a archivos los json obtenidos.
// Esta funcion funciona como API simulada, devolviendo datos guardados en disco. 
// Empleo de IA para poder avanzar en el proyecto dado el contratiempo encontrado.
async function ghostFetch(fullUrl, options=null) {

    // devuelve datos dentro del Promise
    return new Promise((resolve, reject) => {
        let foundItem = urls.find(item => fullUrl.href.includes(item.url));

        //si filename no es null, se devuelve el item.url, si es null no se devuelve nada
        let filename = foundItem?.fileName || null; 
        
        if (filename) {
            try {
                let result = readJsonFile(filename);
                if (result==null) {
                    reject("No se puede leer "+filename);
                } else {
                    resolve(result);
                }
              } catch (error) {
                reject(error);
              }
        } else {
            reject("No se encuentra "+fullUrl+" en urls.");
        }
    });
}

async function fetchData(fullUrl) {

    let result="";

    /* DESCOMENTAR DESDE AQUI PARA OBTENER DATOS VIA FETCH REAL DE LA API ------------------------------------ */
    /*
    const response = await fetch(fullUrl, OPTIONS); 
    if (!response.ok) {
        console.log("error en response");
        throw new Error(response.status); // la lanzo yo
    } else {
        console.log("response a json");
        result = await response.json(); // no lanza excepcion. Convierte el texto JSON a objeto o array manejable
    }
    */
    /*HASTA AQUI PARA OBTENER DATOS VIA FETCH DE LA API ------------------------------------ */

    //DESDE AQUI PARA OBTENER DATOS MOCKUP ------------------------------------
    result = await ghostFetch(fullUrl, OPTIONS); 
    //HASTA AQUI PARA OBTENER DATOS MOCKUP ------------------------------------

    return result;
}

export { fetchData, LEAGUES, ENDPOINT, APP_NAME };

