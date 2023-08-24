const mongoose=require("mongoose");
require('dotenv').config();

//connection
const connection=mongoose.connect(process.env.url);


//exporting connection

module.exports=connection;