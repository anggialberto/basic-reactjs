import React, { Component } from 'react'
import axios from 'axios'


class App extends Component {

  constructor() {
    super()
    this.state = {
      tinggiBadan: 0,
      siswa: [
        { id: 1, nama: "Anggi", kelas: "3IA22" },
        { id: 2, nama: "Alberto", kelas: "3AI22" },
        { id: 3, nama: "Simarmata", kelas: "3IA22" }
      ],
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
        <table border="1px">
          <thead>
            <th>gravity</th>
            <th>name</th>
            <th>terrain</th>
          </thead>
          <tbody>
            {
              this.state.planets.map((data, index) => {
                return (
                  <tr>
                    <td>{data.gravity}</td>
                    <td>{data.name}</td>
                    <td>{data.terrain}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App