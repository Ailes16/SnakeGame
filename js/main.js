/* import */
import {Snake} from './modules/snake.js';

let mySnake;
let game;
let status = false;
const timer = 10000/15;

/* ゲーム画面の作成 */
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

/* 設定 */
const GRID = 20;
const STAGE = canvas.width / GRID;

/* 初期化 */
const init = () => {
    status = true;
    game = setInterval(loop,timer);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mySnake = new Snake(5,8);
    console.log(mySnake.x,mySnake.y,mySnake.direction);
}

/* 繰り返し処理 */
const loop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mySnake.move();
    draw();
    mySnake.judge(STAGE);
    if(!mySnake.status){
        end();
    }
    console.log(mySnake.x,mySnake.y,mySnake.direction);
}

/* ゲームエンド */
const end = () => {
    status = false;
    clearInterval(game);
}

/* 描画 */
const draw = () => {
    ctx.fillStyle = 'green';
    ctx.fillRect(mySnake.x*GRID, mySnake.y*GRID, GRID-2, GRID-2);
    for(let i = 0; i < mySnake.bx.length; i++){
        ctx.fillRect(mySnake.bx[i]*GRID, mySnake.by[i]*GRID, GRID-2, GRID-2);
    }
}

/* メイン処理 */
init();

/* キー操作 */
document.addEventListener('keydown', e => {
    if(status){
        switch(e.key){
            case 'ArrowLeft':
                if(mySnake.direction !== 'R'){
                    mySnake.direction = 'L';
                }
                break;
            case 'ArrowRight':
                if(mySnake.direction !== 'L'){
                    mySnake.direction = 'R';
                }
                break;
            case 'ArrowUp':
                if(mySnake.direction !== 'D'){
                    mySnake.direction = 'U';
                }
                break;
            case 'ArrowDown':
                if(mySnake.direction !== 'U'){
                    mySnake.direction = 'D';
                }
                break;
        }
    }
})