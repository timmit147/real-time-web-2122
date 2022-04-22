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

app.get('/', (req, res) => {
    res.render("index");
})


http.listen(port, () => {
  console.log('listening on port ', port)
})



var users = {};

io.on('connection', (socket) => {
  console.log('user: ' +socket.id+'connected' )
  socket.on('message', (message) => {
    users[socket.id]=message;
    io.emit('message', users)
  })

  socket.on('disconnect', () => {
    console.log('user: ' +socket.id+'connected' );
    delete users[socket.id];
  })
})