import React from 'react';
import './Signs.css'
//import {connect} from 'react-redux';
import Card from '../components/Card';
import aries from '../signs/aries-1.svg'
import taurus from '../signs/taurus-1.svg'
import gemini from '../signs/gemini-1.svg'
import cancer from '../signs/cancer-1.svg'
import leo from '../signs/leo-1.svg'
import virgo from '../signs/virgo-1.svg'
import libra from '../signs/libra-1.svg'
import scorpio from '../signs/scorpio-1.svg'
import sagitattarius from '../signs/sagittarius-1.svg'
import capricorn from '../signs/capricornus-1.svg'
import aquarius from '../signs/aquarius-1.svg'
import pisces from '../signs/pisces-1.svg'

class Signs extends React.Component {
    
    render() {
    
        const astros = [{sign:'aries', svg: aries}, {sign: 'taurus', svg: taurus}, {sign: 'gemini', svg: gemini}, {sign: 'cancer', svg: cancer},
                        {sign: 'leo', svg: leo}, {sign: 'virgo', svg: virgo}, {sign: 'libra', svg: libra}, { sign: 'scorpio', svg: scorpio},
                        {sign: 'sagitattarius', svg: sagitattarius}, {sign: 'capricorn', svg: capricorn }, {sign : 'aquarius', svg: aquarius},{sign: 'pisces', svg: pisces} ];
        const allCards = astros.map( (data, i ) => <Card key={i} sign={data.sign} svg={data.svg} />)
        
        return(
            <div >
                <div className="bottomspace">
                    <div className=" ui sizer vertical segment">
                        <h1 className="ui huge center aligned blue header">Ask Aztro</h1>
                    </div>
                </div>
                
                
                <div className=" ui grid container">
                    {allCards} 
                </div>
            </div>
        )
    }
}

export default Signs;

