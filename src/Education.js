import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <h3>Education</h3>
        <span className="line1">
          <span className="line1A">{ this.props.school }, { this.props.degree }</span>
          <span className="line1B">Major: { this.props.major }</span>
        </span>
        <span className="line1">
          <span className="line1A">GPA: { this.props.gpa }</span>
          <span className="line1B">Minor: { this.props.minor }</span>
        </span>
      </div>
    )
  }
}
