# Flappy bird
Voor dit project heb ik socket.io toegevoegd op een bestaande flappy bird game.

## Wat ga ik doen
1. Basis is live een scorenboard
2. Live andere players laten zien

## Extra
1. Vogels aanpassen
2. Username toevoegen boven vogel

## Hoeveel data verstuurt de client?
Wanneer iemand dood gaat stuurt de client de data naar alle gebruikers. Met 3 gebruikers met een score van 3 caracters is dit 3x3x8 = 72 bites

## Keuze API

### API 1 (yahoo-weather-API)
Met de weer API kan ik het weer ophalen en tonen in de achtergrond van het level. Wanneer het regent buiten zie je in de game ook dat het regent, Wanneer de zon schijnt verandert het level naar een zonige omgeving.
https://www.npmjs.com/package/yahoo-weather
https://openweathermap.org/api?ref=apilist.fun

### API 2 (NASA-API)
Inplaats van een vogel kan ik het ook een ruimte schip maken en data tonen van nasa. De data die ik kan ophalen zou zijn de afbeelding van de dag van nasa en gebruiken als achtergrond. Ik kan ook de dichtbijzijnste objecten bij aarden laten zien en dat je die moet ontwijken inplaats van de buizen.
https://api.nasa.gov/

### API 3 (Emoji-API)
Ik kan inplaats van een vogel een Emoji gebruiken als speler. Je kan dan zelf kiezen in een menu welk Emoji je kiest.

### API 4 (supername-api)
Inplaats van een username pakt de website een random naam van de superhero api. Of de api dat een random cartoon pakt.
https://superheroapi.com/?ref=apilist.fun

### API 5 (Cartoon-API)
Een API die inplaats van een vogel een cartoon afbleelding gebruikt.
https://adorable.io/?ref=apilist.fun

### API 6 (MAPS-api)
Een game waarbij je rond kan rijden door de aarden en het doel is om  zo snel mogelijk naar een locatie te rijden. De grond die je ziet is de kaart van google maps.
https://developers.google.com/maps

### API 6 (Flight-API)
Een game waarbij je naar verschillenden bestemmingen moet vliegen op basis van de flight API die een random locatie laat zien.
https://aviationstack.com/

## Gekozen API
Ik heb gekozen om de yahoo-weather-API te gebruiken om live data te tonen omdat je dit ook echt live kan zien wanneer je naar buiten kijkt. Na het testen van de API kwam ik er achter dat de API niet goed was daarom gebruik ik nu deze API https://openweathermap.org/current.

## Schetsen


## Bronnen
https://www.geeksforgeeks.org/flappy-bird-game-in-javascript/
