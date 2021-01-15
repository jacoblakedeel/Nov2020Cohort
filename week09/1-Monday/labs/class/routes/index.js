const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    

    res.render('index')
})

router.post('/', (req, res) => {
    

    let username = req.body.username;
    let password = req.body.password;

    
    res.send(`${username}, ${password}`)
    //res.render('registration')
})






module.exports = router