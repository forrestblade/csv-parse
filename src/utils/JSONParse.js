import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PapaParse from 'papaparse'

export default class JSONParse extends Component {
  static propTypes = {
    data: PropTypes.string,
    configOptions: PropTypes.object
  }

  state = {
    data: {}
  }

  parseJSON = (e, config) => {
    let csv = PapaParse.unparse(e)
    let csvContent = 'data:text/csv;charset=utf-8,' + csv
    let encodedUri = encodeURI(csvContent)
    let link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'my_data.csv')
    document.body.appendChild(link)
    link.click()
  }

  render () {
    const {
      data,
      configOptions = {}
    } = this.state

    return (
      <div>
        <textarea onChange={e => this.setState({ data: e.target.value })} rows='20' cols='90' />
        <br />
        <button className='export' onClick={() => this.parseJSON(data, configOptions)} >
          Export
        </button>
      </div>
    )
  }
}
