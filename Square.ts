import {Resizeable} from "./Resizeable";
import {Shape} from "./Shape";
import {Colorable} from "./Colorable";

export class Square extends Shape implements Resizeable, Colorable{
    side : number;

    constructor(color, filled, side: number) {
        super(color, filled);
        this.side = side;
    }

    getArea(){
        return this.side*this.side;
    }
    getPerimeter(){
        return 4*this.side;
    }
    resize(a): void {
        this.side = this.side * a;
    }

    howToColor() {
        console.log("Color all four sides");
    }
}