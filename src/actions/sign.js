export const getSign = (sign, day) => {
    return () => {
        dispatch({type: 'GET_SIGN'}, sign, day)
            fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${sign}&day=${day}`, {
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
                "x-rapidapi-key": "8753e5b03dmsh185e9c7fa88edfep1689bcjsn3e9a7cc9111e",
                "content-type": "application/x-www-form-urlencoded"
            },
            "body": sign
            })
            .then( resp => resp.json() )
            .then( info => {
                console.log(info)
            })
            .catch(err => {
                console.log(err);
            });
    }
}