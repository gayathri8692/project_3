import React, { Component } from 'react';
import LessonThreeList from './LessonThreeList';

class LessonThree extends Component {
  render() {
    return (
      <div className="lesson-three">
      <h3>UNIT 3</h3>
      {this.props.unitsThree.map((val) => {
        return (
          <LessonThreeList
            type={val.type}
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
          onSubmit={this.props.handleSubmitUnitThree}>
          <label>Enter Type</label>
          <input 
          name="type"
          type="text"
          value={this.props.inputTypeValueThree}
          placeholder="Enter Type(LEC, LAB or HW)"
          onChange={this.props.handleInputTypeChangeThree}
          />

          <label>Enter Unit</label>
          <input 
          name="unit"
          type="text"
          value={this.props.inputUnitValueThree}
          placeholder="Enter Unit"
          onChange={this.props.handleInputUnitChangeThree}
          />

          <label>Enter Title</label>
          <input 
          name="title"
          type="text"
          value={this.props.inputTitleValueThree}
          placeholder="Enter Title"
          onChange={this.props.handleInputTitleChangeThree}
          />

          <label>Enter Github Link</label>
          <input 
          name="github"
          type="text"
          value={this.props.inputGithubValueThree}
          placeholder="Enter Link"
          onChange={this.props.handleInputGithubChangeThree}
          />
          <input type="submit" value="Add!" />
          </form>
          </div>
      </div>
    );
  }
}

export default LessonThree;