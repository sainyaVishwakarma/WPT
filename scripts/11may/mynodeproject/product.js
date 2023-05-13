 
export default class Product{
    constructor(pn,pc,brand){
        this.productname=pn
        this.productcost=pc
        this.productbrand=brand
    }

    show(){
        console.log("product info:",this.productname,this.productcost,this.productbrand)
    }
}