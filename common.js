import { LEAGUES } from "./api.js"; 
import { Router } from "./router.js";

//crear objeto combo
function makeComboLeague(buttonSearch=null) {

            const header=document.querySelector("header");;

            const div=document.createElement("div");
            div.setAttribute("id","header__combo");
            header.appendChild(div);

            const form=document.createElement("form");
            form.setAttribute("id","form__buscar");
            div.appendChild(form);
        
            // Crear el label
            const label = document.createElement("label");
            label.setAttribute("for", "select__league");
            label.textContent = "Ver liga";
            form.appendChild(label);

            // Crear el select
            const select = document.createElement("select");
            select.setAttribute("id", "select__league");
            select.setAttribute("name", "selected__league");

            // Agregar leagues al select
            LEAGUES.forEach(opcion => {
                let option = document.createElement("option");
                option.value = opcion.value;
                option.textContent = opcion.text;
                if (opcion.selected) option.selected = true;
                select.appendChild(option);
            });
            form.appendChild(select);

            // Agregar boton buscar si lo pedimos
            // <button id="buttonSearch">Buscar</button>
            if (buttonSearch!=null) {
                const button = document.createElement ("button");
                button.setAttribute ("id", "button__search");
                button.textContent = buttonSearch;
                console.log("Creando boton de busqueda");
                form.appendChild(button);
            } else
                console.log("No boton de busqueda");  
}

/*
//ya oop
function clearMain() {
    const container=document.querySelector("main");;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//ya oop
function clearHeader() {
    const container=document.querySelector("header");;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//ya oop
function clearFooter() {
    const container=document.querySelector("footer");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
*/
// poner boton de regresar a pagina anterior en header
function makeBackButton() {
    /*
    //crear boton de regreso
    const backButton=document.createElement("button");
    backButton.setAttribute("id","button__back");
    backButton.textContent="<<<";*/
    // let enlace = document.createElement("a");
    // enlace.href = "#";
    //enlace.innerText = "<<<";
    
    
    //añadirlo como elemento de inicio del header
    const header=document.getElementById("header__title");
    // header.prepend(enlace);
    // header.prepend(backButton);

    //crear evento de regreso
    /*backButton.addEventListener("click", function() {
        routeTo("home");
    });*/

    // Crear la imagen <img>
    let imagen = document.createElement("img");
    imagen.setAttribute("id","button__back");
    imagen.src = "./assets/flecha-izquierda.png";
    imagen.alt = "Volver";

    // Agregar la imagen dentro del enlace
    // enlace.appendChild(imagen);
    header.prepend(imagen);

    // Agregar el EventListener al enlace
    imagen.addEventListener("click", function(event) {
        Router.routeTo("home"); // TODO: hacer la opcion routeTo("back"); y que haya un historial de navegacion
    });

}

/*
//ya oop
function makeHeader() {
    const header=document.querySelector("header");
    
    const divTitle=document.createElement("div");
    divTitle.setAttribute("id","header__title");
    
    const h5=document.createElement("h5");
    h5.textContent="Golf Live";

    divTitle.appendChild(h5);
    header.appendChild(divTitle);

}

//ya oop
function makeFooter() {
    const container=document.querySelector("footer");;
    const h5=document.createElement("h5");
    h5.textContent="(c) Rogelio Suárez Tejera 2025";
    container.appendChild(h5);
}
*/
export { makeComboLeague, makeBackButton };