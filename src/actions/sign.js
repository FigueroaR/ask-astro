export const getSign = (sign, day) => {
    console.log(sign, day)
    return (dispatch) => {
        dispatch({type: 'GET_SIGN'})
            fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`, {
            method: "POST",
            headers: {
                "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
                "x-rapidapi-key": "8753e5b03dmsh185e9c7fa88edfep1689bcjsn3e9a7cc9111e",
                "content-type": "application/x-www-form-urlencoded"
            },
            body: {}
            })
            .then( resp => resp.json() )
            .then( info => {
                dispatch({type: 'LOADED_SIGN' , payload: info})
            })
            .catch(err => {
                console.log(err);
                dispatch({type: 'ERROR_REPORT', payload: err})
            });
    }
}