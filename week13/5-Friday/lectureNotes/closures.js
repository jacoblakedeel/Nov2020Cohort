//closure  = function with function in it



// function add(){

//     let x = 1;
//     let y = 2;

//     function f(){

//         setTimeout(() => {
//             console.log(x + y); 
//         }, 10000)
//     }
//     f();
//     console.log('add function has completed');

//     return;
// }

// add();



// let $ = (()=>{

//     const pi = 3.14;

//     function multPi(multiplier){
//         return pi * multiplier
//     }


//     let $ = {
//         multiplyPi: multPi
//     };

//     return $
// })();


// console.log($.multiplyPi(5));




const times10 = (n) => n * 10;


const memoTimes10 = (p) => {

    const cache = {};


    function memo(n){
        if( n in cache ){
        console.log("fetching data from cache: " ,n);
        return cache[n]
    }
    else{
        console.log("Calculating Result");
        cache[n] = times10(n);
        return cache[n]
    }
    }
    return memo(p)

    
}


console.log('Calculating value: ', memoTimes10(7));

console.log('Cached value: ', memoTimes10(7));
