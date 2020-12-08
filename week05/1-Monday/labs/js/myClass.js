


// function add(a, b){
//     var result = a + b
//     return result
// }

// var addResult = add(9, 8);

// console.log(addResult);



// (function greeting(arr){
//     for(var index = 0; index < arr.length; index++){

//         console.log(`hello ${arr[index]}`);
//     }
// })(['Jaycub', 'Pauline'])



// var add = function(num1, num2){
//     return num1 + num2;
// }

// var subtract = function(num1, num2){
//     return num1 - num2;
// }

// var multiply = function(num1, num2){
//     return num1 * num2;
// }

// var divide = function(num1, num2){
//     return num1 / num2;
// }


// var calc = function(num1, num2, operation){
//     return operation(num1, num2)

// var result = calc(5, 8, multiply);
// console.log(result);



// var arr = [65, 7, 8, 98, 123];

// arr.forEach(function(val){
//     console.log(val);
// })




// var arr = [45, 67, 5, 34, 16];

// var newArr = arr.map(function(num){


//     return num * 3;
// })
// console.log(newArr);



// var students = ['Andrea', 'Kim', 'Kanny', 'Zach', 'Claude', 'Layne', 'Joe', 'Matthew R', 'Matt P'];


//filter out name

// var newStudents = students.filter(function(studName){

//     return studName != 'Layne';
// })

// console.log(newStudents);



// map function

// var greetingArr = students.map(function(studName){

//     return `Hello ${studName}`
// })

// console.log(greetingArr);




var arr = [1, 65, 54, 79, 53];

var eitherTorF = arr.some(function(num){

    return num > 80;
})

console.log(eitherTorF);