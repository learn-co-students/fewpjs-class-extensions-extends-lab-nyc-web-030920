class Polygon {
    constructor(sides){ //sides is an array of integers
        this.sides = sides
    };

    get countSides(){
        return this.sides.length
    };

    get perimeter(){
        return this.sides.reduce((accumulator, value) => accumulator + value)
    };
};

class Triangle extends Polygon {
    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
            return true
        } else {
            return false
        }
    };
};

class Square extends Polygon {
    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        if(side1 === side2 && side1 === side3 && side1 === side4){
            return true
        } else {
            return false
        }
    };

    get area(){
        return this.sides[0] * this.sides[0]
    };
};