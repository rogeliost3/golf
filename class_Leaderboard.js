
// PANTALLA DE NEWS

import { Screen } from "./class_Screen.js";
import { Cache } from "./class_Cache.js";
import { FavoritesManager } from "./class_Favorites.js";

import { fetchData } from "./api.js";
import { makeComboLeague, makeBackButton, makeWhereText } from "./common.js"; //TODO: a extinguir, crear clases
import { URL_BASE } from "./apikey.js";


class LeaderboardScreen extends Screen {
    constructor() {

        // llama a build() que construye header y footer standar
        super();
        this.favoritesManager = new FavoritesManager();
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

        //si no ha sido cacheado llamar a fetch, y si ya lo fue devolver caché
        try {
            if (!this.cache.isCached(league)) {
                this.cache.setCache(league, await fetchData(fullUrl));
            } 
            return this.cache.getCache(league);
        } catch (error) {
            return undefined;
        }
    }

    async showLeaderboard(league) {

        //traemos los datos de la liga seleccionada
        let data = await this.fetchLeaderboard(league);
        console.log("data: " + JSON.stringify(data, null, 4));
        if (data !== undefined && data !== null) {

            //obtener el contenedor main. 
            const main = document.querySelector("main");

            //construye el html con los campeonatos y sus resultado
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

                    /*Gestion de favoritos*/
                    const id = player.athlete.id;
                    const star = document.createElement("span");
                    star.className = "favorite";
                    star.setAttribute("data-id", id);

                    star.textContent = this.favoritesManager.favorites.has(Number(id)) ? '★' : '☆';
                    star.addEventListener('click', (event) => {
                        const playerId = parseInt(event.target.dataset.id);
                        this.favoritesManager.toggleFavorite(playerId);
                    });
                    const playerItem = document.createElement("li");
                    playerItem.className = "leaderboard__block";
                    
                    playerItem.innerHTML = `
                    <div class="leaderboard__info">
                        <img src="${player.athlete.flag.href}" alt="${player.athlete.flag.alt}" width="15%">
                        <a href="${player.athlete.links[0].href} target="_blank">
                            <img src="${player.athlete.headshot.href}" alt="${player.athlete.headshot.alt}" width="70%">
                        </a>
                        <span><strong>${player.athlete.displayName}</strong></span>
                    </div>
                    <div class="leaderboard__subinfo">
                        <p><strong>Estado:</strong> ${player.status.displayValue}  |  <strong>Hoyos:</strong> ${player.status.hole}</p>
                        <p><strong>Detalle:</strong> ${player.status.detail}  |  <strong>Posición:</strong> ${player.status.position.displayName}</p>
                        <p><strong>Puntuación:</strong> ${player.score.value}</p> 
                    </div>
                    `;
                    playersList.appendChild(playerItem);
                    playerItem.querySelector(".leaderboard__info").appendChild(star);                
                });
                eventBlock.appendChild(playersList);
                main.appendChild(eventBlock);
            });
        }
    }
}

export { LeaderboardScreen }



