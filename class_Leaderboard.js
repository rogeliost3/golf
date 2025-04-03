
// PANTALLA DE NEWS

import { Screen } from "./class_Screen.js";
import { Cache } from "./class_Cache.js";

import { fetchData } from "./api.js";
import { makeComboLeague, makeBackButton, makeWhereText } from "./common.js"; //TODO: a extinguir, crear clases
import { URL_BASE } from "./apikey.js";


class LeaderboardScreen extends Screen {
    constructor() {

        // llama a build() que construye header y footer standar
        super();

        this.endPoint = "/leaderboard";
        this.cache = new Cache();
        this.buildAll();
    }

    //sobreescribimos el metodo buildAll para construir la seccion <main> de news
    buildAll(remake = false) {
        if (remake) {
            //reseteo header y footer cuando ya tenemos la instancia creada
            this.build();
        }

        let container = document.querySelector("main");
        container.className = "leaderboard__container";

        makeWhereText("Leaderboard");
        makeBackButton();
        makeComboLeague();

        //añade listener en News al combobox de ligas
        const selectLeague = document.getElementById("select__league");
        selectLeague.addEventListener("change",

            // Traer noticias cuando cambie el combobox
            (event) => {
                const ligueSelected = selectLeague.value;
                this.clearMain();
                this.showLeaderboard(ligueSelected);
            }
        );
        this.showLeaderboard("all");
    }

    async fetchLeaderboard(league) {
        const fullUrl = new URL(URL_BASE + this.endPoint);
        fullUrl.searchParams.append("league", league);
        // fullUrl.searchParams.append("limit", 7);

        console.log("en fetchLeaderboard");
        //si no ha sido cacheado llamar a fetch, y si ya lo fue devolver caché
        try {
            if (!this.cache.isCached(league)) {
                this.cache.setCache(league, await fetchData(fullUrl)) //this.cache[league] = await fetchData(fullUrl);
            } else {
                console.log("using cache in Leaderboard for league:" + league);
            }
            return this.cache.getCache(league);
        } catch (error) {
            console.log("Error fetching leaderboards:", error);
            return undefined;
        }
    }

    async showLeaderboard(league) {

        //traemos los datos de la liga seleccionada
        let data = await this.fetchLeaderboard(league);
        console.log("data: " + JSON.stringify(data, null, 4));
        if (data !== undefined && data !== null) {

            console.log("data: " + JSON.stringify(data, null, 4));

            //obtener el contenedor main. 
            const main = document.querySelector("main");

            //construye el html con los campeonatos y sus resultados
            // const container = document.createElement("div");
            // container.className = "leaderboard__blocks";

            data.events.forEach(event => {
                const eventBlock = document.createElement("div");
                eventBlock.className = "leaderboard__event-block";

                eventBlock.innerHTML = `
                    <h2>${event.shortName} (${event.league.name})</h2>
                    <p><small>Fecha: ${event.date}</small></p>
                    <p><strong>Premio:</strong> ${event.displayPurse}</p>
                    <p><strong>Tipo de premio:</strong> ${event.tournament.scoringSystem.name}</p>
                    <p><strong>Rondas:</strong> ${event.tournament.numberOfRounds}</p>
                    <h3>Ganador: <a href="#">${event.winner.displayName}</a></h3>
                `;

                const playersList = document.createElement("ul");
                event.competitions[0].competitors.forEach(player => {
                    const playerItem = document.createElement("li");
                    playerItem.className = "leaderboard__block";
                    playerItem.innerHTML = `
                    <div>
                        <img src="${player.athlete.flag.href}" alt="${player.athlete.flag.alt}" width="15%">
                        <a href="${player.athlete.links[0].href} target="_blank">
                            <img src="${player.athlete.headshot.href}" alt="${player.athlete.headshot.alt}" width="25%">
                        </a>
                        <span><strong>${player.athlete.displayName}</strong></span>
                    </div>
                    <div class="leaderboard__player-info">
                    <p><strong>Estado:</strong> ${player.status.displayValue}  |  <strong>Hoyos:</strong> ${player.status.hole}</p>
                    <p><strong>Detalle:</strong> ${player.status.detail}  |  <strong>Posición:</strong> ${player.status.position.displayName}</p>
                    <p><strong>Puntuación:</strong> ${player.score.value}</p>
                `;
                    playersList.appendChild(playerItem);
                });
                eventBlock.appendChild(playersList);
                main.appendChild(eventBlock);
            });

            // main.appendChild(container);
        }
    }
}


export { LeaderboardScreen }


/*
let newsCache = {
    "all": undefined,
    "lpga": undefined,
    "champions-tour": undefined,
    "liv": undefined,
    "eur": undefined,
    "ntw": undefined,
    "anwa": undefined
};

//obtiene algunas news de la api
async function fetchNews(league = "all", limit = 7, forceRefresh = false) {
    const fullUrl = new URL(URL_BASE + "/news");
    fullUrl.searchParams.append("league", league);
    fullUrl.searchParams.append("limit", limit);
    console.log("en fetchNews");
    //si no ha sido cacheado llamar a fetch, y si ya lo fue devolver caché
    try {
        if (forceRefresh || newsCache[league] === undefined) {
            console.log("calling API fetch in News for league:" + league);
            newsCache[league] = await fetchData(fullUrl);
        } else {
            console.log("using cache in News for league:" + league);
        }
        //console.log("newsCache[league]: "+JSON.stringify(newsCache[league],null,4));
        return newsCache[league];
    } catch (error) {
        console.log("Error fetching news:", error);
        return {};
    }
}


// cargar las news en la zona de noticias html
async function showNews(league, limit) {

    //obtener los datos de la liga seleccionada
    let data;
    for (let i = 0; i < LEAGUES.length; i++) {
        if (league == LEAGUES[i].value) {
            data = await fetchNews(league, limit);
            break;
        }
    }

    //construye el html con las noticias
    const main = document.querySelector("main");
    data.forEach(news => {
        console.log("creando " + news.images[0].id);
        const newsCard = document.createElement("article");
        newsCard.classList.add("news__card");
        newsCard.innerHTML = `
            <img src=\"${news.images[0].url}\" alt=\"${news.headline}\">
            <h5>${news.images[0].credit != undefined ? news.images[0].credit : ""}</h5>
            <h3>${news.headline}</h3>
            <h5>${news.published.slice(0, news.published.indexOf("T"))}</h5>
            <p>${news.description}</p>
            <a href=\"${news.link}\" target=\"_blank\">Read more</a>
            <br>
        `;
        main.appendChild(newsCard);
    });
}
*/
/*
function makeNewsScreen() {
    document.querySelector("main").classList.replace("index__container", "news__container");
    makeComboLeague();
    makeBackButton();
    setNewsListeners();
    showNews("all", 7);
}

function setNewsListeners() {
    const selectLeague = document.getElementById("select__league");
    if (selectLeague) {
        selectLeague.addEventListener("change",

            // Traer noticias cuando cambie el combobox
            function (event) {
                const ligueSelected = selectLeague.value;
                clearMain();
                showNews(ligueSelected, 7);
            }

        );
    } else {
        console.log("falta selectLeague");
    }
}


//makeNewsScreen();
*/




