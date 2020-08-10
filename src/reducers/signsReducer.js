export default ( state = {sign:[], loading: false}, action) => {
    switch(action.type) {
        case "GET_SIGN":
            console.log("getting sign")
            return {
                ...state,
                loading: true
            }

        case "LOADED_SIGN":
            console.log("the astros has spoken back to us")
            return {
                ...state,
                sign: [...state, action.payload],
                loading: false
            }


        default:
            return state
    }
}