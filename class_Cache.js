
//Esta clase provee caches de datos para las distintas ligas de Golf que maneja la API
//En cuanto se solicita una nueva informacion se almacena en la cache de la liga correspondiente
//Se logra evitar llamadas repetidas a la API, pagar por fetchs, y mejorar la experiencia del usuario

class Cache {

    constructor() {
        this.cache = {
            "all": undefined,
            "lpga": undefined,
            "champions-tour": undefined,
            "liv": undefined,
            "eur": undefined,
            "ntw": undefined
        };
    }

    setCache(league, data) {
        this.cache[league] = data || undefined;
    }

    getCache(league) {
        return this.cache[league];
    }

    clearCache(league) {
        this.cache[league] = undefined;
    }

    clearAllCache() {
        for (let clave in this.cache) {
            this.cache[clave] = undefined;
        }
    }

    isCached(league) {
        return this.cache[league] != undefined;
    }
}

export { Cache };