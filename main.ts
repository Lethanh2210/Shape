import {Square} from "./Square";
import {Circle} from "./Circle";
import {Resizeable} from "./Resizeable";
import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";
let shape = new Shape();
let square = new Square("yellow", true, 5);
let circle = new Circle('blue',true,1);
let rect = new Rectangle('red',false,1,2);
shape.addShape(square,circle,rect);
console.log(shape.shapes);
function randomNumber(){
    return Math.floor(Math.random()*100 + 1);
}
for (let i = 0; i < shape.shapes.length; i++) {
    shape.shapes[i].resize(randomNumber());
}
console.log(shape.shapes);