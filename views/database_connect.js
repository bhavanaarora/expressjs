 const mongoose=require('mongoose')
 url=process.env.DATABASE;
// mongoose.connect("mongodb+srv://bhavanaarora:bhavana5@cluster0.zacdrqs.mongodb.net/toystore?retryWrites=true&w=majority",
//  mongoose.connect("mongodb://127.0.0.1:27017/product",
mongoose.connect(url,
 {
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 .then(()=>console.log("Database connection successful"))
 .catch((err)=>console.log(err));
 
//   module.exports.url="mongodb+srv://bhavanaarora:bhavana5@cluster0.zacdrqs.mongodb.net/student?retryWrites=true&w=majority"
 