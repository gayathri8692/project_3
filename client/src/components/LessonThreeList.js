import React, { Component } from 'react';

class LessonThreeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: false,
      inputTypeValue: this.props.type,
      inputTitleValue: this.props.title,
      inputGithubValue: this.props.github,
      inputUnitValue: this.props.unit,
    }
    this.handleInputTypeChange=this.handleInputTypeChange.bind(this);
    this.handleInputTitleChange=this.handleInputTitleChange.bind(this);
    this.handleInputGithubChange=this.handleInputGithubChange.bind(this);
    this.handleInputUnitChange=this.handleInputUnitChange.bind(this);
    this.renderEditForm=this.renderEditForm.bind(this);
  }


  handleInputTypeChange(event) {
  this.setState({inputTypeValue : event.target.value})
  }

  handleInputTitleChange(event) {
    this.setState({inputTitleValue : event.target.value})
  }

  handleInputGithubChange(event) {
    this.setState({inputGithubValue : event.target.value})
  }

  handleInputUnitChange(event) {
    this.setState({inputUnitValue : event.target.value})
  }


  renderEditForm() {
  return (
    <li>
      <form 
      className="edit-form"
      onSubmit={(event) => {
        this.props.handleEdit(event);
        this.setState({isBeingEdited: false});
      }}
      >
      <input 
      type="text"
      value={this.state.inputTypeValue}
      placeholder='Enter Type'
      name='type'
      onChange={this.handleInputTypeChange}
      /><br/>

      <input 
      type="text"
      value={this.state.inputUnitValue}
      placeholder='Enter Unit'
      name='unit'
      onChange={this.handleInputUnitChange}
      /><br/>

      <input 
      type="text"
      placeholder='Enter title'
      value={this.state.inputTitleValue}
      name='title'
      onChange={this.handleInputTitleChange}
      /><br/>

      <input 
      type="text"
      value={this.state.inputGithubValue}
      placeholder='Enter Github'
      name='github'
      onChange={this.handleInputGithubChange}
      /><br/>

      <input
      style={{visibility: 'hidden'}}
      readOnly
      name="id"
      value={this.props.id}
      />
      <input type='submit' value='Submit!'/>
      </form>
    </li>
  );
}



  renderLessonThree() {
    return (
      <div className="lessonThreeList">
         <h3>{this.props.type}:  {this.props.title}</h3>
        <a>{this.props.github}</a>
        <button onClick={() => { this.props.handleDelete(this.props.id) }}>
          Delete
          </button>
        <button onClick={() => {
          this.setState({isBeingEdited: true})
        }}>
          Edit!
        </button>
      </div>
    );
  }




   render() {
    if (this.state.isBeingEdited === false) {
      return this.renderLessonThree();
    } else {
      return this.renderEditForm();
    }
  }

}

export default LessonThreeList;