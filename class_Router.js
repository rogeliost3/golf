
import { ENDPOINT } from "./api.js";
import { HomeScreen } from "./class_Home.js";
import { NewsScreen } from "./class_News.js";
import { LeaderboardScreen } from "./class_Leaderboard.js";

//TODO: pendiente hacer historial de navegacion y añadir opcion "back" real
class Router {

    //guarda cacheadas las pantallas del programa segun se vayan creando, solo las crea 1 vez
    static screens = [{ name: "home", screen: null }];
    static actualScreen = "";

    constructor() {
        Router.init();
    }

    static init() {
        ENDPOINT.forEach(element => {
            //array con las pantallas posibles y sus nombres
            Router.screens.push({ name: element.name, screen: null });
        });
    }

    //cambiar pantalla por medio del nombre
    static routeTo(screenName) {

        //evita recargar la misma pagina
        if (Router.actualScreen != screenName) {

            //buscar la pantalla si existe
            let objScreen = Router.screens.find(screen => {
                    return screen.name === screenName;
            });

            //si la pantalla existe
            if (objScreen && objScreen.screen != null) {
                console.log("objScreen.screen: " + objScreen.screen);

                //llamamos al buildAll de la pagina, con reset de header y footer activado
                objScreen.screen.buildAll(true);
                Router.actualScreen=screenName;
            } else {
                switch (screenName) {
                    case "home": {
                        objScreen.screen = new HomeScreen();
                        break;
                    }
                    case "events": {
                        console.log("saltar a Events");//TODO: Pendiente
                        break;
                    }
                    case "leaderboard": {
                        if (objScreen.screen===null) {
                            objScreen.screen = new LeaderboardScreen();
                        } 
                        break;
                    }
                    case "schedule": {
                        console.log("saltar a Schedule");//TODO: Pendiente
                        break;
                    }
                    case "tour-schedule": {
                        console.log("saltar a Tour Schedule");//TODO: Pendiente
                        break;
                    }
                    case "scoreboard": {
                        console.log("saltar a Scoreboard");//TODO: Pendiente
                        break;
                    }
                    case "rankings": {
                        console.log("saltar a Rankings");//TODO: Pendiente
                        break;
                    }
                    case "news": {
                        if (objScreen.screen===null) {
                            objScreen.screen = new NewsScreen();
                        } 
                        break;
                    }
                    case "players": {
                        console.log("saltar a Player Overview");//TODO: Pendiente
                        break;
                    }
                }
                Router.actualScreen = screenName;
            }
        }
    }
}


export { Router }