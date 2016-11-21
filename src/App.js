import React, { Component } from 'react';
import './App.css';
import SAMPLE from './sample_resume';

import Sidebar from './Sidebar';
import Header from './Header';
import Body from './Body';

const employmentRegex = /Title:\s+(.+)\nCompany:\s+(.+)\nDates:\s+(.+)\n\*\s(.+)\n\*\s(.+)\n\*\s(.+)\n/i

class App extends Component {

  render() {
    let data = {};
    SAMPLE.split('\n').forEach( (el,ind) => {
      switch (ind) {
        case 0: case 1: case 2: case 27: case 28: case 29: case 30: case 31:
          let spl = el.split(': ');
          data[spl[0].toLowerCase()] = spl[1];
          break;
        case 5:
          data.objective = el;
          break;
        case 8: case 9:
          data.skills = data.skills || {};
          let spl2 = el.split(': ');
          data.skills[spl2[0].toLowerCase().replace(/ /,'_')] = spl2[1].split(', ');
          break;
        case 11: case 19:
          data[`hist${ind}`] = {};
          [data.trash,
           data[`hist${ind}`].title,
           data[`hist${ind}`].company,
           data[`hist${ind}`].dates,
           data[`hist${ind}`].task1,
           data[`hist${ind}`].task2,
           data[`hist${ind}`].task3] = SAMPLE.substr(SAMPLE.indexOf(el)).match(employmentRegex);
          break;
        default: return;
      }
    })
    delete data.trash;
    console.log(data)
    return (
      <div className="App">
        <Header  { ...data } />
        <div className="body">
          <Sidebar skills={ data.skills } />
          <Body { ...data } />
        </div>
      </div>
    );
  }
}

export default App;
