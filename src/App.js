import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      angkaPertama: 5,
      angkaKedua: 4,
      hasilPerhitungan: 0
    }
  }

  _handleClick = () => {
    const hasil = this.state.angkaPertama + this.state.angkaKedua
    this.setState({ hasilPerhitungan: hasil })
  }

  _handleChange = (event) => {
    console.log("Masuk")
    this.setState({
      [event.target.name]: Number(event.target.value)
    })
    console.log("Keluar")
  }

  render() {
    return (
      <div>
        <input
          onChange={this._handleChange}
          name="angkaPertama"
          value={this.state.angkaPertama}
        />
        <input
          onChange={this._handleChange}
          name="angkaKedua"
          value={this.state.angkaKedua}
        />
        <button onClick={this._handleClick}>Hitung!</button>
        <h1>Hasil: {this.state.hasilPerhitungan}</h1>
      </div>
    )
  }

}

export default App