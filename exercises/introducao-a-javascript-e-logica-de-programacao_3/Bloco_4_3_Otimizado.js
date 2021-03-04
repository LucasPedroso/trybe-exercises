"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var n = 11;
var repeatChar = function (char, n) {
    var output = char;
    return output.repeat(n);
};
var concatLine = function () {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    var output = '';
    return output.concat.apply(output, strings);
};
var a = 'Hello';
var b = 'Mundão';
console.log(concatLine(a, b));
var TypeTriangle;
(function (TypeTriangle) {
    TypeTriangle[TypeTriangle["Square"] = 0] = "Square";
    TypeTriangle[TypeTriangle["Rectangled_Triangle"] = 1] = "Rectangled_Triangle";
    TypeTriangle[TypeTriangle["Rectangled_Triangle_Border"] = 2] = "Rectangled_Triangle_Border";
    TypeTriangle[TypeTriangle["Rectangled_Triangle_Right_Top"] = 3] = "Rectangled_Triangle_Right_Top";
    TypeTriangle[TypeTriangle["Rectangled_Triangle_Left_Top"] = 4] = "Rectangled_Triangle_Left_Top";
})(TypeTriangle || (TypeTriangle = {}));
var Triangle = /** @class */ (function () {
    function Triangle(sizeTriangle) {
        this.spaceBlank = 0;
        this.sizeTriangle = sizeTriangle;
        if (sizeTriangle % 2 === 1) {
            this.positionCount = 1;
        }
        else {
            this.positionCount = 2;
        }
    }
    Triangle.prototype.makeTriangle = function (styleTriangule) {
        this.styleTriangule = styleTriangule;
        this.indexXablau = this.sizeTriangle;
        for (var index = 1; index <= this.indexXablau; index += 1) {
            if (this.styleTriangule === TypeTriangle.Rectangled_Triangle) {
                this.indexXablau = Math.ceil(this.sizeTriangle / 2);
                this.spaceBlank = (this.sizeTriangle - this.positionCount) / 2;
                this.makeLine(index, this.sizeTriangle, this.positionCount, this.spaceBlank, ' ', '*', ' ');
                this.positionCount += 2;
            }
            else if (this.styleTriangule === TypeTriangle.Rectangled_Triangle_Border) {
                this.indexXablau = Math.ceil(this.sizeTriangle / 2);
                this.spaceBlank = (this.sizeTriangle - this.positionCount) / 2;
                this.makeLine(index, this.sizeTriangle, this.positionCount, this.spaceBlank, ' ', '*', ' ', '*', ' ');
                this.positionCount += 2;
            }
            else if (this.styleTriangule === TypeTriangle.Rectangled_Triangle_Left_Top) {
                this.makeLine(index, this.sizeTriangle, this.positionCount, this.spaceBlank, '*', ' ');
                this.positionCount += 1;
            }
            else if (this.styleTriangule === TypeTriangle.Rectangled_Triangle_Right_Top) {
                this.makeLine(index, this.sizeTriangle, this.positionCount, this.spaceBlank, ' ', '*');
                this.positionCount += 1;
            }
        }
    };
    Triangle.prototype.makeLine = function (indexFor, sizeLine, positionCount, spaceBlank) {
        var char = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            char[_i - 4] = arguments[_i];
        }
        var output;
        if (indexFor === this.indexXablau) {
            output = '*'.repeat(this.sizeTriangle);
            return console.log(output);
        }
        if (char.length > 1 && char[0] == ' ') {
            if (char.length === 3 || (char.length === 5 && indexFor === 1)) {
                /* output = char[0].repeat(spaceBlank)
                                    .concat(char[1].repeat(sizeLine - spaceBlank * 2))
                                    .concat(char[0].repeat(spaceBlank)); */
                //2 formas de fazer a mesma coisa, avaliar qual é melhor
                output = repeatChar(char[0], spaceBlank);
                output += repeatChar(char[1], sizeLine - spaceBlank * 2);
                output += repeatChar(char[0], spaceBlank);
            }
            else if (char.length === 5) {
                output = char[0].repeat(spaceBlank)
                    .concat(char[1])
                    .concat(char[0].repeat((sizeLine - (spaceBlank * 2)) - 2))
                    .concat(char[1])
                    .concat(char[0].repeat(spaceBlank));
            }
            else {
                output = char[0].repeat(sizeLine - indexFor).concat(char[1].repeat(indexFor));
            }
        }
        else if (char.length > 1 && char[0] == '*') {
            output = char[0].repeat(indexFor).concat(char[1].repeat(sizeLine - indexFor));
        }
        console.log(output);
    };
    return Triangle;
}());
new Triangle(n).makeTriangle(TypeTriangle.Rectangled_Triangle_Right_Top);
new Triangle(n).makeTriangle(TypeTriangle.Rectangled_Triangle_Left_Top);
new Triangle(n).makeTriangle(TypeTriangle.Rectangled_Triangle);
new Triangle(n).makeTriangle(TypeTriangle.Rectangled_Triangle_Border);
new Triangle(n).makeTriangle(TypeTriangle.Square);
//# sourceMappingURL=Bloco_4_3_Otimizado.js.map