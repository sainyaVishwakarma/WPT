class Mydate{
    constructor(){
        this._month=1
    }
    get month(){

      
        return this._month
    }

    

  
    set month(m){
        if(m>=1 && m<=12){
            this._month=m
        }
    }


   
}
let d=new Mydate()
d.month=11
console.log("month is:",d.month)
