 const mongoose=require('mongoose')
//  mongoose.connect("mongodb+srv://bhavanaarora:bhavana5@cluster0.zacdrqs.mongodb.net/toystore?retryWrites=true&w=majority",
 mongoose.connect("mongodb://127.0.0.1:27017/product",
 {
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 .then(()=>console.log("connection successful"))
 .catch((err)=>console.log(err));
 
//   module.exports.url="mongodb+srv://bhavanaarora:bhavana5@cluster0.zacdrqs.mongodb.net/student?retryWrites=true&w=majority"
 