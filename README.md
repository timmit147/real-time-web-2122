# Flappy bird multiplayer
Voor het vak real time web heb ik een offline flappy bird game omgezet naar een multiplayer game met socket.io. De live data die je kan zien is een scorenboard met de top 20 spelers en verschillenden ghost  spelers die live de game spelen. De API die ik heb gebruikt in dit project is een weer API die de achtergrond van het level verandert naar het huidige weer.

Live versie: https://flappy123.herokuapp.com/

<img src="https://user-images.githubusercontent.com/29665951/168274843-857fb07c-8e49-4f4b-8f5c-3cd31b0aa937.png"  width="500px">

## Hoe heb ik de game aangepast?
Ik heb gebruik gemaakt van een bestaande game en deze aangepast naar mijn eigen game. De styling die ik heb aangepast is het letertypen de vogel en de achtergrond van het level. De javascript die ik heb aangepast is extra levels toegevoegd dat wanneer je level 15 heb gehaald de buizen gaan bewegen en bij level 30 de vogel sneler gaat bewegen.

Basis code: https://www.geeksforgeeks.org/flappy-bird-game-in-javascript/

**Voor** 

![ezgifcomgifmaker3](https://user-images.githubusercontent.com/29665951/168276159-7419137c-a290-4a62-8536-31265012cb6e.gif)

**Na**

![ezgif-4-9a27a61e98](https://user-images.githubusercontent.com/29665951/168278241-1c4d79e1-de00-4194-b2e7-c480ea560e68.gif)


## Hoe heb ik de socket scorenboard toegevoegd?

Wanneer een gebruiker zijn username invuld krijgt de gebruiker een uniek socket id van de server. Wanneer de gebruiker door de buis heen gaat stuurt de client de nieuwe score met het socket id naar de server in een object. De server zet het object op volgorden van hoogste score naar laagste scoren en stuurt het object naar alle andere clients. Elke client loopt de code in een lijst zodat de gebruiker het kan zien. De ster toont de hyscore die je hebt gehaald.

![image](https://user-images.githubusercontent.com/29665951/168285198-b0b6a44f-30c6-4328-a61b-b6a3bb2248ed.png)


## Hoe heb ik de ghost toegevoegd?
Elke keer dat de gebruiker klikt op spatie stuurt de client de y waarden van de gebruiker met het socket id naar de server. De server plaatst de huidige y waarden naar in een object en dit object word gestuurd naar de clients. De client loopt door het object en maakt per gebruiker een ghost aan + een p met de naam van de gebruiker. Wanneer de gebruiker al is aangemaakt doet die dit niet opnieuw maar past die alleen de y waarden aan van de ghost. Wanneer een gebruiker uitlogt word de ghost verwijdert uit het object en is het niet meer zichtbaar bij de clients.

<img src="https://user-images.githubusercontent.com/29665951/168285383-ce15da6e-8dd8-48a7-817a-7f260b1327e7.png"  width="500px">

De code die een ghost aanmaakt en de y positie aanpast. Ik heb een setTimeout toegevoegd van 1 seconden zodat dit gelijk loopt met de buizen.


```
socket.on('usersY', usersY => {
  setTimeout(function(){ 
    for (const key in usersY) {
      console.log(key);

      if(usersY[key].username == username){
        continue;
      }
      if(usersY[key].username == null){
        continue;
      }
      if(usersY[key].username == '0'){
        continue;
      }
      if (document.querySelector(`#${usersY[key].username}`)){
        document.querySelector(`#${usersY[key].username}`).style.top = usersY[key].y-50+"px";
        continue;
      }
        var p = document.createElement("p");
        p.innerHTML = usersY[key].username;
        document.body.appendChild(p);
        const newDiv = document.createElement("img");
        p.classList.add(`ghost`);
        p.setAttribute(`id`, `${usersY[key].username}`);
        newDiv.src="images/flappy.png";
        p.appendChild(newDiv);

  }
  }, 1000);
})

```

## Keuze API
Ik heb gekeken naar verschillenden API's en heb een api gekozen die het beste bij mijn game past. 

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
Met de API kan je verschillenden informatie ophalen maar wat ik het intresantste vond was dat je het verschillend weer kan opvragen. De api kan een code geven dat corospondeerd met het huidige weer van de aangegeven coordinaten. Ik heb nu de coordinaten gebruikt van HVA en in de toekomst kan ik altijd nog de live coordinaten gebruiken van de computer. Ik heb gekozen om niet alle weer types uitewerken maar alleen de globale codes.

### weer codes
* 2xx: storm
* 5xx: regen
* 6xx: sneeuw
* 7xx: mist
* 800 zonig
* 80x: wolken

### Vormgeving weer
In indesign heb ik een ontwerp gemaakt van de verschillenden weer typens. In html en css heb ik animaties toegevoed zoals regen en sneeuw om het meer interessant te maken.

**Storm**

<img src="https://user-images.githubusercontent.com/29665951/168290422-71d56884-5bcc-4c76-b342-e29c332900ac.gif"  width="250px">

**Regen**

<img src="https://user-images.githubusercontent.com/29665951/168290240-4c9a57d8-a19d-4d23-8265-7360eefdbfd7.gif"  width="250px">

**Sneeuw**

<img src="https://user-images.githubusercontent.com/29665951/168289903-9b033c5b-eab3-420c-97a3-957f6c52832b.gif"  width="250px">

**Mist**

<img src="https://user-images.githubusercontent.com/29665951/165083176-b82296b3-39e6-4ec4-aa90-3c1f5e3cc467.png"  width="250px">

**Bewolkt**

<img src="https://user-images.githubusercontent.com/29665951/165083189-c29a0394-8a2d-4837-b154-a2d5e9ab8d2a.png"  width="250px">

**Zon**

<img src="https://user-images.githubusercontent.com/29665951/165083190-582ae5db-8c39-4a97-8acf-f52ea4450781.png"  width="250px">



https://openweathermap.org/weather-conditions


## memory
De informatie van de gebruikers wordt opgeslagen in een object. Hier onder een voorbeeld hoe de data wordt opgeslagen. Ik heb nu een object in een object maar in het vervolg zal ik beter een array maken met daar in een object omdat je een array beter kan manipuleren. Deze data wordt niet opgeslagen met een database waardoor na het resarten van de server alle data gereset word.

```
users{
  uzddJjm_3W2e8aewAAAB: { score: 0, username: '0', hyscore: 0, y: 0 },
  JTR0ODytMgPOytLJAAAD: { score: 0, username: '0', hyscore: 0, y: 0 }
 }
```


## Data-management
Hier onder een voorbeeld hoe ik data ophaal en verstuur met de client server en api.

<img src="https://user-images.githubusercontent.com/29665951/168294343-1c7055d8-6ee3-4bfc-8b07-053cf3f924fd.png"  width="800px">

## Eind recultaat

<img src="https://user-images.githubusercontent.com/29665951/168278241-1c4d79e1-de00-4194-b2e7-c480ea560e68.gif"  width="500px">

## Wat is nog niet gelukt
Het aanpassen van de vogel van kleur of soort had ik niet genoeg tijd voor.
Ghost is nu niet smooth ik zou nog een animatie toevoegen.



