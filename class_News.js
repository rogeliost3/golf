
// PANTALLA DE NEWS

import { Screen } from "./class_Screen.js";
import { Cache } from "./class_Cache.js";

import { fetchData } from "./api.js";
import { makeComboLeague, makeBackButton, makeWhereText } from "./common.js"; //TODO: a extinguir, crear clases
import { URL_BASE } from "./apikey.js";



class NewsScreen extends Screen {
    constructor() {

        super(); // llama a build() que construye header y footer standar

        this.endPoint = "/news";
        this.cache = new Cache();
        this.buildAll();
    }

    //sobreescribimos el metodo buildAll para construir la seccion <main> de news
    buildAll(remake = false) {
        if (remake) {
            this.build(); //reseteo header y footer cuando ya tenemos la instancia creada
        }

        let container = document.querySelector("main");
        container.className = "news__container";

        makeWhereText("News");
        makeBackButton();
        makeComboLeague();

        //añade listener en News al combobox de ligas
        const selectLeague = document.getElementById("select__league");
        selectLeague.addEventListener("change",

            // Traer noticias cuando cambie el combobox
            (event) => {
                const ligueSelected = selectLeague.value;
                this.clearMain();
                this.showNews(ligueSelected);
            }
        );

        this.showNews("all");
    }

    async fetchNews(league) {
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

    async showNews(league) {

        //traemos los datos de la liga seleccionada
        let data = await this.fetchNews(league);

        if (data !== undefined && data !== null) {
            //obtener el contenedor main. TODO: Podria ponerse como propiedad del objeto
            const main = document.querySelector("main");

            //construye el html con las noticias
            data.forEach(news => {
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
    }

}

export { NewsScreen }

