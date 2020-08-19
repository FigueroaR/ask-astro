//import React from 'react';
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory, Link} from "react-router-dom";
import { getSign } from '../actions/sign'


function Card(props) {

    let history = useHistory();
    const sign = props.sign
    const [day, setDay] = useState("today");

    function handleOnSubmit(e) {
        
        console.log(e.target)
        // import the action and or reducers
        props.getSign(sign, day)
        history.push(`/sign/${sign}/day/${day}`)
    }
        
    return (
        <div className="four wide column">
            <div className="ui card">
                <div className="content">
                    <div className="header">{sign}</div>
                </div>

                <img className="image" onClick={handleOnSubmit} src={props.svg}/>
            </div>

            
        </div>  
                    
                
                
           
        
    
    )
    
}


export default connect(null, { getSign })(Card);