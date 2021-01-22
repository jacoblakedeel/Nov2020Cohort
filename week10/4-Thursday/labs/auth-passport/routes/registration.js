
const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');


router.get('/registration', (req, res) => {
    
    res.render('registration')
});



router.post('/registration', async (req, res) => {
    
    let userName = req.body.userName;
    let password = req.body.password;
    let email = req.body.email;


    try{
        //hash password (should add logic for duplicate users)
        let passwordEncrypted = bcrypt.hashSync(password, 8);

        let insertResult = await db.users.create({
            userName: userName,
            email: email,
            password: passwordEncrypted,
            roleID: 1
        })

        res.redirect('/login')
        }
    catch(error){
        res.send(`error: can not register this user name`)
    }
    
})





module.exports = router;