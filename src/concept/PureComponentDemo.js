
//when we use expend react.pureComponent then componenut no more need to use shouldComponentUpdate() method, pure component decide for re-rendering the component, if props or state is change then old in this case on component is re-render.
import React, { PureComponent } from 'react'

const handleClick = ()=> {
    this.setState({data:10});
}   
export class PureComponentDemo extends PureComponent {

    constructor() {
        super();
        this.state = {
            data :10,
        }
    }   
  render() {
    console.warn(this.state.data)
    return (
      <div> 
        <h1>pure component : {this.state.data}</h1>
        {/* <button onClick={handleClick}>Update state</button> */}
        <button onClick={()=>{this.setState({data:20})}}>Update state</button>
      </div>
    )
  }
}

export default PureComponentDemo
