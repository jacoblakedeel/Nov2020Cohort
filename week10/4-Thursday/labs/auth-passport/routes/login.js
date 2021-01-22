
const express = require('express');
const router = express.Router();
let passport = require('passport');


router.get('/login', (req, res) => {
    
    res.render('login')
})

//finish this line
router.post('/login', passport.authenticate('local', {
    successRedirect: '/protected',
    failureRedirect: '/login'
}));



module.exports = router;