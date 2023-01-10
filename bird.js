class Bird {
    /** Constructs new Bird object */
    constructor() {
        this.y = height / 2;
        this.x = 64;
        this.v = 0;
    }

    /** Changes bird velocity. */
    up() {
        this.v -= JUMP;
    }

    /** Draws bird to screen. */
    show() {
        fill(255);
        // ellipse(this.x, this.y, BIRD_DIAMETER, BIRD_DIAMETER);
        image(birdSprite, this.x - BIRD_DIAMETER / 2, this.y - BIRD_DIAMETER / 2, BIRD_DIAMETER, BIRD_DIAMETER);
    }

    /** Updates bird's position and velocity */
    update() {
        this.v += GRAVITY;
        this.v *= DRAG;
        this.y += this.v;
        if (this.y > height) {
            this.y = height;
        }
        else if (this.y < 0) {
            this.y = 0;
            this.v = 0;
        }
    }
}