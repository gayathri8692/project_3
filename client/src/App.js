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
  constructor(props) {
    super(props);
    this.state = {      
      isLesson: false,
    }
    this.setLesson=this.setLesson.bind(this);
  }

setLesson(){
    this.setState({
      isLesson:true,
    })
  }

 render() {
    if (this.state.isLesson===false) {
      return (
        <Router>
        
          <div className='one'>
          <Header />
          <div className='units'>
             <Link to='/api/units/one' className='unit1' onClick={this.setLesson}>UNIT 1</Link>  
             <Link to='/api/units/two' className='unit2' onClick={this.setLesson}>UNIT 2</Link> 
             <Link to='/api/units/three' className='unit3' onClick={this.setLesson}>UNIT 3</Link> 
            <Link to='/' className='unit4' onClick={this.setLesson}>UNIT 4</Link> 
             </div>
             <Footer />
          </div>
        </Router>
      );
    }
    else {    
      return (
        <Router>    
        <div className="App">
        <Header />
        <main>                 
          <Route exact path='/api/units/one' component={LessonOne} /> 
          <Route path='/api/units/two' component={LessonTwo} />           
          <Route path='/api/units/three' component={LessonThree} />           
          <Route path='/'  />
        </main>
        
        <Footer />
      </div>

      </Router>
    );
    }
  
}
}

export default App;
