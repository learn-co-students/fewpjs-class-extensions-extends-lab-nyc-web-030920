class Polygon {
    constructor(sides){
        this.sides = sides
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        let total = 0
        this.sides.forEach(element => {
            total+=element
        });
    return total
    }
}
class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3){
            let side1 = this.sides[0]
            let side2 = this.sides[1]
            let side3 = this.sides[2]
            if (side1 + side2 > side3 && side1+side3 > side2 && side2+side3 >side1){
                return true
            } else
                return false
        }else{
            return false
        }
    }
}

class Square extends Polygon {
    get area(){
        return this.sides[0]*this.sides[0]
    }
    get isValid(){
        let side1 = this.sides[0]
        let side2 = this.sides[1]
        let side3 = this.sides[2]
        let side4 = this.sides[3]
        if(side1 === side2 && side1 === side3 && side1 === side4){
            return true
        }else{
            return false
        }
    }
}