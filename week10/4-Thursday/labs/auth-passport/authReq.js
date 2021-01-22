
let authReq = (req, res, next)=>{

    //isAuthenticated() -- calls deserialization to see if in db
    if(req.isAuthenticated()){
        next()
    }
    else{
        res.redirect('/error');
    }

}



module.exports = authReq;