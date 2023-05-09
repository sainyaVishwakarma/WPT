function doMaths(choice){
    function doSquare(n){
     return n*n
    }
    function doPower(a,b){
        let p=Math.pow(a,b)
        return p
    }
    if(choice==1){
    return doSquare
    }else{
    return doPower
    }
}
let c1=doMaths(1)
console.log(c1(4))

let c2=doMaths(2)
console.log(c2(2,5))