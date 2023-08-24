const mongoose=require("mongoose");




const commentSchema=mongoose.Schema({
    username:{type:String,required:true},
    content:{type:String,required:true},
})



const blogSchema=mongoose.Schema({
    username:{type:String,required:true},
    title:{type:String,required:true},
    content:{type:String,required:true},
    category:{type:String,required:true},
    date:{type:Date,required:true},
    likes:{type:Number},
    comments:[commentSchema],
    userId:{type:String}
})

//user model

const blogModel=mongoose.model("blog",blogSchema);


//export module

module.exports={
    blogModel
}