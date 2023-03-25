var express=require('express');
var router=express.Router();

//call userdatabase model
const userModel = require('../model/signup');


router.get('/registration', (req, res) => {
    userModel.find().then((data)=>{
        res.render('dashboard/registration',{data:data});
           console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
});


 //delete user by Id
 router.get('/userdelete/:id', (req, res) => {
    userModel.findByIdAndRemove(req.params.id).then(()=>{
        console.log("data deleted")           
        res.redirect('/registration');
    })
    .catch((err)=>{
        res.redirect('/registration');
        console.log(err);
    })
});

//edit user by Id
router.get('/useredit/:id', (req, res) => {
    userModel.findById(req.params.id).then((data)=>{ 
        console.log(data);          
        res.render('dashboard/edit-signup',{data:data});
    })
    .catch((err)=>{
        console.log(err);
    })
});

router.post('/useredit/:id', (req, res) =>{
    var updateSignup={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        mobile:req.body.mobile,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    };
    userModel.findByIdAndUpdate(req.params.id,updateSignup).then(()=>{
         res.redirect('/registration');

        console.log('data updated');
    })
    .catch((err)=>{
        res.redirect('edit/'+ req.params.id);
    })


});


//show user detail by Id
router.get('/usershow/:id', (req, res) => {
    userModel.findById(req.params.id).then((data)=>{ 
        console.log(data);
        res.render('dashboard/show',{data:data});        
       
    })
    .catch((err)=>{
        console.log(err);
    })
});



module.exports=router;