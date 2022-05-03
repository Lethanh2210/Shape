export class Shape{
    shapes : any[] = [];
    color : string;
    filled : boolean;
    constructor(color?,filled?) {
        this.color = color;
        this.filled = filled;
    }
    addShape(...shape): void{
        this.shapes.push(...shape);
    }


}