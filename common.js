import { LEAGUES } from "./api.js";
import { Router } from "./router.js";

//crear objeto combo
function makeComboLeague(buttonSearch = null) {

    const header = document.querySelector("header");;

    const div = document.createElement("div");
    div.setAttribute("id", "header__combo");
    header.appendChild(div);

    const form = document.createElement("form");
    form.setAttribute("id", "form__buscar");
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
    if (buttonSearch != null) {
        const button = document.createElement("button");
        button.setAttribute("id", "button__search");
        button.textContent = buttonSearch;
        console.log("Creando boton de busqueda");
        form.appendChild(button);
    } else
        console.log("No boton de busqueda");
}


// poner boton de regresar a pagina anterior en header
function makeBackButton() {

    //añadirlo como elemento de inicio del header
    const header = document.getElementById("header__title");

    // Crear la imagen <img>
    let imagen = document.createElement("img");
    imagen.setAttribute("id", "button__back");
    imagen.src = "./assets/flecha-izquierda.png";
    imagen.alt = "Volver";

    // Agregar la imagen dentro del enlace
    // enlace.appendChild(imagen);
    header.prepend(imagen);

    // Agregar el EventListener al enlace
    imagen.addEventListener("click", (event) => {
        Router.routeTo("home"); 
    });

}

//en header, poner texto de donde estamos
function makeWhereText(text) {
    const header = document.getElementById("header__title");
    const h4div = document.createElement("div");
    h4div.setAttribute("id", "header__where");
    const h4 = document.createElement("h4");
    h4.textContent = text;
    h4div.appendChild(h4);
    header.appendChild(h4div);
}

export { makeComboLeague, makeBackButton, makeWhereText };