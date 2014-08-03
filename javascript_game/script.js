window.onload = function() {
  var hero = document.getElementById("hero");
  hero.style.position = "absolute";
  hero.style.top = hero.style.left = "500px";
}
   

var position1 = {x: 450, y: 0};
var position2 = {x: 300, y: 300};
var position3 = {x: 450, y: 300};
var position4 = {x: 600, y: 300};
var position5 = {x: 150, y: 450};
var position6 = {x: 300, y: 450};
var position7 = {x: 600, y: 450};
var position8 = {x: 750, y: 450};
var position9 = {x: 300, y: 600};
var position10 = {x: 450, y: 600};
var position11 = {x: 600, y: 600};
var position12 = {x: 450, y: 900};

var guard = {position: position2};

var guard = document.getElementById("guard");
guard.style.position = "absolute";



var friend = {position: position5, free: false};

// var hero = document.getElementById("hero");
// hero.style.position = "absolute";


// hero.position = function(x,y) {
//   hero.style.left = x;
//   hero.style.top = y;
// }


// hero.position = position12;


var begin = prompt("I built this after a week of learning Javascript. Wanna play? Yes/No").lowerCase();

if (begin === "yes") {
  go();
} else {
  alert("Alrighty then.");
};


var go = function() {
  if (hero.position === position1) {
    youWin();
  }
  var direction = prompt("Your turn. Move: Up, Down, Left, Right or Stay.").lowerCase();
  move(hero,direction);
  if (guard.position === hero.position) {
    gameOver();
  } 
  if (friend.position === hero.position) {
      if (!friend.free) {
        friend.free = true;
        alert("Sorry Mario, but your princess is in another castle! J/K! Now make your way out toward the top.")
      } 
  } 
  goGuard(); 
};


var goGuard = function() {
  switch (guard.position) {
    case 'position2':
      guard.position = position6;
      break;
    case 'position6':
      guard.position = position9;
      break;
    case 'position9':
      guard.position = position10;
      break;
    case 'position10':
      guard.position = position11;
      break;
    case 'position11':
      guard.position = position7;
      break;
    case 'position7':
      guard.position = position4;
      break;
    case 'position4':
      guard.position = position3;
      break;
    case 'position3':
      guard.position = position2;
      break;
  }
  if (guard.position === hero.position) {
    gameOver();
  } else {
    go(); 
  }
};
  

var move = function(object,direction) {
  switch (direction) {
    case 'up':
      switch (object.position) {
        case 'position3':
          object.position = position1;
          break;
        case 'position6':
          object.position = position2;
          break;
        case 'position7':
          object.position = position4;
          break;
        case 'position9':
          object.position = position6;
          break;
        case 'position11':
          object.position = position7;
          break;
        case 'position12':
          object.position = position10;
          break;
        default:
          alert("You cannot move up here.");
          go();
      }
    case 'down':
      switch (object.position) {
        case 'position2':
          object.position = position6;
          break;
        case 'position4':
          object.position = position7;
          break;
        case 'position6':
          object.position = position9;
          break;
        case 'position7':
          object.position = position11;
          break;
        case 'position10':
          object.position = position12;
          break;
        default:
          alert("You cannot move down here.");
          go();
      }
    case 'right':
      switch (object.position) {
        case 'position2':
          object.position = position3;
          break;
        case 'position3':
          object.position = position4;
          break;
        case 'position5':
          object.position = position6;
          break;
        case 'position7':
          object.position = position8;
          break;
        case 'position9':
          object.position = position10;
          break;
        case 'position10':
          object.position = position11;
          break;
        default:
          alert("You cannot move right here.");
          go();
      }
    case 'left':
      switch (object.position) {
        case 'position3':
          object.position = position2;
          break;
        case 'position4':
          object.position = position3;
          break;
        case 'position6':
          object.position = position5;
          break;
        case 'position8':
          object.position = position7;
          break;
        case 'position10':
          object.position = position9;
          break;
        case 'position11':
          object.position = position10;
          break;
        default:
          alert("You cannot move left here.");
          go();
      }
    case: 'stay':
      goGuard();
      break;
    default:
      alert("Um... Check your typing tiger.");
      go();
  }
  if (guard.position === hero.position) {
    gameOver();
  } else if (friend.free) {
    friend.position = hero.position;
    goGuard();
  } else {
    goGuard(); 
  }
};


var gameOver = function() {
  alert("Ouch! You are so busted. It's the zombie life for you.");
};


var youWin = function() {
  alert("Woot! Victory is yours! Relish in your awesomeness.")
};

