var express=require('express');
var router=express.Router();
//call userdatabase model
var addProduct=require('../model/addproduct');


/////////////////////////////////////////////////////////

router.get('/viewProduct', (req, res) => {
    addProduct.find().then((data)=>{
        res.render('dashboard/product_view',{data:data});
           console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
});

//////////////////////////////////////////////////////////////

 //delete user by Id
 router.get('/delete/:id', (req, res) => {
    addProduct.findByIdAndRemove(req.params.id).then(()=>{
        console.log("data deleted")           
        res.redirect('/viewProduct');
    })
    .catch((err)=>{
        res.redirect('/viewProduct');
        console.log(err);
    })
});

//////////////////////////////////////////////////////////

//edit user by Id
router.get('/edit/:id', (req, res) => {
    addProduct.findById(req.params.id).then((data)=>{ 
        console.log(data);          
        res.render('dashboard/edit-product',{data:data});
    })
    .catch((err)=>{
        console.log(err);
    })
});

//post edited records
router.post('/edit/:id', (req, res) =>{
    var updateProduct={
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        discountOffer:req.body.discountOffer,
        fileUpload:req.body.fileUpload,
        
    };
    addProduct.findByIdAndUpdate(req.params.id,updateProduct).then(()=>{
         res.redirect('/viewproduct');

        console.log('data updated');
    })
    .catch((err)=>{
        res.redirect('edit/'+ req.params.id);
    })


});

////////////////////////////////////////////////////////////////

//show user detail by Id
router.get('/show/:id', (req, res) => {
    addProduct.findById(req.params.id).then((data)=>{ 
        console.log(data);
        res.render('dashboard/showproduct',{data:data});        
       
    })
    .catch((err)=>{
        console.log(err);
    })
});
 

///////////////////////////////////////////////////////////////

module.exports=router;