const express = require('express');
const router = express.Router();

//body parser
router.use(express.urlencoded({extended: false}));
router.use(express.json());



//handlers

router.get('/index', (req, res) => {
    
    res.render('index')
})


router.post('/index', () => {
    
})





module.exports = router;