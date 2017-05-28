import React, { Component } from 'react';


class LessonOneList extends Component {
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
      className="edit-one"
      onSubmit={(event) => {
        this.props.handleEditOne(event);
        this.setState({isBeingEdited: false});
      }}
      >
      <input 
      type="text"
      value={this.state.inputTypeValue}
      name='type'
      onChange={this.handleInputTypeChange}
      /><br/>

      <input 
      type="text"
      value={this.state.inputUnitValue}
      name='unit'
      onChange={this.handleInputUnitChange}
      /><br/>

      <input 
      type="text"
      value={this.state.inputTitleValue}
      name='title'
      onChange={this.handleInputTitleChange}
      /><br/>

      <input 
      type="text"
      value={this.state.inputGithubValue}
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

  renderLessonOne() {
    return (
      <div className="lessonOneList">
 
        <h3>{this.props.type}:  {this.props.title}</h3>
        <a href={this.props.github}>Github link</a>
      
        <button onClick={() => { this.props.handleDeleteOne(this.props.id) }}>
          Delete!
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
      return this.renderLessonOne();
    } else {
      return this.renderEditForm();
    }
  }

}

export default LessonOneList;