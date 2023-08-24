
const express=require("express");
const { getBlogs, createBlogs, deleteBlog } = require("../controller/blogs.controller");
const { auth } = require("../middleware/auth.middleware");


const blogRoutes=express.Router();


blogRoutes.get("/blogs",auth,getBlogs);
blogRoutes.post("/blogs",auth,createBlogs);
blogRoutes.delete("/blogs/:myId",auth,deleteBlog);



//export module

module.exports={
   blogRoutes
}




