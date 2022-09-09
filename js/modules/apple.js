export class Apple{
    constructor(STAGE){
        this.x = Math.floor(Math.random() * STAGE);
        this.y = Math.floor(Math.random() * STAGE);
    }

    draw(ctx, GRID){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x*GRID, this.y*GRID, GRID-2, GRID-2);
    }
}