const bodyParser = require("body-parser")
const express=require("express")
bodyparser=require("body-parser")

const app=express()
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.sendFile(__dirname+"/add.html")
})
app.post("/",function(req,res){
    const addvalu1=Number(req.body.advalue1)
    const addvalu2=Number(req.body.advalue2)
    const add =addvalu1+addvalu2
    console.log(req.body)
    res.send("the result is"+" "+ add )
})
app.get("/divide",(req,res)=>{
    res.sendFile(__dirname+"/divid.html")
})
app.post("/divide",function(req,res){
    const divalu1=Number(req.body.divalue1)
    const divalu2=Number(req.body.divalue2)
    const div =divalu1/divalu2
    console.log(req.body,divalu1,divalu2)
    res.send("the result is"+ " "+div )
})





app.listen(3007,console.log("port 3007"))