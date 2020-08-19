import React from 'react'
//import { connect } from 'react-redux'
import Signs from './Signs'


class LandingPage extends React.Component {
    
    render() {
        
        document.title = "Ask Aztro"

        return(
            <div><Signs /> </div>
        )
    }
}

export default LandingPage;