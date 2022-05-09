# Flappy bird
Voor dit project heb ik een offline flappy bird onlline gemaakt met socket.io. De data dat je live kan zien is het scorenboard en de andere gebruikers.

## Wat ga ik doen
1. Basis is live een scorenboard
2. Live andere players laten zien

## Extra
1. Vogels aanpassen
2. Username toevoegen boven vogel

## Hoeveel data verstuurt de client?
Wanneer iemand dood gaat stuurt de client de data naar alle gebruikers. Met 3 gebruikers met een score van 3 caracters is dit 3x3x8 = 72 bites

## Keuze API
Ik heb gekeken naar verschillenden API's en heb een api gekozen die het beste bij mijn project past. 

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

### Weer API
Met de API kan je verschillenden informatie ophalen maar wat ik het intresantste vond was dat je het verschillend weer kan opvragen. De api kan een code geven dat corospondeerd met het huidige weer van de aangegeven coordinaten. Ik heb nu de coordinaten gebruikt van school en in de toekomst kan ik altijd nog de live coordinaten gebruiken van de computer. Ik heb gekozen om niet alle weer types uitewerken maar alleen de globale codes.

### weer codes
2xx: storm
5xx: regen
6xx: sneeuw
7xx: mist
800 zonig
80x: wolken

### Vormgeving weer
In indesign heb ik een ontwerp gemaakt van de verschillenden weer typens. In html en css heb ik animaties toegevoed zoals regen en sneeuw om het meer interessant te maken.

![Web 1920 – 16](https://user-images.githubusercontent.com/29665951/165083176-b82296b3-39e6-4ec4-aa90-3c1f5e3cc467.png)
![Web 1920 – 18](https://user-images.githubusercontent.com/29665951/165083183-cb0dcaa6-759e-4ef0-adaa-adf2a3c4d988.png)
![Web 1920 – 19](https://user-images.githubusercontent.com/29665951/165083184-f808d88e-94ae-4e3f-9cc7-647050a36552.png)
![Web 1920 – 17](https://user-images.githubusercontent.com/29665951/165083186-2db204de-38ad-4fed-b7cb-d0b1ebaff786.png)
![Web 1920 – 15](https://user-images.githubusercontent.com/29665951/165083189-c29a0394-8a2d-4837-b154-a2d5e9ab8d2a.png)
![Web 1920 – 14](https://user-images.githubusercontent.com/29665951/165083190-582ae5db-8c39-4a97-8acf-f52ea4450781.png)



https://openweathermap.org/weather-conditions

## Ghost added
Ik stuur met socket.io de y coordinaten van de speler wanneer op spatie geklikt wordt, De cordinaten worden naar alle spelers gestuurd en voor elke persoon wordt in een forloop een ghost gemaakt met de username er naast. 

![image](https://user-images.githubusercontent.com/29665951/167418829-cae3c4b8-6fbf-49d5-b678-8e355e5b33d4.png)

## memory
De informatie van de gebruikers wordt opgeslagen in een object. Hier onder een voorbeeld hoe de data wordt opgeslagen. IK heb nu een object in een object maar in het vervolg zal ik beter een array maken met daar in een object omdat je een array beter kan manipuleren. Deze data wordt niet opgeslagen met een database waardoor na het resarten van de server alle data gereset word.

```
users{
  uzddJjm_3W2e8aewAAAB: { score: 0, username: '0', hyscore: 0, y: 0 },
  JTR0ODytMgPOytLJAAAD: { score: 0, username: '0', hyscore: 0, y: 0 }
 }
```

## Data-management
Hier onder een voorbeeld hoe ik data ophaal en verstuur met de client server en api.

![Web 1920 – 20](https://user-images.githubusercontent.com/29665951/167418488-31ac46fa-8e0f-4036-85bb-e330a08b1ed0.png)

## Eind recultaat


## Bronnen
https://www.geeksforgeeks.org/flappy-bird-game-in-javascript/
