class Game {

    /** Constructs game object. */
    constructor() {
        this.bird = new Bird();
        this.pipes = [];
        this.bird_alive = true;
        this.state = States.Start;
        this.score = 0;
        for (var i = 0; i < PIPES; i++) {
            this.pipes.push(new Pipe(width + i * PIPE_SPACING))
        }
    }

    /** Updates state of the game.  Moves pipes, bird, and detects collisions. */
    update() {
        this.bird.update();
        if (this.state === States.Alive) {
            if (this.detect_collision() || this.bottom_collision()) {
                this.state = States.Dead;
            }
        }

        if (this.pipes[0].x < -PIPE_WIDTH) {
            this.pipes.shift();
            this.pipes.push(new Pipe(this.pipes[this.pipes.length - 1].x + PIPE_SPACING))
        }

        for (let p of this.pipes) {
            p.update();
            if (p.passed == false && p.x + PIPE_WIDTH < this.bird.x) {
                p.passed = true;
                this.score += 1;
            }
        }
    }

    /** Draws bird and each pipe in pipes */
    show() {
        this.bird.show();
        for (let p of this.pipes) {
            p.show();
        }
    }

    /** Returns true if bird collides with a pipe in pipes. */
    detect_collision() {
        for (let p of this.pipes) {
            if (this.collision(p.x, 0, p.x + PIPE_WIDTH, p.top_height)
                || this.collision(p.x, p.bottom_height, p.x + PIPE_WIDTH, height)) {
                return true
            }
        }
        return false
    }

    /** Returns true if bird collides with the given rectangle. */
    collision(x1, y1, x2, y2) {
        var xn = max(x1, min(this.bird.x, x2));
        var yn = max(y1, min(this.bird.y, y2));

        var dx = xn - this.bird.x;
        var dy = yn - this.bird.y;
        return (dx * dx + dy * dy) <= (BIRD_DIAMETER / 2) * (BIRD_DIAMETER / 2);
    }

    /** Returns true if the bird collides with the bottom of the game. */
    bottom_collision() {
        if (this.bird.y > height - BIRD_DIAMETER / 2) {
            return true;
        } else { return false }
    }
}


