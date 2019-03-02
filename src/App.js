import React, { Component } from 'react'
import axios from 'axios'
import Table from './components/Table'


class App extends Component {

  constructor() {
    super()
    this.state = {
      planets: []
    }
  }

  _handleChange = (e) => {
    this.setState({ [e.target.name]: Number(e.target.value) })
  }

  _handleClick = () => {
    axios.get("https://swapi.co/api/planets")
      .then(res => {
        this.setState({ planets: res.data.results })
      })
      .catch(err => {
        console.error(err)
      });
  }

  render() {
    return (
      <div>
        <button onClick={this._handleClick}>Tampilkan Planet</button>
        <h1>List Data Star Wars</h1>
        <Table planets={this.state.planets} />
      </div>
    )
  }
}

export default App