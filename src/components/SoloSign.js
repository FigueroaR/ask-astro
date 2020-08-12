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

        function handleOnAsk() {
            props.getSign(name, day)
            //history.push(`/sign/${name}/day/${day}`)
            props.history.push(`/sign/${name}/day/${day}`)
        }

        function display () {
            if (props.sign !== undefined) {
                    let {
                        date_range, 
                        current_date, 
                        description, 
                        compatability,
                        mood,
                        color,
                        lucky_number,
                        lucky_time} = props.sign;

                        return(<div>
                            <div>{name}</div>
                            <button onClick={e => setDay('yesterday')}>Yesterday</button>
                            <button onClick={e => setDay('today')}>Today</button>
                            <button onClick={e => setDay('tomorrow')}>Tomorrow</button>
                            <button onClick={handleOnAsk}>Ask!</button>
                        </div>)
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