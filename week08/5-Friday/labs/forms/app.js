const express = require('express');
const app = express();
const PORT = 3000;


//ejs
app.set('view engine', 'ejs');

//public
app.use(express.static('public'));


//routesj
app.use(require("./routes"));
app.use(require("./routes/aboutus"));





app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})