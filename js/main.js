/* import */
import {Snake} from './modules/snake.js';
import {Apple} from './modules/apple.js';

let mySnake;
let apple;
let game;
let status = false;
const timer = 1000/15;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

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
    apple = new Apple(STAGE);
    draw();
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

    if(mySnake.x === apple.x && mySnake.y === apple.y){
        mySnake.tail++;
        apple = new Apple(STAGE);
    }

    // console.log(mySnake.x,mySnake.y,mySnake.direction);
}

/* ゲームエンド */
const end = () => {
    status = false;
    clearInterval(game);
}

/* 描画 */
const draw = () => {
    // アップル
    apple.draw(ctx, GRID);
    // スネーク
    mySnake.draw(ctx, GRID);
}

/* メイン処理 */

/* キー操作 */
document.addEventListener('keydown', e => {

    if(e.key == ' '){
        if(!status){
            init();
        }else{
            end();
        }
    }

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

/* ボタン操作 */
startButton.addEventListener('click', () => {
    if(!status){
        init();
    }
})

stopButton.addEventListener('click', () => {
    if(status){
        end();
    }
})