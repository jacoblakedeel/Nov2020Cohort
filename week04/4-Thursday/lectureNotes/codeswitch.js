


// var fruit = "Papayas";

// switch(fruit){
//     case "Oranges":
//         console.log("Oranges");
//         break;
//     case "Mangoes":
//         console.log("Mangoes");
//         break;
//     case "Papayas":
//         console.log("Papayas");
//         break;
//     default:
//         console.log("Default");
// }


// age = 18


// switch(age){
//     case age === 18:
//         console.log("No fun for you!");
//         break;
//     case age === 19 || 20:
//         console.log("Old enough to smoke but no drinkin'");
//         break;
//     default:
//         console.log("Nothing to see here");
// }


// var count = 0;

// while (count < 10){
//     count = count ++;
//     console.log(count);
// }



// for(var count = 1; count <= 10; count++){
//     console.log(count);

// }


// push, pop, shift, unshift


// var myArray = [7, 9, 56, 76]


// console.log(myArray[0]);

// myArray.push(99)

// console.log(myArray);


// myArray[2] = 65

// console.log(myArray);

// myArray.pop()

// console.log(myArray);

// myArray.shift()

// console.log(myArray);

// myArray.unshift(365)

// console.log(myArray);




// splice - mutating, slice - non-mutating

// var lottoNums = [23, 11, 43, 19, 37, 16];

// var arrayOfSplicedValues = lottoNums.splice(2, 2);

// console.log(arrayOfSplicedValues);
// console.log(lottoNums);


// var lottoNums = [23, 11, 43, 19, 37, 16];

// var arrayOfSlicedValues = lottoNums.slice(2, 2);

// console.log(arrayOfSlicedValues);
// console.log(lottoNums);





//casting


// var a = "6"

// var entA = parseInt(a)

// console.log(entA + 3);


//split and join


// var alpha = "abcdefghijklm nopqrstuvwxyz";

// var chars = alpha.split(' ')

// console.log(chars);

// var chars2 = chars.join("")

// console.log(chars2);


// var num = 7345

// var reverse = num.toString().split('').reverse().join(' ');

// var rnum = parseInt(reverse)

// console.log(rnum);




// var arr = [3, 5, 7, 8]

// for (var index = 0; index < arr.length; index++){

// }


// while (count < 10){
//     count = count ++;
//     console.log(count);
// }


// var phoneBook = {
//     firstName: "Jacob",
//     lastName: "Deel"
// };

// console.log(phoneBook);


// phoneBook['middleName'] = "Lake"

// console.log(phoneBook);

// delete phoneBook['middleName']

// console.log(phoneBook);




function fName(){
    console.log("a function");
}

fName();


function add(num1, num2){
    return num1 + num2
}

var result = add(4, 6);

console.log(result);
