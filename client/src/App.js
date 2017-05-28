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
  constructor(props) {
    super(props);
    this.state = {
      isFeatured: false,
      isLesson: false,
    }
    this.setFeature = this.setFeature.bind(this);
  }

  setFeature() {
    this.setState({
      isFeatured: !this.state.isFeatured,
    })
  }


  render() {
    const isLesson = this.state.isLesson;
    if (isLesson){
      return ({});
    }else{
    return (

      <Router>
    

    <Router>

      <div className="App">
        <Header />
        <Units />
        <Footer />
      </div>


      </Router>

    </Router>

    );
    }
  }
}

export default App;
