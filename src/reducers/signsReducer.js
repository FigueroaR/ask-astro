export default ( state = {sign:[], loading: false}, action) => {
    switch(action.type) {
        case "GET_SIGN":
            console.log("getting sign")
            return {
                ...state,
                loading: true
            }

        case "LOADED_SIGN":
            console.log("the astros has spoken back to us", action.payload)
            return {
                sign: [action.payload],
                loading: false
            }
            
        default:
            return state
    }
}