

const mongoose=require("mongoose");

//user schema

const userSchema=mongoose.Schema({
    Username:{type:String,required:true},
    Avatar:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
})

//user model

const userModel=mongoose.model("user",userSchema);






//export module

module.exports={
    userModel
}