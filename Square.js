"use strict";
exports.__esModule = true;
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(color, filled, side) {
        if (side === void 0) { side = 1; }
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
    Square.prototype.getArea = function () {
        return this.side * this.side;
    };
    Square.prototype.getPerimeter = function () {
        return 4 * this.side;
    };
    return Square;
}());
exports.Square = Square;
