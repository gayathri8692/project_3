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
      featuredUnit: null,
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
    
      <form 
      className="edit-form"
      onSubmit={(event) => {
        this.props.handleEditOne(event);
        this.setState({isBeingEdited: false});
      }}
      >
      
      <label>
      Enter Type
      <input 
      type="text"
      value={this.state.inputTypeValue}
      name='type'
      onChange={this.handleInputTypeChange}
      /><br/>
      </label>

      <label>
      Enter Unit
      <input 
      type="text"
      value={this.state.inputUnitValue}
      name='unit'
      onChange={this.handleInputUnitChange}
      /><br/>
      </label>

      <label>
      Enter Title
      <input 
      type="text"
      value={this.state.inputTitleValue}
      name='title'
      onChange={this.handleInputTitleChange}
      /><br/>
      </label>


      <label>
      Enter Link
      <input 
      type="text"
      value={this.state.inputGithubValue}
      name='github'
      onChange={this.handleInputGithubChange}
      /><br/>
      </label>

      <input
      style={{visibility: 'hidden'}}
      readOnly
      name="id"
      value={this.props.id}
      />
      

      <input className='submit-edit' type='submit' value='Submit!'/>
      </form>
 
  );
}

  renderLessonOne() {
    return (

      <div className='lesson'>   
        <p className='h3-one'>{this.props.type}</p>
        <span className='one-title'>{this.props.title}</span>
        
        <a href={this.props.github} target="_blank" className='linkOne'> Github link</a>
        <button onClick={() => { this.props.handleDeleteOne(this.props.id) }} className='delOne'>
          Delete!
        </button>
       

        <button onClick={() => {
          this.setState({isBeingEdited: true})
        }} className='editOne'>
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