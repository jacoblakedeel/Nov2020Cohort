

let state = {
    firstName: "Jacob",
    lastName: "Deel",
    city: "Atlanta"
}

let newState = {
    ...state,
    firstName: "Dookie"
}

console.log(newState);