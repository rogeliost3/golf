
//la clase Screen padre se ocupa unicamente del header y el footer,
//que aparecen iguales en todas las screens
//esta clase no se ocupa de la seccion main del body, dejando esa parte a las clases hijas

class Screen {
    constructor() {
        this.build();
    }

    //construye header y footer standard
    build() {
        this.#clearHeader();
        this.clearMain();
        this.#clearFooter(); 

        this.buildHeader();
        this.buildFooter();
    }

    //funciones de borrado para uso interno de la clase

    #clearHeader() {
        const header=document.querySelector("header");
        while (header && header.firstChild) {
            header.removeChild(header.firstChild);
        }
    }

    #clearFooter() {
        const footer=document.querySelector("footer");
        while (footer && footer.firstChild) {
            footer.removeChild(footer.firstChild);
        }
    }

    // funcion publica de borrado del main 
    clearMain() {
        const main=document.querySelector("main");
        while (main && main.firstChild) {
            main.removeChild(main.firstChild);
        }
    }

    buildHeader() {     
        const header=document.querySelector("header");
        const divTitle = document.createElement("div");
        divTitle.setAttribute("id", "header__title");

        const h5 = document.createElement("h5");
        h5.textContent = "Golf Live";

        divTitle.appendChild(h5);
        header.appendChild(divTitle);
    }

    buildFooter() {
        const footer=document.querySelector("footer");
        const h5 = document.createElement("h5");
        h5.textContent = "(c) Rogelio Suárez Tejera 2025";
        footer.appendChild(h5);
    }
}

export { Screen }


