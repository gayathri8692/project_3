import React, { Component } from 'react';
import LessonOneList from './LessonOneList';

class LessonOne extends Component {
  render() {
    return (
      <div className="lesson-one">
      <h2>UNIT 1</h2>
      {this.props.unitsOne.map((val, key) => {
        // console.log(val);
          return (
            <LessonOneList
          type={val.type}
          unit={val.unit}
          title={val.title}
          github={val.github}
          id={val._id}
          handleDelete={this.props.handleDelete}
          handleEdit={this.props.handleEdit}
          />
          )
        })}
          <div>

          <form
          onSubmit={this.props.handleSubmitUnitOne}>
          <label>Enter Type</label>
          <input 
          name="type"
          type="text"
          value={this.props.inputTypeValueOne}
          placeholder="Enter Type(LEC, LAB or HW)"
          onChange={this.props.handleInputTypeChangeOne}
          />

          <label>Enter Unit</label>
          <input 
          name="unit"
          type="text"
          value={this.props.inputUnitValueOne}
          placeholder="Enter Unit"
          onChange={this.props.handleInputUnitChangeOne}
          />

          <label>Enter Title</label>
          <input 
          name="title"
          type="text"
          value={this.props.inputTitleValueOne}
          placeholder="Enter Title"
          onChange={this.props.handleInputTitleChangeOne}
          />

          <label>Enter Github Link</label>
          <input 
          name="github"
          type="text"
          value={this.props.inputGithubValueOne}
          placeholder="Enter Link"
          onChange={this.props.handleInputGithubChangeOne}
          />
          <input type="submit" value="Add!" />
          </form>
          
          </div>
      </div>
    );
  }
}

export default LessonOne;