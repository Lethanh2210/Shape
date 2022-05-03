import {Resizeable} from "./Resizeable";
import {Shape} from "./Shape";

export class Rectangle extends Shape implements Resizeable{
    width : number;
    length : number;

    constructor(color, filled, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getArea(){
        return this.width*this.length;
    }
    getPerimeter(){
        return 2*(this.width+this.length);
    }

    resize(a): void {
        this.length = this.length * a;
        this.width = this.width * a;
    }
}