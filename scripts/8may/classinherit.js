class Book{
    
    constructor(){
        this.bookname="java"
        this.cost=100
        this.branch="branch"
    }

}
class TechnicalBook extends Book{
    constructor(nm,c,branch){
        super(nm,c,branch)
           // this.branch=branch
    }
    showDetails(){
        console.log(this.bookname,this.cost,this.branch)
    }

}
let obj=new TechnicalBook("nm","300","br")
obj.showDetails()