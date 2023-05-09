function add(...nums){
    let sum=0
    for(n of nums){
        sum=sum+n
    }
    console.log("sum is:",sum)
}
add(2,3,4)
add()
add(3)