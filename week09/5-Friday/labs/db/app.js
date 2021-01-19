const express = require('express');
const app = express();

//learnpgpromise

let config = {
    host: 'localhost',
    port: 5432,
    database: 'sample2020',
    user: 'postgres'
}

let pgp = require('pg-promise')();

//db object- access to perform CRUD
let db = pgp(config);


// db.query(`SELECT * FROM employees.department`)
// .then(records =>{
//     console.log(records[1].dept_name);
// })
// .catch(error =>{
//     console.log(error);
// })



// db.one(`SELECT * FROM employees.department WHERE id='d005'`)
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// })



// db.result(`INSERT INTO student VALUES ('Jacob','Deel')`)





//router
app.listen(3000, () => {
    console.log('Listening on PORT 3000')
});


