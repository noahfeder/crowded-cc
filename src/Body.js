import React, { Component } from 'react';
import History from './History';
import Education from './Education';

export default class Body extends Component {
  histories() {
    let hists = [];
    for (let key in this.props) {
      if (key.match(/hist/)) {
        hists.push(this.props[key]);
      }
    }
    return hists.map( el => <History key={ el.company } { ...el } /> );
  }

  render() {
    return (
      <div className="experience">
        <h3>Experience</h3>
        { this.histories() }
        <Education {...this.props} />
      </div>
      )
  }
}
