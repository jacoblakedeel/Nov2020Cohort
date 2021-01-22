const express = require('express');
const helmet = require('helmet');


app.use(express.static('public'));
app.use(helmet());


//custom middleware

let authLogin = (req, res, next)=>{
    console.log("checking auth");
    next()
}

app.get('/', authLogin, (req, res, next) => {
    
    if(true){
        res.send('home')
    }
    else{
        next(new Error ('there is an error'))
    }
    
})

