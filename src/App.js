import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import LandingPage from './containers/LandingPage';

class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Route path='/' component={LandingPage} />

                </Router>

            </div>
        )
    }
}

export default App;