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
  constructor() {
    super();
    this.state = {
      units: [],
      title: '',
      unitsOne: [],
      unitsTwo: [],
      unitsThree: [],
      inputTypeValueOne: '',
      inputUnitValueOne: '',
      inputTitleValueOne: '',
      inputGithubValueOne: '',

      inputTypeValueTwo: '',
      inputUnitValueTwo: '',
      inputTitleValueTwo: '',
      inputGithubValueTwo: '',

      inputTypeValueThree: '',
      inputUnitValueThree: '',
      inputTitleValueThree: '',
      inputGithubValueThree: '',
    }
    this.handleSubmitUnitOne=this.handleSubmitUnitOne.bind(this);
    this.handleInputTypeChangeOne=this.handleInputTypeChangeOne.bind(this);
    this.handleInputUnitChangeOne=this.handleInputUnitChangeOne.bind(this);
    this.handleInputTitleChangeOne=this.handleInputTitleChangeOne.bind(this);
    this.handleInputGithubChangeOne=this.handleInputGithubChangeOne.bind(this);

    this.handleSubmitUnitTwo=this.handleSubmitUnitTwo.bind(this);
    this.handleInputTypeChangeTwo=this.handleInputTypeChangeTwo.bind(this);
    this.handleInputUnitChangeTwo=this.handleInputUnitChangeTwo.bind(this);
    this.handleInputTitleChangeTwo=this.handleInputTitleChangeTwo.bind(this);
    this.handleInputGithubChangeTwo=this.handleInputGithubChangeTwo.bind(this);

    this.handleSubmitUnitThree=this.handleSubmitUnitThree.bind(this);
    this.handleInputTypeChangeThree=this.handleInputTypeChangeThree.bind(this);
    this.handleInputUnitChangeThree=this.handleInputUnitChangeThree.bind(this);
    this.handleInputTitleChangeThree=this.handleInputTitleChangeThree.bind(this);
    this.handleInputGithubChangeThree=this.handleInputGithubChangeThree.bind(this);

    this.handleDelete=this.handleDelete.bind(this);

    this.handleEdit=this.handleEdit.bind(this);
  }

componentDidMount() {
  this.fetchAllUnits()
  this.fetchAllUnitOne()
  this.fetchAllUnitTwo()
  this.fetchAllUnitThree()
}


fetchAllUnits() {
  fetch('/api/units/')
  .then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    // console.log(jsonResponse.repo);
    this.setState((prevState) => {
      return{
        units : jsonResponse.repo,
      }
    })
  })
}


fetchAllUnitOne() {
  fetch('/api/units/one')
  .then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    // console.log(jsonResponse.repo);
    this.setState((prevState) => {
      return{
        unitsOne : jsonResponse.repo,
      }
    })
  })
}

fetchAllUnitTwo() {
  fetch('/api/units/two')
  .then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    // console.log(jsonResponse.repo);
    this.setState((prevState) => {
      return{
        unitsTwo : jsonResponse.repo,
      }
    })
  })
}


fetchAllUnitThree() {
  fetch('/api/units/three')
  .then((response) => {
    return response.json();
  }).then((jsonResponse) => {
    // console.log(jsonResponse.repo);
    this.setState((prevState) => {
      return{
        unitsThree : jsonResponse.repo,
      }
    })
  })
}



  handleInputTypeChangeOne(event) {
    this.setState({inputTypeValueOne: event.target.value});
  }

  handleInputTypeChangeTwo(event) {
    this.setState({inputTypeValueTwo: event.target.value});
  }

   handleInputTypeChangeThree(event) {
    this.setState({inputTypeValueThree: event.target.value});
  }





  handleInputUnitChangeOne(event) {
    this.setState({inputUnitValueOne: event.target.value});
  }

  handleInputUnitChangeTwo(event) {
    this.setState({inputUnitValueTwo: event.target.value});
  }

  handleInputUnitChangeThree(event) {
    this.setState({inputUnitValueThree: event.target.value});
  }






  handleInputTitleChangeOne(event) {
    this.setState({inputTitleValueOne: event.target.value});
  }

  handleInputTitleChangeTwo(event) {
    this.setState({inputTitleValueTwo: event.target.value});
  }

  handleInputTitleChangeThree(event) {
    this.setState({inputTitleValueThree: event.target.value});
  }





  handleInputGithubChangeOne(event) {
    this.setState({inputGithubValueOne: event.target.value});
  }

  handleInputGithubChangeTwo(event) {
    this.setState({inputGithubValueTwo: event.target.value});
  }

  handleInputGithubChangeThree(event) {
    this.setState({inputGithubValueThree: event.target.value});
  }









