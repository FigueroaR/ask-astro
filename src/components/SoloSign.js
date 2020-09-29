import React, {useState} from 'react';
import { connect } from 'react-redux'
import { getSign } from '../actions/sign'
import { useHistory } from "react-router-dom";
import Loading from './Loading'
//import svg from '../signs/aries-1.svg';

function SoloSign(props) {
        //console.log (props.sign, props)
        //debugger;
        let name = props.match.params.sign
        document.title = name;
        // let [day, setDay] = useState('')

        function handleOnAsk(e) {
            let zDay = e.currentTarget.id
            //debugger;
            props.getSign(name, zDay)
            //history.push(`/sign/${name}/day/${day}`)
            props.history.push(`/sign/${name}/day/${zDay}`)
        }

        function display() {
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

                        return(
                        <div className='ui centered card'>
                            <div className="content">
                                <div className='header'>{name}</div>
                                <div className='meta'>{date_range}</div><br></br>
                                <div className="description">Day: {current_date}</div><br></br>
                                <div className="description">Description: {description}</div><br></br>
                                <div className="description">Mood: {mood}</div><br></br>
                                <div className="description">Compatability: {compatibility}</div><br/>
                                <div className="description">Color: {color}</div><br/>
                                <div className="description">Lucky Number: {lucky_number}</div><br/>
                                <div className="description">Lucky Time: {lucky_time}</div><br/>
                                <button onClick={handleOnAsk} id="yesterday">yesterday</button>
                                <button onClick={handleOnAsk} id="today">today</button>
                                <button onClick={handleOnAsk} id="tomorrow">tomorrow</button>
                            </div>
                           
                        </div>)
                // } else if (props.sign['message']) {
                //     return <div>{props.sign}</div>
                } else {
                    return(<div> <Loading /> </div>) 
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