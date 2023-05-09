function message1(){
    return "Helloo.."
}
function greet(msg){
   let guests=["sainya","arjun","roashani","tarun","saket"]
   for(let i=0;i<guests.length;i++){
       console.log(msg(),guests[i])
   }
}
   greet(message1)
   greet(function(){
       return "HowD"
   })
   let j=(function(){
       return "konnichiva"
   })
   greet(j)
   greet(()=>"hi")
