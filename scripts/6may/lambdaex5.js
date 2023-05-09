let arr=["sainya","amisha","shweta","tanya"]
let str=arr.map((e)=>(e.substr(0,1).toUpperCase()).concat(e.substr(1)))
console.log(str)