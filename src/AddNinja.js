import React, { Component } from 'react';

class AddNinja extends Component{
  state = {
    name: null,
    age: null,
    belt: null
  }
  handleChange = (e) => {
    this.setState({
      
    })
  }
  render (){
    return(
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={} />
          <label htmlFor="belt">Belt:</label>
          <input type="text" id="belt" onChange={} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}