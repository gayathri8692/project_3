import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LessonOne from './components/LessonOne';
import LessonTwo from './components/LessonTwo';
import LessonThree from './components/LessonThree';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <main>
          <Link to='/api/units/one'>Unit 1</Link>  
          <Route exact path='/api/units/one' component={LessonOne} />

          <Link to='/api/units/two'>Unit 2</Link>  
          <Route exact path='/api/units/two' component={LessonTwo} />

          <Link to='/api/units/three'>Unit 3</Link>  
          <Route exact path='/api/units/three' component={LessonThree} />
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
