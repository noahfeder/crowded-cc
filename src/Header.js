import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>{ this.props.name }</h1>
        <span>{ this.props.phone } | { this.props.email }</span>
        <p>
          Objective: { this.props.objective }
        </p>
      </div>
    )
  }
}
