const jwt=require("jsonwebtoken");
require("dotenv").config();



const auth=async(req,res,next)=>{

    const token=req.headers.authorization?.split(" ")[1];

    try {

        if(token){

        const decodeT=jwt.verify(token,process.env.secretKey);
        console.log(decodeT)

        if(decodeT){

            req.body.userId=decodeT.userId;
            req.body.username=decodeT.username;

            next();


        }else{
          
            res.status(401).json({msg:"User is not authenticated, Please Login"})

        }

        
        }else{

            res.status(401).json({msg:"User is not authenticated"})
        }
        
    } catch (error) {
        
        console.log(error)
    }

}



//module exports 

module.exports={
    auth
}