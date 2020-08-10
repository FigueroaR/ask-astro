import React from 'react'
import { connect } from 'react-redux'
import Signs from './Signs'
import Card from '../components/Card'
class LandingPage extends React.Component {
    

    render() {
        
        document.title = "Welcome"
        return(
        <div>LANDING <Signs /> </div>
            )
    }
}

export default LandingPage;