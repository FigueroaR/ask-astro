import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { connect } from 'react-redux'
import LandingPage from './containers/LandingPage';
import SoloSign from './components/SoloSign';


class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/sign/:sign/day/:day' render={ props => <SoloSign {...props}/>}/>
                    </Switch>
                </Router>
                <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

            </div>
        )
    }
}

export default App;