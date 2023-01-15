// Bird Physics
var GRAVITY = 1.5;
var JUMP = 16;
var DRAG = .9;

// Pipe Physics
var SPEED = 4;

// Object Sizes
var BIRD_DIAMETER = 32;
var PIPE_WIDTH = 64;
var BUFFER = 16;
var MIN_EMPTY = BIRD_DIAMETER + 2 * BUFFER;
var MAX_EMPTY = 150;
var PIPE_SPACING = 300;
var MIN_BOTTOM = 100;

// Number of Pipes
var PIPES = 4;

// Frame Rate
var FRAME_RATE = 30;

// Game States
const States = {
    Alive: "alive",
    Dead: "dead",
    Pause: "pause",
    Start: "start"
}