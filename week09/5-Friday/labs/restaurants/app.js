const express = require('express');
const app = express();

//view engine
app.set('view engine', 'ejs');


//public
app.use(express.static('public'));


//routes
app.use(require('./routes/dishes'));
app.use(require('./routes/newdish'));




app.listen(3000, () => {
    
    console.log('Listening on PORT 3000');
})