import React, { Component } from 'react';
import Ninjas from './Ninjas';
import './style.css';

export default class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'white', id: 2 },
      { name: 'Crystal', age: 25, belt: 'red', id: 3 },
    ],
  };
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}
