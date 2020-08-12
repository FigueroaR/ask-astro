export default ( state = {data:[], error:[], loading: false}, action) => {
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
                ...state,
                data: [action.payload],
                loading: false
            }

        case 'ERROR_REPORT':
            console.log('error report')
            return {
                ...state,
                error: [action.payload],
                loading: false
            }
            
        default:
            return state
    }
}