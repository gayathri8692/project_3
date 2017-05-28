import React, { Component } from 'react';
import LessonThreeList from './LessonThreeList';

class LessonThree extends Component {
  constructor() {
    super();
    this.state = {
      units: [],
      title: '',
      unitsThree: [],
      inputTypeValueThree: '',
      inputUnitValueThree: '',
      inputTitleValueThree: '',
      inputGithubValueThree: '',
    }

    this.handleSubmitUnitThree=this.handleSubmitUnitThree.bind(this);
    this.handleInputTypeChangeThree=this.handleInputTypeChangeThree.bind(this);
    this.handleInputUnitChangeThree=this.handleInputUnitChangeThree.bind(this);
    this.handleInputTitleChangeThree=this.handleInputTitleChangeThree.bind(this);
    this.handleInputGithubChangeThree=this.handleInputGithubChangeThree.bind(this);

    this.handleDeleteThree=this.handleDeleteThree.bind(this);

    this.handleEditThree=this.handleEditThree.bind(this);

  }

componentDidMount() {

  this.fetchAllUnitThree()
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

 handleInputTypeChangeThree(event) {
    this.setState({inputTypeValueThree: event.target.value});
  }


handleInputUnitChangeThree(event) {
    this.setState({inputUnitValueThree: event.target.value});
  }

 handleInputTitleChangeThree(event) {
    this.setState({inputTitleValueThree: event.target.value});
  }

handleInputGithubChangeThree(event) {
    this.setState({inputGithubValueThree: event.target.value});
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
            unitsThree: prevState.unitsThree.concat(newLessonThree),
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



handleEditThree(event) {
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
        this.fetchAllUnitThree();
      }
    })
}

handleDeleteThree(repoId) {
    fetch(`/api/units/${repoId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      // console.log(response);
      if (response.status === 200) {
        this.fetchAllUnitThree();
      }
    })
  }








  render() {
    return (
      <div className="lesson-three">
      <h3>UNIT 3</h3>
      {this.state.unitsThree.map((val) => {
        return (
          <LessonThreeList
            type={val.type}
            title={val.title}
            github={val.github}
            id={val._id}
            handleDeleteThree={this.handleDeleteThree}
            handleEditThree={this.handleEditThree}
            />
          )
        })}

        <div>
          <form
          onSubmit={this.handleSubmitUnitThree}>
          <label>Enter Type</label>
          <input 
          name="type"
          type="text"
          value={this.props.inputTypeValueThree}
          placeholder="Enter Type(LEC, LAB or HW)"
          onChange={this.handleInputTypeChangeThree}
          />

          <label>Enter Unit</label>
          <input 
          name="unit"
          type="text"
          value={this.props.inputUnitValueThree}
          placeholder="Enter Unit"
          onChange={this.handleInputUnitChangeThree}
          />

          <label>Enter Title</label>
          <input 
          name="title"
          type="text"
          value={this.props.inputTitleValueThree}
          placeholder="Enter Title"
          onChange={this.handleInputTitleChangeThree}
          />

          <label>Enter Github Link</label>
          <input 
          name="github"
          type="text"
          value={this.props.inputGithubValueThree}
          placeholder="Enter Link"
          onChange={this.handleInputGithubChangeThree}
          />
          <input type="submit" value="Add!" />
          </form>
          </div>
      </div>
    );
  }
}

export default LessonThree;