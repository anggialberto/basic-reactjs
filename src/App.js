import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: "0"
    };
    this.operateNum = this.operateNum.bind(this);
  }

  operateNum(e) {
    try {
      const result = eval(e.target.value)
      this.setState({
        num: result
      });
    } catch (err) {
      console.log(err)
    }

  }

  render() {
    return (
      <div>
        <label for='number'>Input Number : </label><input type='text' name='number' onChange={this.operateNum.bind(this)}></input>
        <p id='result'>{this.state.num}</p>
      </div>
    );
  }
}

export default App;
