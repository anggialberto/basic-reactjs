import React, { Component } from 'react'


class App extends Component {

  constructor() {
    super()
    this.state = {
      tinggiBadan: 0,
      hasil: ""
    }
  }

  _handleChange = (e) => {
    this.setState({ [e.target.name]: Number(e.target.value) })
  }

  render() {
    return (
      <div>
        <h1>Test Tinggi Badan</h1>
        <input
          onChange={this._handleChange}
          name="tinggiBadan"
          value={this.state.tinggiBadan}
        />
        {
          this.state.tinggiBadan > 170 ?
            (
              <h1>Hasil : Boleh Naik</h1>
            ) :
            (
              <h1>Hasil : Tidak Boleh Naik</h1>
            )
        }
      </div>
    )
  }
}

export default App