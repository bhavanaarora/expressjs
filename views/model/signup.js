const mongoose=require('mongoose')
//const bcrypt=require('bcrypt')
const bcrypt=require('bcryptjs');
const url="mongodb+srv://bhavanaarora:bhavana5@cluster0.zacdrqs.mongodb.net/toystore?retryWrites=true&w=majority"
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
 })
 .then(()=>console.log("connection successful"))
 .catch((err)=>console.log(err));

 const userSchema=mongoose.Schema({
    firstname:
    {
      type:String,
      required:true
    },
    lastname:
    {
      type:String,
      unique:true,
      required:true
    },
    email:
    {
      type:String,
      unique:true,
      required:true
    },
    mobile:
    {
      type:String,
      unique:true,
      required:true
    },
    password:
    {
      type:String,
      required:true
    },
    confirmPassword:
    {
      type:String,
      required:true
    }

 })

//  userSchema.pre('save',async function(next){
//   if(this.isModified('password')){
//     this.password=await bcryptjs.hash(this.password,12);
//     this.confirmPassword=await bcrypt.hash(this.confirmPassword,12);
//   }
//   next();
//  });

////////////////////////////////////////////////////////////////////

//bcrypt password and confirm password

userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    return next()
  }
  this.password=await bcrypt.hashSync(this.password,10);
  this.confirmPassword=await bcrypt.hashSync(this.confirmPassword,10);
  next();
})

 userSchema.methods.comparePassword=function(plaintext,callback){
  return callback(null,bcrypt.compareSync(plaintext,this.password));
 };
 
 //////////////////////////////////////////////////////////////////////

 const userModel=mongoose.model('user',userSchema)
 module.exports=userModel