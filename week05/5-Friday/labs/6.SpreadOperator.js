// ***Spread Operator
// use spread operator to construct arr variable
var a, b, c, d, arr;

a = [1, 2]
b = [4, 5]
c = [8, 9, 10]
d = 11;

arr = [0, ...a, 3, ...b, 7, ...c, d]

console.log(arr);
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

