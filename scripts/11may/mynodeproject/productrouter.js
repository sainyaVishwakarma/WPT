import express,{Router} from 'express'
let productrouter=Router()

export default productrouter
let products=[{
    "productId":1,
    "productName":"AAA",
    "costPerUnit":100,
    "units":2
}];

productrouter.use(express.json())
productrouter.post("/add",(req,res)=>{
    let newProduct=req.body
    products.push(newProduct)
    res.json(products)
    // res.send("added successfully")
})

productrouter.get("/getinfo",(req,res)=>{
    let pid=req.query.productId
    let prod= products.find(p =>p.productId == pid)
    if(prod != undefined){
        res.json(prod )
    }else{
        res.json({ message: 'Product not found' })
    }

    
    // res.send("added successfully")
})

productrouter.get("/all",(req,res)=>{
    res.json(products)
})

productrouter.put("/changecost/:pid/:cost",(req,res)=>{
    let prodid=req.params.pid
    let newcost=req.params.cost
    let prod= products.find(p =>p.productId == prodid)
    if(prod != undefined){
        prod.costPerUnit=newcost
        res.json(prod)
    }else{
        res.json({ message: 'Product not found' })
    }
    // res.send("added successfully")
})

productrouter.delete("/remove",(req,res)=>{
    let prodid=req.query.productId
    
    let prod= products.findIndex(p =>p.productId == prodid)
    if(prod != -1){
        products.splice(prod,1)
        res.json(products)
    }else{
        res.json({ message: 'Product not found' })
    }
    // res.send("added successfully")
})