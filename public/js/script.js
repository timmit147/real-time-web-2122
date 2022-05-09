username = prompt("username");

// Socket 

let socket = io()
let input = document.querySelector('input')

socket.on('tube-score', message => {
  var ul = document.getElementById("leaderboard");
  ul.innerHTML = "";
  // Object.keys(message).reverse()
  // console.log(message)

  for (var i = Object.keys(message).length - 1; i >= 0; i-- ) {
    if(message[Object.keys(message)[i]].username == username){
      document.querySelector(".currentUser").innerHTML = message[Object.keys(message)[i]].username+":"+message[Object.keys(message)[i]].score +" ★ " + message[Object.keys(message)[i]].hyscore ;
    }
    else{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(message[Object.keys(message)[i]].username+":"+message[Object.keys(message)[i]].hyscore));
    ul.appendChild(li);
  }
  }
})

socket.on('y', y => {
    document.querySelector(".ghost").style.top = y-50+"px";
    console.log(username);
})

// changed code
// Background scrolling speed
let move_speed = 3;
    
// Gravity constant value
let gravity = 0.5;
    
// Getting reference to the bird element
let bird = document.querySelector('.bird');
    
// Getting bird element properties
let bird_props = bird.getBoundingClientRect();
let background =
    document.querySelector('.background')
            .getBoundingClientRect();
    
// Getting reference to the score element
let score = 0;
let message =
    document.querySelector('.message');
    
// Setting initial game state to start
let game_state = 'Start';
    
document.querySelector("body").onclick= function(event) {
  if( game_state != 'Play'){
    socket.emit('tube-score', score);
        socket.emit('username', username);
        socket.emit('tube-score', score);
        socket.emit('username', username);
    document.querySelectorAll('.pipe_sprite')
              .forEach((e) => {
      e.remove();
    });
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score = '0';
    play();
  }
};


// Add an eventlistener for key presses
document.addEventListener('keydown', (e) => {
  // console.log(document.querySelector(".bird").y);
  socket.emit('y', document.querySelector(".bird").y);

  // Start the game if space key is pressed
  if (e.key == ' ' &&
      game_state != 'Play') {

        socket.emit('tube-score', score);
        socket.emit('username', username);
        socket.emit('tube-score', score);
        socket.emit('username', username);

    document.querySelectorAll('.pipe_sprite')
              .forEach((e) => {
      e.remove();
    });
    bird.style.top = '40vh';
    game_state = 'Play';
    message.innerHTML = '';
    score = '0';
    play();
  }
});

function play() {
  function move() {
      
    // Detect if game has ended
    if (game_state != 'Play') return;
      
    // Getting reference to all the pipe elements
    let pipe_sprite = document.querySelectorAll('.pipe_sprite');
    pipe_sprite.forEach((element) => {
        
      let pipe_sprite_props = element.getBoundingClientRect();
      bird_props = bird.getBoundingClientRect();
        
      // Delete the pipes if they have moved out
      // of the screen hence saving memory
      
      if (pipe_sprite_props.right <= 0) {
        element.remove();
      } else {
        // Collision detection with bird and pipes
            // Collision detection with bird and
    // window top and bottom
  
        if (
          bird_props.left < pipe_sprite_props.left +
          pipe_sprite_props.width &&
          bird_props.left +
          bird_props.width > pipe_sprite_props.left &&
          bird_props.top < pipe_sprite_props.top +
          pipe_sprite_props.height &&
          bird_props.top +
          bird_props.height > pipe_sprite_props.top || bird_props.top < 0 ||  bird_props.bottom > background.bottom
        ) {
            
          // Change game state and end the game
          // if collision occurs
          game_state = 'End';
          message.innerHTML = 'Press Space To Restart';
          bird.style.top = '40vh';
          return;
        } else {
          // Increase the score if player
          // has the successfully dodged the 
          if (
            pipe_sprite_props.right < bird_props.left &&
            pipe_sprite_props.right + 
            move_speed >= bird_props.left &&
            element.increase_score == '1'
          ) {
            score = +score + 1;
            socket.emit('tube-score', score);
          }
          element.style.left = 
            pipe_sprite_props.left - move_speed + 'px';
        }
      }
    });
  
    requestAnimationFrame(move);
  }
  requestAnimationFrame(move);
  
  let bird_dy = 0;
  function apply_gravity() {
    if (game_state != 'Play') return;
    bird_dy = bird_dy + gravity;
    document.addEventListener('keydown', (e) => {
      if (e.key == 'ArrowUp' || e.key == ' ') {
        bird_dy = -7.6;
      }
    });
    document.onclick= function(event) {
      if (game_state == 'Play'){
        bird_dy = -7.6;
      }
    }

    // document.body.on('click touchstart', function () {
    //   console.log("test");
    // }
  

    
    bird.style.top = bird_props.top + bird_dy + 'px';
    bird_props = bird.getBoundingClientRect();
    requestAnimationFrame(apply_gravity);
  }
  requestAnimationFrame(apply_gravity);
  
  let pipe_seperation = 0;
    
  // Constant value for the gap between two pipes
  let pipe_gap = 25;
  var level = 0;
  function create_pipe() {
    if (game_state != 'Play') return;
      
    // Create another set of pipes
    // if distance between two pipe has exceeded
    // a predefined value
    if (pipe_seperation > 115) {
      pipe_seperation = 0
        
      // Calculate random position of pipes on y axis
      let pipe_posi = Math.floor(Math.random() * 43) + 8;
      let pipe_sprite_inv = document.createElement('div');
      pipe_sprite_inv.className = 'pipe_sprite';
      pipe_sprite_inv.style.top = pipe_posi - 70 + 'vh';
      pipe_sprite_inv.style.left = '150vw';
        
      // Append the created pipe element in DOM
      document.body.appendChild(pipe_sprite_inv);
      let pipe_sprite = document.createElement('div');
      pipe_sprite.className = 'pipe_sprite';
      pipe_sprite.style.top = pipe_posi + pipe_gap + 'vh';
      pipe_sprite.style.left = '150vw';
      pipe_sprite.increase_score = '1';
      switch (level){
        case 0:
          document.body.classList.remove('move');
          document.body.classList.remove('move2');
          document.body.classList.remove('move3');
          move_speed = 3;
          break;
        case 15:
          document.body.classList.add('move');
          break;
        case 30:
          document.body.classList.remove('move');
          document.body.classList.add('move2');
          move_speed = 6;
          break;
        case 40:
          document.body.classList.remove('move2');
          document.body.classList.add('move3');
          break;
        case 50:
          move_speed = 8;
          break;
        case 60:
          move_speed = 10;
          break;
      }
      
      // Append the created pipe element in DOM
      document.body.appendChild(pipe_sprite);
      level = level+1;
    }
    pipe_seperation++;
    requestAnimationFrame(create_pipe);
  }
  requestAnimationFrame(create_pipe);
}
