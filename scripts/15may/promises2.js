let p=new Promise((resolve,reject)=>{
    reject("something went wrong")
})

console.log("the promise",p)
p.catch((reject)=>{console.log(reject)})