import { Router } from "./class_Router.js";

//crear instancia de la clase HomeScreen para la pantalla inicial del index.html
//const homeScreen=new HomeScreen();

//const router=new Router();
//const router=new Router();
Router.init();
Router.routeTo("home");




// PANTALLA INICIAL
/*
import { makeHeader,makeFooter } from "./common.js";
import { routeTo } from "./class_Router.js";
*/
//ya oop
//crear objeto menu
/*function makeMainScreen() {

    const container = document.querySelector("main");//ya oop
    container.classList.add("index__container");//ya oop

    const buttonCourses = document.createElement("buttonCourses"),
    buttonLeaderboard = document.createElement("buttonLeaderboard"),
    buttonSchedule = document.createElement("buttonSchedule"),
    buttonTourSchedule = document.createElement("buttonTourSchedule"),
    buttonScoreboard = document.createElement("buttonScoreboard"),
    buttonRankings = document.createElement("buttonRankings"),
    buttonNews = document.createElement("buttonNews"),
    buttonPlayers = document.createElement("buttonPlayerss");

    buttonCourses.textContent = "Courses";
    buttonLeaderboard.textContent = "Leaderboard";
    buttonSchedule.textContent = "Schedule";
    buttonTourSchedule.textContent = "Tour Schedule";
    buttonScoreboard.textContent = "Scoreboard";
    buttonRankings.textContent = "Rankings";
    buttonNews.textContent = "News";
    buttonPlayers.textContent = "Players";

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

    container.appendChild(buttonCourses);
    container.appendChild(buttonLeaderboard);
    container.appendChild(buttonSchedule);
    container.appendChild(buttonTourSchedule);
    container.appendChild(buttonScoreboard);
    container.appendChild(buttonRankings);
    container.appendChild(buttonNews);
    container.appendChild(buttonPlayers);

    buttonCourses.addEventListener("click", () => {
        console.log("click en courses");
        routeTo("courses");
    });

    buttonLeaderboard.addEventListener("click", () => {
        console.log("click en leaderboard");
        routeTo("leaderboard");
    });

    buttonSchedule.addEventListener("click", () => {    
        console.log("click en schedule");
        routeTo("schedule");
    });

    buttonTourSchedule.addEventListener("click", () => {    
        console.log("click en tourSchedule");
        routeTo("tour-schedule");
    });

    buttonScoreboard.addEventListener("click", () => {    
        console.log("click en scoreboard");
        routeTo("scoreboard");
    });    

    buttonRankings.addEventListener("click", () => {
        console.log("click en rankings");
        routeTo("rankings");
    });

    buttonNews.addEventListener("click", () => {
        console.log("click en news");   
        routeTo("news");
    });

    buttonPlayers.addEventListener("click", () => {
        console.log("click en players");
        routeTo("players");
    })

    
};

makeHeader();
makeMainScreen();
makeFooter();

export { makeMainScreen };*/


/*function makeMainListeners() {
    const buttonSearch = document.getElementById("buttonSearch");

    console.log("buttonSearch: " + buttonSearch);
    if (buttonSearch != null) {
        buttonSearch.addEventListener("click",

            //TODO: Quitar esto de la main, solo llevara un menu de botones
            function (event) {
                event.preventDefault(); // Evita que se recargue la página
                const selectLeague = document.getElementById("selectLeague");
                const leagueSelected = selectLeague.value;
                // console.log("leagueSelected: "+leagueSelected);
                // document.getElementById("results").innerText = "Seleccionaste: " + leagueSelected;
            }

        );
    } else {
        console.log("falta buttonSearch");
    }

}*/




