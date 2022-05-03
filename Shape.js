"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.shapes = [];
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.addShape = function () {
        var _a;
        var shape = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            shape[_i] = arguments[_i];
        }
        (_a = this.shapes).push.apply(_a, shape);
    };
    return Shape;
}());
exports.Shape = Shape;
