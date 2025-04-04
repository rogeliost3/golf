class FavoritesManager {
    constructor() {
        this.favorites = new Set(JSON.parse(localStorage.getItem('favorites')) || []);
        console.log("favorites recuperados: ", JSON.stringify([...this.favorites]));
    }
    toggleFavorite(playerId) {
        if (this.favorites.has(playerId)) {
            this.favorites.delete(playerId);
        } else {
            this.favorites.add(playerId);
        }
        console.log("this.favorites: ", JSON.stringify([...this.favorites]));
        localStorage.setItem('favorites', JSON.stringify([...this.favorites]));
        this.updateUI(playerId);
    }
    updateUI(playerId) { 
        const star = document.querySelector(`[data-id='${playerId}']`);
        if (star) {
            star.textContent = this.favorites.has(playerId) ? '★' : '☆';
        }
    }
}

export { FavoritesManager };
/*
const players = [
    { id: 1, nombre: 'Tiger', apellidos: 'Woods', nacionalidad: 'USA', edad: 48, foto: 'https://via.placeholder.com/80', bandera: 'https://via.placeholder.com/30x20', puntuacion: 2800 },
    { id: 2, nombre: 'Rory', apellidos: 'McIlroy', nacionalidad: 'UK', edad: 34, foto: 'https://via.placeholder.com/80', bandera: 'https://via.placeholder.com/30x20', puntuacion: 2750 }
];

const favoritesManager = new FavoritesManager();
const container = document.getElementById('players-container');

players.forEach(player => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
        <span class="favorite" data-id="${player.id}">${favoritesManager.favorites.has(player.id) ? '★' : '☆'}</span>
        <img src="${player.foto}" alt="${player.nombre}"><br>
        <strong>${player.nombre} ${player.apellidos}</strong><br>
        <img src="${player.bandera}" alt="${player.nacionalidad}" class="flag"><br>
        Edad: ${player.edad} | Puntos: ${player.puntuacion}
    `;
    container.appendChild(card);
});

document.querySelectorAll('.favorite').forEach(star => {
    star.addEventListener('click', () => {
        const playerId = parseInt(star.dataset.id);
        favoritesManager.toggleFavorite(playerId);
    });
});*/