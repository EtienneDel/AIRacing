const POPULATION = 1
let players = []


function setup(){
    let canvasG = createCanvas(1500,400);
    canvasG.parent('game');
    for(let i = 0; i < POPULATION; i++){
        this.players[i] = new Player()
    }
}

function draw() {
    this.players[0].show()
}