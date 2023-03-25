const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const url="mongodb+srv://bhavanaarora:bhavana5@cluster0.zacdrqs.mongodb.net/toystore?retryWrites=true&w=majority"
//in the above url we have to add password and database name:here it is toystore 
//can copy the url from mangoose atlas
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 .then(()=>console.log(" Add Product connection successful"))
 .catch((err)=>console.log(err));

 const productSchema=mongoose.Schema({
    fileUpload:
    {
      type:String,
      required:true
    },
    productName:
    {
      type:String,
    //   unique:true,
      required:true
    },
    productPrice:
    {
      type:String,    
      required:true
    },
    discountOffer:
    {
      type:String,
      
      required:true
    },
   description:
    {
      type:String,
      required:true
    }

 })

 const addProduct=mongoose.model('productDetail',productSchema)
 module.exports=addProduct