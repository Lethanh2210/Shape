export class Circle{
    color : string;
    filled : boolean;
    radius : number;
    constructor(color,filled,radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }
    getArea(){
        return Math.PI*this.radius*this.radius;
    }
    getPerimeter(){
        return 2*this.radius*Math.PI;
    }
}