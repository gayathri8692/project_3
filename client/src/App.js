import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import LessonOne from './components/LessonOne';
import LessonTwo from './components/LessonTwo';
import LessonThree from './components/LessonThree';
import Units from './components/Units';
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
        <Home />
        <Units />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
