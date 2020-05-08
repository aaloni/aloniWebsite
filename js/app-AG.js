// Enemies our player must avoid
var Enemy = function(x,y,s) {
  // Enemy locations
  this.x=x;
  this.y=y;
  //Enemy Speed
  this.s=s;
  //Enemy image
  this.sprite = 'img/enemy-bug.png';
};
Enemy.prototype.update = function(dt) {
  // Moniter and update enemies location
  this.x += this.s * dt;
  // Enemy appear after half a second
  if (this.x > 600) {
    this.x = -50;
    // Random speed for the Enemies
    this.s = 100 + Math.floor(Math.random() * 222);
  };
  // Detect collisions
  if (player.x < this.x + 70 &&
    player.x + 70 > this.x &&
    player.y < this.y + 40 &&
    40 + player.y > this.y) {
      // Start at the begining
      player.x = 405;
      player.y = 405;
    };
  };
  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };
  // Draw player
  var Player = function (x, y) {
    // Player location
    this.x = x;
    this.y = y;
    //Player character
    this.player = 'img/char-boy.png';
  };
  // Player update
  Player.prototype.update = function (dt) {

  };
  Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
  };
  // Player arrow movment
  Player.prototype.handleInput = function (keyPress) {
    if (keyPress == 'left' && this.x > 0) {
      this.x -= 102;
    };
    if (keyPress == 'right' && this.x < 405) {
      this.x += 102;
    };
    if (keyPress == 'up' && this.y > 0) {
      this.y -= 83;
    };
    if (keyPress == 'down' && this.y < 405) {
      this.y += 83;
    };
    // If reach to the top
    if (this.y < 0) {
      // Alert Msg
      window.alert("You Won!!");
      //Wait for half a second
      setTimeout(() => {
        //Reset location
        this.x = 405;
        this.y = 405;

      }, 400);
    };
  };
  var allEnemies = [];
  var enemyLocation = [63, 147, 230];
  enemyLocation.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 200);
    allEnemies.push(enemy);
  });
  // Player location
  var player = new Player(405, 405);
  document.addEventListener('keyup', function(e) {
    var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
  });
