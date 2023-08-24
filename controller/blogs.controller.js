const { blogModel } = require("../modules/blog.module");



//get all blogs


const getBlogs=async(req,res)=>{

    const {userId}=req.body;
    console.log(req.body)

    try {


        const blogs=await blogModel.find({userId});
        console.log(blogs)

        if(blogs){
            res.status(200).json({blogs});
        }else{
            res.status(202).json({msg:"There is no blogs to show"})
        }

        
        
    } catch (error) {
        console.log(error)
    }


}


//create blogs

const createBlogs=async(req,res)=>{

    console.log(req.body)

    try {

        const newBlog=await new blogModel(req.body);

        await newBlog.save();

        res.status(201).json({msg:"Blog created successfully"});
        
    } catch (error) {
        console.log(error)
    }


}


//delete blogs

const deleteBlog=async(req,res)=>{

    const {myId}=req.params;
    const {userId}=req.body;


    try {


        await blogModel.findByIdAndDelete({_id:myId});

        res.status(200).json({msg:"Blog deleted successfully"});


        
    } catch (error) {
        console.log(error)
    }
}



module.exports={
    getBlogs,
    createBlogs,
    deleteBlog
}