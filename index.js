class Polygon {
  constructor(sides) {
    this.sides = sides
    // this.side_count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a,b) => a+b, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    // if (this.countSides() === 3) {
      if (this.sides[0] + this.sides[1] <= this.sides[2] || this.sides[0] + this.sides[2] <= this.sides[1] || this.sides[1] + this.sides[2] <= this.sides[0]){
        return false
      } else {
        return true
      }
    // }
  }
}

class Square extends Polygon {
  get isValid() {
    let s1 = this.sides[0]
    let s2 = this.sides[1]
    let s3 = this.sides[2]
    let s4 = this.sides[3]

    if(s1 + s2 === s3 + s4 && s2 + s3 === s1 + s4) {
      return true
    } else {
      return false
    }
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}