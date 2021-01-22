const express = require('express');
const app = express();
const cookieSession = require('cookie-session');

//views
app.set('view engine', 'ejs');

//cookie parser
app.use(cookieSession({

    name: 'session',
    keys: ['shhh', 'do not tell'],
    maxAge: 24 * 60 * 60 * 1000
}));

//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());



//middleware

let authLogin = (req, res, next)=>{
    //check session userName
    if(req.session.userName){
        next()
    }
    else{
        res.redirect('/login')
    }
}

//set authLogin necessity

app.all('/admin/*', authLogin, (req, res, next) => {
    next()
})

//routes

app.get('/', (req, res) => {
    
    res.send('home page')
})


app.get('/admin/dashboard', (req, res) => {
    
    res.send('dashboard')
})


app.get('/login', (req, res) => {
    
    res.render('login')
})

let users = [
    {userName: 'Jacob', password: 'yallknow'},
    {userName: 'Ally', password: 'sup'},
    {userName: 'Claude', password: 'thegoat'}
]

app.post('/login', (req, res) => {
    
    //user name and password from form

    let userID = req.body.userID;
    let password = req.body.password;

    let user = users.find(userRecord =>{
        
        return userRecord.userName === userID && userRecord.password === password;
    })
    if(user != null){
        //set session info
        if(req.session){
            req.session.userName === userID;

            res.redirect('/')
        }
    }
    else{
        res.redirect('/login')
    }
})




app.listen(3000, () => {
    
    console.log("Listening on PORT 3000");
})