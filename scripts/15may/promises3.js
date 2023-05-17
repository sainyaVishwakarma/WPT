const { response } = require("express")

function f1()
{
    console.log("hi")
}

function f2()
{
    console.log("hello")
}

function main()
{
    console.log("1")
    setTimeout(f1,0)
    setTimeout(f2,100)
    let p=new Promise((resolve,reject)=>{
        let num =Math.random()*100
        if(num<100){

            resolve("succeed"+num)
        }
        else{
            reject("rejected"+num)
        }
    })


console.log("2")
p.then((resolve)=>{console.log(resolve)})
p.catch((reject)=>{console.log(reject)})
}
