import React, {useState} from 'react';
import { connect } from 'react-redux'
import { getSign } from '../actions/sign'
import { useHistory } from "react-router-dom";

function SoloSign(props) {
        //console.log(props.match.params.sign, props.sign)
        let name = props.match.params.sign
        document.title = name;
        let [day, setDay] = useState('')
        
        
        // function display() {
        //     
        //} 

        function handleOnAsk(e) {
            let zDay = e.currentTarget.id
            //debugger;
            props.getSign(name, zDay)
            //history.push(`/sign/${name}/day/${day}`)
            props.history.push(`/sign/${name}/day/${zDay}`)
        }

        function display () {
            if (props.sign !== undefined) {
                    let {
                        date_range, 
                        current_date, 
                        description, 
                        compatibility,
                        mood,
                        color,
                        lucky_number,
                        lucky_time} = props.sign;

                        return(<div>
                            <div>Sign: {name}</div>
                            <div>Range: {date_range}</div>
                            <div>Day: {current_date}</div>
                            <div>Description: {description}</div>
                            <div>Mood: {mood}</div>
                            <div>Compatability: {compatibility}</div>
                            <div>Color: {color}</div>
                            <div>Lucky Number: {lucky_number}</div>
                            <div>Lucky Time: {lucky_time}</div>
                            <button onClick={handleOnAsk} id="yesterday">yesterday</button>
                            <button onClick={handleOnAsk} id="today">today</button>
                            <button onClick={handleOnAsk} id="tomorrow">tomorrow</button>
                        </div>)
                // } else if (props.sign['message']) {
                //     return <div>{props.sign}</div>
                } else {
                    return(<div>..loading...</div>) 
                }
            
        }
    
        return (<div>
            
            {display()}
        </div>)
}

const mapStateToProps = state => {
    //console.log(state.sign.data[0])
    return {
        sign: state.sign.data[0]
    }
    
}

export default connect(mapStateToProps, { getSign })(SoloSign);