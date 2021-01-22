
const express = require('express');
const router = express.Router();
const authReq = require('../authReq');


router.get('/', (req, res) => {
    
    res.send('home page')
})


router.get('/protected', authReq, (req, res) => {
    
    res.render('protected')
})

router.get('/error', authReq, (req, res) => {
    
    res.render('error')
})


router.get('/logout', (req, res) => {
    
    req.logout(); //on the req obj by passport

    res.redirect('/')
})


module.exports = router;