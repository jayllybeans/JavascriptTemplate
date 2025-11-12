import {Toolbox} from "./toolbox.js";

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

let arr = ["a", "b", "c"];
let toolbox = new Toolbox();

console.log(toolbox.getRandomItem(arr));

console.log(toolbox.shuffleArray(arr));