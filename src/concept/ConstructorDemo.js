import React, { Component } from 'react'

export default class ConstructorDemo extends Component {

    //define constructor
    constructor(props) {
        //super is use for accessing parent components properties
        super(props);
        this.state = {
            data: "ajinath",
        }
        // bind click handle method in constructor
        this.clickHandle = this.clickHandle.bind(this);
    }

    // custom method 
    clickHandle() {
        
    }
  render() {
    return (
      <div>
        {/* here used state object of constructor */}
        <h1>my name is : {this.state.data}</h1>
      </div>
    )
  }
}
