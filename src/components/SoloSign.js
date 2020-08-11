import React, {useState} from 'react';
import { connect } from 'react-redux'
import { useHistory, Link} from "react-router-dom";

function SoloSign(props) {
        console.log(props.match.params.sign)
        let sign = props.match.params.sign
        let [day, setDay] = useState('')

        // handleOnAsk() {

        // }
    
        return (<div>
            <div>{sign}</div>
            <button onClick={e => setDay('yesterday')}>Yesterday</button>
            <button onClick={e => setDay('today')}>Today</button>
            <button onClick={e => setDay('tomorrow')}>Tomorrow</button>
            <button >Ask!</button>

        </div>)
}

export default SoloSign;