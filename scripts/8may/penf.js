class Pen{
    constructor(penColor,penCost){
        this.penColor=penColor
        this.penCost=penCost
    }
}

function pen(penColor,penCost){
    this.pColor=penColor
    this.pCost=penCost
}
let obj =new Pen("black","100")

console.log(obj.pColor,obj.pCost)


