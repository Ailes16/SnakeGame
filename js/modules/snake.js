export class Snake {
    constructor(x, y, direction = 'R'){

        this.x = x;
        this.y = y;
        this.bx = [];
        this.by = [];
        this.tail = 3;
        this.direction = direction;
        this.status = true;
    }

    move(){
        if(this.bx.length < this.tail){
            this.bx.push(this.x);
            this.by.push(this.y);
        }
        for(let i = this.bx.length - 1; i > 0; i--){
            this.bx[i] = this.bx[i - 1];
            this.by[i] = this.by[i - 1];
        }
        this.bx[0] = this.x;
        this.by[0] = this.y;

        switch(this.direction){
            case 'L':
                this.x -= 1;
                break;
            case 'R':
                this.x += 1;
                break;
            case 'U':
                this.y -= 1;
                break;
            case 'D':
                this.y += 1;
                break;
        }
    }

    judge(STAGE){
        if(this.x < 0 || this.x > STAGE-1 || this.y < 0 || this.y > STAGE-1){
            this.status = false;
        }
        for(let i = 0;i < this.bx.length; i++){
            if(this.x === this.bx[i] && this.y === this.by[i]){
                this.status = false;
            }
        }
    }

    draw(ctx, GRID){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x*GRID, this.y*GRID, GRID-2, GRID-2);
        for(let i = 0; i < this.bx.length; i++){
            ctx.fillRect(this.bx[i]*GRID, this.by[i]*GRID, GRID-2, GRID-2);
        }
    }
}