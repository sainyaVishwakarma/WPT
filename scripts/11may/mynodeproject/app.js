import express  from "express";
let app=express()
app.set('views','./VIEWS')
app.set('view engine','hbs')
app.use(express.json())
app.get("/ajax",(req,res)=>{
    res.render("testajaxjq")
})

app.get("/message",(req,res)=>{
    res.send({message:"this is simple ajax", sender:"sainya"})
})

app.post("/square",(req,res)=>{
    let z=req.body.n
    let data=z * z
    res.send({sqr:data})
})

app.listen(5000,()=>{
   console.log("server is running on port 5000..")
})