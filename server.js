const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;


// Stel ejs in als template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Stel een static map in
app.use(express.static(path.resolve('public')))

// Fetch data from api
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}


// google maps 52.36252905998706, 4.9114791923019805

app.get('/', (req, res) => {

  fetchJson('https://api.openweathermap.org/data/2.5/weather?lat=52.36252905998706&lon=4.9114791923019805&appid=8654e1d765a1532e35c17c744e59edd2').then(function (jsonData) {
  // console.log(jsonData["weather"][0]["id"]);  
  number = jsonData["weather"][0]["id"];
  let numberFirst;
  if(number != 800){
    numberFirst = String(number)[0]
  }
  else{
    numberFirst = number    
  }
// console.log(numberFirst);
    res.render("index",{
      weather: numberFirst
    });
  });

})


http.listen(port, () => {
  console.log('listening on port ', port)
})



var users = {};

// https://www.tutorialspoint.com/javascript-sort-object-of-objects
const sortByPosition = obj => {
  const order = [];
  var res = {};
  Object.keys(obj).forEach(key => {
     return order[obj[key]['score'] - 1] = key;
  });
  order.forEach(key => {
     res[key] = obj[key];
  });

  return res;
}


io.on('connection', (socket) => {
    users = sortByPosition(users);
  // console.log('user: ' +socket.id+'connected' )
  users[socket.id] = {score:0,username:"0",hyscore:0,y:0};

  socket.on('tube-score', (tubescore) => {
    if(!users[socket.id]){
      return;
    }
    if(tubescore > users[socket.id].hyscore){
      users[socket.id].hyscore = tubescore;
    }
    users[socket.id].score = tubescore;
    io.emit('tube-score', users)
  })

   
  socket.on('username', (username) => {
    users[socket.id].username = username;
    io.emit('username', username)
  })
  
  socket.on('usersY', (usersY) => {
    if (users[socket.id]){
      users[socket.id].y = usersY;
      io.emit('usersY', users)
    }
  })


  socket.on('disconnect', () => {
    // console.log('user: ' +socket.id+'connected' );
    delete users[socket.id];
  })
})





 