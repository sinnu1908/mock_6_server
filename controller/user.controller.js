const { userModel } = require("../modules/user.module");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config();


//Register User
const registerU=async(req,res)=>{

    const {Username,Avatar,Email,Password}=req.body;

    try {

        const userAvailable=await userModel.findOne({Email});

        if(userAvailable){

            req.status(200).json({msg:"User already registered, Please Login"})

        }else{

            bcrypt.hash(Password, 4, async(err, hash) =>{

                if(hash){

                const newUser=await new userModel({
                    Username,
                    Avatar,
                    Email,
                    Password:hash,

                })
             await newUser.save();
             res.status(201).json({msg:"User registered successfully, Please Login"})

                }
            });

        }
        
    } catch (error) {
        console.log(error)
    }
}


//login User


const loginU=async(req,res)=>{

    const {Email,Password}=req.body;

    try {

       
        const userAvailable=await userModel.findOne({Email});
        
        if(userAvailable){
        
            bcrypt.compare(Password, userAvailable.Password, async(err, result)=>{

                if(result){

                    const token=jwt.sign({
                        userId:userAvailable._id,
                        username:userAvailable.Username
                    },
                    process.env.secretKey,
                    {
                        expiresIn:"28days"
                    })

                    res.status(200).json({msg:"Login successfull",token})

                }else if(!result){
                    res.status(202).json({msg:"Password is incorrect"})
                }
                // result == true
            });  



        }else{
            res.status(202).json({msg:"User not found"})
        }
        
    } catch (error) {
        console.log(error)
    }
}


//export modules


module.exports={
    registerU,
    loginU
}