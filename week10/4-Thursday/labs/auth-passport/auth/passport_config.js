
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models');



const init = (passport) =>{

        passport.use( new localStrategy((userName, password, done) => {
            
            //database call
            db.users.findAll({where: {userName: userName}})
            .then(records =>{
                if(records !== null){
                    let record = records[0];

                    bcrypt.compare(password, record.password, (err, response) => {
                        
                        if(response){
                            //this if a match

                            done(null, {id:record.id, userName: record.userName})
                        }
                        else{
                            done(null, false)
                        }
                    })
                }
                else{
                    console.log("invalid username");
                    done(null, false)
                }
            })
        })



        )

        passport.serializeUser((user, done) => {
            //passport adding info to the sessions
            //you only wanna use id for hack-proofing

            done(null, user.id)
        })

        passport.deserializeUser((id, done) => {
            //checking to see if user is valid w/ the cookie that was passed from req
            //id is coming from session

            db.users.findByPk(id)
            .then(record =>{
                done(null, record)
            })
        })

}



module.exports = init;