
const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');


let password = 'userPassword';


//random characters
let salt = crypto.randomBytes(20).toString('hex');

// console.log(salt);


//create hash combination of password and salt
let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256');

// console.log(key);


let hash = key.toString('hex');

// console.log(hash);


let stored_password = `pbkdf2_sha256*3600*${salt}*${hash}`

// console.log(stored_password);



//[pbkdf2_sha256, 3600, ${salt}, ${hash}]
//a person logging in

let pass_parts = stored_password.split('*');

// console.log(pass_parts);

let newPassword = 'userPassword'

let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
);

let hasNewLogin = keyNewLogin.toString('hex');



//comparing database

if(hasNewLogin === pass_parts[3]){
    console.log('Password is correct');
}
else{
    console.log(`This ain't it`);
}






