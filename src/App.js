import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialSpecies: [],
      items: []
    }
  }

  searchSpecies(event) {
    let updatedList = this.state.initialSpecies
    try {
      updatedList = updatedList.filter(function (item) {
        return item.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
      this.setState({ items: updatedList });
    } catch (err) {
      console.log(err)
    }
  }

  async componentWillMount() {
    try {
      const res = await axios.get(`https://swapi.co/api/species`)
      const resItem = res.data.results.map((v) => {
        return v.name
      })
      this.setState({
        initialSpecies: resItem,
        items: resItem
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        <h1>List Data Species Starwars</h1>
        <input type="text" placeholder="Pencarian..." onChange={this.searchSpecies.bind(this)}></input>
        <h3>Nama</h3>
        {this.state.items.length > 0
          ? this.state.items.map((v) => {
            return (
              <p>{v}</p>
            )
          })
          : <p><b>Tidak ditemukan!</b></p>
        }
      </div>
    );
  }
}

export default App;
