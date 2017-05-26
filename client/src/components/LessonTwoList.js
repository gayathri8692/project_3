import React, { Component } from 'react';

class LessonTwoList extends Component {
  render() {
    return (
      <div className="lessonTwoList">
        <h3>{this.props.type}:  {this.props.title}</h3>
        <a href='#'>{this.props.github}</a>
        <button onClick={() => { this.props.handleDelete(this.props.id) }}>
          Delete
          </button>
      </div>
    );
  }
}

export default LessonTwoList;