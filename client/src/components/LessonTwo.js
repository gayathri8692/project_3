import React, { Component } from 'react';
import LessonTwoList from './LessonTwoList';

class LessonTwo extends Component {
  render() {
    return (
      <div className="lesson-two">
      <h2>Unit 2</h2>
      {this.props.unitsTwo.map((val) => {
          return (
            <LessonTwoList
            type={val.type}
            title={val.title}
            github={val.github}
            id={val._id}
            handleDelete={this.props.handleDelete}
            handleEdit={this.props.handleDelete}
            />
            )
         })}

        <div>
          <form
          onSubmit={this.props.handleSubmitUnitTwo}>
          <label>Enter Type</label>
          <input 
          name="type"
          type="text"
          value={this.props.inputTypeValueTwo}
          placeholder="Enter Type(LEC, LAB or HW)"
          onChange={this.props.handleInputTypeChangeTwo}
          />

          <label>Enter Unit</label>
          <input 
          name="unit"
          type="text"
          value={this.props.inputUnitValueTwo}
          placeholder="Enter Unit"
          onChange={this.props.handleInputUnitChangeTwo}
          />

          <label>Enter Title</label>
          <input 
          name="title"
          type="text"
          value={this.props.inputTitleValueTwo}
          placeholder="Enter Title"
          onChange={this.props.handleInputTitleChangeTwo}
          />

          <label>Enter Github Link</label>
          <input 
          name="github"
          type="text"
          value={this.props.inputGithubValueTwo}
          placeholder="Enter Link"
          onChange={this.props.handleInputGithubChangeTwo}
          />
          <input type="submit" value="Add!" />
          </form>
          </div>
      </div>
    );
  }
}

export default LessonTwo;