import { APIKEY, HOST } from "./apikey.js";
import { urls } from "./data.js";
import {readJsonFile} from "./scrapper.js";

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

/*    { name: "player-overview", display: "OVERVIEW"},
    { name: "player-leaderboard", display: "LEADERBOARD"},
    { name: "player-stats", display: "STATS"},
    { name: "player-results", display: "RESULTS"},
    { name: "player-scorecard", display: "SCORECARD"},
    { name: "player-info", display: "INFO"}*/
];
    
// Ligas accesibles en el API
const LEAGUES = [
    { value: "all", text: "Todas", selected: true },
    { value: "lpga", text: "LPGA The Chevron Championship" },
    { value: "champions-tour", text: "PGA Tour Champions" },
    { value: "liv", text: "LIV" },
    { value: "eur", text: "DP World" },
    { value: "ntw", text: "NTW Korn Ferry" }
];

const OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': APIKEY,
        'x-rapidapi-host': HOST
    }
};


// La API es de pago y solo da unos fetchs mensuales gratuitos. 
// Dado que agoté pronto los que tenia, realicé una nueva cuenta y descargué a archivos los json obtenidos.
// Esta funcion funciona como API simulada, devolviendo datos guardados en disco. 
// Empleo de IA para poder avanzar en el proyecto dado el contratiempo encontrado.
async function ghostFetch(fullUrl, options=null) {

    // devuelve datos dentro del Promise
    return new Promise((resolve, reject) => {
        console.log("me dispongo a buscar "+fullUrl.href);
        let foundItem = urls.find(item => fullUrl.href.includes(item.url));

        //si filename no es null, se devuelve el item.url, si es null no se devuelve nada
        let filename = foundItem?.fileName || null; 
        
        if (filename) {
            console.log(fullUrl+" encontrada como "+foundItem.url);
            try {
                let result = readJsonFile(filename);
                if (result==null) {
                    reject("No se puede leer "+filename);
                } else {
                    console.log(filename+" leido ok");
                    resolve(result);
                }
              } catch (error) {
                console.error('Error al cargar el JSON:', error);
                reject(error);
              }
        } else {
            console.log("no se encuentra "+fullUrl+" en urls.");
            reject("No se encuentra "+fullUrl+" en urls.");
        }
    });
}

async function fetchData(fullUrl) {

    let result="";
    console.log("fetching "+fullUrl);
    /* DESDE AQUI PARA OBTENER DATOS VIA FETCH DE LA API ------------------------------------ */
    /*const response = await fetch(fullUrl, OPTIONS); 
    if (!response.ok) {
        console.log("error en response");
        throw new Error(response.status); // la lanzo yo
    } else {
        console.log("response a json");
        result = await response.json(); // no lanza excepcion. Convierte el texto JSON a objeto o array manejable
    }*/
    /*HASTA AQUI PARA OBTENER DATOS VIA FETCH DE LA API ------------------------------------ */

    //DESDE AQUI PARA OBTENER DATOS MOCKUP ------------------------------------
    result = await ghostFetch(fullUrl, OPTIONS); 

    //HASTA AQUI PARA OBTENER DATOS MOCKUP ------------------------------------
    //console.log("result: "+JSON.stringify(result,null,4));
    return result;
}



export { fetchData, LEAGUES, ENDPOINT};


// const ENDPOINT = [ 
//     { name: "leaderboard", display: "Leaderboard",
//         params: ["league", "limit"]},

//     { name: "schedule", display: "Schedule",
//         params:["season"]},

//     { name: "scoreboard", display: "Scoreboard",
//         params:["year","month","day","league","limit"]},

//     { name: "rankings", display: "Rankings",
//          params:["seasonType","limit"]}, 


//     { name: "news", display: "News",
//         params:["league","limit"]},

//     { name: "standings", display: "Standings",
//         params:["seasonType","limit"]} 
//     ];
/*
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        let contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            let data = await response.json();
            console.log(data);
        } else {
            throw new Error("La respuesta no es JSON");
        }

    } catch (error) {
        console.error('Error:', error);
    }
*/