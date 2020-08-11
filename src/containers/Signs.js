import React from 'react';
//import {connect} from 'react-redux';
import Card from '../components/Card';

class Signs extends React.Component {
    
    render() {
        const astros = ['aries', 'taurus', 'gemeni', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagitattarius', 'capricorn', 'aquarius', 'pisces' ];
        const allCards = astros.map( (sign, i ) => <Card key={i} sign={sign} />)
        
        return(
            <div>SIGNSS!! {allCards} </div>
        )
    }
}

export default Signs;

