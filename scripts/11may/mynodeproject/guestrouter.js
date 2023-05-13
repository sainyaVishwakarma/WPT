import express,{Router} from 'express'
let guestrouter=Router()

export default guestrouter
let hostname="sainya"
let garr=["arjun","saket","aaa"]
guestrouter.get("/",(req,res)=>{
    res.send(`this is a server site of ${hostname}'s guest`)
})

guestrouter.get("/guestcount",(req,res)=>{
    let count=garr.length
    res.send(count)
})

guestrouter.get("/all",(req,res)=>{
    let guestlist=garr.map((guest,index)=>{return index+ ":" +guest})
         res.send(guestlist.join("\n"))
   
})

guestrouter.post("/addguest",(req,res)=>{
    garr.push(req.query.guestname)
    res.send("added succesfully")
})

guestrouter.put("/changeguestname/:index/:changedname",(req,res)=>{
    let index=req.params.index
    let changedName=req.params.changedname
  if(index >= 0 && index < garr.length){
      garr[index]=changedName;
      res.send(`"${index}" :"${changedName}"`)
  }
})

guestrouter.delete("/removeguest/:index",(req,res)=>{
    let index=req.params.index
    if(index >= 0 && index < garr.length){
        garr.splice(index,1)
        res.send(`Guests at index ${index} removed successfully`)
    }
})
