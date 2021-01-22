
let db = require('./models');


//find all

// db.user.findAll()
// .then(records =>{

//     records.forEach(record =>{
//         console.log(record.id, record.firstName, record.lastName);

//     })
// })



// db.user.findByPk(4)
// .then(user =>{
//     console.log(user.firstName, user.lastName);
// })


//find all

// db.user.findAll({where: {lastName: 'Stonks'}})
// .then(records =>{

//     console.log(records[0].firstName, records[0].lastName);
// })


//delete

// db.user.destroy({where: {id: 2}})
// .then(numOfRowsDeleted =>{

//     if(numOfRowsDeleted >= 1){
//         console.log(`${numOfRowsDeleted} rows have been deleted from database`);
//     }
// })


//modify

// db.user.update({lastName: 'MacKinnon'}, {where: {id: 4}})
// .then(updatedRecord =>{
//     console.log(updatedRecord);
// })






// db.user.create({
//     firstName: 'Jacob',
//     lastName: 'Deel',
//     email: 'jacoblakedeel@gmail.com'
// })

// db.user.create({
//     firstName: 'Joe',
//     lastName: 'Stonks',
//     email: 'joe@aol.com'
// })

// db.user.create({
//     firstName: 'Adam',
//     lastName: 'Mac',
//     email: 'adam@hotmail.com'
// })

// db.user.create({
//     firstName: 'Cedael',
//     lastName: 'White',
//     email: 'cedael@yahoo.com'
// });




db.blogs.findAll({
    where: {title: 'JQuery'},
    include: [{
        model: db.user,
        required: true,
        where: {firstName: 'Joe'}
    }]
})
.then(records =>{
    //[{}, {},{}]

    records.forEach(blog =>{
        console.log(blog.title, blog.user.firstName, blog.user.lastName);
    })
})
