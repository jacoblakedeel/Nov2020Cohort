const express = require('express');
const router = express.Router();
const db = require('../models/database');


router.get('/dishes', (req, res) => {
    
    //query database

    db.query(`SELECT * FROM restaurants`)
    .then(records=>{
        //records is an array of objects
        

        res.render('dishes',{
            dishes: records
        })
    })
});









module.exports = router;