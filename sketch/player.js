class Player {

    size = 100

    constructor(brain) {

        this.score = 0;
        this.fitness = 0;

        if(brain){
            this.brain = brain.copy();
            this.brain.mutate(mutationRate);
        } else {
            this.brain = new NeuralNetwork(6, 12, 3);
        }
    }

    update() {
        this.x = this.pos[this.movement];
        this.score ++;
    }

    show() {
        strokeWeight(1);
        fill(46,148,181, 100);
        rect(0, 300, this.size, this.size);
    }

    think(enemies) {

        let inputs = [];
        inputs[0] = this.x / width;
        inputs[1] = this.y / height;
        inputs[2] = enemies[0].x / width;
        inputs[3] = enemies[0].y / height;
        inputs[4] = enemies[1].x / width;
        inputs[5] = enemies[1].y / height;

        let output = this.brain.predict(inputs);

        if(output[0] > output[1] && output[0] > output[2]) {
            this.movement = 0;
        } else if(output[1] > output[0] && output[1] > output[2]){
            this.movement = 1;
        } else if(output[2] > output[1] && output[2] > output[0]) {
            this.movement = 2;
        }
    }

    mutation() {
        this.brain.mutate(mutationRate);
    }

}