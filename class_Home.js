import { Router } from "./class_Router.js";
import { Screen } from "./class_Screen.js";



class HomeScreen extends Screen {
    constructor() {

        // llama a build() que construye header y footer standar
        super();

        // crear el main con menu de botones
        this.buildAll ();
    }

    // crear seccion <main>
    buildAll(remake=false) {
        if (remake) {
            this.build();
        }
        const container = document.querySelector("main");
        container.className="home__container";

        //creacion de elementos
        const buttonCourses = document.createElement("buttonCourses"),
        buttonLeaderboard = document.createElement("buttonLeaderboard"),
        buttonSchedule = document.createElement("buttonSchedule"),
        buttonTourSchedule = document.createElement("buttonTourSchedule"),
        buttonScoreboard = document.createElement("buttonScoreboard"),
        buttonRankings = document.createElement("buttonRankings"),
        buttonNews = document.createElement("buttonNews"),
        buttonPlayers = document.createElement("buttonPlayerss");

        //poner texto a los botones
        buttonCourses.textContent = "Courses";
        buttonLeaderboard.textContent = "Leaderboard";
        buttonSchedule.textContent = "Schedule";
        buttonTourSchedule.textContent = "Tour Schedule";
        buttonScoreboard.textContent = "Scoreboard";
        buttonRankings.textContent = "Rankings";
        buttonNews.textContent = "News";
        buttonPlayers.textContent = "Players";

        //poner atributos
        buttonCourses.setAttribute("id", "button__courses");
        buttonCourses.setAttribute("name", "buttonCourses");
        buttonCourses.classList.add("main__button");

        buttonLeaderboard.setAttribute("id", "button__leaderboard");
        buttonLeaderboard.setAttribute("name", "buttonLeaderboard");
        buttonLeaderboard.classList.add("main__button");

        buttonSchedule.setAttribute("id", "button__schedule");
        buttonSchedule.setAttribute("name", "buttonSchedule");
        buttonSchedule.classList.add("main__button");

        buttonTourSchedule.setAttribute("id", "button__tourSchedule");
        buttonTourSchedule.setAttribute("name", "buttonTourSchedule");
        buttonTourSchedule.classList.add("main__button");

        buttonScoreboard.setAttribute("id", "button__scoreboard");
        buttonScoreboard.setAttribute("name", "buttonScoreboard");
        buttonScoreboard.classList.add("main__button");

        buttonRankings.setAttribute("id", "button__rankings");
        buttonRankings.setAttribute("name", "buttonRankings");
        buttonRankings.classList.add("main__button");

        buttonNews.setAttribute("id", "button__news");
        buttonNews.setAttribute("name", "buttonNews");
        buttonNews.classList.add("main__button");

        buttonPlayers.setAttribute("id", "button__players");
        buttonPlayers.setAttribute("name", "buttonPlayers");
        buttonPlayers.classList.add("main__button");

        //agregar botones a contenedor
        container.appendChild(buttonCourses);
        container.appendChild(buttonLeaderboard);
        container.appendChild(buttonSchedule);
        container.appendChild(buttonTourSchedule);
        container.appendChild(buttonScoreboard);
        container.appendChild(buttonRankings);
        container.appendChild(buttonNews);
        container.appendChild(buttonPlayers);

        //añadir los listeners a los botones
        buttonCourses.addEventListener("click", () => {
            console.log("click en courses");
            Router.routeTo("courses");
        });

        buttonLeaderboard.addEventListener("click", () => {
            console.log("click en leaderboard");
            Router.routeTo("leaderboard");
        });

        buttonSchedule.addEventListener("click", () => {
            console.log("click en schedule");
            Router.routeTo("schedule");
        });

        buttonTourSchedule.addEventListener("click", () => {
            console.log("click en tourSchedule");
            Router.routeTo("tour-schedule");
        });

        buttonScoreboard.addEventListener("click", () => {
            console.log("click en scoreboard");
            Router.routeTo("scoreboard");
        });

        buttonRankings.addEventListener("click", () => {
            console.log("click en rankings");
            Router.routeTo("rankings");
        });

        buttonNews.addEventListener("click", () => {
            console.log("click en news");
            Router.routeTo("news");
        });

        buttonPlayers.addEventListener("click", () => {
            console.log("click en players");
            Router.routeTo("players");
        })


    };
}

export { HomeScreen }
