"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Shape_1 = require("./Shape");
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        var _this = _super.call(this, color, filled) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.getArea = function () {
        return this.side * this.side;
    };
    Square.prototype.getPerimeter = function () {
        return 4 * this.side;
    };
    Square.prototype.resize = function (a) {
        this.side = this.side * a;
    };
    Square.prototype.howToColor = function () {
        console.log("Color all four sides");
    };
    return Square;
}(Shape_1.Shape));
exports.Square = Square;
