// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((sum, val) => {return sum + val}, 0);
    }
}

class Triangle extends Polygon {
    get isValid(){
        const firstCheck = (this.sides[0] + this.sides[1]) > this.sides[2];
        const secondCheck = (this.sides[0] + this.sides[2]) > this.sides[1];
        const thirdCheck = (this.sides[1] + this.sides[2]) > this.sides[0];
        return firstCheck && secondCheck && thirdCheck;
    }
}

class Square extends Polygon {
    get isValid(){
        if(this.countSides === 4){
            return this.sides.every(side => side === this.sides[0]);
        }
        return false;
    }

    get area(){
        return this.sides[0]**2;
    }
}