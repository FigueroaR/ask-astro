export default ( state = {sign:[], loading: false}, action) => {
    switch(action.type) {
        case "GET_SIGN":
            console.log("getting sign")
            return {
                ...state, 
                loading: false
            }
        default:
            return state
    }
}