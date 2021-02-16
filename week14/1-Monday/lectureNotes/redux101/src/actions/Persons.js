

export const addPerson = (personObj) => {
    
    return {
        type: "ADDPERSON",
        data: personObj
    }
}



export const removePerson = (firstName) => {
    
    return {
        type: "REMOVEPERSON",
        data: firstName
    }
}

