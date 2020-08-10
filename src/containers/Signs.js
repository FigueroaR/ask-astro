import React from 'react';
//import {connect} from 'react-redux';
import Card from '../components/Card';

class Signs extends React.Component {
    
    render() {
        const astros = ['Aries', 'Taurus', 'Gemeni', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitattarius', 'Capricorn', 'Aquarius', 'Pisces' ];
        const individual = astros.map( (sign, i ) => <Card key={i} sign={sign} />)
        
        return(
            <div>SIGNSS!! {individual} </div>
        )
    }
}

export default Signs;

