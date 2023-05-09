function product(pName,pCost,pDesc){
    this.productName=pName
    this.productCost=pCost
    this.productDesc=pDesc

    this.showProdDetails=function(){
        console.log("Product Name::",obj.productName,"Product Cost::",obj.productCost,"Product Desc::",obj.productDesc)
    }
}
let obj=new product("java",500,"java desc")
obj.showProdDetails()
