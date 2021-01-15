const express = require('express');
const app = express();


//public
app.use(express.static('public'));

//ejs
app.set('view engine', 'ejs');


//routes
app.use(require('./routes'));
app.use(require('./routes/forum'));






//setting up router
app.listen(3000, () => {
    console.log("Listening on Port 3000");
})