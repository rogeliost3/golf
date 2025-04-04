# Golf Live
Proyecto individual de frontend para BBK The Bridge, 
por Rogelio Suárez Tejera
Marzo 2025

# Descripción general de la API

Esta API de la ESPN americana, proporciona datos fiables de torneos de golf y ligas en tiempo real, incluidas clasificaciones, tablas de clasificación, 
tarjetas de puntuación, resultados, estadísticas y una gran cantidad de información adicional. También frece acceso en tiempo real a los datos de torneos de golf
Incluye las tres ligas mas importantes del mundo, la PGA, la LIV y DP World.

Se ha implementado Noticias por ligas y Leaderboard por ligas. En el futuro se harán los restantes botones de menú.
Dada la gran cantidad de datos disponibles se ha hecho un cribado para mostrar lo mas importante o básico.

El endpoint siempre devuelve un objeto JSON.

Los endpoints que recuperan informacion de jugadores requieren un id de jugador, pero la API no proporciona un listado de jugadores con sus id,
asi que estos endpoints no han sido implementados, porque habria que hacer un trabajo extra para averiguar ids desde otros json.

# Caracteristicas de la APP
Desarrollo Mobile First 
Empleo de Clases y Orientación a Objetos 
  Métodos estáticos 
  Herencia 
  Encapsulamiento 
Empleo de localStorage para Favoritos (jugadores)
Empleo de la API de datos de Golf de la ESPN ($$). Rápida y con mucha información
Fetchs cacheados.
Empleo de una clase “router” para el tratamiento de las peticiones de redirección a las distintas páginas de la web.
Desarrollo de un ghostFetch con datos descargados a disco, para no emplear el fetch en tiempo de desarrollo y economizar gasto de API.
Diseño más trabajado.

# Endpoints disponibles
# Endpoint NEWS
## Descripción
Este punto final recupera noticias sobre eventos de golf de una liga específica o de todas las ligas. Proporciona acceso a las últimas noticias, actualizaciones e historias relacionadas con el golf.

## Parámetros:
league: Especifica la liga de golf. Use "all" para recuperar noticias de todas las ligas.
limit (opcional): Especifica el límite de artículos de noticias a devolver (por defecto: 7).

# Endpoint STANDINGS
## Descripción
Este punto final recupera datos de clasificación de golfistas, proporcionando información sobre su posición en diferentes temporadas y tipos.

## Parámetros:
None: No se requieren parámetros de consulta para este punto final.

# Endpoint LEADERBOARD
## Descripción
Recupera la clasificación de un evento de golf específico dentro de una liga seleccionada, incluyendo puntuaciones y otros detalles relevantes.

## Parámetros:
league (opcional): Especifica la liga de golf (por defecto: PGA).
eventId (opcional): Identificador único del evento (por defecto: un evento de la PGA).

# Endpoint SCHEDULE
## Descripción
Recupera el calendario de eventos de golf de una temporada y liga específicas, proporcionando información sobre torneos, fechas y ubicaciones.

## Parámetros:
season: Especifica la temporada.
league (opcional): Especifica la liga de golf (por defecto: PGA).

# Endpoint SCOREBOARD
## Descripción
Recupera datos del marcador de eventos de golf en una fecha específica dentro de una liga seleccionada, incluyendo torneos en curso y resultados.

## Parámetros:
year: Año del marcador.
month: Mes del marcador.
day: Día del marcador.
league (opcional): Liga de golf (por defecto: PGA).
limit (opcional): Límite de resultados a devolver (por defecto: 200).

# Endpoint PLAYER OVERVIEW
## Descripción
Recupera una descripción general de un jugador de golf según su ID, incluyendo estadísticas clave y logros.

## Parámetros:
playerId: Identificador único del jugador.

# Endpoint PLAYER LEADERBOARD
## Descripción

Recupera la clasificación de cada jugador en un evento de golf de la liga seleccionada, mostrando puntuaciones y detalles relevantes.

## Parámetros:
league (opcional): Especifica la liga de golf (por defecto: PGA).
eventId (opcional): Identificador único del evento (por defecto: un evento de la PGA).

# Endpoint PLAYER STATS
## Descripción
Recupera estadísticas de golfistas de una temporada y liga específicas, incluyendo promedios de puntuación, distancias de drive y más.

## Parámetros:
page (opcional): Número de página de los resultados (por defecto: 1).
limit (opcional): Límite de resultados por página (por defecto: 50).
league: Liga de golf.
season (opcional): Temporada (por defecto: 2024).

# Endpoint PLAYER RESULTS
## Descripción
Recupera resultados o estadísticas de un golfista según su ID y temporada, incluyendo su desempeño en torneos.

## Parámetros:
playerId: Identificador único del jugador.
season (opcional): Temporada de los resultados (por defecto: 2024).

# Endpoint PLAYER SCORECARD
## Descripción
Recupera la tarjeta de puntuación de un golfista según su ID y temporada, mostrando su desempeño en torneos.

## Parámetros:
playerId: Identificador único del jugador.
season (opcional): Temporada de la tarjeta de puntuación (por defecto: 2024).

# Endpoint PLAYER INFO
## Descripción
Recupera información sobre un jugador de golf específico, incluyendo datos personales y estadísticas de su carrera.

## Parámetros:
playerId: Identificador único del jugador.
