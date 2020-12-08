const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


//forEach print name, start, end

// companies.forEach(function(obj){

//     console.log(obj.name, obj.start, obj.end);
// })


//map - create new array with just company names

// var compNames = companies.map(function(obj){

//     return obj.name;
// })
// console.log(compNames);



//filter all companies with start date greater than 1990

// var compAge = companies.filter(function(age){
//     return age.start >= 1990;
// })

// console.log(compAge);









// ages.forEach(function(age){
    //     let yearBirth = 2020 - age;
    //     console.log(yearBirth);
    // })
    
    
    // const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


    // var anotherAges = ages.some(function(age){

    //     return age > 60;
    // })

    // console.log(anotherAges);

    /// map through ages array and return a new ages array where 5 is added to each element.


    // var agesPlus = ages.map(function(age){

    //     return age + 5;
    // })
    // console.log(agesPlus);



// Filter out all ages greater than 35 
// var ageFilter = ages.filter((age)=> age<=35)

// var newAges = ages.filter(function(age){

//     return age > 35;
// })

// console.log(newAges);





// Filter all even numbers

// var newAges = ages.filter(function(age){

//     return age % 2 === 0;
// })

// console.log(newAges);




// var newAges = ages.map(arrVAl => arrVAl +5)






