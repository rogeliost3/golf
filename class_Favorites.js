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
