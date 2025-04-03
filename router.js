
import { ENDPOINT } from "./api.js";
import { HomeScreen } from "./class_Home.js";
import { NewsScreen } from "./class_News.js";
import { LeaderboardScreen } from "./class_Leaderboard.js";

//import { clearHeader, clearMain, makeHeader } from "./common.js";
//import { makeNewsScreen } from "./news.js"; //,,,,
//import {makeMainScreen} from "./index.js";

//TODO: pendiente hacer historial de navegacion y añadir opcion "back" real
class Router {

    //guarda cacheadas las pantallas del programa segun se vayan creando, solo las crea 1 vez
    static screens = [{ name: "home", screen: null }];
    static actualScreen = "";

    constructor() {
        Router.init();
    }

    static init() {
        console.log("init Router");
        ENDPOINT.forEach(element => {

            //array con las pantallas posibles y sus nombres
            Router.screens.push({ name: element.name, screen: null });
            
        });
    }

    //cambiar pantalla por medio del nombre
    static routeTo(screenName) {
        console.log("routeTo: " + screenName);

        //evita recargar la misma pagina
        if (Router.actualScreen != screenName) {
            console.log("Router.actualScreen != screenName: " + Router.actualScreen != screenName);

            //buscar la pantalla si existe
            let objScreen = Router.screens.find(screen => 
                 {
                    console.log("screen.name == screenName: ", screen.name == screenName);
                    console.log("screen: " + screen);
                    return screen.name === screenName;
                });

            //si la pantalla existe
            if (objScreen && objScreen.screen != null) {
                console.log("objScreen.screen: " + objScreen.screen);

                // objScreen.screen.buildHeader();// resetea el header

                //llamamos al buildAll de la pagina, con reset de header y footer
                objScreen.screen.buildAll(true);
                Router.actualScreen=screenName;
                
            } else {
                switch (screenName) {
                    case "home": {
                        objScreen.screen = new HomeScreen();
                        break;
                    }
                    case "events": {
                        console.log("saltar a Events");
                        break;
                    }
                    case "leaderboard": {
                        console.log("saltar a Leaderboard");
                        if (objScreen.screen===null) {
                            objScreen.screen = new LeaderboardScreen();
                        } else {
                            console.log("no se pudo crear LeaderboardScreen, objScreen: "+typeof objScreen+" "+objScreen);
                        }
                        break;
                    }
                    case "schedule": {
                        console.log("saltar a Schedule");
                        break;
                    }
                    case "tour-schedule": {
                        console.log("saltar a Tour Schedule");
                        break;
                    }
                    case "scoreboard": {
                        console.log("saltar a Scoreboard");
                        break;
                    }
                    case "rankings": {
                        console.log("saltar a Rankings");
                        break;
                    }
                    case "news": {
                        console.log("saltar a News");
                        if (objScreen.screen===null) {
                            objScreen.screen = new NewsScreen();
                        } else {
                            console.log("no se pudo crear NewsScreen, objScreen: "+typeof objScreen+" "+objScreen);
                        }
                        break;
                    }
                    case "players": {
                        console.log("saltar a Player Overview");
                        break;
                    }
                }
                Router.actualScreen = screenName;
            }
        }
    }
}


export { Router }