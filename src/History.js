import React, { Component } from 'react';

export default class History extends Component {

  exp() {
    let exp = [];
    for (let key in this.props) {
      if (key.match(/task/)) {
        exp.push(this.props[key]);
      }
    }
    return exp.map( el => <li key={ el }>{ el }</li> );
  }

  render() {
    return (
      <div className="history">
        <p className="line1">
          <span className="line1A">{ this.props.company } - <i>{ this.props.title }</i></span>
          <span className="line1B">{ this.props.dates }</span>
        </p>
        <ul>
          { this.exp() }
        </ul>
      </div>
    )
  }
}
