

// let promise = new Promise((resolve, reject) =>{
//     if(true){

//     }
//     else{

//     }
// });

// promise.then(()=>{

// })




// let fetch = new Promise((resolve, reject)=>{

//     const request = new XMLHttpRequest();//XHR object

//     request.onreadystatechange = function(){
//         if(this.readyState === 4){
//             resolve(this.responseText)
//         }
//         else if(this.status === 400){
//             reject(`error: can't fetch url`)
//         }
//     }

//     request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     request.send()
// });

// fetch.then(response=>{
//     return JSON.parse(response)
// })

// fetch.then(data=>{
//     console.log(data);
// })



let p1 = fetch('https://jsonplaceholder.typicode.com/photos')
let p2 = fetch('https://jsonplaceholder.typicode.com/todos')

Promise.all([p1, p2])
.then(respArr =>{
    let arr = []
    arr.push(respArr[0].json());
    arr.push(respArr[1].json());

    return Promise.all(arr);

})
.then(data =>{
    console.log(data);
})