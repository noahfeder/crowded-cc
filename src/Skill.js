import React, { Component } from 'react';

export default class Skill extends Component {

  fix(str) {
    return str.replace(/_/g, ' ')
      .split(' ')
      .map( el => el.charAt(0).toUpperCase() + el.substring(1) )
      .join(' ');
  }

  render() {
    return (
      <div className="skill">
        <h5>{ this.fix(this.props.title) }</h5>
        <ul>
          { this.props.list.map( el => <li key={ el }>{ el }</li> ) }
        </ul>
      </div>
      )
  }
}
