

let initialState = {
    count: 0,
    title: "Title",
    persons: []
}


const counterReducer = (state, action) => {

    if(state === undefined){
        state = initialState
    }

    switch(action.type){
        case 'INCREASE':
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            }
        case 'ADDPERSON':
            return{
                ...state,
                persons: [...state.persons, action.data]
            }
        case 'REMOVEPERSON':
            return{
                ...state,
                persons: state.persons.filter(person => action.data !== person.fName)
            }
        default:
            return state;
    }

}

export default counterReducer;