handleSubmitUnitOne(event) {
  // console.log(event.target)
    event.preventDefault();

    fetch('/api/units/one', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        type: event.target.type.value,
        unit: event.target.unit.value,
        title: event.target.title.value,
        github: event.target.github.value,
        website: 'test',
        url: 'test'
      }),
    })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // console.log(responseJson);
      if (responseJson._id !== undefined) {
        const newLessonOne = {
          type: responseJson.type,
          unit: responseJson.author,
          title: responseJson.title,
          github: responseJson.github,
        }
        this.setState((prevState) => {
          // console.log(prevState)
          return {
            unitsOne: prevState.unitsOne.concat(newLessonOne),
            inputTypeValueOne: '',
            inputUnitValueOne: '',
            inputTitleValueOne: '',
            inputGithubValueOne: '',
          }
        })
      } else {
        console.log('error');
      }
    })
  }


  handleSubmitUnitTwo(event) {
    event.preventDefault();

    fetch('/api/units/two', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        type: event.target.type.value,
        unit: event.target.unit.value,
        title: event.target.title.value,
        github: event.target.github.value,
        website: 'test',
        url: 'test'
      }),
    })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // console.log(responseJson);
      if (responseJson._id !== undefined) {
        const newLessonTwo = {
          type: responseJson.type,
          unit: responseJson.author,
          title: responseJson.title,
          github: responseJson.github,
        }
        this.setState((prevState) => {
          // console.log(prevState)
          return {
            unitsTwo: prevState.unitsOne.concat(newLessonTwo),
            inputTypeValueTwo: '',
            inputUnitValueTwo: '',
            inputTitleValueTwo: '',
            inputGithubValueTwo: '',
          }
        })
      } else {
        console.log('error');
      }
    })
  }


  handleSubmitUnitThree(event) {
  // console.log(event.target)
    event.preventDefault();

    fetch('/api/units/Three', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        type: event.target.type.value,
        unit: event.target.unit.value,
        title: event.target.title.value,
        github: event.target.github.value,
        website: 'test',
        url: 'test'
      }),
    })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      // console.log(responseJson);
      if (responseJson._id !== undefined) {
        const newLessonThree = {
          type: responseJson.type,
          unit: responseJson.author,
          title: responseJson.title,
          github: responseJson.github,
        }
        this.setState((prevState) => {
          // console.log(prevState)
          return {
            unitsThree: prevState.unitsOne.concat(newLessonThree),
            inputTypeValueThree: '',
            inputUnitValueThree: '',
            inputTitleValueThree: '',
            inputGithubValueThree: '',
          }
        })
      } else {
        console.log('error');
      }
    })
  }


handleEdit(event) {
  console.log('im editing');
  event.preventDefault();
  console.log(event.target._id);
  console.log(event.target.id);
  fetch(`/api/units/${event.target.id.value}`, {
     method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        _id:event.target._id,
        type: event.target.type.value,
        unit: event.target.unit.value,
        title: event.target.title.value,
        github: event.target.github.value,
        website: 'test',
        url: 'test'
  }),
})
  .then((response) => {
    console.log(response);
      if (response.status === 200) {
        this.fetchAllUnits();
      }
    })
}

handleDelete(repoId) {
    fetch(`/api/units/${repoId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        this.fetchAllUnits();
      }
    })
  }


  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <LessonOne 
          unitsOne={this.state.unitsOne}
          handleSubmitUnitOne={this.handleSubmitUnitOne}
          handleInputTypeChangeOne={this.handleInputTypeChangeOne}
          handleInputUnitChangeOne={this.handleInputUnitChangeOne}
          handleInputTitleChangeOne={this.handleInputTitleChangeOne}
          handleInputGithubChangeOne={this.handleInputGithubChangeOne}
          inputTypeValueOne={this.state.inputTypeValueOne}
          inputUnitValueOne={this.state.inputUnitValueOne}
          inputTitleValueOne={this.state.inputTitleValueOne}
          inputGithubValueOne={this.state.inputGithubValueOne}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
           />
          <LessonTwo
          unitsTwo={this.state.unitsTwo}
          handleSubmitUnitTwo={this.handleSubmitUnitTwo}
          handleInputTypeChangeTwo={this.handleInputTypeChangeTwo}
          handleInputUnitChangeTwo={this.handleInputUnitChangeTwo}
          handleInputTitleChangeTwo={this.handleInputTitleChangeTwo}
          handleInputGithubChangeTwo={this.handleInputGithubChangeTwo}
          inputTypeValueTwo={this.state.inputTypeValueTwo}
          inputUnitValueTwo={this.state.inputUnitValueTwo}
          inputTitleValueTwo={this.state.inputTitleValueTwo}
          inputGithubValueTwo={this.state.inputGithubValueTwo}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
           />
          <LessonThree
          unitsThree={this.state.unitsThree}
          handleSubmitUnitThree={this.handleSubmitUnitThree}
          handleInputTypeChangeThree={this.handleInputTypeChangeThree}
          handleInputUnitChangeThree={this.handleInputUnitChangeThree}
          handleInputTitleChangeThree={this.handleInputTitleChangeThree}
          handleInputGithubChangeThree={this.handleInputGithubChangeThree}
          inputTypeValueThree={this.state.inputTypeValueThree}
          inputUnitValueThree={this.state.inputUnitValueThree}
          inputTitleValueThree={this.state.inputTitleValueThree}
          inputGithubValueThree={this.state.inputGithubValueThree}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
           />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
