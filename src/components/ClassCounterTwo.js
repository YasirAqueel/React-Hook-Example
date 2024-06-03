import React, { Component } from 'react'

class ClassCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    inreamentCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.inreamentCount}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterTwo
