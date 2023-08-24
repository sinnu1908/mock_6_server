const express=require("express");
const cors=require("cors");
const connection = require("./db");
const { userRoutes } = require("./routes/user.routes");
const { blogRoutes } = require("./routes/blog.routes");
require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(blogRoutes)





app.listen(process.env.port,async()=>{
    try {
      await connection;
      console.log(`server is running at port ${process.env.port}`);
      console.log("db is connected") 
        
    } catch (error) {
        console.log(error)
    }
})