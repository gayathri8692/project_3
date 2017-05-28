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
          <Link to='/api/units/one' className='unit1'><span className='span1'><p className='head'>UNIT 1</p></span></Link>  
          <Route exact path='/api/units/one' component={LessonOne} />

          <Link to='/api/units/two' className='unit2'>UNIT 2</Link>  
          <Route exact path='/api/units/two' component={LessonTwo} />

          <Link to='/api/units/three' className='unit3'>UNIT 3</Link>  
          <Route exact path='/api/units/three' component={LessonThree} />

          <Link to='/api/units/' className='unit4'>UNIT 4</Link>  
          <Route exact path='/api/units/' component={Header} />
        </main>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
