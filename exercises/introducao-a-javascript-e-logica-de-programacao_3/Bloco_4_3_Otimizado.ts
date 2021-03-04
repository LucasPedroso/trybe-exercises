export {}
const n: number = 11;

let repeatChar = function (char: string, n: number): string {
  let output: string = char;
  return output.repeat(n);
}

var concatLine = (...strings: string[]): string => {
  let output: string = '';

  return output.concat(...strings);
}

const a = 'Hello';
const b = 'Mundão';
console.log(concatLine(a, b));

enum TypeTriangle {
  Square,
  Rectangled_Triangle,
  Rectangled_Triangle_Border,
  Rectangled_Triangle_Right_Top,
  Rectangled_Triangle_Left_Top,
}

class Triangle {
  sizeTriangle:number;
  styleTriangule: TypeTriangle;
  positionCount: number;
  spaceBlank: number = 0;
  indexXablau: number;

  constructor(sizeTriangle: number) {
    this.sizeTriangle = sizeTriangle;

    if (sizeTriangle % 2 === 1) {
      this.positionCount = 1;
    } else {
      this.positionCount = 2;
    }
  }

  makeTriangle(styleTriangule: TypeTriangle){
    this.styleTriangule = styleTriangule;
    this.indexXablau = this.sizeTriangle;
    for (let index = 1; index <= this.indexXablau; index += 1) {  

      if (this.styleTriangule === TypeTriangle.Rectangled_Triangle) {
        this.indexXablau = Math.ceil(this.sizeTriangle / 2);
        this.spaceBlank = (this.sizeTriangle - this.positionCount) / 2;
        this.makeLine(index, this.sizeTriangle, this.positionCount, this.spaceBlank, ' ' , '*', ' ');
        this.positionCount += 2;

      } else if (this.styleTriangule === TypeTriangle.Rectangled_Triangle_Border) {
        this.indexXablau = Math.ceil(this.sizeTriangle / 2);
        this.spaceBlank = (this.sizeTriangle - this.positionCount) / 2;
        this.makeLine(index, this.sizeTriangle, this.positionCount, this.spaceBlank, ' ' , '*', ' ', '*', ' ');
        this.positionCount += 2;

      } else if (this.styleTriangule === TypeTriangle.Rectangled_Triangle_Left_Top) {
        this.makeLine(index, this.sizeTriangle, this.positionCount, this.spaceBlank, '*' , ' ');
        this.positionCount += 1;

      } else if (this.styleTriangule === TypeTriangle.Rectangled_Triangle_Right_Top) {
        this.makeLine(index, this.sizeTriangle, this.positionCount, this.spaceBlank, ' ' , '*');
        this.positionCount += 1;
      }
    } 
  }

  makeLine(indexFor: number, sizeLine: number, positionCount: number, spaceBlank: number, ...char: string[]) {

    let output: string;
    if (indexFor === this.indexXablau) {
      output = '*'.repeat(this.sizeTriangle);
      return console.log(output);
      
    } 
    if (char.length > 1 && char[0] == ' ') {
      if (char.length === 3 || (char.length === 5 && indexFor === 1) ) {
        /* output = char[0].repeat(spaceBlank)
                            .concat(char[1].repeat(sizeLine - spaceBlank * 2))
                            .concat(char[0].repeat(spaceBlank)); */
        //2 formas de fazer a mesma coisa, avaliar qual é melhor
        output = repeatChar(char[0], spaceBlank)
        output += repeatChar(char[1], sizeLine - spaceBlank * 2)
        output += repeatChar(char[0], spaceBlank)
      } else if (char.length === 5){
          output = char[0].repeat(spaceBlank)
                      .concat(char[1])
                      .concat(char[0].repeat((sizeLine - (spaceBlank * 2)) - 2))
                      .concat(char[1])
                      .concat(char[0].repeat(spaceBlank));
      } else {
        output = char[0].repeat(sizeLine - indexFor).concat(char[1].repeat(indexFor))
      }
    } else if (char.length > 1 && char[0] == '*') {
      output = char[0].repeat(indexFor).concat(char[1].repeat(sizeLine - indexFor));
    }
    console.log(output);
  }
}

new Triangle(n).makeTriangle(TypeTriangle.Rectangled_Triangle_Right_Top);
new Triangle(n).makeTriangle(TypeTriangle.Rectangled_Triangle_Left_Top);
new Triangle(n).makeTriangle(TypeTriangle.Rectangled_Triangle);
new Triangle(n).makeTriangle(TypeTriangle.Rectangled_Triangle_Border);
new Triangle(n).makeTriangle(TypeTriangle.Square);
