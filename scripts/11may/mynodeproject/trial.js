class trial{
    static data = 0
    data2=15

    show()
    {
        console.log(trial.data,this.data2)
    }
    static show2(){
        console.log(this.data2,trial.data)
    }
    
}

let obj=new trial()

obj.show()
trial.show2()

let obj2=new trial()
obj2.data2=100
obj2.show()
let obj3=new trial()
obj3.data3=200
obj3.show()
