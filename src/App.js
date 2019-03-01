import React, { Component } from 'react';
import Paragraph from './components/Paragraph'
import Title from './components/Title'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: "Hello World of Javascript",
      textKedua: "Hello World ReactJS",
    }
  }

  _handleClick = () => {
    this.setState({
      text: "State telah berubah untuk text pertama",
      textKedua: "State telah berubah untuk text kedua"
    })
  }

  render() {
    return (
      <div>
        <Title></Title>
        <Paragraph></Paragraph>
        <p>{this.state.text}</p>
        <p>{this.state.textKedua}</p>
        <button onClick={this._handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default App
