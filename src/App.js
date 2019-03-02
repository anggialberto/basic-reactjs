import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      siswa: [
        { id: 1, nama: "Anggi", kelas: "3IA22" },
        { id: 2, nama: "Alberto", kelas: "3IA22" },
        { id: 3, nama: "Simarmata", kelas: "3IA22" },

      ],
      judul: "List Data Siswa"
    }
  }

  componentDidMount() {
    // Ketika method render berhasil dijalankan
    // alert("Hello World")
  }

  componentDidUpdate() {
    // Ketika ada perubahan state atau props
    alert("componentDidUpdate")
  }

  componentDidUmount() {
    // Ketika component akan di hapus / ditiadakan
  }

  render() {
    return (
      <div>
        <h1>{this.state.judul}</h1>
        <table>
          <th>ID</th>
          <th>NAMA</th>
          <th>KELAS</th>
          <tbody>
            {
              this.state.siswa.map(value => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.nama}</td>
                    <td>{value.kelas}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <button onClick={() => this.setState({ judul: "List Data Berubah" })}>
          Click me!
        </button>
      </div >
    )
  }
}

export default App