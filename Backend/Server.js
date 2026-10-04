require("dotenv").config()
const express=require("express");
const mongoose= require("mongoose")
const app =express()
const port=3000;
app.use(express.json())
const movieschema=new mongoose.Schema({
    title:{type:String,required:true},
    rating:{type:Number,required:false}
})
const Movie=mongoose.model("Movie",movieschema)

app.post("/details",async (req,res)=>{
    const savedMovie=await new Movie({
        title:req.body.title,
        rating:req.body.rating,
    }).save()
    res.status(201).json(savedMovie)
})
app.get("/movies",(req,res)=>{
    res.json([{id:1,
         title:"bigb"
    }])
})

app.use((req,res)=>{
    res.status(404).json({error:"Route not found"})
})

app.use((err,req,res,next)=>{
    if(res.headersSent){
        return next(err)
    }

    console.error("Request failed:",err)
    if(err.type==="entity.parse.failed"){
        return res.status(400).json({error:"Invalid JSON in request body"})
    }

    if(err.name==="ValidationError"){
        return res.status(400).json({error:err.message})
    }

    res.status(500).json({error:"Internal server error"})
})

async function startServer(){
    try{
        if(!process.env.mongourl){
            throw new Error("mongourl is not configured")
        }

        await mongoose.connect(process.env.mongourl)
        console.log("Successfully connected to MongoDB")
        app.listen(port,()=>{
            console.log(`Server listening on port ${port}`)
        })
    }catch(err){
        console.error("Server startup failed:",err.message)
        process.exitCode=1
    }
}

startServer()