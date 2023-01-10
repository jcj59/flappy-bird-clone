class Pipe {
    /** Constructs a new Pipe object. */
    constructor(x) {
        this.empty = random(MIN_EMPTY, MAX_EMPTY)
        this.x = x;
        this.top_height = random(height / BUFFER, height - this.empty - (height / BUFFER) - MIN_BOTTOM)
        this.bottom_height = this.top_height + this.empty
        this.passed = false;
    }

    /** Moves pipe across the screen. */
    update() {
        this.x -= SPEED;
    }

    /** Draws pipe to screen. */
    show() {
        fill(255);
        // rect(this.x, 0, PIPE_WIDTH, this.top_height);
        // rect(this.x, this.bottom_height, PIPE_WIDTH, height);
        this.drawTop();
        this.drawBottom();
    }

    /** Draws top pipe. */
    drawTop() {
        image(pipeSprite, this.x, 0, PIPE_WIDTH, this.top_height);
        fill(0);
        rect(this.x, this.top_height - 2, PIPE_WIDTH, 2);
    }

    /** Draws bottom pipe. */
    drawBottom() {
        image(pipeSprite, this.x, this.bottom_height, PIPE_WIDTH, height - this.bottom_height);
        fill(0);
        rect(this.x, this.bottom_height, PIPE_WIDTH, 2);
    }

}