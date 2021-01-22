const express = require('express');
const app = express();
const cookieSession = require('cookie-session');


app.use(cookieSession({

    name: 'session',
    keys: ['shhh', 'do not tell'],
    maxAge: 24 * 60 * 60 * 1000
}));


app.get('/', (req, res) => {
    
    req.session.name = 'Jacob'
    res.send('home')
})


app.get('/about', (req, res) => {
    
    res.send(req.session.name)
})




app.listen(3000, () => {
    console.log('Listening on PORT 3000');
})