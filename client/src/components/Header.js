import React, { Component } from 'react';
import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
  //   <Route path='/api/units/' component={Home} />
  //  <Link to='/api/units/' className='home' >HOME</Link> 
     
    return (
       <Router>
      <div className="header">
        <h3>ADABASE</h3>

        
      </div>
       </Router>
    );
  }
}

export default Header;