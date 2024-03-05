const express=require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://rahi1:Password@cluster0.k9auq3s.mongodb.net/?retryWrites=true&w=majority')
const User=require('./userModel')
async function insert()
{
    User.create({
        name:"rahi",
        email:"jhdcbscdj"
    })
}
//insert()
let data
async function getdata(){
    data=await User.find()
    data=JSON.stringify(data)
    console.log(data)
}
getdata()
const app=express()
app.use(express.json());
app.listen(8000,()=>{
    console.log("hello world")
})
app.get('/',async(req,res)=>{
    let d=await User.find()
    res.send(d)
})
app.get('/:name',async(req,res)=>{
    let b=req.params
    console.log(b)
    let d=await User.find(b)
    res.send(d)
})
app.post("/",async(req,res)=>{
    let d=req.body
    User.create(d)
    res.send()
})
app.put("/:id",async(req,res)=>{
    let d=req.params.id
    await User.updateOne({_id:d},
        {
            $set:req.body
        })
    res.send("all done")
})
app.delete("/:id",async(req,res)=>{
    let d=req.params.id
    await User.deleteOne({_id:d})
    res.send("all done")
})