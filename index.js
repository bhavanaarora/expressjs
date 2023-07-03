let express = require('express');
let app = express();
let router = express.Router();
let path = require('path');
const dotenv= require ('dotenv');
dotenv.config({path:'./config.env'});
let userModel = require('./views/model/signup');
let addProduct = require('./views/model/addproduct');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const Port=process.env.PORT;


var cookieParser = require('cookie-parser');
var session = require('express-session');



let productrouter = require('./views/routes/viewproduct')
let userrouter = require('./views/routes/user');
let gamesrouter = require('./views/routes/games');

////////////////////////////////////////////////////////////////////////

//app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');

app.use(express.static('views'));//it is used to makes views folder static so that we can use the css and image file

app.use(cookieParser());
app.use(
    session({
        key: 'userId',
        secret: 'randomString',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000
        },
    })
);

app.use((req, res, next) => {
    if (req.cookies.userId && !req.session.user) {
        res.clearCookie('userId');
    }
    next();
});


//middleware function to check for logged in user

var sessionChecker = (req, res, next) => {
       if (req.cookies.userId && !req.session.user) {
       
       //console.log("employee id is not match" + err)
       console.log('id not match')
        res.redirect('/');
        //res.render('dashboard/dindex')
    } else {
        next();
    }
};
///////////////////////////////////////////////////////////////////

// //display: here is dashboard

router.get('/dashboard', (req, res) => {
   if (req.session.user && req.cookies.userId){
    userModel.find().then((data) => {
        res.render('dashboard/dindex', { data: data });
        console.log('login data is'+ data);  
    })          
       .catch((err)=>{
        console.log(err);
    });
   }
    else{
        res.redirect('/');
    }    
   });


///////////////////////////////////////////////////////////////////
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.userId) {
        res.clearCookie("userId");
        res.redirect("/");
    } else {
        res.redirect('/');
    }
});


/////////////////////////////////////////////////////////////////////
router.get('/', sessionChecker, (req, res) => {
    res.render('index');
})

router.get('/about',sessionChecker, (req, res) => {
    res.render('about');
})
router.get('/contact', (req, res) => {
    res.render('contact');
})
router.get('/babytoys', (req, res) => {
    res.render('babytoys');
})
router.get('/books', (req, res) => {
    res.render('books');
})
router.get('/toyage8', (req, res) => {
    res.render('toyage8');
})
router.get('/login', sessionChecker, (req, res) => {
    res.render('common/login');
})
router.get('/login2', (req, res) => {
    res.render('common/login2');
})

// router.get('/dashboard',sessionChecker, (req, res) => {
//     res.render('dashboard/dindex');
// })
router.get('/addProduct', (req, res) => {
    res.render('dashboard/product_add');
})

router.get('/left', (req, res) => {
    res.render('dashboard/left');
})



////////////////////////////////////////////////////////

router.post('/signup', (req, res) => {

    var user = new userModel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });
    user.save().then(() => {
        console.log("saved data");
        res.redirect('/');
    })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        })
})

router.post('/addproduct', (req, res) => {

    var product = new addProduct({
        fileUpload: req.body.fileUpload,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        discountOffer: req.body.discountOffer,
        description: req.body.description,
    });
    product.save().then(() => {
        console.log("saved data");
        res.redirect('/viewProduct');
    })
        .catch((err) => {
            console.log(err);
            res.redirect('/');
        })
});


router.post('/login', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {
        let user = await userModel.findOne({ email: email })
            .exec();
        //console.log(user);
        if (!user) {
            res.redirect('/');
        }

        user.comparePassword(password, (error, match) => {
            if (!match) {
                res.redirect('/');
            }
        });
        req.session.user = user;
        res.redirect('/dashboard');
        //res.render('dashboard/dindex');
    } catch (error) {
        console.log(error)
    }
});





// router.get('/',function(req,res){
// res.sendFile(__dirname+"/index.ejs");
//     //res.send("Hello World");
// })
/////////////////////////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
app.use('/', productrouter);
app.use('/', userrouter);
app.use('/', gamesrouter);

app.listen(Port,()=>{
    console.log(`server is running on ${Port}`);
});
console.log("connected");