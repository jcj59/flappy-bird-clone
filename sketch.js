// Declare Global Variables
var game;
let high_score = 0;
var pipeSprite;
var birdSprite;
var background_image;
let background_x = 0;

/** Creates canvas and instantiates initial game object. */
function setup() {
  createCanvas(800, 600);
  game = new Game();
  pipeSprite = loadImage('graphics/pipe.png');
  birdSprite = loadImage('graphics/bird.png');
  background_image = loadImage('graphics/background.png');
}

/** Updates game object and high score and draws game object to screen. */
function draw() {
  background(0);
  showBackground();
  if (high_score < game.score) {
    high_score = game.score;
  }
  if (game.state == States.Alive) {
    game.update();
    updateBackground();
  }
  if (game.state == States.Alive || game.state == States.Dead) {
    game.show();
    gameText();
  } else if (game.state == States.Start) {
    startText();
  } else if (game.state == States.Pause) {
    pauseText();
  }
  if (game.state == States.Dead) {
    deadText();
  }
}

/** Performs actions depending on state of game and which key is pressed. */
function keyPressed() {
  if (game.state == States.Alive && key == ' ') {
    game.bird.up();
    console.log("SPACE");
  }

  if (game.state == States.Start && key == ' ') {
    game.state = States.Alive;
    game.bird.up();
    console.log("SPACE");
  } else if (game.state == States.Dead && key == ' ') {
    game = new Game();
    game.state = States.Alive;
    game.bird.up();
    console.log("SPACE");
  } else if (game.state == States.Alive && keyCode == ESCAPE) {
    game.state = States.Pause;
    console.log("ESCAPE");
    console.log(game.state);
  } else if (game.state == States.Pause && keyCode == ESCAPE) {
    game.state = States.Alive;
    console.log("ESCAPE");
    console.log(game.state);
  }
}

/** Writes text for gamestate start. */
function startText() {
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text("Welcome to Jack Jansons's clone of Flappy Bird!", width / 2, height / 2 - BUFFER);
  text("Press 'SPACE' to start", width / 2, height / 2 + BUFFER);
}

/** Writes text for gamestate alive */
function gameText() {
  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("High Score: " + high_score, BUFFER, BUFFER * 2);
  text("Score: " + game.score, BUFFER, BUFFER * 4);
}

/** Writes text for gamestate dead */
function deadText() {
  fill(0);
  textSize(48);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  textSize(16);
  text("Press 'SPACE' to continue", width / 2, height / 2 + 2 * BUFFER);
}

/** Writes text for gamestate start. */
function pauseText() {
  fill(0);
  textSize(96);
  textAlign(CENTER);
  text("GAME PAUSED", width / 2, 6 * BUFFER);
  textSize(24);
  text("High Score: " + high_score, width / 2, height / 2 - 3 * BUFFER);
  text("Score: " + game.score, width / 2, height / 2 - BUFFER);
  text("Press 'ESC' to continue", width / 2, height / 2 + BUFFER);
}

/** Draws the background. */
function showBackground() {
  image(background_image, background_x, 0, background_image.width, height);

  if (background_x <= -background_image.width + width) {
    image(background_image, background_x + background_image.width, 0, background_image.width, height);
    if (background_x <= -background_image.width) {
      background_x = 0;
    }
  }
}

/** Moves the background. */
function updateBackground() {
  background_x -= SPEED;
}




