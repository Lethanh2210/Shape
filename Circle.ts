import {Resizeable} from "./Resizeable";
import {Shape} from "./Shape";

export class Circle extends Shape implements Resizeable{

    radius : number;

    constructor(color, filled, radius: number) {
        super(color, filled);
        this.radius = radius;
    }

    getArea(){
        return Math.PI*this.radius*this.radius;
    }
    getPerimeter(){
        return 2*this.radius*Math.PI;
    }

    resize(a): void {
        this.radius = this.radius * a;
    }
}