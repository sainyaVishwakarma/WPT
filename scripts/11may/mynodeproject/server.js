import express from 'express'
let app=express()

app.get('/',(request,response)=>{
    return response.send('Hi from sainya!!')
})

app.listen(3000,()=>{
    console.log("app is running on port 3000..")
}
)