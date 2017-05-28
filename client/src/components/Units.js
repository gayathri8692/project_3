import React, { Component } from 'react';
import LessonOne from './LessonOne';
import LessonTwo from './LessonTwo';
import LessonThree from './LessonThree';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Units extends Component {
  render() {
    return (
      <Router>
        <div className="units">
          <ul> 
            <li>
              <Link to='/api/units/one' className='unit unit1'><span className='span1'><p className='head'>UNIT 1</p></span></Link>  
              <Route exact path='/api/units/one' component={LessonOne} />
            </li>

            <li>
            <Link to='/api/units/two' className='unit unit2'>UNIT 2</Link>  
            <Route exact path='/api/units/two' component={LessonTwo} />
            </li>

            <li>
            <Link to='/api/units/three' className='unit unit3'>UNIT 3</Link>  
            <Route exact path='/api/units/three' component={LessonThree} />
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default Units;