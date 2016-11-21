import React, { Component } from 'react';
import Skill from './Skill';

export default class Sidebar extends Component {

  skills(data) {
    let skills = [];
    for (let key in data) {
      if (typeof key === 'string') {
          skills.push(<Skill key={ key } title={ key } list={ data[key] } /> )
      }
    }
    return skills;
  }

  render() {
    return (
      <div className="sidebar">
        <h3>Skills</h3>
        { this.skills(this.props.skills) }
      </div>
    )
  }
}
