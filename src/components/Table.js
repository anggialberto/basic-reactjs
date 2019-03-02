import React from 'react'

const Table = (props) => {
  return (
    <table border="1px">
      <thead>
        <th>gravity</th>
        <th>name</th>
        <th>terrain</th>
      </thead>
      <tbody>
        {
          props.planets.map((data, index) => {
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

  )
}

export default Table
