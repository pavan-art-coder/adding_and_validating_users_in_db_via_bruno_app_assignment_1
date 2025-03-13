const express=require("express")
const router=express.Router
const UserSchema=require("../model/usermodel")
const bcrypt =require("bcrypt")
router.get("/",(req,res)=>{
    <h1>API IS RUNNING</h1>
})

router.post("/register",async(req,res)=>{
    try{
       const {name,email,password}=req.body
       const Email=await UserSchema.findone({email})
       if(Email){
        res.send(400).json({message:"User Already Exist"})
       }
       const hasp=await bcrypt.hash(password,10)
       const newuser=await UserSchema.create({
        name:name,
        email:email,
        password:hasp
       })
       res.status(200).json({message:"USER REGISTER SUCCESFULLY",newuser})
       
    }
    catch{
        res.status(500).json({error:"Error In Server"})
    }
})
module.exports=router