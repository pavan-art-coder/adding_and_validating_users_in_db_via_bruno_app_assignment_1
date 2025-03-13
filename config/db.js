const mongoose=require("mongoose")

const connectDB=async(url)=>{
    try{
       await mongoose.connect(url)
       console.log("Database Connected Succesfully")
    }
    catch{
        console.log("Not Connected")    
}
}
module.exports=connectDB()
