import { onSnake, expandSnake } from "./snake2.js";
import {randomGridposition} from "./grid.js";

let food=getRandomFood();
const expansionRate=1;

export function update(){    
    if(onSnake(food)){
        expandSnake(expansionRate);
        food=getRandomFood();
    }
}

export function draw(gameBoard){

        const foodElement=document.createElement("div");
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement);
}

function getRandomFood(){
    let newFood;
    while(newFood == null || onSnake(newFood)){
        newFood=randomGridposition();
    }
    return newFood;
}