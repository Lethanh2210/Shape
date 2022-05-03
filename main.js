"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = require("./Square");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var shape = new Shape_1.Shape();
var square = new Square_1.Square("yellow", true, 5);
var circle = new Circle_1.Circle('blue', true, 1);
var rect = new Rectangle_1.Rectangle('red', false, 1, 2);
shape.addShape(square, circle, rect);
console.log(shape.shapes);
function randomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}
for (var i = 0; i < shape.shapes.length; i++) {
    shape.shapes[i].resize(randomNumber());
}
console.log(shape.shapes);
