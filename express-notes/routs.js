const express=require('express')
const app=express()

const PORT=3000

const data={
    id:1,
    name:"india"
}

app.get('/',(req,res)=>{
    res.end('Welcome to homepage')
})
app.get('/about',(req,res)=>{
    res.send('Welcome to about page')
})
app.get('/data',(req,res)=>{
    // res.send(JSON.stringify(data))
    res.json(data)
})
// app.get('/contact',(req,res)=>{
//     res.sendFile("./static/index.html")
// })

app.listen(PORT,()=>`Server started at localhost:${PORT}`)