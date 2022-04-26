export class Rectangle{
    color : string;
    filled : boolean;
    width : number;
    length : number;
    constructor(color,filled,width,length) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea(){
        return this.width*this.length;
    }
    getPerimeter(){
        return 2*(this.width+this.length);
    }
}