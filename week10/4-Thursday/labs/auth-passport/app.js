
const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const helmet = require('helmet');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./auth/passport_config')(passport);//passing in function (modularized)


//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//views
app.set('view engine', 'ejs');


//public
app.use(express.static('public'));
app.use(helmet());

//cookie-session
app.use(cookieSession({
    name: 'session',
    keys: ['lsdjfs;ldjs;lkjdl;skdjf;lsdkjf'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

//passport
app.use(passport.initialize());
app.use(passport.session());


//routes
app.use(require('./routes'));
app.use(require('./routes/login'));
app.use(require('./routes/registration'));






app.listen(3000, () => {
    
    console.log("Listening on PORT 3000");
})