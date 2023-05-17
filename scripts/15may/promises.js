let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{console.log("the asynchronous complete")
    resolve("success")
},6000)
})

console.log("the promise",p)
p.then((resolve)=>{console.log(resolve,"Hurray!")})