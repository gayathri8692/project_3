import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
        <Units />
        <Footer />
      </div>
    </Router>
    );
  }
}

export default App;
