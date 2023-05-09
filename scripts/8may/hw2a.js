class Product{
    // constructor(pName,pCost,pDesc){
    //     this.productName=pName
    //     this.productCost=pCost
    //     this.productDesc=pDesc
    // }
    constructor(){
        this.productName="java"
        this.productCost=200
        this.productDesc="java reference book"
    }
    showProdDetails() {
        console.log("Product Name::",this.productName,"Product Cost::",this.productCost,"Product Desc::",this.productDesc)
    }
}
//let obj=new Product("react","100","react complete course")
let obj=new Product()
obj.showProdDetails()