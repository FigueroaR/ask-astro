//import React from 'react';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory, Link} from "react-router-dom";
import Signs from '../containers/Signs';
import { getSign } from '../actions/sign'

function Card(props) {

    console.log(props.sign)
    const name = props.sign

    let history = useHistory();
    const [sign, setSign] = useState(`${props.sign}`);
    const [day, setDay] = useState("");

    function handleOnSubmit() {
        //setSign

    }
        
    return (
    <div onClick={handleOnSubmit}>{name}
        <button onClick={e => setDay(e.target.value)}>Yesterday</button>
        <button onClick={e => setDay(e.target.value)}>Today</button>
        <button onClick={e => setDay(e.target.value)}>Tomorrow</button>
    </div>
    )
    
}




export default connect(null, { getSign })(Card);