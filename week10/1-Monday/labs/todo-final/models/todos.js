
//require db
const db = require('./database');


//create class called todo

class Todo{

    constructor(){

    }
    static async getAllTodos(){
        try{
            const records = await db.query("SELECT * FROM todos ORDER BY id DESC");

            return records; 
        }
        catch(error){
            return error.message;
        }


    }
}



//export class

module.exports = Todo;