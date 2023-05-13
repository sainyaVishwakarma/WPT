import express from 'express'
let app=express()
import guestrouter from './guestrouter.js'
app.use("/guest",guestrouter)
app.use(express.json())
import productrouter from './productrouter.js'
app.use("/product",productrouter)


app.listen(3000,()=>{
    console.log("App is listen on port no 3000...")
})

