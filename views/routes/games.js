var express=require('express');
const { model } = require('mongoose');
var router=express.Router();
//call userdatabase model
var addProduct=require('../model/addproduct');


/////////////////////////////////////////////////////////
router.get('/games',(req,res)=>{
    addProduct.find().then((data)=>{
        res.render('./games',{data:data});
           console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
   
})



////////////////////////////////////////////////////

module.exports=router;