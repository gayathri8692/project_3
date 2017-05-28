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
        <main className="units container">
            <div className="unit-selector">
                <Link to='/api/units/one' className='unit'>UNIT 1</Link>
            </div>
            <Route exact path='/api/units/one' component={LessonOne} />

            <div className="unit-selector">
                <Link to='/api/units/two' className='unit'>UNIT 2</Link> 
            </div>
            <Route exact path='/api/units/two' component={LessonTwo} />

            <div className="unit-selector">
                <Link to='/api/units/three' className='unit'>UNIT 3</Link>  
            </div>
            <Route exact path='/api/units/three' component={LessonThree} />
        </main>
      </Router>
    );
  }
}

export default Units;