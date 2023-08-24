
const express=require("express");
const { registerU, loginU } = require("../controller/user.controller");

const userRoutes=express.Router();


userRoutes.post("/register",registerU);
userRoutes.post("/login",loginU);




//export module

module.exports={
    userRoutes
}