import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersect} from  './snake2.js';
import {update as updateFood, draw as drawFood }from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime=0;
let gameOver=false;
const gameBoard=document.getElementById("game-board");
 
function main(currentTime){

    if(gameOver){
        alert("You lost. Press OK to restart the game.");
        window.location.reload();
        return;
    }
    
    window.requestAnimationFrame(main)
    const secondSinceLastRenderTime=(currentTime-lastRenderTime)/1000;
    if(secondSinceLastRenderTime < (1/snakeSpeed)){
        return;
    }
    
    lastRenderTime=currentTime;

    update();
    draw();
}
window.requestAnimationFrame(main) 

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML="";             
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver=outsideGrid(getSnakeHead()) || snakeIntersect()
}


