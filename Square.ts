export class Square{
    color : string;
    filled : boolean;
    side : number;
    constructor(color,filled,side = 1) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
    getArea(){
        return this.side*this.side;
    }
    getPerimeter(){
        return 4*this.side;
    }
}