import React, { Component } from 'react';
import LessonTwoList from './LessonTwoList';


class LessonTwo extends Component {
  constructor() {
    super();
    this.state = {
      // units: [],
      title: '',
      unitsTwo: [],
      inputTypeValueTwo: '',
      inputUnitValueTwo: '',
      inputTitleValueTwo: '',
      inputGithubValueTwo: '',
  }

    this.handleSubmitUnitTwo=this.handleSubmitUnitTwo.bind(this);
    this.handleInputTypeChangeTwo=this.handleInputTypeChangeTwo.bind(this);
    this.handleInputUnitChangeTwo=this.handleInputUnitChangeTwo.bind(this);
    this.handleInputTitleChangeTwo=this.handleInputTitleChangeTwo.bind(this);
    this.handleInputGithubChangeTwo=this.handleInputGithubChangeTwo.bind(this);

    this.handleDeleteTwo=this.handleDeleteTwo.bind(this);

    this.handleEditTwo=this.handleEditTwo.bind(this);
  }


componentDidMount() {
  // this.fetchAllUnits()
  this.fetchAllUnitTwo()
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

handleInputTypeChangeTwo(event) {
    this.setState({inputTypeValueTwo: event.target.value});
  }

handleInputUnitChangeTwo(event) {
    this.setState({inputUnitValueTwo: event.target.value});
  }

handleInputTitleChangeTwo(event) {
    this.setState({inputTitleValueTwo: event.target.value});
  }

handleInputGithubChangeTwo(event) {
    this.setState({inputGithubValueTwo: event.target.value});
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
            unitsTwo: prevState.unitsTwo.concat(newLessonTwo),
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

  handleEditTwo(event) {
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
        this.fetchAllUnitTwo();
      }
    })
}

handleDeleteTwo(repoId) {
    fetch(`/api/units/${repoId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        this.fetchAllUnitTwo();
      }
    })
  }



render() {
    return (
      <div className="lesson-two">
      <h2>Unit 2</h2>
      {this.state.unitsTwo.map((val) => {
          return (
            <LessonTwoList
            type={val.type}
            title={val.title}
            github={val.github}
            id={val._id}
            handleDeleteTwo={this.handleDeleteTwo}
            handleEditTwo={this.handleEditTwo}
            />
            )
         })}

        <div>
          <form
          onSubmit={this.state.handleSubmitUnitTwo}>
          <label>Enter Type</label>
          <input 
          name="type"
          type="text"
          value={this.state.inputTypeValueTwo}
          placeholder="Enter Type(LEC, LAB or HW)"
          onChange={this.handleInputTypeChangeTwo}
          />

          <label>Enter Unit</label>
          <input 
          name="unit"
          type="text"
          value={this.state.inputUnitValueTwo}
          placeholder="Enter Unit"
          onChange={this.handleInputUnitChangeTwo}
          />

          <label>Enter Title</label>
          <input 
          name="title"
          type="text"
          value={this.state.inputTitleValueTwo}
          placeholder="Enter Title"
          onChange={this.handleInputTitleChangeTwo}
          />

          <label>Enter Github Link</label>
          <input 
          name="github"
          type="text"
          value={this.state.inputGithubValueTwo}
          placeholder="Enter Link"
          onChange={this.handleInputGithubChangeTwo}
          />
          <input type="submit" value="Add!" />
          </form>
          </div>
      </div>
    );
  }
}

export default LessonTwo;