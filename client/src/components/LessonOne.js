import React, { Component } from 'react';
import LessonOneList from './LessonOneList';

class LessonOne extends Component {
  constructor() {
    super();
    this.state = {
      // units: [],
      title: '',
      unitsOne: [],
      inputTypeValueOne: '',
      inputUnitValueOne: '',
      inputTitleValueOne: '',
      inputGithubValueOne: '',
  }
    this.handleSubmitUnitOne=this.handleSubmitUnitOne.bind(this);
    this.handleInputTypeChangeOne=this.handleInputTypeChangeOne.bind(this);
    this.handleInputUnitChangeOne=this.handleInputUnitChangeOne.bind(this);
    this.handleInputTitleChangeOne=this.handleInputTitleChangeOne.bind(this);
    this.handleInputGithubChangeOne=this.handleInputGithubChangeOne.bind(this);

    this.handleDeleteOne=this.handleDeleteOne.bind(this);

    this.handleEditOne=this.handleEditOne.bind(this);
  }


componentDidMount() {
  // this.fetchAllUnits()
  this.fetchAllUnitOne()
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


handleInputTypeChangeOne(event) {
    this.setState({inputTypeValueOne: event.target.value});
  }

  handleInputUnitChangeOne(event) {
    this.setState({inputUnitValueOne: event.target.value});
  }


handleInputTitleChangeOne(event) {
    this.setState({inputTitleValueOne: event.target.value});
  }

handleInputGithubChangeOne(event) {
    this.setState({inputGithubValueOne: event.target.value});
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


handleEditOne(event) {
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
        this.fetchAllUnitOne();
      }
    })
}

handleDeleteOne(repoId) {
    fetch(`/api/units/${repoId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        this.fetchAllUnitOne();
      }
    })
  }







  render() {
    return (
      <div className="lesson-one">
      <h2>UNIT 1</h2>
      {this.state.unitsOne.map((val, key) => {
        // console.log(val);
          return (
            <LessonOneList
          type={val.type}
          unit={val.unit}
          title={val.title}
          github={val.github}
          id={val._id}
          handleDeleteOne={this.handleDeleteOne}
          handleEditOne={this.handleEditOne}
          />
          )
        })}
          <div>

          <form
          onSubmit={this.handleSubmitUnitOne}>
          <label>Enter Type</label>
          <input 
          name="type"
          type="text"
          value={this.state.inputTypeValueOne}
          placeholder="Enter Type(LEC, LAB or HW)"
          onChange={this.handleInputTypeChangeOne}
          />

          <label>Enter Unit</label>
          <input 
          name="unit"
          type="text"
          value={this.state.inputUnitValueOne}
          placeholder="Enter Unit"
          onChange={this.handleInputUnitChangeOne}
          />

          <label>Enter Title</label>
          <input 
          name="title"
          type="text"
          value={this.state.inputTitleValueOne}
          placeholder="Enter Title"
          onChange={this.handleInputTitleChangeOne}
          />

          <label>Enter Github Link</label>
          <input 
          name="github"
          type="text"
          value={this.state.inputGithubValueOne}
          placeholder="Enter Link"
          onChange={this.handleInputGithubChangeOne}
          />
          <input type="submit" value="Add!" />
          </form>
          
          </div>
      </div>
    );
  }
}

export default LessonOne;