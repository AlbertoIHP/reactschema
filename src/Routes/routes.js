import React, { Component } from 'react';


//Router navigation components
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';


//Components
import Example from '../Components/Example/example';

class Routes extends Component {
  render() {
    return (
          <Router history={browserHistory}>
            <Route path="/example" component={ Example } />
          </Router> 
    );
  }
}

export default Routes;



